import { AutoCompleteComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    // define the JSON of data
    countriesData = [
        { Country: { Name: 'Australia' }, Code: { Id: 'AU' } },
        { Country: { Name: 'Bermuda' }, Code: { Id: 'BM' } },
        { Country: { Name: 'Canada' }, Code: { Id: 'CA' } },
        { Country: { Name: 'Cameroon' }, Code: { Id: 'CM' } },
        { Country: { Name: 'Denmark' }, Code: { Id: 'DK' } },
        { Country: { Name: 'France' }, Code: { Id: 'FR' } },
        { Country: { Name: 'Finland' }, Code: { Id: 'FI' } },
        { Country: { Name: 'Germany' }, Code: { Id: 'DE' } },
        { Country: { Name: 'Greenland' }, Code: { Id: 'GL' } },
        { Country: { Name: 'Hong Kong' }, Code: { Id: 'HK' } },
        { Country: { Name: 'India' }, Code: { Id: 'IN' } },
        { Country: { Name: 'Italy' }, Code: { Id: 'IT' } },
        { Country: { Name: 'Japan' }, Code: { Id: 'JP' } },
        { Country: { Name: 'Mexico' }, Code: { Id: 'MX' } },
        { Country: { Name: 'Norway' }, Code: { Id: 'NO' } },
        { Country: { Name: 'Poland' }, Code: { Id: 'PL' } },
        { Country: { Name: 'Switzerland' }, Code: { Id: 'CH' } },
        { Country: { Name: 'United Kingdom' }, Code: { Id: 'GB' } },
        { Country: { Name: 'United States' }, Code: { Id: 'US' } }
    ];
    // maps the appropriate column to fields property
    fields = { value: 'Country.Name' };
    render() {
        return (
        // specifies the tag for render the AutoComplete component
        <AutoCompleteComponent id="atcelement" dataSource={this.countriesData} fields={this.fields} placeholder="Find a country"/>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
