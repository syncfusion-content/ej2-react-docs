{% raw %}
import { ProgressBarComponent } from '@syncfusion/ej2-react-progressbar';
import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    return (<ProgressBarComponent id="circular" type='Circular' height='160px' width='90%' trackThickness={80} progressThickness={10} value={100} enableRtl={false} trackColor="#FFD939" radius="100%" innerRadius='80%' progressColor="white" cornerRadius="Round" animation={{
            enable: true,
            duration: 2000,
            delay: 0
        }}>
         </ProgressBarComponent>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("container"));
{% endraw %}