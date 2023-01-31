import { AccordionComponent, AccordionItemDirective, AccordionItemsDirective } from '@syncfusion/ej2-react-navigations';
import * as React from 'react';
import * as ReactDOM from "react-dom";
function ReactApp() {
    function content0() {
        return (<div>
      Microsoft ASP.NET is a set of technologies in the Microsoft .NET Framework for building Web applications and XML Web services.
    </div>);
    }
    function content1() {
        return (<div>
      The Model-View-Controller (MVC) architectural pattern separates an application into three main components: the model, the view, and the controller.
    </div>);
    }
    function content2() {
        return (<div>
      JavaScript (JS) is an interpreted computer programming language.It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed.
    </div>);
    }
    return (<AccordionComponent expandMode='Single'>
      <AccordionItemsDirective>
        <AccordionItemDirective expanded={true} header='ASP.NET' content={content0}/>
        <AccordionItemDirective header='ASP.NET MVC' content={content1}/>
        <AccordionItemDirective header='JavaScript' content={content2}/>
      </AccordionItemsDirective>
    </AccordionComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<ReactApp />);
