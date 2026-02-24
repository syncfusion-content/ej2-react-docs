



import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective,
 Inject, LegendSettingsModel, AccumulationLegend } from'@syncfusion/ej2-react-charts';

function App() {

  const data: any[] = [
        { x: 'Saudi Arabia', y: 58, text: '58%' },
        { x: 'Persian Gulf', y: 15, text: '15%' },
        { x: 'Canada', y: 13, text: '13%' },
        { x: 'Venezuela', y: 8, text: '8%' },
        { x: 'Mexico', y: 3, text: '3%' },
        { x: 'Russia', y: 2, text: '2%' },
        { x: 'Miscellaneous', y: 1, text: '1%' }];

  const legendSettings: LegendSettingsModel = { visible: true };
  const title: any = {
                          fontFamily: "Arial",
                          fontStyle: 'italic',
                          fontWeight: 'regular',
                          color: "#E27F2D",
                          size: '23px',
                          position: 'Bottom'
                         };

    return <AccumulationChartComponent id='charts' legendSettings={legendSettings} title='Oil and other liquid imports in USA' subTitle ='In the year 2014 - 2015' titleStyle={title}>
    <Inject services={[AccumulationLegend]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={data} xName='x' yName='y' dataLabel={{
                visible: true,
                name: 'text',
                font: {
                  fontWeight: '600'
                }
              }}>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


