---
layout: post
title: Custom Toolbar Items in React Rich Text Editor component | Syncfusion
description: Learn how to create and manage custom toolbar items in the Syncfusion React Rich Text Editor component of Syncfusion Essential JS 2 and more.
control:  Custom Toolbar
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Custom Toolbar Items in React Rich Text Editor Component

The React Syncfusion Rich Text Editor allows you to customize the toolbar using the [toolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#toolbarSettings) property. You can add custom commands with text, icons, or HTML templates and define their position in the toolbar.

## Adding a custom command  

This example demonstrates how to add a custom “Ω” command to the toolbar for inserting special characters. Clicking the Ω icon opens a special character list, allowing users to insert symbols into the editor.

### Custom toolbar configuration

To add a custom tool with a tooltip, define it in the [items](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/toolbarSettings/#items) field of the `toolbarSettings` property.

```javascript
{
  template: '<button class="e-tbar-btn e-btn" tabindex="-1" id="custom_tbar" style="width:100%"><div class="e-tbar-btn-text" style="font-weight: 500;"> &#937;</div></button>',
  click: this.onClick.bind(this),
  undo: true,
  // To disable the custom toolbar items on source code view
  command: 'Custom',
  tooltipText: 'Insert Symbol'
}

```

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/custom-tool-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/custom-tool-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/custom-tool-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/custom-tool-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/custom-tool-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/custom-tool-cs2" %}

> When rendering any component for the custom toolbar, like a dropdown, the focus may be lost, causing it to render outside the Rich Text Editor and triggering a blur event. This can interfere with proper functionalities like cursor focus. To prevent this issue, it is recommended to assign the `e-rte-element`s class to the component rendered in the custom toolbar.

## Enabling and disabling toolbar items

You can use the [enableToolbarItem](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#enabletoolbaritem) and [disableToolbarItem](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#disabletoolbaritem) methods to control the state of toolbar items. This methods takes a single item or an array of [items](#available-toolbar-items) as parameter.

> You can add the command name `Custom` to disable the custom toolbar items on source code view and other quick toolbar operations.