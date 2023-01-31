import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';
// To render ButtonGroup.
function App() {
    return (<div>
      <h5>Normal behavior</h5>
      <div className='e-btn-group' role='group'>
        <ButtonComponent>HTML</ButtonComponent>
        <ButtonComponent>CSS</ButtonComponent>
        <ButtonComponent>Javascript</ButtonComponent>
      </div>
      <h5>Checkbox type behavior</h5>
      <div className='e-btn-group' role='group'>
          <input type="checkbox" id="checkbold" name="font" value='bold'/>
          <label className="e-btn" htmlFor="checkbold">Bold</label>
          <input type="checkbox" id="checkitalic" name="font" value='italic'/>
          <label className="e-btn" htmlFor="checkitalic">Italic</label>
          <input type="checkbox" id="checkunderline" name="font" value='underline'/>
          <label className="e-btn" htmlFor="checkunderline">Underline</label>
      </div>
      <h5>Radiobutton type behavior</h5>
      <div className='e-btn-group' role='group'>
          <input type="radio" id="radioleft" name="align" value='left'/>
          <label className="e-btn" htmlFor="radioleft">Left</label>
          <input type="radio" id="radiomiddle" name="align" value='middle'/>
          <label className="e-btn" htmlFor="radiomiddle">Center</label>
          <input type="radio" id="radioright" name="align" value='right'/>
          <label className="e-btn" htmlFor="radioright">Right</label>
      </div>
    </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('buttongroup'));
