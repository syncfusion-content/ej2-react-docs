

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccordionComponent, AccordionItemsDirective, AccordionItemDirective } from '@syncfusion/ej2-react-navigations';
import { ExpandEventArgs, AccordionClickArgs } from '@syncfusion/ej2-navigations';

let clickEle: HTMLElement;
function ReactApp(props) {
  let acrdnInstance: AccordionComponent;
  let clickEle;
  clickEle = props.data;
  return (
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    <AccordionComponent ref={acrdn => acrdnInstance = acrdn} expandMode='Single' clicked={clicked} expanding={expanding}>
      <AccordionItemsDirective>
        <AccordionItemDirective expanded={true} header='ASP.NET' content='Microsoft ASP.NET is a set of technologies in the Microsoft .NET Framework for building Web applications and XML Web services.' />
        <AccordionItemDirective header='ASP.NET MVC' content='The Model-View-Controller (MVC) architectural pattern separates an application into three main components: the model, the view, and the controller.' />
        <AccordionItemDirective header='JavaScript' content='JavaScript (JS) is an interpreted computer programming language.It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed.' />
      </AccordionItemsDirective>
    </AccordionComponent>
  );
  function expanding(e: ExpandEventArgs) {
    if (acrdnInstance) {
      let expandCount: number = acrdnInstance.element.querySelectorAll('.e-selected').length;
      let ele: HTMLElement = acrdnInstance.element.querySelectorAll('.e-selected')[0] as HTMLElement;
      if (ele) {
        ele = ele.firstChild as HTMLElement
      }
      if (expandCount === 1 && ele === clickEle) {
        e.cancel = true;
      }
    }
  }
  function clicked(e: AccordionClickArgs) {
    clickEle = (e.originalEvent.target as Element).closest('.e-acrdn-header');
  }
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<ReactApp />);


