// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import { GanttComponent, Inject, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
// import { loadCldr, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
// import { data } from './datasource';
// import * as cagregorian from './ca-gregorian.json';
// import * as numbers from './numbers.json';

// setCulture('es-AR');
// setCurrencyCode('ARS');
// loadCldr(cagregorian, numbers);

// const formatOption = { type: 'date', format: 'y MMM d' }; // CLDR format

// function App() {
//   const taskFields: any = {
//     id: 'TaskID',
//     name: 'TaskName',
//     startDate: 'StartDate',
//     duration: 'Duration',
//     progress: 'Progress',
//     parentID: 'parentId'
//   };

//   return (
//     <GanttComponent
//       dataSource={data}
//       locale="es-AR"
//       allowSelection={true}
//       taskFields={taskFields}
//       height="450px"
//     >
//       <ColumnsDirective>
//         <ColumnDirective field="TaskID" headerText="Task ID" textAlign="Right" width="90" type="number" />
//         <ColumnDirective field="TaskName" headerText="Task Name" textAlign="Left" width="270" />
//         <ColumnDirective field="StartDate" headerText="Start Date" textAlign="Right" width="120" format={formatOption} />
//         <ColumnDirective field="Duration" headerText="Duration" textAlign="Right" width="90" />
//         <ColumnDirective field="Progress" headerText="Progress (%)" textAlign="Right" width="120" />
//       </ColumnsDirective>
//     </GanttComponent>
//   );
// }

// ReactDOM.render(<App />, document.getElementById('root'));



import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { loadCldr, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
import { data } from './datasource';
import * as cagregorian from './ca-gregorian.json';
import * as numbers from './numbers.json';

function App() {
  var formatOption= { type: 'date', format: 'yyyy-MMM-dd' };
  var locale = 'es-AR';
  setCulture('es-AR');
  setCurrencyCode('ARS');
  loadCldr(
    cagregorian,
    numbers,
    
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