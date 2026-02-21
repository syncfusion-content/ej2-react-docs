---
layout: post
title: Clear item in React Drop down list component | Syncfusion
description: Learn here all about Clear item in Syncfusion React Drop down list component of Syncfusion Essential JS 2 and more.
control: Clear item 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Clear item in React Drop down list component

Clear the selected item using one of two methods:

**Through interaction:** Click the clear icon in the DropDownList element to clear the selected item. Enable the clear icon using the [`showClearButton`](https://ej2.syncfusion.com/react/documentation/api/drop-down-list/#showclearbutton) property.

**Programmatically:** Set the `index`, `text`, or `value` property to `null` to clear the selected item.

The following example demonstrate about how to clear the selected item in DropDownList.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/dropdownlist/clear-text-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/dropdownlist/clear-text-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dropdownlist/clear-text-cs1" %}