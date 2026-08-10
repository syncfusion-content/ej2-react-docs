---
layout: post
title: Indicate unsaved values in React In-place Editor | Syncfusion
description: Highlight unsaved values in the Syncfusion React In-place Editor by handling actionSuccess, checking primaryKey, and applying a custom CSS class to the wrapper.
control: In-place Editor
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to add indication for unsaved values in React In-place Editor

Add custom indication for unsaved input values by using the [actionSuccess](https://ej2.syncfusion.com/react/documentation/api/inplace-editor#actionsuccess) event when data is not submitted to the server.

In this sample, the `actionSuccess` event is configured and the [URL](https://ej2.syncfusion.com/react/documentation/api/inplace-editor#url) property is not set. When the submit button is clicked, the editor value is saved locally and server submission is prevented because the `URL` property is not configured.

The `actionSuccess` event will trigger the handler function with `null` argument values. In the handler, the [primaryKey](https://ej2.syncfusion.com/react/documentation/api/inplace-editor#primarykey) property is checked to determine if it is empty. If the `primaryKey` is empty, a custom CSS class is added to the `e-value-wrapper` element to apply custom styling that indicates unsaved data.

> To save input values locally without sending to the server, leave the [URL](https://ej2.syncfusion.com/react/documentation/api/inplace-editor#url) property empty.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/custom-indication-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/custom-indication-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/custom-indication-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/in-place-editor/custom-indication-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/in-place-editor/custom-indication-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/in-place-editor/custom-indication-cs2" %}