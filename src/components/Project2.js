import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import H1L from "../assets/H1-L.png"
import H1R from "../assets/H1-R.png"


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

function Project2() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <div className={classes.innerContainer}>
                    <img src={H1R} alt="Project image" className={classes.image} />

                </div>
                <div className={classes.innerContainer}>
                    <img src={H1L} alt="Project image" className={classes.image} />


                </div>

            </div>

        </>
    );
}

export default Project2;