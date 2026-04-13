import { enableRipple } from '@syncfusion/ej2-base';
import { MenuComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
function App() {
    // Menu items definition
    let menuItems = [
        {
            items: [
                { text: 'Open' },
                { text: 'Save' },
                { text: 'Exit' }
            ],
            text: 'File'
        },
        {
            items: [
                { text: 'Cut' },
                { text: 'Copy' },
                { text: 'Paste' }
            ],
            text: 'Edit'
        },
        {
            items: [
                { text: 'Toolbar' },
                { text: 'Sidebar' }
            ],
            text: 'View'
        },
        {
            items: [
                { text: 'Spelling & Grammar' },
                { text: 'Customize' },
                { text: 'Options' }
            ],
            text: 'Tools'
        },
        { text: 'Go' },
        { text: 'Help' }
    ];
    return (<MenuComponent items={menuItems} enableRtl={true}/>);
}
export default App;
ReactDom.render(<App />, document.getElementById('element'));
