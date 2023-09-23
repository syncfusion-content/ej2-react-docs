
{% raw %}

import * as React from "react";
import * as ReactDOM from 'react-dom';
import { HeatMapComponent, Inject, Legend, Tooltip, Adaptor } from '@syncfusion/ej2-react-heatmap';
export function App() {
    let heatmapData: any[] = [
        {
            Year: '2017',
            image:
                'https://ej2.syncfusion.com/react/demos/src/circular-gauge/images/golf-ball.png',
            'Jan-Feb': [4, 39],
            'Mar-Apr': [3, 8],
            'May-Jun': [1, 3],
            'Jul-Aug': [1, 10],
            'Sep-Oct': [4, 4],
            'Nov-Dec': [2, 15]
        },
        {
            Year: '2016',
            image:
                'https://ej2.syncfusion.com/react/demos/src/circular-gauge/images/basket-ball.png',
            'Jan-Feb': [4, 28],
            'Mar-Apr': [5, 92],
            'May-Jun': [5, 73],
            'Jul-Aug': [3, 1],
            'Sep-Oct': [3, 4],
            'Nov-Dec': [4, 126]
        },
        {
            Year: '2015',
            image:
                'https://ej2.syncfusion.com/react/demos/src/circular-gauge/images/foot-ball.png',
            'Jan-Feb': [4, 45],
            'Mar-Apr': [5, 152],
            'May-Jun': [0, 44],
            'Jul-Aug': [4, 54],
            'Sep-Oct': [5, 243],
            'Nov-Dec': [2, 45]
        }
    ];
    return (<HeatMapComponent
        titleSettings={{
            text: 'Commercial Aviation Accidents and Fatalities by year 2015 - 2017',
            textStyle: {
                size: '15px',
                fontWeight: '500',
                fontStyle: 'Normal',
                fontFamily: 'inherit'
            },
        }}
        xAxis={{
            labels: ['2015', '2016', '2017']
        }}
        yAxis={{
            labels: [
                'Jan-Feb',
                'Mar-Apr',
                'May-Jun',
                'Jul-Aug',
                'Sep-Oct',
                'Nov-Dec'
            ],
        }}
        cellSettings={{
            labelTemplate:
                "<div><img style='width:20px;height:20px;' src='${image}'/> </div>"
        }}
        dataSourceSettings={{
            isJsonData: true,
            adaptorType: 'Table',
            xDataMapping: 'Year'
        }}
        paletteSettings={{
            palette: [
                { color: '#C06C84' },
                { color: '#6C5B7B' },
                { color: '#355C7D' }
            ],
            type: 'Gradient'
        }}
        dataSource={heatmapData}
    >
        <Inject services={[Tooltip, Adaptor, Legend]} />
    </HeatMapComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

{% endraw %}

