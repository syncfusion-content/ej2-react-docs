---
layout: post
title: Tool bar in React Grid component | Syncfusion
description: Learn here all about Tool bar in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Tool bar 
publishingplatform: React
documentation: ug
domainurl: ##DomainURL##
---

# Tool bar in React Grid component

The Grid provides ToolBar support to handle grid actions. The [`toolbar`](https://ej2.syncfusion.com/angular/documentation/api/grid/#toolbar)
property accepts either the collection of built-in toolbar items and
[`itemModel`](https://ej2.syncfusion.com/angular/documentation/api/toolbar/itemModel) objects for custom toolbar items or
HTML element ID for toolbar template.

To use Toolbar, inject **Toolbar** module in Grid.

## Enable or disable toolbar items

You can enable/disable toolbar items by using the **enableItems** method.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/toolbar-cs5/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/toolbar-cs5/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/toolbar-cs5" % }

## Add toolbar at the bottom of Grid

You can add the Grid toolbar component at the bottom of Grid using the ['created'](https://ej2.syncfusion.com/angular/documentation/api/grid/#created) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/grid/toolbar-cs6/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/grid/toolbar-cs6/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{ % previewsample "page.domainurl/code-snippet/grid/toolbar-cs6" % }

## See Also

[Toolbar Component](../../toolbar/getting-started)