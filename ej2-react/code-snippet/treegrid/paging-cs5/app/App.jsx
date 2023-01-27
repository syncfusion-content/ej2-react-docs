import { ColumnDirective, ColumnsDirective, Inject, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Page } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import './App.css';
import { sampleData } from './datasource';
function App() {
    let treegrid;
    const pageSettings = { pageSize: 7, pageSizes: true };
    let initialGridLoad = true;
    const dataBound = () => {
        if (initialGridLoad) {
            initialGridLoad = false;
            const pager = document.getElementsByClassName('e-gridpager');
            let topElement;
            if (treegrid && treegrid.toolbar) {
                topElement = document.getElementsByClassName('e-toolbar');
            }
            else {
                topElement = document.getElementsByClassName('e-gridheader');
            }
            topElement[0].before(pager[0]);
        }
    };
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' allowPaging={true} pageSettings={pageSettings} dataBound={dataBound} ref={g => treegrid = g}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date'/>
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[Page]}/>
    </TreeGridComponent>;
}
;
export default App;
