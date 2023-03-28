{% raw %}
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { defaultData } from './datasource';
import { getComponent } from '@syncfusion/ej2-base';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';
export default class App extends React.Component {
    spreadsheet;
    boldRight = { fontWeight: 'bold', textAlign: 'right' };
    bold = { fontWeight: 'bold' };
    items = [
        {
            text: "Save As xlsx"
        },
        {
            text: "Save As xls"
        },
        {
            text: "Save As csv"
        },
        {
            text: "Save As pdf"
        }
    ];
    itemSelect(args) {
        let spreadsheet = getComponent(document.getElementById("spreadsheet"), "spreadsheet");
        if (args.item.text === 'Save As xlsx')
            spreadsheet.save({ url: 'https://services.syncfusion.com/react/production/api/spreadsheet/save', fileName: "Sample", saveType: "Xlsx" });
        if (args.item.text === 'Save As xls')
            spreadsheet.save({ url: 'https://services.syncfusion.com/react/production/api/spreadsheet/save', fileName: "Sample", saveType: "Xls" });
        if (args.item.text === 'Save As csv')
            spreadsheet.save({ url: 'https://services.syncfusion.com/react/production/api/spreadsheet/save', fileName: "Sample", saveType: "Csv" });
        if (args.item.text === 'Save As pdf')
            spreadsheet.save({ url: 'https://services.syncfusion.com/react/production/api/spreadsheet/save', fileName: "Sample", saveType: "Pdf" });
    }
    render() {
        return (<div> <DropDownButtonComponent id="element" items={this.items} select={this.itemSelect}> Save </DropDownButtonComponent>
             <SpreadsheetComponent id="spreadsheet" ref={(ssObj) => { this.spreadsheet = ssObj; }}>
                        <SheetsDirective>
                            <SheetDirective>
                                <RangesDirective>
                                    <RangeDirective dataSource={defaultData}></RangeDirective>
                                </RangesDirective>
                                <ColumnsDirective>
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