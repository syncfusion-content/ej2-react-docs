

import { ColumnDirective, ColumnsDirective, Freeze, Selection, Edit, Toolbar, ToolbarItems, GridComponent, EditSettingsModel, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const empidRules: Object = { required: true };
  const actionHandler = (args: ActionEventArgs) => {
      if (args.requestType === 'beginEdit' || args.requestType === 'add') {
          // Add Validation Rules
          args.movableForm.ej2_instances[0].addRules('Freight', { max: 200 });
          args.movableForm.ej2_instances[0].addRules('EmployeeID', { max: 20 });
      }
  }
    return (<div>
          <GridComponent dataSource={data} height="315" allowSelection={false} enableHover={false} editSettings={editOptions} toolbar={toolbarOptions} actionComplete={actionHandler}>
            <ColumnsDirective>
             <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey={true} isFrozen='true'/>
            <ColumnDirective field='EmployeeID' headerText='Employee ID' textAlign="Right" width='120' validationRules={empidRules}/>
             <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
             <ColumnDirective field='ShipAddress' headerText='Ship Address' width='170'/>
             <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
             <ColumnDirective field='ShipCountry' width='150'  headerText='Ship Country' isFrozen='true'/>
             <ColumnDirective field='Freight' headerText='Freight' width='120' validationRules={empidRules}/>
            </ColumnsDirective>
            <Inject services={[Freeze, Selection, Edit, Toolbar]} />
           </GridComponent></div>)
};
export default App;


