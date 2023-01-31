{% raw %}


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RowsDirective, RowDirective, CellDirective, CellsDirective, protectSheet, ProtectSettings, Row, RowModel, CellModel, getCellAddress } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective} from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';

export default class App extends React.Component<{}, {}> {
       public spreadsheet: SpreadsheetComponent;
       public cellsModel: CellModel[] = [{ value: 'Unit Price', style: { fontWeight: 'bold', textAlign: 'center' } }, { value: '18.00' },
       { value: '19.00' }, { value: '10.00' }, { value: '22.00' }, { value: '21.35' }, { value: '25.00' }, { value: '30.00' },
       { value: '21.00' }, { value: '40.00' }, { value: '97.00' }];
       public created(): void{
         // Applies style formatting before inserting the column
         this.spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A2:G2');
         // inserting a empty column at 0th index
         this.spreadsheet.insertColumn();
         // inserting 1 column at the 5th index with column model
         this.spreadsheet.insertColumn([{ index: 5, width: 90 }]);
         let rowIndex: number = 1;
         // Updating the 5th column data
         this.cellsModel.forEach((cell: CellModel): void => {
             this.spreadsheet.updateCell(cell, getCellAddress(rowIndex, 5)); rowIndex++;
         });
         // Applies style formatting after the columns are inserted
         this.spreadsheet.cellFormat({ textAlign: 'center' }, 'B3:B12');
         this.spreadsheet.cellFormat({ textAlign: 'center' }, 'D3:D12');
         this.spreadsheet.cellFormat({ textAlign: 'center' }, 'F3:H12');
    };
  
     render() {
        return  ( <div> <SpreadsheetComponent
                        ref={(ssObj) => { this.spreadsheet = ssObj }} created={this.created.bind(this)} showSheetTabs={false} showRibbon={false} showFormulaBar={false} >
                        <SheetsDirective>
                            <SheetDirective>
                                <RangesDirective>
                                    <RangeDirective dataSource={data} startCell={"A2"}></RangeDirective>
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




{% endraw %}