import React from 'react';
import Navbar from 'react-bootstrap/Navbar'

class MainNavbar extends React.Component {
    render () {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="">
                        <img
                            alt=""
                            src="/green_bel_logo.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        {' Green Minsk'}
                    </Navbar.Brand>
                </Navbar>
            </div>
        )
    }
};

export default MainNavbar
