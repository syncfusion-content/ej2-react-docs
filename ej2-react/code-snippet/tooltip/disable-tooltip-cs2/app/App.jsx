import * as React from 'react';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { ButtonComponent, SwitchComponent } from '@syncfusion/ej2-react-buttons';
function App() {
  let tooltip = null;
  function change(args) {
    if (!args.checked) {
      tooltip.destroy();
    }
    else {
      tooltip.render();
    }
  }
  let box = {
    display: "inline-block"
  };
  let position = {
    position: "relative",
    top: "75px",
    transform: "translateX(-10%)"
  };
  let padding = {
    padding: "0 25px 0 0"
  };
  let inline = {
    display: "inline-block "
  };
  let margin = {
    margin: "50px"
  };
  return (<div id="container">
    <div id="box" style={box}>
      <TooltipComponent id="box" content="Tooltip from disabled element">
        <ButtonComponent id="disabledbutton" disabled={true}>
          Disabled button
        </ButtonComponent>
      </TooltipComponent>
    </div>
    <div style={position}>
      <TooltipComponent content="Tooltip Content" target="#tooltip" style={inline} ref={d => (tooltip = d)}>
        <ButtonComponent id="tooltip" style={margin}>
          Show Tooltip
        </ButtonComponent>
      </TooltipComponent>
      <div className="switchContainer">
        <label htmlFor="checked" style={padding}>
          Enable Tooltip
        </label>
        <SwitchComponent id="checked" checked={true} change={change.bind(this)} />
      </div>
    </div>
  </div>);
}
export default App;
