{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';
import { BlockModel, ContentType } from '@syncfusion/ej2-blockeditor';

function App() {
    const blocksData: BlockModel[] = [
      {
        type: 'Heading',
        props: { level: 2 },
        content: [
            {
                type: ContentType.Text,
                content: 'Content Styling Options'
            }
        ]
    },
    {
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'Bold text: ',
                props:{
                styles: { 
                    bold: true,
                    color: '#1976d2'
                }
            }
            },
            {
                type: ContentType.Text,
                content: 'This text is bold.',
                props: {
                styles: { 
                    bold: true 
                }
            }
            }
        ]
    },
    {
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'Italic text: ',
                props: {
                styles: { 
                    bold: true,
                    color: '#1976d2'
                }
            }
            },
            {
                type: ContentType.Text,
                content: 'This text is italicized.',
                props:{
                styles: { 
                    italic: true 
                }
            }
            }
        ]
    },
    {
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'Text with color: ',
                props:{
                styles: { 
                    bold: true,
                    color: '#1976d2'
                }
            }
            },
            {
                type: ContentType.Text,
                content: 'This text has custom color.',
                props:{
                styles: { 
                    color: '#e91e63' 
                }
            }
            }
        ]
    },
    {
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'Text with background: ',
                props:{
                styles: { 
                    bold: true,
                    color: '#1976d2'
                }
            }
            },
            {
                type: ContentType.Text,
                content: 'This text has background color.',
                props:{
                styles: { 
                    bgColor: '#fff9c4' 
                }
            }
            }
        ]
    },
    {
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'Multiple styles: ',
                props:{
                styles: { 
                    bold: true,
                    color: '#1976d2'
                }
            }
            },
            {
                type: ContentType.Text,
                content: 'This text combines multiple styles.',
                props:{
                styles: { 
                    bold: true,
                    italic: true,
                    underline: true,
                    color: '#4caf50'
                }
            }
            }
        ]
    }
];

  return <BlockEditorComponent id="block-editor" blocks={blocksData}></BlockEditorComponent>;
}

export default App;
ReactDOM.render(<App />, document.getElementById('container'));

{% endraw %}