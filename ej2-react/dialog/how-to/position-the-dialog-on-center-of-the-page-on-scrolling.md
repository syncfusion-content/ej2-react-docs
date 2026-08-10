---
layout: post
title: Center the dialog on page scroll in React Dialog | Syncfusion
description: Keep the React Dialog centered in the viewport while the page scrolls by applying the e-fixed CSS class to the dialog element.
control: Position the dialog on center of the page on scrolling 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Center the dialog on page scroll in React Dialog

By default, the Dialog scrolls along with the page or container. To keep the Dialog fixed in the center of the viewport while the page scrolls, apply the `e-fixed` class to the Dialog element. This prevents the Dialog from moving when the user scrolls the page, maintaining its centered position in the current view.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/scrollposition-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/scrollposition-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/scrollposition-cs2" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/scrollposition-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/scrollposition-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/scrollposition-cs3" %}