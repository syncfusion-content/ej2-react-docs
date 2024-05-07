import * as React from 'react';
import * as ReactDom from 'react-dom';
// To render radio type ButtonGroup.
function App() {
    return (<div>
      <div className='e-btn-group'>
          <input type="radio" id="radioleft" name="align" value="left"/>
          <label className="e-btn" htmlFor="radioleft">Left</label>
          <input type="radio" id="radiomiddle" name="align" value="middle"/>
          <label className="e-btn" htmlFor="radiomiddle">Center</label>
          <input type="radio" id="radioright" name="align" value="right"/>
          <label className="e-btn" htmlFor="radioright">Right</label>
      </div>
    </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('buttongroup'));
