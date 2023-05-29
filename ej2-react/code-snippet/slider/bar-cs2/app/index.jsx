{% raw %}
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SliderComponent } from '@syncfusion/ej2-react-inputs';
function App() {
    let defaultObj = null;
    let sliderTrack = null;
    let sliderHandle = null;
    function changeEvent(args) {
        if (args.value > 0 && args.value <= 25) {
            // Change handle and range bar color to green when
            sliderHandle.style.backgroundColor = "green";
            sliderTrack.style.backgroundColor = "green";
        }
        else if (args.value > 25 && args.value <= 50) {
            // Change handle and range bar color to royal blue
            sliderHandle.style.backgroundColor = "royalblue";
            sliderTrack.style.backgroundColor = "royalblue";
        }
        else if (args.value > 50 && args.value <= 75) {
            // Change handle and range bar color to dark orange
            sliderHandle.style.backgroundColor = "darkorange";
            sliderTrack.style.backgroundColor = "darkorange";
        }
        else if (args.value > 75 && args.value <= 100) {
            // Change handle and range bar color to red
            sliderHandle.style.backgroundColor = "red";
            sliderTrack.style.backgroundColor = "red";
        }
    }
    function created() {
        sliderTrack = defaultObj.element.querySelector(".e-range");
        sliderHandle = defaultObj.element.querySelector(".e-handle");
        sliderHandle.style.backgroundColor = "green";
        sliderTrack.style.backgroundColor = "green";
    }
    return (<div id="container">
      <div className="col-lg-12 control-section">
        <div className="slider-content-wrapper">
          <div className="slider_container">
            <div className="slider-labeltext slider_userselect">Height</div>
            <SliderComponent id="height_slider" min={0} max={100} value={30}/>
          </div>

          <div className="slider_container">
            <div className="slider-labeltext slider_userselect">Gradient color</div>
            <SliderComponent id="gradient_slider" type="MinRange" min={0} max={100} value={30}/>
          </div>

          <div className="slider_container">
            <div className="slider-labeltext slider_userselect">
              Dynamic thumb and selection bar color
            </div>
            <SliderComponent id="dynamic_color_slider" ref={slider => {
            defaultObj = slider;
        }} type="MinRange" min={0} max={100} value={30} change={changeEvent.bind(this)} created={created.bind(this)}/>
          </div>
        </div>
      </div>
    </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
{% endraw %}