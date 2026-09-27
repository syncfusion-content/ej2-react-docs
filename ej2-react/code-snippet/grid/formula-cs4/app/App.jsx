import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Edit, Formula } from '@syncfusion/ej2-react-grids';
import { productData } from './datasource';

function App() {
    const formulaSettings = {
        customFunctions: {
            CUSTOMSUM: (params) => {
                let total = 0;
                for (const value of params.values) {
                    total += Number(value || 0);
                }
                return total;
            },
        },
    };
    const editSettings = { allowEditing: true, mode: 'Cell' };
    const selectionSettings = {  mode: 'Cell', cellSelectionMode: 'Box', type: 'Multiple'};
    return (
        <GridComponent dataSource={productData} editSettings={editSettings} enableAutoFill={true} 
                selectionSettings={selectionSettings} formulaSettings={formulaSettings} height={300}>
            <ColumnsDirective>
                 <ColumnDirective field='Id' headerText='Id' width='100' isPrimaryKey={true} textAlign='Right' validationRules={{ required: true }}></ColumnDirective>
                <ColumnDirective field='Product' headerText='Product Name' width='200' validationRules={{ required: true }}></ColumnDirective>
                <ColumnDirective field='Quantity' headerText='Quantity' width='120' textAlign='Right' editType='numericedit'></ColumnDirective>
                <ColumnDirective field='Price' headerText='Price Per Unit' width='140' textAlign='Right' editType='numericedit' format='C2'></ColumnDirective>
                <ColumnDirective field='GrossAmount' headerText='Gross Amount' width='150' textAlign='Right' allowFormula={true} format='C2'></ColumnDirective>
                <ColumnDirective field='TaxAmount' headerText='Tax Amount' width='130' textAlign='Right' allowFormula={true} format='C2'></ColumnDirective>
                <ColumnDirective field='TotalAmount' headerText='Total Amount' width='150' textAlign='Right' allowFormula={true} format='C2'></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[ Edit, Formula]} />
        </GridComponent>
    );
}
export default App;