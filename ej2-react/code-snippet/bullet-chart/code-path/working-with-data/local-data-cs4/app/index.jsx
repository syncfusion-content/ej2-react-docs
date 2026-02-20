{% raw %}
import { BulletChartComponent } from '@syncfusion/ej2-react-charts';
import { BulletRangeCollectionDirective, BulletRangeDirective } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    return (<BulletChartComponent id='ranges' animation={{ enable: false }} height="400" valueField='value' targetField='target' categoryField='category' categoryLabelStyle={{ color: 'red', size: '13', fontWeight: 'bold' }} title='ales Rate' minimum={0} maximum={100} interval={10} dataSource={[{ value: 55, target: 7.5, category: 'Year 1' },
    { value: 7, target: 5, category: 'Year 2' },
    { value: 10, target: 6, category: 'Year 3' }]}>
        <BulletRangeCollectionDirective>
            <BulletRangeDirective end={35} color='darkred' opacity={0.5}></BulletRangeDirective>
            <BulletRangeDirective end={50} color='red' opacity={1}></BulletRangeDirective>
            <BulletRangeDirective end={75} color='blue' opacity={0.7}></BulletRangeDirective>
            <BulletRangeDirective end={90} color='lightgreen' opacity={1}></BulletRangeDirective>
            <BulletRangeDirective end={100} color='green' opacity={1}></BulletRangeDirective>
        </BulletRangeCollectionDirective>

    </BulletChartComponent>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
{% endraw %}