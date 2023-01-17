{% raw %}
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SparklineComponent } from '@syncfusion/ej2-react-charts';
export class App extends React.Component {
    render() {
        return (<SparklineComponent id='sparkline' height='200px' width='350px' containerArea={{
                border: { color: '#033e96', width: 2 }
            }} 
        // To render sparkline with padding
        padding={{ left: 20, right: 20, bottom: 20, top: 20 }} border={{
                color: '#033e96', width: 1
            }} type='Area' fill='#b2cfff' dataSource={[3, 6, 4, 1, 3, 2, 5]}>
        </SparklineComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('sparkline'));
{% endraw %}
