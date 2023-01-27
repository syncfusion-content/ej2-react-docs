---
layout: post
title: Scheduling tasks in React Gantt component | Syncfusion
description: Learn here all about Scheduling tasks in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Scheduling tasks 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Scheduling tasks in React Gantt component

## Duration units

In Gantt, the tasks’ duration value can be measured by the following duration units,

* Day
* Hour
* Minute

In Gantt, we can define duration unit for whole project by using [`durationUnit`](https://ej2.syncfusion.com/react/documentation/api/gantt/#durationunit) property, when we defines the value for this property, this unit will be applied for all task which don't has duration unit value. And each task in the project can be defined with different duration units and the duration unit of a task can be defined by the following ways,

* Using [`taskFields.durationUnit`](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields/#durationunit) property, to map the duration unit data source field.
* Defining the duration unit value along with the duration field in the data source.

### Mapping the duration unit field

The below code snippet explains the mapping of duration unit data source field to the Gantt component using the [`taskFields.durationUnit`](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields/#durationunit) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/durationunit-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/durationunit-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/durationunit-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/durationunit-cs3" %}

> NOTE
The default value of the [`durationUnit`](https://ej2.syncfusion.com/react/documentation/api/gantt/#durationunit) property is `day`.

### Defining duration unit along with duration field

Duration units for the tasks can also be defined along with the duration values, the below code snippet explains the duration unit for a task along with duration value,

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/durationunit-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/durationunit-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/durationunit-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/durationunit-cs4" %}

>NOTE:
The edit type of the duration column in Gantt is string, to support editing the duration field along with duration units.

## Unscheduled Tasks

Unscheduled tasks are planned for a project without any definite schedule dates. The Gantt component supports rendering the unscheduled tasks. You can create or update the tasks with anyone of start date, end date, and duration values or none. You can enable or disable the unscheduled tasks by using the [`allowUnscheduledTasks`](https://ej2.syncfusion.com/react/documentation/api/gantt/#allowunscheduledtasks) property. The following images represent the various types of unscheduled tasks in Gantt.

### Start Date Only

![Alt text](images/startDate-only.png)

### End Date Only

![Alt text](images/endDate-only.png)

### Duration Only

![Alt text](images/duration-only.png)

### Milestone

The milestone task, one without a start and end date, but having a duration value of zero is represented as follows.

![Alt text](images/milestone.png)

## Define unscheduled tasks in data source

You can define the various types of unscheduled tasks in the data source as follows

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/unscheduledtask-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/unscheduledtask-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/unscheduledtask-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/unscheduledtask-cs1" %}

> NOTE
> If the [`allowUnscheduledTasks`](https://ej2.syncfusion.com/react/documentation/api/gantt/#allowunscheduledtasks) property is set to `false`, then the Gantt component automatically calculates the scheduled date values with a default value of duration 1 and the project start date is considered as the start date for the task.

## Working Time Range

In the Gantt component, working hours in a day for a project can be defined by using the [`dayWorkingTime`](https://ej2.syncfusion.com/react/documentation/api/gantt/dayWorkingTime/) property. Based on the working hours, automatic date scheduling and duration validations for a task are performed.

The following code snippet explains how to define the working time range for the project in Gantt.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/workingTimeRange-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/workingTimeRange-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/workingTimeRange-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/workingTimeRange-cs1" %}

> NOTE
>* Individual tasks can lie between any time within the defined working time range of the project.
>* The [`dayWorkingTime`](https://ej2.syncfusion.com/react/documentation/api/gantt/dayWorkingTime/) property is used to define the working time for the whole project.

## Weekend/Non-working days

Non-working days/weekend are used to represent the non-productive days in a project. You can define the non-working days in a week using the [`workWeek`](https://ej2.syncfusion.com/react/documentation/api/gantt/#workweek) property in Gantt.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/how-to changeworkweek-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/how-to changeworkweek-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/how-to changeworkweek-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/how-to changeworkweek-cs1" %}

> By default, Saturdays and Sundays are considered as non-working days/weekend in a project.
> In the Gantt component, you can make weekend as working day by setting the [`includeWeekend`](https://ej2.syncfusion.com/react/documentation/api/gantt/#includeweekend) property to `true`.