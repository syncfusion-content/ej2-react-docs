---
layout: post
title: Toolbar types in React Rich text editor component | Syncfusion
description: Learn here all about Toolbar types in Syncfusion React Rich text editor component of Syncfusion Essential JS 2 and more.
control: Toolbar types 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar in the React Rich Text Editor component

The Syncfusion React Rich Text Editor provides a powerful toolbar that enables users to format, style, and edit content efficiently. The toolbar includes essential editing tools such as bold, italic, underline, alignment, and lists, along with customization options to suit different use cases.

> To create Rich Text Editor with Toolbar feature, inject the toolbar module to the Rich Text Editor using the `RichTextEditor.Inject(Toolbar)` method.

The Rich Text Editor allows you to configure different types of toolbar using [type](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/toolbarSettings/#type) field in [toolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/toolbarSettings/) property. The types of toolbar are:

1. Expand 
2. MultiRow
3. Scrollable
4. Popup

## Expanding the toolbar

Setting the `type` as `MultiRow` in [toolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/toolbarSettings/#type) will arrange the toolbar items across multiple rows, displaying all configured toolbar items.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs70/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs70/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs70" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs71/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs71/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs71" %}

## Configuring a multi-row toolbar

Setting the `type` as `MultiRow` in [toolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/toolbarSettings/#type) will arrange the toolbar items across multiple rows, displaying all configured toolbar items.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs72/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs72/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs72" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs73/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs73/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs73" %}

## Implementing a scrollable toolbar

Setting the `type` to `Scrollable` in [toolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/toolbarSettings/#type) will display the toolbar items in a single line, enabling horizontal scrolling in the toolbar.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/scrollable-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/scrollable-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/scrollable-cs1" %}

`[functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/scrollable-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/scrollable-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/scrollable-cs2" %}

## Configuring a popup toolbar

Setting the `type` to `Popup` in [toolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/toolbarSettings/#type) will display overflowing toolbar items into a popup container, optimizing the toolbar layout for limited space and smaller screens.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/toolbar-popup/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/toolbar-popup/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-popup" %}

`[functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/toolbar-popup/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/toolbar-popup/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/toolbar-popup" %}


## Creating a sticky toolbar

By default, the toolbar remains fixed at the top of the Rich Text Editor when scrolling. You can customize the position of this sticky toolbar by setting the [floatingToolbarOffset](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#floatingtoolbaroffset) to adjust its offset from the top of the document.

Additionally, you can enable or disable the floating toolbar using the [enableFloating](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/toolbarSettings/#enablefloating) property.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs74/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs74/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs74" %}

`[functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs75/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs75/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs75" %}

## See also

* [Customizing Rich Text Editor Toolbar Styles](https://ej2.syncfusion.com/react/documentation/rich-text-editor/style#customizing-the-rich-text-editors-toolbar)
* [Implementing Inline Editing](https://ej2.syncfusion.com/react/documentation/rich-text-editor/inline-mode)
* [Customizing Accessibility Shortcut Keys](https://ej2.syncfusion.com/react/documentation/rich-text-editor/accessibility#keyboard-interaction)