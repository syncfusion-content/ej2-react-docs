---
layout: post
title: New row position in React Gantt component | Syncfusion
description: Learn here all about New row position in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: New row position 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# New row position in React Gantt component

In Gantt, a new row can be added in one of the following positions: Top, Bottom, Above, Below and Child. This position can be specified through the `newRowPostion` property. We can make use of the toolbarClick event to create a context menu that specifies the position in which the new row is to be added when adding a record through toolbar click.

The following code snippets demonstrate how to achieve this.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/how-to-newrow-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/how-to-newrow-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/how-to-newrow-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/how-to-newrow-cs1" %}