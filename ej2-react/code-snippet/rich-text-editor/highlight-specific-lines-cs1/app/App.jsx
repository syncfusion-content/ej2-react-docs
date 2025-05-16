import { HtmlEditor, Inject, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
import { createRef } from 'react';
import { NodeSelection } from '@syncfusion/ej2-react-richtexteditor';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.rteRef = createRef();
        this.nodeSelection = new NodeSelection();
    }
    
    rteValue = "<p>The Rich Text Editor component is the WYSIWYG ('what you see is what you get') editor that provides the best user experience to create and update content. Users can format their content using standard toolbar commands.</p>";

    setBackground = () => {
        if (this.rteRef.current) {
            const rteContent = this.rteRef.current.contentModule.getDocument();
            const firstParagraph = this.rteRef.current.contentModule
            .getEditPanel()
            .querySelector('p');

            if (firstParagraph && firstParagraph.firstChild) {
            // Select text from index 4 to 20
            this.nodeSelection.setSelectionText(
                rteContent,
                firstParagraph.firstChild,
                firstParagraph.firstChild,
                4, // Start index
                20 // End index
            );

            // Apply background color
            this.rteRef.current.executeCommand('backColor', 'yellow');
            }
        }
    };
    
    render() {
        return (
            <div>
                <button onClick={this.setBackground} className="e-btn" style={{ margin: '5px' }}> Apply </button>
                <RichTextEditorComponent ref={this.rteRef} height={350} value={this.rteValue}>
                    <Inject services={[Toolbar, HtmlEditor]} />
                </RichTextEditorComponent>
            </div>
        );
    }
}
export default App;
