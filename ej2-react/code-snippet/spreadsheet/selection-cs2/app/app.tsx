{% raw %}



import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, getRangeAddress } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective} from '@syncfusion/ej2-react-spreadsheet';
import { budgetData } from './datasource';

export default class App extends React.Component<{}, {}> {
    public spreadsheet: SpreadsheetComponent;
    public onCreated(): void{
        this.spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:D1');
        let rowCount: number = this.spreadsheet.getActiveSheet().rowCount;
        this.spreadsheet.selectRange(getRangeAddress([0, 2, rowCount, 2]));
    }
     render() {
        return  ( <div>
             <SpreadsheetComponent
                        ref={(ssObj) => { this.spreadsheet = ssObj }} created={this.onCreated.bind(this)} selectionSettings={{mode:'Multiple'}}>
                        <SheetsDirective>
                            <SheetDirective>
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
                    </SpreadsheetComponent> </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));


{% endraw %}