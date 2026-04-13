import { enableRipple } from '@syncfusion/ej2-base';
import { ContextMenuComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
function App() {
    let menuItems = [
        { text: 'ABS' },
        { text: 'ACOS' },
        { text: 'ACOSH' },
        { text: 'ACOT' },
        { text: 'ACOTH' },
        { text: 'AGGREGATE' },
        { text: 'COS' },
        { text: 'COSH' },
        { text: 'COT' },
        { text: 'COTH' }
    ];
    return (<div className="container">
            <div id='target'>Right click / Touch hold to open the ContextMenu</div>
            <ContextMenuComponent id='contextmenu' target='#target' cssClass='e-custom' items={menuItems}/>
        </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('element'));
