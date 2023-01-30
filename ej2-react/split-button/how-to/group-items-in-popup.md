---
layout: post
title: Group items in popup in React Split button component | Syncfusion
description: Learn here all about Group items in popup in Syncfusion React Split button component of Syncfusion Essential JS 2 and more.
control: Group items in popup 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Group items in popup in React Split button component

Items in popup can be grouped in SplitButton by templating entire popup with ListView. To achieve grouping in ListView, check [`ListView grouping`](../../listview/grouping#grouping) documentation. To template ListView in popup, create ListView with id `listview` and provide it as [`target`](https://ej2.syncfusion.com/react/documentation/api/split-button#target) for SplitButton.

The following example illustrates how to group items in popup using ListView component.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/split-button/listview-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/split-button/listview-cs1/app/app.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/split-button/listview-cs1" %}