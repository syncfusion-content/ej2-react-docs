{% raw %}



import * as React from 'react';
import { projectData } from './datasource';
import { ColumnsDirective, ColumnDirective, TreeGridComponent, Inject } from '@syncfusion/ej2-react-treegrid';
import { Page, TreeGrid, Filter, FilterSettingsModel } from '@syncfusion/ej2-react-treegrid';
import { IFilter } from '@syncfusion/ej2-react-grids';

/* tslint:disable */

function App() {

  let treegrid: TreeGridComponent | null;

  const FilterOptions: FilterSettingsModel = {
    type: 'Menu'
  };
  
  const ifilter: IFilter = { params: {showSpinButton: false}};

    return (
      <TreeGridComponent dataSource={projectData} treeColumnIndex={1} idMapping= 'TaskID' parentIdMapping='parentID' allowFiltering={true}  filterSettings={FilterOptions}
      ref={g => treegrid = g} height={273}>
        <ColumnsDirective>
          <ColumnDirective field='TaskID' headerText='Task ID' width='70' filter={ifilter} textAlign='Right' isPrimaryKey={true}></ColumnDirective>
          <ColumnDirective field='TaskName' headerText='Task Name' width='100'></ColumnDirective>
          <ColumnDirective field='StartDate' headerText='Start Date' width='100' format='yMd' textAlign='Right' editType='datepickeredit'></ColumnDirective>
          <ColumnDirective field='EndDate' headerText='End Date' width='100' format='yMd' textAlign='Right' editType='datepickeredit'></ColumnDirective>
          <ColumnDirective field='Duration' headerText='Duration' width='90' textAlign='Right' />
          <ColumnDirective field='Priority' headerText='Priority' width='90' textAlign='Right' />
        </ColumnsDirective>
        <Inject services={[Filter, Page]} />
      </TreeGridComponent>
    );
};
export default App;


{% endraw %}