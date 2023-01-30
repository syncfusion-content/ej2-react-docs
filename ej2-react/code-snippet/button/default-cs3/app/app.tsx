

import { enableRipple } from '@syncfusion/ej2-base';
import {ButtonComponent} from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

function App() {
  return (
      <div>
          <ButtonComponent enableRtl={true} iconCss='e-btn-icons e-setting-icon'>Settings</ButtonComponent>
      </div>
  );
}
export default App;
ReactDom.render(<App />,document.getElementById('button'));


