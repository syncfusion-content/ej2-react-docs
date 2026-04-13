

import { enableRipple } from '@syncfusion/ej2-base';
import { ContextMenuComponent, MenuItemModel } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

function App() {
    let cMenu: ContextMenuComponent;
    let menuItems: MenuItemModel[] = [
        {
            items: [
                { text: 'Large icons' },
                { text: 'Medium icons' },
                { text: 'Small icons' }
            ],
            text: 'View'
        },
        {
            text: 'Sort By'
        },
        {
            text: 'Refresh'
        },
        {
            separator: true
        },
        {
            text: 'New'
        },
        {
            separator: true
        },
        {
            text: 'Display Settings'
        },
        {
            text: 'Personalize'
        }
    ];

    return (
        <div className="container">
            <div id='target'>Right click / Touch hold to open the ContextMenu</div>
            <ContextMenuComponent id="cmenu" ref={(scope) => cMenu = scope as ContextMenuComponent} target='#target' items={menuItems} created={created} beforeOpen={beforeOpen} />
        </div>
    );
    function created() {
        cMenu.enableItems(['Display Settings'], false);
    };
    function beforeOpen() {
        cMenu.enableItems(['Medium icons'], false);
    };
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));


