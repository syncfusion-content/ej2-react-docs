import { enableRipple } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ContextMenuComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
function App() {
    let cMenu;
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
    function btnClick() {
        cMenu.open(40, 20);
    }
    return (<div className="container">
            <ContextMenuComponent id='contextmenu' ref={(scope) => cMenu = scope} items={menuItems}/>
            <ButtonComponent onClick={btnClick}>Open ContextMenu</ButtonComponent>
        </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('element'));
