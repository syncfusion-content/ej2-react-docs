import * as React from "react";
import { useRef } from "react";
import * as ReactDOM from "react-dom";
import { AccordionComponent, AccordionItemDirective, AccordionItemsDirective } from '@syncfusion/ej2-react-navigations';
const ReactApp = () => {
  let initialLoad = true;
  let isCollapsed = false
  let expandIndex: number;
  let acrdnInstance = useRef(null)
  const expanded = (e: any): void => {
    if (!e.isExpanded && !initialLoad && isCollapsed) {
      acrdnInstance.current.expandItem(true, expandIndex);
      isCollapsed = false;
    }
  }
  const expanding = (e: any): void => {
    if (e.isExpanded && !initialLoad && !isCollapsed) {
      e.cancel = true;
      expandIndex = acrdnInstance.current.items.indexOf(e.item);
      isCollapsed = true;
    }
  }

  const created = (): void => {
    initialLoad = false;
  }

  const aspContent = () => {
    return (<div>
      Microsoft ASP.NET is a set of technologies in the Microsoft .NET Framework for building Web applications and XML Web services. ASP.NET pages execute on the server and generate markup such as HTML, WML, or XML that is sent to a desktop or mobile browser. ASP.NET pages use a compiled,event-driven programming model that improves performance and enables the separation of application logic and user interface.
    </div>);
  }

  const mvcContent = () => {
    return (<div>
      The Model-View-Controller (MVC) architectural pattern separates an application into three main components: the model, the view, and the controller. The ASP.NET MVC framework provides an alternative to the ASP.NET Web Forms pattern for creating Web applications. The ASP.NET MVC framework is a lightweight, highly testable presentation framework that (as with Web Forms-based applications) is integrated with existing ASP.NET features, such as master pages and membership-based authentication.
    </div>);
  }

  const jsContent = () => {
    return (<div>
      JavaScript (JS) is an interpreted computer programming language.It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed.More recently, however, it has become common in both game development and the creation of desktop applications.
    </div>);
  }
  return (<AccordionComponent expanded={expanded} expanding={expanding} created={created} expandMode='Single' ref={acrdnInstance}>
    <AccordionItemsDirective>
      <AccordionItemDirective header='ASP.NET' content={aspContent} />
      <AccordionItemDirective header='ASP.NET MVC' content={mvcContent} />
      <AccordionItemDirective header='Javascript' content={jsContent} />
    </AccordionItemsDirective>
  </AccordionComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<ReactApp />);