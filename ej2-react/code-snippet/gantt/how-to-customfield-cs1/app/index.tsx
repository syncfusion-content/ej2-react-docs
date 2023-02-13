


import { GanttComponent, Inject, Edit, Selection, ColumnsDirective, ColumnDirective, AddDialogFieldsDirective, EditDialogFieldsDirective, EditDialogFieldDirective, AddDialogFieldDirective, Toolbar } from '@syncfusion/ej2-react-gantt';
import { CheckBox } from "@syncfusion/ej2-buttons";
import { TextBox, NumericTextBox, MaskedTextBox } from "@syncfusion/ej2-inputs";
import { DatePicker, DateTimePicker } from "@syncfusion/ej2-calendars";
import { DropDownList } from "@syncfusion/ej2-dropdowns";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { data } from './datasource';
function App () {
    
       const taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        const editOptions = {
        allowAdding: true,
        allowEditing: true,
        allowDeleting: true,
        mode: "Dialog"
        };
        const toolbarOptions = ['Add', 'Edit', 'Delete', 'Cancel', 'Update', 'ExpandAll', 'CollapseAll', 'Search'];
    
    let  divElement: any;
    let ganttInstance;
    const inputs = {
       booleanedit: CheckBox,
       dropdownedit: DropDownList,
       datepickeredit: DatePicker,
       datetimepickeredit: DateTimePicker,
       maskededit: MaskedTextBox,
       numericedit: NumericTextBox,
       stringedit: TextBox
     };
    function actionBegin(args) {
        if (args.requestType === "beforeOpenEditDialog" || args.requestType === "beforeOpenAddDialog" ) {
          var column = ganttInstance.columnByField["CustomField"];
          divElement = ganttInstance.createElement("div", {
            className: "e-edit-form-column"
          });
          var inputElement: any;
          inputElement = ganttInstance.createElement("input", {
            attrs: {
              type: "text",
              id: ganttInstance.controlId + "" + column.field,
              name: column.field,
              title: column.field
            }
          });
          divElement.appendChild(inputElement);
          var input = {
            enabled: true,
            floatLabelType: "Auto",
            placeholder: "CustomField",
            value: args.rowData.CustomField
          };
          var inputObj = new inputs[column.editType](input);
          inputObj.appendTo(inputElement);
        }
    };
   function  actionComplete(args) {
        if (args.requestType === "openEditDialog" || args.requestType === "openAddDialog") {
          var generalTab:any = document.getElementById(
           ganttInstance.controlId + "GeneralTabContainer"
          );
          generalTab.appendChild(divElement);
        }
      };
        return <GanttComponent dataSource={data} taskFields={taskFields} allowSelection={true} editSettings={editOptions}
        toolbar={toolbarOptions} actionBegin={actionBegin} actionComplete={actionComplete} ref={gantt => ganttInstance = gantt} height='400px'>
         <ColumnsDirective>
                <ColumnDirective field='TaskID' width='150'></ColumnDirective>
                <ColumnDirective field='TaskName' width='250'></ColumnDirective>
                <ColumnDirective field='StartDate' width='250'></ColumnDirective>
                <ColumnDirective field='EndDate' width='250'></ColumnDirective>
                <ColumnDirective field='Duration' width='250'></ColumnDirective>
                <ColumnDirective field='Progress' width='250'></ColumnDirective>
                <ColumnDirective field='CustomField' width='250'></ColumnDirective>
          </ColumnsDirective>
           <AddDialogFieldsDirective>
            <AddDialogFieldDirective type='General' headerText='General'></AddDialogFieldDirective>
            <AddDialogFieldDirective type='Dependency'></AddDialogFieldDirective>
            <AddDialogFieldDirective type='Resources'></AddDialogFieldDirective>
            <AddDialogFieldDirective type='Notes'></AddDialogFieldDirective>
        </AddDialogFieldsDirective>
           <EditDialogFieldsDirective>
              <EditDialogFieldDirective type='General' headerText='General'></EditDialogFieldDirective>
              <EditDialogFieldDirective type='Dependency'></EditDialogFieldDirective>
              <EditDialogFieldDirective type='Resources'></EditDialogFieldDirective>
              <EditDialogFieldDirective type='Notes'></EditDialogFieldDirective>
            </EditDialogFieldsDirective>
         <Inject services={[Edit, Selection, Toolbar]}/>
        </GanttComponent>;
};
ReactDOM.render(<App />, document.getElementById('root'));



