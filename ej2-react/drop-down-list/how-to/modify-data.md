---
layout: post
title: How to modify remote data before binding in React Dropdown List | Syncfusion
description: Modify the result data from a remote source before the React Dropdown List binds it by handling the actionComplete event and replacing items in place.
control: Modify data 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to modify remote data before binding in React Dropdown List

When binding a remote data source, use the [`actionComplete`](https://ej2.syncfusion.com/react/documentation/api/drop-down-list/#actioncomplete) event to modify the result data before passing it to the DropDownList.

The following example demonstrates how to modify the result data:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/basic-cs33/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/basic-cs33/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/basic-cs33" %}