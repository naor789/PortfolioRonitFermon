import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const H3L = "https://res.cloudinary.com/pet-adoption/image/upload/v1665470381/ronitF/H3-L_zwsgax.png"
const H3R = "https://res.cloudinary.com/pet-adoption/image/upload/v1665470384/ronitF/H3-R_hzmwkr.png"


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
                    <img src={H3L} alt="Project" className={classes.image} />

                </div>
                <div className={classes.innerContainer}>
                    <img src={H3R} alt="Project" className={classes.image} />


                </div>

            </div>
        </>
    );
}

export default Project2Content2;