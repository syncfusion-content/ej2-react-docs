


import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SliderComponent } from '@syncfusion/ej2-react-inputs';

function App() {

  let defaultObj: SliderComponent;

  // Slider ticks customization
  let ticks01 = { placement: 'After', format: '##.## Km', largeStep: 20, smallStep: 10, showSmallTicks: true };
  let tooltip01 = { isVisible: true, format: '##.## Km' };

  let ticks02 = { placement: 'After', format: '##.#00', largeStep: 0.02, smallStep: 0.01, showSmallTicks: true };
  let tooltip02 = { isVisible: true, format: '##.#00' };

  let tooltip03 = { isVisible: true, format: '00##' };
  let ticks03 = { placement: 'After', format: '00##', largeStep: 20, smallStep: 10, showSmallTicks: true };

  return (
    <div id='container'>

      <div className='wrap'>
          <div className='label'>Slider formatted with unit representation</div>
          <SliderComponent id='slider' min={0} max={100} value={30} step={1} tooltip={tooltip01} ticks={ticks01} />
      </div>

      <div className='wrap'>
          <div className='label'>Slider formatted with three decimal specifiers</div>
          <SliderComponent id='slider1' min={0.1} max={0.2} value={0.13} step={0.01} tooltip={tooltip02} ticks={ticks02} />
      </div>

      <div className='wrap'>
          <div className='label'>Slider formatted with two leading zeros</div>
          <SliderComponent id='slider2' min={0} max={100} value={30} step={1} tooltip={tooltip03} ticks={ticks03} />
      </div>
  </div>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));


