

import { enableRipple } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

function App() {
    // Click Event.
    function btnClick (): void {
      window.open("https://www.google.com");
    }
    return (
        <div>
            <ButtonComponent cssClass='e-link' onClick={btnClick}>Go to google</ButtonComponent>
        </div>
    );
}
export default App;
ReactDom.render(<App />,document.getElementById('button'));


