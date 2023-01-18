

import * as React from 'react';
import * as ReactDOM from "react-dom";
import { SparklineComponent } from '@syncfusion/ej2-react-charts';

export class App extends React.Component {
render() {
  return ( <SparklineComponent id='sparkline'
    height='150px' width='130px'
    dataSource= { [
        { x: 0, xval: 'AUDI', yval: 1 },
        { x: 1, xval: 'BMW', yval: 5 },
        { x: 2, xval: 'BUICK', yval: -1 },
        { x: 3, xval: 'CETROEN', yval: -6 },
        { x: 4, xval: 'CHEVROLET', yval: 0 },
        { x: 5, xval: 'FIAT', yval: 1 },
        { x: 6, xval: 'FORD', yval: -2 },
        { x: 7, xval: 'HONDA', yval: 7 },
        { x: 8, xval: 'HYUNDAI', yval: -9 },
        { x: 9, xval: 'JEEP', yval: 0 },
        { x: 10, xval: 'KIA', yval: -10 },
        { x: 11, xval: 'MAZDA', yval: 3 },
    ] }
    // Assign the dataSource values to series of sparkline 'xName and yName'
    xName= 'xval' yName= 'yval'
    // Assign 'Column' as type of the sparkline
    type= 'Column'
    // Assign "Category" as the value type of the sparkline
    valueType= 'Category'
    // To configure sparkline series highest y value point color.
    highPointColor= 'blue'
    // To configure sparkline series lowest y value point color.
    lowPointColor= 'orange'
    // To configure sparkline series first x value point color.
    startPointColor= 'green'
    // To configure sparkline series last x value point color.
    endPointColor= 'green'
    // To configure sparkline series negative y value point color.
    negativePointColor= 'red' >
</SparklineComponent> );
 }
}
ReactDOM.render(<App />, document.getElementById('sparkline'));


