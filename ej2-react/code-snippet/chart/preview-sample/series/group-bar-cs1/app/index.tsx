


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  BarSeries,
  DataLabel }
from'@syncfusion/ej2-react-charts';
import { data1, data2, data3, data4, data5, data6 } from './datasource';

function App() {
    return (
      <ChartComponent
        id="charts"
        style={{ textAlign: 'center' }}
        primaryXAxis={{
          valueType: 'Category',
          interval: 1,
          majorGridLines: { width: 0 },
        }}
        primaryYAxis={{
          majorGridLines: { width: 0 },
          majorTickLines: { width: 0 },
          lineStyle: { width: 0 },
          labelStyle: { color: 'transparent' },
        }}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        title="Olympics Medal Tally"
      >
        <Inject
          services={[BarSeries, Legend, Tooltip, Category, DataLabel]}
        />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={data1}
            xName="x"
            yName="y"
            name="USA Total"
            type="Bar"
            groupName="USA"
            columnWidth={0.7}
            columnSpacing={0.1}
            marker={{
              dataLabel: {
                visible: true,
                position: 'Top',
                font: { fontWeight: '600', color: '#ffffff' },
              },
            }}
          ></SeriesDirective>
          <SeriesDirective
            dataSource={data2}
            xName="x"
            yName="y"
            name="USA Gold"
            type="Bar"
            groupName="USA"
            columnWidth={0.5}
            columnSpacing={0.1}
            marker={{
              dataLabel: {
                visible: true,
                position: 'Top',
                font: { fontWeight: '600', color: '#ffffff' },
              },
            }}
          ></SeriesDirective>
          <SeriesDirective
            dataSource={data3}
            xName="x"
            yName="y"
            name="UK Total"
            type="Bar"
            groupName="UK"
            columnWidth={0.7}
            columnSpacing={0.1}
            marker={{
              dataLabel: {
                visible: true,
                position: 'Top',
                font: { fontWeight: '600', color: '#ffffff' },
              },
            }}
          ></SeriesDirective>
          <SeriesDirective
            dataSource={data4}
            xName="x"
            yName="y"
            name="UK Gold"
            type="Bar"
            groupName="UK"
            columnWidth={0.5}
            columnSpacing={0.1}
            marker={{
              dataLabel: {
                visible: true,
                position: 'Top',
                font: { fontWeight: '600', color: '#ffffff' },
              },
            }}
          ></SeriesDirective>
          <SeriesDirective
            dataSource={data5}
            xName="x"
            yName="y"
            name="China Total"
            type="Bar"
            groupName="China"
            columnWidth={0.7}
            columnSpacing={0.1}
            marker={{
              dataLabel: {
                visible: true,
                position: 'Top',
                font: { fontWeight: '600', color: '#ffffff' },
              },
            }}
          ></SeriesDirective>
          <SeriesDirective
            dataSource={data6}
            xName="x"
            yName="y"
            name="China Gold"
            type="Bar"
            groupName="China"
            columnWidth={0.5}
            columnSpacing={0.1}
            marker={{
              dataLabel: {
                visible: true,
                position: 'Top',
                font: { fontWeight: '600', color: '#ffffff' },
              },
            }}
          ></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    );

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


