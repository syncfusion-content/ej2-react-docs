import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component<{},{}> {

  private rteValue: string = "<p>The Rich Text Editor allows users to apply line-height (line-spacing) to elements like paragraphs, lists, headings, and table cells. You can set line height using a dedicated dropdown in the toolbar, and it is applied as inline style to the selected blocks. This feature makes text easier to read and gives better control over content layout.</p><p><b> Key features:</b></p> <ul> <li><p>Provides a <b>Line Height</b> dropdown in the toolbar for easy access.</p></li><li><p>Supports applying line-height to paragraphs, headings, lists, and table cells.</p></li><li><p>Applies line-height as inline styles for consistent and precise text rendering.</p></li><li><p>Ensures consistent appearance across devices and print layouts.</p></li><li><p>Improves text readability and overall document aesthetics.</p></li></ul>";
  
  private toolbarSettings: object = {
    items: ['LineHeight']
  }

  private lineHeight: object = {
    default: '2',
    items: [
      { text: '1', value: '1' },
      { text: '1.15', value: '1.15' },
      { text: '1.5', value: '1.5' },
      { text: '2', value: '2' },
      { text: '2.5', value: '2.5' },
      { text: '3', value: '3' },
      { text: '3.5', value: '3.5' },
      { text: '4', value: '4' },
    ],
    supportAllValues: true
  }

  public render() {
    return (
      <RichTextEditorComponent value={this.rteValue} toolbarSettings={this.toolbarSettings} lineHeight={this.lineHeight}>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    );
  }
}

export default App;



