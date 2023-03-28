{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ProgressBarComponent } from "@syncfusion/ej2-react-progressbar";
function App() {
    return (<ProgressBarComponent id="lineardeterminate" type="Linear" height="60" tooltip={{enable: true, format: "Progress: ${value}"}} value={100} animation={{
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