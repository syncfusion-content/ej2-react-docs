


import { ProgressButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

function App() {

  return (
    <ProgressButtonComponent content='Progress' enableProgress = {true} cssClass='e-hide-spinner'/>
  );
}
export default App;
ReactDom.render(<App />, document.getElementById('progress-button'));



