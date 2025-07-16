{% raw %}


import * as ReactDOM from 'react-dom/client';
import * as React from 'react';
import { DocumentEditorComponent, Editor, Selection } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorComponent.Inject(Editor, Selection);


function App() {
    let container: DocumentEditorComponent;
    React.useEffect(() => {
        componentDidMount()
    }, []);

    function created() {
        container.documentEditorSettings.showRuler = true;  
    }

    function componentDidMount() {
        setTimeout(() => {
            created();
        });
    }

    function onClick() {
        container.documentEditorSettings.showRuler = !container.documentEditorSettings.showRuler;
    }

    return ( <div>
        <button id='container_ruler_button' onClick={onClick}>Show/Hide Ruler</button>
        <DocumentEditorComponent id="container" height={'590px'} isReadOnly={false} ref={(scope) => {
            container = scope;
            created();
        }} enableEditor={true} enableSelection={true}
            serviceUrl="https://services.syncfusion.com/react/production/api/documenteditor/"
        />
    </div>
    );
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


{% endraw %}
