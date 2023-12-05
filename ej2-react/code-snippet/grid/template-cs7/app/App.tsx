
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { employeeData } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DialogComponent } from '@syncfusion/ej2-react-popups';
function App() {
  let grid: GridComponent | null;
  const header: string = 'Selected Row Details';
  let dialog: DialogComponent | null;
  let selectedRecord: any;

  const dialogTemplate = ((props: any) => {
    const showDetail = (() => {
      selectedRecord = props;
      (dialog as DialogComponent).show();
    })

    const contentShow = ((props: any) => {
      const getData: string = `<p><b>EmployeeID:</b>${selectedRecord.EmployeeID}</p>
                              <p><b>FirstName:</b>${selectedRecord.FirstName} </p>
                              <p><b>LastName:</b>${selectedRecord.LastName} </p>`
      props.element.children[1].innerHTML = getData;

    })
    return (
      <div>
        <div><ButtonComponent onClick={showDetail}>View</ButtonComponent></div>
        <DialogComponent ref={d => dialog = d} visible={false} showCloseIcon={true} width='50%' header={header} beforeOpen={contentShow} enableHtmlSanitizer={false}>
        </DialogComponent >

      </div>
    )
  })
  return (
    <div>
      <GridComponent ref={g => grid = g} dataSource={employeeData} height={315}>
        <ColumnsDirective>
          <ColumnDirective field='EmployeeID' headerText='Employee ID' width='100' />
          <ColumnDirective field='FirstName' headerText='First Name' width='120' />
          <ColumnDirective headerText='Employee Data' width='150' textAlign='Right' isPrimaryKey={true} template={dialogTemplate} />
        </ColumnsDirective>
      </GridComponent></div>)
}
export default App;
