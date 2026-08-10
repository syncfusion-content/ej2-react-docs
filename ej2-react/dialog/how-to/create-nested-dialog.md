---
layout: post
title: How to create nested in React Dialog | Syncfusion
description: Open a child React Dialog inside a parent Dialog by setting the inner dialog's target property to the outer dialog's CSS class.
control: Create nested dialog 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# How to create nested in React Dialog

A Dialog can be nested within another Dialog. The following sample contains parent and child Dialog (inner Dialog).

**Step 1**:

Render two Dialog components in a page.

**Step 2**:

Set the inner Dialog target as `.outerDialog`.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/nested-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/nested-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/nested-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/dialog/nested-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/dialog/nested-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/dialog/nested-cs2" %}