import { BulletChartComponent, Inject } from '@syncfusion/ej2-react-charts';
import { BulletTooltip } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";

function App() {
    return (<BulletChartComponent id='tooltip'
        style={{ textAlign: "center" }}
        animation={{ enable: false }}
        tooltip={{ enable: true }}
        valueField='value'
        targetField='target'
        title='Revenue'
        minimum={0}
        maximum={300}
        interval={50}
        dataSource={[{ value: 270, target: 250 }]}>
        <Inject services={[BulletTooltip]} />
    </BulletChartComponent>);
};
export default App;
const root = ReactDOM.createRoot(document.getElementById('charts'));
root.render(<App />);
