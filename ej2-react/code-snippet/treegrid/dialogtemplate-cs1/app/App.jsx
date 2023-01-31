import { setValue } from '@syncfusion/ej2-base';
import { ColumnDirective, ColumnsDirective, Inject, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Edit, Toolbar } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { sampleData } from './datasource';
import { DialogFormTemplate } from './template';
function App() {
    let treegrid;
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const dialogTemplate = (props) => {
        const obj = [props, treegrid];
        return (<DialogFormTemplate {...obj}/>);
    };
    const editOptions = {
        allowAdding: true,
        allowDeleting: true,
        allowEditing: true,
        mode: 'Dialog',
        template: dialogTemplate
    };
    const actionComplete = (args) => {
        if ((args.requestType === 'beginEdit' || args.requestType === 'add')) {
            // Add Validation Rules
            const form = args.form;
            form.ej2_instances[0].addRules('progress', { max: 100 });
            if (args.requestType === 'beginEdit') {
                form.elements.namedItem('taskName').focus();
            }
        }
    };
    const actionBegin = (args) => {
        if (args.requestType === 'save') {
            // cast string to integer value.
            const val = args.form
                .querySelector("#progress").value;
            setValue('data.progress', parseFloat(val), args);
        }
    };
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='270' editSettings={editOptions} toolbar={toolbarOptions} ref={g => treegrid = g} actionBegin={actionBegin} actionComplete={actionComplete}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right' isPrimaryKey={true}/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='startDate' headerText='Start Date' width='130' format='yMd' textAlign='Right' type='date' editType='datepickeredit'/>
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar]}/>
    </TreeGridComponent>;
}
;
export default App;
