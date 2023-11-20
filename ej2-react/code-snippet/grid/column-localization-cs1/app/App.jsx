import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { loadCldr, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
import { data } from './datasource';
import * as cagregorian from './ca-gregorian.json';
import * as currencies from './currencies.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';

function App() {
  var formatOption= { type: 'date', format: 'yyyy-MMM-dd' };
  var locale = 'es-AR';
  setCulture('es-AR');
  setCurrencyCode('ARS');
  loadCldr(
    cagregorian,
    currencies,
    numbers,
    timeZoneNames
  );
  return <GridComponent dataSource={data} height={315} locale={locale}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' width='100' textAlign="Right" />
      <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right" />
      <ColumnDirective field='OrderDate' width='140' textAlign="Right" format={formatOption} />
    </ColumnsDirective>
  </GridComponent>
}
export default App;