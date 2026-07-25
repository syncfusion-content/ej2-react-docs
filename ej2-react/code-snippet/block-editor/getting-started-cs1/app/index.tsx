// Import the BlockEditor
import { BlockEditorComponent } from '@syncfusion/ej2-react-blockeditor';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
function App() {
    return (
        <BlockEditorComponent id="block-editor"></BlockEditorComponent>
    );
}
createRoot(document.getElementById('container')).render(<App />);