import { enableRipple } from '@syncfusion/ej2-base';
import { SplitButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
// To render SplitButton.
function App() {
    let items = [
        {
            text: 'Autosum'
        },
        {
            text: 'Average'
        },
        {
            text: 'Count numbers'
        },
        {
            text: 'Min'
        },
        {
            text: 'Max'
        }
    ];
    return (<div>
      <SplitButtonComponent items={items} enableRtl={true} iconCss='e-sb e-sigma'>Autosum</SplitButtonComponent>
    </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('button'));
