---
layout: post
title: Load dialog content using AJAX in React Dialog component | Syncfusion
description: Learn how to dynamically load dialog content from external sources using AJAX in Syncfusion React Dialog component of Syncfusion Essential JS 2 and more.
control: Load dialog content using AJAX 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Load dialog content using AJAX in React Dialog component

The Dialog component supports dynamic content loading from external sources, such as server files or API endpoints, using AJAX. This allows you to fetch and display content on demand without including it directly in the markup.

## Basic AJAX loading

You can use the Dialog's lifecycle events to trigger AJAX requests and populate the dialog content. The following approach demonstrates how to load content when the dialog opens:

1. Use the [beforeOpen](https://ej2.syncfusion.com/react/documentation/api/dialog/#beforeopen) or [open](https://ej2.syncfusion.com/react/documentation/api/dialog/#open) event to initiate an AJAX request
2. Update the dialog content using the fetched data
3. Handle errors appropriately if the request fails

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/dialog-utility-alert-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/dialog-utility-alert-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/dialog-utility-alert-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/dialog-utility-alert-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/dialog-utility-alert-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/dialog-utility-alert-cs2" %}

## Best practices

- **Caching**: Store fetched content to avoid redundant AJAX requests
- **Loading indicators**: Display a spinner or message while content is being loaded
- **Error handling**: Provide user-friendly error messages if the request fails
- **Performance**: Consider lazy-loading content only when necessary

For more AJAX loading examples, refer to the [AJAX Content demo](https://ej2.syncfusion.com/react/demos/#/material/dialog/ajax).
