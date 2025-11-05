import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';

class App extends React.Component {
    data = [
        { Name: 'Selma Rose', EmailId: 'selma@gmail.com' },
        { Name: 'Maria', EmailId: 'maria@gmail.com' },
        { Name: 'Russo Kay', EmailId: 'russo@gmail.com' },
        { Name: 'Robert', EmailId: 'robert@gmail.com' },
        { Name: 'Camden Kate', EmailId: 'camden@gmail.com' },
    ];
    fieldsData = { text: 'Name' };
  
    rteValue = "<p>Hello <span contenteditable=\"false\" class=\"e-mention-chip\"><a href=\"mailto:maria@gmail.com\" title=\"maria@gmail.com\">&#64;Maria</a></span>&#8203;</p><p>Welcome to the mention integration with rich text editor demo. Type <code>&#64;</code> character and tag user from the suggestion list.</p>";
    
    render() {
        return (<div className='control-pane'>
        <div className='control-section' id="rte">
          <div className='rte-control-section'>
            <RichTextEditorComponent id="mention_integration" value={this.rteValue} placeholder="Type @ and tag the name">
              <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]}/>
            </RichTextEditorComponent>
          </div>
        </div>

        <MentionComponent id="mentionEditor" minLength={3} target="#mention_integration_rte-edit-view" dataSource={this.data} fields={this.fieldsData}></MentionComponent>
      </div>);
    }
}
export default App;
