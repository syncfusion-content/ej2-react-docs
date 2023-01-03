import { ColumnDirective, ColumnsDirective, Toolbar } from '@syncfusion/ej2-react-grids';
import { GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let gridInstance;
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    let initialGridLoad = true;
    const pageOptions = {
        pageSize: 8, pageSizes: true
    };
    const dataBound = () => {
        if (initialGridLoad && gridInstance) {
            initialGridLoad = false;
            const pager = document.getElementsByClassName('e-gridpager');
            let topElement;
            if (gridInstance.allowGrouping || gridInstance.toolbar) {
                topElement = gridInstance.allowGrouping ? document.getElementsByClassName('e-groupdroparea') :
                    document.getElementsByClassName('e-toolbar');
            }
            else {
                topElement = document.getElementsByClassName('e-gridheader');
            }
            gridInstance.element.insertBefore(pager[0], topElement[0]);
        }
    };
    return (<GridComponent dataSource={data} ref={grid => gridInstance = grid} toolbar={toolbarOptions} allowPaging={true} height={268} pageSettings={pageOptions} dataBound={dataBound}>
              <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right"/>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
                <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
                <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
            </ColumnsDirective>
            <Inject services={[Page, Toolbar]}/>
        </GridComponent>);
}
;
export default App;
