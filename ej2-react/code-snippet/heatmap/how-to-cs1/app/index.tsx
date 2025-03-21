
{% raw %}

import * as React from "react";
import * as ReactDOM from 'react-dom';
import { HeatMapComponent, Inject, Legend, Tooltip, ILegendRenderEventArgs } from '@syncfusion/ej2-react-heatmap';

export function App() {
    let heatmapData : any[] = [
        [73000, 39000, 26000, 39000, 94000, 0],
        [93000, 58000, 53000, 38000, 26000, 68000],
        [99000, 28000, 22000, 4000, 66000, 9000],
        [14000, 26000, 97000, 69000, 69000, 3000],
        [7000, 46000, 47000, 47000, 88000, 6000],
        [41000, 55000, 73000, 23000, 30000, 79000],
        [56000, 69000, 21000, 86000, 3000, 33000],
        [45000, 7000, 53000, 81000, 95000, 79000],
        [60000, 77000, 74000, 68000, 88000, 51000],
        [25000, 25000, 10000, 12000, 78000, 14000],
        [25000, 56000, 55000, 58000, 12000, 82000],
        [74000, 33000, 88000, 23000, 86000, 59000]];

    function legendRender(args){
        if(args.text=='25,000' || args.text=='50,000'|| args.text=='99,000'){
            args.text = args.text.replace(/,/, "");
            args.text = `${parseInt(args.text/1000)}` + "k "+"$";
        } else {
            args.cancel=true;
        }
    };


    return ( <HeatMapComponent
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
        cellSettings = { {
            showLabel: false
        } }
        paletteSettings = { {
            palette: [
            { value: 0, color: '#C2E7EC' },
            { value: 25000, color: '#AEDFE6' },
            { value: 50000, color: '#9AD7E0' },
            { value: 75000, color: '#72C7D4' },
            { value: 99000, color: '#5EBFCE' },
        ],
            type: 'Gradient'
        } }

        legendRender={legendRender}
        dataSource={heatmapData}>
        <Inject services={[Legend, Tooltip]} />
            </HeatMapComponent> );
    }
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);



{% endraw %}