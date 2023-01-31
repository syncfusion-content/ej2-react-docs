import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// To render ButtonGroup with different styles.
function App() {
    return (<div>
      <div className='e-btn-group'>
        <ButtonComponent cssClass='e-info'>View</ButtonComponent>
        <ButtonComponent>Edit</ButtonComponent>
        <ButtonComponent cssClass='e-danger'>Delete</ButtonComponent>
      </div>
    </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('buttongroup'));
