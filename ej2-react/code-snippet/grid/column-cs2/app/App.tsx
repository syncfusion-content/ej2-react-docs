

import { GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';

const data: object[] = [
  { OrderID: 10248, CustomerID: 'VINET', EmployeeID: 5 },
  { OrderID: 10249, CustomerID: 'TOMSP', EmployeeID: 6 },
  { OrderID: 10250, CustomerID: 'HANAR', EmployeeID: 4 }];

function App() {
  return <GridComponent dataSource={data}/>
};
export default App;


