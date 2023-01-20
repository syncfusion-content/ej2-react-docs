import { AreaSeries, DateTime, Inject, RangeNavigatorComponent, RangenavigatorSeriesCollectionDirective, RangenavigatorSeriesDirective, RangeTooltip } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { bitCoinData } from 'default_data.ts';
function App() {
    const data = bitCoinData;
    const tooltip = { enable: true };
    function clickHandler() {
        range.export('PNG', 'sample');
    }
    let range;
    return (<div>
      <ButtonComponent value='export' onClick={clickHandler.bind(this)}>Export</ButtonComponent>
      <RangeNavigatorComponent id='charts' ref={g => range = g} valueType='DateTime' labelFormat='MMM-yy' value={[new Date('2017-09-01'), new Date('2018-02-01')]} tooltip={tooltip}>
        <Inject services={[AreaSeries, DateTime, RangeTooltip]}/>
        <RangenavigatorSeriesCollectionDirective>
          <RangenavigatorSeriesDirective dataSource={data} xName='x' yName='y' type='Area' width={2}/>
        </RangenavigatorSeriesCollectionDirective>
      </RangeNavigatorComponent></div>);
}
;
export default App;
ReactDOM.render(<App />, document.getElementById('charts'));
