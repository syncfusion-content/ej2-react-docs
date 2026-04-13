import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import { MentionComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';

function App() {
    let rteValue:string = "<p>Hello <span contenteditable=\"false\" class=\"e-mention-chip\"><a href=\"mailto:maria@gmail.com\" title=\"maria@gmail.com\">&#64;Maria</a></span>&#8203;</p><p>Welcome to the mention integration with rich text editor demo. Type <code>&#64;</code> character and tag user from the suggestion list.</p>";
   
    let mentionObj;
    let data: { [key: string]: Object }[] = [
      { Name: "Selma Rose", Status: "active", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/2.png", EmailId: "selma@gmail.com" },
      { Name: "Maria", Status: "active", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/1.png", EmailId: "maria@gmail.com" },
      { Name: "Russo Kay", Status: "busy", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/8.png", EmailId: "russo@gmail.com" },
      { Name: "Camden Kate", Status: "active", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/9.png", EmailId: "camden@gmail.com" },
      { Name: "Robert", Status: "busy", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/dp.png", EmailId: "robert@gmail.com" },
      { Name: "Garth", Status: "active", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/7.png", EmailId: "garth@gmail.com" },
      { Name: "Andrew James", Status: "away", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/pic04.png", EmailId: "andrew@gmail.com" },
      { Name: "Olivia", Status: "busy", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/5.png", EmailId: "olivia@gmail.com" },
      { Name: "Sophia", Status: "away", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/6.png", EmailId: "sophia@gmail.com" },
      { Name: "Margaret", Status: "active", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/3.png", EmailId: "margaret@gmail.com" },
      { Name: "Ursula Ann", Status: "active", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/dp.png", EmailId: "ursula@gmail.com" },
      { Name: "Laura Grace", Status: "away", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/4.png", EmailId: "laura@gmail.com" },
      { Name: "Albert", Status: "active", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/pic03.png", EmailId: "albert@gmail.com" },
      { Name: "William", Status: "away", EmployeeImage: "https://ej2.syncfusion.com/demos/src/rich-text-editor/images/8.png", EmailId: "william@gmail.com" }
    ];
    let  fieldsData: { [key: string]: string }={ text: 'Name' };
  
    function itemTemplate(data: any) {
      return (
        <table>
          <tr>
            <td>
              <div id="mention-TemplateList">
                <img className="mentionEmpImage" src={data.EmployeeImage} />
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
           <a href={`mailto:${data.EmailId}`} title={data.EmailId}>@{data.Name}</a>
        </React.Fragment>
        );
    }

    function actionBegineHandler(args: any): void {
      if (args.requestType === 'EnterAction' && mentionObj.element.classList.contains('e-popup-open')) {
        args.cancel = true;
      }
    }
    return (
    <div className='control-pane'>
        <div className='control-section' id="rte">
        <div className='rte-control-section'>
            <RichTextEditorComponent id="mention_integration" value={rteValue} placeholder="Type @ and tag the name"  actionBegin={actionBegineHandler.bind(this)}  >
            <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
            </RichTextEditorComponent>
        </div>
        </div>
        <MentionComponent ref={(scope) => { mentionObj = scope; }} id="mentionEditor" target="#mention_integration_rte-edit-view" suggestionCount={8} showMentionChar={false}  allowSpaces={true} dataSource={data} fields={fieldsData} popupWidth="250px" popupHeight="200px" itemTemplate={itemTemplate} displayTemplate={displayTemplate}></MentionComponent>
    </div>
    );
}

export default App;
