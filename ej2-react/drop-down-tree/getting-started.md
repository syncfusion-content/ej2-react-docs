---
layout: post
title: Getting started with React Drop down tree component | Syncfusion
description:  Checkout and learn about Getting started with React Drop down tree component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains you about how to create a simple **Dropdown Tree** component and configure its available functionalities in React.

## Dependencies

The following list of dependencies are required to use the `Dropdown Tree` component in your application.

```javascript
|-- @syncfusion/ej2-react-dropdowns
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-react-base
    |-- @syncfusion/ej2-dropdowns
        |-- @syncfusion/ej2-lists
        |-- @syncfusion/ej2-inputs
        |-- @syncfusion/ej2-navigations
        |-- @syncfusion/ej2-popups
            |-- @syncfusion/ej2-buttons
```

## Installation and configuration

You can use [`Create-react-app`](https://github.com/facebook/create-react-app) to setup the applications. To install `create-react-app` run the following command.

```bash
npm install -g create-react-app
```
To set-up a React application in TypeScript environment, run the following command.

```
npx create-react-app my-app --template typescript

cd my-app

npm start
```

To set-up a React application in JavaScript environment, run the following command.

```
npx create-react-app my-app

cd my-app

npm start
```

## Adding syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) public registry. You can choose the component that you want to install.

To install Dropdown Tree component, use the following command

```bash
npm install @syncfusion/ej2-react-dropdowns --save
```

## Adding Dropdown Tree component

Now, you can start adding Dropdown Tree component in the application. For getting started, add the Dropdown Tree component in `src/App.tsx` file using following code. Add the below code in the `src/App.tsx` to initialize the Dropdown Tree.

```ts

import { DropDownTreeComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
  return (
      // specifies the tag for render the DropDownTree component
    <DropDownTreeComponent id='dropdowntree'/>
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```

```ts
import { DropDownTreeComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from "react-dom";
function App() {
    return (
    // specifies the tag for render the DropDownTree component
    <DropDownTreeComponent id='dropdowntree'/>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
```

## Adding CSS reference

Import the Dropdown Tree component required CSS references as follows in `src/App.css`.

```css

/* import the Dropdown Tree dependency styles */

@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-dropdowns/styles/material.css";

```

## Binding data source

The Dropdown Tree component can load the data either from local data sources or remote data services. This can be done using the [`dataSource`](https://helpej2.syncfusion.com/react/documentation/api/drop-down-tree/fieldsModel/#datasource) property that is a member of the [`fields`](https://helpej2.syncfusion.com/react/documentation/api/drop-down-tree#fields) property. The dataSource property supports array of JavaScript objects and DataManager. Here, an array of JSON values is passed to the Dropdown Tree component.



```ts

import { DropDownTreeComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App() {
  // definining the dataSource
  let data: { [key: string]: Object }[] = [
     {
        nodeId: '01', nodeText: 'Music',
        nodeChild: [
            { nodeId: '01-01', nodeText: 'Gouttes.mp3' }
        ]
     },
     {
        nodeId: '02', nodeText: 'Videos', expanded: true,
        nodeChild: [
            { nodeId: '02-01', nodeText: 'Naturals.mp4' },
            { nodeId: '02-02', nodeText: 'Wild.mpeg' },
        ]
     },
     {
        nodeId: '03', nodeText: 'Documents',
        nodeChild: [
            { nodeId: '03-01', nodeText: 'Environment Pollution.docx' },
            { nodeId: '03-02', nodeText: 'Global Water, Sanitation, & Hygiene.docx' },
            { nodeId: '03-03', nodeText: 'Global Warming.ppt' },
            { nodeId: '03-04', nodeText: 'Social Network.pdf' },
            { nodeId: '03-05', nodeText: 'Youth Empowerment.pdf' },
        ]
     },
    ];
  let fields: Object = { dataSource: data, value: 'nodeId', text: 'nodeText', child: 'nodeChild' };
  return (
      // specifies the tag for render the DropDownTree component
    <DropDownTreeComponent id="dropdowntree" fields={fields} />
  );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```

```ts
import { DropDownTreeComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
function App() {
    // definining the dataSource
    let data = [
        {
            nodeId: '01', nodeText: 'Music',
            nodeChild: [
                { nodeId: '01-01', nodeText: 'Gouttes.mp3' }
            ]
        },
        {
            nodeId: '02', nodeText: 'Videos', expanded: true,
            nodeChild: [
                { nodeId: '02-01', nodeText: 'Naturals.mp4' },
                { nodeId: '02-02', nodeText: 'Wild.mpeg' },
            ]
        },
        {
            nodeId: '03', nodeText: 'Documents',
            nodeChild: [
                { nodeId: '03-01', nodeText: 'Environment Pollution.docx' },
                { nodeId: '03-02', nodeText: 'Global Water, Sanitation, & Hygiene.docx' },
                { nodeId: '03-03', nodeText: 'Global Warming.ppt' },
                { nodeId: '03-04', nodeText: 'Social Network.pdf' },
                { nodeId: '03-05', nodeText: 'Youth Empowerment.pdf' },
            ]
        },
    ];
    let fields = { dataSource: data, value: 'nodeId', text: 'nodeText', child: 'nodeChild' };
    return (
    // specifies the tag for render the DropDownTree component
    <DropDownTreeComponent id="dropdowntree" fields={fields}/>);
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));
```

## Run the application

After completing the configuration required to render a basic Dropdown Tree, run the following command to display the output in your default browser.

```
npm start
```

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdowntree/basic-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdowntree/basic-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/dropdowntree/basic-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdowntree/basic-cs1" %}
