---
layout: post
title: Load tab items dynamically in React Tab component | Syncfusion
description: Learn here all about Load tab items dynamically in Syncfusion React Tab component of Syncfusion Essential JS 2 and more.
control: Load tab items dynamically 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Load tab items dynamically in React Tab component

Tabs can be added dynamically by passing array of items and index value to the [`addTab`](https://ej2.syncfusion.com/react/documentation/api/tab#addtab) method.

```ts
    // New tab title and content inputs are fetched and stored in local variable
    let title: string = document.getElementById('tab-title').value;
    let content: string = document.getElementById('tab-content').value;

    // Required tab item object formed by using textbox inputs
    let item: Object =  { header: { text: title }, content: createElement('pre', { innerHTML: content.replace(/\n/g, '<br>\n') }).outerHTML };

    // Item object and the index argument passed into the addTab method to add a new tab
    this.addTab([item], this.totalItems-1);
```

In the following demo, you can add the tab content by clicking the **+**.  This **+** icon is added on the tab header using [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/tab/header#iconcss) property.  Enter the new Tab heading and content details in the available text boxes, click 'Add Tab' button to pass the details as an array and here last index is calculated to append the new tab at the end.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/tab/dynamic-tab-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/tab/dynamic-tab-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/tab/dynamic-tab-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/tab/dynamic-tab-cs1" %}
