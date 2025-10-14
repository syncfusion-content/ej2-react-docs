---
layout: post
title: Taskbar in React Gantt component | Syncfusion
description: Learn here all about Taskbar in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Taskbar 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Taskbar in React Gantt component

## Taskbar template

You can design your own taskbars to view the tasks in Gantt by using [`taskbarTemplate`](https://ej2.syncfusion.com/react/documentation/api/gantt/#taskbartemplate) property. And it is possible to map the template script element’s ID value to this property. It is also possible to customize the parent taskbars and milestones with custom templates by using [`parentTaskbarTemplate`](https://ej2.syncfusion.com/react/documentation/api/gantt/#parenttaskbartemplate) and [`milestoneTemplate`](https://ej2.syncfusion.com/react/documentation/api/gantt/#milestonetemplate) properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent } from "@syncfusion/ej2-react-gantt";
import { data } from "./datasource";

function App() {
  const taskFields = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    duration: "Duration",
    progress: "Progress",
    parentID: 'ParentID',
  };

  function TaskbarTemplate(props) {
    return (
      <div
        className="e-gantt-child-taskbar-inner-div e-gantt-child-taskbar"
        style={{ height: '100%' }}
      >
        <div
          className="e-gantt-child-progressbar-inner-div e-gantt-child-progressbar"
          style={{
            width: props.ganttProperties.progressWidth + 'px',
            height: '100%',
          }}
        ></div>
        <span
          className="e-task-label"
          style={{
            position: 'absolute',
            fontSize: '12px',
            color: 'white',
            top: '5px',
            left: '10px',
            fontFamily: 'Segoe UI',
            cursor: 'move',
          }}
        >
          {props.TaskName}
        </span>
      </div>
    );
  }
  function ParentTaskbarTemplate(props) {
    return (
      <div
        className="e-gantt-parent-taskbar-inner-div e-gantt-parent-taskbar"
        style={{
          height: '100%',
        }}
      >
        <div
          className="e-gantt-parent-progressbar-inner-div e-row-expand e-gantt-parent-progressbar"
          style={{
            width: props.ganttProperties.progressWidth + 'px',
            height: '100%',
          }}
        ></div>
        <span
          className="e-task-label"
          style={{
            position: 'absolute',
            fontSize: '12px',
            color: 'white',
            top: '5px',
            left: '10px',
            fontFamily: 'Segoe UI',
            cursor: 'move',
          }}
        >
          {props.TaskName}
        </span>
      </div>
    );
  }
  function MilestoneTemplate(props) {
    return (
      <div
        className="e-gantt-milestone"
        style={{
          width: '16px',
          height: '16px',
          position: 'absolute',
          transform: 'rotate(45deg)',
          left: '1px',
        }}
      ></div>
    );
  }
    return (
      <GanttComponent
        dataSource={data}
        rowHeight={60}
        taskFields={taskFields}
        taskbarTemplate={TaskbarTemplate}
        parentTaskbarTemplate={ParentTaskbarTemplate}
        milestoneTemplate={MilestoneTemplate}
        height="450px"
      />
    );
}
ReactDOM.render(<App />, document.getElementById("root"));

{% endraw %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% raw %}

import * as React from "react";
import * as ReactDOM from "react-dom";
import { GanttComponent } from "@syncfusion/ej2-react-gantt";
import { data } from "./datasource";

function App() {
  const taskFields: any = {
    id: "TaskID",
    name: "TaskName",
    startDate: "StartDate",
    duration: "Duration",
    progress: "Progress",
    parentID: 'ParentID',
  };

  function TaskbarTemplate(props: any) {
    return (
      <div
        className="e-gantt-child-taskbar-inner-div e-gantt-child-taskbar"
        style={{ height: '100%' }}
      >
        <div
          className="e-gantt-child-progressbar-inner-div e-gantt-child-progressbar"
          style={{
            width: props.ganttProperties.progressWidth + 'px',
            height: '100%',
          }}
        ></div>
        <span
          className="e-task-label"
          style={{
            position: 'absolute',
            fontSize: '12px',
            color: 'white',
            top: '5px',
            left: '10px',
            fontFamily: 'Segoe UI',
            cursor: 'move',
          }}
        >
          {props.TaskName}
        </span>
      </div>
    );
  }
  function ParentTaskbarTemplate(props: any) {
    return (
      <div
        className="e-gantt-parent-taskbar-inner-div e-gantt-parent-taskbar"
        style={{
          height: '100%',
        }}
      >
        <div
          className="e-gantt-parent-progressbar-inner-div e-row-expand e-gantt-parent-progressbar"
          style={{
            width: props.ganttProperties.progressWidth + 'px',
            height: '100%',
          }}
        ></div>
        <span
          className="e-task-label"
          style={{
            position: 'absolute',
            fontSize: '12px',
            color: 'white',
            top: '5px',
            left: '10px',
            fontFamily: 'Segoe UI',
            cursor: 'move',
          }}
        >
          {props.TaskName}
        </span>
      </div>
    );
  }
  function MilestoneTemplate(props: any) {
    return (
      <div
        className="e-gantt-milestone"
        style={{
          width: '16px',
          height: '16px',
          position: 'absolute',
          transform: 'rotate(45deg)',
          left: '1px',
        }}
      ></div>
    );
  }
    return (
      <GanttComponent
        dataSource={data}
        rowHeight={60}
        taskFields={taskFields}
        taskbarTemplate={TaskbarTemplate}
        parentTaskbarTemplate={ParentTaskbarTemplate}
        milestoneTemplate={MilestoneTemplate}
        height="450px"
      />
    );
}
ReactDOM.render(<App />, document.getElementById("root"));

