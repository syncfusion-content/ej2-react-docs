import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useRef, useEffect } from 'react';
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';
 
const blockData = [
    {
        id: 'title-block',
        type: 'Heading1',
        content: [{ type: 'Text', content: 'Document Export Demo' }]
    },
    {
        id: 'intro-paragraph',
        type: 'Paragraph',
        content: [
            {
                type: 'Text',
                content:
                    'This document demonstrates the data export capabilities of the Block Editor. You can export content as JSON or HTML formats.'
            }
        ]
    },
    {
        id: 'features-heading',
        type: 'Heading2',
        content: [{ type: 'Text', content: 'Export Features' }]
    },
    {
        id: 'features-list',
        type: 'BulletList',
        content: [{ type: 'Text', content: 'JSON export for data processing' }]
    },
    {
        id: 'features-list-2',
        type: 'BulletList',
        content: [{ type: 'Text', content: 'HTML export for web display' }]
    },
    {
        id: 'features-list-3',
        type: 'BulletList',
        content: [{ type: 'Text', content: 'Print functionality for hard copies' }]
    },
    {
        id: 'code-example',
        type: 'Code',
        content: [
            {
                type: 'Text',
                content: 'var data = editor.getDataAsJson();\nconsole.log(data);'
            }
        ]
    }
];
 
function App() {
    const editorRef = useRef(null);
    const outputRef = useRef(null);
 
    useEffect(() => {
        const getJsonAllBtn = document.getElementById('getJsonAllBtn');
        const getJsonBlockBtn = document.getElementById('getJsonBlockBtn');
        const getHtmlAllBtn = document.getElementById('getHtmlAllBtn');
        const getHtmlBlockBtn = document.getElementById('getHtmlBlockBtn');
        const printContentBtn = document.getElementById('printContentBtn');
        outputRef.current = document.getElementById('output');
 
        const handleGetJsonAll = () => {
            if (editorRef.current) {
                const jsonData = editorRef.current.getDataAsJson();
                const formattedJson = JSON.stringify(jsonData, null, 2);
                if (outputRef.current) {
                    outputRef.current.textContent = `All blocks as JSON:\n\n${formattedJson}`;
                }
            }
        };
 
        const handleGetJsonBlock = () => {
            if (editorRef.current) {
                const blockData = editorRef.current.getDataAsJson('title-block');
                const formattedJson = JSON.stringify(blockData, null, 2);
                if (outputRef.current) {
                    outputRef.current.textContent = `Block "title-block" as JSON:\n\n${formattedJson}`;
                }
            }
        };
 
        const handleGetHtmlAll = () => {
            if (editorRef.current) {
                const htmlData = editorRef.current.getDataAsHtml();
                if (outputRef.current) {
                    outputRef.current.textContent = `All blocks as HTML:\n\n${htmlData}`;
                }
            }
        };
 
        const handleGetHtmlBlock = () => {
            if (editorRef.current) {
                const blockHtml = editorRef.current.getDataAsHtml('intro-paragraph');
                if (outputRef.current) {
                    outputRef.current.textContent = `Block "intro-paragraph" as HTML:\n\n${blockHtml}`;
                }
            }
        };
 
        const handlePrintContent = () => {
            if (editorRef.current) {
                editorRef.current.print();
                if (outputRef.current) {
                    outputRef.current.textContent = 'Print dialog opened. Check for a new browser window/tab with the printable content.';
                }
            }
        };
 
        // Attach event listeners to existing buttons
        if (getJsonAllBtn) {
            getJsonAllBtn.addEventListener('click', handleGetJsonAll);
        }
        if (getJsonBlockBtn) {
            getJsonBlockBtn.addEventListener('click', handleGetJsonBlock);
        }
        if (getHtmlAllBtn) {
            getHtmlAllBtn.addEventListener('click', handleGetHtmlAll);
        }
        if (getHtmlBlockBtn) {
            getHtmlBlockBtn.addEventListener('click', handleGetHtmlBlock);
        }
        if (printContentBtn) {
            printContentBtn.addEventListener('click', handlePrintContent);
        }
 
        // Cleanup event listeners on component unmount
        return () => {
            if (getJsonAllBtn) {
                getJsonAllBtn.removeEventListener('click', handleGetJsonAll);
            }
            if (getJsonBlockBtn) {
                getJsonBlockBtn.removeEventListener('click', handleGetJsonBlock);
            }
            if (getHtmlAllBtn) {
                getHtmlAllBtn.removeEventListener('click', handleGetHtmlAll);
            }
            if (getHtmlBlockBtn) {
                getHtmlBlockBtn.removeEventListener('click', handleGetHtmlBlock);
            }
            if (printContentBtn) {
                printContentBtn.removeEventListener('click', handlePrintContent);
            }
        };
    }, []);
 
    return (
<BlockEditorComponent
            id="blockeditor"
            ref={editorRef}
            blocks={blockData}></BlockEditorComponent>
    );
}
 
export default App;
 
ReactDOM.render(<App />, document.getElementById('container'));