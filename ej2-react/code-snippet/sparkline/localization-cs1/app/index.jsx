{% raw %}
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';
export class App extends React.Component {
    render() {
        return (<SparklineComponent id='sparkline' height='200px' width='350px' containerArea={{
                border: { color: '#033e96', width: 2 }
            }} tooltipSettings={{
                visible: true
            }} 
        // To specify currency format
        format={"c0"} useGroupingSeparator={true} lineWidth={3} padding={{ left: 20, right: 20, bottom: 20, top: 20 }} border={{ color: '#033e96', width: 2 }} type='Area' fill='#b2cfff' dataSource={[30000, 60000, 40000, 10000, 30000, 20000, 50000]}>
    <Inject services={[SparklineTooltip]}/>
        </SparklineComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('sparkline'));
{% endraw %}