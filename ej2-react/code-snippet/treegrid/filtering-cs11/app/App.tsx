

import { ColumnDirective, ColumnsDirective, Filter, FilterSettingsModel } from '@syncfusion/ej2-react-treegrid';
import { Inject, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { diacritics } from './datasource';

function App() {
    const FilterOptions: FilterSettingsModel = {
        ignoreAccent: true
    };

    return <TreeGridComponent dataSource={diacritics} treeColumnIndex={0} childMapping='Children'
        height='275' allowFiltering={true} filterSettings={FilterOptions}>
        <ColumnsDirective>
          <ColumnDirective field='EmpID' headerText='Employee ID' width='95'/>
          <ColumnDirective field='Name' headerText='Name' width='180'/>
          <ColumnDirective field='DOB' headerText='DOB' width='90' format='yMd' textAlign='Right' type='date' />
          <ColumnDirective field='Country' headerText='Country' width='100' />
        </ColumnsDirective>
        <Inject services={[Filter]}/>
    </TreeGridComponent>
};
export default App;


