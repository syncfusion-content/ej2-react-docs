{% raw %}



import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, SortDescriptor } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { budgetData, defaultData } from './datasource';
export default class App extends React.Component<{}, {}> {
    spreadsheet: SpreadsheetComponent;
    public onDataBound(): void {
        this.spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:D1');
        this.spreadsheet.cellFormat({ fontWeight: 'bold'}, 'A11:D11');
    }
     render() {
        return  (<SpreadsheetComponent allowFindAndReplace={false} ref={(ssObj) => { this.spreadsheet = ssObj }} dataBound={this.onDataBound.bind(this)}>
                        <SheetsDirective>
                        <SheetDirective name='Price Details'>
                                <RangesDirective>
                                    <RangeDirective dataSource={defaultData}></RangeDirective>
                                </RangesDirective>
                                <ColumnsDirective>
                                    <ColumnDirective width={130}></ColumnDirective>
                                    <ColumnDirective width={92}></ColumnDirective>
                                    <ColumnDirective width={96}></ColumnDirective>
                                </ColumnsDirective>
                            </SheetDirective>
                            <SheetDirective  name='Budget'>
                                <RangesDirective>
                                    <RangeDirective dataSource={budgetData}></RangeDirective>
                                </RangesDirective>
                                <ColumnsDirective>
                                    <ColumnDirective width={130}></ColumnDirective>
                                    <ColumnDirective width={92}></ColumnDirective>
                                    <ColumnDirective width={96}></ColumnDirective>
                                </ColumnsDirective>
                            </SheetDirective>
                        </SheetsDirective>
                    </SpreadsheetComponent>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));



{% endraw %}