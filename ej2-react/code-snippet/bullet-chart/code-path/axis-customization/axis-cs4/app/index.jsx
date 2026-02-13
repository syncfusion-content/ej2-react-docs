{% raw %}
import { BulletChartComponent } from '@syncfusion/ej2-react-charts';
import { BulletRangeCollectionDirective, BulletRangeDirective } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    return (<BulletChartComponent id='ranges' animation={{ enable: false }} valueField='value' targetField='target' title='Sales Rate' enableGroupSeparator={true} minimum={0} maximum={2500} interval={250} dataSource={[{ value: 1500, target: 1300 }]}>
        <BulletRangeCollectionDirective>
            <BulletRangeDirective end={500} color='red'></BulletRangeDirective>
            <BulletRangeDirective end={1500} color='blue'></BulletRangeDirective>
            <BulletRangeDirective end={2500} color='green'></BulletRangeDirective>
        </BulletRangeCollectionDirective>

    </BulletChartComponent>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
{% endraw %}