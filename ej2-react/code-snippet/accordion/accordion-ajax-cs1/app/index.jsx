import * as React from "react";
import * as ReactDOM from "react-dom";
import { Ajax } from '@syncfusion/ej2-base';
import { AccordionComponent, AccordionItemsDirective, AccordionItemDirective } from '@syncfusion/ej2-react-navigations';
function ReactApp(props) {
    return (<AccordionComponent>
      <AccordionItemsDirective>
        <AccordionItemDirective header='Department' content='#content1'/>
        <AccordionItemDirective header='Platform' content='#content2'/>
        <AccordionItemDirective header='Employee Details' content={props.data}/>
      </AccordionItemsDirective>
    </AccordionComponent>);
}
let ajax = new Ajax('./ajax.html', 'GET', true);
ajax.send().then();
ajax.onSuccess = (dataSt) => {
    ReactDOM.render(<ReactApp data={dataSt}/>, document.getElementById("element"));
};
const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<ReactApp />);
