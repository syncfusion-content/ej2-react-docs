{% raw %}

import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

function App() {
    return (<SparklineComponent id='sparkline' height='100px' width='70%' tooltipSettings={{
        visible: true, format: '${XValue} : ${YValue}'
    }} dataSource={[
        { XValue: '2005', YValue: 20090440 },
        { XValue: '2006', YValue: 20264080 },
        { XValue: '2007', YValue: 20434180 },
        { XValue: '2008', YValue: 21007310 },
        { XValue: '2009', YValue: 21262640 },
        { XValue: '2010', YValue: 21515750 },
        { XValue: '2011', YValue: 21766710 },
        { XValue: '2012', YValue: 22015580 },
        { XValue: '2013', YValue: 22262500 },
        { XValue: '2014', YValue: 22507620 }
    ]} xName='XValue' yName='YValue' type='Area'>
        <Inject services={[SparklineTooltip]} />
    </SparklineComponent>);
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('sparkline'));
root.render(<App />);

{% endraw %}