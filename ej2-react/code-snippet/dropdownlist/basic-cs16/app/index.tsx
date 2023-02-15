

// import DataManager related classes
import { Query } from '@syncfusion/ej2-data';
import { DropDownListComponent, FilteringEventArgs } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    // maps the appropriate column to fields property
    const fields: object = { text: "Country", value: "Index" };
    // define the filtering data
    const searchData: { [key: string]: Object }[] = [
      { Index: "s1", Country: "Alaska" }, { Index: "s2", Country: "California" },
      { Index: "s3", Country: "Florida" }, { Index: "s4", Country: "Georgia" }
    ];

    // filtering event handler to filter a Country
    function onFiltering(args: FilteringEventArgs) {
        let query = new Query();
        // frame the query based on search string with filter type.
        query = (args.text !== "") ? query.where("Country", "startswith", args.text, true) : query;
        // pass the filter data source, filter query to updateData method.
        args.updateData(this.searchData, query);
    }

    return (
    // specifies the tag for render the DropDownList component
        <DropDownListComponent id="ddlelement" popupHeight="250px" fields={fields} filtering={onFiltering = onFiltering.bind(this)} allowFiltering={true} dataSource={searchData} placeholder="Select a country" />
    );
}
ReactDOM.render(<App />, document.getElementById('sample'));


