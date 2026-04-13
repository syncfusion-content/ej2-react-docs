import { enableRipple } from '@syncfusion/ej2-base';
import { MenuComponent } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
function App() {
    let menuObj;
    let menuItems = [
        {
            iconCss: 'em-icons e-file',
            items: [
                { text: 'Open', iconCss: 'em-icons e-open' },
                { text: 'Save', iconCss: 'e-icons e-save' },
                { separator: true },
                { text: 'Exit' }
            ],
            text: 'File'
        },
        {
            iconCss: 'em-icons e-edit',
            items: [
                { text: 'Cut', iconCss: 'em-icons e-cut' },
                { text: 'Copy', iconCss: 'em-icons e-copy' },
                { text: 'Paste', iconCss: 'em-icons e-paste' }
            ],
            text: 'Edit'
        },
        { text: 'Format' },
        { text: 'View' },
        { text: 'Bookmarks' },
        { text: 'Tools' },
        { separator: true },
        { text: 'Help' }
    ];
    function beforeItemRender(args) {
        if (['File', 'Open', 'Save'].indexOf(args.item.text) > -1) {
            // To underline a First character.
            const underlinedText = '<u>' + args.item.text.slice(0, 1) + '</u>' + args.item.text.slice(1);
            args.element.innerHTML = args.element.innerHTML.replace(args.item.text, underlinedText);
        }
    }
    return (<MenuComponent items={menuItems} beforeItemRender={beforeItemRender}/>);
}
export default App;
ReactDom.render(<App />, document.getElementById('element'));
