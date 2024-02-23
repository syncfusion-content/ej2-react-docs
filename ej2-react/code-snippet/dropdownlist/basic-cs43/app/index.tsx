import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useState, useRef } from 'react';
import { Query } from '@syncfusion/ej2-data';

function App() {
      // state DropDownList instance
  const stateObj = useRef(null);
  // city DropDownList instance
  const cityObj = useRef(null);
  const tempCountry = 'country';
  //define the country DropDownList data
  const countryData = [
    { CountryName: 'Australia', CountryId: '2' },
    { CountryName: 'United States', CountryId: '1' }
    ];
  const tempState = 'state';
  //define the state DropDownList data
  const stateData = [
    { StateName: 'New York', CountryId: '1', StateId: '101' },
    { StateName: 'Virginia ', CountryId: '1', StateId: '102' },
    { StateName: 'Tasmania ', CountryId: '2', StateId: '105' }
  ];
  const tempCity = 'cities';
  //define the city DropDownList data
  const cityData = [
    { CityName: 'Albany', StateId: '101', CityId: 201 },
    { CityName: 'Beacon ', StateId: '101', CityId: 202 },
    { CityName: 'Emporia', StateId: '102', CityId: 206 },
    { CityName: 'Hampton ', StateId: '102', CityId: 205 },
    { CityName: 'Hobart', StateId: '105', CityId: 213 },
    { CityName: 'Launceston ', StateId: '105', CityId: 214 }
  ];
  // maps the country column to fields property
  const countryFields = { value: 'CountryId', text: 'CountryName' };
  // maps the state column to fields property
  const stateFields = { value: 'StateId', text: 'StateName' };
  // maps the city column to fields property
  const cityFields = { text: 'CityName', value: 'CityId' };
  const [stateQuery, setStateQuery] = useState(null);
  const [stateText, setStateText] = useState(null);
  const [cityText, setCityText] = useState(null);
  const [cityQuery, setCityQuery] = useState(null);
  const countryChange = (args) => {
    // query the data source based on country DropDownList selected value
    let tempQuery = new Query().where('CountryId', 'equal', args.value);
    setStateQuery(tempQuery);
    // clear the existing selection.
    setStateText(null);
    // bind the property changes to state DropDownList
    stateObj.current.dataBind();
    // clear the existing selection.
    setCityText(null);
    // bind the property changes to city DropDownList
    cityObj.current.dataBind();
  };
  const stateChange = (args) => {
    // query the data source based on state DropDownList selected value
    let tempQuery1 = new Query().where('StateId', 'equal', args.value);
    setCityQuery(tempQuery1);
    // clear the existing selection.
    setCityText(null);
  };
    return (
      <div id="cascade">
        <div style={{ paddingTop: '35px' }}>
          <DropDownListComponent
            id="country"
            dataSource={countryData}
            fields={countryFields}
            popupHeight="auto"
            change={countryChange.bind(this)}
            placeholder="Select a country"
          />
        </div>
        <div style={{ paddingTop: '35px' }}>
          <DropDownListComponent
            id="state"
            dataSource={stateData}
            ref={stateObj}
            fields={stateFields}
            popupHeight="auto"
            change={stateChange.bind(this)}
            placeholder="Select a state"
            query={stateQuery}
            text={stateText}
          />
        </div>
        <div style={{ paddingTop: '35px' }}>
          <DropDownListComponent
            id="city"
            dataSource={cityData}
            ref={cityObj}
            fields={cityFields}
            popupHeight="auto"
            placeholder="Select a city"
            text={cityText}
            query={cityQuery}
          />
        </div>
      </div>
    );
}
ReactDOM.render(<App />, document.getElementById('sample'));


