{% raw %}


import { BulletChartComponent, Inject} from '@syncfusion/ej2-react-charts';
import { BulletRangeCollectionDirective, BulletRangeDirective} from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    return (<BulletChartComponent id='ranges'
                        style={{ textAlign: "center" }}
                        animation={{ enable: false }}
                        valueField='value'
                        targetField='target'
                        title='Revenue'
                        minimum={0}
                        maximum={300}
                        interval={50}
                        dataSource={[{value: 270, target: 250}]}>
                        <BulletRangeCollectionDirective>
                            <BulletRangeDirective end={100} color='red' ></BulletRangeDirective>
                            <BulletRangeDirective end={200} color='blue'></BulletRangeDirective>
                            <BulletRangeDirective end={300} color='green'></BulletRangeDirective>
                        </BulletRangeCollectionDirective>

            </BulletChartComponent>);
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


{% endraw %}