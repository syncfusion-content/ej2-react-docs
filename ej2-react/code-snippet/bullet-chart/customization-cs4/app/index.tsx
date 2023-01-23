{% raw %}


import { BulletChartComponent, Inject} from '@syncfusion/ej2-react-charts';
import { BulletRangeCollectionDirective, BulletRangeDirective} from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    return (<BulletChartComponent id='ranges'
                animation={{ enable: false }}
                        valueField='value'
                        targetField='target'
                        title='Profit in %'
                        theme='HighContrast'
                        minimum={0}
                        maximum={100}
                        interval={10}
                        dataSource={[{value: 50, target: 45}]}>
                        <BulletRangeCollectionDirective>
                            <BulletRangeDirective end={15} color='red' ></BulletRangeDirective>
                            <BulletRangeDirective end={50} color='blue'></BulletRangeDirective>
                            <BulletRangeDirective end={100} color='green'></BulletRangeDirective>
                        </BulletRangeCollectionDirective>
            </BulletChartComponent>);
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}