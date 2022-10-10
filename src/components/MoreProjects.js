import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import moreProjects1 from "../assets/moreProjects1.jpg"
import moreProjects2 from "../assets/moreProjects2.jpg"
import moreProjects3 from "../assets/moreProjects3.jpg"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: "center",
        position: "relative",
        width: "100%",
        height: "80vh",
        [theme.breakpoints.down('sm')]: {
            height: "30vh",
            width: "85vw",
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
            height: "100%",
            width: "80vw",
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
    }
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
        <div className={classes.root}>
            <div className={classes.backgroundStyle} >

            </div>
            <ArrowBackIosIcon onClick={handleGoBack} fontSize={"large"} />
            <img src={itemData[imageIndex].img} className={classes.img} />
            <ArrowForwardIosIcon onClick={handleGoForward} fontSize={"large"} />
        </div>
    );
}

