

import { enableRipple } from '@syncfusion/ej2-base';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

// To render Switch.
function App() {
  return (
        <table className='size'>
          <tr>
              <td className='lSize'>Small</td>
              <td>
                  <SwitchComponent cssClass="e-small" />
              </td>
          </tr>
          <tr>
              <td className='lSize'>Default</td>
              <td>
                  <SwitchComponent />
              </td>
          </tr>
      </table>
  );
}
export default App;
ReactDom.render(<App />, document.getElementById('switch'));


