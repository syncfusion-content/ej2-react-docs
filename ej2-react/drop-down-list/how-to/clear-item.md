---
layout: post
title: How to clear item in React Dropdown List | Syncfusion
description: Clear the React Dropdown List selection by clicking the showClearButton icon, or programmatically set the index, text, or value property to null.
control: Clear item
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to clear item in React Dropdown List

Clear the selected item using one of two approaches:

**Through interaction:** Click the clear icon in the DropDownList element to clear the selected item. Enable the clear icon using the [`showClearButton`](https://ej2.syncfusion.com/react/documentation/api/drop-down-list#showclearbutton) property.

**Programmatically:** Set the `index`, `text`, or `value` property to `null` to clear the selected item.

The following example demonstrates how to clear the selected item in DropDownList.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/clear-text-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/clear-text-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/clear-text-cs1" %}