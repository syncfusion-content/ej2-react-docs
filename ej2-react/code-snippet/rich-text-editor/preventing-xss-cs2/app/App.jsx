import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import * as React from 'react';
import { detach } from '@syncfusion/ej2-base';

function App() {
    
  let  rteValue="<div>Prevention of Cross Sit Scripting (XSS)</div><script>alert('hi')</script>"
  
  const onBeforeSanitizeHtml=(e) =>{
        e.helper = (value) => {
            e.cancel = true;
            let temp = document.createElement('div');
            temp.innerHTML = value;
            let scriptTag = temp.querySelector('script');
            if (scriptTag) {
                detach(scriptTag);
            }
            return temp.innerHTML;
        }
  }
  return (<RichTextEditorComponent height={450} value={rteValue} beforeSanitizeHtml={onBeforeSanitizeHtml}>
      <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]}/>
    </RichTextEditorComponent>);
}
export default App;
