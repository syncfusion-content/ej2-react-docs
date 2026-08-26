/**
 * MultiSelect Sample
 */

import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
    // Large dataset sample with 15000 records and CheckBox mode with virtualization
    const records = [];
    
    // Generate large dataset with 15000 records
    for (let i = 1; i <= 15000; i++) {
        const item = {
            id: 'id' + i,
            text: 'Item ' + i,
        };
        records.push(item);
    }

    // maps the appropriate column to fields property
    const fields = { text: 'id', value: 'text' };
    
    // Pre-populated values
    const value = records.map((item) => item.text);

    // set the value to summary tag template
    const summaryTagTemplate = (data) => {
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
