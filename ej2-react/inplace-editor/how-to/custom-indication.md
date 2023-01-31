---
layout: post
title: Custom indication in React Inplace editor component | Syncfusion
description: Learn here all about Custom indication in Syncfusion React Inplace editor component of Syncfusion Essential JS 2 and more.
control: Custom indication 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Custom indication in React Inplace editor component

You can add custom indication to unsaved input value by using the [actionSuccess](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#actionsuccess) event, when data not submitted to the server.

In this sample, the `actionSuccess` event configured and the [URL](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#url) property not included. Then submit button clicked, the current editor value saved into input and data sending to server action prevented due to the `URL` property not configured.

But `actionSuccess` event will trigger the handler function with `null` argument values. In handler function data property [primaryKey](https://ej2.syncfusion.com/react/documentation/api/inplace-editor/#primarykey) value checked, whether it empty or not. If it is empty custom class, added in the `e-value-wrapper` element to customize its styles.

> To send input value to local, set the `URL` property as empty.

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