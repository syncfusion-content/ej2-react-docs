

import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

export class App extends React.Component {
render() {
  return ( <SparklineComponent id='sparkline'
    height='200px' width='500px'
    axisSettings= { {
        minX: -1, maxX: 7, maxY: 8, minY: -1
    } }
    fill= '#033e96'
    valueType= 'Category'
    xName= 'x' yName= 'y'
    dataSource= { [
        {x: 'Mon', y: 3 },
        {x: 'Tue', y: 5 },
        {x: 'Wed', y: 2 },
        {x: 'Thu', y: 4 },
        {x: 'Fri', y: 6 },
    ] }
    // To enable tooltip template for sparkline with fill color, border radius and padding customization
    tooltipSettings= { {
        visible: true,
        template: '<div id="sparktooltip" style="border-radius: 5px;background: #008cff;' +
            'color: #FFFFFF !important;font-size: 16px;font-style: italic;padding: 8px;">' +
            '${x} : ${y} </div>'
    } }>
    <Inject services={[SparklineTooltip]} />
</SparklineComponent> );
 }
}
ReactDOM.render(<App />, document.getElementById('sparkline'));


