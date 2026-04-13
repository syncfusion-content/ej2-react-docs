import React, { Component, createRef } from 'react';
import { HtmlEditor, Audio, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

class App extends React.Component<{},{}> {
  
    private editorRef = createRef<RichTextEditorComponent>();

    constructor(props: {}) {
        super(props);
        this.state = {
            value: `
                <p>Rich Text Editor allows inserting images from online sources as well as from a local computer into your content.</p>
                <p>Get started with the Quick Toolbar by clicking on the image.</p>
                <p>Custom styles can be added to the selected image inside the Rich Text Editor through the quick toolbar.</p>
            `
        };
    }

    componentDidMount() {
        this.focusCursorAtEnd();
    }

    private focusCursorAtEnd = (): void => {
        const editorObj = this.editorRef.current;
        if (editorObj) {
            setTimeout(() => {
                const editorElement = editorObj.contentModule.getEditPanel() as HTMLElement;
                editorElement.focus();
                const range = document.createRange();
                range.selectNodeContents(editorElement);
                range.collapse(false);
                const selection = window.getSelection();
                if (selection) {
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
            }, 0);
        }
    };


  public render() {
    return (
      <RichTextEditorComponent ref={this.editorRef} value={this.state.value}>
        <Inject services={[Toolbar, Audio, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    );
  }
}

export default App;