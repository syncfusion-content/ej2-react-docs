import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Page, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { DataManager, Query } from '@syncfusion/ej2-data';
function App() {
  let lastSearchString = '';
  const toolbarOptions = ['Search'];
  function actionComplete(args){
    if (args.requestType === 'searching') {
      lastSearchString = args.searchString; // Store the last searched value.
    }
  }
  function getSearchedRecords(){
    if (lastSearchString) {
      new DataManager(data).executeQuery(new Query().search(lastSearchString, [], undefined, true)).then((e) => {
        console.log('Searched Records:', e.result); // Log searched records.
      });
    }
  }
  return (
    <div className='control-pane'>
      <div className='control-section'>
        <ButtonComponent id='getSearchedRecords' onClick={getSearchedRecords}>Get Searched Records</ButtonComponent>
        <GridComponent dataSource={data} allowPaging={true} pageSettings={{ pageCount: 5 }} toolbar={toolbarOptions} actionComplete={actionComplete.bind(this)}>
          <ColumnsDirective>
            <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right' isPrimaryKey={true}></ColumnDirective>
            <ColumnDirective field='CustomerID' headerText='Customer Name' width='150'></ColumnDirective>
            <ColumnDirective field='Freight' headerText='Freight' width='120' format='C2' textAlign='Right'/>
            <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'></ColumnDirective>
          </ColumnsDirective>
          <Inject services={[Page, Toolbar]}/>
        </GridComponent>
      </div> 
    </div>
  )
}
export default App;