

/**
 * MultiSelect Sample
 */

import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface DataItem {
    id: string;
    text: string;
}

function App() {
    // Large dataset sample with 15000 records and CheckBox mode with virtualization
    const records: DataItem[] = [];
    
    // Generate large dataset with 15000 records
    for (let i: number = 1; i <= 15000; i++) {
        const item: DataItem = {
            id: 'id' + i,
            text: 'Item ' + i,
        };
        records.push(item);
    }

    // maps the appropriate column to fields property
    const fields: object = { text: 'id', value: 'text' };
    
    // Pre-populated values
    const value: string[] = records.map((item: DataItem) => item.text);

    // set the value to summary tag template
    const summaryTagTemplate = (data: any): JSX.Element => {
        return (
            <span>{data.selectedCount} items selected</span>
        );
    };

    return (
        <div>
            <label htmlFor="select">Large Dataset with CheckBox and Virtualization (15000 items)</label>
            {/* specifies the tag for render the MultiSelect component */}
            <MultiSelectComponent 
                id="select" 
                dataSource={records}
                fields={fields}
                mode="CheckBox"
                enableVirtualization={true}
                allowFiltering={true}
                showDropDownIcon={true}
                showSelectAll={true}
                maximumSelectionLength={15000}
                summaryTagCount={5}
                summaryTemplate={summaryTagTemplate}
                value={value}
            />
        </div>
    );
}
ReactDOM.render(<App />, document.getElementById('sample'));


