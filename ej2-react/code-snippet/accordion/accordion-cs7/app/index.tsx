import * as React from "react";
import ReactDOM from 'react-dom';
import { AccordionComponent, AccordionItemsDirective, AccordionItemDirective } from '@syncfusion/ej2-react-navigations';

const nestedMusicNew = () => {
  return (
    <div>
      <AccordionComponent>
        <AccordionItemsDirective>
          <AccordionItemDirective header='Track1' />
          <AccordionItemDirective header='Track2' />
        </AccordionItemsDirective>
      </AccordionComponent>
    </div>
  );
}
const nestedVideo = () => {
  return (
    <div>
      <AccordionComponent>
        <AccordionItemsDirective>
          <AccordionItemDirective header='Video Track1' />
          <AccordionItemDirective header='Video Track2' />
        </AccordionItemsDirective>
      </AccordionComponent>
    </div>
  );
}

const nestedMusic = () => {
  return (
    <div>
      <AccordionComponent>
        <AccordionItemsDirective>
          <AccordionItemDirective header='Music Track1' />
          <AccordionItemDirective header='Music Track2' />
          <AccordionItemDirective header='Music New' content={nestedMusicNew} />
        </AccordionItemsDirective>
      </AccordionComponent>
    </div>
  );
}

const nestedImages = () => {
  return (
    <div>
      <AccordionComponent>
        <AccordionItemsDirective>
          <AccordionItemDirective header='Track1' />
          <AccordionItemDirective header='Track2' />
        </AccordionItemsDirective>
      </AccordionComponent>
    </div>
  );
}

const ReactApp = () => {
  return (
    <AccordionComponent>
      <AccordionItemsDirective>
        <AccordionItemDirective header='Video' content={nestedVideo} />
        <AccordionItemDirective header='Music' content={nestedMusic} />
        <AccordionItemDirective header='Images' content={nestedImages} />
      </AccordionItemsDirective>
    </AccordionComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<ReactApp />);