import { enableRipple } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
function App() {
    return (<div>
          {/* Flat Button. */}
          <ButtonComponent cssClass='e-flat'>Flat</ButtonComponent>

          {/* Outline Button. */}
          <ButtonComponent cssClass='e-outline'>Outline</ButtonComponent>

          {/* Round Button - Icon can be loaded by setting "e-icons e-plus-icon" in "iconCss" property.
        Use "e-icons" class name to load Essential JS 2 built-in icons.
        Use "e-plus-icon" class name to load plus icon, that you can refer in "styles.css". */}
          <ButtonComponent cssClass='e-round' iconCss='e-icons e-plus-icon' isPrimary={true}/>
      </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('button'));
