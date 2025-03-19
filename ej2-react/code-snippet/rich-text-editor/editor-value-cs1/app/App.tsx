import React, { Component, RefObject, createRef } from 'react';
import { RichTextEditorComponent, Inject, Toolbar, HtmlEditor, Image, QuickToolbar, Link } from '@syncfusion/ej2-react-richtexteditor';

interface AppState {
  editorValue: string;
}

class App extends Component<{}, AppState> {
  private editorRef: RefObject<RichTextEditorComponent>;

  private toolbarSettings: object = {
    items: [
      'Bold',
      'Italic',
      'Underline',
      '|',
      'Formats',
      'Alignments',
      'OrderedList',
      'UnorderedList',
      '|',
      'CreateLink',
      'Image',
      '|',
      'SourceCode',
      '|',
      'Undo',
      'Redo',
    ],
  };

  constructor(props: {}) {
    super(props);
    this.editorRef = createRef();
    this.state = {
      editorValue: '',
    };
  }

  componentDidMount() {
    if (this.editorRef.current) {
      this.editorRef.current.value = 'Welcome to Syncfusion RichTextEditor!';
    }
  }

  getEditorContent = () => {
    if (this.editorRef.current) {
      this.setState({ editorValue: this.editorRef.current.value });
    }
  };

  public render() {
    return (
       <div>
        <h1>Rich Text Editor</h1>
          <RichTextEditorComponent
            ref={this.editorRef}
            toolbarSettings={this.toolbarSettings}
          >
            <Inject services={[Toolbar, HtmlEditor, Image, QuickToolbar, Link]} />
          </RichTextEditorComponent>
          <button onClick={this.getEditorContent} style={{ marginTop: '10px' }}>
            Get Editor Value
          </button>
          <p>
            <strong>Editor Value:</strong> {this.state.editorValue}
          </p>
        </div>
    );
  }
}

export default App;