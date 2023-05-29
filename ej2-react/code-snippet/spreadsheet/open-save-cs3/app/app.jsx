{% raw %}
import React from 'react';
import { createRoot } from 'react-dom/client';
import { SpreadsheetComponent } from '@syncfusion/ej2-react-spreadsheet';

function App() {
    const beforeOpen = (args) => {
        args.requestData = { Authorization: 'YOUR TEXT' };
    };

    return (
        <SpreadsheetComponent openUrl="https://services.syncfusion.com/react/production/api/spreadsheet/open" beforeOpen={beforeOpen} />
    );
};
export default App;

const root = createRoot(document.getElementById('root'));
root.render(<App />);
{% endraw %}