
import {ButtonComponent} from '@syncfusion/ej2-react-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

function App() {
    return (
      <div>
          { /* Primary Button - Used to represent a primary action. */ }
          <ButtonComponent cssClass='e-primary'>Button</ButtonComponent>
      </div>
  );
}
export default App;
ReactDom.render(<App />,document.getElementById('button'));