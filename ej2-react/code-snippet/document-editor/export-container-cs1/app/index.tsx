{% raw %}

import * as ReactDOM from 'react-dom';
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
        //Download the document in sfdt format.
        container.current.documentEditor.save('sample', 'Sfdt');
    }
    return (
        <div>
            <button onClick={save}>Save</button>
            <DocumentEditorContainerComponent id="container" height={'590px'} serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/" enableToolbar={true} ref={container}/>;
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

{% endraw %}