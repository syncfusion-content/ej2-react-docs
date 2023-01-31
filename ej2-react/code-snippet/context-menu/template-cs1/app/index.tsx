

import { createElement, enableRipple } from '@syncfusion/ej2-base';
import { ContextMenuComponent, MenuEventArgs, MenuItemModel } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

function App() {
  let menuItems: MenuItemModel[] = [
    {
        text: 'Save as...'
    },
    {
        text: 'View page source'
    },
    {
        text: 'Inspect'
    }];
    function itemBeforeEvent(args: MenuEventArgs) {
        const shortCutSpan = createElement('span');
        const text = args.item.text;
        const shortCutText = text === 'Save as...' ? 'Ctrl + S' : (text === 'View page source' ? 'Ctrl + U' : 'Ctrl + Shift + I');
        shortCutSpan.textContent = shortCutText;
        args.element.appendChild(shortCutSpan);
        shortCutSpan.setAttribute('class','shortcut');
    }

    return (
            <div class="container">
              <div id='target'>Right click / Touch hold to open the ContextMenu</div>
              <ContextMenuComponent id='contextmenu' target='#target'
              items={menuItems} beforeItemRender={itemBeforeEvent}/>
           </div>
        );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));


