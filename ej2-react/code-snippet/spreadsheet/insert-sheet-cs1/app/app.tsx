


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, SortDescriptor, SheetModel } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';
export default class App extends React.Component<{}, {}> {
    spreadsheet: SpreadsheetComponent;
    public insSheetModel: SheetModel[] = [{
        index: 1,
        name: 'Inserted Sheet',
        ranges: [{ dataSource: data }],
        columns: [{ width: 150 }, { width: 110 }, { width: 110 }, { width: 85 }, { width: 85 }, { width: 85 }, { width: 85 },
            { width: 85 }]
    }]
    public created(): void {
       // Applies style formatting to the active sheet before inserting a new sheet
       this.spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
       this.spreadsheet.cellFormat({ textAlign: 'center' }, 'D2:H11');
       // inserting a new sheet with data at 1st index
       // You can also insert empty sheets by specifying the start and end sheet index instead of sheet model
       this.spreadsheet.insertSheet(this.insSheetModel);
       // Applies style formatting for the inserted sheet
       this.spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'Inserted Sheet!A1:H1');
       this.spreadsheet.cellFormat({ textAlign: 'center' }, 'Inserted Sheet!D2:H11');
    }
     render() {
        return  (<SpreadsheetComponent showRibbon={false} ref={(ssObj) => { this.spreadsheet = ssObj }} created={this.created.bind(this)} showformulaBar={"false"}>
                        <SheetsDirective>
                        <SheetDirective name='Price Details'>
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



