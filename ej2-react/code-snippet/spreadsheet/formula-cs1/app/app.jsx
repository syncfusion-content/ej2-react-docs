import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RowsDirective, RowDirective, CellDirective, CellsDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';
export default class App extends React.Component {
    spreadsheet;
    styles = { textAlign: 'center', fontWeight: 'bold', verticalAlign: 'middle', fontStyle: 'italic', fontSize: '15pt' };
    cellStyle = { fontStyle: 'italic', fontWeight: 'bold' };
    fontStyle = { fontWeight: 'bold', textAlign: 'right' };
    // Custom function to calculate percentage between two cell values.
    calculatePercentage(firstCell, secondCell) {
        return Number(firstCell) / Number(secondCell);
    }
    oncreated() {
        this.spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A2:E2');
        this.spreadsheet.numberFormat('$#,##0', 'B3:D12');
        this.spreadsheet.numberFormat('0%', 'E3:E12');
        // Adding custom function for calculating the percentage between two cells.
        this.spreadsheet.addCustomFunction(this.calculatePercentage, 'PERCENTAGE');
        // Calculate percentage using custom added formula in E12 cell.
        this.spreadsheet.updateCell({ formula: '=PERCENTAGE(C12,D12)' }, 'E12');
    }
    ;
    render() {
        return (<div> <SpreadsheetComponent ref={(ssObj) => { this.spreadsheet = ssObj; }} created={this.oncreated.bind(this)} showSheetTabs={false} showRibbon={false}>
                        <SheetsDirective>
                            <SheetDirective>
                             <RowsDirective>
                                 <RowDirective height={40} customHeight={true}>
                                     <CellsDirective>
                                         <CellDirective value={'Monthly Expense'} style={this.styles} colSpan={5}></CellDirective>
                                     </CellsDirective>
                                 </RowDirective>
                                 <RowDirective height={30}></RowDirective>
                                 <RowDirective index={11}>
                                     <CellsDirective>
                                         <CellDirective value={'Totals'} style={this.cellStyle}></CellDirective>
                                         <CellDirective formula={'=SUM(B3:B11)'}></CellDirective>
                                         <CellDirective formula={'=SUM(C3:C11)'}></CellDirective>
                                         <CellDirective formula={'=SUM(D3:D11)'}></CellDirective>
                                     </CellsDirective>
                                 </RowDirective>
                                 <RowDirective>
                                     <CellsDirective>
                                         <CellDirective index={1} value={'Number of Categories'} style={this.fontStyle} colSpan={2}></CellDirective>
                                         <CellDirective formula={'=COUNTA(A3:A11)'} index={3}></CellDirective>
                                     </CellsDirective>
                                 </RowDirective>
                                 <RowDirective>
                                     <CellsDirective>
                                         <CellDirective index={1} value={'Average Spend'} style={this.fontStyle} colSpan={2}></CellDirective>
                                         <CellDirective formula={'=AVERAGE(B3:B11)'} index={3} format={'$#,##0'}></CellDirective>
                                     </CellsDirective>
                                 </RowDirective>
                                 <RowDirective>
                                     <CellsDirective>
                                         <CellDirective index={1} value={'Min Spend'} style={this.fontStyle} colSpan={2}></CellDirective>
                                         <CellDirective formula={"=MIN(B3:B11)"} index={3} format={'$#,##0'}></CellDirective>
                                     </CellsDirective>
                                 </RowDirective>
                                 <RowDirective>
                                     <CellsDirective>
                                         <CellDirective index={1} value={'Max Spend'} style={this.fontStyle} colSpan={2}></CellDirective>
                                         <CellDirective formula={"=MAX(B3:B11)"} index={3} format={'$#,##0'}></CellDirective>
                                     </CellsDirective>
                                 </RowDirective>
                                     </RowsDirective>
                                <RangesDirective>
                                    <RangeDirective dataSource={data} startCell={"A2"}></RangeDirective>
                                </RangesDirective>
                                <ColumnsDirective>
                                    <ColumnDirective width={150}></ColumnDirective>
                                    <ColumnDirective width={120}></ColumnDirective>
                                    <ColumnDirective width={120}></ColumnDirective>
                                    <ColumnDirective width={120}></ColumnDirective>
                                    <ColumnDirective width={120}></ColumnDirective>
                                </ColumnsDirective>
                            </SheetDirective>
                        </SheetsDirective>
                    </SpreadsheetComponent> </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
