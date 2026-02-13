import { ColumnDirective, ColumnsDirective, GridComponent, Group, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { L10n, setCulture } from '@syncfusion/ej2-base';

function App() {
  setCulture('ar');
  L10n.load({
    ar: {
      grid: {
        GroupDropArea: 'اسحب رأس العمود هنا لتجميع العمود',
        Item: 'بند',
        Items: 'العناصر',
        GroupCaption: ' هي خلية تسمية توضيحية جماعية',
      },
    },
  });
  return <GridComponent dataSource={data} allowGrouping={true} height={315}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
      <ColumnDirective field='CustomerID' headerText='Customer ID' width='150' />
      <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
      <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
    </ColumnsDirective>
    <Inject services={[Group]} />
  </GridComponent>;
};
export default App;
