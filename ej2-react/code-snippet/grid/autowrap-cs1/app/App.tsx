

import { ColumnDirective, ColumnsDirective, GridComponent, TextWrapSettingsModel } from '@syncfusion/ej2-react-grids';
import { Inject, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { inventoryData } from './datasource';

function App() {
  const settings: TextWrapSettingsModel = { wrapMode: 'Content' };
  return (<div>
    <GridComponent dataSource={inventoryData} allowPaging={true} allowTextWrap={true}
      textWrapSettings={settings} height='400'>
      <ColumnsDirective>
        <ColumnDirective field='Inventor' headerText='Inventor' width='180' textAlign='Right' />
        <ColumnDirective field='NumberofPatentFamilies' headerText='Number of Patent Families' width='180' textAlign='Right' />
        <ColumnDirective field='Country' headerText='Country' width="140" />
        <ColumnDirective field='Active' headerText='Active' width='120' />
        <ColumnDirective field='Mainfieldsofinvention' headerText='Main Fields of Invention' width='200' />
      </ColumnsDirective>
      <Inject services={[Page]} />
    </GridComponent>
  </div>)
};
export default App;


