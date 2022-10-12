import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const S3R = "https://res.cloudinary.com/pet-adoption/image/upload/v1665504825/ronitF/S3R_hgbq32.jpg"
const S3L = "https://res.cloudinary.com/pet-adoption/image/upload/v1665470387/ronitF/S3L_e9a551.png"


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

function Project3() {
    const classes = useStyles();

    return (
        <>
            <div className={classes.root} id="project3">
                <div className={classes.innerContainer}>
                    <img src={S3L} alt="Project" className={classes.image} />

                </div>
                <div className={classes.innerContainer}>
                    <img src={S3R} alt="Project" className={classes.image} />


                </div>

            </div>

        </>
    );
}

export default Project3;