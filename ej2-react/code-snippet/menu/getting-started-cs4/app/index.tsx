

import { enableRipple } from '@syncfusion/ej2-base';
import { FieldSettingsModel, MenuComponent,  } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

function App() {
    // Menu datasource
    let data: Array<{[key: string]: any }> = [
        { id: 'parent1', text: 'Events' },
        { id: 'parent2', text: 'Movies' },
        { id: 'parent3', text: 'Directory' },
        { id: 'parent4', pId: null, text: 'Queries' },
        { id: 'parent5', pId: null, text: 'Services' },
        { id: 'parent6', pId: 'parent1', text: 'Conferences' },
        { id: 'parent7', pId: 'parent1', text: 'Music' },
        { id: 'parent8', pId: 'parent1', text: 'Workshops' },
        { id: 'parent9', pId: 'parent2', text: 'Now Showing' },
        { id: 'parent10', pId: 'parent2', text: 'Coming Soon' },
        { id: 'parent10', pId: 'parent3', text: 'Media Gallery' },
        { id: 'parent11', pId: 'parent3', text: 'Newsletters' },
        { id: 'parent12', pId: 'parent4', text: 'Our Policy' },
        { id: 'parent13', pId: 'parent4', text: 'Site Map' },
        { id: 'parent14', pId: 'parent7', text: 'Pop' },
        { id: 'parent15', pId: 'parent7', text: 'Folk' },
        { id: 'parent16', pId: 'parent7', text: 'Classical' }
    ];

    // Menu fields definition
    let menuFields: FieldSettingsModel = {
        itemId:'id',
        parentId: 'pId',
        text: 'text'
    };

    return (
        <MenuComponent items={data} fields={menuFields}/>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));


