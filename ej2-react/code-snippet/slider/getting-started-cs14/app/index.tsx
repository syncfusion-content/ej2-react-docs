


import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SliderComponent } from '@syncfusion/ej2-react-inputs';

function App() {
  let min = new Date(2013, 6, 13, 11).getTime();
  let max = new Date(2013, 6, 13, 17).getTime();
  let value = new Date(2013, 6, 13, 13).getTime();
  let step = 3600000;

  // Slider ticks customization
  let ticks: TicksDataModel = { placement: "After", largeStep: 2 * 3600000 };
  let tooltip: TooltipDataModel = { placement: "Before", isVisible: true };

  function renderingTicksHandler(args: SliderTickEventArgs) {
    let totalMiliSeconds = Number(args.value);
    let custom = { hour: "2-digit", minute: "2-digit" };
    args.text = new Date(totalMiliSeconds).toLocaleTimeString("en-us", custom);
  }

  function tooltipChangeHandler(args: SliderTooltipEventArgs) {
    let totalMiliSeconds = Number(args.text);
    let custom = { hour: "2-digit", minute: "2-digit" };
    args.text = new Date(totalMiliSeconds).toLocaleTimeString("en-us", custom);
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



