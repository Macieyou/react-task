import React, {Component} from 'react';
import Container from "../Container";
import "./Header.scss"
import {Link} from "react-router-dom";

class Header extends Component {
    state = {
        menuOpen: false,
        navClass: "nav",
        hamburgerClass: "hamburger"
    };
    
    bodyScroll = () => {
        const {windowWidth} = this.props;
        const mobile = windowWidth <= 992;
        const body = document.querySelector("body");
        const navActive = document.querySelector(".nav.nav--active");
        if (mobile && navActive) {
            body.classList.add("no-scroll");
        } else {
            body.classList.remove("no-scroll");
        }
    };
    
    componentDidMount() {
        window.addEventListener('resize', this.bodyScroll);
    }
    
    handleMenuClick() {
        const {windowWidth} = this.props;
        const body = document.querySelector("body");
        const mobile = windowWidth <= 992;
        if (mobile) {
            body.classList.toggle("no-scroll");
            this.setState(({menuOpen}) => ({
                menuOpen: !menuOpen
            }));
        }
    };
    
    render() {
        return (
          <header className="header">
              <Container className="container--header">
                  <div className="header__nav-wrapper">
                      <Link to="/">Home</Link>
                      <Link to="/elo">Elo</Link>
                  </div>
              </Container>
          </header>
        );
    }
}

export default Header;