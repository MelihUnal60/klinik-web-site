import React from 'react'
import { Container,Navbar,Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import {AiOutlineAlert} from 'react-icons/ai'
import styles from './Naav.module.scss';

const Naav = () => {
    const menus = [
        {
            name: "Home",
            id: 1,
            path: "/"
        },
        {
            name: "About Us",
            id: 2,
            path: "/about"
        },
        {
            name: "Appoitment",
            id: 3,
            path: "/appointment"
        },
        {
            name: "Contact",
            id: 4,
            path: "/contact"
        },
        {
            name: "Treatments",
            id: 5,
            path: "/treatments"
        },
        {
            name: "Error",
            id: 6,
            path: "/*"
        },
    ]
    return (
        <div>
            <Navbar expand="lg" className={`${styles.navBar} fixed-top`}>
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/" className={`${styles.navLink} text-uppercase`}>

                           Diş Kliniği 

                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScrooll" />
                    <Navbar.Collapse id="navbarScrooll">
                        <Nav className="ms-auto my-2 my-lg-0"
                            style={{ maxHeight: "100px" }}
                            navbarScrooll>

                            {
                                menus.map((menu) => (
                                    <NavLink
                                        key={menu.id}
                                        to={menu.path}
                                        className={`${styles.navLink} ${styles.menuLink}`}>
                                        {menu.name}
                                    </NavLink>
                                ))
                            }

                       </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </div >
    );
}

export default Naav;