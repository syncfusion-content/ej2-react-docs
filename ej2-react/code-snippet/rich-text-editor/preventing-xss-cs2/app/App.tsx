import { HtmlEditor, Image, Inject, Link, QuickToolbar,BeforeSanitizeHtmlArgs, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
import { detach } from '@syncfusion/ej2-base';

function App(){
  let rteValue:string="<div>Prevention of Cross Sit Scripting (XSS)</div><script>alert('hi')</script>";

  const onBeforeSanitizeHtml=(e:BeforeSanitizeHtmlArgs) =>{
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
  
  return (
    <RichTextEditorComponent height={450} value={rteValue} beforeSanitizeHtml={onBeforeSanitizeHtml}>
      <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
    </RichTextEditorComponent>
  );
}

export default App;
