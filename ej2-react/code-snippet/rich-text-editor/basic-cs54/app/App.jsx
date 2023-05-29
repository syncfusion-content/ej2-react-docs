{% raw %}
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import { detach } from '@syncfusion/ej2-base';
import * as React from 'react';
class App extends React.Component {
    template = `<div onmouseover='javascript:alert(1)'>Prevention of Cross Sit Scripting (XSS) </div> <script>alert('hi')</script>`;
    rteObj;
    beforeSanitizeHtml(e) {
        e.helper = (value) => {
            e.cancel = true;
            let temp = document.createElement('div');
            temp.innerHTML = value;
            let scriptTag = temp.querySelector('script');
            if (scriptTag) {
                detach(scriptTag);
            }
            return temp.innerHTML;
        };
    }
    render() {
        return (<div>
    <RichTextEditorComponent id="defaultRTE" ref={(richtexteditor) => { this.rteObj = richtexteditor; }} valueTemplate={this.template} beforeSanitizeHtml={this.beforeSanitizeHtml = this.beforeSanitizeHtml.bind(this)}>
        <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]}/>
      </RichTextEditorComponent>
      </div>);
    }
}
export default App;
{% endraw %}