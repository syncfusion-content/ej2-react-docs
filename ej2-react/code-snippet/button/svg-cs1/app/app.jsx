import { enableRipple } from '@syncfusion/ej2-base';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
enableRipple(true);
function App() {
    return (<div>
          <ButtonComponent iconCss='e-search-icon'/>
      </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('button'));
