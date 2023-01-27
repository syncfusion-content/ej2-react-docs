

import { TreeGridComponent, ColumnsDirective, ColumnDirective, Inject, Filter, Sort, Edit, Toolbar, Page } from '@syncfusion/ej2-react-treegrid';
import { Browser } from "@syncfusion/ej2-base";
import * as React from 'react';
import { sampleData } from './datasource';

function App() {
  let treegridobj: TreeGridComponent | null;
  const toolbarOptions: any = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search'];
  const renderingMode: any = 'Vertical';
  const editSettings: any = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
  const filterOptions: any = { type: 'Excel' };
  const load = (): void => {
    treegridobj.grid.adaptiveDlgTarget = document.getElementsByClassName('e-mobile-content')[0] as HTMLElement;
  }
    return (
      <div className='control-pane'>
        <div className='control-section'>
          <div className="col-md-9 e-bigger e-adaptive-demo">
            {!Browser.isDevice ? (
              <div className="e-mobile-layout">
                <div className="e-mobile-content">
                    <TreeGridComponent id="adaptivebrowser" dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='100%' ref={treegrid => treegridobj = treegrid} enableAdaptiveUI={true} allowFiltering={true} allowSorting={true} allowPaging={true} filterSettings={filterOptions} toolbar={toolbarOptions} editSettings={editSettings} load={load}>
                      <ColumnsDirective>
                        <ColumnDirective field='taskID' headerText='Task ID' isPrimaryKey={true} width='135' textAlign='Right'></ColumnDirective>
                        <ColumnDirective field='taskName' headerText='Task Name' width='280'></ColumnDirective>
                        <ColumnDirective field='duration' headerText='Duration' width='140' textAlign='Right' />
                        <ColumnDirective field='progress' headerText='Progress' width='145' textAlign='Right' />
                      </ColumnsDirective>
                      <Inject services={[Filter, Sort, Edit, Toolbar, Page]} />
                    </TreeGridComponent>
                </div>
              </div>
            ) : (
                <TreeGridComponent id="adaptivedevice" dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='100%' ref={treegrid => treegridobj = treegrid} enableAdaptiveUI={true} allowFiltering={true} allowSorting={true} allowPaging={true} filterSettings={filterOptions} toolbar={toolbarOptions} editSettings={editSettings} load={load}>
                <ColumnsDirective>
                  <ColumnDirective field='taskID' headerText='Task ID' isPrimaryKey={true} width='135' textAlign='Right'></ColumnDirective>
                  <ColumnDirective field='taskName' headerText='Task Name' width='280'></ColumnDirective>
                  <ColumnDirective field='duration' headerText='Duration' width='140' textAlign='Right'/>
                  <ColumnDirective field='progress' headerText='Progress' width='145' textAlign='Right'/>
                </ColumnsDirective>
                <Inject services={[Filter, Sort, Edit, Toolbar, Page]} />
              </TreeGridComponent>
              )}
          </div>
        </div>
      </div>
    )
};
export default App;


