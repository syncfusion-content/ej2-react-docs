

import { ContextMenuComponent, MenuEventArgs, MenuItemModel } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// @ts-ignore
import { data, IRecord } from '../datasource.tsx';


function App() {

    function getMenuItems() {
        let record: IRecord;
        const menuItems: MenuItemModel[] = [];
        for (const d of data) {
            record = d as IRecord;
            if (record.parentId) {
                if (!menuItems[record.parentId - 1].items) {
                    menuItems[record.parentId - 1].items = [];
                }
                menuItems[record.parentId - 1].items.push({ text: record.text });
            } else {
                menuItems.push({ text: record.text });
            }
        }
        return menuItems;
    }

    function itemBeforeEvent(args: MenuEventArgs) {
        if (!args.item.text) {
            args.element.classList.add('e-separator');
        }
    }

    return (
        <div className="container">
            <div id='target'>Right click / Touch hold to open the ContextMenu</div>
            <ContextMenuComponent id='contextmenu' target='#target'
                items={getMenuItems()} beforeItemRender = {itemBeforeEvent} />
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));


