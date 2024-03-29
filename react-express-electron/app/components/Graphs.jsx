import React from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/ArrowBack';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';


function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    root: {
        backgroundColor: theme.palette.background.default,
        width: '100%',
    },
    rootPaper: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    },
});

const themeButton = createMuiTheme({
    palette: {
        primary: {
            main: '#571995',
          },
    },
});

class Graphs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {
        const { classes, theme } = this.props;

        return (
            <div>
                <MuiThemeProvider theme={themeButton}>
                    <Button variant="contained" color='primary' className={classes.button} component={Link} to="/results">
                        <SendIcon>send</SendIcon>
                        Volver a Resultados
                    </Button>
                </MuiThemeProvider>

                <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                    <div>
                        <Paper className={classes.rootPaper} elevation={1}>
                            <Typography variant="headline" component="h3">
                                Gráficos de la acción
                            </Typography>
                            <Typography component="p">
                                desde XXYYY a ZZZZ.
                            </Typography>
                        </Paper>
                    </div>
                </Slide>
                <Slide direction="up" in={true} mountOnEnter unmountOnExit>
                    <div className={classes.root}>
                        <AppBar position="static" color="inherit">
                            <Tabs
                                value={this.state.value}
                                onChange={this.handleChange}
                                indicatorColor="primary"
                                textColor="primary"
                                fullWidth
                            >
                                <Tab label="Item One" />
                                <Tab label="Item Two" />
                                <Tab label="Item Three" />
                            </Tabs>
                        </AppBar>
                        <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={this.state.value}
                            onChangeIndex={this.handleChangeIndex}
                        >
                            <TabContainer dir={theme.direction}>{this.props.location.state.hola}</TabContainer>
                            <TabContainer dir={theme.direction}>Item Two</TabContainer>
                            <TabContainer dir={theme.direction}>Item Three</TabContainer>
                        </SwipeableViews>
                    </div>
                </Slide>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(withRouter(Graphs));