

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Page, PageSettingsModel, Filter,
Toolbar, ToolbarItems, PdfExport } from '@syncfusion/ej2-react-grids';
import { DataManager, Query } from '@syncfusion/ej2-data';
import { data } from '../datasource.ts';
import { ClickEventArgs } from '@syncfusion/ej2-react-navigations';
class App extends React.Component<{}, {}>{
    public grid: GridComponent;
    public pageOptions: PageSettingsModel = {pageSize:5, pageCount:5};
    public toolbar: ToolbarItems[] = ['PdfExport'];
    toolbarClick = (args: ClickEventArgs) => {
      if (args.item.id === 'grid_pdfexport') {
        let pdfdata: Object[];
        let query = this.grid.renderModule.data.generateQuery(); // get grid corresponding query
        for(var i=0; i<query.queries.length; i++ ){
            if(query.queries[i].fn=='onPage'){
             query.queries.splice(i,1);     // remove page query to get all records
             break;
            }
        }
        let fdata: Object[] = new DataManager({ json: data}).executeQuery(query).then((e: any) => {
          pdfdata = e.result;   // get all filtered records
          let exportProperties = {
            dataSource: pdfdata,
          };
          this.grid.pdfExport(exportProperties);
        }).catch((e) => true);
      }
    }
    render() {
        return <GridComponent id='grid' dataSource={data} allowPaging={true}
        allowFiltering={true} allowPdfExport={true} toolbar={this.toolbar}
        pageSettings={this.pageOptions} toolbarClick={this.toolbarClick.bind(this)}
        ref={g => this.grid = g}>
            <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" isPrimaryKey={true}></ColumnDirective>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='120'></ColumnDirective>
                <ColumnDirective field='Freight' headerText='Freight' width='120' format="C2" textAlign="Right"></ColumnDirective>
                <ColumnDirective field='ShipCountry' headerText='Ship Country' width='150'></ColumnDirective>
            </ColumnsDirective>
            <Inject services={[Page, Filter,Toolbar, PdfExport]} />
        </GridComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('grid'));



