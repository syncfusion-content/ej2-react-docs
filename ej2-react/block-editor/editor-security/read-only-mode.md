---
layout: post
title: Controlled Access in React Block Editor Component | Syncfusion
description: Checkout and learn about Controlling Editor Access with React Block Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Block Editor
documentation: ug
domainurl: ##DomainURL##
---

# Controlling Editor Access in React Block Editor component

The Syncfusion React Block Editor provides read-only modes to control user interaction with the editor. This allows users to view formatted content without editing. This features are useful for displaying content without modifications or temporarily restricting input.

## Read-only mode

Read-only mode prevents users from editing the content in the Block Editor while preserving the ability to view formatted text. This feature is particularly useful when you want to display formatted content without permitting modifications.

To enable the read-only mode, set the [readonly](https://ej2.syncfusion.com/react/documentation/api/blockeditor/index-default#readonly) property to `true`. The content remains viewable with its formatting intact, but editing is restricted.

The following example demonstrates how to enable read-only mode in the Block Editor:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/block-editor/readonly/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/block-editor/readonly/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/block-editor/readonly" %}
        