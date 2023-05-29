

import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SparklineComponent } from '@syncfusion/ej2-react-charts';

function App() {

  return ( <SparklineComponent id='sparkline'
    height='200px' width='350px'
    containerArea= { {
        border: { color: '#033e96', width: 2 },
        // To render sparkline with background
        background: '#eff1f4',
    }}
    padding= { { left: 20, right: 20, bottom: 20, top: 20} }
    border= { {
        color: '#033e96', width: 1
    }}
    type= 'Area'
    fill= '#b2cfff'
    dataSource={[ 3, 6, 4, 1, 3, 2, 5]}>
</SparklineComponent> );

}
export default App;
ReactDOM.render(<App />, document.getElementById('sparkline'));


