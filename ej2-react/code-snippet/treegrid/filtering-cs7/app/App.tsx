

import { IFilter } from '@syncfusion/ej2-grids';
import { ColumnDirective, ColumnsDirective, Filter, FilterSettingsModel } from '@syncfusion/ej2-react-treegrid';
import { Inject, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { sampleData } from './datasource';

function App() {
    const FilterOptions: FilterSettingsModel = {
        type: 'Menu'
    };
    const Filter : IFilter = {
        type: 'Excel'
    }
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' height='275' allowFiltering={true} filterSettings={FilterOptions}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' filter={Filter} width='180' />
            <ColumnDirective field='duration' headerText='Duration' width='90'/>
            <ColumnDirective field='progress' headerText='Progress' width='90'/>
        </ColumnsDirective>
        <Inject services={[Filter]}/>
    </TreeGridComponent>
};
export default App;


