

import * as React from 'react';
import * as ReactDom from 'react-dom';
import {ButtonComponent} from '@syncfusion/ej2-react-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

//To change the Button type.
function App() {
  return (
    <ButtonComponent cssClass='e-flat' content='Button'></ButtonComponent>
  );
}
export default App;
ReactDom.render(<App />,document.getElementById('button'));


