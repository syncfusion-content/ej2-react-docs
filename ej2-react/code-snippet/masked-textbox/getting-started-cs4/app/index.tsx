

import { MaskedTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
  let chars: any = { P: 'P,A,a,p', M: 'M,m'};
  return (
    // sets custom characters collection for non-mask elements 'P' and 'M'
    <MaskedTextBoxComponent
      mask="00:00 >PM"
      customCharacters={chars}
      placeholder="Time (ex: 10:00 PM, 10:00 AM)"
      floatLabelType="Always"
    />
  );
}

ReactDOM.render(<App />, document.getElementById('maskedContainer'));


