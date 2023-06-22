
import * as React from 'react';
import { RichTextEditorComponent, Inject, Toolbar, HtmlEditor, Image, QuickToolbar, Link, EmojiPicker } from '@syncfusion/ej2-react-richtexteditor';

class App extends React.Component<{},{}> {
  private toolbarSettings: object = {
    items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments', 'OrderedList',
    'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode', 'EmojiPicker', '|', 'Undo', 'Redo']
  }
  public render() {
    return (
      <RichTextEditorComponent height={450} toolbarSettings={this.toolbarSettings} >
        <p>An emoji picker in a Rich Text Editor is a tool that allows users to easily add emojis or emoticons to their text.</p>
        <p>Typically, it is a small window or panel that displays a variety of emojis, arranged in different categories, such as smileys, animals, food, and so on. Users can select the desired emoji by clicking on it or by typing its name in a search bar.</p>
        <Inject services={[Toolbar, HtmlEditor, Image, QuickToolbar, Link, EmojiPicker]} />
      </RichTextEditorComponent>
    );
  }
}

export default App;



