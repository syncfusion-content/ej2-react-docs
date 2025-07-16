{% raw %}
import * as ReactDOM from 'react-dom/client';
import * as React from 'react';
import { DocumentEditorComponent } from '@syncfusion/ej2-react-documenteditor';
function App() {
    let documenteditor;
    React.useEffect(() => {
        componentDidMount();
    }, []);
    function componentDidMount() {
        let sfdt = `{
            "sections": [
                {
                    "blocks": [
                        {
                            "inlines": [
                                {
                                    "characterFormat": {
                                        "bold": true,
                                        "italic": true
                                    },
                                    "text": "Hello World"
                                }
                            ]
                        }
                    ],
                    "headersFooters": {
                    }
                }
            ]
        }`;
        setTimeout(() => {
            //Open the document in Document Editor.
            documenteditor.open(sfdt);
        });
    }
    return (<DocumentEditorComponent id="container" height={'330px'} ref={(scope) => { documenteditor = scope; }}/>);
}
export default App;
const root = ReactDOM.createRoot(document.getElementById('sample'));
root.render(<App />);
{% endraw %}