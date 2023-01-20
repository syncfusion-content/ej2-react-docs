


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';
export default class App extends React.Component<{}, {}> {
    spreadsheet: SpreadsheetComponent;
    public created(): void {
        this.spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
        this.spreadsheet.cellFormat({ textAlign: 'center' }, 'D2:H11');
        // The gridlines have been removed to set border for the range of cells
        this.spreadsheet.setBorder({ border: '1px solid #e0e0e0' }, 'A1:H11');
    }
     render() {
        return  (<SpreadsheetComponent ref={(ssObj) => { this.spreadsheet = ssObj }} created={this.created.bind(this)} showFormulaBar={false}>
                        <SheetsDirective>
                        <SheetDirective name='Price Details' showGridLines={false} showHeaders={false}>
                                <RangesDirective>
                                    <RangeDirective dataSource={data}></RangeDirective>
                                </RangesDirective>
                                <ColumnsDirective>
                                    <ColumnDirective width={150}></ColumnDirective>
                                    <ColumnDirective width={110}></ColumnDirective>
                                    <ColumnDirective width={110}></ColumnDirective>
                                    <ColumnDirective width={85}></ColumnDirective>
                                    <ColumnDirective width={85}></ColumnDirective>
                                    <ColumnDirective width={85}></ColumnDirective>
                                    <ColumnDirective width={85}></ColumnDirective>
                                    <ColumnDirective width={85}></ColumnDirective>
                                </ColumnsDirective>
                            </SheetDirective>
                        </SheetsDirective>
                    </SpreadsheetComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));



