import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RowsDirective, RowDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';
export default class App extends React.Component {
    spreadsheet;
    created() {
        this.spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
        // Unhide the 2nd index hidden column
        this.spreadsheet.hideColumn(1, 1, false);
        // Unhide the 3rd index hidden row
        this.spreadsheet.hideRow(3, 3, false);
        // Hiding the 6th index column
        this.spreadsheet.hideColumn(6);
        // Hiding the 8th and 9th index row
        this.spreadsheet.hideRow(8, 9);
        this.spreadsheet.cellFormat({ textAlign: 'center' }, 'D2:H11');
    }
    ;
    render() {
        return (<div> <SpreadsheetComponent ref={(ssObj) => { this.spreadsheet = ssObj; }} created={this.created.bind(this)} showSheetTabs={false} showRibbon={false} showFormulaBar={false}>
                        <SheetsDirective>
                            <SheetDirective>
                                <RangesDirective>
                                    <RangeDirective dataSource={data}></RangeDirective>
                                </RangesDirective>
                                <RowsDirective>
                                    <RowDirective index={2} hidden={true}></RowDirective>
                                    <RowDirective hidden={true}></RowDirective>
                                </RowsDirective>
                                <ColumnsDirective>
                                    <ColumnDirective width={150}></ColumnDirective>
                                    <ColumnDirective width={100} hidden={true}></ColumnDirective>
                                    <ColumnDirective width={100} hidden={true}></ColumnDirective>
                                    <ColumnDirective width={80}></ColumnDirective>
                                    <ColumnDirective width={80}></ColumnDirective>
                                    <ColumnDirective width={80}></ColumnDirective>
                                    <ColumnDirective width={80}></ColumnDirective>
                                    <ColumnDirective width={80}></ColumnDirective>
                                </ColumnsDirective>
                            </SheetDirective>
                        </SheetsDirective>
                    </SpreadsheetComponent> </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
