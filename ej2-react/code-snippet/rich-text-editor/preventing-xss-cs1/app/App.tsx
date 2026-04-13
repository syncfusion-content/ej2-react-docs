import { HtmlEditor, Image, Inject, Link, QuickToolbar, BeforeSanitizeHtmlArgs, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
import { detach } from '@syncfusion/ej2-base';

class App extends React.Component<{},{}> {
  
  private rteValue:string ="<div>Prevention of Cross Sit Scripting (XSS)</div><script>alert('hi')</script>";

  public onBeforeSanitizeHtml(e: BeforeSanitizeHtmlArgs): void {
    e.helper = (value: string) => {
        e.cancel = true;
        let temp: HTMLElement = document.createElement('div');
        temp.innerHTML = value;
        let scriptTag: HTMLElement = temp.querySelector('script') as HTMLElement;
        if (scriptTag) {
            detach(scriptTag);
        }
        return temp.innerHTML;
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
