---
layout: post
title: Show hide columns in dialog editing in React Treegrid component | Syncfusion
description: Learn here all about Show hide columns in dialog editing in Syncfusion React Treegrid component of Syncfusion Essential JS 2 and more.
control: Show hide columns in dialog editing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Show hide columns in dialog editing in React Treegrid component

You can show hidden columns or hide visible column's editor in the dialog while editing the treegrid record using [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#actionbegin) and [`actionComplete`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#actioncomplete) events.

In the [`actionBegin`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#actionbegin) event, based on **requestType** as **beginEdit** or  **add**. We can show or hide the editor by using [`column.visible`](https://ej2.syncfusion.com/react/documentation/api/treegrid/column/#visible) property.

In the [`actionComplete`](https://ej2.syncfusion.com/react/documentation/api/treegrid/#actioncomplete) event, based on **requestType** as **save**. We can reset the properties back to the column state.

In the below example, we have rendered the treegrid columns *Progress* as hidden column and *Priority* as visible column. In the edit mode, we have changed the *Progress* column to visible state and *Priority* column to hidden state.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/treegrid/customizedialog-cs5/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/treegrid/customizedialog-cs5/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/treegrid/customizedialog-cs5/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/treegrid/customizedialog-cs5/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treegrid/customizedialog-cs5" %}

> You can refer to our [`React Tree Grid`](https://www.syncfusion.com/react-ui-components/react-tree-grid) feature tour page for its groundbreaking feature representations. You can also explore our [`React Tree Grid example`](https://ej2.syncfusion.com/react/demos/#/material/treegrid/treegrid-overview) to knows how to present and manipulate data.
