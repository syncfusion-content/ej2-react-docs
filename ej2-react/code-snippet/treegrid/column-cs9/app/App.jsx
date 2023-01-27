import { getObject } from '@syncfusion/ej2-grids';
import { ColumnDirective, ColumnsDirective, Inject, Page, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { sampleData } from './datasource';
function App() {
    const treegridTemplate = (props) => {
        if (getObject('approved', props)) {
            return (<div className="template_checkbox">
                     <input type="checkbox" checked={true}/>
                 </div>);
        }
        else {
            return (<div className="template_checkbox">
                <input type="checkbox"/>
            </div>);
        }
    };
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='315'>
        <ColumnsDirective>
          <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
          <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
          <ColumnDirective headerText='approved' width='120' template={treegridTemplate} textAlign='Center'/>
          <ColumnDirective field='progress' headerText='Progress' width='80' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[Page]}/>
    </TreeGridComponent>;
}
;
export default App;
