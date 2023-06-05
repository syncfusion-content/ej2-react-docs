import * as React from "react";
import { useState, useEffect } from "react";
import { Ajax } from "@syncfusion/ej2-base";
import ReactDOM from "react-dom";
import { AccordionComponent, AccordionItemsDirective, AccordionItemDirective } from "@syncfusion/ej2-react-navigations";

const ReactApp = () => {
  const [employeeDetails, setEmployeeDetails] = useState("");

  useEffect(() => {
    const ajax = new Ajax("./ajax.html", "GET", true);
    ajax.send().then();
    ajax.onSuccess = (dataSt) => {
      setEmployeeDetails(dataSt);
    };
  }, []);

  const deptContent = () => {
    return (
      <div>
        <ul style={{ margin: '0px', padding: '0px 16px', listStyleType: 'none' }}>
          <li>Testing</li>
          <li>Development</li>
        </ul>
      </div>
    );
  };

  const platformContent = () => {
    return (
      <div>
        <ul style={{ margin: '0px', padding: '0px 16px', listStyleType: 'none' }}>
          <li>Mobile</li>
          <li>Web</li>
        </ul>
      </div>
    );
  };

  return (
    <AccordionComponent>
      <AccordionItemsDirective>
        <AccordionItemDirective header="Department" content={deptContent} />
        <AccordionItemDirective header="Platform" content={platformContent} />
        <AccordionItemDirective header="Employee Details" content={employeeDetails} />
      </AccordionItemsDirective>
    </AccordionComponent>
  );
};

const root = ReactDOM.createRoot(document.getElementById('element'));
root.render(<ReactApp />);
