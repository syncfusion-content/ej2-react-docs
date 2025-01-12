import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SliderComponent } from '@syncfusion/ej2-react-inputs';
function App() {
  let tooltip = { placement: "Before", isVisible: true };
  let value = 2;
  // Slider ticks customization
  let ticks = { placement: "After", largeStep: 1 };
  function renderingTicksHandler(args) {
    // Weekdays Array
    let daysArr = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thrusday",
      "Friday",
      "Saturday"
    ];
    // Customizing each ticks text into weeksdays
    args.text = daysArr[parseFloat(args.value.toString())];
  }
  function tooltipChangeHandler(args) {
    // Customizing tooltip to display the Day (in numeric) of the week
    args.text = "Day " + (Number(args.value) + 1).toString();
  }
  return (<div id="container">
    <div className="wrap">
      <SliderComponent id="slider" min={0} max={6} step={1} value={value} tooltip={tooltip} ticks={ticks} tooltipChange={tooltipChangeHandler.bind(this)} renderingTicks={renderingTicksHandler.bind(this)} />
    </div>
  </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
