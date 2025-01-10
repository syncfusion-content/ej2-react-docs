import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SliderComponent } from '@syncfusion/ej2-react-inputs';
function App() {
  let tooltip = {
    placement: "Before",
    isVisible: true,
    showOn: "Always",
    format: "P0"
  };
  let value = 0.3;
  // Slider ticks customization
  let ticks = {
    placement: "After",
    largeStep: 0.2,
    smallStep: 0.1,
    showSmallTicks: true,
    format: "P0"
  };
  return (<div id="container">
    <div className="wrap">
      <SliderComponent id="slider" min={0} max={1} step={0.01} value={value} tooltip={tooltip} ticks={ticks} />
    </div>
  </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
