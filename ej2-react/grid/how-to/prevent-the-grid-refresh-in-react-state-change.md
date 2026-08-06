---
layout: post
title: React Grid Prevent Refresh on State Change | Syncfusion
description: Learn how to prevent React Data Grid refresh on state changes in class components using shouldComponentUpdate to preserve grid state and improve performance.
control: Prevent the grid refresh in react state change 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Prevent Grid Refresh on State Change in React Data Grid

By default, React class components automatically re-render whenever their state changes. This behavior also affects the Grid component, forcing it to refresh and discard its previous state. To prevent unnecessary re-rendering, you can override the `shouldComponentUpdate` method and control when the Grid should update.

In the below code, we have prevented the Grid re-rendering, when we change the state value in [rowSelected](https://ej2.syncfusion.com/react/documentation/api/grid#rowselected) event.

```ts
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Inject } from '@syncfusion/ej2-react-grids';
import { data } from './datasource';
class App extends React.Component<{}, {}> {
  public GridRefresh: boolean = false;
  shouldComponentUpdate() {
    if (this.GridRefresh)
      return false;
    return true;
  }
  rowSelected(args: any) {
    let data: object = this.gridInstance.getSelectedRecords();
    this.GridRefresh = true;
    this.setState({ selectedRecord: data });
  }
  actionBegin(args: any) {
    if (args.requestType === 'paging') {
      this.GridRefresh = false;
      this.setState({ currentpage: args.currentPage });
    }
  }
  render() {
    return (<div className='control-pane'>
      <div className='control-section'>
        <GridComponent id='grid' ref={grid => this.gridInstance = grid} dataSource={orderDetails} allowPaging={true} selectionSettings={this.selectionsettings} rowSelected={this.rowSelected.bind(this)} ref={grid => this.gridInstance = grid} actionBegin={this.actionBegin.bind(this)}>
          <ColumnsDirective>
                    <ColumnDirective field='OrderID' width='100' textAlign="Right"></ColumnDirective>
                    <ColumnDirective field='CustomerID' width='100'></ColumnDirective>
                    <ColumnDirective field='EmployeeID' width='100' textAlign="Right"></ColumnDirective>
                    <ColumnDirective field='Freight' width='100' format="C2" textAlign="Right"></ColumnDirective>
                    <ColumnDirective field='ShipCountry' width='100'></ColumnDirective>
            </ColumnsDirective>
          <Inject services={[Page]} />
        </GridComponent>
      </div>
    </div>);
  }
}
ReactDOM.render(<App />, document.getElementById('grid'));
```