
{% raw %}

import * as React from "react";
import * as ReactDOM from 'react-dom';
import { HeatMapComponent, Inject, Tooltip, Legend } from '@syncfusion/ej2-react-heatmap';
export function App() {
    let heatmapData: any[] = [
        [1, 76],
        [19, 3]
    ];
    return (<HeatMapComponent
        xAxis={{
            labels: ['Actual<br>Accept', 'Actual<br>Reject'],
            opposedPosition: true,
        }}
        yAxis={{
            labels: ['Actual<br>Accept', 'Actual<br>Reject'],
            maxLabelLength: 50,
        }}
        dataSource={heatmapData}
    >
        <Inject services={[Tooltip, Legend]} />
    </HeatMapComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);

{% endraw %}

