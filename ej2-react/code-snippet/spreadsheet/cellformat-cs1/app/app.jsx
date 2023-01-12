import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RowsDirective, RowDirective, CellDirective, CellsDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';
export default class App extends React.Component {
    spreadsheet;
    styles = { fontFamily: 'Axettac Demo', verticalAlign: 'middle', textAlign: 'center', fontSize: '18pt', fontWeight: 'bold', color: '#279377', border: '1px solid #e0e0e0' };
    oncreated() {
        // Setting common styles to table header cells
        this.spreadsheet.cellFormat({ fontWeight: 'bold', fontSize: '12pt', backgroundColor: '#279377', color: '#ffffff' }, 'A2:E2');
        // Setting common styles to whole table cells
        this.spreadsheet.cellFormat({ verticalAlign: 'middle', fontFamily: 'Axettac Demo' }, 'A2:E12');
        // Column wise styles setting
        this.spreadsheet.cellFormat({ textAlign: 'center' }, 'A2:A12');
        // Setting text-indent to 2 and 4 column
        let style = { textAlign: 'left', textIndent: '8pt' };
        this.spreadsheet.cellFormat(style, 'B2:B12');
        this.spreadsheet.cellFormat(style, 'D2:D12');
        this.spreadsheet.cellFormat({ fontStyle: 'italic', textAlign: 'right' }, 'C3:C12');
        this.spreadsheet.cellFormat({ textAlign: 'center' }, 'E2:E12');
        // Applied border to range of cells using 'setBorder' method
        this.spreadsheet.setBorder({ borderLeft: '1px solid #e0e0e0', borderRight: '1px solid #e0e0e0' }, 'A2:E2');
        this.spreadsheet.setBorder({ border: '1px solid #e0e0e0' }, 'A4:E11', 'Horizontal');
        this.spreadsheet.setBorder({ border: '1px solid #e0e0e0' }, 'A3:E12', 'Outer');
        this.spreadsheet.cellFormat({ color: '#10c469', textDecoration: 'line-through' }, 'E3:E4');
        this.spreadsheet.cellFormat({ color: '#10c469', textDecoration: 'line-through' }, 'E9');
        this.spreadsheet.cellFormat({ color: '#10c469', textDecoration: 'line-through' }, 'E12');
        this.spreadsheet.cellFormat({ color: '#FFC107', textDecoration: 'underline' }, 'E5');
        this.spreadsheet.cellFormat({ color: '#FFC107', textDecoration: 'underline' }, 'E8');
        this.spreadsheet.cellFormat({ color: '#FFC107', textDecoration: 'underline' }, 'E11');
        this.spreadsheet.cellFormat({ color: '#62c9e8' }, 'E6');
        this.spreadsheet.cellFormat({ color: '#62c9e8' }, 'E10');
        this.spreadsheet.cellFormat({ color: '#ff5b5b' }, 'E7');
    }
    ;
    render() {
        return (<div> <SpreadsheetComponent ref={(ssObj) => { this.spreadsheet = ssObj; }} created={this.oncreated.bind(this)} showRibbon={false} showFormulaBar={false} showSheetTabs={false} allowEditing={false} allowDelete={false} allowInsert={false}>
                        <SheetsDirective>
                            <SheetDirective selectedRange={"U15"} showGridLines={false}>
                             <RowsDirective>
                                 <RowDirective height={40} customHeight={true}>
                                     <CellsDirective>
                                         <CellDirective colSpan={5} value={'Order Summary'} style={this.styles}></CellDirective>
                                     </CellsDirective>
                                 </RowDirective>
                                     </RowsDirective>
                                <RangesDirective>
                                    <RangeDirective dataSource={data} startCell={'A2'}></RangeDirective>
                                </RangesDirective>
                                <ColumnsDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={200}></ColumnDirective>
                                    <ColumnDirective width={110}></ColumnDirective>
                                    <ColumnDirective width={140}></ColumnDirective>
                                    <ColumnDirective width={90}></ColumnDirective>
                                </ColumnsDirective>
                            </SheetDirective>
                        </SheetsDirective>
                    </SpreadsheetComponent> </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
