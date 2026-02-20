---
layout: post
title: Setting max height to the dialog in React Dialog component | Syncfusion
description: Learn here all about Setting max height to the dialog in Syncfusion React Dialog component of Syncfusion Essential JS 2 and more.
control: Setting max height to the dialog 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Setting max height to the dialog in React Dialog component

By default, the `maxHeight` of the Dialog is calculated based on the target container. If the target is not specified, the Dialog uses the body as the target and calculates `maxHeight` accordingly. The `maxHeight` can be customized in the [beforeOpen](https://ej2.syncfusion.com/react/documentation/api/dialog/#beforeOpen) event for more control over the dialog's maximum height.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/max-height-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/max-height-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/max-height-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/max-height-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/max-height-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/max-height-cs2" %}
