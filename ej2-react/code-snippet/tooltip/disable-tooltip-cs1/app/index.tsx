import * as React from 'react';
import * as ReactDom from 'react-dom';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { SwitchComponent } from '@syncfusion/ej2-react-buttons';

function App() {
  let tooltip: TooltipComponent;
  function change(args) {
    if (!args.checked) {
      tooltip.destroy();
    } else {
      tooltip.render();
    }
  }
  let box: object = {
    display: 'inline-block'
  }
  let position: object = {
    position: 'relative', top: '75px', transform: 'translateX(-10%)'
  }
  let padding: object = {
    padding: '0 25px 0 0'
  }
  let inline: object = {
    display: 'inline-block '
  }
  let margin: object = {
    margin: '50px'
  }
  return (
    <div id='container'>
      <div id="box" style={box}>
        <TooltipComponent id="box" content='Tooltip from disabled element'>
          <button className="e-btn" id="disabledbutton" disabled={true}>Disabled button</button>
        </TooltipComponent>
      </div>
      <div style={position}>
        <TooltipComponent content='Tooltip Content' target='#tooltip' style={inline} ref={d =>tooltip = d} >
          <button className="e-btn" id="tooltip" style={margin}>Show Tooltip</button>
        </TooltipComponent>
        <div className="switchContainer">
          <label htmlFor="checked" style={padding}>Enable Tooltip</label>
          <SwitchComponent id="checked" checked={true} change={change.bind(this)}></SwitchComponent>
        </div>
      </div>
    </div>
  );
}
export default App;
ReactDom.render(<App />, document.getElementById('sample'));

