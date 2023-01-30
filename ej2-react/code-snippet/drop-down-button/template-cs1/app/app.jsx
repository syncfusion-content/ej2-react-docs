import { enableRipple } from '@syncfusion/ej2-base';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
// To render DropDownButton.
function App() {
    let items = [
        {
            text: 'Edit'
        },
        {
            text: 'Cut'
        }
    ];
    function itemBeforeEvent(args) {
        if (args.item.text === 'Edit') {
            args.element.innerHTML = '<span></span><div><b>Paste Text</b><div>Provides option to paste only the<br>selected text.</div></div>';
            args.element.style.height = '80px';
            const span = args.element.children[0];
            span.setAttribute('class', 'e-cm-icons e-pastetext e-align');
            const div = args.element.children[1];
            div.setAttribute('class', 'e-div-align');
        }
        else {
            args.element.innerHTML = '<span></span><div><b>Paste Special</b><div>Provides options to paste formulas,<br> values, comments, validations etc...</div></div>';
            args.element.style.height = '80px';
            const span = args.element.children[0];
            span.setAttribute('class', 'e-cm-icons e-pastespecial e-align');
            const div = args.element.children[1];
            div.setAttribute('class', 'e-div-align');
        }
    }
    return (<div>
              <DropDownButtonComponent items={items} iconCss='e-ddb-icons e-paste' cssClass='e-vertical' iconPosition='Top' beforeItemRender={itemBeforeEvent}>Paste</DropDownButtonComponent>
          </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('button'));
