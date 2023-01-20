


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RowsDirective, RowDirective, CellDirective, CellsDirective, protectSheet, ProtectSettings } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective} from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';

export default class App extends React.Component<{}, {}> {
       public spreadsheet: SpreadsheetComponent;
       public created(): void{
        this.spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
        // deleting the rows from 8th to 10th index. To delete row, the third argument of enum type is passed as 'Row', the last argument specifies the sheet name or index in which the delete operation will perform. By default,active sheet will be considered. It is applicable only for model type Row and Column.
        this.spreadsheet.delete(8, 10, 'Row', 0); // startIndex, endIndex, Row, sheet index
        // deleting the 2nd and 5th indexed columns
        this.spreadsheet.delete(2, 2, 'Column', 'Sheet2');
        this.spreadsheet.delete(5, 5, 'Column');
        this.spreadsheet.delete(0, 0, "Sheet"); // delete the first sheet. sheet index starts from 0
        // Applies style formatting after deleted the rows and columns
        this.spreadsheet.cellFormat({ textAlign: 'center' }, 'A2:A8');
        this.spreadsheet.cellFormat({ textAlign: 'center' }, 'D2:G8');
    };
  
     render() {
        return  ( <div> <SpreadsheetComponent
                        ref={(ssObj) => { this.spreadsheet = ssObj }} created={this.created.bind(this)} showRibbon={false} showFormulaBar={false} allowDelete={true} >
                        <SheetsDirective>
                            <SheetDirective name={"Sheet1"}>
                                <RangesDirective>
                                    <RangeDirective dataSource={data}></RangeDirective>
                                </RangesDirective>
                                <ColumnsDirective>
                                <ColumnDirective width={90}></ColumnDirective>
                                    <ColumnDirective width={220}></ColumnDirective>
                                    <ColumnDirective width={90}></ColumnDirective>
                                    <ColumnDirective width={140}></ColumnDirective>
                                    <ColumnDirective width={90}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                </ColumnsDirective>
                            </SheetDirective>
                            <SheetDirective name={"Sheet2"}>
                                <RangesDirective>
                                    <RangeDirective dataSource={data}></RangeDirective>
                                </RangesDirective>
                                <ColumnsDirective>
                                <ColumnDirective width={90}></ColumnDirective>
                                    <ColumnDirective width={220}></ColumnDirective>
                                    <ColumnDirective width={90}></ColumnDirective>
                                    <ColumnDirective width={140}></ColumnDirective>
                                    <ColumnDirective width={90}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                </ColumnsDirective>
                            </SheetDirective>
                        </SheetsDirective>
                    </SpreadsheetComponent> </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));



