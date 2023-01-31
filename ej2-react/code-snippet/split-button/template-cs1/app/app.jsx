import { createElement, enableRipple } from '@syncfusion/ej2-base';
import { SplitButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
// To render SplitButton.
function App() {
    let items = [
        {
            text: 'Cut',
        },
        {
            text: 'Copy',
        },
        {
            text: 'Paste',
        }
    ];
    function itemBeforeEvent(args) {
        const shortCutSpan = createElement('span');
        const text = args.item.text;
        args.element.appendChild(shortCutSpan);
        shortCutSpan.setAttribute('class', 'shortcut');
        const clsName = (text === 'Copy') ? 'e-icons' : 'e-sb-icons';
        shortCutSpan.classList.add(clsName);
        (text === 'Cut') ? shortCutSpan.classList.add('e-cut') : (text === 'Paste') ? shortCutSpan.classList.add('e-paste') : shortCutSpan.classList.add('e-copy');
    }
    return (<div>
      <SplitButtonComponent items={items} beforeItemRender={itemBeforeEvent} iconCss='e-sb-icons e-paste'/>
    </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('button'));
