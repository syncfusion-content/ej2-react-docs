import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Sort, Toolbar, VirtualScroll, AdvancedFilter } from '@syncfusion/ej2-react-grids';
import { ticketdata } from './datasource';
function App() {
    let gridInstance;
    function load(args) {
        if (args) {
            args.enableSeamlessScrolling = true;
        }
    }
    const toolbarOptions = ['AdvancedFilter'];
    return (<div className='control-pane'>
            <div className='control-section row'>
                <GridComponent ref={(grid) => (gridInstance = grid)} dataSource={ticketdata} enableVirtualization={true} allowSorting={true} load={load.bind(this)} allowAdvancedFiltering={true} toolbar={toolbarOptions} rowHeight={45} pageSettings={{ pageSize: 50 }} height={400}>
                    <ColumnsDirective>
                        <ColumnDirective field='TicketID' headerText='Ticket ID' textAlign='Right' width='120' isPrimaryKey={true}></ColumnDirective>
                        <ColumnDirective field='Title' headerText='Title' width='260'></ColumnDirective>
                        <ColumnDirective field='TypeofRequest' headerText='Type' width='150'></ColumnDirective>
                        <ColumnDirective field='Assignee' headerText='Assignee' width='150'></ColumnDirective>
                        <ColumnDirective field='Priority' headerText='Priority' width='130'></ColumnDirective>
                        <ColumnDirective field='Status' headerText='Status' width='130'></ColumnDirective>
                        <ColumnDirective field='CreatedDate' headerText='Created Date' width='140' textAlign='Right' format='yMd'></ColumnDirective>
                        <ColumnDirective field='DueDate' headerText='Due Date' width='140' textAlign='Right' format='yMd'></ColumnDirective>
                    </ColumnsDirective>
                    <Inject services={[Sort, Toolbar, VirtualScroll, AdvancedFilter]}/>
                </GridComponent>
            </div>
        </div>);
}
export default App;