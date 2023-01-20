{% raw %}


import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

export class App extends React.Component {
render() {
  return ( <SparklineComponent id='sparkline'
    height='200px' width='350px'
    // To specify theme
    theme= 'Highcontrast'
    dataLabelSettings= { { visible: ['All'] }}
    tooltipSettings= { {
        trackLineSettings: { visible: true }
    }}
    axisSettings= { {
        minX: -1, maxX: 7
    }}
    lineWidth= { 3 }
    border= { {
        color: 'transparent', width: 2
    }}
    type= 'Line'
    fill= '#007dd1'
    dataSource={[ 3, 6, 4, 1, 3, 2, 5]}>
    <Inject services={[SparklineTooltip]} />
</SparklineComponent> );
 }
}
ReactDOM.render(<App />, document.getElementById('sparkline'));


{% endraw %}