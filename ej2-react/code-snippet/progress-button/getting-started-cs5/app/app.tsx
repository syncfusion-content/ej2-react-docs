

import { ProgressButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

// To render ProgressButton.
function App() {

  return (
  <div>
    <ProgressButtonComponent content='Spin Left' enableProgress= {true}/>
    </div>
  );
}
export default App;
ReactDom.render(<App />,document.getElementById('progress-button'));


