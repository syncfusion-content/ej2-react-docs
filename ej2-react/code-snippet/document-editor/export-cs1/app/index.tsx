{% raw %}


import * as ReactDOM from 'react-dom/client';
import * as React from 'react';
import { DocumentEditorComponent, SfdtExport, Selection, Editor } from '@syncfusion/ej2-react-documenteditor';

//Inject require modules.
DocumentEditorComponent.Inject(SfdtExport, Selection, Editor);

    function App() {
    let  documenteditor: DocumentEditorComponent;
        return (
            <div>
                <button onClick={save}>Save</button>
                <DocumentEditorComponent id="container" height={'330px'} ref={(scope) => {documenteditor = scope; }} isReadOnly={false} enableSelection={true} enableEditor={true} enableSfdtExport={true} />
            </div>
        );
        function save(){
          //Download the document in sfdt format.
          documenteditor.save('sample', 'Sfdt');
      }
    }
export default App;
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);



{% endraw %}