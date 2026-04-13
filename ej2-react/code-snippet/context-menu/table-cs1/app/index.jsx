import { enableRipple } from '@syncfusion/ej2-base';
import { ContextMenuComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
function App() {
    let menuItems = [
        {
            iconCss: 'e-cm-icons e-cut',
            text: 'Cut',
        },
        {
            iconCss: 'e-icons e-copy',
            text: 'Copy'
        },
        {
            iconCss: 'e-cm-icons e-paste',
            text: 'Paste'
        },
        {
            separator: true
        },
        {
            iconCss: 'e-icons e-link',
            text: 'Link'
        },
        {
            iconCss: 'e-icons e-table',
            items: [
                {
                    id: 'table'
                }
            ],
            text: 'Table'
        }
    ];
    function createHeader() {
        const header = document.createElement('h4');
        header.textContent = 'Insert Table';
        return header;
    }
    function createTable() {
        const table = document.createElement('table');
        for (let i = 0; i < 5; i++) {
            const row = document.createElement('tr');
            table.appendChild(row);
            for (let j = 0; j < 6; j++) {
                const col = document.createElement('td');
                row.appendChild(col);
                col.setAttribute('class', 'data');
            }
        }
        return table;
    }
    function itemBeforeEvent(args) {
        if (args.item.id === 'table') {
            args.element.classList.add('bg-transparent');
            args.element.appendChild(createHeader());
            args.element.appendChild(createTable());
        }
    }
    return (<div className="container">
            <div id='target'>Right click / Touch hold to open the ContextMenu</div>
            <ContextMenuComponent id='contextmenu' target='#target' items={menuItems} beforeItemRender={itemBeforeEvent}/>
        </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('element'));
