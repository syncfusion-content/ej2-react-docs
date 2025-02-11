import * as React from 'react';
import { RichTextEditorComponent, Inject, Toolbar, HtmlEditor, Image, QuickToolbar, Link, EmojiPicker } from '@syncfusion/ej2-react-richtexteditor';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.editorRef = React.createRef();
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
        <RichTextEditorComponent
          ref={this.editorRef}
          height={450}
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