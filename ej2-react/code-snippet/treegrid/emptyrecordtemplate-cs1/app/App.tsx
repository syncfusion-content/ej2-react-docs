


import * as React from 'react';
import {
    TreeGridComponent,
    ColumnsDirective,
    ColumnDirective,
    Inject,
    Toolbar,
    Edit,
    Filter,
    Sort,
    Page
} from '@syncfusion/ej2-react-treegrid';
import { useEffect, useRef } from 'react';
/* tslint:disable */
const EMPTYRECORDTEMPLATE_CSS = `
.emptyRecordTemplate {
    text-align: center;
    margin: 31px auto;
}

.e-emptyRecord {
    display: block;
    margin: 15px auto;
    border-radius: 4px;
    box-shadow: 2px 4px 10px rgba(52, 52, 52, 0.5);
}
`;
 const priorityParams = {
        params: {        
            dataSource: [
               {priority:"Low"},{priority:"Medium"},{priority:"High"}, {priority:"Critical"}
            ]
        }
    };
    const statusParams = {
        params: {        
            dataSource: [
                {status:"Open"},{status:"Inprogress"},{status:"Review-Request"},{status:"Review-Reject"},{status:"Closed"}
            ]
        }
    };
function App() {

  let treegridInstance: TreeGridComponent;

    const emptyTemplate = () => {
        return (
            <div className="emptyRecordTemplate">
                <img
                    src="https://ej2.syncfusion.com/angular/demos/assets/grid/images/emptyRecordTemplate_light.svg"
                    alt="No record"
                    className="e-emptyRecord"
                />
                <div>
                    <b>There is no data available to display at the moment.</b>
                </div>
            </div>
        );
    };
    const template: any = emptyTemplate;
    const onDataBound = () => {
        const isGridEmpty = treegridInstance.flatData.length === 0;
        if (treegridInstance.searchSettings.key === '' || treegridInstance.searchSettings.key === undefined) {
            treegridInstance.toolbarModule.enableItems([treegridInstance.element.id + '_gridcontrol_searchbar'], !isGridEmpty);
        }
        const filterMenudivs: any = treegridInstance.element.querySelectorAll('.e-filtermenudiv');
        filterMenudivs.forEach((div: HTMLElement) => {
            if (isGridEmpty && treegridInstance.grid.filterSettings.columns?.length === 0) {
                div.classList.add('e-disabled');
                div.style.cursor = 'default';
            } else {
                div.classList.remove('e-disabled');
                div.style.removeProperty('cursor');
            }
        });
    };

    const onActionComplete = (args: any) => {
        // Toggle filter dialog based on visible records
        if (args.requestType === 'filterAfterOpen' && treegridInstance.flatData.length === 0) {
            if (args.filterModel.filterSettings.columns.length > 0 && args.filterModel.filterSettings.columns.some((col: any) => col.field === args.columnName)) {
                args.filterModel.dlgObj.show();
            }
            else {
                args.filterModel.dlgObj.hide();
            }
        }
        if ((args.requestType === 'delete' || args.requestType === 'searching') && treegridInstance.flatData.length === 0 && treegridInstance.searchSettings.key === '') {
            treegridInstance.toolbarModule.enableItems([treegridInstance.element.id + '_gridcontrol_searchbar'], false);
        }
        if (args.action === 'clearFilter' && treegridInstance.flatData.length !== 0) {
            treegridInstance.toolbarModule.enableItems([treegridInstance.element.id + '_gridcontrol_searchbar'], true);
        }
    };

    return (
        <div className="control-pane">
            <div className="control-section">
                <style>{EMPTYRECORDTEMPLATE_CSS}</style>
                <TreeGridComponent
                    id="TreeGrid"
                    ref={(treegrid : any) => { treegridInstance = treegrid }}
                    dataSource={[]}
                    treeColumnIndex={1}
                    childMapping="subtasks"
                    emptyRecordTemplate={template}
                    toolbar={['Add', 'Delete', 'Update', 'Cancel', 'Search']}
                    editSettings={{ allowEditing: true, allowAdding: true, allowDeleting: true }}
                    allowPaging={true}
                    allowSorting={true}
                    allowFiltering={true}
                    filterSettings={{ type: 'Menu' }}
                    dataBound={onDataBound}
                    actionComplete={onActionComplete}
                >
                    <ColumnsDirective>
                        <ColumnDirective field="taskID" headerText="Task ID" type="number" textAlign="Right" isPrimaryKey={true} validationRules={{ required: true, min: 0 }} width="100" />
                        <ColumnDirective field="taskName" headerText="Task Name" type="string" textAlign='Left' validationRules={{ required: true }} clipMode="EllipsisWithTooltip" width="120" />
                        <ColumnDirective field="priority" headerText="Priority" type="string" textAlign="Left" editType='dropdownedit' edit={priorityParams} width="120" />
                        <ColumnDirective field="assignee" headerText="Assignee" type="string" textAlign="Left" width="100" />
                        <ColumnDirective field="status" headerText="Status" editType='dropdownedit' edit={statusParams} type="string" textAlign='Left' width="110" />
                        <ColumnDirective field="duration" headerText="Duration in Days" type="number" editType='numericedit' textAlign="Right" width="150" />
                    </ColumnsDirective>
                    <Inject services={[Toolbar, Edit, Filter, Sort, Page]} />
                </TreeGridComponent>
            </div>
        </div>
    );
};
export default App;



