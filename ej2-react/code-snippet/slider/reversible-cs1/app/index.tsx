


import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SliderComponent } from '@syncfusion/ej2-react-inputs';

function App() {
  let ticks: TicksDataModel = {
    placement: "Before", 
    largeStep: 20, 
    smallStep: 5, 
    showSmallTicks: true
  };
  let tooltip: TooltipDataModel = { placement: "Before", isVisible: true, showOn: "Always" };
  // Minimum value
  let min = 100;
  // Maximum value
  let max = 0;
  // Slider current value
  let value = [30, 70];

  return (
    <div id="container">
      <div className="wrap">
        <SliderComponent
          id="slider"
          orientation='Vertical'
          type='Range'
          min={min}
          max={max}
          value={value}
          tooltip={tooltip}
          ticks={ticks}
        />
      </div>
    </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));


