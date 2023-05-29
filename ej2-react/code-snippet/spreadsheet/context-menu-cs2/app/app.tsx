{% raw %}
import React, { useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    const spreadsheetRef = useRef<SpreadsheetComponent>(null);
    const onContextMenuBeforeOpen = (): void => {
        let spreadsheet = spreadsheetRef.current;
        // To remove existing context menu items.
        spreadsheet?.removeContextMenuItems(['Insert Column'], false);
    };

    return (<SpreadsheetComponent ref={spreadsheetRef} contextMenuBeforeOpen={onContextMenuBeforeOpen} />);
};
export default App;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
{% endraw %}