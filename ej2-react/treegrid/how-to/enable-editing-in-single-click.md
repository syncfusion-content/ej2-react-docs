---
layout: post
title: Enable editing in single click in React Treegrid component | Syncfusion
description: Learn here all about Enable editing in single click in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Enable editing in single click 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Enable editing in single click in React Treegrid component

## Row Editing

You can make a row editable on a single click with **Row** mode of editing in TreeGrid, by using the [`startEdit`](https://ej2.syncfusion.com/react/documentation/api/treegrid#startedit) and [`endEdit`](https://ej2.syncfusion.com/react/documentation/api/treegrid#endedit) methods.

Bind the **mousedown** event for TreeGrid and in the event handler call the [`startEdit`](https://ej2.syncfusion.com/react/documentation/api/treegrid#startedit) and [`endEdit`](https://ej2.syncfusion.com/react/documentation/api/treegrid#endedit), based on the clicked target element.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/refresh-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/refresh-cs2/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/refresh-cs2/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/refresh-cs2/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/refresh-cs2" %}

## Cell Editing

You can make a cell editable on a single click with **Cell** mode of editing in TreeGrid, by using the [`editCell`](https://ej2.syncfusion.com/react/documentation/api/treegrid#editcell) method.

Bind the **mousedown** event for TreeGrid and in the event handler call the [`editCell`](https://ej2.syncfusion.com/react/documentation/api/treegrid#editcell) method, based on the clicked target element.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/refresh-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/refresh-cs3/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/refresh-cs3/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/refresh-cs3/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/refresh-cs3" %}

> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.