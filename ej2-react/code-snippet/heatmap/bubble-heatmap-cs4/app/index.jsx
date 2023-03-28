{% raw %}
import * as React from "react";
import * as ReactDOM from 'react-dom';
import { HeatMapComponent, Inject, Legend, Adaptor, Tooltip, BubbleTooltipData } from '@syncfusion/ej2-react-heatmap';
  export function App() {
    var heatmapData = [
    [[4, 39], [3, 8], [1, 3], [1, 10], [4, 4], [2, 15]],
    [[4, 28], [5, 92], [5, 73], [3, 1], [3, 4], [4, 126]],
    [[4, 45], [5, 152], [0, 44], [4, 54], [5, 243], [2, 45]]
    ];
    function tooltipTemplate(args) {
    args.content = [
      'Year ' +
        ' : ' +
        args.xLabel +
        '<br/>' +
        'Months ' +
        ' : ' +
        args.yLabel +
        '<br/>' +
        'Accidents ' +
        ' : ' +
        (args.value)[0].bubbleData +
        '<br/>' +
        'Fatalities ' +
        ' : ' +
        (args.value)[1].bubbleData
    ];
  }
  return (
      <HeatMapComponent
        titleSettings={{
          text: 'Commercial Aviation Accidents and Fatalities by year 2012 - 2017',
          textStyle: {
            size: '15px',
            fontWeight: '500',
            fontStyle: 'Normal',
            fontFamily: 'Segoe UI'
          }
        }}
        xAxis={{
          labels: ['2017', '2016', '2015']
        }}
        yAxis={{
          labels: ['Jan-Feb', 'Mar-Apr', 'May-Jun', 'Jul-Aug', 'Sep-Oct', 'Nov-Dec']
        }}
        paletteSettings={{
          palette: [{ color: '#C06C84' }, { color: '#6C5B7B' }, { color: '#355C7D' }],
          type: 'Gradient'
        }}
        legendSettings={{
          visible: true
        }}
        cellSettings={{
          border: {
            width: 1
          },
          tileType: 'Bubble',
          bubbleType: 'SizeAndColor'
        }}
        tooltipRender={tooltipTemplate}
        dataSource={heatmapData}
      >
        <Inject services={[Legend, Adaptor, Tooltip]} />
      </HeatMapComponent>
    );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
{% endraw %}