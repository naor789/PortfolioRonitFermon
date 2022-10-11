import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const Pagmar1L = "https://res.cloudinary.com/pet-adoption/image/upload/v1665470411/ronitF/Pagmar1L_rt8b4y.png"
const Pagmar1R = "https://res.cloudinary.com/pet-adoption/image/upload/v1665470398/ronitF/Pagmar1R_syf2o3.png"


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
                    <img src={Pagmar1L} alt="Project" className={classes.image} />

                </div>
                <div className={classes.innerContainer}>
                    <img src={Pagmar1R} alt="Project" className={classes.image} />


                </div>

            </div>
        </>
    );
}

export default Project1Content;