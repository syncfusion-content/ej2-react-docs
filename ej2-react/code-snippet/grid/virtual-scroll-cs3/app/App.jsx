import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { InfiniteScroll } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
function App() {
    const data = data(1000);
    const pageSettings = { pageSize: 50 };
    const infiniteOptions = { enableCache: true };
    return <GridComponent dataSource={data} height={300} enableInfiniteScrolling={true} infiniteScrollSettings={infiniteOptions} pageSettings={pageSettings}>
          <Inject services={[InfiniteScroll]}/>
          <ColumnsDirective>
              <ColumnDirective field='TaskID' headerText='Task ID' width='70' textAlign='Right'/>
              <ColumnDirective field='Engineer' width='100'/>
              <ColumnDirective field='Designation' width='100'/>
              <ColumnDirective field='Estimation' headerText='Estimation' textAlign='Right' width='100'/>
              <ColumnDirective field='Status' width='100'/>
          </ColumnsDirective>
          </GridComponent>;
}
export default App;
