{% raw %}


import { DateTime, Inject, RangeNavigatorComponent } from '@syncfusion/ej2-react-charts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { GetDateTimeData } from 'default-data.ts';

function App() {

  const data: object[] = GetDateTimeData(new Date(2018, 0, 1), new Date(2019, 0, 1));

  return <RangeNavigatorComponent id='charts'
    valueType='DateTime' intervalType='Months' labelFormat='MMM'
    value={[new Date('2018-04-1'), new Date('2018-08-1')]}
    dataSource={data} xName='x' yName='y'>
    <Inject services={[DateTime]} />
  </RangeNavigatorComponent>
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



{% endraw %}