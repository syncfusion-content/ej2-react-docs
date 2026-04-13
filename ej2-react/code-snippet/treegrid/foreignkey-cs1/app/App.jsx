import * as React from 'react';
import { foreignKeyData } from './datasource';
import { dropData } from './datasource';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { ColumnsDirective, ColumnDirective, TreeGridComponent, Inject } from '@syncfusion/ej2-react-treegrid';
import { Edit, Page, Toolbar } from '@syncfusion/ej2-react-treegrid';
/* tslint:disable */
function App() {
    let treegrid;
    const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Cell' };
    const toolbarOptions = ['Add', 'Delete', 'Update', 'Cancel'];
    const queryCellInfo = (args) => {
        if (args.column.field === "EmployeeID") {
            for (var i = 0; i < dropData.length; i++) {
                let data = args.data;
                if (data[args.column.field] === dropData[i]["EmployeeID"]) {
                    args.cell.innerText = dropData[i]["EmployeeName"]; // assign the foreignkey field value to the innertext
                }
            }
        }
    };
    // Bind ForeignKey DataSource for dropdown using editParams
    const employeeParams = {
        params: {
            dataSource: new DataManager(dropData),
            fields: { text: "EmployeeName", value: "EmployeeID" },
            query: new Query()
        }
    };
    return (<TreeGridComponent dataSource={foreignKeyData} treeColumnIndex={0} childMapping='Children' height={280} toolbar={toolbarOptions} editSettings={editSettings} ref={g => treegrid = g} queryCellInfo={queryCellInfo}>
        <ColumnsDirective>
          <ColumnDirective field='EmpID' headerText='EmpID' isPrimaryKey={true} width='70'></ColumnDirective>
          <ColumnDirective field='Name' headerText='Employee Name' width='70' isPrimaryKey={true}></ColumnDirective>
          <ColumnDirective field='Contact' headerText='Contact' width='90' textAlign='Right'/>
          <ColumnDirective field='DOB' headerText='DOB' width='70' format='yMd' textAlign='Right' editType='datepickeredit'></ColumnDirective>
          <ColumnDirective field='EmployeeID' headerText='Employee ID' width='70' editType='dropdownedit' edit={employeeParams}></ColumnDirective>
          <ColumnDirective field='Country' headerText='Country' width='90' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[Page, Edit, Toolbar]}/>
      </TreeGridComponent>);
}
;
export default App;
