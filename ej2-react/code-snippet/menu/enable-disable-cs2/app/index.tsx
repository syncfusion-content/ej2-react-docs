

import { enableRipple } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { BeforeOpenCloseMenuEventArgs, MenuComponent, MenuItemModel } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

function App() {
    let menuObj: MenuComponent;

    let menuItems: MenuItemModel[] = [
        {
            items: [
                { text: 'Conferences' },
                { text: 'Music' },
                { text: 'Workshops' }
            ],
            text: 'Events'
        },
        {
            items: [
                { text: 'Now Showing' },
                { text: 'Coming Soon' }
            ],
            text: 'Movies'
        },
        {
            items: [
                { text: 'Media Gallery' },
                { text: 'Newsletters' }
            ],
            text: 'Directory'
        },
        {
            items: [
                { text: 'Our Policy' },
                { text: 'Site Map' }
            ],
            text: 'Queries'
        },
        { text: 'Services' }
    ];

    let hiddenItems: string[] = ['Workshops', 'Music', 'Movies'];

    function beforeOpen(args: BeforeOpenCloseMenuEventArgs): void {
        // Handling sub menu items
        for (const item of args.items) {
            if (hiddenItems.indexOf(item.text) > -1) {
                menuObj.hideItems([item.text], false);
            }
        }
    }

    function created(): void {
        // Disable items
        menuObj.hideItems(hiddenItems, false);
    }

    function btnClick(): void {
        // show items
        menuObj.showItems(hiddenItems, false);
        hiddenItems = [];
    }

    return (
        <div className="control-section">
            <ButtonComponent content='Show all items' onClick={btnClick}/>
            <div className="menu-section">
                <MenuComponent ref={scope => menuObj = scope} items={menuItems} beforeOpen={beforeOpen} created={created}/>
            </div>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));


