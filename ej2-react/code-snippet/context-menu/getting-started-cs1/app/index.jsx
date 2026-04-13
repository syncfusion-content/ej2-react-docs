import { enableRipple } from '@syncfusion/ej2-base';
import { ContextMenuComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
function App() {
    let menuItems = [
        {
            text: 'Cut'
        },
        {
            text: 'Copy'
        },
        {
            text: 'Paste'
        }
    ];
    return (<div className="container">
            <div id='target'>Right click / Touch hold to open the ContextMenu</div>
            <ContextMenuComponent id='contextmenu' target='#target' items={menuItems}/>
          </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('element'));
