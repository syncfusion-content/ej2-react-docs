{% raw %}
import * as ReactDOM from 'react-dom/client';
import * as React from 'react';
import { DocumentEditorComponent, SfdtExport, Selection, Editor, FontDialog } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorComponent.Inject(SfdtExport, Selection, Editor, FontDialog);
let documenteditor;
function App() {
    return (<div>
      <button onClick={showFontDialog}>Dialog</button>
      <DocumentEditorComponent id="container" height={'330px'} ref={(scope) => { documenteditor = scope; }} isReadOnly={false} enableSelection={true} enableEditor={true} enableSfdtExport={true} enableFontDialog={true}/>
    </div>);
    function showFontDialog() {
        //Open font dialog.
        documenteditor.showDialog('Font');
    }
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}