---
layout: post
title: Setting max height to dialog in React Dialog component | Syncfusion
description: Override the React Dialog default maxHeight in the beforeOpen event to set a custom maximum based on the target container or viewport.
control: Setting max height to the dialog 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Setting max height to the dialog in React Dialog component

By default, the [`maxHeight`](https://ej2.syncfusion.com/react/documentation/api/dialog#maxheight) of the Dialog is calculated based on the target container. If the target is not specified, the Dialog uses the body as the target and calculates `maxHeight` accordingly. The `maxHeight` can be overridden in the [`beforeOpen`](https://ej2.syncfusion.com/react/documentation/api/dialog#beforeopen) event to set a custom maximum height. The `beforeOpen` event is used because it fires before the Dialog is rendered, allowing you to override the calculated default `maxHeight` before the Dialog becomes visible. The event receives a `BeforeOpenEventArgs` object whose `maxHeight` property can be set to the desired value (for example, `'300px'`).

The sample also calls the [`refreshPosition`](https://ej2.syncfusion.com/react/documentation/api/dialog#refreshposition) method in the `created` event to recalculate the Dialog's position after it is rendered.

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
