---
layout: post
title: Inline Editing in React Rich Text Editor component | Syncfusion
description: Learn how to enable inline editing in the Syncfusion React Rich Text Editor component of Syncfusion Essential JS 2 and more.
control: Inline Editing 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Inline Editing in the React Rich Text Editor Component

Inline editing in the Rich Text Editor enables users to edit content directly within the editor where it is displayed. Unlike traditional editing interfaces where the editor toolbar is in a separate area at the top or bottom, inline editing offers a seamless, on-the-spot editing experience. You can click on the text or select the text you wish to edit and make changes immediately.

Enable inline editing in the Rich Text Editor by using the [inlineMode](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#inlinemode) with the `enable` property as `true`. This configuration activates the feature, allowing direct content editing within its displayed context.

## Edit on select

The inline toolbar in the Rich Text Editor is triggered based on the [onSelection](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/inlineMode/#onselection) option within the inlineMode settings. 

When `onSelection` is set to `true`, the toolbar appears only when text is selected. If `onSelection` is set to `false`, the inline toolbar appears when editable text is focused, regardless of selection.

This configuration enhances the inline editing experience by providing immediate access to formatting options.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs34/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs34/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs34" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs35/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs35/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs35" %}