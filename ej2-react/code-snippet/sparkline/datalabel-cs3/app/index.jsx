{% raw %}
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SparklineComponent } from '@syncfusion/ej2-react-charts';
export class App extends React.Component {
    render() {
        return (<SparklineComponent id='sparkline' height='200px' width='500px' axisSettings={{
                minX: -1, maxX: 7, maxY: 7, minY: -1
            }} fill='blue' valueType='Category' xName='x' yName='y' dataSource={[
                { x: 'Mon', y: 3 },
                { x: 'Tue', y: 5 },
                { x: 'Wed', y: 2 },
                { x: 'Thu', y: 4 },
                { x: 'Fri', y: 6 },
            ]} 
        // To enable data label for all points
        dataLabelSettings={{
                format: '${x} : ${y}',
                visible: ['All'],
                border: { color: 'blue', width: 1 },
                fill: 'blue', opacity: 0.4,
                textStyle: {
                    color: 'white'
                }
            }}>
        </SparklineComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('sparkline'));
{% endraw %}