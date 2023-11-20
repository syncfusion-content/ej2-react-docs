import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Sort } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import {loadCldr, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
import * as cagregorian from './ca-gregorian.json';
import * as currencies from './currencies.json';
import * as numbers from './numbers.json';
import * as timeZoneNames from './timeZoneNames.json';
import * as numberingSystems from './numberingSystems.json'

function App() {
  const formatOption: object = { type: 'date', format: 'yyyy-MMM-dd' };
  const locale: string = 'ar';
  setCulture('ar');
  setCurrencyCode('QAR');
  loadCldr(
    cagregorian,
    currencies,
    numbers,
    timeZoneNames,
    numberingSystems
  );
  const sortComparer = (reference: string, comparer: string, sortOrder: string) => {
    const referenceDate = new Date(reference);
    const comparerDate = new Date(comparer);
    if (typeof reference === 'number' && typeof comparer === 'number') {
        // Numeric column sorting
        return sortOrder === 'Ascending' ? comparer - reference : reference - comparer;
    } else if (!isNaN(referenceDate.getTime()) && !isNaN(comparerDate.getTime())) {
        // Date column sorting
        return sortOrder === 'Ascending' ? comparerDate.getTime() - referenceDate.getTime() : referenceDate.getTime() - comparerDate.getTime();
    }
    else {
        // Default sorting for other types
        const intlCollator = new Intl.Collator(undefined, { sensitivity: 'variant', usage: 'sort' });
        const comparisonResult = intlCollator.compare(reference, comparer);
        return sortOrder === 'Ascending' ? -comparisonResult : comparisonResult;
    }
};

  return <GridComponent dataSource={data} allowSorting={true} locale={locale} height={300}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" sortComparer={sortComparer}/>
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' sortComparer={sortComparer}/>
      <ColumnDirective field='Freight' headerText='Freight' width='100' textAlign="Right" format='C2' sortComparer={sortComparer}/>
      <ColumnDirective field='OrderDate' headerText='Order Date' width='100' format={formatOption} sortComparer={sortComparer}/>
    </ColumnsDirective>
    <Inject services={[Sort]} />
  </GridComponent>
};
export default App;