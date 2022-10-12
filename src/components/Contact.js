import React from 'react';
import { makeStyles, Link, Tooltip, Typography } from '@material-ui/core';



const mail = "https://res.cloudinary.com/pet-adoption/image/upload/v1665525362/ronitF/kisspng-email-transparency-portable-network-graphics-compu-5c7435d8c2cc18.5946210615511198327979_mxvhto.png"
const linkedin = "https://res.cloudinary.com/pet-adoption/image/upload/v1665525131/ronitF/linkedin_g5ykzu.png"
const phone = "https://res.cloudinary.com/pet-adoption/image/upload/v1665525369/ronitF/6379204_qkvmav.png"


const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        height: "20vh",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        [theme.breakpoints.down('sm')]: {
            height: "fit-content",
            width: "100%",
        },
        [theme.breakpoints.between('sm', 'md')]: {
            height: "fit-content",
            width: "100%",

        },

    },

    img: {
        height: 100,
        width: 100,
        margin: 40
    },
}));

function Contact() {
    const classes = useStyles();



    return (
        <>
            <div className={classes.root} id="contact">
                <Link href="mailto:naorkahalany@gmail.com" >
                    <img src={mail} alt="Email" className={classes.img} />
                </Link>
                <Tooltip title={<Typography style={{ fontSize: 20, fontFamily: "Noto Sans, sans-serif" }}>054-2552069</Typography>}>

                    <img src={phone} alt="Phone" className={classes.img} />
                </Tooltip>

                <Link href="https://www.linkedin.com/in/ronit-fermon-21b5bb141/"
                    variant="body2">
                    <img src={linkedin} alt="Linkedin" className={classes.img} />
                </Link>

            </div>

        </>
    );
}

export default Contact;