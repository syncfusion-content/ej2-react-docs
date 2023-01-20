import { DateTime, Inject, RangeNavigatorComponent } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
function App() {
    const data = [];
    function chartLoad() {
        let value = 0;
        let point = {};
        for (let j = 1; j < 1090; j++) {
            value += (Math.random() * 10 - 5);
            value = value < 0 ? Math.abs(value) : value;
            point = { x: new Date(2000, 0, j), y: value, z: value + 10 };
            data.push(point);
        }
    }
    chartLoad();
    return <RangeNavigatorComponent id='charts' valueType='DateTime' intervalType='Months' intervalType='Quarter' enableGrouping={true} groupBy='Years' value={[new Date('2001-01-01'), new Date('2002-01-01')]} dataSource={data} xName='x' yName='y'>
      <Inject services={[DateTime]}/>
    </RangeNavigatorComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
