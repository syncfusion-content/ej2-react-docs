import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SliderComponent } from '@syncfusion/ej2-react-inputs';
function App() {
    return (<div id='container'>
      <div className="col-lg-12 control-section">
        <div className="slider-content-wrapper">
          <div className="slider_container">
              <div className="labelText slider-userselect">Square</div>
              <SliderComponent id='square_slider' min={0} max={100} value={30}/>
          </div>

          <div className="slider_container">
              <div className="labelText slider-userselect">Circle</div>
              <SliderComponent id='circle_slider' min={0} max={100} value={30}/>
          </div>

          <div className="slider_container">
              <div className="labelText slider-userselect">Oval</div>
              <SliderComponent id='oval_slider' min={0} max={100} value={30}/>
          </div>

          <div className="slider_container">
              <div className="labelText slider-userselect">Custom image</div>
              <SliderComponent id='image_slider' min={0} max={100} value={30}/>
          </div>
        </div>
      </div>
    </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
