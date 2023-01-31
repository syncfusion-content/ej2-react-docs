

import { enableRipple } from '@syncfusion/ej2-base';
import {ButtonComponent} from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

function App() {
  return (
      <div>
          { /* To position the icon to the left of the text on a Button. */ }
          <ButtonComponent iconCss='e-btn-sb-icon e-prev-icon'>Previous</ButtonComponent>

          { /* To position the icon to the right of the text on a Button. */ }
          <ButtonComponent iconCss='e-btn-sb-icon e-stop-icon' iconPosition='Right'>Stop</ButtonComponent>
      </div>
  );
}
export default App;
ReactDom.render(<App />,document.getElementById('button'));


