{% raw %}
import { BulletChartComponent } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    const data = [
        { value: 100, target: 80 },
        { value: 200, target: 180 },
        { value: 300, target: 280 },
        { value: 400, target: 380 },
        { value: 500, target: 480 },
    ];
    return (<BulletChartComponent id='Revenue' style={{ textAlign: "center" }} animation={{ enable: false }} valueField='value' targetField='target' minimum={0} maximum={500} interval={50} dataSource={data}>
            </BulletChartComponent>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
{% endraw %}