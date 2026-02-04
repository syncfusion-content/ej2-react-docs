---
layout: post
title: Preact Getting Started with React Gantt Component | Syncfusion
description: Check out and learn about getting started with the Preact Framework and React Gantt Component of Syncfusion Essential JS 2 and more details.
control: Preact
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the React Gantt Component in the Preact Framework

This article outlines the steps required to set up a [Preact](https://preactjs.com/) project and integrate Syncfusion<sup style="font-size:70%">&reg;</sup> React Gantt Chart component.

`Preact` is a fast, lightweight JavaScript library that provides a modern API similar to React. It is optimized for minimal file size and fast performance, making it well-suited for projects where load time and bundle size are important.

## Prerequisites

[System requirements for Syncfusion<sup style="font-size:70%">&reg;</sup> React UI components](../system-requirement)

## Set up the Preact project

To create a new `Preact` project, use one of the commands that are specific to either NPM or Yarn.

```bash
npm init preact@latest
```

or

```bash
yarn create preact
```

Using one of the above commands will lead you to set up additional configurations for the project, as below:

**Step 1: Define the project name** - You can specify the name of the project directly. Let's specify the name of the project as `my-project` for this article.

```bash
T  Preact - Fast 3kB alternative to React with the same modern API
|
*  Project directory:
|  my-project
—      
```

**Step 2: Choose the project language** - Select `JavaScript` as the framework variant to build this Preact project using JavaScript and React.

```bash
T  Preact - Fast 3kB alternative to React with the same modern API
|
*  Project language:
|  > JavaScript
|    TypeScript
—
```

**Step 3: Configure project options** - Configure the project as shown below for this article.

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

**Step 4: Navigate to the project directory** - After completing the above steps to create `my-project`, navigate to the project directory using the following command:

```bash
cd my-project
```

Ensure your HTML has a mount point for the app. For example, in `index.html` add:
```html
<div id="app"></div>
```

Now that `my-project` is ready to run with default settings, let's add Syncfusion<sup style="font-size:70%">&reg;</sup> components to the project.

## Install Syncfusion<sup style="font-size:70%">&reg;</sup> React packages

Syncfusion<sup style="font-size:70%">&reg;</sup> React component packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-react). To use Syncfusion<sup style="font-size:70%">&reg;</sup> React components in the project, install the corresponding npm package.

This guide uses the [React Gantt Chart component](https://www.syncfusion.com/react-components/react-gantt-chart) as an example. To use the React Gantt Chart component in the project, the `@syncfusion/ej2-react-gantt` package needs to be installed using the following command:

```bash
npm install @syncfusion/ej2-react-gantt --save
```

or

```bash
yarn add @syncfusion/ej2-react-gantt
```

## Import Syncfusion<sup style="font-size:70%">&reg;</sup> CSS styles

Themes for Syncfusion<sup style="font-size:70%">&reg;</sup> React components can be added using CSS or SASS styles in the npm packages. Additional options are available via CDN or the [Theme Studio](https://ej2.syncfusion.com/react/documentation/appearance/theme-studio). See the [themes documentation](https://ej2.syncfusion.com/react/documentation/appearance/theme) for full details.

This example uses the `Tailwind 3` theme, imported in the **src/style.css** file:

{% tabs %}
{% highlight css tabtitle="~/src/style.css" %}

@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-gantt/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-treegrid/styles/tailwind3.css';

{% endhighlight %}
{% endtabs %}

> The order of importing CSS styles should be in line with its dependency graph. The Gantt Chart component requires CSS from multiple packages because it depends on other Syncfusion components for its full functionality.

## Add a Syncfusion<sup style="font-size:70%">&reg;</sup> React component

Follow the below steps to add the React Gantt Chart component to the Preact project:

**Step 1:** Import the Gantt Chart component and its required directives in the **src/index.jsx** file.


{% tabs %}
{% highlight js tabtitle="~/src/index.jsx" %}

import { GanttComponent } from '@syncfusion/ej2-react-gantt';

{% endhighlight %}
{% endtabs %}

**Step 2:** Define the Gantt Chart component with the [dataSource](https://ej2.syncfusion.com/react/documentation/api/gantt#datasource) property and column definitions. Declare the values for the `dataSource` property.

{% tabs %}
{% highlight js tabtitle="~/src/index.jsx" %}

import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { render } from 'preact';
import './style.css';
function App () {
	const GanttData = [
		{
			TaskID: 1,
			TaskName: 'Project Initiation',
			StartDate: new Date('04/02/2019'),
			EndDate: new Date('04/21/2019'),
		},
		{ TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, ParentId: 1, Progress: 50 },
		{ TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, ParentId: 1, Progress: 50 },
		{ TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, ParentId: 1, Progress: 50 },
		{
			TaskID: 5,
			TaskName: 'Project Estimation',
			StartDate: new Date('04/02/2019'),
			EndDate: new Date('04/21/2019'),
		},
		{ TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, ParentId: 5, Progress: 50 },
		{ TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3,  ParentId: 5, Progress: 50 },
		{ TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3,  ParentId: 5, Progress: 50 }
	];
    const taskFields= {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID:'ParentId',
    };
        return (
            <GanttComponent dataSource={GanttData} height="450px" taskFields={taskFields}/>
        );
   }
render(<App />, document.getElementById('app'));

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

[Getting Started with Syncfusion<sup style="font-size:70%">&reg;</sup> React UI Component](../getting-started/quick-start)