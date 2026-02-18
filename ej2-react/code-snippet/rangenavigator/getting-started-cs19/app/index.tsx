


import {
  AreaSeries, DateTime, Inject, RangeNavigatorComponent, RangenavigatorSeriesCollectionDirective,
  RangenavigatorSeriesDirective, RangeTooltip, RangeTooltipSettingsModel
} from '@syncfusion/ej2-react-charts';
import * as React from "react";
import { createRoot } from "react-dom/client";
import { bitCoinData } from '../default-data';

function App() {

  const data: object[] = bitCoinData;
  const tooltip: RangeTooltipSettingsModel = { enable: true, displayMode: 'Always' };

  return <RangeNavigatorComponent id='charts'
    valueType='DateTime' labelFormat='MMM-yy' value={[new Date('2017-09-01'), new Date('2018-02-01')]}
    tooltip={tooltip}>
    <Inject services={[AreaSeries, DateTime, RangeTooltip]} />
    <RangenavigatorSeriesCollectionDirective>
      <RangenavigatorSeriesDirective dataSource={data} xName='x' yName='y' type='Area' width={2} />
    </RangenavigatorSeriesCollectionDirective>
  </RangeNavigatorComponent>

}

const root = createRoot(document.getElementById("charts")!);
root.render(<App />);



