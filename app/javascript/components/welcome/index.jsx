import React from 'react';
import MainNavbar from 'components/navbar/navbar'
import I18n from 'i18n-js/index.js.erb'
import {
  YMaps,
  Map,
  Placemark,
  ZoomControl,
  FullscreenControl,
  GeolocationControl,
  RouteEditor, SearchControl, TypeSelector
} from "react-yandex-maps";

const mapData = {
  center: [53.9045, 27.5615],
  zoom: 5,
  controls: [],
  apikey: `${ process.env.YANDEX_MAPS_API_KEY }`
};

const coordinates = [
  [53.9045, 27.5615]
];

class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
  }

    render () {
        return (
            <div>
              <MainNavbar></MainNavbar>
              <div className="jumbotron">
                  <h1>{I18n.t('welcome_page.organization_name')}</h1>
                  <p>{I18n.t('welcome_page.moto')}</p>
              </div>

              <div>
                <YMaps>
                  <div id='map' className='map'>
                    <Map defaultState={mapData} width='100%' height='100%'>
                      <ZoomControl options={{ float: 'right' }} />
                      <FullscreenControl />
                      <RouteEditor />
                      <GeolocationControl options={{ float: 'left' }} />
                      <SearchControl options={{ float: 'right' }} />
                      <TypeSelector options={{ float: 'right' }} />

                      {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
                    </Map>
                  </div>
                </YMaps>
              </div>
            </div>

        );
    }
}

export default WelcomePage;
