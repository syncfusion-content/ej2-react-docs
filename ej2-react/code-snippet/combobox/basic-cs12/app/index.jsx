// import DataManager related classes
import { Query } from '@syncfusion/ej2-data';
import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    // define the filtering data
    const searchData = [
        { Index: "s1", Country: "California" }, { Index: "s2", Country: "Florida" },
        { Index: "s3", Country: "Alaska" }, { Index: "s4", Country: "Georgia" }
    ];
    // maps the appropriate column to fields property
    const fields = { text: "Country", value: "Index" };
    // sort the resulted items
    const sortOrder = 'Ascending';
    // filtering event handler to filter a Country
    function onFiltering(args) {
        let query = new Query();
        // frame the query based on search string with filter type.
        query = (args.text !== "") ? query.where("Country", "startswith", args.text, true) : query;
        // pass the filter data source, filter query to updateData method.
        args.updateData(this.searchData, query);
    }
    return (
    // specifies the tag for render the ComboBox component
    <ComboBoxComponent id="comboelement" popupHeight="250px" fields={fields} filtering={onFiltering} allowFiltering={true} sortOrder={sortOrder} dataSource={searchData} placeholder="Select a country"/>);
}
ReactDOM.render(<App />, document.getElementById('sample'));
