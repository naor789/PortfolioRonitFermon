import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const moreProjects1 = "https://res.cloudinary.com/pet-adoption/image/upload/v1665470381/ronitF/moreProjects1_iutkru.jpg"
const moreProjects2 = "https://res.cloudinary.com/pet-adoption/image/upload/v1665470387/ronitF/moreProjects2_txbgbc.jpg"
const moreProjects3 = "https://res.cloudinary.com/pet-adoption/image/upload/v1665470397/ronitF/moreProjects3_ltvwbd.jpg"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        position: "relative",
        width: "100%",
        height: "80vh",
        [theme.breakpoints.down('sm')]: {
            height: "fit-content",
            width: "100%",
        },
        [theme.breakpoints.between('sm', 'md')]: {
            height: "fit-content",
            width: "100%",

        },
    },
    imageList: {
        flexWrap: 'nowrap',
        width: "100%",
        height: "100%",

    },
    img: {
        width: 1000,
        height: 1000,
        objectFit: "contain",
        [theme.breakpoints.down('sm')]: {
            height: "fit-content",
            width: "100%",
        },
        [theme.breakpoints.between('sm', 'md')]: {
            height: "fit-content",
            width: "90%",

        },
    },
    backgroundStyle: {
        position: "absolute",
        width: "100%",
        height: "50%",
        backgroundColor: "#e9e5e5",
        bottom: 0,
        zIndex: "-1",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        },
    },
    backIcon: {
        [theme.breakpoints.down('sm')]: {
            position: "absolute",
            left: 20,
            top: "50%",
            fontSize: 60
        },


    },
    rightIcon: {
        [theme.breakpoints.down('sm')]: {
            position: "absolute",
            right: 20,
            top: "50%",
            fontSize: 60
        },

    },
}));



export default function MoreProjects() {
    const classes = useStyles();
    const [imageIndex, setImageIndex] = useState(0)

    const handleGoForward = () => {
        if (imageIndex <= 1) {

            setImageIndex(imageIndex + 1)
        } else {
            setImageIndex(0)
        }
    }

    const handleGoBack = () => {
        if (imageIndex <= 2 && imageIndex > 0) {

            setImageIndex(imageIndex - 1)
        } else {
            setImageIndex(2)
        }
    }

    const itemData = [
        {
            img: moreProjects1,
            title: 'Image',
            author: 'author',
        },
        {
            img: moreProjects2,
            title: 'Image',
            author: 'author',
        },
        {
            img: moreProjects3,
            title: 'Image',
            author: 'author',
        },

    ];


    return (
        <div className={classes.root} id="moreprojects">
            <div className={classes.backgroundStyle} >

            </div>
            <ArrowBackIosIcon onClick={handleGoBack} fontSize={"large"} className={classes.backIcon} />
            <img src={itemData[imageIndex].img} className={classes.img} alt={itemData[imageIndex].title} />
            <ArrowForwardIosIcon onClick={handleGoForward} fontSize={"large"} className={classes.rightIcon} />
        </div>
    );
}

