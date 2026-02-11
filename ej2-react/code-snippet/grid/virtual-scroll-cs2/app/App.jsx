import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { PageSettingsModel, InfiniteScroll } from '@syncfusion/ej2-react-grids';
import { ChangeEventArgs, DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './largeData';

function App() {
  let grid;
  const datas = data(1000);
  const pageSettings = { pageSize: 50 };
  const dropDownData = [
    { text: 'Select count' },
    { text: '1', value: '1' },
    { text: '2', value: '2' },
    { text: '3', value: '3' },
    { text: '4', value: '4' },
    { text: '5', value: '5' },
    { text: '6', value: '6' },
    { text: '7', value: '7' }
  ];
  const onChange = (args) => {
    grid.infiniteScrollSettings.initialBlocks = parseInt((args.value ), 10);
    grid.refresh();
  }
  return (<div>
    <div style={{ display: "inline-block", marginBottom: "10px" }}>
      <label style={{ padding: "30px 20px 0 0" }}>Select initialBlocks count: </label>
      <DropDownListComponent index={0} width={200} dataSource={dropDownData} change={onChange}></DropDownListComponent>
    </div>
    <GridComponent ref={g => grid = g} dataSource={datas} height={300} enableInfiniteScrolling={true} pageSettings={pageSettings}>
      <Inject services={[InfiniteScroll]} />
      <ColumnsDirective>
        <ColumnDirective field='TaskID' headerText='Task ID' width='70' textAlign='Right' />
        <ColumnDirective field='Engineer' width='100' />
        <ColumnDirective field='Designation' width='100' />
        <ColumnDirective field='Estimation' headerText='Estimation' textAlign='Right' width='100' />
        <ColumnDirective field='Status' width='100' />
      </ColumnsDirective>
    </GridComponent></div>
  )
}
export default App;