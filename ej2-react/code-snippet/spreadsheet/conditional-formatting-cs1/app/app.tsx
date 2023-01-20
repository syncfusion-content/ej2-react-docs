


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RowsDirective, RowDirective, CellDirective, CellsDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective, ConditionalFormatsDirective, ConditionalFormatDirective} from '@syncfusion/ej2-react-spreadsheet';
import { conditionalFormatData } from './datasource';

export default class App extends React.Component<{}, {}> {
       public spreadsheet: SpreadsheetComponent;
       public oncreated(args): void{
        this.spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:N1');
        this.spreadsheet.conditionalFormat({ type:'RYGColorScale', range: 'E2:E9' });
        this.spreadsheet.conditionalFormat({ type:'ThreeArrows', range: 'H2:H9' });
         //Custom format
        this.spreadsheet.conditionalFormat({ type: 'Top10Items', value: '1',
            format: { style: { color: '#ffffff', backgroundColor: '#009999', fontWeight: 'bold'}}, range: 'F2:F9' });
        this.spreadsheet.conditionalFormat({ type: 'Bottom10Items', value: '1',
            format: { style: { color: '#ffffff', backgroundColor: '#c68d53', fontWeight: 'bold'}}, range: 'G2:G9' });
    }
     render() {
        return ( <div> <SpreadsheetComponent ref={(ssObj) => { this.spreadsheet = ssObj }} created={this.oncreated.bind(this)} showFormulaBar={false}>
                        <SheetsDirective>
                            <SheetDirective name='Car Sales Record'>
                                <RangesDirective>
                                    <RangeDirective dataSource={conditionalFormatData}></RangeDirective>
                                </RangesDirective>
                                <ConditionalFormatsDirective>
                                  <ConditionalFormatDirective type='GreaterThan' cFColor='RedFT' value='700' range='B2:B9'></ConditionalFormatDirective>
                                  <ConditionalFormatDirective type='Bottom10Items' cFColor='YellowFT' value='4' range='C2:C9'></ConditionalFormatDirective>
                                  <ConditionalFormatDirective type='BlueDataBar' range='D2:D9'></ConditionalFormatDirective>
                                </ConditionalFormatsDirective>
                                <ColumnsDirective>
                                    <ColumnDirective width={120}></ColumnDirective>
                                </ColumnsDirective>
                            </SheetDirective>
                        </SheetsDirective>
                    </SpreadsheetComponent> </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));



