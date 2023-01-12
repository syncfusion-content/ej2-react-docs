import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, } from '@syncfusion/ej2-react-spreadsheet';
import { defaultData } from './datasource';
export default class App extends React.Component {
    spreadsheet;
    created(args) {
        // To change height for single row
        this.spreadsheet.setRowsHeight(40, ['2']);
        // To change height for multiple rows
        this.spreadsheet.setRowsHeight(40, ['4:8', '10:12']);
    }
    render() {
        return (<SpreadsheetComponent ref={(ssObj) => {
                this.spreadsheet = ssObj;
            }} created={this.created.bind(this)}>
        <SheetsDirective>
          <SheetDirective>
            <RangesDirective>
              <RangeDirective dataSource={defaultData}></RangeDirective>
            </RangesDirective>
          </SheetDirective>
        </SheetsDirective>
      </SpreadsheetComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
