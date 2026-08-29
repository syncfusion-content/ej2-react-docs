---
layout: post
title: Quick Access Toolbar in React Image Editor | Syncfusion
description: Customize the quick access toolbar shown for annotations in the React Image Editor by adding or removing items per annotation type.
control: Quick Access
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Quick Access Toolbar in React Image Editor

The quick access toolbars in the Image Editor facilitate interactions with annotations such as Rectangle, Ellipse, Line, Arrow, and Path. The toolbar is only displayed when an annotation is selected, ensuring a focused and contextual user experience.

The [`showQuickAccessToolbar`](https://ej2.syncfusion.com/react/documentation/api/image-editor#showquickaccesstoolbar) property controls the visibility of the quick access toolbar (default: true). You can enable or disable this toolbar, add or remove items, and create a personalized set of tools.

## Add a custom toolbar item

The quick access toolbar that appears when inserting annotations is customizable using the [`quickAccessToolbarOpen`](https://ej2.syncfusion.com/react/documentation/api/image-editor#quickaccesstoolbaropen) event. This event is triggered when the quick access toolbar is opened, allowing you to modify its contents.

Use the event handler's `args.toolbarItems` to add or remove items. Modify items based on `args.shape` (for example, 'Rectangle' or 'Line'), or set `args.cancel = true` to cancel opening when appropriate.

[`QuickAccessToolbarEventArgs`](https://ej2.syncfusion.com/react/documentation/api/image-editor/quickaccesstoolbareventargs) properties:

- `cancel` : Specifies whether to cancel the quick access toolbar opening action.
- `shape` : The type of shape to be selected such as Rectangle, Text, Line, Ellipse, Arrow, Path, Image, or Freehand draw.
- `toolbarItems` : The collection of toolbar items to be rendered in the quick access toolbar.

Example: add a custom quick access toolbar item.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/image-editor/default-cs29/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/image-editor/default-cs29/app/app.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/image-editor/default-cs29/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/image-editor/default-cs29" %}