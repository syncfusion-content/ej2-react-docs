---
layout: post
title: Create nested dialog in React Dialog component | Syncfusion
description: Learn here all about Create nested dialog in Syncfusion React Dialog component of Syncfusion Essential JS 2 and more.
control: Create nested dialog 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Create nested dialog in React Dialog component

A Dialog can be nested within another Dialog. The below sample contains parent and child Dialog (inner Dialog).

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