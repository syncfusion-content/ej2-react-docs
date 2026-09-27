import * as React from 'react';
import { useEffect, useState } from 'react';
import { ColumnDirective, ColumnsDirective, Filter, Inject, Toolbar, Edit, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { showCheckBoxData } from './data';
const SAMPLE_CSS = `
.checkboxprop {
padding-bottom: 8px;
}
/* Outer wrapper containing label and dropdown */
.checkboxprop > .checkboxmode {
display: flex;
align-items: center;
gap: 12px;
}
/* Label */
.checkboxprop > .checkboxmode > span {
display: inline-block;
white-space: nowrap;
font-size: 14px;
}
/* Inner dropdown wrapper */
.checkboxprop > .checkboxmode > .checkboxmode {
display: block;
width: 180px;
flex: 0 0 180px;
}
/* Ensure the Syncfusion dropdown uses the wrapper width */
.checkboxprop .e-dropdownlist {
width: 100% !important;
}
.e-bigger.bootstrap5 .e-treegrid .e-hierarchycheckbox .e-frame,
.e-bigger.bootstrap5-dark .e-treegrid .e-hierarchycheckbox .e-frame,
.e-bigger.bootstrap4 .e-treegrid .e-hierarchycheckbox .e-frame {
height: 17px;
width: 17px;
}
.checkboxprop {
padding-bottom: 5px;
}
.checkboxmode {
display: inline-block;
padding-right: 5px;
}
.status-badge {
padding: 4px 10px;
border-radius: 12px;
font-size: 12px;
font-weight: 600;
display: inline-block;
}
.completed {
background: #dcfce7;
color: #15803d;
}
.in-progress {
background: #dbeafe;
color: #1d4ed8;
}
.not-started {
background: #f3f4f6;
color: #4b5563;
}
.under-review {
background: #fef3c7;
color: #b45309;
}
.blocked {
background: #fee2e2;
color: #dc2626;
}
`;
const hierarchyModeData = [
    {
        id: 'Self',
        name: 'Self'
    },
    {
        id: 'Hierarchy',
        name: 'Hierarchy'
    },
    {
        id: 'FilteredHierarchy',
        name: 'Filtered Hierarchy'
    }
];
const hierarchyModeFields = {
    text: 'name',
    value: 'id'
};
const editSettings = {
    allowDeleting: true,
};

function App() {
    const [hierarchyCheckboxMode, setHierarchyCheckboxMode] = useState('self');
    const hierarchyModeChange = (args) => {
        if (args.value === 'Hierarchy') {
            setHierarchyCheckboxMode('hierarchy');
        }
        else if (args.value === 'FilteredHierarchy') {
            setHierarchyCheckboxMode('filteredHierarchy');
        }
        else {
            setHierarchyCheckboxMode('self');
        }
    };
    const queryCellInfo = (args) => {
        if (args.column?.field !== 'status' ||
            !args.cell) {
            return;
        }
        const taskData = args.data;
        const statusClass = taskData.status
            .toLowerCase()
            .replace(/\s+/g, '-');
        args.cell.innerHTML = `
<span class="status-badge ${statusClass}">
${taskData.status}
</span>
`;
    };
    return (<div className="control-pane">
      <style>{SAMPLE_CSS}</style>
      <div className="control-section">
        <div>
          <div className="checkboxprop">
            <div className="checkboxmode">
              <span>
                Hierarchy Checkbox Mode
              </span>
              <div className="checkboxmode">
                <DropDownListComponent id="hierarchyModes" dataSource={hierarchyModeData} fields={hierarchyModeFields} value="Self" width="180px" change={hierarchyModeChange} htmlAttributes={{
            tabindex: '1'
        }}/>
              </div>
            </div>
          </div>
          <TreeGridComponent id="TreeGrid" dataSource={showCheckBoxData} childMapping="subTasks" treeColumnIndex={1} toolbar={['Search', 'Delete']} allowFiltering={true} height={380} editSettings={editSettings} hierarchyCheckboxMode={hierarchyCheckboxMode} queryCellInfo={queryCellInfo} aria-label="Tree Grid">
            <ColumnsDirective>
              <ColumnDirective field="taskID" visible={false} isPrimaryKey={true}/>
              <ColumnDirective field="taskName" headerText="Task Name" width={270} showCheckbox={true}/>
              <ColumnDirective field="assignee" headerText="Employee" width={180}/>
              <ColumnDirective field="designation" headerText="Designation" width={220}/>
              <ColumnDirective field="priority" headerText="Priority" width={140}/>
              <ColumnDirective field="status" headerText="Status" width={120} textAlign="Center"/>
              <ColumnDirective field="progress" headerText="Progress" width={120} textAlign="Right"/>
            </ColumnsDirective>
            <Inject services={[
            Filter,
            Toolbar,
            Edit
        ]}/>
          </TreeGridComponent>
        </div>
      </div>
    </div>);
}
;
export default App;
