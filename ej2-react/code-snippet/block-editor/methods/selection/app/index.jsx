{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useRef, useEffect } from 'react';
import { BlockEditorComponent, ContentType } from '@syncfusion/ej2-react-blockeditor';
 
function App() {
    const blockData = [
    {
        id: 'heading-block',
        blockType: 'Heading',
        properties: { level: 1 },
        content: [
            {
                contentType: ContentType.Text,
                content: 'Welcome to Block Editor'
            }
        ]
    },
    {
        id: 'paragraph-1',
        blockType: 'Paragraph',
        content: [
            {
                id: 'paragraph1-content',
                contentType: ContentType.Text,
                content: 'This is the first paragraph with some sample text content for selection demonstration.'
            }
        ]
    },
    {
        id: 'paragraph-2',
        blockType: 'Paragraph',
        content: [
            {
                contentType: ContentType.Text,
                content: 'This is the second paragraph that can be used for various selection operations.'
            }
        ]
    },
    {
        id: 'list-block',
        blockType: 'BulletList',
        content: [
            {
                contentType: ContentType.Text,
                content: 'First list item'
            }
        ]
    }
];
 
    const editorRef = useRef(null);
    const outputRef = useRef(null);
 
    useEffect(() => {
        const setSelectionBtn = document.getElementById('setSelectionBtn');
        const setCursorBtn = document.getElementById('setCursorBtn');
        const getSelectedBlocksBtn = document.getElementById('getSelectedBlocksBtn');
        const getRangeBtn = document.getElementById('getRangeBtn');
        const selectRangeBtn = document.getElementById('selectRangeBtn');
        const selectBlockBtn = document.getElementById('selectBlockBtn');
        const selectAllBtn = document.getElementById('selectAllBtn');
        outputRef.current = document.getElementById('output');
 
        const handleSetSelection = () => {
            if (editorRef.current) {
                editorRef.current.setSelection('paragraph1-content', 5, 15);
                if (outputRef.current) {
                    outputRef.current.textContent = 'Text selection set in "paragraph-1" block from position 5 to 15';
                }
            }
        };
 
        const handleSetCursor = () => {
            if (editorRef.current) {
                editorRef.current.setCursorPosition('heading-block', 10);
                if (outputRef.current) {
                    outputRef.current.textContent = 'Cursor position set at position 10 in "heading-block"';
                }
            }
        };
 
        const handleGetSelectedBlocks = () => {
            if (editorRef.current) {
                const selectedBlocks = editorRef.current.getSelectedBlocks();
                if (outputRef.current) {
                    if (selectedBlocks && selectedBlocks.length > 0) {
                        const blockInfo = selectedBlocks.map(block => `ID: ${block.id}, Type: ${block.blockType}`).join('\n');
                        outputRef.current.textContent = `Selected blocks (${selectedBlocks.length}):\n${blockInfo}`;
                    } else {
                        outputRef.current.textContent = 'No blocks are currently selected';
                    }
                }
            }
        };
 
        const handleGetRange = () => {
            if (editorRef.current) {
                const range = editorRef.current.getRange();
                if (outputRef.current) {
                    if (range) {
                        const parent = range.startContainer.nodeType === 3
                            ? range.startContainer.parentElement
                            : range.startContainer;
                        outputRef.current.textContent = `Current selection range:
                            blockId: ${parent.closest('.e-block').id || 'unknown'}
                            Start Container: ${range.startContainer.nodeName}
                            Start Offset: ${range.startOffset}
                            End Container: ${range.endContainer.nodeName}
                            End Offset: ${range.endOffset}
                            Collapsed: ${range.collapsed}`;
                    } else {
                        outputRef.current.textContent = 'No selection range found';
                    }
                }
            }
        };
 
        const handleSelectRange = () => {
            const paragraphElement = document.getElementById('paragraph-2');
            if (paragraphElement) {
                const range = document.createRange();
                const textNode = paragraphElement.querySelector('.e-block-content').firstChild;
                if (textNode && editorRef.current) {
                    range.setStart(textNode, 8);
                    range.setEnd(textNode, 20);
                    editorRef.current.selectRange(range);
                    if (outputRef.current) {
                        outputRef.current.textContent = 'Custom selection range applied to "paragraph-2" (positions 8-20)';
                    }
                } else if (outputRef.current) {
                    outputRef.current.textContent = 'Could not find text content in paragraph-2';
                }
            }
        };
 
        const handleSelectBlock = () => {
            if (editorRef.current) {
                editorRef.current.selectBlock('heading-block');
                if (outputRef.current) {
                    outputRef.current.textContent = 'Entire "heading-block" selected';
                }
            }
        };
 
        const handleSelectAll = () => {
            if (editorRef.current) {
                editorRef.current.selectAllBlocks();
                if (outputRef.current) {
                    outputRef.current.textContent = 'All blocks in the editor have been selected';
                }
            }
        };
 
        // Attach event listeners to existing buttons
        if (setSelectionBtn) {
            setSelectionBtn.addEventListener('click', handleSetSelection);
        }
        if (setCursorBtn) {
            setCursorBtn.addEventListener('click', handleSetCursor);
        }
        if (getSelectedBlocksBtn) {
            getSelectedBlocksBtn.addEventListener('click', handleGetSelectedBlocks);
        }
        if (getRangeBtn) {
            getRangeBtn.addEventListener('click', handleGetRange);
        }
        if (selectRangeBtn) {
            selectRangeBtn.addEventListener('click', handleSelectRange);
        }
        if (selectBlockBtn) {
            selectBlockBtn.addEventListener('click', handleSelectBlock);
        }
        if (selectAllBtn) {
            selectAllBtn.addEventListener('click', handleSelectAll);
        }
 
        // Cleanup event listeners on component unmount
        return () => {
            if (setSelectionBtn) {
                setSelectionBtn.removeEventListener('click', handleSetSelection);
            }
            if (setCursorBtn) {
                setCursorBtn.removeEventListener('click', handleSetCursor);
            }
            if (getSelectedBlocksBtn) {
                getSelectedBlocksBtn.removeEventListener('click', handleGetSelectedBlocks);
            }
            if (getRangeBtn) {
                getRangeBtn.removeEventListener('click', handleGetRange);
            }
            if (selectRangeBtn) {
                selectRangeBtn.removeEventListener('click', handleSelectRange);
            }
            if (selectBlockBtn) {
                selectBlockBtn.removeEventListener('click', handleSelectBlock);
            }
            if (selectAllBtn) {
                selectAllBtn.removeEventListener('click', handleSelectAll);
            }
        };
    }, []);
 
    return (
 <div>
             <div id="controls">
            <h3>Selection and Cursor Methods</h3>
            <div className="button-group">
                <button id="setSelectionBtn">Set Text Selection</button>
                <button id="setCursorBtn">Set Cursor Position</button>
                <button id="getSelectedBlocksBtn">Get Selected Blocks</button>
                <button id="getRangeBtn">Get Selection Range</button>
                <button id="selectRangeBtn">Set Selection Range</button>
                <button id="selectBlockBtn">Select Block</button>
                <button id="selectAllBtn">Select All Blocks</button>
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

{% endraw %}