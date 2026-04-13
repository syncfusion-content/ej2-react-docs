import { DataManager } from '@syncfusion/ej2-data';
import { AutoComplete } from '@syncfusion/ej2-dropdowns';
import { ColumnDirective, ColumnsDirective, Inject, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Edit, Toolbar } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { sampleData } from './datasource';
function App() {
    let elem;
    let autoCompleteobj;
    let treegridObj;
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Cell', newRowPosition: 'Below' };
    const toolbarOptions = ['Add', 'Delete', 'Update', 'Cancel'];
    const editTemplate = {
        create: () => {
            elem = document.createElement('input');
            return elem;
        },
        destroy: () => {
            autoCompleteobj.destroy();
        },
        read: () => {
            return autoCompleteobj.value;
        },
        write: (args) => {
            if (treegridObj) {
                autoCompleteobj = new AutoComplete({
                    dataSource: new DataManager(treegridObj.grid.dataSource),
                    fields: { value: 'taskName' },
                    value: args.rowData[args.column.field]
                });
                autoCompleteobj.appendTo(elem);
            }
        }
    };
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='400' editSettings={editOptions} toolbar={toolbarOptions} ref={g => treegridObj = g}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='100' textAlign='Right' isPrimaryKey={true}/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180' editType='stringedit' edit={editTemplate}/>
            <ColumnDirective field='startDate' headerText='Start Date' width='130' format='yMd' textAlign='Right' type='date' editType='datepickeredit'/>
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar]}/>
    </TreeGridComponent>;
}
;
export default App;
