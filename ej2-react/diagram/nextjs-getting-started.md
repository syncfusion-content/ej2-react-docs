---
layout: post
title: React Diagram getting started with Next.js | Syncfusion
description: Check out and learn here all about how to use the Syncfusion React UI components in the Next.js project.
control: Next.js
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---


# Creating a Next.js Application Using Syncfusion<sup style="font-size:70%">&reg;</sup> React Components 

This section provides a step-by-step guide for setting up a Next.js application and integrating the Syncfusion<sup style="font-size:70%">&reg;</sup> React Diagram component.

## What is Next.js?

[Next.js](https://nextjs.org/) is a React framework that makes it easy to build fast, SEO-friendly, and user-friendly web applications. It provides features such as server-side rendering, automatic code splitting, routing, and API routes, making it an excellent choice for building modern web applications.

## Prerequisites

Before getting started with the Next.js application, ensure the following prerequisites are met:

* [Node.js 16.8](https://nodejs.org/en) or later.

* The application is compatible with macOS, Windows, and Linux operating systems.

## Create a Next.js application

To create a new `Next.js` application, use one of the commands that are specific to either NPM or Yarn.

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npx create-next-app@latest

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn create next-app

{% endhighlight %}
{% endtabs %}

Using one of the above commands will lead you to set up additional configurations for the project as below:

1.Define the project name: Users can specify the name of the project directly. Let's specify the name of the project as `ej2-nextjs-diagram`.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? » ej2-nextjs-diagram

{% endhighlight %}
{% endtabs %}

2.Select the required packages.

{% tabs %}
{% highlight bash tabtitle="CMD" %}

√ What is your project named? ... ej2-nextjs-diagram
√ Would you like to use TypeScript? ... No / `Yes`
√ Would you like to use ESLint? ... No / `Yes`
√ Would you like to use Tailwind CSS? ... `No` / Yes
√ Would you like to use `src/` directory? ... No / `Yes`
√ Would you like to use App Router? (recommended) ... No / `Yes`
√ Would you like to customize the default import alias? ... `No`/ Yes
Creating a new Next.js app in D:\ej2-nextjs-diagram.

{% endhighlight %}
{% endtabs %}

3.Once complete the above mentioned steps to create `ej2-nextjs-diagram`, navigate to the directory using the below command:

{% tabs %}
{% highlight bash tabtitle="CMD" %}

cd ej2-nextjs-diagram

{% endhighlight %}
{% endtabs %}

The application is ready to run with default settings. Now, let's add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> React packages

Syncfusion<sup style="font-size:70%">&reg;</sup> React component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-react). To use Syncfusion<sup style="font-size:70%">&reg;</sup> React components in the project, install the corresponding npm package.

Here, the [React Diagram component](https://www.syncfusion.com/react-components/react-diagram) is used in the project. To install the React Diagram component, use the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

 npm install @syncfusion/ej2-react-diagrams --save

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn add @syncfusion/ej2-react-diagrams

{% endhighlight %}
{% endtabs %}

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Syncfusion<sup style="font-size:70%">&reg;</sup> React components come with [built-in themes](https://ej2.syncfusion.com/react/documentation/appearance/theme/), which are available in the installed packages. It’s easy to adapt the Syncfusion<sup style="font-size:70%">&reg;</sup> React components to match the style of your application by referring to one of the built-in themes.

Import the `Material` theme into the **src/app/globals.css** file and removed the existing styles in that file, as shown below:

{% tabs %}
{% highlight css tabtitle="globals.css" %}

@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-react-diagrams/styles/material.css";

{% endhighlight %}
{% endtabs %}

> To know more about built-in themes and CSS reference for individual components, refer to the [themes](https://ej2.syncfusion.com/react/documentation/appearance/theme/) section.

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> React component

Follow the below steps to add the React Diagram component to the Next.js project:

1.Before adding the Diagram component to your markup, create a `datasource.tsx` file within the **src/app/** folder and add the Diagram component data.

{% tabs %}
{% highlight ts tabtitle="datasource.tsx" %}

export let data: object[] = [{
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

2.Then, import and define the Diagram component in the **src/app/page.tsx** file, as shown below: 

{% raw %}

~~~
'use client'
import { DataManager, Query } from '@syncfusion/ej2-data';
import { StackPanel, TextElement, DataBinding, HierarchicalTree, DiagramComponent, Inject } from "@syncfusion/ej2-react-diagrams";
import { data } from './datasource';

export default function Home() {
  let items: DataManager = new DataManager(data as JSON[], new Query().take(7));

  return (
    <>
      <h2>Syncfusion React Diagram Component</h2>
      <DiagramComponent id="container" height={'450px'} layout={{
        type: 'HierarchicalTree',
        margin: {
          top: 20,
        },

      }} dataSourceSettings={{
        id: 'Id',
        parentId: 'ReportingPerson',
        dataManager: items,
      }} getNodeDefaults={(node: any) => {
        node.height = 50;
        node.style.fill = '#6BA5D7';
        node.borderColor = 'white';
        node.style.strokeColor = 'white';
        return node;
      }} getConnectorDefaults={(obj: any) => {
        obj.style.strokeColor = '#6BA5D7';
        obj.style.fill = '#6BA5D7';
        obj.style.strokeWidth = 2;
        obj.targetDecorator.style.fill = '#6BA5D7';
        obj.targetDecorator.style.strokeColor = '#6BA5D7';
        obj.targetDecorator.shape = 'None';
        obj.type = 'Orthogonal';
        return obj;
      }} setNodeTemplate={(obj: any) => {
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
~~~

{% endraw %}

## Run the application

To run the application, use the following command:

{% tabs %}
{% highlight bash tabtitle="NPM" %}

npm run dev

{% endhighlight %}
{% highlight bash tabtitle="YARN" %}

yarn run dev

{% endhighlight %}
{% endtabs %}

To learn more about the functionality of the Diagram component, refer to the [documentation](https://ej2.syncfusion.com/react/documentation/diagram/getting-started#module-injection).

> [View the NEXT.js Diagram sample in the GitHub repository](https://github.com/SyncfusionExamples/ej2-nextjs-diagram).
