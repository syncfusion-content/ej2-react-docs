

import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { useRef } from 'react';
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);

function App() {
    var container = useRef(null);
    function save() {
        //Download the document in Docx format.
        container.current.documentEditor.save('sample', 'Docx');
    }
    return (<div>
                <button onClick={save}>Save</button>
                <DocumentEditorContainerComponent id="container" height={'590px'} serviceUrl="https://services.syncfusion.com/react/production/api/documenteditor/" enableToolbar={true} ref={container} />
            </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

