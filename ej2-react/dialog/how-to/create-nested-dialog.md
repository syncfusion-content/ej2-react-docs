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

A React Dialog can be nested within another React Dialog. The following sample contains a parent Dialog and a child (inner) Dialog.

## Approach

Nesting is achieved by rendering two React Dialog components and pointing the inner React Dialog's [`target`](https://ej2.syncfusion.com/react/documentation/api/dialog#target) property to the outer React Dialog's [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/dialog#cssclass) selector. Although the two React Dialog components are declared as siblings in JSX, at runtime the inner React Dialog's DOM is appended to the outer React Dialog container because of the `target` setting, making it appear nested inside the parent.

> Nested React Dialogs rely on the browser's default z-index stacking. The inner React Dialog is rendered on top of the outer React Dialog. If custom z-index values are applied to either React Dialog, ensure the inner React Dialog's z-index is higher than the outer React Dialog's so it remains visible.

## Step 1: Render the outer React Dialog

Render two React Dialog components on a page, and set the outer React Dialog's [`target`](https://ej2.syncfusion.com/react/documentation/api/dialog#target) property to a container element on the page (for example, `#dialog-target`).

## Step 2: Set the inner React Dialog target

Set the inner React Dialog's [`target`](https://ej2.syncfusion.com/react/documentation/api/dialog#target) property to the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/dialog#cssclass) selector of the outer React Dialog (for example, `.outerDialog`). This ensures the inner React Dialog is rendered inside the outer React Dialog at runtime.

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