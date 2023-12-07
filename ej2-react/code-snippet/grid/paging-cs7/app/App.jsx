import { ColumnDirective, ColumnsDirective, Grid, GridComponent, Inject, Page, PageEventArgs, PageSettingsModel } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    const pageSettings = { pageSize: 5 };
    const [currentMessage, setCurrentMessage] = React.useState('');
    const [nextMessage, setNextMessage] = React.useState('');
    const actionBegin = (args) => {
        if (args.requestType === 'paging') {
            const pageMessage = (args.currentPage) > (args.previousPage)
                ? `You are going to switch to page ${parseInt((args.currentPage), 10) + 1}`
                : `You are going to switch to page ${args.previousPage}`;
            setNextMessage(pageMessage);
        }
    }
    const actionComplete = (args) => {
        if (args.requestType === 'paging') {
            setCurrentMessage('Now you are in page ' + args.currentPage);
        }
    }
    return (<div>
        <p id='message1' className='message'>{currentMessage}</p>
        <p id='message2' className='message'>{nextMessage}</p>
        <GridComponent dataSource={data} allowPaging={true} pageSettings={pageSettings} actionBegin={actionBegin} actionComplete={actionComplete}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right" isPrimaryKey={true} />
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='140' />
                <ColumnDirective field='Freight' headerText='Freight' width='120' format="C" textAlign="Right" />
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150' />
                <ColumnDirective field='ShipCity' headerText='Ship City' width='150' />
                <ColumnDirective field='Verified' headerText='Verified' width='150' displayAsCheckBox={true} />
            </ColumnsDirective>
            <Inject services={[Page]} />
        </GridComponent></div>)
};
export default App;

