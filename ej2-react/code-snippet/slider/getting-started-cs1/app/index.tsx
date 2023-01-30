


import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SliderComponent } from '@syncfusion/ej2-react-inputs';

function App() {
  let ticks01: TicksDataModel = {
    placement: "After",
    largeStep: 20,
    smallStep: 10,
    showSmallTicks: true
  };
  let tooltip01: TooltipDataModel = { placement: "Before", isVisible: true, showOn: "Always" };

  let ticks02: TicksDataModel = { placement: "After", largeStep: 1 };
  let tooltip02: TooltipDataModel = { placement: "Before", isVisible: true };

  let value = 30;
  let step = 10;
  let showButtons = true;

  function renderingTicksHandler(args: SliderTickEventArgs) {
    // Weekdays Array
    let daysArr: string[] = [
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

  function tooltipChangeHandler(args: SliderTooltipEventArgs) {
    // Customizing tooltip to display the Day (in numeric) of the week
    args.text = "Day " + (Number(args.value) + 1).toString();
  }

  return (
    <div id="container">
      <div className="wrap">
        <div className="label">Slider without formatted values</div>
        <SliderComponent
          id="slider"
          step={step}
          value={value}
          tooltip={tooltip01}
          ticks={ticks01}
          type="MinRange"
          showButtons={true}
        />
      </div>
      <div className="wrap">
        <div className="label">Slider with formatted values</div>
        <SliderComponent
          id="slider1"
          min={0}
          max={6}
          step={1}
          value={2}
          tooltip={tooltip02}
          ticks={ticks02}
          tooltipChange={tooltipChangeHandler.bind(this) as any}
          renderingTicks={renderingTicksHandler.bind(this) as any}
        />
      </div>
    </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));


