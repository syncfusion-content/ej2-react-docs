---
layout: post
title: Headers in React Treegrid component | Syncfusion
description: Learn here all about Headers in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Headers 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Headers in React Treegrid component

## Header text

By default, column header title is displayed from column [`field`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#field) value. To override the default header title, you have to define the [`headerText`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#headertext)value.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs20/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs20/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/column-cs20" %}

> * If both the [`field`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#field) and [`headerText`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#headertext) are not defined in the column, the column renders with **“empty”** header text.

## Header template

You can customize the header element by using the [`headerTemplate`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#headertemplate)property.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/column-cs21/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/column-cs21/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/column-cs21" %}