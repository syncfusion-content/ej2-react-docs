


import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';

function App() {
    let data: { [key: string]: Object }[] = [
          { Name: "Selma Rose", Status: "active", EmployeeImage: "2.png", EmailId: "selma@gmail.com" },
          { Name: "Maria", Status: "active", EmployeeImage: "1.png", EmailId: "maria@gmail.com" },
          { Name: "Russo Kay", Status: "busy", EmployeeImage: "8.png", EmailId: "russo@gmail.com" },
          { Name: "Camden Kate", Status: "active", EmployeeImage: "9.png", EmailId: "camden@gmail.com" },
          { Name: "Robert", Status: "busy", EmployeeImage: "dp.png", EmailId: "robert@gmail.com" },
          { Name: "Garth", Status: "active", EmployeeImage: "7.png", EmailId: "garth@gmail.com" },
          { Name: "Andrew James", Status: "away", EmployeeImage: "pic04.png", EmailId: "noah@gmail.com" },
          { Name: "Olivia", Status: "busy", EmployeeImage: "5.png", EmailId: "olivia@gmail.com" },
          { Name: "Sophia", Status: "away", EmployeeImage: "6.png", EmailId: "sophia@gmail.com" },
          { Name: "Margaret", Status: "active", EmployeeImage: "3.png", EmailId: "margaret@gmail.com" },
          { Name: "Ursula Ann", Status: "active", EmployeeImage: "dp.png", EmailId: "ursula@gmail.com" },
          { Name: "Laura Grace", Status: "away", EmployeeImage: "4.png", EmailId: "laura@gmail.com" },
          { Name: "Albert", Status: "active", EmployeeImage: "pic03.png", EmailId: "albert@gmail.com" },
          { Name: "William", Status: "away", EmployeeImage: "8.png", EmailId: "william@gmail.com" }
    ];
    let  fieldsData: { [key: string]: string }={ text: 'Name' };
  
    function itemTemplate(data: any) {
      return (
        <table>
          <tr>
            <td>
              <div id="mention-TemplateList">
                <img className="mentionEmpImage" src={"src/rich-text-editor/images/" + data.EmployeeImage} />
                <span className={"e-badge e-badge-success e-badge-overlap e-badge-dot e-badge-bottom"+ data.Status}></span>
              </div>
              </td>
              <td className="mentionNameList">
                <span className="person">{data.Name}</span>
                <span className="email">{data.EmailId}</span>
              </td>
            </tr>
          </table>
        );
    }

    function displayTemplate(data: any) {
      return (
        <React.Fragment>
           <a title={data.EmailId}>@{data.Name}</a>
        </React.Fragment>
        );
    }

    function actionBegineHandler(args: any): void {
      if (args.requestType === 'EnterAction') {
        args.cancel = true;
      }
    }
    return (
    <div className='control-pane'>
        <div className='control-section' id="rte">
        <div className='rte-control-section'>
            <RichTextEditorComponent id="mention_integration" placeholder="Type @ and tag the name"  actionBegin={actionBegineHandler.bind(this)}  >
            <p>Hello <span contentEditable={false} className='e-mention-chip'><a title="maria@gmail.com">@Maria</a></span>&#8203;</p>
            <p>Welcome to the mention integration with rich text editor demo. Type <code>@</code> character and tag user from the suggestion list. </p>
            <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
            </RichTextEditorComponent>
        </div>
        </div>
        <MentionComponent id="mentionEditor" target="#mention_integration_rte-edit-view" suggestionCount={8} showMentionChar={false}  allowSpaces={true} dataSource={data} fields={fieldsData} popupWidth="250px" popupHeight="200px" itemTemplate={itemTemplate} displayTemplate={displayTemplate}></MentionComponent>
    </div>
    );
}

export default App;



