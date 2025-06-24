---
layout: post
title: Template in React Common control | Syncfusion
description: Learn here all about Template in Syncfusion React Common control of Syncfusion Essential JS 2 and more.
control: common
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Syncfusion<sup style="font-size:70%">&reg;</sup> React Components

Syncfusion<sup style="font-size:70%">&reg;</sup> React components are rendered with a pre-defined layout or structure that is used to define how the component should be rendered on the user interface. The user wants to customise the appearance of the component and add functionality that is specific to the needs of the application. Syncfusion<sup style="font-size:70%">&reg;</sup> React components have the option to achieve this using template support.

The user can use the JavaScript function to add custom template content to the Syncfusion<sup style="font-size:70%">&reg;</sup> React components. The JavaScript function is the simplest way to define the React components. This function accepts a "props" object argument with data and returns a React element. Refer to the below code snippet to create the template content using JavaScript function.

```
function gridTemplate(props) {
  return (<div className='custom'>
    <ButtonComponent>{props.ShipCountry}</ButtonComponent>
  </div>);
}
```

Here, the JavaScript function name (gridTemplate) is assigned to the `template` property of the Grid component. Refer to the following code snippet.

```js
import './App.css';
import * as React from 'react';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';

export default function App() {

  const data = [
    { OrderID: 10248, CustomerID: 'VINET', ShipCountry: 'France' },
    { OrderID: 10249, CustomerID: 'TOMSP', ShipCountry: 'Germany' },
    { OrderID: 10250, CustomerID: 'HANAR', ShipCountry: 'Brazil' }
  ];

  function gridTemplate(props) {
    return (<div className='custom'>
      <ButtonComponent>{props.ShipCountry}</ButtonComponent>
    </div>);
  }

  return (<GridComponent dataSource={data}>
    <ColumnsDirective>
      <ColumnDirective field='OrderID' width='100'/>
      <ColumnDirective field='CustomerID' width='100'/>
      <ColumnDirective field='ShipCountry' width='100' template={gridTemplate}/>
    </ColumnsDirective>
  </GridComponent>);
};
```

## Stateless template

In React, a state is an object that contains data or information about the component. The component state can be used in React component templates to determine a component's behavior and render information to the user. The state can change based on user input, data from a server, the result of a calculation, or system-generated events.

Whenever the state changes, the component will automatically re-render to display the updated information to the user. This allows for a dynamic and interactive user experience.

For specific needs of the application, users don't want to re-render components during state updates. This can be achieved using the `statelessTemplates` property. It specifies the array of template names where the state value updates need to be ignored. It will increase the performance of the components if users prevent state updates for the templates that are not required. Refer to the following code snippet.

```
  <TreeViewComponent fields={fields} statelessTemplates={['nodeTemplate']} nodeTemplate={nodeTemplate} />
```

If the templates are defined in nested directives of the component, then pass the statelessTemplates property array value as "directiveTemplates" instead of the template names. Refer to the following code snippet.

```
  <GridComponent  dataSource={siteCedarData} statelessTemplates={['directiveTemplates']}>
    <ColumnsDirective>
      <ColumnDirective field="name" headerText="asset" textAlign="Left" />
      <ColumnDirective field="status" headerText="status" textAlign="Center" template={renderStatusCell} />
    </ColumnsDirective>
  </GridComponent>
```