import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as RouterLink, withRouter } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Footer from "../../../components/Common/Footer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    '@global': {
        ul: {
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
        textDecoration: "none",
        '&:hover': {
            textDecoration: 'none',
        }
    },
    noUnderline: {
        '&:hover': {
            textDecoration: 'none',
        }
    },
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
    main: {
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
}));

const NotFound = (props) => {
    const classes = useStyles();
    const goBack = () => {
        props.history.goBack();
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        <Link to='/' component={RouterLink} color="textPrimary" className={classes.noUnderline}>
                            Delivery Express
                        </Link>
                    </Typography>
                    <nav>
                        <Link variant="button" color="textPrimary" to="/about" className={classes.link} component={RouterLink}>
                            About
                        </Link>
                        <Link variant="button" color="textPrimary" to="/about" className={classes.link} component={RouterLink}>
                            Support
                        </Link>
                    </nav>
                    <Button to="/login" color="primary" variant="outlined" className={classes.link} component={RouterLink}>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
            <Container component="main" className={classes.main} maxWidth="sm">
                <Typography variant="h1" component="h1" gutterBottom>
                    404
                </Typography>
                <Typography variant="h2" component="h1" gutterBottom>
                    Page Not Found
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    {"This page doesn't exist."}
                </Typography>
                <Typography variant="h5" component="h2" gutterBottom>
                    {"Please check the URL and try again"}
                </Typography>
                <Link to="#" onClick={goBack} className={classes.link} component={RouterLink}>
                    > Go Back
                </Link>
            </Container>
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Footer />
                </Container>
            </footer>
        </div>
    );
}
export default withRouter(NotFound);
