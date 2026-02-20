{% raw %}
import { BulletChartComponent } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    return (<BulletChartComponent id='title' style={{ textAlign: "center" }} animation={{ enable: false }} valueField='value' targetField='target' title='Revenue' minimum={0} maximum={300} interval={50} dataSource={[{ value: 270, target: 250 }]}>
    </BulletChartComponent>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
{% endraw %}