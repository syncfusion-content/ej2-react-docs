import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useRef, useState, useEffect } from 'react';
import { BlockEditorComponent, ContentType } from '@syncfusion/ej2-react-blockeditor';
 
function App() {
    const blocksData = [
    {
        blockType: 'Heading',
        properties: { level: 1 },
        content: [
            {
                contentType: ContentType.Text,
                content: 'Formatting Demo'
            }
        ]
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ContentType.Text,
                content: 'Select this text and apply different formatting options using the buttons below. You can make text bold or change colors for the text.'
            }
        ]
    },
    {
        blockType: 'BulletList',
        content: [
            {
                contentType: ContentType.Text,
                content: 'List item for formatting demonstration'
            }
        ]
    }
];
    const blockEditorRef = useRef(null);
    const [outputMessage, setOutputMessage] = useState('');
 
    useEffect(() => {
        const applyBoldBtn = document.getElementById('applyBoldBtn');
        const applyColorBtn = document.getElementById('applyColorBtn');
        const enableToolbarBtn = document.getElementById('enableToolbarBtn');
        const disableToolbarBtn = document.getElementById('disableToolbarBtn');
        const outputDiv = document.getElementById('output');
 
        const handleApplyBold = () => {
            if (blockEditorRef.current) {
                blockEditorRef.current.executeToolbarAction('Bold');
                setOutputMessage('Bold formatting applied to selected text');
            }
        };
 
        const handleApplyColor = () => {
            if (blockEditorRef.current) {
                blockEditorRef.current.executeToolbarAction('Color', '#ff6b35');
                setOutputMessage('Orange color (#ff6b35) applied to selected text');
            }
        };
 
        const handleEnableToolbar = () => {
            if (blockEditorRef.current) {
                blockEditorRef.current.enableToolbarItems(['bold', 'italic', 'underline']);
                setOutputMessage('Toolbar items (bold, italic, underline) have been enabled');
            }
        };
 
        const handleDisableToolbar = () => {
            if (blockEditorRef.current) {
                blockEditorRef.current.disableToolbarItems(['bold', 'italic']);
                setOutputMessage('Toolbar items (bold, italic) have been disabled');
            }
        };
 
        // Attach event listeners to existing buttons
        if (applyBoldBtn) {
            applyBoldBtn.addEventListener('click', handleApplyBold);
        }
        if (applyColorBtn) {
            applyColorBtn.addEventListener('click', handleApplyColor);
        }
        if (enableToolbarBtn) {
            enableToolbarBtn.addEventListener('click', handleEnableToolbar);
        }
        if (disableToolbarBtn) {
            disableToolbarBtn.addEventListener('click', handleDisableToolbar);
        }
 
        // Update output div when outputMessage changes
        if (outputDiv) {
            outputDiv.textContent = outputMessage;
        }
 
        // Cleanup event listeners on component unmount
        return () => {
            if (applyBoldBtn) {
                applyBoldBtn.removeEventListener('click', handleApplyBold);
            }
            if (applyColorBtn) {
                applyColorBtn.removeEventListener('click', handleApplyColor);
            }
            if (enableToolbarBtn) {
                enableToolbarBtn.removeEventListener('click', handleEnableToolbar);
            }
            if (disableToolbarBtn) {
                disableToolbarBtn.removeEventListener('click', handleDisableToolbar);
            }
        };
    }, [outputMessage]);
 
    return (
<div>
            <div id="controls">
            <h3>Formatting Methods</h3>
            <div className="button-group">
                <button id="applyBoldBtn">Apply Bold </button>
                <button id="applyColorBtn">Apply Color</button>
                <button id="enableToolbarBtn">Enable Toolbar Items</button>
                <button id="disableToolbarBtn">Disable Toolbar Items</button>
            </div>
            <div className="instruction">
                <p><strong>Instructions:</strong> Select some text in the editor first, then click the formatting buttons to see the effects.</p>
            </div>
            <div id="output"></div>
        </div>
        
        <BlockEditorComponent
            id="blockeditor"
            ref={blockEditorRef}
            blocks={blocksData}></BlockEditorComponent>
            </div>
    );
}
 
export default App;
 
ReactDOM.render(<App />, document.getElementById('container'));