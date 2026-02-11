

import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { PageSettingsModel, InfiniteScroll } from '@syncfusion/ej2-react-grids';
import { SwitchComponent, ChangeEventArgs } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { data } from './largeData';

function App() {
    let grid;
    const datas = data(1000);
    const pageSettings = { pageSize: 50 };
    const onChange = (args) => {
        grid.infiniteScrollSettings.enableCache = args.checked;
        grid.refresh();
    }
    return (<div>
        <div style={{display: "flex", margin: "10px"}}>
            <label style={{ marginRight: "5px" }}>Enable/Disable Cache mode: </label>
            <SwitchComponent change={onChange}></SwitchComponent>
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


