---
layout: post
title: Template in React Common control | Syncfusion
description: Learn how to use templates in Syncfusion React components to customize layouts, render data, and optimize performance with stateless templates.
control: common
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Templates in Syncfusion<sup style="font-size:70%">&reg;</sup> React Components

Syncfusion<sup style="font-size:70%">&reg;</sup> React components support templates that let developers customize component layout and presentation. Templates provide a flexible way to render content and to inject tailored markup or behavior into a component while keeping the component API surface consistent.

Templates are implemented as React functions that receive a `props` object and return a React Element. The exact shape of `props` depends on the control and template type: for Grid or TreeGrid column templates `props` is the current row's data object; for TreeView `nodeTemplate` it is the node data; for ListView templates it is the item data; for charts it can be a point or series object. Templates should return valid React elements, avoid side effects, and sanitize any raw HTML (or enable `enableHtmlSanitizer`) to prevent XSS. The following example demonstrates a simple custom template function:

```jsx
function gridTemplate(props) {
  return (
    <div className='custom'>
      <ButtonComponent>{props.ShipCountry}</ButtonComponent>
    </div>
  );
}
```

In this example, the `gridTemplate` function is assigned to the `template` property of a Grid component:

```jsx
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
    return (
      <div className='custom'>
        <ButtonComponent>{props.ShipCountry}</ButtonComponent>
      </div>
    );
  }

  return (
    <GridComponent dataSource={data}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' width='100'/>
        <ColumnDirective field='CustomerID' width='100'/>
        <ColumnDirective field='ShipCountry' width='100' template={gridTemplate}/>
      </ColumnsDirective>
    </GridComponent>
  );
};
```

## Stateless Template

In React, component state drives updates and causes re-rendering. Templates that do not rely on local component state can be excluded from state-driven re-renders to improve performance by using the `statelessTemplates` property.

The `statelessTemplates` property accepts an array of strings. Provide the exact template property names (for example, `['nodeTemplate']` for a TreeView) to exclude those templates from React state updates:

```jsx
<TreeViewComponent fields={fields} statelessTemplates={['nodeTemplate']} nodeTemplate={nodeTemplate} />
```

When templates are declared inside nested directives (for example, `ColumnDirective` within a `GridComponent`), use the reserved token `'directiveTemplates'` to prevent updates for all directive-based templates in that control:

```jsx
<GridComponent dataSource={siteCedarData} statelessTemplates={['directiveTemplates']}>
  <ColumnsDirective>
    <ColumnDirective field="name" headerText="Asset" textAlign="Left" />
    <ColumnDirective field="status" headerText="Status" textAlign="Center" template={renderStatusCell} />
  </ColumnsDirective>
</GridComponent>
```

Do not mark templates that depend on React state as stateless, since they will not update when state changes. Check the component API reference for exact support and behavior.

When templates render interactive or visual elements, include appropriate ARIA attributes and keyboard focus handling; sanitize any injected HTML to ensure accessibility and security.