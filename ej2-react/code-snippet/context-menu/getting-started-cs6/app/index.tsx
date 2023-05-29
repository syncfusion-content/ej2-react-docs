

import * as React from 'react';
import * as ReactDom from 'react-dom';
import { ContextMenuComponent, MenuItemModel } from '@syncfusion/ej2-react-navigations';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

function App() {
    let menuItems: MenuItemModel[] = [
    {
        text: 'Show All Bookmarks'
    },
    {
        text: 'Bookmarks Toolbar',
        items: [
            {
                text: 'Most Visited',
                items: [
                    {
                        text: 'Google'
                    },
                    {
                        text: 'Gmail'
                    }
                ]
            },
            {
                text: 'Recently Added'
            }
        ]
    }];

    return (
            <div class="container">
                <div id='target'>Right click / Touch hold to open the ContextMenu</div>
                <ContextMenuComponent id='contextmenu' target='#target'
                items={menuItems}> </ContextMenuComponent>
            </div>
        );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));


