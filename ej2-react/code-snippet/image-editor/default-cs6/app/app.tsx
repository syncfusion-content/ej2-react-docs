

import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import * as React from 'react';
import * as ReactDOM from "react-dom";
import './index.css';

function App() {

  return (
      <div id="wrapperDiv">
          <ImageEditorComponent/>
      </div>
  );
}
export default App;

ReactDOM.render(<App />, document.getElementById('image-editor'));


