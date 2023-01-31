{% raw %}
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SliderComponent } from '@syncfusion/ej2-react-inputs';
function App() {
    let defaultObj;
    let min = new Date("2013-06-13").getTime();
    let max = new Date("2013-06-21").getTime();
    let step = 86400000;
    let value = new Date("2013-06-15").getTime();
    // Slider ticks customization
    let ticks = { placement: 'After', largeStep: 2 * 86400000 };
    let tooltip = { placement: 'Before', isVisible: true };
    function renderingTicksHandler(args) {
        let totalMiliSeconds = Number(args.value);
        // Converting the current milliseconds to the respective date in desired format
        let custom = { year: "numeric", month: "short", day: "numeric" };
        args.text = new Date(totalMiliSeconds).toLocaleDateString("en-us", custom);
    }
    function tooltipChangeHandler(args) {
        let totalMiliSeconds = Number(args.text);
        // Converting the current milliseconds to the respective date in desired format
        let custom = { year: "numeric", month: "short", day: "numeric" };
        args.text = new Date(totalMiliSeconds).toLocaleDateString("en-us", custom);
    }
    return (<div id='container'>
        <div className='wrap'>
          <SliderComponent id='slider' min={min} max={max} value={value} step={step} tooltip={tooltip} ticks={ticks} showButtons={true} ref={(slider) => { defaultObj = slider; }} tooltipChange={tooltipChangeHandler.bind(this)} renderingTicks={renderingTicksHandler.bind(this)}/>
        </div>
    </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('element'));
{% endraw %}