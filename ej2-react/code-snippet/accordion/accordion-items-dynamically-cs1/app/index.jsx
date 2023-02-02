import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { AccordionComponent, AccordionItemDirective, AccordionItemsDirective } from '@syncfusion/ej2-react-navigations';
// @ts-ignore
import { accordion } from '../datasource.tsx';
let dbFlag = 0;
let dynamciAcrdnCount = 2;
function ReactApp() {
    let acrdnInstance;
    return (<div className='control-pane'>
      <div className='control-section accordion-control-section'>
        <div className='control Accordion-sample'>
          {/* Render the Accoridon Component */}
          <AccordionComponent expanded={expanded} ref={acrdn => acrdnInstance = acrdn}>
            <AccordionItemsDirective>
              <AccordionItemDirective header='ASP.NET' content='Microsoft ASP.NET is a set of technologies in the Microsoft .NET Framework for building Web applications and XML Web services.'/>
              <AccordionItemDirective header='ASP.NET Core' content='ASP.NET Core is a free and open-source web framework, and the next generation of ASP.NET, developed by Microsoft and the community. It is a modular framework that runs on both the full .NET Framework, on Windows, and the cross-platform .NET Core.'/>
              <AccordionItemDirective header='ASP.NET MVC' content='The Model-View-Controller (MVC) architectural pattern separates an application into three main components: the model, the view, and the controller.'/>
            </AccordionItemsDirective>
          </AccordionComponent>
        </div></div>
    </div>);
    function expanded(e) {
        let Elementindex = document.getElementsByClassName("e-expand-state e-selected e-active")[0];
        if ([].slice.call(e.element.parentElement.children).indexOf(e.element) === [].slice.call(e.element.parentElement.children).indexOf(Elementindex)) {
            let array = accordion;
            for (let i = 0; i < dynamciAcrdnCount; i++) {
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
