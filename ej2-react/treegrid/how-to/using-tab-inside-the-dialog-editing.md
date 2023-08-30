---
layout: post
title: Using tab inside the dialog editing in React Treegrid component | Syncfusion
description: Learn here all about Using tab inside the dialog editing in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Using tab inside the dialog editing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Using tab inside the dialog editing in React Treegrid component

You can use [`tab`](../../../tab) component inside dialog edit UI using dialog template feature. The dialog template feature can be enabled by defining [`editSettings.mode`](https://ej2.syncfusion.com/react/documentation/api/treegrid/editSettings/#mode) as `Dialog` and [`editSetting.template`](https://ej2.syncfusion.com/react/documentation/api/treegrid/editSettings/#template) as a REACT Component.

The following example demonstrate the usage of tab control inside the dialog template.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/tabediting-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/tabediting-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/tabediting-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/tabediting-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/tabediting-cs1" %}

> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.
