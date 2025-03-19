import React, { Component, createRef } from 'react';
import { RichTextEditorComponent, Inject, Toolbar, HtmlEditor, Image, QuickToolbar, Link } from '@syncfusion/ej2-react-richtexteditor';

class App extends Component {
  constructor(props) {
    super(props);
    this.editorRef = createRef();
    this.state = {
      editorValue: '',
    };
  }

  toolbarSettings = {
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

  componentDidMount() {
    if (this.editorRef.current) {
      this.editorRef.current.value =
        '<p>Welcome to Syncfusion RichTextEditor!</p>';
    }
  }

  getEditorContent = () => {
    if (this.editorRef.current) {
      this.setState({ editorValue: this.editorRef.current.value });
    }
  };

  render() {
      return ( <div>
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
      </div>);
  }
}
export default App;