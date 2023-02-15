import { AreaSeries, DateTime, Inject, RangeNavigatorComponent, RangenavigatorSeriesCollectionDirective, RangenavigatorSeriesDirective, RangeTooltip } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { bitCoinData } from 'default_data.ts';
class App extends React.Component {
    data = bitCoinData;
    tooltip = { enable: true };
    clickHandler() {
        this.range.export('PNG', 'sample');
    }
    range;
    render() {
        return (<div>
      <ButtonComponent value='export' onClick={this.clickHandler.bind(this)}>Export</ButtonComponent>
      <RangeNavigatorComponent id='charts' ref={g => this.range = g} valueType='DateTime' labelFormat='MMM-yy' value={[new Date('2017-09-01'), new Date('2018-02-01')]} tooltip={this.tooltip}>
        <Inject services={[AreaSeries, DateTime, RangeTooltip]}/>
        <RangenavigatorSeriesCollectionDirective>
          <RangenavigatorSeriesDirective dataSource={this.data} xName='x' yName='y' type='Area' width={2}/>
        </RangenavigatorSeriesCollectionDirective>
      </RangeNavigatorComponent></div>);
    }
}
;
ReactDOM.render(<App />, document.getElementById('charts'));
