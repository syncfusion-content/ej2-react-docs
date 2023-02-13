import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    // define the JSON of data
    const countriesData = [
        { Country: { Name: 'Australia' }, Code: { Id: 'AU' } },
        { Country: { Name: 'Bermuda' }, Code: { Id: 'BM' } },
        { Country: { Name: 'Canada' }, Code: { Id: 'CA' } },
        { Country: { Name: 'Cameroon' }, Code: { Id: 'CM' } },
        { Country: { Name: 'Denmark' }, Code: { Id: 'DK' } },
        { Country: { Name: 'France' }, Code: { Id: 'FR' } }
    ];
    // maps the appropriate column to fields property
    const fields = { text: 'Country.Name', value: 'Code.Id' };
    return (
    // specifies the tag for render the ComboBox component
    <ComboBoxComponent id="comboelement" dataSource={countriesData} fields={fields} placeholder="Select a country"/>);
}
ReactDOM.render(<App />, document.getElementById('sample'));
