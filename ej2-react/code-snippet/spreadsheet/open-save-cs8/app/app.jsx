{% raw %}
import React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { defaultData } from './datasource';
function App() {
    const beforeSave = (args) => {
        args.pdfLayoutSettings.orientation = 'Landscape'; // You can change the orientation of the PDF document
    }

    return (<SpreadsheetComponent allowSave={true} saveUrl='https://services.syncfusion.com/react/production/api/spreadsheet/save' beforeSave={beforeSave}>
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
    </SpreadsheetComponent>);
};
export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);
{% endraw %}