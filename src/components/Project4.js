import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const R1L = "https://res.cloudinary.com/pet-adoption/image/upload/v1665470386/ronitF/R1L_fi03ju.png"
const R1R = "https://res.cloudinary.com/pet-adoption/image/upload/v1665522793/ronitF/H2_R_jkcwtt.png"
const GIF2 = "https://res.cloudinary.com/pet-adoption/image/upload/v1665470383/ronitF/GIF2_n578lw.gif"


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        display: "grid",
        gridTemplateColumns: "50% 50%",
        [theme.breakpoints.down('sm')]: {
            height: "fit-content",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            height: "fit-content",

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
        top: "17%",
        width: 300,
        height: 300,
        objectFit: "contain",
        [theme.breakpoints.down('sm')]: {
            width: 200,
            height: 200,
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: 250,
            height: 250,

        },
    },
}));

function Project4() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root} id="project4">
                <div className={classes.innerContainer}>
                    <img src={R1R} alt="Project" className={classes.image} />

                </div>
                <div className={classes.innerContainerGif}>
                    <img src={GIF2} alt="Project" className={classes.gif} />

                    <img src={R1L} alt="Project" className={classes.image} />

                </div>

            </div>

        </>
    );
}

export default Project4;