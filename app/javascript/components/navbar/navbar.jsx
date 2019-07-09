import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import I18n from 'i18n-js/index.js.erb'

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
                        {I18n.t('welcome_page.organization_name')}
                    </Navbar.Brand>
                </Navbar>
            </div>
        )
    }
};

export default MainNavbar
