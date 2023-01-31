


import * as React from "react";
import * as ReactDOM from 'react-dom';
import { HeatMapComponent, Inject, Legend, Tooltip, Adaptor } from '@syncfusion/ej2-react-heatmap';

class App extends React.Component {
    private heatmapData: any [] = [
            [73, 39, 26, 39, 94, 1],
            [93, 58, 53, 38, 26, 68],
            [99, 28, 22, 4, 66, 90],
            [14, 26, 97, 69, 69, 3],
            [7, 46, 47, 47, 88, 6],
            [41, 55, 73, 23, 3, 79],
            [56, 69, 21, 86, 3, 33],
            [45, 7, 53, 81, 95, 79],
            [60, 77, 74, 68, 88, 51],
            [25, 25, 10, 12, 78, 14],
            [25, 56, 55, 58, 12, 82],
            [74, 33, 88, 23, 86, 59]
    ];
    render() {
    return ( <HeatMapComponent id='heatmap'
            titleSettings = { {
                text: 'Sales Revenue per Employee (in 1000 US$)',
                textStyle: {
                    size: '15px',
                    fontWeight: '500',
                    fontStyle: 'Normal',
                    fontFamily: 'Segoe UI'
                }
            } }
            xAxis = { {
                labels: ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven',
            'Michael', 'Robert', 'Laura', 'Anne', 'Paul', 'Karin',   'Mario'],
            } }
            yAxis = { {
                labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
            } }
            paletteSettings = { {
                palette: [
                { startValue:1, endValue:30, minColor: '#C2E7EC', maxColor: '#AEDFE6' },
                { startValue:30, endValue:60, minColor: '#9AD7E0', maxColor: '#72C7D4' },
                { startValue:60, endValue:90, minColor: '#5EBFCE', maxColor: '#4AB7C8' }
            ],
                type: "Gradient"
            } }
            legendSettings = { {
                visible: true,
            } }
            dataSource={this.heatmapData}>
            <Inject services={[Legend, Tooltip]} />
            </HeatMapComponent> );
    }
}
ReactDOM.render(<App />, document.getElementById('heatmap'));



