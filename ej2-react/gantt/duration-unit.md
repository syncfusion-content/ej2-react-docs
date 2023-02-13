---
layout: post
title: Duration unit in React Gantt component | Syncfusion
description: Learn here all about Duration unit in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Duration unit 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Duration unit in React Gantt component

## Duration units

In Gantt, the task's duration value can be measured by the following duration units,

* Day
* Hour
* Minute

In Gantt, we can define duration unit for whole project by using [`durationUnit`](https://ej2.syncfusion.com/react/documentation/api/gantt/#durationunit) property, when we defines the value for this property, this unit will be applied for all task which don't has duration unit value.
And each task in the project can be defined with different duration units and the duration unit of a task can be defined by the following ways,

* Using [`taskFields.durationUnit`](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields/#durationunit) property, to map the duration unit data source field.
* Defining the duration unit value along with the duration field in the data source.

### Mapping the duration unit field

The below code snippet explains the mapping of duration unit data source field to the Gantt component using the [`taskFields.durationUnit`](https://ej2.syncfusion.com/react/documentation/api/gantt/taskFields/#durationunit) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/durationunit-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/durationunit-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/durationunit-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/durationunit-cs1" %}

> NOTE
The default value of the [`durationUnit`](https://ej2.syncfusion.com/react/documentation/api/gantt/#durationunit) property is `day`.

### Defining duration unit along with duration field

Duration units for the tasks can also be defined along with the duration values, the below code snippet explains the duration unit for a task along with duration value,

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/durationunit-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/durationunit-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/durationunit-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/durationunit-cs2" %}

>NOTE:
The edit type of the duration column in Gantt is string, to support editing the duration field along with duration units.