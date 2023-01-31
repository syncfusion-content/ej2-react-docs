import * as React from 'react';
import { projectData } from './datasource';
import './App.css';
import { ColumnsDirective, ColumnDirective, TreeGridComponent, Inject } from '@syncfusion/ej2-react-treegrid';
import { Edit, Toolbar, Page } from '@syncfusion/ej2-react-treegrid';
/* tslint:disable */
function App() {
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Row' };
    const toolbarOptions = ['Add', 'Edit', 'Delete'];
    let treegrid;
    const load = () => {
        if (treegrid) {
            treegrid.element.addEventListener('keydown', keyDownHandler);
        }
    };
    const keyDownHandler = (e) => {
        if (treegrid && e.keyCode === 13) {
            treegrid.addRecord();
        }
    };
    return (<TreeGridComponent dataSource={projectData} treeColumnIndex={1} idMapping='TaskID' parentIdMapping='parentID' height={265} editSettings={editOptions} load={load} toolbar={toolbarOptions} ref={g => treegrid = g}>
        <ColumnsDirective>
            <ColumnDirective field='TaskID' headerText='Task ID' width='70' textAlign='Right' isPrimaryKey={true}></ColumnDirective>
            <ColumnDirective field='TaskName' headerText='Task Name' width='100'></ColumnDirective>
            <ColumnDirective field='StartDate' headerText='Start Date' width='100' format='yMd' textAlign='Right' editType='datepickeredit'></ColumnDirective>
            <ColumnDirective field='EndDate' headerText='End Date' width='100' format='yMd' textAlign='Right' editType='datepickeredit'></ColumnDirective>
            <ColumnDirective field='Priority' headerText='Priority' width='90' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[Edit, Toolbar, Page]}/>
        </TreeGridComponent>);
}
;
export default App;
