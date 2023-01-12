import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { defaultData, itemData } from './datasource';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
export default class App extends React.Component {
    spreadsheet;
    dataSourceChanged(args) {
        this.appendElement("Data source changed with" + "<b>&nbsp;" + args.action + "</b> action<hr>");
    }
    btnClick() {
        this.spreadsheet.sheets[0].ranges[0].dataSource = itemData;
    }
    clearBtnClick() {
        document.getElementById('EventLog').innerHTML = "";
    }
    appendElement(html) {
        var span = document.createElement("span");
        span.innerHTML = html;
        var log = document.getElementById('EventLog');
        log.insertBefore(span, log.firstChild);
    }
    render() {
        return (<div>
              <div>
                <button id="changeDataBtn" className='e-btn' onClick={this.btnClick.bind(this)}>Change Datasource</button>
              <SpreadsheetComponent ref={(ssObj) => { this.spreadsheet = ssObj; }} dataSourceChanged={this.dataSourceChanged.bind(this)}>
                <SheetsDirective>
                  <SheetDirective>
                    <RangesDirective>
                      <RangeDirective dataSource={defaultData}></RangeDirective>
                    </RangesDirective>

                    <ColumnsDirective>
                      <ColumnDirective width={180}></ColumnDirective>
                      <ColumnDirective width={130}></ColumnDirective>
                      <ColumnDirective width={130}></ColumnDirective>
                      <ColumnDirective width={180}></ColumnDirective>
                      <ColumnDirective width={130}></ColumnDirective>
                      <ColumnDirective width={120}></ColumnDirective>
                    </ColumnsDirective>
                  </SheetDirective>
                </SheetsDirective>
              </SpreadsheetComponent>
              </div>
              <div>
                <h4><b>Event Trace</b></h4>
                <div id="evt">
                  <div style={{ height: "173px", overflow: "auto", width: "250px" }}>
                    <span id="EventLog"></span>
                  </div>
                  <button id="clearBtn" className='e-btn' onClick={this.clearBtnClick.bind(this)}>Clear</button>
                </div>
              </div>
            </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
