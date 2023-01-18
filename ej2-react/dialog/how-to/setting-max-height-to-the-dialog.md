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

By default, the maxHeight for the Dialog is calculated based on the target. If the target is not specified externally, the Dialog consider the body as target and will calculate the maxHeight based on it. We have an option to set the maxHeight of the Dialog in the [beforeOpen](https://ej2.syncfusion.com/react/documentation/api/dialog/#beforeOpen) event.

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
