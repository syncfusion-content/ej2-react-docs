


import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

// To render ButtonGroup in form.
function App() {
  function componentDidMount(): void {
    (document.getElementById('female') as HTMLInputElement).checked = true;
  }
  return (
    <div>
      <form>
        <div className='e-btn-group'>
          <input type="radio" id="male" name="gender" value="male"/>
          <label className="e-btn" htmlFor="male">Male</label>
          <input type="radio" id="female" name="gender" value="female"/>
          <label className="e-btn" htmlFor="female">Female</label>
          <input type="radio" id="transgender" name="gender" value="transgender"/>
          <label className="e-btn" htmlFor="transgender">Transgender</label>
        </div>
        <ButtonComponent isPrimary={true}>Submit</ButtonComponent>
      </form>
    </div>
  );
}
export default App;
ReactDom.render(<App />,document.getElementById('buttongroup'));



