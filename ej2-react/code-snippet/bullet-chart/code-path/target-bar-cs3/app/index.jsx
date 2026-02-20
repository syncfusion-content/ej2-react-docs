{% raw %}
import { BulletChartComponent } from '@syncfusion/ej2-react-charts';
import { BulletRangeCollectionDirective, BulletRangeDirective } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    return (<BulletChartComponent id='ranges' animation={{ enable: false }} valueField='value' targetField='target' title='Sales Rate' targetColor='color' targetWidth={15} minimum={0} maximum={100} interval={20} dataSource={[{ value: 55, target: 75, color: 'red' }]}>
        <BulletRangeCollectionDirective>
            <BulletRangeDirective end={35}></BulletRangeDirective>
            <BulletRangeDirective end={50}></BulletRangeDirective>
            <BulletRangeDirective end={100}></BulletRangeDirective>
        </BulletRangeCollectionDirective>
    </BulletChartComponent>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
{% endraw %}