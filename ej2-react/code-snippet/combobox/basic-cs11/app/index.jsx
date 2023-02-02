// import DataManager related classes
import { Query } from '@syncfusion/ej2-data';
import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    // define the filtering data
    searchData = [
        { Index: "s1", Country: "California" }, { Index: "s2", Country: "Florida" },
        { Index: "s3", Country: "Alaska" }, { Index: "s4", Country: "Georgia" }
    ];
    // maps the appropriate column to fields property
    fields = { text: "Country", value: "Index" };
    // sort the resulted items
    sortOrder = 'Ascending';
    constructor(props) {
        super(props);
        this.onFiltering = this.onFiltering.bind(this);
    }
    // filtering event handler to filter a Country
    onFiltering(args) {
        let query = new Query();
        // frame the query based on search string with filter type.
        query = (args.text !== "") ? query.where("Country", "startswith", args.text, true) : query;
        // pass the filter data source, filter query to updateData method.
        args.updateData(this.searchData, query);
    }
    render() {
        return (
        // specifies the tag for render the ComboBox component
        <ComboBoxComponent id="comboelement" popupHeight="250px" fields={this.fields} filtering={this.onFiltering} allowFiltering={true} sortOrder={this.sortOrder} dataSource={this.searchData} placeholder="Select a country"/>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
