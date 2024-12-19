import * as React from 'react';
import * as ReactDom from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
function App() {
    return (<div>
          {/* Primary Button - Used to represent a primary action. */}
          <ButtonComponent cssClass='e-primary'>button</ButtonComponent>
      </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('button'));
