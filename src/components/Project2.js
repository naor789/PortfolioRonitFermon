import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const H1L = "https://res.cloudinary.com/pet-adoption/image/upload/v1665470403/ronitF/H1-L_j5eeb1.png"
const H1R = "https://res.cloudinary.com/pet-adoption/image/upload/v1665470382/ronitF/H1-R_aprmdr.png"


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
            <div className={classes.root} id="project2">
                <div className={classes.innerContainer}>
                    <img src={H1R} alt="Project" className={classes.image} />

                </div>
                <div className={classes.innerContainer}>
                    <img src={H1L} alt="Project" className={classes.image} />


                </div>

            </div>

        </>
    );
}

export default Project2;