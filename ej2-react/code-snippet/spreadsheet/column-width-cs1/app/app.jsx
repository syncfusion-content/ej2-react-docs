import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective } from '@syncfusion/ej2-react-spreadsheet';
import { defaultData } from './datasource';
export default class App extends React.Component {
    spreadsheet;
    created(args) {
        // To change width of single column
        this.spreadsheet.setColumnsWidth(100, ['F']);
        // To change width of multiple columns
        this.spreadsheet.setColumnsWidth(120, ['A:C', 'G:I', 'K:M']);
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
