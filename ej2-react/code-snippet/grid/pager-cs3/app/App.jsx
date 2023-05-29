import { NumericTextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const change = (args) => {
        grid.pageSettings.currentPage = args.value;
    };
    const template = (pagerData) => {
        return (<div className="e-pagertemplate">
        <div className="col-lg-12 control-section">
            <div className="content-wrapper">
            <NumericTextBoxComponent min={1} max={3} value={pagerData.currentPage} format='###.##' change={change}></NumericTextBoxComponent>
          </div>
        </div>
        <div id="totalPages" className="e-pagertemplatemessage" style={{ marginTop: 8, marginLeft: 30, border: "none", display: "inline-block" }}>
          <span className="e-pagenomsg">
            {pagerData.currentPage} of {pagerData.totalPages} pages ({pagerData.totalRecordsCount} items)
          </span>
        </div>
      </div>);
    };
    return (<GridComponent dataSource={data} allowPaging={true} pageSettings={{ template: template, pageSize: 5 }} ref={g => grid = g}>
              <ColumnsDirective>
                <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign="Right"/>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='100'/>
                <ColumnDirective field='ShipCity' headerText='Ship City' width='100'/>
            </ColumnsDirective>
            <Inject services={[Page]}/>
        </GridComponent>);
}
;
export default App;
