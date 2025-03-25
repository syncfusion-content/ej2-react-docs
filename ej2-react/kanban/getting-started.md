---
layout: post
title: Getting started with React Kanban component | Syncfusion
description:  Checkout and learn about Getting started with React Kanban component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This article provides a step-by-step introduction to get started with the Syncfusion<sup style="font-size:70%">&reg;</sup> React Kanban component.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components](https://ej2.syncfusion.com/react/documentation/system-requirement)

## Dependencies

The following list of dependencies are required to use the `Kanban` component in the application.

```ts
|-- @syncfusion/ej2-react-kanban
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-kanban
        |-- @syncfusion/ej2-layouts
        |-- @syncfusion/ej2-navigations
          |-- @syncfusion/ej2-inputs
            |-- @syncfusion/ej2-splitbuttons
          |-- @syncfusion/ej2-lists
          |-- @syncfusion/ej2-popups
            |-- @syncfusion/ej2-buttons
```

## Create the React application

To set-up, a React application, choose any of the following ways. The best and easiest way is to use the [Create-react-app](https://github.com/facebookincubator/create-react-app). It sets up the development environment in JavaScript and improvises the application for production. Refer to the [installation instructions](https://github.com/facebook/create-react-app#creating-an-app) of the `Create-react-app`

```bash
npx create-react-app my-app
cd my-app
npm start
```

or

```bash
yarn create react-app my-app
cd my-app
yarn start
```

To set-up a React application in the `TypeScript` environment, run the following command.

```bash
npx create-react-app my-app --template typescript
cd my-app
npm start
```

Besides using the [npx](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b) runner tool, also create an application from the `npm init`. To begin with `npm init`, upgrade the `npm` version to `npm 6+`.

```bash
npm init react-app my-app
cd my-app
npm start
```

### Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

Once you have created the React application, install the required Syncfusion<sup style="font-size:70%">&reg;</sup> React component package in the application. All Syncfusion<sup style="font-size:70%">&reg;</sup> React (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are published on the [npmjs](https://www.npmjs.com/~syncfusionorg) public registry.

To install the Kanban component package, use the following command.

```bash
npm install @syncfusion/ej2-react-kanban --save
```

or

```bash
yarn add @syncfusion/ej2-react-kanban
```

## Import the Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

After installing the Syncfusion<sup style="font-size:70%">&reg;</sup> component packages in the application, import the required themes based on the components used.

The Syncfusion<sup style="font-size:70%">&reg;</sup> React component comes with built-in [themes](https://ej2.syncfusion.com/react/documentation/appearance/theme), which are available in installed packages. It is quite simple to adapt the Syncfusion<sup style="font-size:70%">&reg;</sup> React components based on the application style by referring to any of the built-in themes. Import the `Material` theme for the Kanban component.

Import the CSS styles for the Kanban component and its dependencies in the `src/App.css` file.

```css
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import "../node_modules/@syncfusion/ej2-layouts/styles/material.css";
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-react-kanban/styles/material.css";
```

Check out the [Themes topic](https://ej2.syncfusion.com/react/documentation/appearance/theme) to know more about built-in themes and different ways to refer to themes in React applications.

## Add Kanban component to the application

Start adding the required components to the application. Add the Kanban component in the `src/App.js` or `src/App.tsx` file using the following code.

* Before adding the Kanban component to the markup, import the Kanban component in the `src/App.js` or `src/App.tsx` file.

```bash
import { KanbanComponent } from '@syncfusion/ej2-react-kanban';
```

* Then, add the Kanban component in the application using the following code sample.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/kanban/getting-started-empty-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/kanban/getting-started-empty-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/kanban/getting-started-empty-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/getting-started-empty-cs1" %}

## Run the application

All are set. Now, run the application using the following command.

```bash
npm start
```

or

```bash
yarn start
```

The output will display the kanban header.

## Populating cards

To populate the empty Kanban with cards, define the local JSON data or remote data using the `dataSource` property. To define `dataSource`, the mandatory fields in JSON object should be relevant to `keyField`. In the following example, you can see the cards defined with default fields such as ID, Summary, and Status.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/kanban/getting-started-key-field-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/kanban/getting-started-key-field-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/kanban/getting-started-key-field-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/getting-started-key-field-cs3" %}

## Enable swimlane

`Swimlane` can be enabled by mapping the fields `swimlaneSettings.keyField` to appropriate column name in dataSource. This enables the grouping of the cards based on the mapped column values.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/kanban/getting-started-swimlane-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/kanban/getting-started-swimlane-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/kanban/getting-started-swimlane-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/getting-started-swimlane-cs1" %}
