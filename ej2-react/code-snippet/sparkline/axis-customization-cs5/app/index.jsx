{% raw %}
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SparklineComponent } from '@syncfusion/ej2-react-charts';
export class App extends React.Component {
    render() {
        return (<SparklineComponent id='sparkline' height='150px' width='130px' dataSource={[
                { x: 0, yval: 50 },
                { x: 1, yval: 30 },
                { x: 2, yval: 20 },
                { x: 3, yval: 30 },
                { x: 4, yval: 50 },
                { x: 5, yval: 40 },
                { x: 6, yval: 20 },
                { x: 7, yval: 10 },
                { x: 8, yval: 30 },
                { x: 9, yval: 10 },
                { x: 10, yval: 40 }
            ]} 
        // Assign the dataSource values to series of sparkline 'xName and yName'
        xName='x' yName='yval' 
        // Set min and max values to the y-axis of sparkline
        axisSettings={{
                value: 25
            }} 
        // Assign the "Column" as type of the sparkline
        type='Column' 
        // Assign the "Numeric" as value type to the sparkline
        valueType='Numeric'>
        </SparklineComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('sparkline'));
{% endraw %}