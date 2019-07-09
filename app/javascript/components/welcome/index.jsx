import React from 'react';
import MainNavbar from 'components/navbar/navbar'

class WelcomePage extends React.Component {
    render () {
        return (
            <div>
                <MainNavbar></MainNavbar>
                <div className="jumbotron">
                    <h1>Green Minsk</h1>
                    <p>Care about our planet</p>
                </div>
            </div>

        );
    }
}

export default WelcomePage
