

import { ProgressButtonComponent, ProgressEventArgs } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

function App() {

  function begin(args: ProgressEventArgs): void {
      args.step = 20;
  }

  return (
    <ProgressButtonComponent content='Progress Step' enableProgress = {true} begin={begin} cssClass='e-hide-spinner'/>
  );
}
export default App;
ReactDom.render(<App />, document.getElementById('progress-button'));



