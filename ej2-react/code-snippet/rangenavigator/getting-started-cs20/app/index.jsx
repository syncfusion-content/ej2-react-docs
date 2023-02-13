import { StepLineSeries, Inject, RangeNavigatorComponent, RangenavigatorSeriesCollectionDirective, RangenavigatorSeriesDirective, RangeTooltip } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
class App extends React.Component {
    data = [
        { xData: 10, yData: 35 }, { xData: 20, yData: 28 },
        { xData: 30, yData: 34 }, { xData: 40, yData: 32 },
        { xData: 50, yData: 40 }
    ];
    tooltip = { enable: true };
    majorgridLines = { width: 4, color: 'blue', dashArray: '5,5' };
    render() {
        return <RangeNavigatorComponent id='charts' labelPosition='Outside' tooltip={this.tooltip} majorGridLines={this.majorgridLines} value={[25, 40]}>
      <Inject services={[RangeTooltip, StepLineSeries]}/>
      <RangenavigatorSeriesCollectionDirective>
        <RangenavigatorSeriesDirective dataSource={this.data} xName='xData' yName='yData'>
        </RangenavigatorSeriesDirective>
      </RangenavigatorSeriesCollectionDirective>
    </RangeNavigatorComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById("charts"));
