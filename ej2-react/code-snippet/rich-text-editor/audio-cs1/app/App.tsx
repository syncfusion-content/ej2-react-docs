import * as React from 'react';
import { HtmlEditor, Audio, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

class App extends React.Component<{},{}> {
  private toolbarSettings: object = {
    items: ['Audio']
  }
  private rteValue: string= " <p>Rich Text Editor allows inserting video and audio from online sources and the local computers where you want to insert a video and audio into your content.</p>";
  private insertAudioSettings: object = {
    saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
    removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
  }
  public render() {
    return (
      <RichTextEditorComponent height={450} value={this.rteValue} toolbarSettings={this.toolbarSettings} insertAudioSettings = {this.insertAudioSettings} >
        <Inject services={[Toolbar, Audio, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    );
  }
}

export default App;