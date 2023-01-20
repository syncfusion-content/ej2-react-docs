

import { BulletChartComponent, Inject} from '@syncfusion/ej2-react-charts';
import { BulletRangeCollectionDirective, BulletRangeDirective} from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    return (<BulletChartComponent id='ranges'
                        animation={{ enable: false }}
                        valueField='value'
                        targetField='target'
                        title='Revenue'
                        tickPosition='inside'
                        minimum={0}
                        maximum={30}
                        interval={5}
                        dataSource={[{value: 23, target: 22}]}>
                        <BulletRangeCollectionDirective>
                            <BulletRangeDirective end={20} color='red' ></BulletRangeDirective>
                            <BulletRangeDirective end={25} color='blue'></BulletRangeDirective>
                            <BulletRangeDirective end={30} color='green'></BulletRangeDirective>
                        </BulletRangeCollectionDirective>

            </BulletChartComponent>);
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


