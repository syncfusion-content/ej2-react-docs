---
layout: post
title: Display spinner until list items are loaded in React ListView component | Syncfusion
description: Learn here all about Display spinner until list items are loaded in Syncfusion React ListView component of Syncfusion Essential JS 2 and more.
control: Display spinner until list items are loaded 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Displaying a spinner until list items are loaded in React ListView component

Some features of the ListView component, such as remote data-binding, take more time to fetch data from corresponding dataSource/remote URL. In such cases, you can use the EJ2 [`Spinner`](https://ej2.syncfusion.com/react/documentation/spinner/getting-started/) to enhance the user interface. This section explains how to load a spinner component to improve the appearance.

Refer to the following code sample to render the spinner component:

```ts
    function createSpinner({
        target: spinnerInstance
    });
    function showSpinner(spinnerInstance);
```

In this example, the data is fetched from the `Northwind` Service URL; it takes a few seconds to load the data. To enhance the user experience, the spinner component is rendered initially. After the data is loaded from the remote URL, the spinner component will be hidden in the ListView's [`actionComplete`](https://ej2.syncfusion.com/react/documentation/api/list-view/#actioncomplete) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/data-binding-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/data-binding-cs4/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/listview/data-binding-cs4/index.css %}
{% endhighlight %}
{% highlight ts tabtitle="index.html" %}
{% include code-snippet/listview/data-binding-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/data-binding-cs4" %}

