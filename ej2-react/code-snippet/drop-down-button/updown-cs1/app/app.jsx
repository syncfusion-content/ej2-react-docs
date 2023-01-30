{% raw %}
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
    // To update up arrow with `e-caret-up` class.
    function beforeOpen() {
        ddb.cssClass = 'e-caret-up';
    }
    // To remove `e-caret-up` class.
    function beforeClose() {
        ddb.cssClass = '';
    }
    return (<div>
      <DropDownButtonComponent ref={(scope) => { ddb = scope; }} items={items} beforeOpen={beforeOpen} beforeClose={beforeClose}> Clipboard</DropDownButtonComponent>
      </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('button'));
{% endraw %}