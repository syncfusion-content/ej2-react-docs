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

A Dialog can be nested within another Dialog. The following sample contains a parent Dialog and a child (inner) Dialog.

## Approach

Nesting is achieved by rendering two Dialog components and pointing the inner Dialog's [`target`](https://ej2.syncfusion.com/react/documentation/api/dialog#target) property to the outer Dialog's [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/dialog#cssclass) selector. Although the two Dialog components are declared as siblings in JSX, at runtime the inner Dialog's DOM is appended to the outer Dialog container because of the `target` setting, making it appear nested inside the parent.

> Nested dialogs rely on the browser's default z-index stacking. The inner Dialog is rendered on top of the outer Dialog. If custom z-index values are applied to either Dialog, ensure the inner Dialog's z-index is higher than the outer Dialog's so it remains visible.

## Step 1: Render the outer Dialog

Render two Dialog components on a page, and set the outer Dialog's [`target`](https://ej2.syncfusion.com/react/documentation/api/dialog#target) property to a container element on the page (for example, `#dialog-target`).

## Step 2: Set the inner Dialog target

Set the inner Dialog's [`target`](https://ej2.syncfusion.com/react/documentation/api/dialog#target) property to the [`cssClass`](https://ej2.syncfusion.com/react/documentation/api/dialog#cssclass) selector of the outer Dialog (for example, `.outerDialog`). This ensures the inner Dialog is rendered inside the outer Dialog at runtime.

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