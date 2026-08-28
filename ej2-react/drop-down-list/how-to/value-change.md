---
layout: post
title: How to detect value change in React Dropdown List | Syncfusion
description: Detect whether a React Dropdown List value change was manual or programmatic in the change event by reading the isInteracted argument.
control: Value change
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Detect Manual or Programmatic Value Changes in React Dropdown List

Determine whether a value change was triggered manually or programmatically by inspecting the `isInteracted` argument of the [change](https://ej2.syncfusion.com/react/documentation/api/drop-down-list#change) event. The argument value indicates the change source: `true` for user interaction and `false` for programmatic changes.

The following example demonstrates how to detect whether the value change was manual or programmatic:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/value-change-detection-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/value-change-detection-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/value-change-detection-cs1" %}
