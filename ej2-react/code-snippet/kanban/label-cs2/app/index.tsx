{% raw %}


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { extend } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective, DialogFieldsModel } from "@syncfusion/ej2-react-kanban";
import { kanbanData } from './datasource';

function App(){
     let data = extend([], kanbanData, null, true);
     let fields: DialogFieldsModel[] = [
        { text: 'ID', key: 'Id', type: 'TextBox' },
        { key: 'Status', type: 'DropDown' },
        { key: 'Estimate', type: 'Numeric' },
        { key: 'Summary', type: 'TextArea' }
    ];
    return(
        <KanbanComponent id="kanban" keyField="Status" dataSource={data} cardSettings={{ contentField: "Summary", headerField: "Id" }} dialogSettings={{ fields: fields }}>
            <ColumnsDirective>
                <ColumnDirective headerText="To Do" keyField="Open" />
                <ColumnDirective headerText="In Progress" keyField="InProgress" />
                <ColumnDirective headerText="Testing" keyField="Testing" />
                <ColumnDirective headerText="Done" keyField="Close" />
            </ColumnsDirective>
        </KanbanComponent>
    );
}
ReactDOM.render(<App />, document.getElementById('kanban'));



{% endraw %}