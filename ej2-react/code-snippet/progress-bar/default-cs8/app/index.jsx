{% raw %}
import { ProgressBarComponent } from '@syncfusion/ej2-react-progressbar';
import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    return (<ProgressBarComponent id="circular" type='Circular' height='160px' width='90%' trackThickness={24} progressThickness={24} value={50} secondaryProgress={70} secondaryProgressColor='green' enableRtl={false} showProgressValue={true} trackColor="#F8C7D8" radius="100%" progressColor="#E3165B" cornerRadius="Round" animation={{
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