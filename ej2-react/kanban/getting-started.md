---
layout: post
title: Getting started with React Kanban Component | Syncfusion
description:  Checkout and learn about Getting started with React Kanban component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Kanban Component

This article provides a step-by-step introduction to get started with the Syncfusion<sup style="font-size:70%">&reg;</sup> React Kanban component.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview)

## Overview

The Kanban component consists of:
- **Cards**: Represent tasks, mapped to a `dataSource` via `cardSettings`.
- **Columns**: Define workflow stages, mapped using `keyField`.
- **Swimlanes**: Group cards by categories, configured with `swimlaneSettings`.

## Create the React application

To create a new React application, run the following command.

```bash
npm create vite@7 my-app
```
To set-up a React application in TypeScript environment, run the following command.

```bash
npm create vite@7 my-app -- --template react-ts
cd my-app
npm run dev
```

### Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

Once you have created the React application, install the required Syncfusion<sup style="font-size:70%">&reg;</sup> React component package in the application. All Syncfusion<sup style="font-size:70%">&reg;</sup> React (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are published on the [npmjs](https://www.npmjs.com/~syncfusionorg) public registry.To install the Kanban component package, use the following command.

```bash
npm install @syncfusion/ej2-react-kanban
```

## Adding CSS reference

The following CSS files are available in ../node_modules/@syncfusion package folder. This can be added as reference in src/App.css.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-kanban/styles/tailwind3.css';
```

## Adding Kanban component

Start adding the required components to the application. Add the Kanban component in the `src/App.tsx` file using the following code.

* Then, add the Kanban component in the application using the following code sample.

```typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";

function App() {
  return (
    <KanbanComponent>
      <ColumnsDirective>
        <ColumnDirective headerText="To Do" keyField="Open" />
        <ColumnDirective headerText="In Progress" keyField="InProgress" />
        <ColumnDirective headerText="Testing" keyField="Testing" />
        <ColumnDirective headerText="Done" keyField="Close" />
      </ColumnsDirective>
  </KanbanComponent>
  );
}

export default App;
```

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

The output will display the kanban header.

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

## Populating cards

To populate the empty Kanban with cards, define the local JSON data or remote data using the [dataSource](https://ej2.syncfusion.com/react/documentation/api/kanban#datasource) property. To define `dataSource`, the mandatory fields in JSON object should be relevant to [keyField](https://ej2.syncfusion.com/react/documentation/api/kanban#keyfield). In the following example, you can see the cards defined with default fields such as ID, Summary, and Status.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/kanban/getting-started-key-field-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/kanban/getting-started-key-field-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/kanban/getting-started-key-field-cs3/index.html %}
{% endhighlight %}
{% highlight tsx tabtitle="datasource.tsx" %}
{% include code-snippet/kanban/getting-started-key-field-cs3/app/datasource.tsx %}
{% endhighlight %}
{% highlight tsx tabtitle="datasource.jsx" %}
{% include code-snippet/kanban/getting-started-key-field-cs3/app/datasource.jsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/getting-started-key-field-cs3" %}

## Enable swimlane

`Swimlane` can be enabled by mapping the fields [swimlaneSettings.keyField](https://ej2.syncfusion.com/react/documentation/api/kanban#swimlanesettings) to appropriate column name in dataSource. This enables the grouping of the cards based on the mapped column values.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/kanban/getting-started-swimlane-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/kanban/getting-started-swimlane-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/kanban/getting-started-swimlane-cs1/index.html %}
{% endhighlight %}
{% highlight tsx tabtitle="datasource.tsx" %}
{% include code-snippet/kanban/getting-started-swimlane-cs1/app/datasource.tsx %}
{% endhighlight %}
{% highlight tsx tabtitle="datasource.jsx" %}
{% include code-snippet/kanban/getting-started-swimlane-cs1/app/datasource.jsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/getting-started-swimlane-cs1" %}
