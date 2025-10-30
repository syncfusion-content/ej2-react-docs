import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';

class App extends React.Component<{},{}> {
  public mentionObj : MentionComponent;
  private data: { [key: string]: Object }[] = [
      { Name: 'Selma Rose', EmailId: 'selma@gmail.com' },
      { Name: 'Maria', EmailId: 'maria@gmail.com' },
      { Name: 'Russo Kay', EmailId: 'russo@gmail.com' },
      { Name: 'Robert', EmailId: 'robert@gmail.com' },
      { Name: 'Camden Kate', EmailId: 'camden@gmail.com' },
      { Name: 'Sophia', EmailId: 'sophia@gmail.com' },
      { Name: 'Margaret', EmailId: 'margaret@gmail.com' },
      { Name: 'Ursula Ann', EmailId: 'ursula@gmail.com' },
      { Name: 'Laura Grace', EmailId: 'laura@gmail.com' },
      { Name: 'Albert', EmailId: 'albert@gmail.com' },
      { Name: 'William', EmailId: 'william@gmail.com' },
  ];
  private  fieldsData: { [key: string]: string }={ text: 'Name' };

  private rteValue:string = "<p>Hello <span contenteditable=\"false\" class=\"e-mention-chip\"><a href=\"mailto:maria@gmail.com\" title=\"maria@gmail.com\">&#64;Maria</a></span>&#8203;</p><p>Welcome to the mention integration with rich text editor demo. Type <code>&#64;</code> character and tag user from the suggestion list.</p>";
    
  render() {
    return (
      <div className='control-pane'>
        <div className='control-section' id="rte">
          <div className='rte-control-section'>
            <RichTextEditorComponent id="mention_integration" value={this.rteValue} placeholder="Type @ and tag the name"  >
              <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
            </RichTextEditorComponent>
          </div>
        </div>

        <MentionComponent ref={(scope) => { this.mentionObj = scope; }} id="mentionEditor" target="#mention_integration_rte-edit-view" dataSource={this.data} fields={this.fieldsData} suggestionCount={5}></MentionComponent>
      </div>
    );
  }
}

export default App;



