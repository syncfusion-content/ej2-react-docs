import * as React from 'react';
import * as ReactDom from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
//Enable ripple effect
enableRipple(true);
function App() {
    const content = "Button";
    return (<div className="e-bigger">
          <ButtonComponent content={content}></ButtonComponent>
        </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('sample'));
