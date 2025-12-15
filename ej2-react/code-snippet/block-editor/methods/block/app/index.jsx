{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useEffect, useRef } from 'react';
import { BlockEditorComponent, ContentType } from '@syncfusion/ej2-react-blockeditor';

function App() {
  const editorRef = useRef(null);

  useEffect(() => {
    const editorInstance = editorRef.current;

    // Add Block
    document.getElementById('addBlockBtn').addEventListener('click', () => {
      const newBlock = {
        id: 'new-block',
        blockType: 'Paragraph',
        content: [
          {
            contentType: ContentType.Text,
            content: 'This is a newly added block'
          }
        ]
      };
      editorInstance.addBlock(newBlock, 'block-2', true);
      displayOutput(`Block added successfully with ID: ${newBlock.id}`);
    });

    // Remove Block
    document.getElementById('removeBlockBtn').addEventListener('click', () => {
      editorInstance.removeBlock('block-3');
      displayOutput('Block with ID "block-3" removed successfully');
    });

    // Get Block
    document.getElementById('getBlockBtn').addEventListener('click', () => {
      const block = editorInstance.getBlock('block-1');
      if (block && block.content) {
        displayOutput(`Block found:\nID: ${block.id}\nType: ${block.blockType}\nContent: ${block.content[0].content}`);
      } else {
        displayOutput('Block with ID "block-1" not found');
      }
    });

    // Move Block
    document.getElementById('moveBlockBtn').addEventListener('click', () => {
      editorInstance.moveBlock('block-2', 'block-1');
      displayOutput('Block "block-2" moved successfully');
    });

    // Update Block
    document.getElementById('updateBlockBtn').addEventListener('click', () => {
      const success = editorInstance.updateBlock('block-2', {
        indent: 1,
        content: [
          {
            content: 'Updated content'
          }
        ]
      });

      const updatedBlock = editorInstance.getBlock('block-2');
      if (success && updatedBlock && updatedBlock.content) {
        displayOutput(`Block ${updatedBlock.id} updated successfully\nNew content: "${updatedBlock.content[0].content} \nNew indent: ${updatedBlock.indent}"`);
      } else {
        displayOutput('Failed to update block');
      }
    });

    // Get Block Count
    document.getElementById('getBlockCountBtn').addEventListener('click', () => {
      const count = editorInstance.getBlockCount();
      displayOutput(`Total number of blocks: ${count}`);
    });
  }, []);

  const blocks = [
    {
      id: 'block-1',
      blockType: 'Heading',
      properties: { level: 1 },
      content: [{ contentType: ContentType.Text, content: 'Sample Heading' }]
    },
    {
      id: 'block-2',
      blockType: 'Paragraph',
      content: [{ contentType: ContentType.Text, content: 'This is a sample paragraph block.' }]
    },
    {
      id: 'block-3',
      blockType: 'Paragraph',
      content: [{ contentType: ContentType.Text, content: 'This is another paragraph block.' }]
    }
  ];
  function displayOutput(message) {
  const outputDiv = document.getElementById('output');
  if (outputDiv) {
    outputDiv.textContent = message;
  }
}

  return (
     <div>
      <div id="controls">
            <h3>Block Management Methods</h3>
            <div className="button-group">
                <button id="addBlockBtn">Add Block</button>
                <button id="removeBlockBtn">Remove Block</button>
                <button id="getBlockBtn">Get Block</button>
                <button id="moveBlockBtn">Move Block</button>
                <button id="updateBlockBtn">Update Block</button>
                <button id="getBlockCountBtn">Get Block Count</button>
            </div>
            <div id="output"></div>
        </div>
    <BlockEditorComponent id="blockeditor" ref={editorRef}  blocks={blocks}></BlockEditorComponent>
    </div>
  );
}

export default App;
ReactDOM.render(<App />, document.getElementById('container'));

{% endraw %}