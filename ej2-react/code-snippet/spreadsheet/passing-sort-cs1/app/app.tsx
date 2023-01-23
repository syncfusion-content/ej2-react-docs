{% raw %}


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, SortDescriptor } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { tradeData } from './datasource';
export default class App extends React.Component<{}, {}> {
    spreadsheet: SpreadsheetComponent;
    public onDataBound(): void {
         let sortDescriptors: SortDescriptor[] = [
            {
                field: 'F',
                order: 'Ascending'
            },
            {
                field: 'E',
                order: 'Ascending'
            },
            {
                field: 'C',
                order: 'Descending'
            }];
            if (this.spreadsheet.activeSheetIndex === 0) {
                this.spreadsheet.sort({ sortDescriptors: sortDescriptors, containsHeader: true }, 'A1:H30');
            }
    }

    public onSortComplete(args): void{
         this.spreadsheet.selectRange(args.range);
        // code here.
    }
     render() {
        return  (<SpreadsheetComponent ref={(ssObj) => { this.spreadsheet = ssObj }} dataBound={this.onDataBound.bind(this)} sortComplete={this.onSortComplete.bind(this)}>
                        <SheetsDirective>
                            <SheetDirective>
                                <RangesDirective>
                                    <RangeDirective dataSource={tradeData}></RangeDirective>
                                </RangesDirective>
                                <ColumnsDirective>
                                    <ColumnDirective width={90}></ColumnDirective>
                                    <ColumnDirective width={130}></ColumnDirective>
                                    <ColumnDirective width={130}></ColumnDirective>
                                </ColumnsDirective>
                            </SheetDirective>
                        </SheetsDirective>
                    </SpreadsheetComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));


{% endraw %}