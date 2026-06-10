---
layout: post
title: Getting started with React Kanban Component | Syncfusion
description: Check out and learn about getting started with the React Kanban component from Syncfusion Essential JS 2.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Kanban Component

This article provides a step-by-step  guide to getting started with the Syncfusion<sup style="font-size:70%">&reg;</sup> React Kanban component.

> **Ready to streamline your Syncfusion<sup style="font-size:70%">&reg;</sup> React development?** Discover the full potential of Syncfusion<sup style="font-size:70%">&reg;</sup> React components with Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant. Effortlessly integrate, configure, and enhance your projects with intelligent, context-aware code suggestions, streamlined setups, and real-time insights—all seamlessly integrated into your preferred AI-powered IDEs like VS Code, Cursor, Syncfusion<sup style="font-size:70%">&reg;</sup> CodeStudio and more. [Explore Syncfusion<sup style="font-size:70%">&reg;</sup> AI Coding Assistant](https://ej2.syncfusion.com/react/documentation/ai-coding-assistant/overview)

## Overview

The Kanban component is composed of:
- **Cards**: tasks displayed on the board; mapped from a `dataSource` via `cardSettings`.
- **Columns**: workflow stages; defined using `keyField`.
- **Swimlanes**: optional grouping of cards; configured with `swimlaneSettings`.

> The `keyField` property maps each column to a specific field in the data source. Each column displays cards whose field value matches its `keyField`.
> The `cardSettings` property defines how each card is displayed, including which fields are used for the header and content.

## Create the React application

Create a new React application using Vite with TypeScript:

```bash
npm create vite@latest my-kanban-app -- --template react-ts
cd my-kanban-app
```

> Use `--template react` for JavaScript instead of TypeScript.

### Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

Once you have created the React application, install the required Syncfusion<sup style="font-size:70%">&reg;</sup> React component package in the application. All Syncfusion<sup style="font-size:70%">&reg;</sup> React (Essential<sup style="font-size:70%">&reg;</sup> JS 2) packages are published on the [npmjs](https://www.npmjs.com/~syncfusionorg) public registry.To install the Kanban component package, use the following command.

```bash
npm install @syncfusion/ej2-react-kanban
```

## Adding CSS reference

Syncfusion provides multiple themes (Tailwind, Material, etc.). Import only the CSS files required by your chosen theme. Example — Tailwind theme: add these imports to `src/App.css`

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
Import the CSS file in `src/App.tsx`:

```typescript
import './App.css';
```

## Adding Kanban component

Start adding the required components to the application. Add the Kanban component to src/App.tsx using the following code:

* Then, add the Kanban component in the application using the following code sample.

Create a new file named `src/datasource.ts` and define the following data source:

```typescript
export let kanbanData: Object[] = [
  {
    Id: 1, Status: 'Open', Summary: 'Analyze the new requirements gathered from the customer.',
    Type: 'Story', Priority: 'Low', Tags: 'Analyze,Customer', Estimate: 3.5,
    Assignee: 'Nancy Davloio', RankId: 1
  },
  {
    Id: 2, Status: 'InProgress', Summary: 'Improve application performance',
    Type: 'Improvement', Priority: 'Normal', Tags: 'Improvement',
    Estimate: 6, Assignee: 'Andrew Fuller', RankId: 1
  },
  {
    Id: 3, Status: 'Open', Summary: 'Arrange a web meeting with the customer to get new requirements.',
    Type: 'Others', Priority: 'Critical', Tags: 'Meeting',
    Estimate: 5.5, Assignee: 'Janet Leverling', RankId: 2
  },
  {
    Id: 4, Status: 'InProgress', Summary: 'Fix the issues reported in the IE browser.',
    Type: 'Bug', Priority: 'Release Breaker', Tags: 'IE',
    Estimate: 2.5, Assignee: 'Janet Leverling', RankId: 2
  },
  {
    Id: 5, Status: 'Testing', Summary: 'Fix the issues reported by the customer.',
    Type: 'Bug', Priority: 'Low', Tags: 'Customer',
    Estimate: 3.5, Assignee: 'Steven walker', RankId: 1
  },
  {
    Id: 6, Status: 'Close', Summary: 'Arrange a web meeting with the customer to get the login page requirements.',
    Type: 'Others', Priority: 'Low', Tags: 'Meeting',
    Estimate: 2, Assignee: 'Michael Suyama', RankId: 1
  },
  {
    Id: 7, Status: 'Validate', Summary: 'Validate new requirements',
    Type: 'Improvement', Priority: 'Low', Tags: 'Validation',
    Estimate: 1.5, Assignee: 'Robert King', RankId: 1
  },
  {
    Id: 8, Status: 'Close', Summary: 'Login page validation',
    Type: 'Story', Priority: 'Release Breaker', Tags: 'Validation,Fix',
    Estimate: 2.5, Assignee: 'Laura Callahan', RankId: 2
  },
  {
    Id: 9, Status: 'Testing', Summary: 'Fix the issues reported in Safari browser.',
    Type: 'Bug', Priority: 'Release Breaker', Tags: 'Fix,Safari',
    Estimate: 1.5, Assignee: 'Nancy Davloio', RankId: 2
  },
  {
    Id: 10, Status: 'Close', Summary: 'Test the application in the IE browser.',
    Type: 'Story', Priority: 'Low', Tags: 'Testing,IE',
    Estimate: 5.5, Assignee: 'Margaret hamilt', RankId: 3
  },
  {
    Id: 11, Status: 'Validate', Summary: 'Validate the issues reported by the customer.',
    Type: 'Story', Priority: 'High', Tags: 'Validation,Fix',
    Estimate: 1, Assignee: 'Andrew Fuller', RankId: 1
  }
];
```

Then update `src/App.tsx` to import the data:

{% raw %}
```typescript
import { extend } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";
import { kanbanData } from './datasource';
import './App.css'

function App() {
    // Clone the data to avoid mutating the original datasource
    const data = extend([], kanbanData, null, true);
    return (
      <KanbanComponent id="kanban" keyField="Status" dataSource={data} 
          cardSettings={{ contentField: "Summary", headerField: "Id" }}>
          <ColumnsDirective>
            <ColumnDirective headerText="To Do" keyField="Open"/>
            <ColumnDirective headerText="In Progress" keyField="InProgress"/>
            <ColumnDirective headerText="Testing" keyField="Testing"/>
            <ColumnDirective headerText="Done" keyField="Close"/>
          </ColumnsDirective>
      </KanbanComponent>);
}
export default App;
```
{% endraw %}

## Run the application

Run the following command to start the development server:

```bash
npm run dev
```

## Output

The Kanban board displays cards based on the kanbanData array. In this example, the board renders:

- A set of workflow columns for `Open`, `InProgress`, `Testing`, and `Close`.
- Cards mapped to each column by the `Status` field.
- Card headers and content using `Id` and `Summary` via `cardSettings`.

You can preview the following sample by clicking the **Preview Sample** button.

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
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/kanban/getting-started-key-field-cs3/app/datasource.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.jsx" %}
{% include code-snippet/kanban/getting-started-key-field-cs3/app/datasource.jsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/kanban/getting-started-key-field-cs3" %}

## See also

- [Kanban columns](./columns.md)
- [Kanban data binding](./data-binding.md)
- [Kanban dialog](./dialog.md)
