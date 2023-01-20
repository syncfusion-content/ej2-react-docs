

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
export default class App extends React.Component<{}, {}> {
    spreadsheet: SpreadsheetComponent;
    autoFillSettings: { fillType: 'FillSeries', showFillOptions: true };
    btnClick() {
        var showFillOptions = this.spreadsheet.autoFillSettings.showFillOptions;
        this.spreadsheet.autoFillSettings.showFillOptions = !showFillOptions; //To change whether fill options need to be shown or not.
    }
    public oncreated(args): void{
        this.spreadsheet.cellFormat({ backgroundColor: '#357cd2', color: '#fff', fontWeight: 'bold', textAlign: 'center' }, 'A1:H1');
        this.spreadsheet.autoFill('D4:D11','D2:D3', 'Down','CopyCells');
        this.spreadsheet.autoFill('E4:E11','E2:E3','Down','FillSeries');
        this.spreadsheet.autoFill('B4:B11','B2:B3','Down','FillFormattingOnly');
        this.spreadsheet.autoFill('C4:C11','C2:C3','Down','FillWithoutFormatting');
    }

     render() {
        return  ( <div><div>
                <button id="changeDataBtn" className='e-btn' onClick={this.btnClick.bind(this)}>Change showFillOptions</button>
        <SpreadsheetComponent id ='spreadsheet' ref={(ssObj) => { this.spreadsheet = ssObj }} created={this.oncreated.bind(this)} autoFillSettings={this.autoFillSettings}>
                        <SheetsDirective>
                            <SheetDirective>
                                <RangesDirective>
                                    <RangeDirective dataSource={data}></RangeDirective>
                                </RangesDirective>
                                <ColumnsDirective>
                                    <ColumnDirective width={130}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                </ColumnsDirective>
                            </SheetDirective>
                        </SheetsDirective>
                    </SpreadsheetComponent> </div></div>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));


