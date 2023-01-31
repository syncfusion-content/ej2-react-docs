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

The ListView supports checkbox in default and group-lists which is used to select multiple items. The checkbox can be enabled by the `showCheckBox` property.

The Checkbox will be useful in the scenario where we need to select multiple options. For Example, In Shipping cart we can be able to select or unselect the desired items before checkout and also it will be useful in selecting multiple items that belongs to same category using the group list.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/checklist-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/checklist-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/checklist-cs1" %}

## Checkbox Position

In ListView the checkbox can be positioned into either `Left` or `Right` side of the list-item text. This can be achieved by `checkBoxPositon` property. By default, checkbox will be positioned to `Left` of list-item text.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/checklist-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/checklist-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/checklist-cs2" %}
