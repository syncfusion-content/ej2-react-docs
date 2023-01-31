{% raw %}
import { ProgressBarComponent } from '@syncfusion/ej2-react-progressbar';
import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    return (<ProgressBarComponent id="linear2" type='Linear' value={100} animation={{
            enable: true,
            duration: 2000,
            delay: 0
        }} progressCompleted={(args) => {
            args.value = 50;
        }}>
          </ProgressBarComponent>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("container"));
{% endraw %}