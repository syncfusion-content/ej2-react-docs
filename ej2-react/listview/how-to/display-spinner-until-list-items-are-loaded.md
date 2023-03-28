---
layout: post
title: Display spinner until list items are loaded in React Listview component | Syncfusion
description: Learn here all about Display spinner until list items are loaded in Syncfusion React Listview component of Syncfusion Essential JS 2 and more.
control: Display spinner until list items are loaded 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Display spinner until list items are loaded in React Listview component

The features of the ListView component such as remote data-binding take more time to fetch data from corresponding dataSource/remote URL. In this case, you can use EJ2 [Spinner](https://ej2.syncfusion.com/react/documentation/spinner/getting-started/) to enhance the appearance of the UI. This section explains how to load a spinner component to groom the appearance.

Refer to the following code sample to render the spinner component.

```ts
    function createSpinner({
        target: spinnerInstance
    });
    function showSpinner(spinnerInstance);
```

Here, the data is fetched from `Northwind` Service URL; it takes a few seconds to load the data. To enhance the UI, the spinner component has been rendered initially. After the data is loaded from remote URL, the spinner component will be hidden in ListView [actionComplete](https://ej2.syncfusion.com/react/documentation/api/list-view/#actioncomplete) event.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/listview/data-binding-cs4/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/listview/data-binding-cs4/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/listview/data-binding-cs4" %}
