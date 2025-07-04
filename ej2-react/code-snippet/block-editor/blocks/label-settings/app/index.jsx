{% raw %}

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BlockEditorComponent, ContentType } from '@syncfusion/ej2-react-blockeditor';

function App() {
    const labelSettings = {
    triggerChar: '#',
    labelItems: [
        { id: 'bug', text: 'Bug', labelColor: '#ff5252', groupHeader: 'Status' },
        { id: 'task', text: 'Task', labelColor: '#90caf9', groupHeader: 'Status' },
        { id: 'feature', text: 'Feature', labelColor: '#81c784', groupHeader: 'Status' },
        { id: 'enhancement', text: 'Enhancement', labelColor: '#ba68c8', groupHeader: 'Status' },
        { id: 'low', text: 'Low Priority', labelColor: '#c5e1a5', groupHeader: 'Priority' },
        { id: 'medium', text: 'Medium Priority', labelColor: '#fff59d', groupHeader: 'Priority' },
        { id: 'high', text: 'High Priority', labelColor: '#ffab91', groupHeader: 'Priority' },
        { id: 'critical', text: 'Critical', labelColor: '#ef9a9a', groupHeader: 'Priority' }
    ]
};

const blocksData = [
    {
        id: 'block-1',
        type: 'Heading1',
        content: [
            {
                type: ContentType.Text,
                content: 'Project Planning with Custom Labels'
            }
        ]
    },
    {
        id: 'block-2',
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'Type # to add status labels to your tasks.'
            }
        ]
    },
    {
        id: 'block-3',
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'Fix homepage layout issue - '
            },
            {
                type: ContentType.Label,
                id: 'bug'
            },
            {
                type: ContentType.Text,
                content: ' '
            },
            {
                type: ContentType.Label,
                id: 'high'
            }
        ]
    },
    {
        id: 'block-4',
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'Update user documentation - '
            },
            {
                type: ContentType.Label,
                id: 'task'
            },
            {
                type: ContentType.Text,
                content: ' '
            },
            {
                type: ContentType.Label,
                id: 'medium'
            }
        ]
    },
    {
        id: 'block-5',
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'Implement payment gateway - '
            },
            {
                type: ContentType.Label,
                id: 'feature'
            },
            {
                type: ContentType.Text,
                content: ' '
            },
            {
                type: ContentType.Label,
                id: 'critical'
            }
        ]
    }
];
    return (
        <BlockEditorComponent
            id="blockeditor_labels"
            blocks={blocksData}
            labelSettings={labelSettings}
        ></BlockEditorComponent>
    );
}

export default App;
ReactDOM.render(<App />, document.getElementById('container'));

{% endraw %}