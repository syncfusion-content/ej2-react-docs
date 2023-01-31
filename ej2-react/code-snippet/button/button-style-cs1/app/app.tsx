

import * as React from 'react';
import * as ReactDom from 'react-dom';
import {ButtonComponent} from '@syncfusion/ej2-react-buttons';
import { enableRipple } from '@syncfusion/ej2-base';

enableRipple(true);

function App() {
    return (
      <div>
          { /* Primary Button - Used to represent a primary action. */ }
          <ButtonComponent cssClass='e-primary'>Primary</ButtonComponent>

          { /* Success Button - Used to represent a positive action. */ }
          <ButtonComponent cssClass='e-success'>Success</ButtonComponent>

          { /* Info Button - Used to represent an informative action. */ }
          <ButtonComponent cssClass='e-info'>Info</ButtonComponent>

          { /* Warning Button - Used to represent an action with caution.*/ }
          <ButtonComponent cssClass='e-warning'>Warning</ButtonComponent>

          { /* Danger Button - Used to represent a negative action.*/ }
          <ButtonComponent cssClass='e-danger'>Danger</ButtonComponent>

          { /* Link Button - Changes the appearance of the Button like a hyperlink.*/ }
          <ButtonComponent cssClass='e-link'>Link</ButtonComponent>
      </div>
  );
}
export default App;
ReactDom.render(<App />,document.getElementById('button'));


