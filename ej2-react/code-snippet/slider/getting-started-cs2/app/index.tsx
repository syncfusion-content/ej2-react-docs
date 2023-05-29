


import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SliderComponent } from '@syncfusion/ej2-react-inputs';

function App() {
  let tooltip = { isVisible: true, format: "C2" };
  let value = 30;
  // Slider ticks customization
  let ticks: TicksDataModel = {
    placement: "After",
    format: "C2",
    largeStep: 20,
    smallStep: 10,
    showSmallTicks: true
  };

  return (
    <div id="container">
      <div className="wrap">
        <SliderComponent
          id="slider"
          min={0}
          max={100}
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


