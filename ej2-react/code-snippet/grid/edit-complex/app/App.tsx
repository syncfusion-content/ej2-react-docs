import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, EditSettingsModel, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { complexData } from './datasource';
function App() {
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true};
  const toolbarOptions: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
  const firstNameTemplate =(props) =>{
    return(
      <div>
        <input className='e-input' name='Name___FirstName' type='text' id='Name___FirstName' defaultValue={props.Name.FirstName} />
      </div>
    )
  }
  const lastNameTemplate = (props) =>{
    return(
      <div>
        <input className='e-input' name='Name___LastName' type='text' id='Name___LastName' defaultValue={props.Name.LastName} />
      </div>
    )
  }
  return (<div>
    <GridComponent id='Grid' dataSource={complexData} editSettings={editOptions}
    toolbar={toolbarOptions} height={268} >
    <ColumnsDirective>
      <ColumnDirective field='EmployeeID' headerText='Employee ID' width='100' textAlign="Right" isPrimaryKey={true} />
      <ColumnDirective field='Name.FirstName' headerText='First Name' width='120' editTemplate={firstNameTemplate} />
      <ColumnDirective field='Name.LastName' headerText='Last Name' width='150' editTemplate={lastNameTemplate}/>
      <ColumnDirective field='Title' headerText='Title' width='120' />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
  </GridComponent></div>)
};
export default App;
