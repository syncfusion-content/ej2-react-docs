---
layout: post
title: Check list in React Listview component | Syncfusion
description: Learn here all about Check list in Syncfusion React Listview component of Syncfusion Essential JS 2 and more.
control: Check list 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Check list in React Listview component

The ListView supports checkboxes in default and group lists, which are used to select multiple items. The checkbox can be enabled by the [`showCheckBox`](https://ej2.syncfusion.com/react/documentation/api/list-view/#showcheckbox) property.

The checkbox is useful in scenarios where multiple options need to be selected. For example, in a shopping cart, users can select or unselect desired items before checkout. It is also useful for selecting multiple items that belong to the same category when using a group list.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/checklist-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/checklist-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/listview/checklist-cs1/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/listview/checklist-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/checklist-cs1" %}

## Checkbox Position

In ListView, the checkbox can be positioned on either `Left` or `Right` side of the list-item text. This can be achieved by [`checkBoxPosition`](https://ej2.syncfusion.com/react/documentation/api/list-view/#checkboxposition) property. By default, the checkbox will be positioned to the `Left` of list-item text.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/checklist-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/checklist-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/listview/checklist-cs2/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/listview/checklist-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/checklist-cs2" %}
