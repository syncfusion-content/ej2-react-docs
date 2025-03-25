import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar, BeforeSanitizeHtmlArgs } from '@syncfusion/ej2-react-richtexteditor';
import { detach } from '@syncfusion/ej2-base';
import * as React from 'react';

function App() {
 let template: string = `<div onmouseover='javascript:alert(1)'>Prevention of Cross Sit Scripting (XSS) </div> <script>alert('hi')</script>`;
 let rteObj: RichTextEditorComponent;
  function beforeSanitizeHtml(e: BeforeSanitizeHtmlArgs) {
      e.helper = (value: string) => {
          e.cancel = true;
          let temp: HTMLElement = document.createElement('div');
          temp.innerHTML = value;
          let scriptTag: HTMLElement = temp.querySelector('script');
          if (scriptTag) {
            detach(scriptTag);
          }
      return temp.innerHTML;
    }
}
    return (<div>
    <RichTextEditorComponent id="defaultRTE" ref={(richtexteditor) => {rteObj = richtexteditor; }} valueTemplate={template} beforeSanitizeHtml={beforeSanitizeHtml= beforeSanitizeHtml.bind(this)}>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
      </div>);
}

export default App;
