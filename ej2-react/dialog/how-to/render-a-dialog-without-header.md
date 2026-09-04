---
layout: post
title: How to render without header in React Dialog | Syncfusion
description: Render a React Dialog without a header by setting the header property to an empty string or null for a clean, minimal modal.
control: Render a dialog without header 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to render without header in React Dialog

The React Dialog can be rendered without a header by setting the [`header`](https://ej2.syncfusion.com/react/documentation/api/dialog#header) property to an empty string or `null`. Alternatively, simply omitting the `header` property also renders the React Dialog without a header, as shown in the following samples.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/dlg-header-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/dlg-header-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/dlg-header-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/dlg-header-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/dlg-header-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/dlg-header-cs2" %}