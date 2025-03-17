---
layout: post
title: Material UI components in Syncfusion React Component | Syncfusion
description: Learn here all about integration of Material-UI components in Syncfusion EJ2 React UI components and more.
control: MaterialUI
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Integration of Material-UI Components

[Material-UI](https://mui.com/) is a popular library for building user interfaces in React applications. Material-UI provides a set of pre-designed and customizable UI components following Material Design principles. These components include buttons, forms, navigation bars, modals, cards, and many others, that can be easily integrated into your application. `Material-UI` components come with built-in styles and responsive behavior, making it convenient to create visually appealing and consistent user interfaces.

The Syncfusion<sup style="font-size:70%">&reg;</sup> Material theme is designed to follow the Material-UI guidelines, ensuring a consistent appearance with Material-UI components. This makes it seamless to integrate Syncfusion<sup style="font-size:70%">&reg;</sup> React components with existing Material-UI components, allowing you to create a unified and visually appealing application.

This guide will provide you with a step-by-step process for integrating Material-UI component into the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component.

## Set up the React project

1\. Set up a new `React` project by referring to the Syncfusion<sup style="font-size:70%">&reg;</sup> Grid component's [Getting Started](../grid/getting-started) documentation.

2\. Install the necessary `Material-UI` dependencies using the command:

```bash
npm install @mui/material @emotion/react @emotion/styled --save
```

## Integrate Material-UI components

Integrate `Material-UI` components with React Grid component effortlessly using the `template` property. Define Material-UI components within the `template` function as shown in the code snippet below:

{% tabs %}
{% highlight html tabtitle="~/src/App.jsx" %}

import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-grids';
import { Button } from '@mui/material';
import '@syncfusion/ej2-react-grids/styles/material.css';

const dataSource = [
  {
    OrderID: 10248, CustomerID: 'VINET'
  },
  {
    OrderID: 10249, CustomerID: 'TOMSP'
  },
  {
    OrderID: 10250, CustomerID: 'HANAR'
  }
];

function App() {

  const [data, setData] = React.useState(dataSource);

  function materialTemplate(props) {
    return (
      <div>
        <Button id={props.OrderID} onClick={(e) => {
          setData((prev) => prev.filter((obj) => {
            return obj.OrderID.toString() !== e.target.id;
          }));
        }}>Delete</Button>
      </div>
    );
  }

  return (
    <GridComponent dataSource={data} width='600px' allowKeyboard={false} >
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' />
        <ColumnDirective field='CustomerID' headerText='Customer ID' />
        <ColumnDirective template={materialTemplate} width='100px' />
      </ColumnsDirective>
    </GridComponent>
  );
}
export default App;

{% endhighlight %}
{% endtabs %}

## Run the project

To run the project, use the following command:

```bash
npm start
```

The output will appear as follows:

![Material-UI output](../appearance/images/material-ui.png)