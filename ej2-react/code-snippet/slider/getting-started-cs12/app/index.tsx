

import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SliderComponent } from '@syncfusion/ej2-react-inputs';

function App() {
  let min = new Date("2013-06-13").getTime();
  let max = new Date("2013-06-21").getTime();
  let step = 86400000;
  let value = new Date("2013-06-15").getTime();

  // Slider ticks customization
  let ticks: TicksDataModel = { placement: "After", largeStep: 2 * 86400000 };
  let tooltip: TooltipDataModel = { placement: "Before", isVisible: true };

  function renderingTicksHandler(args: SliderTickEventArgs) {
    let totalMiliSeconds = Number(args.value);
    // Converting the current milliseconds to the respective date in desired format
    let custom = { year: "numeric", month: "short", day: "numeric" };
    args.text = new Date(totalMiliSeconds).toLocaleDateString("en-us", custom);
  }

  function tooltipChangeHandler(args: SliderTooltipEventArgs) {
    let totalMiliSeconds = Number(args.text);
    // Converting the current milliseconds to the respective date in desired format
    let custom = { year: "numeric", month: "short", day: "numeric" };
    args.text = new Date(totalMiliSeconds).toLocaleDateString("en-us", custom);
  }
  return (
    <div id="container">
      <div className="wrap">
        <SliderComponent
          id="slider"
          min={min}
          max={max}
          value={value}
          step={step}
          tooltip={tooltip}
          ticks={ticks}
          showButtons={true}
          tooltipChange={tooltipChangeHandler.bind(this) as any}
          renderingTicks={renderingTicksHandler.bind(this) as any}
        />
      </div>
    </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));



