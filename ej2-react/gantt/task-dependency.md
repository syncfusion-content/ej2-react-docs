---
layout: post
title: Task dependency in React Gantt component | Syncfusion
description: Learn here all about Task dependency in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Task dependency 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Task dependency in React Gantt component

Task dependency or task relationship can be established between two tasks in Gantt. This dependency affects the project schedule. If you change the predecessor of a task, it will affect the successor task, which will affect the next task, and so on. Relationship can be established between parent-parent tasks, child-child tasks, parent-child and child-parent task.

## Task relationship types

Task relationships are categorized into four types based on the start and finish dates of the task.

### Start to Start (SS)

You cannot start a task until the dependent task also starts.

![Alt text](images/ss.png)

### Start to Finish (SF)

You cannot finish a task until the dependent task is started.

![Alt text](images/sf.png)

### Finish to Start (FS)

You cannot start a task until the dependent task is completed.

![Alt text](images/fs.png)

### Finish to Finish (FF)

You cannot finish a task until the dependent task is completed.

![Alt text](images/ff.png)

## Define task relationship

Task relationship is defined in the data source as a string value, and this value is mapped to the Gantt component by using the [`taskFields.dependency`](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields/#dependency) property. The following code example demonstrates how to enable the predecessor in the Gantt component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/predecessor-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/predecessor-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/predecessor-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/predecessor-cs1" %}

## Predecessor offset with duration units

In the Gantt component, the predecessor offset can be defined with the following duration units:

* Day
* Hour
* Minute

You can define an offset with various offset duration units for predecessors by using the following code example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/predecessor-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/predecessor-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/predecessor-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/predecessor-cs2" %}

## Validate predecessor links on editing

In Gantt, task relationship link can be broken by editing the start date, end date and duration value of task. When the task relationship broken on any edit action. This can be handled in Gantt in two ways.
* Using actionBegin event
* Using predecessor validation dialog

### Using actionBegin event

When the task relationship link is broken on any edit action, then the [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/gantt/#actionbegin) event will be triggered with `requestType` argument as `validateLinkedTask`. You can validate the editing action within the actionBegin event using the `validateMode` event argument. The `validateMode` event argument has the following properties:

Argument |Default value |Description
-----|-----|-----
args.validateMode.respectLink | false | In this validation mode, the predecessor links get high priority. With this mode enabled, when the successor task is moved before the predecessor task’s end date, the editing will be reverted, and dates will be validated based on the dependency links.
args.validateMode.removeLink | false | In this validation mode, the taskbar editing gets high priority. For inappropriate task dates, the dependency links will be removed and tasks will be moved to the edited date.
args.validateMode.preserveLinkWithEditing | true | In this validation mode, the taskbar editing will be considered along with the dependency links. This relationship will be maintained by updating the offset value of predecessors.

By default, the `preserveLinkWithEditing` validation mode will be enabled, so the predecessors are updated with offset values.

The following sample explains enabling the `respectLink` validation mode while editing the linked tasks in the [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/gantt/#actionbegin) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/predecessor-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/predecessor-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/predecessor-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/predecessor-cs3" %}

### Using validation dialog

When disabling all the validation modes in the [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/gantt/#actionbegin) event, a validation pop-up will be displayed prompting users to select the validation mode to validate taskbar editing.

This validation pop-up will display different options based on the successor task’s start date after editing.

If you move the successor task that starts after the predecessor task’s end date, then a dialog will be rendered with the following options:

* Cancel, Keep the existing link.
* Remove the link and move the task to start on edited date.
* Move the task to start on edited date and keep the link.

If you move the successor task that starts before the predecessor task’s end date, then a dialog will be rendered with the following options:

* Cancel, Keep the existing link.
* Remove the link and move the task to start on edited date.

The following code example shows how to enable the predecessor validation dialog in Gantt.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/predecessor-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/predecessor-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/predecessor-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/predecessor-cs4" %}
