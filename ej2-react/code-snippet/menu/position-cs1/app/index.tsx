

import { closest, enableRipple} from '@syncfusion/ej2-base';
import { BeforeOpenCloseMenuEventArgs, MenuComponent, MenuItemModel } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);

function App() {
    // Menu items definition
    let menuItems: MenuItemModel[] = [
        {
            items: [
                { text: 'Open' },
                { text: 'Save' },
                { text: 'Exit' }
            ],
            text: 'File'
        },
        {
            items: [
                { text: 'Cut' },
                { text: 'Copy' },
                { text: 'Paste' }
            ],
            text: 'Edit'
        },
        {
            items: [
                { text: 'Toolbar' },
                { text: 'Sidebar' }
            ],
            text: 'View'
        },
        {
            items: [
                { text: 'Spelling & Grammar' },
                { text: 'Customize' },
                { text: 'Options' }
            ],
            text: 'Tools'
        },
        { text: 'Go' },
        { text: 'Help' }
    ];

    function onBeforeOpen(args: BeforeOpenCloseMenuEventArgs) {
        // Getting parent menu item element offset
        const relativeOffset = closest(args.event.target as Element, '.e-menu-item').getBoundingClientRect();
        // Getting sub menu wrapper element using closest method
        const subMenuEle = closest(args.element, '.e-menu-wrapper') as HTMLElement;
        subMenuEle.style.display = 'block';
        args.top = (relativeOffset.top - subMenuEle.getBoundingClientRect().height) + pageYOffset;
        args.left = relativeOffset.left + pageXOffset;
        subMenuEle.style.display = '';
    }

    return (
        <MenuComponent items={menuItems} beforeOpen={onBeforeOpen}/>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('element'));


