{% raw %}
import * as ReactDOM from 'react-dom/client';
import * as React from 'react';
import {  DocumentEditorComponent, Print, Editor, Selection, EditorHistory, SfdtExport
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorComponent.Inject(Print, Editor, Selection, SfdtExport, EditorHistory);
let documenteditor: DocumentEditorComponent;
function App() {
  return (
    <div>
      <button onClick={onPrint}>Print</button>
      <DocumentEditorComponent id="container" height={'330px'} ref={(scope) => { documenteditor = scope; }} enablePrint={true} isReadOnly={false} enableSelection={true} enableSfdtExport={true} enableEditor={true} enableEditorHistory={true}
      />
    </div>
  );
  function onPrint() {
    //Print the document content.
    documenteditor.print();
  }
}
export default App
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}