{% endraw %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/customization-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/customization-cs1" %}

## Taskbar customization

### Taskbar height

Height of child taskbars and parent taskbars can be customized by using [`taskbarHeight`](https://ej2.syncfusion.com/react/documentation/api/gantt/#taskbarheight) property. The following code example shows how to use the property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/appearanceandstyle-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/appearanceandstyle-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/appearanceandstyle-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/appearanceandstyle-cs1" %}

> NOTE
The [`taskbarHeight`](https://ej2.syncfusion.com/react/documentation/api/gantt/#taskbarheight) value should be lower than the [`rowHeight`](https://ej2.syncfusion.com/react/documentation/api/gantt/#rowheight) property value and these properties accept only pixel values.

### Conditional formatting

The default taskbar UI can be replaced with custom templates using the [`queryTaskbarInfo`](https://ej2.syncfusion.com/react/documentation/api/gantt/#querytaskbarinfo) event. The following code example shows customizing the taskbar UI based on task progress values in the Gantt component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/appearanceandstyle-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/appearanceandstyle-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/appearanceandstyle-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/appearanceandstyle-cs2" %}


### Change gripper icon in taskbar

You can change the gripper icon in the taskbar by applying styles to their respective class elements.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/change-gripper-icon-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/change-gripper-icon-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/change-gripper-icon-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/change-gripper-icon-cs1" %}

## Multi Taskbar support in project view

The Gantt component, supports rendering multi-taskbars in the project view. With this feature the parent taskbar, when it is collapsed, visually summarize the progress of all its child taskbars.

This feature can be enabled by setting the [enableMultiTaskbar](https://ej2.syncfusion.com/react/documentation/api/gantt/#enablemultitaskbar) property value to `true`. 

The following code example shows how to use this property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/projectview-multitaskbar-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/projectview-multitaskbar-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/projectview-multitaskbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/projectview-multitaskbar-cs1" %}

## Connector lines

The width and background color of connector lines in Gantt can be customized using the [`connectorLineWidth`](https://ej2.syncfusion.com/react/documentation/api/gantt/#connectorlinewidth) and [`connectorLineBackground`](https://ej2.syncfusion.com/react/documentation/api/gantt/#connectorlinebackground) properties. The following code example shows how to use these properties.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/appearanceandstyle-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/appearanceandstyle-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/appearanceandstyle-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/appearanceandstyle-cs3" %}

## Enable tooltip

In the Gantt component, you can enable or disable the mouse hover tooltip for the following UI elements using the [`tooltipSettings.showTooltip`](https://ej2.syncfusion.com/react/documentation/api/gantt/tooltipSettings/#showtooltip) property:

* Taskbar
* Connector line
* Baseline
* Timeline

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/tooltip-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/tooltip-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/tooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/tooltip-cs1" %}

> The default value of the [`tooltipSettings.showTooltip`](https://ej2.syncfusion.com/react/documentation/api/gantt/tooltipSettings/#showtooltip) property is `true`.

## Tooltip template

### Taskbar tooltip

The default tooltip in the Gantt component can be customized using the [`tooltipSettings.taskbar`](https://ej2.syncfusion.com/react/documentation/api/gantt/tooltipSettings/#taskbar) property. You can map the template script element’s ID value or template string directly to this property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/tooltip-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/tooltip-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/tooltip-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/tooltip-cs4" %}

### Connector line tooltip

The default connector line tooltip in the Gantt component can be customized using the [`tooltipSettings.connectorLine`](https://ej2.syncfusion.com/react/documentation/api/gantt/tooltipSettings/#connectorline) property. You can map the value to this property as template script element ID or template string format. The following code example shows how to use the [`tooltipSettings.connectorLine`](https://ej2.syncfusion.com/react/documentation/api/gantt/tooltipSettings/#connectorline) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/tooltip-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/tooltip-cs5/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/tooltip-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/tooltip-cs5" %}

### Baseline tooltip

A baseline tooltip can be customized using the [`tooltipSettings.baseline`](https://ej2.syncfusion.com/react/documentation/api/gantt/tooltipSettings/#baseline) property. The following code example shows how to customize the baseline tooltip in Gantt.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/tooltip-cs7/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/tooltip-cs7/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/tooltip-cs7/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/tooltip-cs7" %}

### Timeline tooltip

A timeline tooltip can be customized using the [`tooltipSettings.timeline`](https://ej2.syncfusion.com/react/documentation/api/gantt/tooltipSettings/#timeline) property. This allows modifying the appearance and content of the tooltip displayed over the timeline. The following code example shows how to customize the timeline tooltip in Gantt.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/timeline-tooltip-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/timeline-tooltip-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/timeline-tooltip-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/timeline-tooltip-cs1" %}