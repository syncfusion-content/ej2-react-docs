import { enableRipple } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
function App() {
    return (<div>
          {/* Small Button. */}
          <ButtonComponent cssClass='e-small'>Small</ButtonComponent>

          {/* Normal Button. */}
          <ButtonComponent>Normal</ButtonComponent>
      </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('button'));
