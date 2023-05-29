{% raw %}
import React, { useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, ScrollSettingsModel } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-spreadsheet';
import { defaultData } from './datasource';

function App() {
    const spreadsheetRef = useRef<SpreadsheetComponent>(null);
    const scrollSettings: ScrollSettingsModel = { isFinite: true };
    useEffect(() => {
        let spreadsheet = spreadsheetRef.current;
        spreadsheet?.cellFormat({ fontWeight: 'bold', textAlign: 'center', verticalAlign: 'middle' }, 'A1:G1');
    }, []);

    return (
        <div>
            <SpreadsheetComponent ref={spreadsheetRef} scrollSettings={scrollSettings}>
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
            </SpreadsheetComponent>
        </div>
    );
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
{% endraw %}