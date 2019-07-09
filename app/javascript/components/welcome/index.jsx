import React from 'react';
import MainNavbar from 'components/navbar/navbar'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
  width: '60%',
  height: '85%',
  marginLeft: '4rem'
};

const minskCoordinates = {
  lat: 53.9045,
  lng: 27.5615
};

class WelcomePage extends React.Component {
    render () {
        return (
            <div>
                <MainNavbar></MainNavbar>
                <div className="jumbotron">
                    <h1>Green Minsk</h1>
                    <p>Care about our planet</p>
                </div>

                <div className='container'>
                  <Map google={this.props.google}
                       zoom={14}
                       style={style}
                       initialCenter={minskCoordinates}
                  >
                    <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />
                    <InfoWindow onClose={this.onInfoWindowClose}>
                    </InfoWindow>
                  </Map>
                </div>
            </div>

        );
    }
}

export default GoogleApiWrapper({
  apiKey: (process.env.GOOGLE_MAPS_API_KEY)
})(WelcomePage)
