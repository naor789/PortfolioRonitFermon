import React from 'react';
import { makeStyles } from '@material-ui/core/styles';



const appgif = "https://res.cloudinary.com/pet-adoption/image/upload/v1665470380/ronitF/appgif_pkldcu.gif"
const appgif2 = "https://res.cloudinary.com/pet-adoption/image/upload/v1665470380/ronitF/appgif2_ggfjiy.gif"
const appgif3 = "https://res.cloudinary.com/pet-adoption/image/upload/v1665470379/ronitF/appgif3_lxou8r.gif"


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "120vh",
        margin: "auto",
        [theme.breakpoints.down('sm')]: {
            width: "100vw",
            flexDirection: "column",
        },
    },


    image: {
        height: "60vh",
        objectFit: "contain",
        display: "flex",
        margin: 40,
        [theme.breakpoints.down('sm')]: {
            height: "35vh",
        },
    },

}));

function Project1Content2() {
    const classes = useStyles();

    return (
        <>

            <div className={classes.root}>
                <img src={appgif} alt="Project image" className={classes.image} />

                <img src={appgif2} alt="Project image" className={classes.image} />


                <img src={appgif3} alt="Project image" className={classes.image} />


            </div>
        </>
    );
}

export default Project1Content2;