import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useRef, useState, useEffect } from 'react';
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';
 
const blocksData = [
    {
        id: 'sample-heading',
        type: 'Heading1',
        content: [
            {
                type: 'Text',
                content: 'Formatting Demo'
            }
        ]
    },
    {
        id: 'sample-paragraph-1',
        type: 'Paragraph',
        content: [
            {
                type: 'Text',
                content: 'Select this text and apply different formatting options using the buttons below. You can make text bold or change colors for the text.'
            }
        ]
    },
    {
        id: 'sample-list',
        type: 'BulletList',
        content: [
            {
                type: 'Text',
                content: 'List item for formatting demonstration'
            }
        ]
    }
];
 
function App() {
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
<BlockEditorComponent
            id="blockeditor"
            ref={blockEditorRef}
            blocks={blocksData}
        ></BlockEditorComponent>
    );
}
 
export default App;
 
ReactDOM.render(<App />, document.getElementById('container'));