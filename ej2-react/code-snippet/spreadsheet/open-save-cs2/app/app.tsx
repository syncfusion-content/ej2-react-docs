import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    const spreadsheetRef = React.useRef<SpreadsheetComponent>(null);
    React.useEffect(() => {
        const fetchData = async (): Promise<void> => {
            const response: Response = await fetch('https://cdn.syncfusion.com/scripts/spreadsheet/Sample.xlsx'); // fetch the remote url
            const fileBlob: Blob = await response.blob(); // convert the excel file to blob
            const file: File = new File([fileBlob], 'Sample.xlsx'); //convert the blob into file
            let spreadsheet = spreadsheetRef.current;
            if (spreadsheet) {
                spreadsheet.open({ file }); // open the file into Spreadsheet
            }
        };
        fetchData();
    }, []);

    return (
        <SpreadsheetComponent ref={spreadsheetRef} openUrl='https://services.syncfusion.com/react/production/api/spreadsheet/open' />
    );
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);