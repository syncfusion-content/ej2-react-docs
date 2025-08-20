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

Syncfusion<sup style="font-size:70%">&reg;</sup> React components provide support for templates, enabling developers to customize the layout and appearance of UI components to fit specific application requirements. Templates allow for flexible rendering of component content and facilitate the addition of tailored functionality and visual elements.

Templates are typically defined using a JavaScript (React) function that accepts a `props` object and returns a React element. This method enables full access to component data for custom rendering within Syncfusion<sup style="font-size:70%">&reg;</sup> React components. The following example demonstrates creating a custom template function:

```
function gridTemplate(props) {
  return (<div className='custom'>
    <ButtonComponent>{props.ShipCountry}</ButtonComponent>
  </div>);
}
```

In this example, the `gridTemplate` function is assigned to the `template` property of a Grid component. See the code snippet below for implementation:

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

If templates are defined within nested directives, use `statelessTemplates={['directiveTemplates']}` to prevent updates for those templates, as demonstrated here:

```
  <GridComponent  dataSource={siteCedarData} statelessTemplates={['directiveTemplates']}>
    <ColumnsDirective>
      <ColumnDirective field="name" headerText="asset" textAlign="Left" />
      <ColumnDirective field="status" headerText="status" textAlign="Center" template={renderStatusCell} />
    </ColumnsDirective>
  </GridComponent>
```