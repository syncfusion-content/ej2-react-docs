---
layout: post
title: Preact Getting Started with React Diagram Component | Syncfusion
description: Check out and learn about getting started with the Preact Framework and React Diagram Component of Syncfusion Essential JS 2 and more details.
control: Preact
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Diagram Component in the Preact Framework

This article provides a step-by-step guide for setting up a [Preact](https://preactjs.com/) project and integrating the Syncfusion React Diagram component.

`Preact` is a fast and lightweight JavaScript library for building user interfaces. It's often used as an alternative to larger frameworks like React. The key difference is that Preact is designed to be smaller in size and faster in performance, making it a good choice for projects where file size and load times are critical factors. 

## Prerequisites

[System requirements for Syncfusion React UI components](../system-requirement)

## Set up the Preact project

To create a new `Preact` project, use one of the commands that are specific to either NPM or Yarn.

```bash
npm init preact
```

or

```bash
yarn init preact
```

Using one of the above commands will lead you to set up additional configurations for the project, as below:

1\. Define the project name: We can specify the name of the project directly. Let's specify the name of the project as `my-project` for this article.

```bash
T  Preact - Fast 3kB alternative to React with the same modern API
|
*  Project directory:
|  my-project
—      
```

2\. Choose `JavaScript` as the framework variant to build this Preact project using JavaScript and React.

```bash
T  Preact - Fast 3kB alternative to React with the same modern API
|
*  Project language:
|  > JavaScript
|    TypeScript
—
```

3\. Then configure the project as below for this article.

```bash
T  Preact - Fast 3kB alternative to React with the same modern API
|
*  Use router?
|    Yes / > No
—
|
*  Prerender app (SSG)?
|    Yes / > No
—
|
*  Use ESLint?
|    Yes / > No
—
```

5\. Upon completing the aforementioned steps to create `my-project`, run the following command to jump into the project directory:

```bash
cd my-project
```

Now that `my-project` is ready to run with default settings, let's add Syncfusion components to the project.

## Add the Syncfusion React packages

Syncfusion React component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-react). To use Syncfusion React components in the project, install the corresponding npm package.

