import { StepLineSeries, Inject, RangeNavigatorComponent, RangenavigatorSeriesCollectionDirective, RangenavigatorSeriesDirective, RangeTooltip } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { double } from 'default_data.ts';
class App extends React.Component {
    data = double;
    render() {
        return <RangeNavigatorComponent id='charts' labelPosition='Outside' labelFormat='{value}$' value={[12, 30]}>
      <Inject services={[RangeTooltip, StepLineSeries]}/>
      <RangenavigatorSeriesCollectionDirective>
        <RangenavigatorSeriesDirective dataSource={this.data} xName='x' yName='y'>
        </RangenavigatorSeriesDirective>
      </RangenavigatorSeriesCollectionDirective>
    </RangeNavigatorComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById("charts"));
