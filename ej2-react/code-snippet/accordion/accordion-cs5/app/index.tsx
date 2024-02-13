

import { AccordionComponent } from '@syncfusion/ej2-react-navigations';
import * as React from "react";
import * as ReactDOM from "react-dom";

const ReactApp = () => {
  return (
    <AccordionComponent>
      <div>
        <div>
          <div> ASP.NET </div>
        </div>
        <div>
          <div>
            Microsoft ASP.NET is a set of technologies in the Microsoft .NET Framework for building Web applications and XML Web services.
          </div>
        </div>
      </div>
      <div>
        <div>
          <div> ASP.NET MVC </div>
        </div>
        <div>
          <div>
            The Model-View-Controller (MVC) architectural pattern separates an application into three main components: the model, the view, and the controller.
          </div>
        </div>
      </div>
      <div>
        <div>
          <div> JavaScript </div>
        </div>
        <div>
          <div>
            JavaScript (JS) is an interpreted computer programming language.It was originally implemented as part of web browsers so that client-side scripts could interact with the user, control the browser.
          </div>
        </div>
      </div>
    </AccordionComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<ReactApp />);


