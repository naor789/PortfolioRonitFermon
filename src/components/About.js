import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const profilePicture = "https://res.cloudinary.com/pet-adoption/image/upload/v1665470394/ronitF/N_S-1098_owakdw.jpg"


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "50vh",
        display: "grid",
        gridTemplateColumns: "50% 50%",
        [theme.breakpoints.down('sm')]: {
            height: "60vh",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
        },
    },

    innerContainerRigth: {
        display: "flex",
        justifyContect: "center",
        alignItems: "center"

    },
    innerContainerLeft: {
        display: "flex",
        justifyContect: "center",
        alignItems: "center"

    },
    image: {
        width: "30vw",
        height: "30vh",
        objectFit: "contain",
        display: "flex",
        margin: "auto",
        [theme.breakpoints.down('sm')]: {
            width: "50vw",
            height: "25vh",
            margin: "20px auto"
        },
    },
    text: {
        fontSize: 20,
        width: "80%",
        lineHeight: 1.5,
        margin: "auto",
        [theme.breakpoints.down('sm')]: {
            fontSize: 23,
            width: "100%",
            margin: "auto 15px",
            lineHeight: 1.7,


        },
    },
}));



function About() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.innerContainerRigth}>
                <img src={profilePicture} alt="Project image" className={classes.image} />

            </div>
            <div className={classes.innerContainerLeft}>
                <div className={classes.text}>

                    Hello! I’m Ronit, a product designer with background of science and creativity. I work with teams to define product vision, drive successful user experience-centered products to meet both users and business needs.                </div>

            </div>

        </div>
    );
}

export default About;