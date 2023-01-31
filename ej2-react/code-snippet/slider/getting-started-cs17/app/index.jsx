import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SliderComponent } from '@syncfusion/ej2-react-inputs';
function App() {
    let ticks = {
        placement: "After",
        largeStep: 200,
        smallStep: 100,
        showSmallTicks: true
    };
    let tooltip = { placement: "Before", isVisible: true, showOn: "Always" };
    // Minimum value
    let min = 100;
    // Maximum value
    let max = 1100;
    // Slider current value
    let value = 400;
    return (<div id="container">
      <div className="wrap">
        <SliderComponent id="slider" min={min} max={max} value={value} tooltip={tooltip} ticks={ticks}/>
      </div>
    </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
