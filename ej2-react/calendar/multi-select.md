---
layout: post
title: Multi Selection in React Calendar | Syncfusion
description: Enable multi date selection in the React Calendar using the isMultiSelection and values properties for range-based picking.
control: Multi select 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Multi Selection in React Calendar

The React Calendar provides options for single or multiple date selection using the `isMultiSelection` and `values` properties. By default, `isMultiSelection` is `false`, and the React Calendar enters single-selection mode where the `value` property holds the selected date.

| API | Type | Default | Description |
|------|------|------|----------------------|
| `isMultiSelection` | `Boolean` | `false` | Enables multi-selection in the React Calendar. |
| `values` | `Date[]` | `null` | Gets or sets the collection of selected dates when multi-selection is enabled. |

> When `isMultiSelection` is `false`, the `values` property is ignored and the React Calendar uses the `value` property instead. The `values` collection always reflects the actual selection state.

The following example demonstrates the functionality of  `isMultiSelection` property and `values` properties in the React Calendar control.

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
