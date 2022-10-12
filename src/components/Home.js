import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const somo = "https://res.cloudinary.com/pet-adoption/image/upload/v1665470399/ronitF/somo_hkatnc.jpg"

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "100vh",
        position: "relative",
        [theme.breakpoints.down('sm')]: {
            height: "40vh",
            width: "100vw",

        },
        [theme.breakpoints.between('sm', 'md')]: {
            height: "60vh",
            width: "100vw",

        },
    },
    headerWrapper: {
        position: "absolute",
        top: "20%",
        left: "40%",
        [theme.breakpoints.down('sm')]: {
            top: "10%",
            // left: "30%",
        },
    },
    title: {
        fontSize: 50,
        fontWeight: "bold",
        [theme.breakpoints.down('sm')]: {
            fontSize: 38,
        },
    },
    subtitle: {
        fontSize: 30,

        [theme.breakpoints.down('sm')]: {
            fontSize: 23,
        },

    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        [theme.breakpoints.down('sm')]: {
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: -1
        },
        [theme.breakpoints.between('sm', 'md')]: {
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: -1

        },
    },
}));

export default function Home() {
    const classes = useStyles();



    return (
        <div className={classes.root}>
            <div className={classes.headerWrapper}>
                <div className={classes.title}>
                    Ronit Fermon
                </div>
                <div className={classes.subtitle}>
                    Product Designer
                </div>

            </div>
            <img src={somo} alt="Project" className={classes.image} />

        </div>
    );
}

