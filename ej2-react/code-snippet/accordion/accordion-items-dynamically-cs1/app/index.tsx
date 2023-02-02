


import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { AccordionComponent, AccordionItemDirective, AccordionItemsDirective, ExpandEventArgs, AccordionItemModel } from '@syncfusion/ej2-react-navigations';
// @ts-ignore
import { accordion } from '../datasource.tsx';

let dbFlag: number = 0;
let dynamciAcrdnCount: number = 2;
function ReactApp() {

  let acrdnInstance: AccordionComponent | any;
  return (
    <div className='control-pane'>
      <div className='control-section accordion-control-section'>
        <div className='control Accordion-sample'>
          {/* Render the Accoridon Component */}
          <AccordionComponent expanded={expanded} ref={acrdn => acrdnInstance = acrdn}>
            <AccordionItemsDirective>
              <AccordionItemDirective header='ASP.NET' content='Microsoft ASP.NET is a set of technologies in the Microsoft .NET Framework for building Web applications and XML Web services.' />
              <AccordionItemDirective header='ASP.NET Core' content='ASP.NET Core is a free and open-source web framework, and the next generation of ASP.NET, developed by Microsoft and the community. It is a modular framework that runs on both the full .NET Framework, on Windows, and the cross-platform .NET Core.' />
              <AccordionItemDirective header='ASP.NET MVC' content='The Model-View-Controller (MVC) architectural pattern separates an application into three main components: the model, the view, and the controller.' />
            </AccordionItemsDirective>
          </AccordionComponent>
        </div></div>
    </div>

  );
  function expanded(e: ExpandEventArgs) {
    let Elementindex = document.getElementsByClassName("e-expand-state e-selected e-active")[0];
    if ([].slice.call((e.element as any).parentElement.children).indexOf(e.element) === [].slice.call((e.element as any).parentElement.children).indexOf(Elementindex)) {
      let array: AccordionItemModel[] = accordion as AccordionItemModel[];
      for (let i: number = 0; i < dynamciAcrdnCount; i++) {
        if (dbFlag === array.length) {
          return;
        }
        acrdnInstance.addItem(array[dbFlag], acrdnInstance.items.length);
        ++dbFlag;
      }
    }
  }
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<ReactApp />);



