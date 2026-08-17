{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
  LineSeries, Category, SeriesLabel, Legend
} from '@syncfusion/ej2-react-charts';
import { vietnamData, indonesiaData, franceData, polandData, mexicoData } from './datasource';

function App() {
  return <ChartComponent id='charts' primaryXAxis={{ valueType: 'Category' }} legendSettings={{ visible: true }}>
    <Inject services={[LineSeries, Category, SeriesLabel, Legend]} />
    <SeriesCollectionDirective>
      <SeriesDirective dataSource={vietnamData} xName='x' yName='y' name='Vietnam' type='Line' marker={{ visible: true }}
        labelSettings={{ visible: true, background: '#E8F5E9', border: { width: 2, color: '#2E7D32' }, opacity: 0.9, font: { size: '12px', fontWeight: '600', color: '#2E7D32' }, rx: 4, ry: 4, connectorLine: { width: 1, color: '#2E7D32' } }}>
      </SeriesDirective>
      <SeriesDirective dataSource={indonesiaData} xName='x' yName='y' name='Indonesia' type='Line' marker={{ visible: true }}
        labelSettings={{ visible: true, background: '#FFF3E0', border: { width: 2, color: '#FB8C00' }, opacity: 0.9, font: { size: '12px', fontWeight: '600', color: '#FB8C00' }, rx: 4, ry: 4, connectorLine: { width: 1, color: '#FB8C00' } }}>
      </SeriesDirective>
      <SeriesDirective dataSource={franceData} xName='x' yName='y' name='France' type='Line' marker={{ visible: true }}
        labelSettings={{ visible: true, background: '#E3F2FD', border: { width: 2, color: '#1976D2' }, opacity: 0.9, font: { size: '12px', fontWeight: '600', color: '#1976D2' }, rx: 4, ry: 4, connectorLine: { width: 1, color: '#1976D2' } }}>
      </SeriesDirective>
      <SeriesDirective dataSource={polandData} xName='x' yName='y' name='Poland' type='Line' marker={{ visible: true }}
        labelSettings={{ visible: true, background: '#F3E5F5', border: { width: 2, color: '#8E24AA' }, opacity: 0.9, font: { size: '12px', fontWeight: '600', color: '#8E24AA' }, rx: 4, ry: 4, connectorLine: { width: 1, color: '#8E24AA' } }}>
      </SeriesDirective>
      <SeriesDirective dataSource={mexicoData} xName='x' yName='y' name='Mexico' type='Line' marker={{ visible: true }}
        labelSettings={{ visible: true, background: '#FBE9E7', border: { width: 2, color: '#D84315' }, opacity: 0.9, font: { size: '12px', fontWeight: '600', color: '#D84315' }, rx: 4, ry: 4, connectorLine: { width: 1, color: '#D84315' } }}>
      </SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));

{% endraw %}
