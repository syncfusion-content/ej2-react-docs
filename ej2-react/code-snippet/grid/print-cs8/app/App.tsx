import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, Page, PageSettingsModel, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    const toolbar: ToolbarItems[] = ['Print'];
    const pageOptions: PageSettingsModel = { pageSize: 6 };
    const beforePrint = () => {
        const styleElement: HTMLElement = document.createElement('style');
        styleElement.innerHTML = `
        .e-grid .e-headercell {
            background: #24a0ed !important;
        }
        .e-grid .e-row .e-rowcell {
            background: #cbecff !important;
        }
        .e-grid .e-altrow .e-rowcell{
            background: #e7d7f7 !important;
        }
        `;
        (document.querySelector('head') as HTMLElement).appendChild(styleElement);
    }
    return (<GridComponent dataSource={data} toolbar={toolbar}
        allowPaging={true} pageSettings={pageOptions} beforePrint={beforePrint}>
        <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" />
            <ColumnDirective field='CustomerID' headerText='Customer ID' visible={false} width='150' />
            <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
            <ColumnDirective field='ShipName' headerText='Ship Name' width='150' />
        </ColumnsDirective>
        <Inject services={[Toolbar, Page]} />
    </GridComponent >)
};
export default App;