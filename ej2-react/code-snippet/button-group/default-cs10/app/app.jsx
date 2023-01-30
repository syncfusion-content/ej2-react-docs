import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// To render outline ButtonGroup.
function App() {
    return (<div>
      <div className='e-btn-group e-outline'>
        <ButtonComponent cssClass='e-outline'>HTML</ButtonComponent>
        <ButtonComponent cssClass='e-outline'>CSS</ButtonComponent>
        <ButtonComponent cssClass='e-outline'>Javascript</ButtonComponent>
      </div>
    </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('buttongroup'));
