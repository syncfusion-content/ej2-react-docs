{% raw %}



import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-react-documenteditor';
DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
    let documenteditorcontainer: DocumentEditorContainerComponent;
    React.useEffect(() => {
        componentDidMount()
    }, []);
    function created() {
        // load your default document here
        let data = '{"sfdt":"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"}';
        documenteditorcontainer.documentEditor.open(data);

    }
    function componentDidMount() {
        setTimeout(() => {
            created();
        });
    }
    return (<div><h1>Syncfusion Word Processor(a.k.a)Document Editor Component</h1>
    <DocumentEditorContainerComponent height={'590px'} id="container" ref={(scope) => {
            documenteditorcontainer = scope;
            created();
        }} serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/" enableToolbar={true}/></div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'))



{% endraw %}