{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { budgetData, salaryData } from './datasource';
export default class App extends React.Component {
    spreadsheet;
    protectSettings = { selectCells: true };
    dataBound() {
        this.spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:D1');
        this.spreadsheet.cellFormat({ fontWeight: 'bold' }, 'A11:D11');
        this.spreadsheet.protectSheet(1, { selectCells: false }, "syncfusion"); // protect sheet with password
    }
    ;
    render() {
        return (<div> <SpreadsheetComponent ref={(ssObj) => { this.spreadsheet = ssObj; }} dataBound={this.dataBound.bind(this)}>
                        <SheetsDirective>
                            <SheetDirective name={"Budget"} isProtected={true} protectSettings={this.protectSettings}>
                                <RangesDirective>
                                    <RangeDirective dataSource={budgetData}></RangeDirective>
                                </RangesDirective>
                                <ColumnsDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                </ColumnsDirective>
                            </SheetDirective>
                            <SheetDirective name={"Salary"}>
                                <RangesDirective>
                                    <RangeDirective dataSource={salaryData}></RangeDirective>
                                </RangesDirective>
                                <ColumnsDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                </ColumnsDirective>
                            </SheetDirective>
                        </SheetsDirective>
                    </SpreadsheetComponent> </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
{% endraw %}