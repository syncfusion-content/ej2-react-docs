---
layout: post
title: Getting started with React Gantt component | Syncfusion
description:  Checkout and learn about Getting started with React Gantt component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Getting started in React Gantt control

This section explains you the steps required to create a simple Essential<sup style="font-size:70%">&reg;</sup> JS 2 Gantt in a React application and demonstrates its basic features.

To get started quickly with React Gantt Chart the following video explains the project configuration and basic Gantt chart features behaviors:

{% youtube "https://www.youtube.com/watch?v=pCg5hUSKRh8" %}

## Dependencies

Following is the list of minimum dependencies required to use the Gantt.

```javascript
|-- @syncfusion/ej2-react-gantt
    |-- @syncfusion/ej2-grids
    |-- @syncfusion/ej2-gantt
    |-- @syncfusion/ej2-layouts
    |-- @syncfusion/ej2-treegrid

```

## Setup for Local Development

To easily set up a React application, use `create-vite-app`, which provides a faster development environment, smaller bundle sizes, and optimized builds compared to traditional tools like `create-react-app`. For detailed steps, refer to the Vite [installation instructions](https://vitejs.dev/guide/). Vite sets up your environment using JavaScript and optimizes your application for production.

> **Note:**  To create a React application using `create-react-app`, refer to this [documentation](https://ej2.syncfusion.com/react/documentation/getting-started/create-app) for more details.

To create a new React application, run the following command.

```bash
npm create vite@latest my-app
```
To set-up a React application in TypeScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm run dev
```
To set-up a React application in JavaScript environment, run the following command.

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm run dev
```

## Adding Syncfusion<sup style="font-size:70%">&reg;</sup> packages

All the available Essential<sup style="font-size:70%">&reg;</sup> JS 2 packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) public registry.To install Gantt component, use the following command

```bash
npm install @syncfusion/ej2-react-gantt --save
```

## Adding CSS reference

 Add components style as given below in src/App.css.

```css
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-gantt/styles/material.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-richtexteditor/styles/material.css';
@import '../node_modules/@syncfusion/ej2-treegrid/styles/material.css';
```

> To refer App.css in the application then import it in the src/App.tsx file.

## Adding Gantt component

Now, you can start adding React Gantt component in the application. For getting started, add the Gantt component in `src/App.tsx` file using following code.

Place the following gantt code in the src/App.tsx.



```ts
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './App.css';

const GanttData: object[] = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
  },
  {
    TaskID: 2,
    TaskName: 'Identify Site location',
    StartDate: new Date('04/02/2019'),
    Duration: 4,
    Progress: 50,
    ParentId: 1,
  },
  {
    TaskID: 3,
    TaskName: 'Perform Soil test',
    StartDate: new Date('04/02/2019'),
    Duration: 4,
    Progress: 50,
    ParentId: 1,
  },
  {
    TaskID: 4,
    TaskName: 'Soil test approval',
    StartDate: new Date('04/02/2019'),
    Duration: 4,
    Progress: 50,
    ParentId: 1,
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
  },
  {
    TaskID: 6,
    TaskName: 'Develop floor plan for estimation',
    StartDate: new Date('04/04/2019'),
    Duration: 3,
    Progress: 50,
    ParentId: 5,
  },
  {
    TaskID: 7,
    TaskName: 'List materials',
    StartDate: new Date('04/04/2019'),
    Duration: 3,
    Progress: 50,
    ParentId: 5,
  },
  {
    TaskID: 8,
    TaskName: 'Estimation approval',
    StartDate: new Date('04/04/2019'),
    Duration: 3,
    Progress: 50,
    ParentId: 5,
  },
];
function App () {
    const taskFields: any = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID:'ParentId'
    };
        return (
            <GanttComponent 
                dataSource={GanttData} 
                height="450px" 
                taskFields={taskFields}
            />
        );
   }
ReactDOM.render(<App />, document.getElementById('root'));
```

```ts
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './App.css';
const GanttData = [
  {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
  },
  {
    TaskID: 2,
    TaskName: 'Identify Site location',
    StartDate: new Date('04/02/2019'),
    Duration: 4,
    Progress: 50,
    ParentId: 1,
  },
  {
    TaskID: 3,
    TaskName: 'Perform Soil test',
    StartDate: new Date('04/02/2019'),
    Duration: 4,
    Progress: 50,
    ParentId: 1,
  },
  {
    TaskID: 4,
    TaskName: 'Soil test approval',
    StartDate: new Date('04/02/2019'),
    Duration: 4,
    Progress: 50,
    ParentId: 1,
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
  },
  {
    TaskID: 6,
    TaskName: 'Develop floor plan for estimation',
    StartDate: new Date('04/04/2019'),
    Duration: 3,
    Progress: 50,
    ParentId: 5,
  },
  {
    TaskID: 7,
    TaskName: 'List materials',
    StartDate: new Date('04/04/2019'),
    Duration: 3,
    Progress: 50,
    ParentId: 5,
  },
  {
    TaskID: 8,
    TaskName: 'Estimation approval',
    StartDate: new Date('04/04/2019'),
    Duration: 3,
    Progress: 50,
    ParentId: 5,
  },  
];
function App() {
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID:'ParentId'       
    };
    return (<GanttComponent 
        dataSource={GanttData} 
        height="450px" 
        taskFields={taskFields}
    />);
}
ReactDOM.render(<App />, document.getElementById('root'));
```

## Binding Gantt with data

Bind data with the Gantt control by using the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/gantt/#datasource) property. It accepts an array of JavaScript object or the DataManager instance.

```
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Syncfusion React Gantt</title>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Essential JS 2 for React Components" />
    <meta name="author" content="Syncfusion" />
    <link href="https://cdn.syncfusion.com/ej2/26.1.35/material.css" rel="stylesheet" type="text/css"/>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/systemjs/0.19.38/system.js"></script>
    <script src="systemjs.config.js"></script>
     <style>
        #loader {
            color: #008cff;
            height: 40px;
            left: 45%;
            position: absolute;
            top: 45%;
            width: 30%;
        }
    </style>
</head>

<body>
        <div id='root'>
            <div id='loader'>Loading....</div>
        </div>
</body>

</html>

```

Place the following code in the `src/App.tsx`.



```ts
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './App.css';

const GanttData: object[] = [
     {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
  },
  {
    TaskID: 2,
    TaskName: 'Identify Site location',
    StartDate: new Date('04/02/2019'),
    Duration: 4,
    Progress: 50,
    ParentId: 1,
  },
  {
    TaskID: 3,
    TaskName: 'Perform Soil test',
    StartDate: new Date('04/02/2019'),
    Duration: 4,
    Progress: 50,
    ParentId: 1,
  },
  {
    TaskID: 4,
    TaskName: 'Soil test approval',
    StartDate: new Date('04/02/2019'),
    Duration: 4,
    Progress: 50,
    ParentId: 1,
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
  },
  {
    TaskID: 6,
    TaskName: 'Develop floor plan for estimation',
    StartDate: new Date('04/04/2019'),
    Duration: 3,
    Progress: 50,
    ParentId: 5,
  },
  {
    TaskID: 7,
    TaskName: 'List materials',
    StartDate: new Date('04/04/2019'),
    Duration: 3,
    Progress: 50,
    ParentId: 5,
  },
  {
    TaskID: 8,
    TaskName: 'Estimation approval',
    StartDate: new Date('04/04/2019'),
    Duration: 3,
    Progress: 50,
    ParentId: 5,
  },  
];
function App () {
     return (
        <GanttComponent dataSource={GanttData} />
        );
    }
ReactDOM.render(<App />, document.getElementById('root'));
```

```ts
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './App.css';
const GanttData = [
 {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
  },
  {
    TaskID: 2,
    TaskName: 'Identify Site location',
    StartDate: new Date('04/02/2019'),
    Duration: 4,
    Progress: 50,
    ParentId: 1,
  },
  {
    TaskID: 3,
    TaskName: 'Perform Soil test',
    StartDate: new Date('04/02/2019'),
    Duration: 4,
    Progress: 50,
    ParentId: 1,
  },
  {
    TaskID: 4,
    TaskName: 'Soil test approval',
    StartDate: new Date('04/02/2019'),
    Duration: 4,
    Progress: 50,
    ParentId: 1,
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
  },
  {
    TaskID: 6,
    TaskName: 'Develop floor plan for estimation',
    StartDate: new Date('04/04/2019'),
    Duration: 3,
    Progress: 50,
    ParentId: 5,
  },
  {
    TaskID: 7,
    TaskName: 'List materials',
    StartDate: new Date('04/04/2019'),
    Duration: 3,
    Progress: 50,
    ParentId: 5,
  },
  {
    TaskID: 8,
    TaskName: 'Estimation approval',
    StartDate: new Date('04/04/2019'),
    Duration: 3,
    Progress: 50,
    ParentId: 5,
  },  
];
function App() {
    return (<GanttComponent dataSource={GanttData}/>);
}
ReactDOM.render(<App />, document.getElementById('root'));
```

## Mapping task fields

The data source fields that are required to render the tasks are mapped to the Gantt component using the [`taskFields`](https://ej2.syncfusion.com/react/documentation/api/gantt/#taskfields) property.



```ts
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './App.css';

const GanttData: object[] = [
 {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
  },
  {
    TaskID: 2,
    TaskName: 'Identify Site location',
    StartDate: new Date('04/02/2019'),
    Duration: 4,
    Progress: 50,
    ParentId: 1,
  },
  {
    TaskID: 3,
    TaskName: 'Perform Soil test',
    StartDate: new Date('04/02/2019'),
    Duration: 4,
    Progress: 50,
    ParentId: 1,
  },
  {
    TaskID: 4,
    TaskName: 'Soil test approval',
    StartDate: new Date('04/02/2019'),
    Duration: 4,
    Progress: 50,
    ParentId: 1,
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
  },
  {
    TaskID: 6,
    TaskName: 'Develop floor plan for estimation',
    StartDate: new Date('04/04/2019'),
    Duration: 3,
    Progress: 50,
    ParentId: 5,
  },
  {
    TaskID: 7,
    TaskName: 'List materials',
    StartDate: new Date('04/04/2019'),
    Duration: 3,
    Progress: 50,
    ParentId: 5,
  },
  {
    TaskID: 8,
    TaskName: 'Estimation approval',
    StartDate: new Date('04/04/2019'),
    Duration: 3,
    Progress: 50,
    ParentId: 5,
  },  
];
function App (){
  const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    parentID:'ParentId'       
    };
 return (
     <GanttComponent 
        dataSource={GanttData} 
        height="450px" 
        taskFields={taskFields}
     />
        );
   }
ReactDOM.render(<App />, document.getElementById('root'));
```

```ts
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './App.css';
const GanttData = [
   {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
  },
  {
    TaskID: 2,
    TaskName: 'Identify Site location',
    StartDate: new Date('04/02/2019'),
    Duration: 4,
    Progress: 50,
    ParentId: 1,
  },
  {
    TaskID: 3,
    TaskName: 'Perform Soil test',
    StartDate: new Date('04/02/2019'),
    Duration: 4,
    Progress: 50,
    ParentId: 1,
  },
  {
    TaskID: 4,
    TaskName: 'Soil test approval',
    StartDate: new Date('04/02/2019'),
    Duration: 4,
    Progress: 50,
    ParentId: 1,
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
  },
  {
    TaskID: 6,
    TaskName: 'Develop floor plan for estimation',
    StartDate: new Date('04/04/2019'),
    Duration: 3,
    Progress: 50,
    ParentId: 5,
  },
  {
    TaskID: 7,
    TaskName: 'List materials',
    StartDate: new Date('04/04/2019'),
    Duration: 3,
    Progress: 50,
    ParentId: 5,
  },
  {
    TaskID: 8,
    TaskName: 'Estimation approval',
    StartDate: new Date('04/04/2019'),
    Duration: 3,
    Progress: 50,
    ParentId: 5,
  },  
];
function App() {
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID:'ParentId'       
    };
    return (
    <GanttComponent 
        dataSource={GanttData} 
        height="450px" 
        taskFields={taskFields}
    />);
}
ReactDOM.render(<App />, document.getElementById('root'));
```

## Defining columns

Gantt has an option to define columns as an array. You can customize the Gantt columns using the following properties:

* `field`: Maps the data source fields to the columns.
* `headerText`: Changes the title of columns.
* `textAlign`: Changes the alignment of columns. By default, columns will be left aligned. To change the columns to right align, set `textAlign` to right.
* `format`: Formats the number and date values to standard or custom formats. Here, it is defined for the conversion of numeric values to currency.



```ts
import { GanttComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './App.css';

const GanttData: object[] = [
    {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
  },
  {
    TaskID: 2,
    TaskName: 'Identify Site location',
    StartDate: new Date('04/02/2019'),
    Duration: 4,
    Progress: 50,
    ParentId: 1,
  },
  {
    TaskID: 3,
    TaskName: 'Perform Soil test',
    StartDate: new Date('04/02/2019'),
    Duration: 4,
    Progress: 50,
    ParentId: 1,
  },
  {
    TaskID: 4,
    TaskName: 'Soil test approval',
    StartDate: new Date('04/02/2019'),
    Duration: 4,
    Progress: 50,
    ParentId: 1,
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
  },
  {
    TaskID: 6,
    TaskName: 'Develop floor plan for estimation',
    StartDate: new Date('04/04/2019'),
    Duration: 3,
    Progress: 50,
    ParentId: 5,
  },
  {
    TaskID: 7,
    TaskName: 'List materials',
    StartDate: new Date('04/04/2019'),
    Duration: 3,
    Progress: 50,
    ParentId: 5,
  },
  {
    TaskID: 8,
    TaskName: 'Estimation approval',
    StartDate: new Date('04/04/2019'),
    Duration: 3,
    Progress: 50,
    ParentId: 5,
  },  
];
function App (){
    const taskFields: any = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID:'ParentId'
    };
    return (
            <GanttComponent dataSource={GanttData} height="450px" taskFields={taskFields}>
                <ColumnsDirective>
                    <ColumnDirective field='TaskID' width='50' />
                    <ColumnDirective field='TaskName' headerText='Job Name'/>
                    <ColumnDirective field='StartDate'/>
                    <ColumnDirective field='Duration'/>
                </ColumnsDirective>
            </GanttComponent>
        );
    }
ReactDOM.render(<App />, document.getElementById('root'));
```

```ts
import { GanttComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-gantt';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './App.css';
const GanttData = [
    {
    TaskID: 1,
    TaskName: 'Project Initiation',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
  },
  {
    TaskID: 2,
    TaskName: 'Identify Site location',
    StartDate: new Date('04/02/2019'),
    Duration: 4,
    Progress: 50,
    ParentId: 1,
  },
  {
    TaskID: 3,
    TaskName: 'Perform Soil test',
    StartDate: new Date('04/02/2019'),
    Duration: 4,
    Progress: 50,
    ParentId: 1,
  },
  {
    TaskID: 4,
    TaskName: 'Soil test approval',
    StartDate: new Date('04/02/2019'),
    Duration: 4,
    Progress: 50,
    ParentId: 1,
  },
  {
    TaskID: 5,
    TaskName: 'Project Estimation',
    StartDate: new Date('04/02/2019'),
    EndDate: new Date('04/21/2019'),
  },
  {
    TaskID: 6,
    TaskName: 'Develop floor plan for estimation',
    StartDate: new Date('04/04/2019'),
    Duration: 3,
    Progress: 50,
    ParentId: 5,
  },
  {
    TaskID: 7,
    TaskName: 'List materials',
    StartDate: new Date('04/04/2019'),
    Duration: 3,
    Progress: 50,
    ParentId: 5,
  },
  {
    TaskID: 8,
    TaskName: 'Estimation approval',
    StartDate: new Date('04/04/2019'),
    Duration: 3,
    Progress: 50,
    ParentId: 5,
  },
];
function App() {
    const taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        parentID:'ParentId'
    };
    return (<GanttComponent dataSource={GanttData} height="450px" taskFields={taskFields}>
                <ColumnsDirective>
                    <ColumnDirective field='TaskID' width='50'/>
                    <ColumnDirective field='TaskName' headerText='Job Name'/>
                    <ColumnDirective field='StartDate'/>
                    <ColumnDirective field='Duration'/>
                </ColumnsDirective>
            </GanttComponent>);
}
ReactDOM.render(<App />, document.getElementById('root'));
```

## Module Injection

Gantt component features are segregated into individual feature-wise modules.In order to use a particular feature, you need to inject its feature service in the App.In the current application, we are going to use editing, sorting and filtering  feature of Gantt.Please find relevant feature service name and description as follows.

* [`Edit`](https://ej2.syncfusion.com/react/documentation/api/gantt/#editmodule): Inject this module to use the editing feature.
* [`Filter`](https://ej2.syncfusion.com/react/documentation/api/gantt/#filtermodule): Inject this module to use the filtering feature.
* [`Sort`](https://ej2.syncfusion.com/react/documentation/api/gantt/#sortmodule): Inject this module to use the sorting feature.

These modules should be injected into the gantt using the Inject directive.

## Enable editing

The editing feature enables you to edit the tasks in the Gantt component. It can be enabled by using the [`editSettings.allowEditing`](https://ej2.syncfusion.com/react/documentation/api/gantt/editSettings/#allowediting) and [`editSettings.allowTaskbarEditing`](https://ej2.syncfusion.com/react/documentation/api/gantt/editSettings/#allowtaskbarediting) properties.

The following editing options are available to update the tasks in Gantt,

* Cell
* Dialog
* Taskbar
* Connector line

### Cell editing

Modify the task details through cell editing by setting the edit mode to `Auto`. Inject the [`Edit`](https://ej2.syncfusion.com/react/documentation/api/gantt/#editmodule) module as follows. If the [`Edit`](https://ej2.syncfusion.com/react/documentation/api/gantt/#editmodule) module is not injected, you cannot edit the cell when a grid cell is clicked.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/celledit-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/celledit-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/celledit-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/celledit-cs1" %}

`Note:` When the edit mode is set to `Auto`, you can change the cells to editable mode by double-clicking anywhere at the TreeGrid and edit the task details in the edit dialog by double-clicking anywhere at the chart.

### Dialog editing

Modify the task details through dialog by setting the edit mode to `Dialog`. Inject the [`Edit`](https://ej2.syncfusion.com/react/documentation/api/gantt/#editmodule) module as follows. If the [`Edit`](https://ej2.syncfusion.com/react/documentation/api/gantt/#editmodule) module is not injected, you cannot edit the task details through the edit dialog.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/gantt/dialogedit-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/gantt/dialogedit-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/dialogedit-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/dialogedit-cs1" %}

`Note:` In dialog editing mode, the edit dialog will appear while performing double-click action in both TreeGrid and chart sides.

### Taskbar editing

Modify the task details through user interaction such as resizing and dragging the taskbar by enabling the [`allowTaskbarEditing`](https://ej2.syncfusion.com/react/documentation/api/gantt/editSettings/#allowtaskbarediting) property. Inject the [`Edit`](https://ej2.syncfusion.com/react/documentation/api/gantt/#editmodule) module as follows. If the [`Edit`](https://ej2.syncfusion.com/react/documentation/api/gantt/#editmodule) module is not injected, you cannot edit the task details while dragging the taskbar.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/gantt/taskbaredit-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/gantt/taskbaredit-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/taskbaredit-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/taskbaredit-cs1" %}

### Dependency editing

Modify the task dependencies using mouse interactions by enabling the [`allowTaskbarEditing`](https://ej2.syncfusion.com/react/documentation/api/gantt/editSettings/#allowtaskbarediting)  property along with mapping the task dependency data source field to the [`dependency`](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields/#dependency) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/gantt/dependencyedit-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/gantt/dependencyedit-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/dependencyedit-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/dependencyedit-cs1" %}

## Enabling predecessors or task relationships

Predecessor or task dependency in the Gantt component is used to depict the relationship between the tasks.

* Start to Start (SS): You cannot start a task until the dependent task starts.
* Start to Finish (SF): You cannot finish a task until the dependent task finishes.
* Finish to Start (FS): You cannot start a task until the dependent task completes.
* Finish to Finish (FF): You cannot finish a task until the dependent task completes.
You can show the relationship in tasks by using the [`dependency`](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields/#dependency) property as shown in the following code example.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/gantt/dependency-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/gantt/dependency-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/dependency-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/dependency-cs1" %}

## Assigning resources

You can display and assign the resource for each task in the Gantt control. Create a collection of JSON object, which contains id, name, unit and group of the resources and assign it to the [`resources`](https://ej2.syncfusion.com/react/documentation/api/gantt/#resources) property. Map these fields to the Gantt control using the [`resourceFields`](https://ej2.syncfusion.com/react/documentation/api/gantt/#resourceFields) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/gantt/resource-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/gantt/resource-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/resource-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/resource-cs1" %}

## Enable filtering

The filtering feature enables you to view the reduced amount of records based on filter criteria. Gantt provides the menu filtering support for each column. It can be enabled by setting the [`allowFiltering`](https://ej2.syncfusion.com/react/documentation/api/gantt/#allowfiltering) property to true along with injecting the [`Filter`](https://ej2.syncfusion.com/react/documentation/api/gantt/#filtermodule) module as shown in the following code example. Filtering feature can also be customized using the [`filterSettings`](https://ej2.syncfusion.com/react/documentation/api/gantt/filterSettings/) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/gantt/filtering-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/gantt/filtering-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/filtering-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/filtering-cs3" %}

## Enable sorting

The sorting feature enables you to order the records. It can be enabled by setting the [`allowSorting`](https://ej2.syncfusion.com/react/documentation/api/gantt/#allowsorting) property to `true`. Inject the [`Sort`](https://ej2.syncfusion.com/react/documentation/api/gantt/#sortmodule) module as follows. If the [`Sort`](https://ej2.syncfusion.com/react/documentation/api/gantt/#sortmodule) module is not injected, you cannot sort the records when a header is clicked. The sorting feature can be customized using the [`sortSettings`](https://ej2.syncfusion.com/react/documentation/api/gantt/sortSettings/) property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/gantt/sorting-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/gantt/sorting-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="app.html" %}
{% include code-snippet/gantt/sorting-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/sorting-cs1" %}

## Run the application

Now run the `npm run dev` command in the console to start the development server. This command compiles your code and serves the application locally, opening it in the browser.

```bash
npm run dev
```

Output will be appears as follows.

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

> You can refer to our [React Gantt Chart]( https://www.syncfusion.com/react-components/react-gantt-chart) feature tour page for its groundbreaking feature representations. You can also explore our [React Gantt Chart example]( https://ej2.syncfusion.com/react/demos/#/material/gantt/default) that shows how to render the Gantt Chart in React.

## Error handling

Error handling is used to identify errors, display them and develop recovery strategies to handle errors from gantt. In Gantt, error handling is done by using the [actionFailure](https://ej2.syncfusion.com/react/documentation/api/gantt/#actionfailure) event. Some of the scenarios that this event handles are:
* Invalid duration : The [duration](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields/#duration) field accepts only numerical values with an optional decimal point. Entering non-numerical values triggers the `actionFailure` event and displays issue information in the event argument.
* Invalid dependency: The [dependency](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields/#dependency) field accepts only a number followed by a predecessor type (FS, FF, SS, SF).  Entering invalid values, such as special characters or incorrect predecessor types, triggers the `actionFailure` event and displays issue information in the event argument.
* Invalid offset : The [offset](https://ej2.syncfusion.com/react/documentation/api/gantt/iPredecessor/#offset) accepts only numerical values or their word equivalents followed by a unit. Entering invalid values, such as special characters triggers `actionFailure` event and displays issue information in the event argument.
* Failure to map task fields : The data source fields necessary for rendering tasks should be mapped to the Gantt control using the [taskFields](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields/) property. Failure to map `taskFields` in the sample triggers `actionFailure` event and displays issue information in the event argument.
* Failure to map resource fields : To assign resources to a task, resource fields should be mapped to the Gantt control using the [resourceFields](https://ej2.syncfusion.com/react/documentation/api/gantt/resourceFields/). Failure to map `resourceFields` in the sample triggers `actionFailure` event and displays issue information in the event argument.
* Failure to map `isPrimaryKey` : [isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/gantt/column/#isprimarykey) field is crucial for CRUD operations. Failure to map [id](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields/#id) column in gantt column collection or [isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/gantt/column/#isprimarykey) field in one of the columns will trigger `actionFailure` event and display issue information in the event argument.
* Invalid date format : [format](https://ej2.syncfusion.com/react/documentation/api/gantt/iTimelineFormatter/) property under `topTier` and `bottomTier` determines how the timelines are displayed in the top tier and bottom tier of the Gantt chart timeline. If the `format` does not contain a valid standard [date format](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), it triggers the `actionFailure` event, displaying issue information in the event argument.
* Failure to map `hasChildMapping` : [hasChildMapping](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields/#haschildmapping) property should configured for [load-on-demand](https://ej2.syncfusion.com/react/documentation/gantt/data-binding#load-child-on-demand). Ensure it properly configured in the [taskFields](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields/). Failure to map `hasChildMapping` in the `load-on-demand` sample triggers `actionFailure` event and displays issue information in the event argument.
* Invalid day in event markers : [day](https://ej2.syncfusion.com/react/documentation/api/gantt/eventMarker/#day) should configured in [eventMarkers](https://ej2.syncfusion.com/react/documentation/api/gantt/eventMarker/) to render striplines in a particular day. Failure to configure the `day` in `eventMarkers` triggers `actionFailure` event and displays issue information in the event argument.

> Additionally, TreeGrid side error handling information is also displayed from the Gantt `actionFailure` event. For more details on TreeGrid side error handling, refer [here](https://ej2.syncfusion.com/react/documentation/treegrid/getting-started#handling-errors).

The following code example shows how to use the [actionFailure](https://ej2.syncfusion.com/react/documentation/api/gantt/#actionfailure) event in the Gantt control to display an exception when `isPrimaryKey` is not configured properly in the Gantt Chart column.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/gantt/exception-handling-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/gantt/exception-handling-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/exception-handling-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/exception-handling-cs1" %}

The following screenshot represents the Gantt Exception handling in `actionFailure` event.

![Error Handling](images/error-handling.png)