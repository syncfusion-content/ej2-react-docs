

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AccordionComponent, AccordionItemsDirective, AccordionItemDirective, ExpandEventArgs } from '@syncfusion/ej2-react-navigations';

function ReactApp() {
  let acrdnInstance: AccordionComponent;
  return (
    <AccordionComponent expanding={expanding} ref={acrdn => acrdnInstance = acrdn} >
      <AccordionItemsDirective>
        <AccordionItemDirective header='Video' content='<div id="nested_video"></div>' />
        <AccordionItemDirective header='Music' content='<div id="nested_music"></div>' />
        <AccordionItemDirective header='Images' content='<div id="nested_images"></div>' />
      </AccordionItemsDirective>
    </AccordionComponent>
  );
  function nestedExpand(e: ExpandEventArgs) {
    if (e.element.querySelectorAll('.e-accordion').length > 0) {
      return;
    }
    ReactDOM.render(<AccordionComponent>
      <AccordionItemsDirective>
        <AccordionItemDirective header='New Track1' />
        <AccordionItemDirective header='New Track2' />
      </AccordionItemsDirective>
    </AccordionComponent>, document.getElementById("nested_musicNew") as HTMLElement);
  }
  function expanding(e: ExpandEventArgs) {
    if (e.isExpanded && [].indexOf.call(acrdnInstance.items, e.item) === 0) {
      if (e.element.querySelectorAll('.e-accordion').length > 0) {
        return;
      }
      ReactDOM.render(<AccordionComponent>
        <AccordionItemsDirective>
          <AccordionItemDirective header='Video Track1' />
          <AccordionItemDirective header='Video Track2' />
        </AccordionItemsDirective>
      </AccordionComponent>, document.getElementById("nested_video") as HTMLElement);
    } else if (e.isExpanded && [].indexOf.call(acrdnInstance.items, e.item) === 1) {
      if (e.element.querySelectorAll('.e-accordion').length > 0) {
        return;
      }
      ReactDOM.render(<AccordionComponent expanding={nestedExpand}>
        <AccordionItemsDirective>
          <AccordionItemDirective header='Music Track1' />
          <AccordionItemDirective header='Music Track2' />
          <AccordionItemDirective header='Music New' content='<div id="nested_musicNew"></div>' />
        </AccordionItemsDirective>
      </AccordionComponent>, document.getElementById("nested_music") as HTMLElement);
    } else if (e.isExpanded && [].indexOf.call(acrdnInstance.items, e.item) === 2) {
      if (e.element.querySelectorAll('.e-accordion').length > 0) {
        return;
      }
      ReactDOM.render(<AccordionComponent>
        <AccordionItemsDirective>
          <AccordionItemDirective header='Track1' />
          <AccordionItemDirective header='Track2' />
        </AccordionItemsDirective>
      </AccordionComponent>, document.getElementById("nested_images") as HTMLElement);
    }
  }
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<ReactApp />);


