import { ColumnDirective, ColumnsDirective, GridComponent, Group, Inject, Page } from '@syncfusion/ej2-react-grids';
import { L10n, loadCldr, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
import * as React from 'react';
import deDELocalization from './locale.json';
import cagregorian from './ca-gregorian.json';
import currencies from './currencies.json';
import numbers from './numbers.json';
import timeZoneNames from './timeZoneNames.json';
import numberingSystems from './numberingSystems.json'
import { data } from './datasource';

L10n.load(deDELocalization);

function App() {
  setCulture('de-DE');
  setCurrencyCode('EUR');
  loadCldr(
    cagregorian,
    currencies,
    numbers,
    timeZoneNames,
    numberingSystems
  );
  const formatOptions = { format: 'C2', useGrouping: false, minimumSignificantDigits: 1, maximumSignificantDigits: 3 }
  return (<div>
    <GridComponent dataSource={data} allowPaging={true} allowGrouping={true} >
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
        <ColumnDirective field='Freight' headerText='Freight' width='150' format={formatOptions} />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
      </ColumnsDirective>
      <Inject services={[Page, Group]} />
    </GridComponent></div>)
};
export default App;