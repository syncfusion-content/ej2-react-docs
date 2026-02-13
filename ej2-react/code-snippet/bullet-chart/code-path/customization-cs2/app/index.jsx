{% raw %}
import { BulletChartComponent } from '@syncfusion/ej2-react-charts';
import { BulletRangeCollectionDirective, BulletRangeDirective } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    return (<BulletChartComponent id='ranges' animation={{ enable: false }} valueField='value' targetField='target' enableRtl={true} minimum={0} maximum={2000} interval={200} dataSource={[{ value: 1500, target: 1000 }]}>
        <BulletRangeCollectionDirective>
            <BulletRangeDirective end={500} color='red'></BulletRangeDirective>
            <BulletRangeDirective end={1500} color='blue'></BulletRangeDirective>
            <BulletRangeDirective end={2000} color='green'></BulletRangeDirective>
        </BulletRangeCollectionDirective>
    </BulletChartComponent>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
{% endraw %}