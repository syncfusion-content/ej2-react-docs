

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccordionComponent, AccordionItemDirective, AccordionItemsDirective, ExpandEventArgs } from '@syncfusion/ej2-react-navigations';

function ReactApp() {
  let initialLoad: Boolean = true;
  let isCollapsed: Boolean = false;
  let expandIndex: any;
  let acrdnInstance: AccordionComponent;
  return (
    <AccordionComponent expanded={expanded} expanding={expanding} created={created} expandMode='Single' ref={acrdn => acrdnInstance = acrdn}>
      <AccordionItemsDirective>
        <AccordionItemDirective header='ASP.NET' content='Microsoft ASP.NET is a set of technologies in the Microsoft .NET Framework for building Web applications and XML Web services. ASP.NET pages execute on the server and generate markup such as HTML, WML, or XML that is sent to a desktop or mobile browser. ASP.NET pages use a compiled,event-driven programming model that improves performance and enables the separation of application logic and user interface.' />
        <AccordionItemDirective header='ASP.NET MVC' content='The Model-View-Controller (MVC) architectural pattern separates an application into three main components: the model, the view, and the controller. The ASP.NET MVC framework provides an alternative to the ASP.NET Web Forms pattern for creating Web applications. The ASP.NET MVC framework is a lightweight, highly testable presentation framework that (as with Web Forms-based applications) is integrated with existing ASP.NET features, such as master pages and membership-based authentication.' />
        <AccordionItemDirective header='Javascript' content='JavaScript (JS) is an interpreted computer programming language.It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed.More recently, however, it has become common in both game development and the creation of desktop applications.' />
      </AccordionItemsDirective>
    </AccordionComponent>
  );
  function expanding(e: ExpandEventArgs) {
    if (e.isExpanded && !initialLoad && !isCollapsed) {
      e.cancel = true;
      expandIndex = acrdnInstance.items.indexOf(e.item);
      isCollapsed = true;
    }
  }
  function expanded(e: ExpandEventArgs) {
    if (!e.isExpanded && !initialLoad && isCollapsed) {
      acrdnInstance.expandItem(true, expandIndex);
      isCollapsed = false;
    }
  }
  function created(): void {
    initialLoad = false;
  }
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<ReactApp />);


