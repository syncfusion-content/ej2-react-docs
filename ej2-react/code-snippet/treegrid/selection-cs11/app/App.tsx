import * as React from 'react';

import {
  TreeGridComponent, ColumnsDirective, ColumnDirective, Inject, Selection, VirtualScroll,Aggregate, AggregatesDirective, AggregateDirective, AggregateColumnsDirective, AggregateColumnDirective
} from '@syncfusion/ej2-react-treegrid';
import generateGroceriesData from './datasource'


function App() {
    let treegridInstance: any;
    let data = generateGroceriesData();
    let totalPrice = 0;

  const selectionSettings = { persistSelection: true };

  const custom = ()=> {
     return <span className="selected-total">Total Price of Selected Rows: $0.00</span>;
  };

  const calculateSelectedTotal = () => {
    const checkedRecords = treegridInstance.getCheckedRecords();
    const checkedRecordsPrice = checkedRecords.reduce((sum: any, rec: any) => sum + (parseFloat(rec.price) || 0), 0);
    return checkedRecordsPrice;
  };
  
  
  const updateFooterTotal = () => {
    totalPrice = calculateSelectedTotal();
    const footerEl = treegridInstance.getFooterContent().querySelector('.selected-total');
    if (footerEl) {
      footerEl.innerHTML = `Total Price of Selected Rows: <strong>$${totalPrice.toFixed(2)}</strong>`;
    }
  };


    return <TreeGridComponent
          id="TreeGrid"
          ref={(treegrid) => { treegridInstance = treegrid }}
          dataSource={data}
          childMapping= 'items'
          treeColumnIndex={1}
          height={400}
          enableVirtualization={true}
          selectionSettings={selectionSettings}
          checkboxChange={updateFooterTotal}
          dataBound={updateFooterTotal}
          autoCheckHierarchy={true}
                >
        <ColumnsDirective>
        <ColumnDirective field="id" isPrimaryKey={true} visible={false} />        
          <ColumnDirective field="name" headerText="Item" width="180" showCheckbox={true} />
          <ColumnDirective field="description" headerText="Description" width="200" />
          <ColumnDirective field="quantity" headerText="Quantity" width="100" textAlign='Right' />
          <ColumnDirective field="price" headerText="Price" width="200" textAlign='Right' />
          <ColumnDirective field="status" headerText="Status" width="100" />
          <ColumnDirective field="popularity" headerText="Popularity" width="150" />

        </ColumnsDirective>
        <AggregatesDirective>
            <AggregateDirective showChildSummary={false}>
                <AggregateColumnsDirective>
                <AggregateColumnDirective field='price' type='Custom' footerTemplate={custom}/>
                </AggregateColumnsDirective>
                </AggregateDirective>
        </AggregatesDirective>
        <Inject services={[Selection,VirtualScroll, Aggregate]} />
      </TreeGridComponent>

}
;
export default App;
