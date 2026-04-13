import * as React from 'react';
import { HtmlEditor, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

class App extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      editorContent: 'Initial content',
    };
    this.timer = null;
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ editorContent: 'Updated content after 1 seconds' });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  render() {
      return ( <div>
        <h3>Editor 1</h3>
        <RichTextEditorComponent value={this.state.editorContent}>
          <Inject services={[Toolbar, Link, HtmlEditor, QuickToolbar]} />
        </RichTextEditorComponent>

        <h3>Editor 2</h3>
        <RichTextEditorComponent value={this.state.editorContent}>
          <Inject services={[Toolbar, Link, HtmlEditor, QuickToolbar]} />
        </RichTextEditorComponent>
      </div>);
  }
}
export default App;