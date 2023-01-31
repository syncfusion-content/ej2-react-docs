import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SparklineComponent } from '@syncfusion/ej2-react-charts';
export class App extends React.Component {
    render() {
        return (<SparklineComponent id='sparkline' height='200px' width='150px' lineWidth={2} fill='#0d3c9b' dataSource={[0, 6, 4, 1, 3, 2, 5]} 
        // To configure range band settings
        rangeBandSettings={[
                {
                    startRange: 1,
                    endRange: 3,
                    color: '#bfd4fc',
                    opacity: 0.4
                }
            ]}>
        </SparklineComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('sparkline'));
