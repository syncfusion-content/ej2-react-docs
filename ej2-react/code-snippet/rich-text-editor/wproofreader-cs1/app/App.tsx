import { HtmlEditor, Image, Inject, Link,ToolbarSettingsModel, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
import WProofreader from '@webspellchecker/wproofreader-sdk-js';

class App extends React.Component<{},{}> {
  componentDidMount() {
    if (this.spellEditor) {
      WProofreader.init({
          container: this.spellEditor.contentModule.getEditPanel(),
          lang: 'en_US',
          serviceId: 'TDHiXV50gZlQaDw',
      });
    }
  }

  private rteValue: string = "<p>Enter you\'re text here with real spelling and grammer mistakes to see how WProofreader work. Alot of potential errors will be underlined; hover on the marked wods for instant correction suggesstions.</p>";
    
  private spellEditor: RichTextEditorComponent | null = null;

  public render() {
     return (
      <RichTextEditorComponent height={450} value={this.rteValue}  ref={(editor) => (this.spellEditor = editor)}>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]}/>
      </RichTextEditorComponent>);
  }
}

export default App;
