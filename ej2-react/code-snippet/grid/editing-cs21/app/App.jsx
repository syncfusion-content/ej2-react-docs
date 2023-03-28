import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import { NumericTextBox } from '@syncfusion/ej2-inputs';
import * as React from 'react';
import { productData } from './datasource';
function App() {
    let gridInstance;
    let priceElem;
    let priceObj;
    let stockElem;
    let stockObj;
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };
    const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
    const priceParams = {
        create: () => {
            priceElem = document.createElement('input');
            return priceElem;
        },
        read: () => {
            return priceObj.value;
        },
        destroy: () => {
            priceObj.destroy();
        },
        write: args => {
            priceObj = new NumericTextBox({
                value: args.rowData[args.column.field],
                change: function (args) {
                    let formEle = gridInstance.element.querySelector('form').ej2_instances[0];
                    let totalCostFieldEle = formEle.getInputElement('TotalCost');
                    totalCostFieldEle.value = priceObj.value * stockObj.value;
                }
            });
            priceObj.appendTo(priceElem);
        }
    };
    const stockParams = {
        create: () => {
            stockElem = document.createElement('input');
            return stockElem;
        },
        read: () => {
            return stockObj.value;
        },
        destroy: () => {
            stockObj.destroy();
        },
        write: args => {
            stockObj = new NumericTextBox({
                value: args.rowData[args.column.field],
                change: function (args) {
                    let formEle = gridInstance.element.querySelector('form').ej2_instances[0];
                    let totalCostFieldEle = formEle.getInputElement('TotalCost');
                    totalCostFieldEle.value = priceObj.value * stockObj.value;
                }
            });
            stockObj.appendTo(stockElem);
        }
    };
    return <GridComponent dataSource={productData} ref={grid => gridInstance = grid} editSettings={editOptions} toolbar={toolbarOptions} height={273}>
    <ColumnsDirective>
      <ColumnDirective field="ProductID" headerText="Product ID" textAlign="Right" isPrimaryKey={true} width="100"/>
      <ColumnDirective field="ProductName" headerText="Product Name" width="120"/>
      <ColumnDirective field="UnitPrice" headerText="Unit Price" editType="numericedit" edit={priceParams} width="150" format="C2" textAlign="Right"/>
      <ColumnDirective field="UnitsInStock" headerText="Units In Stock" editType="numericedit" edit={stockParams} width="150" textAlign="Right"/>
      <ColumnDirective field="TotalCost" headerText="Total Cost" width="150" allowEditing={false} format="C2" textAlign="Right"/>
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]}/>
  </GridComponent>;
}
;
export default App;
