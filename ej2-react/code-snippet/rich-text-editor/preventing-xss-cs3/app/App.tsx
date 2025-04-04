import { HtmlEditor, Image, Inject, Link, QuickToolbar, BeforeSanitizeHtmlArgs, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';

class App extends React.Component<{},{}> {
  
  public rteValue: string = `<div>Prevention of Cross-Site Scripting (XSS)</div><script>alert('hi')</script><iframe srcdoc="<p>The Rich Text Editor component is WYSIWYG ('what you see is what you get') editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>"></iframe>`;

  public onBeforeSanitizeHtml(e: BeforeSanitizeHtmlArgs): void {
    if (e.selectors && e.selectors.tags) {
      e.selectors.tags = e.selectors.tags.filter((tag: string) => tag !== 'iframe:not(.e-rte-embed-url)');
      e.selectors.tags = [('iframe[src^="https://"]')];
    }
  }
   
  public render() {
    return (
      <RichTextEditorComponent height={450} value={this.rteValue} beforeSanitizeHtml={this.onBeforeSanitizeHtml}>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    );
  }
}

export default App;
