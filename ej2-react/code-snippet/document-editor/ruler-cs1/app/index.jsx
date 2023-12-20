{% raw %}
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { DocumentEditorComponent, Editor } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorComponent.Inject(Editor);
function App() {
    let container;
    React.useEffect(() => {
        componentDidMount()
    }, []);
    function created() {
        container.documentEditorSettings.showRuler = true;
        container.enableAllModules();     
    }
    function componentDidMount() {
        setTimeout(() => {
            created();
        });
    }
    function onClick() {
        container.documentEditorSettings.showRuler = !container.documentEditorSettings.showRuler;
    }
    return (<div>
        <button id='container_ruler_button' onClick={onClick}>Show/Hide Ruler</button>
        <DocumentEditorComponent id="container" height={'590px'} isReadOnly={false} ref={(scope) => {
            container = scope;
            created();
        }}
            serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
        />
    </div>
        
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('root'));
{% endraw %}