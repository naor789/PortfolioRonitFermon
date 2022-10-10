import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagmar1L from "../assets/Pagmar1L.png"
import Pagmar1R from "../assets/Pagmar1R.png"


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

function Project1Content() {
    const classes = useStyles();

    return (
        <>

            <div className={classes.root}>
                <div className={classes.innerContainer}>
                    <img src={Pagmar1L} alt="Project image" className={classes.image} />

                </div>
                <div className={classes.innerContainer}>
                    <img src={Pagmar1R} alt="Project image" className={classes.image} />


                </div>

            </div>
        </>
    );
}

export default Project1Content;