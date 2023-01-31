import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SliderComponent } from '@syncfusion/ej2-react-inputs';
function App() {
    let ticks = {
        placement: "After",
        largeStep: 20,
        smallStep: 10,
        showSmallTicks: true
    };
    let tooltip = { placement: "Before", isVisible: true, showOn: "Always" };
    let value = 30;
    // Enables step
    let step = 10;
    return (<div id="container">
      <div className="wrap">
        <SliderComponent id="slider" value={value} step={step} tooltip={tooltip} ticks={ticks}/>
      </div>
    </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
