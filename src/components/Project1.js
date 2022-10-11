import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const Flip = "https://res.cloudinary.com/pet-adoption/image/upload/v1665470400/ronitF/Flip_wkdfx6.png"
const Pagmar3R = "https://res.cloudinary.com/pet-adoption/image/upload/v1665470385/ronitF/Pagmar3R_z8ac4b.png"


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
        height: "100%"


    },

    image: {
        width: "100%",
        height: "100%",
        objectFit: "contain",
        display: "flex",
        margin: "auto"
    },

}));

function Project1() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <div className={classes.innerContainer}>
                    <img src={Pagmar3R} alt="Project image" className={classes.image} />

                </div>
                <div className={classes.innerContainer}>
                    <img src={Flip} alt="Project image" className={classes.image} />


                </div>

            </div>

        </>
    );
}

export default Project1;