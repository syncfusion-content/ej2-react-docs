---
layout: post
title: Show multiple toasts in various positions in React Toast component | Syncfusion
description: Learn here all about Show multiple toasts in various positions in Syncfusion React Toast component of Syncfusion Essential JS 2 and more.
control: Toast
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Show multiple toasts in various positions in React Toast component

By default, the Toast position applies only to toasts currently being displayed. To show toasts simultaneously at different screen positions, create multiple Toast component instances, each configured with a different position value. This multi-instance approach enables displaying related notifications (success, warning, error) in different corners or edges of the screen, improving information organization and visual hierarchy.

The following example demonstrates displaying multiple toasts at various screen positions:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs35/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs35/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs35" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/toast/toast-cs36/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/toast/toast-cs36/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/toast/toast-cs36" %}