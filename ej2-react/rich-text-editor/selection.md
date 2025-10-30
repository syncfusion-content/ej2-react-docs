---
layout: post
title: Text Selection Using Slider in React Rich Text Editor component | Syncfusion
description: Learn how to select a character range using React Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Text Selection
documentation: ug
domainurl: ##DomainURL##
---

# Text Selection Using Slider in React Component

The Syncfusion Rich Text Editor supports character range-based text selection using the **Syncfusion Slider** component. This feature allows users to select a specific range of characters (e.g., 33–45) within the editor content, which is then automatically highlighted.

This functionality is useful for scenarios where precise text selection is needed for operations such as copying, formatting, or analysis.

> **Note:** The example below assumes the Rich Text Editor contains plain text wrapped in a single `<p>` tag for simplicity.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/selection-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/selection-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/selection-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/selection-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/selection-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/selection-cs2" %}