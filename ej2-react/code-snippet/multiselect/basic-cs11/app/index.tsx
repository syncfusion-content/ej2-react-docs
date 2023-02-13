


// import DataManager related classes
import { Query } from '@syncfusion/ej2-data';
import { FilteringEventArgs, MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component<{}, {}> {
    // define the filtering data
    private searchData: { [key: string]: Object }[] = [
        { index: "s1", country: "Alaska" }, { index: "s2", country: "California" },
        { index: "s3", country: "Florida" }, { index: "s4", country: "Georgia" }
    ];
    // maps the appropriate column to fields property
    private fields: object = { text: "country", value: "index" };
    constructor(props: any) {
        super(props);
        this.onFiltering = this.onFiltering.bind(this);
    }
    // filtering event handler to filter a country
    public onFiltering(args: FilteringEventArgs) {
        let query = new Query();
        // frame the query based on search string with filter type.
        query = (args.text !== "") ? query.where("country", "startswith", args.text, true) : query;
        // pass the filter data source, filter query to updateData method.
        args.updateData(this.searchData, query);
    }

    public render() {
        return (
             // specifies the tag for render the MultiSelect component
            <MultiSelectComponent id="mtselement" popupHeight="250px" fields={this.fields} filtering={this.onFiltering} allowFiltering={true} dataSource={this.searchData} placeholder="Select a country" />
        );
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));


