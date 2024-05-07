

import { enableRipple } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

function App() {
  return (
      <div>
          {/* Block Button. */}
          <ButtonComponent cssClass='e-block'>Block Button</ButtonComponent>

          {/* Primary Block Button. */}
          <ButtonComponent cssClass='e-block' isPrimary={true}>Block Button</ButtonComponent>

          {/* Success Block Button. */}
          <ButtonComponent cssClass='e-block e-success'>Block Button</ButtonComponent>
      </div>
  );
}
export default App;
ReactDom.render(<App />,document.getElementById('button'));


