import { HtmlEditor, Inject, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
import { useRef } from 'react';
import { NodeSelection } from '@syncfusion/ej2-react-richtexteditor';

function App() {
    let rteValue = "<p>The Rich Text Editor component is the WYSIWYG ('what you see is what you get') editor that provides the best user experience to create and update content. Users can format their content using standard toolbar commands.</p>";
    
    const rteRef = useRef(null);

    const nodeSelection = new NodeSelection();

    const setBackground = () => {
      if (rteRef.current) {
        const rteContent = rteRef.current.contentModule.getDocument();
        const firstParagraph = rteRef.current.contentModule
          .getEditPanel()
          .querySelector('p');

        if (firstParagraph && firstParagraph.firstChild) {
          // Select text from index 4 to 20
          nodeSelection.setSelectionText(
            rteContent,
            firstParagraph.firstChild,
            firstParagraph.firstChild,
            4, // Start index
            20 // End index
          );

          // Apply background color
          rteRef.current.executeCommand('backColor', 'yellow');
        }
      }
    };
    return (
      <div> <button onClick={setBackground} className="e-btn" style={{ margin: '5px' }}> Apply </button>
      <RichTextEditorComponent ref={rteRef} height={350} value={rteValue}>
        <Inject services={[Toolbar, HtmlEditor]} />
      </RichTextEditorComponent>
    </div>);
}
export default App;
