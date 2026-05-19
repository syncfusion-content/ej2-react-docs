---
layout: post
title: Getting Started With React Gantt Chart Component | Syncfusion
description: Learn how to install and create your first React Gantt Chart component with task scheduling in a few minutes.
control: Getting started
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with React Gantt Chart

This guide walks you through installing and rendering your first React Gantt Chart component. You'll learn how to bind task data, map fields, and display a basic project schedule in just a few minutes.

## Prerequisites

Before you begin, ensure you have:

- [Node.js](https://nodejs.org/) (v14.0 or later)
- npm or yarn package manager
- Basic knowledge of React

## Installation

Create a new React app using Vite with TypeScript:

```bash
npm create vite@latest my-gantt-app -- --template react-ts
cd my-gantt-app
```

> Use `--template react` for JavaScript instead of TypeScript.

Install the Gantt Chart package:

```bash
npm install @syncfusion/ej2-react-gantt
```

## Add theme styles

Import the basic Gantt Chart styles in your `src/App.css`:

```css
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-gantt/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-treegrid/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
```

> **Note:** When using features like editing, toolbar, filtering, or dialogs, you need to import additional component styles:
> ```css
> /* For editing, toolbar, and dialog features */
> @import "../node_modules/@syncfusion/ej2-calendars/styles/tailwind3.css";
> @import "../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
> @import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
> @import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
> @import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
> @import "../node_modules/@syncfusion/ej2-notifications/styles/tailwind3.css";
> 
> /* For rich text editor in dialog notes tab */
> @import "../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css";
> ```

Import the CSS file in `src/App.tsx`:

```typescript
import './App.css';
```

## Create sample data

Define a simple task list with hierarchical relationships. Each task must have a `StartDate` and either a `Duration` or `EndDate` to render properly.

```typescript
const tasks = [
  {TaskID: 1, TaskName: 'Project initiation', StartDate: new Date('2024-04-01'), EndDate: new Date('2024-04-15')},
  {TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('2024-04-01'), Duration: 4, Progress: 70, ParentID: 1},
  {TaskID: 3, TaskName: 'Perform site survey', StartDate: new Date('2024-04-01'), Duration: 4, Progress: 50, ParentID: 1},
  {TaskID: 4, TaskName: 'Soil testing', StartDate: new Date('2024-04-01'), Duration: 3, Progress: 40, ParentID: 1},
  {TaskID: 5, TaskName: 'Project estimation', StartDate: new Date('2024-04-15'), EndDate: new Date('2024-04-25')},
  {TaskID: 6, TaskName: 'Develop floor plan', StartDate: new Date('2024-04-15'), Duration: 5, Progress: 30, ParentID: 5},
  {TaskID: 7, TaskName: 'Estimate project cost', StartDate: new Date('2024-04-15'), Duration: 5, Progress: 20, ParentID: 5}
];
```

## Configure task fields

Map your data fields to Gantt Chart properties using `taskFields`:

```typescript
const taskFields = {
  id: 'TaskID',
  name: 'TaskName',
  startDate: 'StartDate',
  duration: 'Duration',
  progress: 'Progress',
  parentID: 'ParentID'
};
```

### Field mapping reference

| Property | Description | Required |
|----------|-------------|----------|
| `id` | Unique task identifier | Yes |
| `name` | Task display name | Yes |
| `startDate` | Task start date | Yes |
| `duration` | Task duration in days | Yes |
| `progress` | Task completion percentage (0-100) | No |
| `parentID` | Parent task ID for hierarchy | No |

*Either `duration` or `endDate` is required for a task to render properly.

## Render the Gantt component

Put it all together in `src/App.tsx`:

```typescript
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import './App.css';

const taskData = [
  {TaskID: 1, TaskName: 'Project initiation', StartDate: new Date('2024-04-01'), EndDate: new Date('2024-04-15')},
  {TaskID: 2, TaskName: 'Identify site location', StartDate: new Date('2024-04-01'), Duration: 4, Progress: 70, ParentID: 1},
  {TaskID: 3, TaskName: 'Perform site survey', StartDate: new Date('2024-04-01'), Duration: 4, Progress: 50, ParentID: 1},
  {TaskID: 4, TaskName: 'Soil testing', StartDate: new Date('2024-04-01'), Duration: 3, Progress: 40, ParentID: 1},
  {TaskID: 5, TaskName: 'Project estimation', StartDate: new Date('2024-04-08'), EndDate: new Date('2024-04-18')},
  {TaskID: 6, TaskName: 'Develop floor plan', StartDate: new Date('2024-04-08'), Duration: 5, Progress: 30, ParentID: 5},
  {TaskID: 7, TaskName: 'Estimate project cost', StartDate: new Date('2024-04-08'), Duration: 5, Progress: 20, ParentID: 5}
];

export default function App() {
  const taskFields = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID: 'ParentID'
  };

  return (
    <GanttComponent
      dataSource={taskData}
      taskFields={taskFields}
      height="450px"
    />
  );
}
```

## Run the application

```bash
npm run dev
```

Access the running application through your configured development URL.

## Output

You will see a Gantt Chart with:

- Task hierarchy with parent-child relationships
- Timeline view showing task bars
- Progress indicators on each task
- Automatically calculated dates based on duration

The chart displays two parent tasks ("Project initiation" and "Project estimation") with their subtasks shown in a tree structure. Task bars are rendered on the timeline, sized according to their duration and start dates.

You can preview the following sample by clicking the **Preview Sample** button.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/gantt/run-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/gantt/run-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/run-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/gantt/run-cs1" %}

## Next Steps

- **[Key Elements](./key-elements)** - Learn about UI components and interactions
- **[Feature Modules](./module)** - Enable advanced features with module injection
- **[Overview](./overview)** - Explore all available features
