import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.records = [];
        
        // Generate large dataset with 15000 records
        for (let i = 1; i <= 15000; i++) {
            const item = {
                id: 'id' + i,
                text: 'Item ' + i,
            };
            this.records.push(item);
        }
    }

    // Summary tag template
    summaryTemplate = (data) => {
        return (
            <span>{data.selectedCount} items selected</span>
        );
    }

    render() {
        // Get all values from the dataset
        const value = this.records.map((item) => item.text);

        return (
            <div>
                <label htmlFor="select">Large Dataset with CheckBox and Virtualization (15000 items)</label>
                <MultiSelectComponent
                    id="select"
                    dataSource={this.records}
                    fields={{ text: 'id', value: 'text' }}
                    mode="CheckBox"
                    enableVirtualization={true}
                    allowFiltering={true}
                    showDropDownIcon={true}
                    showSelectAll={true}
                    maximumSelectionLength={15000}
                    summaryTagCount={5}
                    summaryTemplate={this.summaryTemplate}
                    value={value}
                />
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
