// import DataManager related classes
import { Query } from '@syncfusion/ej2-data';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    // bind the DataManager instance to dataSource property
    let searchData = [
        { Index: "s1", Country: "Alaska" }, { Index: "s2", Country: "Californiag" },
        { Index: "s3", Country: "Florida" }, { Index: "s4", Country: "Georgia" }
    ];
    // maps the appropriate column to fields property
    let fields = { value: "Country" };
    // sort the resulted items
    let sortOrder = 'Ascending';
    // filtering event handler to filter a customer
    function onFiltering(e) {
        // load overall data when search key empty.
        if (e.text === '') {
            e.updateData(searchData);
        }
        else {
            let query = new Query();
            // change the type of filtering
            query = (e.text !== '') ? query.where('Country', 'endsWith', e.text, true) : query;
            e.updateData(searchData, query);
        }
    }
    return (
    // specifies the tag for render the DropDownList component
    <DropDownListComponent id="ddlelement" allowFiltering={true} popupHeight="250px" filtering={onFiltering = onFiltering.bind(this)} sortOrder={sortOrder} dataSource={searchData} fields={fields} placeholder="Select a customer"/>);
}
ReactDOM.render(<App />, document.getElementById('sample'));
