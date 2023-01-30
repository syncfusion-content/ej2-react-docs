import { enableRipple } from '@syncfusion/ej2-base';
import { SplitButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
// To render SplitButton.
function App() {
    let items = [
        {
            iconCss: 'e-sb-icons e-cut',
            text: 'Cut'
        },
        {
            iconCss: 'e-icons e-copy',
            text: 'Copy'
        },
        {
            iconCss: 'e-sb-icons e-paste',
            text: 'Paste'
        }
    ];
    return (<div>
      <SplitButtonComponent iconCss="e-sb-icons e-paste" items={items}>Paste</SplitButtonComponent>
    </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('button'));
