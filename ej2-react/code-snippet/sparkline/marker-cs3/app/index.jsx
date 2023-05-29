{% raw %}
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SparklineComponent } from '@syncfusion/ej2-react-charts';
export class App extends React.Component {
    render() {
        return (<SparklineComponent id='sparkline' height='200px' width='350px' axisSettings={{
                minX: -1, maxX: 7, maxY: 7, minY: -1
            }} dataSource={[3, 6, 4, 1, 3, 2, 5]} 
        // To enable marker for high and low points with color customization
        fill='blue' markerSettings={{
                visible: ['All'],
                size: 5, fill: 'white', border: { color: 'blue', width: 2 }
            }}>
        </SparklineComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('sparkline'));
{% endraw %}