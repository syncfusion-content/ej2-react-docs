---
layout: post
title: Customize the icon for column menu in React Treegrid component | Syncfusion
description: Learn here all about Customize the icon for column menu in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Customize the icon for column menu 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customize the icon for column menu in React Treegrid component

You can customize the column menu icon by overriding the default treegrid class **.e-icons.e-columnmenu** with a custom property **content** as mentioned below,

```css
    .e-treegrid .e-columnheader .e-icons.e-columnmenu::before {
        content: "\e903";
    }
```

In the below sample, treegrid is rendered with a customized column menu icon.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/custom-column-menu-icon-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/custom-column-menu-icon-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/custom-column-menu-icon-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/custom-column-menu-icon-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/custom-column-menu-icon-cs1" %}

> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.