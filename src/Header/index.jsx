import React from 'react';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { Menu } from 'antd';

const Navbar = () => {
  return (
    <Menu mode="horizontal" style={{
        display: "flex",
        justifyContent: "center", 
        backgroundColor: "#f0f2f5",
        position: 'sticky',
        top: 0,
        zIndex: 1000 
      }}>
      <Menu.Item key="home">
        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500}>
          Home
        </Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>
          About
        </Link>
      </Menu.Item>
      <Menu.Item key="projects">
        <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>
          Projects
        </Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>
          Contact
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
