{% raw %}
import React, { useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { DropDownButtonComponent, ItemModel, MenuEventArgs } from '@syncfusion/ej2-react-splitbuttons';
import { defaultData } from './datasource';

function App() {
    const spreadsheetRef = useRef<SpreadsheetComponent>(null);
    const items: ItemModel[] = [
        { text: "Save As xlsx" },
        { text: "Save As xls" },
        { text: "Save As csv" },
        { text: "Save As pdf" }
    ];
    const itemSelect = (args: MenuEventArgs): void => {
        let spreadsheet = spreadsheetRef.current;
        if (spreadsheet) {
            if (args.item.text === 'Save As xlsx')
                spreadsheet.save({ url: 'https://services.syncfusion.com/react/production/api/spreadsheet/save', fileName: "Sample", saveType: "Xlsx" });
            if (args.item.text === 'Save As xls')
                spreadsheet.save({ url: 'https://services.syncfusion.com/react/production/api/spreadsheet/save', fileName: "Sample", saveType: "Xls" });
            if (args.item.text === 'Save As csv')
                spreadsheet.save({ url: 'https://services.syncfusion.com/react/production/api/spreadsheet/save', fileName: "Sample", saveType: "Csv" });
            if (args.item.text === 'Save As pdf')
                spreadsheet.save({ url: 'https://services.syncfusion.com/react/production/api/spreadsheet/save', fileName: "Sample", saveType: "Pdf" });
        }
    };

    return (
        <div>
            <DropDownButtonComponent items={items} select={itemSelect}> Save </DropDownButtonComponent>
            <SpreadsheetComponent ref={spreadsheetRef} >
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
            </SpreadsheetComponent>
        </div>
    );
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
{% endraw %}