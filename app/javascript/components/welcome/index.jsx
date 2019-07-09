// TODO Add yandex api to maps
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
  ListBox,
  ListBoxItem,
  RouteButton,
  RouteEditor, RoutePanel, RulerControl, SearchControl, TypeSelector
} from "react-yandex-maps";

const mapData = {
  center: [53.9045, 27.5615],
  zoom: 5,
  controls: []
};

const coordinates = [
  [53.9045, 27.5615]
];

class WelcomePage extends React.Component {
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
                      <ListBox data={{ content: 'Select city' }}>
                        <ListBoxItem data={{ content: 'Moscow' }} />
                        <ListBoxItem
                          data={{
                            content: 'Saint Petersburg',
                          }}
                        />
                      </ListBox>
                      <RouteButton options={{ float: 'right' }} />
                      <RoutePanel options={{ float: 'right' }} />
                      <RulerControl options={{ float: 'right' }} />
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
