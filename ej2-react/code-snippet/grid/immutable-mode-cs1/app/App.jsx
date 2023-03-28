import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import * as React from 'react';
import { data } from './datasource';
function App() {
    const pageSettings = { pageSize: 50 };
    let immutableInit = true;
    let init = true;
    let primaryKey = 0;
    let normalStart;
    let immutableStart;
    let immutableGrid;
    let normalGrid;
    let topBtn;
    let bottomBtn;
    let deleteBtn;
    let sortBtn;
    let pageBtn;
    const immutableBeforeDataBound = () => {
        immutableStart = new Date().getTime();
    };
    const immutableDataBound = () => {
        let val = immutableInit ? '' : new Date().getTime() - immutableStart;
        document.getElementById("immutableDelete").innerHTML =
            "Immutable rendering Time: " + "<b>" + val + "</b>" + "<b>ms</b>";
        immutableStart = 0;
        immutableInit = false;
    };
    const addTopEvent = () => {
        let addedRecords = [
            { 'OrderID': ++primaryKey, 'ProductName': 'Chai', 'ProductID': 'Sasquatch Ale', 'CustomerID': 'QUEDE', 'CustomerName': 'Yoshi Tannamuri' },
            { 'OrderID': ++primaryKey, 'ProductName': 'Georg Pipps', 'ProductID': 'Valkoinen suklaa', 'CustomerID': 'RATTC', 'CustomerName': 'Martín Sommer' },
            { 'OrderID': ++primaryKey, 'ProductName': 'Yoshi Tannamuri', 'ProductID': 'Gula Malacca', 'CustomerID': 'COMMI', 'CustomerName': 'Ann Devon' },
            { 'OrderID': ++primaryKey, 'ProductName': 'Palle Ibsen', 'ProductID': 'Rogede sild', 'CustomerID': 'RATTC', 'CustomerName': 'Paula Wilson' },
            { 'OrderID': ++primaryKey, 'ProductName': 'Francisco Chang', 'ProductID': 'Mascarpone Fabioli', 'CustomerID': 'ROMEY', 'CustomerName': 'Jose Pavarotti' }
        ];
        let aData = addedRecords.concat(immutableGrid.dataSource);
        normalGrid.setProperties({ dataSource: aData });
        immutableGrid.setProperties({ dataSource: aData });
    };
    const addBottomEvent = () => {
        let addedRecords = [
            { 'OrderID': ++primaryKey, 'ProductName': 'Chai', 'ProductID': 'Sasquatch Ale', 'CustomerID': 'QUEDE', 'CustomerName': 'Yoshi Tannamuri' },
            { 'OrderID': ++primaryKey, 'ProductName': 'Georg Pipps', 'ProductID': 'Valkoinen suklaa', 'CustomerID': 'RATTC', 'CustomerName': 'Martín Sommer' },
            { 'OrderID': ++primaryKey, 'ProductName': 'Yoshi Tannamuri', 'ProductID': 'Gula Malacca', 'CustomerID': 'COMMI', 'CustomerName': 'Ann Devon' },
            { 'OrderID': ++primaryKey, 'ProductName': 'Palle Ibsen', 'ProductID': 'Rogede sild', 'CustomerID': 'RATTC', 'CustomerName': 'Paula Wilson' },
            { 'OrderID': ++primaryKey, 'ProductName': 'Francisco Chang', 'ProductID': 'Mascarpone Fabioli', 'CustomerID': 'ROMEY', 'CustomerName': 'Jose Pavarotti' }
        ];
        let aData = immutableGrid.dataSource.concat(addedRecords);
        normalGrid.setProperties({ dataSource: aData });
        immutableGrid.setProperties({ dataSource: aData });
    };
    const deleteEvent = () => {
        immutableGrid.dataSource.splice(0, 5);
        normalGrid.setProperties({ dataSource: immutableGrid.dataSource });
        immutableGrid.setProperties({ dataSource: immutableGrid.dataSource });
    };
    const sortEvent = () => {
        let aData = immutableGrid.dataSource.reverse();
        normalGrid.setProperties({ dataSource: aData });
        immutableGrid.setProperties({ dataSource: aData });
    };
    const pageEvent = () => {
        let totalPage = immutableGrid.dataSource.length / immutableGrid.pageSettings.pageSize;
        let page = Math.floor(Math.random() * totalPage) + 1;
        normalGrid.setProperties({ pageSettings: { currentPage: page } });
        immutableGrid.setProperties({ pageSettings: { currentPage: page } });
    };
    const beforeDataBound = () => {
        normalStart = new Date().getTime();
    };
    const dataBound = () => {
        let val = init ? '' : new Date().getTime() - normalStart;
        document.getElementById("normalDelete").innerHTML =
            "Normal rendering Time: " + "<b>" + val + "</b>" + "<b>ms</b>";
        normalStart = 0;
        init = false;
    };
    return <div>
      <table>
          <tbody>
            <tr>
              <td>
                <span id="immutableDelete"></span>
              </td>
            </tr>
            <tr>
              <td>
                <span id="normalDelete"></span>
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <ButtonComponent ref={topInfo => { topBtn = topInfo; }} cssClass='e-info' onClick={addTopEvent}>Add 5 rows at top</ButtonComponent>
                  <ButtonComponent ref={bottomInfo => { bottomBtn = bottomInfo; }} cssClass='e-info' onClick={addBottomEvent}>Add 5 rows at bottom</ButtonComponent>
                  <ButtonComponent ref={deleteInfo => { deleteBtn = deleteInfo; }} cssClass='e-info' onClick={deleteEvent}>Delete 5 rows</ButtonComponent>
                  <ButtonComponent ref={sortInfo => { sortBtn = sortInfo; }} cssClass='e-info' onClick={sortEvent}>Sort Order ID</ButtonComponent>
                  <ButtonComponent ref={pageInfo => { pageBtn = pageInfo; }} cssClass='e-info' onClick={pageEvent}>Paging</ButtonComponent>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <span><b>Immutable Grid</b></span>
                <GridComponent ref={immutable => { immutableGrid = immutable; }} dataSource={data} height='250' enableImmutableMode={true} allowPaging={true} pageSettings={pageSettings} beforeDataBound={immutableBeforeDataBound} dataBound={immutableDataBound}>
                  <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey="true" width='120' textAlign='Right'></ColumnDirective>
                    <ColumnDirective field='ProductName' headerText='Product Name' width='160'></ColumnDirective>
                    <ColumnDirective field='ProductID' headerText='Product ID' width='130' textAlign='Right'/>
                    <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'/>
                    <ColumnDirective field='CustomerName' headerText='Customer Name' width='160'></ColumnDirective>
                  </ColumnsDirective>
                   <Inject services={[Page]}/>
                </GridComponent>
              </td>
            </tr>
            <tr>
              <td>
                <span><b>Normal Grid</b></span>
                <GridComponent ref={normal => { normalGrid = normal; }} dataSource={data} height='250' allowPaging={true} pageSettings={pageSettings} beforeDataBound={beforeDataBound} dataBound={dataBound}>
                  <ColumnsDirective>
                    <ColumnDirective field='OrderID' headerText='Order ID' isPrimaryKey="true" width='120' textAlign='Right'></ColumnDirective>
                    <ColumnDirective field='ProductName' headerText='Product Name' width='160'></ColumnDirective>
                    <ColumnDirective field='ProductID' headerText='Product ID' width='130' textAlign='Right'/>
                    <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'/>
                    <ColumnDirective field='CustomerName' headerText='Customer Name' width='160'></ColumnDirective>
                  </ColumnsDirective>
                   <Inject services={[Page]}/>
                </GridComponent>
              </td>
            </tr>
          </tbody>
        </table></div>;
}
export default App;
