import React from 'react'
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    link: {
        margin: theme.spacing(1, 1.5),
        textDecoration: "none",
        '&:hover': {
            textDecoration: 'none',
        }
    }
}));
const Footer = () =>{
    const classes = useStyles();
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href='https://www.gustavodecker.com' className={classes.link}>
                Gustavo Decker
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Footer;
