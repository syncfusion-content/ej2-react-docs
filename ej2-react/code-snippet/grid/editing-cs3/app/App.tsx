

import { ColumnDirective, ColumnsDirective, EditSettingsModel, GridComponent } from '@syncfusion/ej2-react-grids';
import { Edit, IEditCell, Inject, Toolbar, ToolbarItems } from '@syncfusion/ej2-react-grids';
import { NumericTextBox } from '@syncfusion/ej2-inputs';
import * as React from 'react';
import { productData } from './datasource';

function App() {
  let priceElem: HTMLElement;
  let priceObj: NumericTextBox;
  let stockElem: HTMLElement;
  let stockObj: NumericTextBox;
  let gridInstance: GridComponent | null;
  const editOptions: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Batch' };
  const toolbarOptions: ToolbarItems[] = ['Add', 'Delete', 'Update', 'Cancel'];
  const priceParams: IEditCell = {
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
      let rowData = args.rowData;
      let rowIndex = gridInstance.getRowInfo(args.row).rowIndex;
      priceObj = new NumericTextBox({
        value: args.rowData[args.column.field],
        change: function (args) {
          let totalCostValue = args.value * rowData['UnitsInStock'];
          gridInstance.updateCell(rowIndex, 'TotalCost', totalCostValue);
        }
      });
      priceObj.appendTo(priceElem);
    }
  };
  const stockParams: object = {
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
      let rowData = args.rowData;
      let rowIndex = gridInstance.getRowInfo(args.row).rowIndex;
      stockObj = new NumericTextBox({
        value: args.rowData[args.column.field],
        change: function (args) {
          let totalCostValue = args.value * rowData['UnitPrice'];
          gridInstance.updateCell(rowIndex, 'TotalCost', totalCostValue);
        }
      });
      stockObj.appendTo(stockElem);
    }
  };
  const cellEdit = (args) => {
    if (args.columnName == 'TotalCost') {
      args.cancel = true;
    }
  }
  return <GridComponent dataSource={productData} ref={grid => gridInstance = grid} editSettings={editOptions} cellEdit={cellEdit} toolbar={toolbarOptions} height={273}>
    <ColumnsDirective>
      <ColumnDirective field="ProductID" headerText="Product ID" textAlign="Right" isPrimaryKey={true} width="100" />
      <ColumnDirective field="ProductName" headerText="Product Name" width="120" />
      <ColumnDirective field="UnitPrice" headerText="Unit Price" editType="numericedit" edit={priceParams} width="150" format="C2" textAlign="Right" />
      <ColumnDirective field="UnitsInStock" headerText="Units In Stock" editType="numericedit" edit={stockParams} width="150" textAlign="Right" />
      <ColumnDirective field="TotalCost" headerText="Total Cost" width="150" format="C2" textAlign="Right" />
    </ColumnsDirective>
    <Inject services={[Edit, Toolbar]} />
  </GridComponent>
};
export default App;


