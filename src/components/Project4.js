import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import R1L from "../assets/R1L.png"
import R1R from "../assets/R1R.png"
import GIF2 from "../assets/GIF2.gif"


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "50% 50%",
        [theme.breakpoints.down('sm')]: {
            height: "100vh",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
        },
    },

    innerContainer: {
        display: "flex",
        justifyContect: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",

    },
    innerContainerGif: {
        display: "flex",
        justifyContect: "center",
        alignItems: "center",
        height: "100%",
        position: "relative",
        flexDirection: "column",
        width: "100%",

    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        display: "flex",
        margin: "auto",
    },
    gif: {
        display: "flex",
        zIndex: 9,
        position: "absolute",
        margin: "auto",
        top: "20%",
        width: 300,
        height: 300,
        objectFit: "contain",

    },
}));

function Project4() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <div className={classes.innerContainer}>
                    <img src={R1R} alt="Project image" className={classes.image} />

                </div>
                <div className={classes.innerContainerGif}>
                    <img src={GIF2} alt="Project image" className={classes.gif} />

                    <img src={R1L} alt="Project image" className={classes.image} />

                </div>

            </div>

        </>
    );
}

export default Project4;