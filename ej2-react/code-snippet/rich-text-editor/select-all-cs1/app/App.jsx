import * as React from 'react';
import {
  RichTextEditorComponent,
  HtmlEditor,
  Toolbar,
  Image,
  Link,
  Resize,
  QuickToolbar,
  Inject,
} from '@syncfusion/ej2-react-richtexteditor';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.rteRef = React.createRef();
    this.rteValue = `<p>The Rich Text Editor component is a WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.
      Users can format their content using standard toolbar commands.</p>`;
  }

  selectAllContent = () => {
    if (this.rteRef.current) {
      this.rteRef.current.selectAll();
    }
  };

  render() {
    return (
      <div>
        <button className="e-btn" style={{ marginBottom: '20px' }} onClick={this.selectAllContent} >Select All</button>
        <RichTextEditorComponent ref={this.rteRef} value={this.rteValue} height={450}>
          <Inject services={[HtmlEditor, Toolbar, Image, Link, Resize, QuickToolbar]}/>
        </RichTextEditorComponent>
      </div>
    );
  }
}

export default App;