


import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SliderComponent, SliderChangeEventArgs } from '@syncfusion/ej2-react-inputs';

function App() {

  let defaultObj: SliderComponent;
  let value: number[] = [30, 70];

  let ticks: object = { placement: 'Before', largeStep: 20, smallStep: 5, showSmallTicks: true };
  // Initialize tooltip with placement and showOn
  let tooltip: object = { isVisible: true, placement: 'Before', showOn: 'Focus' };

  // Set the limit values for the minrange slider
  let minLimits: object = { enabled: true, minStart: 10, minEnd: 40 };
  // Set the limit values for the range slider
  let rangeLimits: object = { enabled: true, minStart: 10, minEnd: 40, maxStart: 60, maxEnd: 90 };

  return (
    <div id='container'>
    <div className="content-wrapper">
      <div className='sliderwrap'>
          <label className="userselect">MinRange Slider With Limits</label>
          <SliderComponent id='minrange'
            type='MinRange'
              min={0} max={100} value={30} ticks={ticks} tooltip={tooltip} limits={minLimits} />
      </div>

      <div className='sliderwrap'>
          <label className="userselect">Range Slider With Limits</label>
          <SliderComponent id='range' type='Range'
              min={0} max={100} value={value} ticks={ticks} tooltip={tooltip} limits={rangeLimits} />
      </div>
    </div>
    </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));


