

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { productData } from './datasource';

function App() {
    let template: any;
    const gridTemplate = (props: any) => {
        if (props.Discontinued) {
            return (<div className="template_checkbox">
                <input type="checkbox" checked={true} />
            </div>);
        } else {
            return (<div className="template_checkbox">
                <input type="checkbox" />
            </div>);
        }
    }
    template = gridTemplate;
    return <GridComponent dataSource={productData} height={315}>
        <ColumnsDirective>
            <ColumnDirective headerText='Discontinued' width='180' template={template} textAlign='Center' />
            <ColumnDirective field='ProductID' headerText='Product ID' width='125' />
            <ColumnDirective field='ProductName' headerText='Product Name' width='120' />
            <ColumnDirective field='SupplierID' headerText='Supplier ID' width='170' />
            <ColumnDirective field='UnitPrice' headerText='Unit Price' width='135' />
        </ColumnsDirective>
    </GridComponent>
};
export default App;


