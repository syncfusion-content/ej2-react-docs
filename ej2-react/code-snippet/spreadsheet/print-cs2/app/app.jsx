import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective} from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { budgetData, salaryData } from './datasource';
import { DropDownButtonComponent } from '@syncfusion/ej2-react-splitbuttons';

function App() {
    const spreadsheetRef = React.useRef(null);
    const items = [
        { text: 'ActiveSheet' },
        { text: 'Workbook' }
    ];
    const handleItemSelect = (args) => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            const allowGridLines = document.getElementById('gridline');
            const allowRowColumnHeader = document.getElementById('header');
            spreadsheet.print({
                type: args.item.text,
                allowGridLines: allowGridLines.checked,
                allowRowColumnHeader: allowRowColumnHeader.checked
            });
        }
    };
    function onCreated() {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:D1');
        }
    }

    return (
        <div>
            <div id="print"><DropDownButtonComponent id="button" items={items} select={handleItemSelect}> Print </DropDownButtonComponent>
                <input type="checkbox" id="gridline" /><label htmlFor="gridline">Allow Grid Lines</label>
                <input type="checkbox" id="header" /><label htmlFor="header">Allow Row Column Header </label>
            </div>
            <SpreadsheetComponent ref={spreadsheetRef} allowOpen={true} allowSave={true} openUrl='https://services.syncfusion.com/react/production/api/spreadsheet/open' saveUrl='https://services.syncfusion.com/react/production/api/spreadsheet/save' created={onCreated.bind(this)}>
                <SheetsDirective>
                    <SheetDirective name={"Budget"}>
                        <RangesDirective>
                            <RangeDirective dataSource={budgetData}></RangeDirective>
                        </RangesDirective>
                        <ColumnsDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                        </ColumnsDirective>
                    </SheetDirective>
                    <SheetDirective name={"Salary"}>
                        <RangesDirective>
                            <RangeDirective dataSource={salaryData}></RangeDirective>
                        </RangesDirective>
                        <ColumnsDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                            <ColumnDirective width={100}></ColumnDirective>
                        </ColumnsDirective>
                    </SheetDirective>
                </SheetsDirective>
            </SpreadsheetComponent>
        </div>
    );
};
export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);