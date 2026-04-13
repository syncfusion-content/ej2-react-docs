

import { closest, createElement, enableRipple} from '@syncfusion/ej2-base';
import { createCheckBox } from '@syncfusion/ej2-buttons';
import { BeforeOpenCloseMenuEventArgs, ContextMenuComponent, MenuEventArgs, MenuItemModel } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

function App() {

    let menuItems: MenuItemModel[] = [
        { text: 'Option 1' },
        { text: 'Option 2' },
        { text: 'Option 3' }
    ];
    function itemBeforeEvent(args: MenuEventArgs) {
        const check = createCheckBox(createElement, false, {
            checked: (args.item.text === 'Option 1' || args.item.text === 'Option 2') ? true : false,
            label: args.item.text
        });
        args.element.innerHTML = '';
        args.element.appendChild(check);
    }

    function beforeClose(args: BeforeOpenCloseMenuEventArgs) {
        if (closest((args.event.target as HTMLElement), '.e-menu-item')) {
            args.cancel = true;
            const selectedElem = args.element.querySelectorAll('.e-selected');
            for (const elem of selectedElem as any) {
                const ele = elem as HTMLElement;
                ele.classList.remove('e-selected');
            }
            const checkbox = closest(args.event.target as Element, '.e-checkbox-wrapper') as HTMLElement;
            if (checkbox) {
                const frame = checkbox.querySelector('.e-frame');
            if (checkbox && frame.classList.contains('e-check')) {
                frame.classList.remove('e-check');
            } else if (checkbox) {
                frame.classList.add('e-check');
            }
            }
        }
    }
    return (
        <div className="container">
            <div id='target'>Right click / Touch hold to open the ContextMenu</div>
            <ContextMenuComponent id='contextmenu' target='#target' items={menuItems} beforeItemRender={itemBeforeEvent} beforeClose={beforeClose} />
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));


