import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';

const blocksData = [
    {
        id: 'demo-block',
        type: 'Paragraph'
    }
];

function App() {
    const handleAfterPaste = (args) => {
        displayOutput(`After Paste Event: Processed content length: ${args.content.length} characters`);
    };

    // Output helper function
    const displayOutput = (message) => {
        const outputDiv = document.getElementById('output');
        if (outputDiv) {
            outputDiv.textContent = message;
        }
    };

    React.useEffect(() => {
        displayOutput(`Paste Cleanup Settings Active:
- Keep Format: false
- Plain Text: true

Copy content from the test area above and paste it into the editor to see the cleanup in action.`);
    }, []);

    return (
        <BlockEditorComponent
            id="blockeditor"
            blocks={blocksData}
            pasteSettings={{
                keepFormat: false,
                plainText: true
            }}
            afterPaste={handleAfterPaste}
        ></BlockEditorComponent>
    );
}

export default App;

ReactDOM.render(<App />, document.getElementById('container'));