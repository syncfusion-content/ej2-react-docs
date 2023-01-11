import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SparklineComponent } from '@syncfusion/ej2-react-charts';
export class App extends React.Component {
    render() {
        return (<SparklineComponent id='sparkline' height='150px' width='130px' dataSource={[12, 15, -10, 13, 15, 6, -12, 17, 13, 0, 8, -10]} 
        // Assign the 'WinLoss' as type of Sparkline
        type='WinLoss' 
        // Assign "Numeric" as the value type of the sparkline
        valueType='Numeric' tiePointColor='blue'>
        </SparklineComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('sparkline'));
