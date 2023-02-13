---
layout: post
title: Immutable in React Gantt component | Syncfusion
description: Learn here all about Immutable in Syncfusion React Gantt component of Syncfusion Essential JS 2 and more.
control: Immutable 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Immutable in React Gantt component

The immutable mode optimizes the Gantt re-rendering performance by using the object reference and [deep compare](https://dmitripavlutin.com/how-to-compare-objects-in-javascript/#4-deep-equality) concept. When performing the Gantt actions, it will only re-render the modified or newly added rows and prevent the re-rendering of the unchanged rows.

To enable this feature, you have to set the [enableImmutableMode](https://ej2.syncfusion.com/react/documentation/api/gantt/enableimmutablemode) property as **true**.

> This feature uses the primary key value for data comparison. So, you need to provide the [isPrimaryKey](https://ej2.syncfusion.com/react/documentation/api/gantt/column/#isprimarykey) column.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/gantt/immutable-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/gantt/immutable-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/gantt/immutable-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/gantt/immutable-cs1" %}

## Limitations

The following features are not supported in the immutable mode:

* Column reorder
* Virtualization