This article uses the [React Diagram component](https://www.syncfusion.com/react-components/react-diagram) as an example. To use the React Diagram component in the project, the `@syncfusion/ej2-react-diagrams` package needs to be installed using the following command:

```bash
npm install @syncfusion/ej2-react-diagrams --save
```

or

```bash
yarn add @syncfusion/ej2-react-diagrams
```

## Import Syncfusion CSS styles

You can import themes for the Syncfusion React component in various ways, such as using CSS or SASS styles from npm packages, CDN, CRG and [Theme Studio](https://ej2.syncfusion.com/react/documentation/appearance/theme-studio/). Refer to [themes topic](https://ej2.syncfusion.com/react/documentation/appearance/theme/) to know more about built-in themes and different ways to refer to theme's in a React project.

In this article, the `Material 3` theme is applied using CSS styles, which are available in installed packages. The necessary `Material 3` CSS styles for the Diagram component and its dependents were imported into the **src/style.css** file.

{% tabs %}
{% highlight css tabtitle="~/src/style.css" %}

@import "../node_modules/@syncfusion/ej2-base/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material3.css";
@import "../node_modules/@syncfusion/ej2-react-diagrams/styles/material3.css";

{% endhighlight %}
{% endtabs %}

> The order of importing CSS styles should be in line with its dependency graph.

## Add the Syncfusion React component

Follow the below steps to add the React Diagram component to the Vite project:

1\. Before adding the Diagram component to your markup, create a **datasource.jsx** file within the **src** folder and add the Diagram component data.

{% tabs %}
{% highlight js tabtitle="~/src/datasource.jsx" %}

export let data = [{
    'Id': 'parent',
    'Name': 'Maria Anders',
    'Designation': 'Managing Director',
    'IsExpand': 'true',
    'RatingColor': '#C34444'
},
{
    'Id': 1,
    'Name': 'Ana Trujillo',
    'Designation': 'Project Manager',
    'IsExpand': 'false',
    'RatingColor': '#68C2DE',
    'ReportingPerson': 'parent'
},
{
    'Id': 2,
    'Name': 'Anto Moreno',
    'Designation': 'Project Lead',
    'IsExpand': 'false',
    'RatingColor': '#93B85A',
    'ReportingPerson': 'parent'
},
{
    'Id': 3,
    'Name': 'Thomas Hardy',
    'Designation': 'Senior S/w Engg',
    'IsExpand': 'false',
    'RatingColor': '#68C2DE',
    'ReportingPerson': 1
},
{
    'Id': 4,
    'Name': 'Christina kaff',
    'Designation': 'S/w Engg',
    'IsExpand': 'false',
    'RatingColor': '#93B85A',
    'ReportingPerson': 2
},
{
    'Id': 5,
    'Name': 'Hanna Moos',
    'Designation': 'Project Trainee',
    'IsExpand': 'true',
    'RatingColor': '#D46E89',
    'ReportingPerson': 2
}];

{% endhighlight %}
{% endtabs %}

2\. Then, import and define the Diagram component in the **src/index.jsx** file, as shown below:

{% tabs %}
{% highlight js tabtitle="~/src/index.jsx" %}
{% raw %}

import { DataManager, Query } from '@syncfusion/ej2-data';
import { StackPanel, TextElement, DataBinding, HierarchicalTree, DiagramComponent, Inject } from "@syncfusion/ej2-react-diagrams";
import { data } from './datasource';
import { render } from 'preact';

export default function App() {
  let items = new DataManager(data , new Query().take(7));

  return (
    <>
      <DiagramComponent id="container" height={'450px'} layout={{
        type: 'HierarchicalTree',
        margin: {
          top: 20,
        },

      }} dataSourceSettings={{
        id: 'Id',
        parentId: 'ReportingPerson',
        dataManager: items,
      }} getNodeDefaults={(node) => {
        node.height = 50;
        node.style.fill = '#6BA5D7';
        node.borderColor = 'white';
        node.style.strokeColor = 'white';
        return node;
      }} getConnectorDefaults={(obj) => {
        obj.style.strokeColor = '#6BA5D7';
        obj.style.fill = '#6BA5D7';
        obj.style.strokeWidth = 2;
        obj.targetDecorator.style.fill = '#6BA5D7';
        obj.targetDecorator.style.strokeColor = '#6BA5D7';
        obj.targetDecorator.shape = 'None';
        obj.type = 'Orthogonal';
        return obj;
      }} setNodeTemplate={(obj) => {
        let content = new StackPanel();
        content.id = obj.id + '_outerstack';
        content.style.strokeColor = 'darkgreen';
        content.style.fill = '#6BA5D7';
        content.orientation = 'Horizontal';
        content.padding = {
          left: 5,
          right: 10,
          top: 5,
          bottom: 5,
        };
        let innerStack = new StackPanel();
        innerStack.style.strokeColor = 'none';
        innerStack.style.fill = '#6BA5D7';
        innerStack.margin = {
          left: 5,
          right: 0,
          top: 0,
          bottom: 0,
        };
        innerStack.id = obj.id + '_innerstack';
        let text = new TextElement();
        text.content = obj.data['Name'];
        text.style.color = 'white';
        text.style.strokeColor = 'none';
        text.style.fill = 'none';
        text.id = obj.id + '_text1';
        let desigText = new TextElement();
        desigText.margin = {
          left: 0,
          right: 0,
          top: 5,
          bottom: 0,
        };
        desigText.content = obj.data['Designation'];
        desigText.style.color = 'white';
        desigText.style.strokeColor = 'none';
        desigText.style.fill = 'none';
        desigText.style.textWrapping = 'Wrap';
        desigText.id = obj.id + '_desig';
        innerStack.children = [text, desigText];
        content.children = [innerStack];
        return content;
      }} >
        <Inject services={[DataBinding, HierarchicalTree]} />
      </DiagramComponent>
    </>
  )
}

render(<App />, document.querySelector('#app'));

{% endraw %}
{% endhighlight %}
{% endtabs %}

## Run the project

To run the project, use the following command:

```bash
npm run dev
```

or

```bash
yarn run dev
```

The output will appear as follows:

![preact](./images/preact.png)

## See also

[Getting Started with the Syncfusion React UI Component](../getting-started/quick-start)