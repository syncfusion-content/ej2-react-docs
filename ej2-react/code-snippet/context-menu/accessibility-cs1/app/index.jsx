import { enableRipple } from '@syncfusion/ej2-base';
import { ContextMenuComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
function App() {
    let cmenu;
    let menuItems = [
        {
            iconCss: 'e-menu-icons e-cut',
            text: 'Cut'
        },
        {
            iconCss: 'e-icons e-copy',
            text: 'Copy'
        },
        {
            iconCss: 'e-menu-icons e-paste',
            items: [
                {
                    iconCss: 'e-cm-icons e-pastetext',
                    text: 'Paste Text',
                },
                {
                    iconCss: 'e-cm-icons e-pastespecial',
                    text: 'Paste Special'
                }
            ],
            text: 'Paste'
        }
    ];
    function onCreated() {
        cmenu.open(40, 20);
    }
    return (<div className="container">
        <div id='target'>Right click / Touch hold to open the ContextMenu</div>
        <ContextMenuComponent ref={(scope) => cmenu = scope} id='contextmenu' items={menuItems} created={onCreated}/>
      </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('element'));
