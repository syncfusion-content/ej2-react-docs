---
layout: post
title: Show hide spinner in React Document editor component | Syncfusion
description: Learn here all about Show hide spinner in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Show hide spinner 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Show hide spinner in React Document editor component

Using [`spinner`](https://ej2.syncfusion.com/documentation/spinner/getting-started/#create-the-spinner-globally) component, you can show/hide spinner while opening document in DocumentEditor .

Example code snippet to show/hide spinner

```ts
// showSpinner() will make the spinner visible
showSpinner(document.getElementById('container'));

// hideSpinner() method used hide spinner
hideSpinner(document.getElementById('container'));
```

Refer to the following example.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/document-editor/spinner-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/document-editor/spinner-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/spinner-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/spinner-cs1" %}

>Note: In above example, we have used setInterval to hide spinner, just for demo purpose.
