import * as React from 'react';
import * as ReactDom from 'react-dom';
// To render checkbox type ButtonGroup.
function App() {
    return (<div>
      <div className='e-btn-group'>
          <input type="checkbox" id="checkbold" name="font" value="bold" checked={true}/>
          <label className="e-btn" htmlFor="checkbold">Bold</label>
          <input type="checkbox" id="checkitalic" name="font" value="italic"/>
          <label className="e-btn" htmlFor="checkitalic">Italic</label>
          <input type="checkbox" id="checkline" name="font" value="underline"/>
          <label className="e-btn" htmlFor="checkline">Underline</label>
      </div>
    </div>);
}
export default App;
ReactDom.render(<App />, document.getElementById('buttongroup'));
