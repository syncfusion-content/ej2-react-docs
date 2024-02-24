

import { ColumnDirective, ColumnsDirective,  EditSettingsModel, FilterSettingsModel, ToolbarItems, SearchSettingsModel, SelectionSettingsModel, GridComponent, 
 GroupSettingsModel, AggregateColumnsDirective, AggregateColumnDirective, AggregateDirective, AggregatesDirective , SortSettingsModel } from '@syncfusion/ej2-react-grids';
import {Inject, Page, PageSettingsModel, Sort, ColumnChooser, Toolbar, Edit, RowDD, Reorder, Filter, Group, Aggregate } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';

function App() {
    const pageSettings: PageSettingsModel = { pageCount: 2, pageSizes: true };
    const sortSettings: SortSettingsModel = { columns: [{ field: 'OrderID', direction: 'Ascending' }, { field: 'ShipCity', direction: 'Descending' }] };
    const filterSettings: FilterSettingsModel = { type:"Excel"};
    const editSettings: EditSettingsModel = { allowEditing: true, allowAdding: true, allowDeleting: true };
    const groupSettings: GroupSettingsModel = { columns: ['CustomerID'] };
    const selectionSettings: SelectionSettingsModel = {type: 'Multiple', mode: 'Both'};
    const toolbar: ToolbarItems[] = ['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search', 'ColumnChooser'];
    const searchSettings: SearchSettingsModel = { fields: ['ShipCountry'], operator: 'contains', key: 'a', ignoreCase: true };
    
    
    const footerTemplate = (props) => {
        return (<span>Sum: {props.Sum}</span>)
      }
    const groupFooterTemplate = (props) => {
        return (<span>Sum: {props.Sum}</span>)
      }
      const groupCaptionTemplate = (props) => {
        return (<span>Max: {props.Max}</span>)
      }
    
    return <GridComponent dataSource={data} allowPaging={true} pageSettings={ pageSettings } toolbar={toolbar} searchSettings={searchSettings} showColumnChooser={true}
            allowFiltering={true} filterSettings = {filterSettings} allowGrouping={true} groupSettings={ groupSettings } editSettings={editSettings}
            allowSorting={true} sortSettings={ sortSettings } allowRowDragAndDrop={true} selectionSettings={selectionSettings} selectedRowIndex={6}>
            <ColumnsDirective>
                <ColumnDirective type="checkbox" width='50' />
                <ColumnDirective field='OrderID' width='100' isPrimaryKey={true} textAlign="Right"/>
                <ColumnDirective field='CustomerID' width='100'/>
                <ColumnDirective field='OrderDate' headerText='Order Date' textAlign='Right' format='yMd' width='120' />
                <ColumnDirective field='Freight' headerText='Freight($)' textAlign='Right' format='C2' width='90'/>                  
                <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='140'/>
                <ColumnDirective field='ShipName' headerText='Shipped Name' textAlign='Right' width='140'/>  
            </ColumnsDirective>
            <AggregatesDirective>
                <AggregateDirective>
                    <AggregateColumnsDirective>
                        <AggregateColumnDirective field='Freight' type='Sum' format='C2' footerTemplate={footerTemplate} />
                    </AggregateColumnsDirective>
                </AggregateDirective>
                <AggregateDirective>
                    <AggregateColumnsDirective>
                        <AggregateColumnDirective field='Freight' type='Sum' format='C2' groupFooterTemplate={groupFooterTemplate} />
                    </AggregateColumnsDirective>
                </AggregateDirective>
                <AggregateDirective>
                    <AggregateColumnsDirective>
                        <AggregateColumnDirective field='Freight' type='Max' format='C2' groupCaptionTemplate={groupCaptionTemplate} />
                    </AggregateColumnsDirective>
                </AggregateDirective>
            </AggregatesDirective>
        <Inject services={[Page, Sort, Filter, Group, ColumnChooser, Toolbar, Edit, RowDD, Reorder, Aggregate]} />
    </GridComponent>
};
export default App;



