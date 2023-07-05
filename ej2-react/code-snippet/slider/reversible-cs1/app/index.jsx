import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SliderComponent } from '@syncfusion/ej2-react-inputs';
function App() {
    let ticks = {
      placement: "Before", 
      largeStep: 20, 
      smallStep: 5, 
      showSmallTicks: true
    };
    let tooltip = { placement: "Before", isVisible: true, showOn: "Always" };
    // Set maximum value to min
    let min= 100;
    // Set minimum value to max
    let max= 0;
    // Slider current value
    let value= [30, 70];
    return (<div id="container">
      <div className="wrap">
        <SliderComponent id="slider" orientation='Vertical' type='Range' min={min} max={max} value={value} tooltip={tooltip} ticks={ticks}/>
      </div>
    </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
