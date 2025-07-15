{% raw %}

import * as ReactDOM from 'react-dom/client';
import * as React from 'react';
import { useRef } from 'react';
import {
    DocumentEditorContainerComponent, Toolbar
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);

function App() {
    // Creating a reference to the DocumentEditorContainerComponent using useRef hook
    let container = useRef<DocumentEditorContainerComponent>(null); 
    function save(){
        //Download the document in Docx format.
        container.current.documentEditor.save('sample', 'Docx');
    }
    return (
        <div>
            <button onClick={save}>Save</button>
            <DocumentEditorContainerComponent id="container" height={'590px'} serviceUrl="https://services.syncfusion.com/react/production/api/documenteditor/" enableToolbar={true} ref={container}/>;
        </div>
    );
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);

{% endraw %}