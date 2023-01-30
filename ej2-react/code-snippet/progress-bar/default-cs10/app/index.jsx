{% raw %}
import { ProgressBarComponent } from '@syncfusion/ej2-react-progressbar';
import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    return (<ProgressBarComponent id="Circular" type='Circular' height='160px' trackThickness={24} progressThickness={24} minimum={0} maximum={1} value={0.5} animation={{
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