import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject } from '@syncfusion/ej2-react-grids'
import React, { useState } from 'react';
import { data } from './datasource';

function App() {
  const [actionBeginMessage, setActionBeginMessage] = useState('');
  const [actionCompleteMessage, setActionCompleteMessage] = useState('');
  const filterSettings = {
    type: 'Menu'
  };
  const actionBegin = (args) => {
    setActionBeginMessage('');
    if (args.requestType === 'filterbeforeopen' && args.columnType === "number") {
      args.filterModel.customFilterOperators.numberOperator = [
        { value: "equal", text: "Equal" },
        { value: "notequal", text: "Not Equal" }];
      setActionBeginMessage('Filter operators for number column were customized using the filterbeforeopen action in the actionBegin event');
    }
    else {
      setActionBeginMessage(args.requestType + ' action is triggered in actionBegin event')
    }
    if (args.requestType === 'filtering' && args.currentFilteringColumn === 'ShipCity') {
      args.cancel = true;
      setActionBeginMessage(args.requestType + ' is not allowed for ShipCity column');
    }
  }

  const actionComplete = (args) => {
    if (args.requestType === 'filterafteropen') {
      setActionCompleteMessage('Applied CSS for filter dialog during filterafteropen action');
      args.filterModel.dlgDiv.querySelector('.e-dlg-content').style.background = '#eeeaea';
      args.filterModel.dlgDiv.querySelector('.e-footer-content').style.background = '#30b0ce';
    }
    if (args.requestType === 'filtering') {
      setActionCompleteMessage(args.requestType + ' action is triggered in actionComplete event');
    }
  }
  return (<div>
    <div className='message'>{actionBeginMessage}</div><div className='message'>{actionCompleteMessage}</div>
    <GridComponent dataSource={data} filterSettings={filterSettings} allowFiltering={true} height={273} actionBegin={actionBegin} actionComplete={actionComplete}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
        <ColumnDirective field='Freight' headerText='Freight' format='C' width='140' />
        <ColumnDirective field='ShipCity' headerText='ShipCity' width='140' textAlign="Right" />
        <ColumnDirective field='ShipName' headerText='ShipName' width='170' textAlign="Right" />
      </ColumnsDirective>
      <Inject services={[Filter]} />
    </GridComponent></div>)
};
export default App;