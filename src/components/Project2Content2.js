import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import H3L from "../assets/H3-L.png"
import H3R from "../assets/H3-R.png"


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
    },

    image: {
        width: "100%",
        height: "100%",
    },

}));

function Project2Content2() {
    const classes = useStyles();

    return (
        <>

            <div className={classes.root}>
                <div className={classes.innerContainer}>
                    <img src={H3L} alt="Project image" className={classes.image} />

                </div>
                <div className={classes.innerContainer}>
                    <img src={H3R} alt="Project image" className={classes.image} />


                </div>

            </div>
        </>
    );
}

export default Project2Content2;