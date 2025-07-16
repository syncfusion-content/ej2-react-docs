{% raw %}


import * as ReactDOM from 'react-dom/client';
import * as React from 'react';
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
    let documenteditorcontainer: DocumentEditorContainerComponent;
    React.useEffect(() => {
        componentDidMount()
    }, []);
    function onClick() {
        documenteditorcontainer.documentEditorSettings.showRuler = !documenteditorcontainer.documentEditorSettings.showRuler;
    }
    function componentDidMount() {
        setTimeout(() => {
            created();
        });
    }
    function created() {
        documenteditorcontainer.documentEditorSettings.showRuler = true;
    }
    return (
        <div>
            <button id='container_ruler_button' onClick={onClick}>Show/Hide Ruler</button>
            <DocumentEditorContainerComponent height={'590px'} id="container" ref={(scope) => {
                documenteditorcontainer = scope;
                created();
            }}
            serviceUrl="https://services.syncfusion.com/react/production/api/documenteditor/" enableToolbar={true} />
        </div>

        
        )
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

{% endraw %}