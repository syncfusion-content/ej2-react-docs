---
layout: post
title: Multi select in React Calendar component | Syncfusion
description: Learn here all about Multi select in Syncfusion React Calendar component of Syncfusion Essential JS 2 and more.
control: Multi select 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Multi select in React Calendar component

The Calendar provides options for single or multiple date selection using the `isMultiSelection` and `values` properties. By default, `isMultiSelection` is disabled.

| API | Type | Description |
|------|------|----------------------|
| `isMultiSelection`| **Boolean**| Enables the multi selection option in the Calendar control |
|`values`| **Date[]** | Gets or sets the date range values in multi selection option |

The following example demonstrates the functionality of  `isMultiSelection` property and `values` properties in the Calendar control.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/calendar/multiselect-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/calendar/multiselect-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/multiselect-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/calendar/multiselect-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/calendar/multiselect-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/calendar/multiselect-cs2" %}
