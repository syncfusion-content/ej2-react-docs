{% raw %}
import * as ReactDOM from 'react-dom';
import { DocumentEditorComponent, DocumentEditor, Print, Editor, Selection, EditorHistory, SfdtExport } from '@syncfusion/ej2-react-documenteditor';
DocumentEditor.Inject(Print, Editor, Selection, SfdtExport, EditorHistory);
let documenteditor = new DocumentEditorComponent(undefined);
function App() {
    function onPrint() {
        //Print the document content.
        documenteditor.print();
    }
    return (<div>
      <button onClick={onPrint.bind(this)}>Print</button>
      <DocumentEditorComponent id="container" height={'330px'} ref={scope => {
            documenteditor = scope;
        }} enablePrint={true} isReadOnly={false} enableSelection={true} enableSfdtExport={true} enableEditor={true} enableEditorHistory={true}/>
    </div>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
{% endraw %}