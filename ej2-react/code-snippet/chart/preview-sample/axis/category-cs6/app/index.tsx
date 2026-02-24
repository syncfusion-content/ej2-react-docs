


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Selection, Legend, RangeColorSettingsDirective, RangeColorSettingDirective } from '@syncfusion/ej2-react-charts';
import { data } from './datasource';
function App() {
  const color1: string[] = ['#F9D422'];
  const color2: string[] = ['#F28F3F'];
  const color3: string[] = ['#E94F53'];
  
  return <ChartComponent id='charts' style={{ textAlign: "center" }} selectionMode='Point' primaryXAxis={{ valueType: 'Category', majorGridLines: { width: 0 } }} primaryYAxis={{ lineStyle: { width: 0 },
                majorTickLines: { width: 0 },
                minorTickLines: { width: 0 },
                labelFormat: '{value}°C' }} title="USA CLIMATE - WEATHER BY MONTH" chartArea={{ border: { width: 0 } }} legendSettings={{
                mode: 'Range',
                visible: true,
                toggleVisibility: false
            }}>
                        <Inject services={[ColumnSeries, Selection, Category, Legend]}/>
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={data} name='USA' xName='x' yName='y' type='Column' animation={{ enable: false }} cornerRadius={{
                topLeft: 10, topRight: 10
            }}>
                            </SeriesDirective>
                        </SeriesCollectionDirective>
                        <RangeColorSettingsDirective>
                            <RangeColorSettingDirective label="1°C to 10°C" start={1} end={10} colors={color1}></RangeColorSettingDirective>
                            <RangeColorSettingDirective label="11°C to 20°C" start={11} end={20} colors={color2}></RangeColorSettingDirective>
                            <RangeColorSettingDirective label="21°C to 30°C" start={21} end={30} colors={color3}></RangeColorSettingDirective>
                        </RangeColorSettingsDirective>
                    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


