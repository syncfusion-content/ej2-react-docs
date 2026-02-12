import { enableRipple } from '@syncfusion/ej2-base';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);

// To render DropDownButton.
function App() {
    let ddb;
    let items = [
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
    // To open popup in particular position.
    function onOpen(args) {
        const elem = args.element.parentElement;
        elem.style.top = ddb.element.getBoundingClientRect().top - elem.offsetHeight + 'px';
    }
    return (<div>
        <DropDownButtonComponent ref={(scope) => { ddb = scope; }} items={items} open={onOpen} cssClass='e-caret-up'>Clipboard</DropDownButtonComponent>
    </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('button'));