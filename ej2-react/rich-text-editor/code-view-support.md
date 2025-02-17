---
layout: post
title: Code View in React Rich text editor component | Syncfusion
description: Learn here all about Code View in Syncfusion React Rich text editor component of Syncfusion Essential JS 2 and more.
control: Code View 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Code View Support in React Rich Text Editor Component

Rich Text Editor includes the ability for users to directly edit HTML code via `Source View` in the text area. If you made any modification in Source view directly, the changes will be reflected in the Rich Text Editor's content. So, the users will have more flexibility over the content they have created.

## Configuring Source Code Tool in the Toolbar

You can add the `SourceCode` tool in the Rich Text Editor using the `toolbarSettings` [items](../api/rich-text-editor/toolbarSettings/#items) property.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/code-view-support-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/code-view-support-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/code-view-support-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/code-view-support-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/code-view-support-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/code-view-support-cs2" %}


>This functionality can also be enabled through the use of the [CodeMirror](https://codemirror.net/) plugin. It helps to highlight the HTML content and ensures that any modifications in the code view are instantly reflected in the preview mode.

The Rich Text Editor provides the [showSourceCode](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#showsourcecode) method, which allows you to toggle programmatically between the code view and the formatted text view. When invoked, this method switches the editor’s view to the opposite state.

## See Also

* [Integrating Code-Mirror for Enhanced Syntax Highlighting](https://ej2.syncfusion.com/react/documentation/rich-text-editor/third-party-integration#codemirror-integration)