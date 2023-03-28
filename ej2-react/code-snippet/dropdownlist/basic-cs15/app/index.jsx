// import DataManager related classes
import { Query } from '@syncfusion/ej2-data';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    // maps the appropriate column to fields property
    fields = { text: "Country", value: "Index" };
    // define the filtering data
    searchData = [
        { Index: "s1", Country: "Alaska" }, { Index: "s2", Country: "California" },
        { Index: "s3", Country: "Florida" }, { Index: "s4", Country: "Georgia" }
    ];
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
        // specifies the tag for render the DropDownList component
        <DropDownListComponent id="ddlelement" popupHeight="250px" fields={this.fields} filtering={this.onFiltering = this.onFiltering.bind(this)} allowFiltering={true} dataSource={this.searchData} placeholder="Select a country"/>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
