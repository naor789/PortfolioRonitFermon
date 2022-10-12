import './App.css';
import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Project1 from './components/Project1';
import Project2 from './components/Project2';
import Project1Content from './components/Project1Content';
import Project2Content from './components/Project2Content';
import Project1Content2 from './components/Project1Content2';
import Project2Content2 from './components/Project2Content2';
import Project3 from './components/Project3';
import Project4 from './components/Project4';
import MoreProjects from './components/MoreProjects';
import Contact from './components/Contact';
import { Fab } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
    [theme.breakpoints.down('sm')]: {
      width: 400,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      width: 400,

    },
  },
  fullList: {
    width: 250,
  },
  itemText: {
    fontSize: 16,
    color: "black",
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      fontSize: 16,

    },
  },
  itemAnchor: {
    textDecoration: "none",
    margin: 5
  },
}));

function App() {
  const menuList = [
    {
      id: Math.random(),
      title: "About",
      anchor: "#about"
    },
    {
      id: Math.random(),
      title: "Project 1",
      anchor: "#project1"
    },
    {
      id: Math.random(),
      title: "Project 2",
      anchor: "#project2"
    },
    {
      id: Math.random(),
      title: "Project 3",
      anchor: "#project3"
    },
    {
      id: Math.random(),
      title: "Project 4",
      anchor: "#project4"
    },
    {
      id: Math.random(),
      title: "More Projects",
      anchor: "#moreprojects"
    },
    {
      id: Math.random(),
      title: "Contact",
      anchor: "#contact"
    }

  ]
  const classes = useStyles();

  const [drawerOpen, setDrawerOpen] = useState(false)

  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerOpen(!drawerOpen);
  };


  return (
    <>
      <div className="App">
        <div>
          <Fab style={{ position: "fixed", top: "1vw", right: "1vw", zIndex: 10 }} onClick={toggleDrawer}>

            <MenuIcon />
          </Fab>

          <Drawer anchor={"right"} open={drawerOpen} onClose={() => setDrawerOpen(false)}>
            <div
              className={classes.list}
              role="presentation"
              onClick={toggleDrawer}
            >
              <List>
                {menuList.map((item, index) => (
                  <AnchorLink href={item.anchor} key={item.id} className={classes.itemAnchor} >
                    <ListItem button >
                      <div className={classes.itemText}>{item.title}</div>
                    </ListItem>
                    <Divider />

                  </AnchorLink>
                ))}
              </List>

            </div>          </Drawer>
        </div>

        <Home />
        <About />
        <Project1 />
        <Project1Content />
        <Project1Content2 />
        <Project2 />
        <Project2Content2 />
        <Project2Content />
        <Project3 />
        <Project4 />
        <MoreProjects />
        <Contact />
      </div>
    </>
  );
}



export default App;
