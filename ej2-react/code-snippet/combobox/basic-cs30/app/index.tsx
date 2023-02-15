{% raw %}


import { Query } from '@syncfusion/ej2-data';
import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
    // country ComboBox instance
    private countryObj: ComboBoxComponent;

    // state ComboBox instance
    private stateObj: ComboBoxComponent;

    // city ComboBox instance
    private cityObj: ComboBoxComponent;

    // define the country ComboBox data
    private countryData: { [key: string]: Object }[] = [
        { CountryName: 'Australia', CountryId: '2' },
        { CountryName: 'United States', CountryId: '1' }
    ];

    // define the state ComboBox data
    private stateData: { [key: string]: Object }[] = [
        { StateName: 'New York', CountryId: '1', StateId: '101' },
        { StateName: 'Virginia ', CountryId: '1', StateId: '102' },
        { StateName: 'Tasmania ', CountryId: '2', StateId: '105' }
    ];

    // define the city ComboBox data
    private cityData: { [key: string]: Object }[] = [
        { CityName: 'Albany', StateId: '101', CityId: 201 },
        { CityName: 'Beacon ', StateId: '101', CityId: 202 },
        { CityName: 'Emporia', StateId: '102', CityId: 206 },
        { CityName: 'Hampton ', StateId: '102', CityId: 205 },
        { CityName: 'Hobart', StateId: '105', CityId: 213 },
        { CityName: 'Launceston ', StateId: '105', CityId: 214 }
    ];

    // maps the country column to fields property
    private countryField: object = { value: 'CountryId', text: 'CountryName' };

    // maps the state column to fields property
    private stateField: object = { value: 'StateId', text: 'StateName' };

    // maps the city column to fields property
    private cityField: object = { text: 'CityName', value: 'CityId' };
    constructor(props: any){
        super(props);
        this.onCountryChange=this.onCountryChange.bind(this);
        this.onStateChange=this.onStateChange.bind(this);
    }

    public onCountryChange() {
        // query the data source based on country ComboBox selected value
        this.stateObj.query = new Query().where('CountryId', 'equal', this.countryObj.value);
        // enable the state ComboBox
        this.stateObj.enabled = true;
        // clear the existing selection.
        this.stateObj.text = '';
        // bind the property changes to state ComboBox
        this.stateObj.dataBind();
        // clear the existing selection in city ComboBox
        this.cityObj.text = '';
        // disable the city ComboBox
        this.cityObj.enabled = false;
        // bind the property change to City ComboBox
        this.cityObj.dataBind();
    }
    public onStateChange() {
        // query the data source based on state ComboBox selected value
        this.cityObj.query = new Query().where('StateId', 'equal', this.stateObj.value);
        // enable the city ComboBox
        this.cityObj.enabled = true;
        // clear the existing selection
        this.cityObj.text = '';
        // bind the property change to city ComboBox
        this.cityObj.dataBind();
    }

    public render() {
        return (
            <div>
                {/* specifies the tag for render the country ComboBox component */}
                <ComboBoxComponent id="country-ddl" ref={(scope) => { (this.countryObj as ComboBoxComponent | null) = scope; }} fields={this.countryField} dataSource={this.countryData} placeholder='Select a country' change={this.onCountryChange} />
                <br />

                 {/* specifies the tag for render the state ComboBox component */}
                 <ComboBoxComponent id="state-ddl" ref={(scope) => { (this.stateObj as ComboBoxComponent | null) = scope; }} enabled={false} fields={this.stateField} dataSource={this.stateData} placeholder='Select a state' change={this.onStateChange} />
                <br />

                 {/* specifies the tag for render the city ComboBox component */}
                <ComboBoxComponent id="city-ddl" ref={(scope) => { (this.cityObj as ComboBoxComponent | null) = scope; }} enabled={false} fields={this.cityField} dataSource={this.cityData} placeholder='Select a city' />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));



{% endraw %}