{% raw %}



import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective} from '@syncfusion/ej2-react-spreadsheet';
import { defaultData } from './datasource';

export default class App extends React.Component<{}, {}> {
    public spreadsheet: SpreadsheetComponent;
    public scrollSettings: ScrollSettingsModel = { isFinite: true };
    public onCreated(): void{
        this.spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:G1');
    }
     render() {
        return  ( <div>
             <SpreadsheetComponent
                        ref={(ssObj) => { this.spreadsheet = ssObj }} created={this.onCreated.bind(this)} scrollSettings={this.scrollSettings}>
                        <SheetsDirective>
                            <SheetDirective rowCount={9} colCount={7}>
                                <RangesDirective>
                                    <RangeDirective dataSource={defaultData}></RangeDirective>
                                </RangesDirective>
                                <ColumnsDirective>
                                    <ColumnDirective width={130}></ColumnDirective>
                                    <ColumnDirective width={92}></ColumnDirective>
                                    <ColumnDirective width={96}></ColumnDirective>
                                    <ColumnDirective width={130}></ColumnDirective>
                                    <ColumnDirective width={92}></ColumnDirective>
                                    <ColumnDirective width={96}></ColumnDirective>
                                    <ColumnDirective width={96}></ColumnDirective>
                                </ColumnsDirective>
                            </SheetDirective>
                        </SheetsDirective>
                    </SpreadsheetComponent> </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));


{% endraw %}