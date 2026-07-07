

import { enableRipple } from '@syncfusion/ej2-base';
import { MenuComponent, MenuItemModel } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

function App() {
    // Menu items definition
    let menuItems: MenuItemModel[] = [
        {
            text: 'File',
            items: [
                { text: 'New' },
                { text: 'Open' },
                { text: 'Save' },
                { text: 'Close' }]
        },
        {
            text: 'Edit',
            items: [
                { text: 'Cut' },
                { text: 'Copy' },
                { text: 'Paste' }]
        },
        {
            text: 'View',
            items: [
                { text: 'Toolbar' },
                { text: 'Sidebar' }]
        },
        {
            text: 'Tools',
            items: [
                { text: 'Options' },
                { text: 'Settings' }]
        },
        {
            text: 'Help'
        }
    ];

    return (
        <MenuComponent items={menuItems}/>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));


