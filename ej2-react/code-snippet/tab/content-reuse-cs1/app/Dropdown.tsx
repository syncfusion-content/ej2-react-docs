import * as React from 'react';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';

export function Dropdown(props) {
    let target = document.querySelector('.e-toolbar-item.e-active .e-tab-text')
        .innerHTML;
    return (
        <div>
            <h1>{target} Content</h1>
            <br />
            <DropDownListComponent
                dataSource={props.data}
                placeholder="Select a game"
            />
        </div>
    );
}