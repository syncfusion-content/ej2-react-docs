---
layout: post
title: Controlling Editor Access in React Rich Text Editor component | Syncfusion
description: Learn here all about Controlling Editor Access in Syncfusion React Rich Text Editor component of Syncfusion Essential JS 2 and more.
control: Controlling Editor Access
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Controlling Editor Access in React Rich Text Editor
	
The Syncfusion React Rich Text Editor provides read-only and disabled modes to control user interaction with the editor. Read-only mode allows users to view formatted content without editing, while disabled mode prevents all interactions, including toolbar access. These features are useful for displaying content without modifications or temporarily restricting input.

## Read-only mode

Read-only mode prevents users from editing the content in the Rich Text Editor while preserving the ability to view formatted text. This feature is particularly useful when you want to display formatted content without permitting modifications.

To enable the read-only mode, set the [readonly](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#readonly) property to `true`. 

This will allow you to view the content without making any modifications.

The following example demonstrates how to enable read-only mode in the Rich Text Editor:

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/read-only-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/read-only-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/read-only-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/read-only-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/read-only-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/read-only-cs2" %}

## Disabled mode

In disabled mode, the Rich Text Editor becomes completely non-interactive, preventing users from editing its content. This is especially useful when you want to display read-only content or temporarily restrict user input without removing the editor from the UI.

### How to disable the editor

To disable the editor, set the [enabled](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#enabled) property to `false`.

When disabled, the editor becomes non-interactive, ensuring that users cannot edit or modify the content.

The following example demonstrates how to disable the Rich Text Editor by setting the `enabled` property to `false`.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/disable-editor-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/disable-editor-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/disable-editor-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/disable-editor-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/disable-editor-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/disable-editor-cs2" %}
