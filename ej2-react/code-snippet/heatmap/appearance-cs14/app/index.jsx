{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    HeatMapComponent,
    Inject,
    Legend,
    Tooltip,
    Adaptor,
} from '@syncfusion/ej2-react-heatmap';
export function App() {
    var heatmapData = [
        { Year: '2017', Months: 'Jan-Feb', Accidents: 4, Fatalities: 39 },
        { Year: '2017', Months: 'Mar-Apr', Accidents: 3, Fatalities: 8 },
        { Year: '2017', Months: 'May-Jun', Accidents: 1, Fatalities: 3 },
        { Year: '2017', Months: 'Jul-Aug', Accidents: 1, Fatalities: 10 },
        { Year: '2017', Months: 'Sep-Oct', Accidents: 4, Fatalities: 4 },
        { Year: '2017', Months: 'Nov-Dec', Accidents: 2, Fatalities: 15 },
        { Year: '2016', Months: 'Jan-Feb', Accidents: 4, Fatalities: 28 },
        { Year: '2016', Months: 'Mar-Apr', Accidents: 5, Fatalities: 92 },
        { Year: '2016', Months: 'May-Jun', Accidents: 5, Fatalities: 73 },
        { Year: '2016', Months: 'Jul-Aug', Accidents: 3, Fatalities: 1 },
        { Year: '2016', Months: 'Sep-Oct', Accidents: 3, Fatalities: 4 },
        { Year: '2016', Months: 'Nov-Dec', Accidents: 4, Fatalities: 126 },
        { Year: '2015', Months: 'Jan-Feb', Accidents: 4, Fatalities: 45 },
        { Year: '2015', Months: 'Mar-Apr', Accidents: 5, Fatalities: 152 },
        { Year: '2015', Months: 'May-Jun', Accidents: 0, Fatalities: 0 },
        { Year: '2015', Months: 'Jul-Aug', Accidents: 4, Fatalities: 54 },
        { Year: '2015', Months: 'Sep-Oct', Accidents: 5, Fatalities: 243 },
        { Year: '2015', Months: 'Nov-Dec', Accidents: 2, Fatalities: 45 }
    ];
    return (
        <HeatMapComponent
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
                labelTemplate: '<div> Accidents - ${Accidents}</div>'
            }}
            dataSourceSettings={{
                isJsonData: true,
                adaptorType: 'Cell',
                xDataMapping: 'Year',
                yDataMapping: 'Months',
                valueMapping: 'Fatalities'
            }}
            dataSource={heatmapData}
        >
            <Inject services={[Tooltip, Adaptor, Legend]} />
        </HeatMapComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);


{% endraw %}