import * as React from 'react';
import { projectData } from './datasource';
import { ColumnsDirective, ColumnDirective, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
/* tslint:disable */
function App() {
    const customAttributes = { class: 'orientationcss' };
    const setHeaderHeight = () => {
        /** Obtain the width of the headerText content */
        const textWidth = document.querySelector(".orientationcss > div").scrollWidth;
        const headerCell = document.querySelectorAll(".e-headercell");
        for (let i = 0; i < headerCell.length; i++) {
            /** Assign the obtained textWidth as the height of the headerCell */
            (headerCell.item(i)).style.height = textWidth + 'px';
        }
    };
    return (<div>
        <TreeGridComponent dataSource={projectData} treeColumnIndex={1} idMapping='TaskID' parentIdMapping='parentID' created={setHeaderHeight} height={230}>
        <ColumnsDirective>
            <ColumnDirective field='TaskID' headerText='Task ID' width='70' textAlign='Right'></ColumnDirective>
            <ColumnDirective field='TaskName' headerText='Task Name' width='100'></ColumnDirective>
            <ColumnDirective field='StartDate' headerText='Start Date' width='90' format='yMd' textAlign='Right'/>
            <ColumnDirective field='EndDate' headerText='End Date' width='90' format='yMd' customAttributes={customAttributes} textAlign='Center'/>
            <ColumnDirective field='Duration' headerText='Duration' width='90' textAlign='Right'/>
            <ColumnDirective field='Progress' headerText='Progress' width='90' textAlign='Right'/>
        </ColumnsDirective>
        </TreeGridComponent>
        </div>);
}
;
export default App;
