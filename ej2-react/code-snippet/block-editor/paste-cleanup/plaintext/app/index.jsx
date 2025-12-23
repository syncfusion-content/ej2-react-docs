import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';

function App() {
  
const blocksData = [
    {
        blockType: 'Paragraph'
    }
];
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
              <div id="controls">
      <h4>Test Content to Copy and Paste:</h4>
      <div className="test-content">
        <div id="sampleContent" contentEditable={true}>
          <h2 style={{ color: 'red', fontWeight: 'bold', fontSize: '24px' }}>
            Formatted Heading
          </h2>
          <p style={{ backgroundColor: 'yellow', fontStyle: 'italic' }}>
            This is a <span style={{ fontWeight: 'bold' }}>bold paragraph</span> with{' '}
            <span style={{ color: 'blue', fontStyle: 'italic' }}>italic text</span> and{' '}
            <span style={{ textDecoration: 'underline' }}>underlined content</span>.
          </p>
          <div style={{ border: '1px solid black', padding: '10px' }}>
            <span style={{ fontWeight: '600' }}>Heavy text</span> and{' '}
            <span style={{ color: 'green', fontSize: '18px' }}>colored text</span>
          </div>
        </div>
      </div>
        <BlockEditorComponent
            id="blockeditor"
            blocks={blocksData}
            pasteCleanupSettings={{
                keepFormat: false,
                plainText: true
            }}
            afterPasteCleanup={handleAfterPaste}
        ></BlockEditorComponent>
         <div id="output"></div>
    </div>
    );
}

export default App;
ReactDOM.render(<App />, document.getElementById('container'));