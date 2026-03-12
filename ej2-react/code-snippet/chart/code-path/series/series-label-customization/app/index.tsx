{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
  LineSeries, Category, DataLabel, SeriesLabel, Legend
} from '@syncfusion/ej2-react-charts';
import { vietnamData, indonesiaData, franceData, polandData, mexicoData } from './datasource';

function App(): JSX.Element {
  return <ChartComponent id='charts' primaryXAxis={{ valueType: 'Category' }} legendSettings={{ visible: true }}>
    <Inject services={[LineSeries, DataLabel, Category, SeriesLabel, Legend]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={vietnamData} xName='x' yName='y' name='Vietnam' type='Line' marker={{ visible: true }}
        labelSettings={{ visible: true, text: 'Vietnam', background: '#E8F5E9', border: { width: 2, color: '#2E7D32' }, opacity: 0.9, font: { size: '12px', fontWeight: '600', color: '#2E7D32' }, showOverlapText: true }}>
      </SeriesDirective>
      <SeriesDirective dataSource={indonesiaData} xName='x' yName='y' name='Indonesia' type='Line' marker={{ visible: true }}
        labelSettings={{ visible: true, text: 'Indonesia', background: '#FFF3E0', border: { width: 2, color: '#FB8C00' }, opacity: 0.9, font: { size: '12px', fontWeight: '600', color: '#FB8C00' }, showOverlapText: true }}>
      </SeriesDirective>
      <SeriesDirective dataSource={franceData} xName='x' yName='y' name='France' type='Line' marker={{ visible: true }}
        labelSettings={{ visible: true, text: 'France', background: '#E3F2FD', border: { width: 2, color: '#1976D2' }, opacity: 0.9, font: { size: '12px', fontWeight: '600', color: '#1976D2' }, showOverlapText: true }}>
      </SeriesDirective>
      <SeriesDirective dataSource={polandData} xName='x' yName='y' name='Poland' type='Line' marker={{ visible: true }}
        labelSettings={{ visible: true, text: 'Poland', background: '#F3E5F5', border: { width: 2, color: '#8E24AA' }, opacity: 0.9, font: { size: '12px', fontWeight: '600', color: '#8E24AA' }, showOverlapText: true }}>
      </SeriesDirective>
      <SeriesDirective dataSource={mexicoData} xName='x' yName='y' name='Mexico' type='Line' marker={{ visible: true }}
        labelSettings={{ visible: true, text: 'Mexico', background: '#FBE9E7', border: { width: 2, color: '#D84315' }, opacity: 0.9, font: { size: '12px', fontWeight: '600', color: '#D84315' }, showOverlapText: true }}>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
