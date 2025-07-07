{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useRef, useEffect } from 'react';
import { BlockEditorComponent, BlockModel, ContentType } from '@syncfusion/ej2-react-blockeditor';
 
function App() {
    const blockData: BlockModel[] = [
    {
        id: 'title-block',
        type: 'Heading1',
        content: [{ type: ContentType.Text, content: 'Document Export Demo' }]
    },
    {
        id: 'intro-paragraph',
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content:
                    'This document demonstrates the data export capabilities of the Block Editor. You can export content as JSON or HTML formats.'
            }
        ]
    },
    {
        id: 'features-heading',
        type: 'Heading2',
        content: [{ type: ContentType.Text, content: 'Export Features' }]
    },
    {
        id: 'features-list',
        type: 'BulletList',
        content: [{ type: ContentType.Text, content: 'JSON export for data processing' }]
    },
    {
        id: 'features-list-2',
        type: 'BulletList',
        content: [{ type: ContentType.Text, content: 'HTML export for web display' }]
    },
    {
        id: 'features-list-3',
        type: 'BulletList',
        content: [{ type: ContentType.Text, content: 'Print functionality for hard copies' }]
    },
    {
        id: 'code-example',
        type: 'Code',
        content: [
            {
                type: ContentType.Text,
                content: 'var data = editor.getDataAsJson();\nconsole.log(data);'
            }
        ]
    }
];
    const editorRef = useRef<BlockEditorComponent | null>(null);
    const outputRef = useRef<HTMLDivElement | null>(null);
 
    useEffect(() => {
        const getJsonAllBtn = document.getElementById('getJsonAllBtn') as HTMLElement | null;
        const getJsonBlockBtn = document.getElementById('getJsonBlockBtn') as HTMLElement | null;
        const getHtmlAllBtn = document.getElementById('getHtmlAllBtn') as HTMLElement | null;
        const getHtmlBlockBtn = document.getElementById('getHtmlBlockBtn') as HTMLElement | null;
        const printContentBtn = document.getElementById('printContentBtn') as HTMLElement | null;
        outputRef.current = document.getElementById('output') as HTMLDivElement | null;
 
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
        <div>
        <div id="controls">
            <h3>Data Export Methods</h3>
            <div class="button-group">
                <button id="getJsonAllBtn">Get All Data as JSON</button>
                <button id="getJsonBlockBtn">Get Block Data as JSON</button>
                <button id="getHtmlAllBtn">Get All Data as HTML</button>
                <button id="getHtmlBlockBtn">Get Block Data as HTML</button>
                <button id="printContentBtn">Print Editor Content</button>
            </div>
            <div id="output"></div>
        </div>
<BlockEditorComponent
            id="blockeditor"
            ref={editorRef}
            blocks={blockData}></BlockEditorComponent>
            </div>
    );
}
 
export default App;
ReactDOM.render(<App />, document.getElementById('container'));

{% raw %}