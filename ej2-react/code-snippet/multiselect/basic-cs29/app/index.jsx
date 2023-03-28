{% raw %}
import { Predicate, Query } from '@syncfusion/ej2-data';
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    // country  MultiSelect instance
    countryObj;
    // state  MultiSelect instance
    stateObj;
    // city  MultiSelect instance
    cityObj;
    // define the country  MultiSelect data
    countryData = [
        { countryName: 'Australia', countryId: '2' },
        { countryName: 'United States', countryId: '1' }
    ];
    // define the state  MultiSelect data
    stateData = [
        { stateName: 'New York', countryId: '1', stateId: '101' },
        { stateName: 'Virginia ', countryId: '1', stateId: '102' },
        { stateName: 'Tasmania ', countryId: '2', stateId: '105' }
    ];
    // define the city  MultiSelect data
    cityData = [
        { cityName: 'Albany', stateId: '101', cityId: 201 },
        { cityName: 'Beacon ', stateId: '101', cityId: 202 },
        { cityName: 'Emporia', stateId: '102', cityId: 206 },
        { cityName: 'Hampton ', stateId: '102', cityId: 205 },
        { cityName: 'Hobart', stateId: '105', cityId: 213 },
        { cityName: 'Launceston ', stateId: '105', cityId: 214 }
    ];
    // maps the country column to fields property
    countryField = { value: 'countryId', text: 'countryName' };
    // maps the state column to fields property
    stateField = { value: 'stateId', text: 'stateName' };
    // maps the city column to fields property
    cityField = { text: 'cityName', value: 'cityId' };
    constructor(props) {
        super(props);
        this.onCountryChange = this.onCountryChange.bind(this);
        this.onStateChange = this.onStateChange.bind(this);
    }
    onCountryChange() {
        // Query the data source based on country MultiSelect selected value
        const state = this.stateObj;
        const city = this.cityObj;
        const country = this.countryObj;
        // disable the state DropDownList
        state.enabled = true;
        // frame the query based on selected value in country DropDownList.
        const tempQuery = this.getQueryForVal(country.value, country);
        // set the framed query based on selected value in country DropDownList.
        state.query = tempQuery;
        // set empty value to state DropDownList text property
        state.text = '';
        if (state.mainData || state.mainList) {
            state.mainData = null;
            state.mainList = null;
        }
        // bind the property changes to state DropDownList
        state.dataBind();
        // set empty value to city DropDownList text property
        city.text = '';
        // disable the city DropDownList
        city.enabled = false;
        // bind the property changes to City DropDownList
        city.dataBind();
    }
    onStateChange() {
        // Query the data source based on country MultiSelect selected value
        const city = this.cityObj;
        const state = this.stateObj;
        city.enabled = true;
        // Query the data source based on state DropDownList selected value
        const tempQuery1 = this.getQueryForVal(state.value, state);
        // set the framed query based on selected value in city DropDownList.
        city.query = tempQuery1;
        if (city.mainData || city.mainList) {
            city.mainData = null;
            city.mainList = null;
        }
        // clear the existing selection
        city.text = '';
        // bind the property change to city DropDownList
        city.dataBind();
    }
    getQueryForVal(valuecheck, mulObj) {
        const field = !(mulObj.fields.value) ? mulObj.fields.text : mulObj.fields.value;
        let predicate = new Predicate(field, 'equal', '');
        for (let i = 0; i < valuecheck.length; i++) {
            if (i === 0) {
                predicate = new Predicate(field, 'equal', (valuecheck[i]));
            }
            else {
                predicate = predicate.or(field, 'equal', valuecheck[i]);
            }
        }
        return new Query().where(predicate);
    }
    render() {
        return (<div>
                {/* specifies the tag for render the country MultiSelect component */}
                <MultiSelectComponent id="country-ms" ref={(scope) => { this.countryObj = scope; }} fields={this.countryField} dataSource={this.countryData} placeholder='Select a country' change={this.onCountryChange}/>
                <br />

                {/* specifies the tag for render the state MultiSelect component */}
                <MultiSelectComponent id="state-ms" ref={(scope) => { this.stateObj = scope; }} enabled={false} fields={this.stateField} dataSource={this.stateData} placeholder='Select a state' change={this.onStateChange}/>
                <br />

                {/* specifies the tag for render the city MultiSelect component */}
                <MultiSelectComponent id="city-ms" ref={(scope) => { this.cityObj = scope; }} enabled={false} fields={this.cityField} dataSource={this.cityData} placeholder='Select a city'/>
            </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
{% endraw %}