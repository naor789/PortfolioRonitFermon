import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const H2L = "https://res.cloudinary.com/pet-adoption/image/upload/v1665470387/ronitF/H2-L_b8bsq5.png"
const H2R = "https://res.cloudinary.com/pet-adoption/image/upload/v1665470411/ronitF/H2-R_c4id1n.png"


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

function Project2Content() {
    const classes = useStyles();

    return (
        <>

            <div className={classes.root}>
                <div className={classes.innerContainer}>
                    <img src={H2R} alt="Project image" className={classes.image} />

                </div>
                <div className={classes.innerContainer}>
                    <img src={H2L} alt="Project image" className={classes.image} />


                </div>

            </div>
        </>
    );
}

export default Project2Content;