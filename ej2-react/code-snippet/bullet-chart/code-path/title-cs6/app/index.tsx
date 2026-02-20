{% raw %}


import { BulletChartComponent, Inject } from '@syncfusion/ej2-react-charts';
import { BulletRangeCollectionDirective, BulletRangeDirective } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    return (<BulletChartComponent id='ranges'
        animation={{ enable: false }}
        valueField='value'
        targetField='target'
        title='Sales Rate in dollars'
        subtitle='(in dollars $)'
        titlePosition='Bottom'
        labelFormat='${value}'
        minimum={0}
        maximum={100}
        interval={20}
        dataSource={[{ value: 55, target: 45 }]}>
        <BulletRangeCollectionDirective>
            <BulletRangeDirective end={35} color='red' ></BulletRangeDirective>
            <BulletRangeDirective end={50} color='blue'></BulletRangeDirective>
            <BulletRangeDirective end={100} color='green'></BulletRangeDirective>
        </BulletRangeCollectionDirective>
    </BulletChartComponent>);
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}