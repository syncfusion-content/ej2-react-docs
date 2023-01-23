{% raw %}


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RowsDirective, RowDirective, CellDirective, CellsDirective, getFormatFromType } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective} from '@syncfusion/ej2-react-spreadsheet';
import { CellStyleModel, getRangeIndexes } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';

export default class App extends React.Component<{}, {}> {
       public spreadsheet: SpreadsheetComponent;
       public styles: CellStyleModel  = { verticalAlign: 'middle', textAlign: 'center', fontSize: '16pt', fontWeight: 'bold',
       border: '1px solid #e0e0e0', backgroundColor: '#EEEEEE', color: '#279377' };
       public cellStyle: CellStyleModel  = { fontWeight: 'bold', fontStyle: 'italic' };
       public oncreated(): void{
        this.spreadsheet.cellFormat({ fontWeight: 'bold', fontSize: '12pt', backgroundColor: '#279377', textAlign: 'center', color: '#ffffff', borderBottom: '1px solid #e0e0e0' }, 'A2:F2');
        this.spreadsheet.cellFormat({ borderTop: '1px solid #e0e0e0', backgroundColor: '#EEEEEE' }, 'A11:F11');
        this.spreadsheet.setBorder({ border: '1px solid #e0e0e0' }, 'A2:F11', 'Outer');
        // Applied Accounting format to the cells from C3 to E10 range.
        this.spreadsheet.numberFormat('_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)', 'C3:E10');
        // Applied Percentage format to the cells from C3 to E11 range.
        this.spreadsheet.numberFormat('0%', 'F3:F10');
        // applied the custom number format for cell form D3 to D10 range
        this.spreadsheet.numberFormat('[Red][<=2000]$#,##0.00;[Blue][>2000]$#,##0.00', 'D3:D10');
        // applied the custom number format for cell from F3 to F10 range
        this.spreadsheet.numberFormat('#,##0.00_);[Red](#,##0.00)', 'F3:F10');

    };

     render() {
        return  ( <div> <SpreadsheetComponent
                        ref={(ssObj) => { this.spreadsheet = ssObj }} created={this.oncreated.bind(this)} showSheetTabs={false} showFormulaBar={false} allowInsert={false} allowDelete={false}>
                        <SheetsDirective>
                            <SheetDirective selectedRange={"U15"} showGridLines={false}>
                             <RowsDirective>
                                 <RowDirective height={35} customHeight={true}>
                                     <CellsDirective>
                                         <CellDirective value={'Sales Team Summary'} style={this.styles} colSpan={6}></CellDirective>
                                     </CellsDirective>
                                 </RowDirective>
                                 <RowDirective index={10}>
                                     <CellsDirective>
                                         <CellDirective index={1} value={'Total:'} style={this.cellStyle}></CellDirective>
                                         <CellDirective formula={'=SUM(C3:C10)'} format={getFormatFromType('Accounting')}></CellDirective>
                                         <CellDirective formula={'=SUM(D3:D10)'} format={'_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)'}></CellDirective>
                                         <CellDirective formula={'=SUM(E3:E10)'} format={'_($* #,##0.00_);_($* (#,##0.00);_($* "-"??_);_(@_)'}></CellDirective>
                                     </CellsDirective>
                                 </RowDirective>
                                     </RowsDirective>
                                <RangesDirective>
                                    <RangeDirective dataSource={data} startCell={"A2"}></RangeDirective>
                                </RangesDirective>
                                <ColumnsDirective>
                                    <ColumnDirective width={140}></ColumnDirective>
                                    <ColumnDirective width={140}></ColumnDirective>
                                    <ColumnDirective width={160}></ColumnDirective>
                                    <ColumnDirective width={160}></ColumnDirective>
                                    <ColumnDirective width={160}></ColumnDirective>
                                    <ColumnDirective width={120}></ColumnDirective>
                                </ColumnsDirective>
                            </SheetDirective>
                        </SheetsDirective>
                    </SpreadsheetComponent> </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));



{% endraw %}