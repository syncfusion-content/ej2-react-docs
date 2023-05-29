import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import { AccordionComponent, AccordionItemsDirective, AccordionItemDirective } from '@syncfusion/ej2-react-navigations';
import { ExpandEventArgs, AccordionClickArgs } from '@syncfusion/ej2-navigations';
const ReactApp = () => {
  const acrdnInstance = useRef<AccordionComponent>(null);
  const [clickEle, setClickEle] = useState(null);
  const expanding = (e: ExpandEventArgs) => {
    if (acrdnInstance.current) {
      let expandCount: number = acrdnInstance.current.element.querySelectorAll('.e-selected').length;
      let ele: HTMLElement = acrdnInstance.current.element.querySelectorAll('.e-selected')[0] as HTMLElement;
      if (ele) {
        ele = ele.firstChild as HTMLElement;
      }
      if (expandCount === 1 && ele === clickEle) {
        e.cancel = true;
      }
    }
  }
  const clicked = (e: AccordionClickArgs) => {
    setClickEle((e.originalEvent.target as Element).closest('.e-acrdn-header'));
  }
  const aspContent = () => {
    return (<div>
      Microsoft ASP.NET is a set of technologies in the Microsoft .NET Framework for building Web applications and XML Web services.
    </div>);
  }

  const mvcContent = () => {
    return (<div>
      The Model-View-Controller (MVC) architectural pattern separates an application into three main components: the model, the view, and the controller.
    </div>);
  }

  const jsContent = () => {
    return (<div>
      JavaScript (JS) is an interpreted computer programming language.It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser, communicate asynchronously, and alter the document content that was displayed.
    </div>);
  }

  return (
    <AccordionComponent ref={acrdnInstance} expandMode='Single' clicked={clicked} expanding={expanding}>
      <AccordionItemsDirective>
        <AccordionItemDirective expanded={true} header='ASP.NET' content={aspContent} />
        <AccordionItemDirective header='ASP.NET MVC' content={mvcContent} />
        <AccordionItemDirective header='JavaScript' content={jsContent} />
      </AccordionItemsDirective>
    </AccordionComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<ReactApp />);