{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
import { getComponent } from '@syncfusion/ej2-base';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
export default class App extends React.Component {
    spreadsheet;
    items = [
        {
            text: "Clear All"
        },
        {
            text: "Clear Formats"
        },
        {
            text: "Clear Contents"
        },
        {
            text: "Clear Hyperlinks"
        }
    ];
    oncreated(args) {
        this.spreadsheet.cellFormat({ fontWeight: 'bold', fontSize: '12pt' }, 'A1:E1');
        this.spreadsheet.cellFormat({ color: '#10c469' }, 'B1:B10');
    }
    itemSelect(args) {
        let spreadsheet = getComponent(document.getElementById("spreadsheet"), "spreadsheet");
        if (args.item.text === 'Clear All')
            spreadsheet.clear({ type: 'Clear All', range: 'D1:D10' }); // Clear the content, formats and hyperlinks applied in the provided range.
        if (args.item.text === 'Clear Formats')
            spreadsheet.clear({ type: 'Clear Formats', range: 'B1:B10' }); // Clear the formats applied in the provided range
        if (args.item.text === 'Clear Contents')
            spreadsheet.clear({ type: 'Clear Contents', range: 'A1:A10' }); // Clear the content in the provided range
        if (args.item.text === 'Clear Hyperlinks')
            spreadsheet.clear({ type: 'Clear Hyperlinks', range: 'F2:F6' }); // Clear the hyperlinks applied in the provided range
    }
    render() {
        return (<div><DropDownButtonComponent id="element" items={this.items} select={this.itemSelect}> Clear </DropDownButtonComponent>
        <SpreadsheetComponent id='spreadsheet' ref={(ssObj) => { this.spreadsheet = ssObj; }} created={this.oncreated.bind(this)}>
                        <SheetsDirective>
                            <SheetDirective>
                                <RangesDirective>
                                    <RangeDirective dataSource={data}></RangeDirective>
                                </RangesDirective>
                                <ColumnsDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={110}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={180}></ColumnDirective>
                                    <ColumnDirective width={130}></ColumnDirective>
                                    <ColumnDirective width={130}></ColumnDirective>
                                </ColumnsDirective>
                            </SheetDirective>
                        </SheetsDirective>
                    </SpreadsheetComponent> </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));
{% endraw %}