import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ListBoxComponent } from '@syncfusion/ej2-react-dropdowns';
function App() {
    let data = [
        { text: 'Account Settings', iconCss: 'e-list-icons e-list-user-settings' },
        { text: 'Address Book', iconCss: 'e-list-icons e-list-address-book' },
        { text: 'Delete', iconCss: 'e-list-icons e-list-delete' },
        { text: 'Forward', iconCss: 'e-list-icons e-list-forward' },
        { text: 'Reply', iconCss: 'e-list-icons e-list-reply' },
        { text: 'Reply All', iconCss: 'e-list-icons e-list-reply-all' },
        { text: 'Save All Attachments', iconCss: 'e-list-icons e-list-save-all-attachments' },
        { text: 'Save As', iconCss: 'e-list-icons e-list-icon-save-as' },
        { text: 'Touch/Mouse Mode', iconCss: 'e-list-icons e-list-touch' },
        { text: 'Undo', iconCss: ' e-list-icons e-list-undo' }
    ];
    let fields = { text: "text", iconCss: "iconCss" };
    return (<ListBoxComponent dataSource={data} fields={fields}/>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
