---
layout: post
title: Slash Menu  in React Rich Text Editor component | Syncfusion
description: Learn here all about Slash Menu in Syncfusion React Rich Text Editor component of Syncfusion Essential JS 2 and more.
control: Slash Menu 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Slash Commands in the React Rich Text Editor Component

The Slash Menu in the Rich Text Editor provides users with an efficient way to apply formatting, insert elements, and execute custom commands by simply typing the "/" character. This feature enhances the user experience by offering quick access to common editing actions within the editor.

## Enabling the slash menu

To use the Slash Menu feature, inject Slash Menu module into the services.

To enable the Slash Menu, set the `enable` property within [slashMenuSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#slashmenusettings) to `true`. By default, this feature is disabled. Once enabled, the Slash Menu will appear when the user types the "/" character in the editor.

## Configuring the slash menu items

The slashMenuSettings property allows customization of the `items` displayed in the Slash Menu. By defining the [items](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/slashMenuSettingsModel/#items) property, a list of available commands can be provided for users to choose from when they type a slash (/) in the Rich Text Editor.

This list can include various formatting options such as paragraph and heading levels. Here’s an code snippet of configuring the Slash Menu items:

```typescript

private slashMenuSettings: SlashMenuSettingsModel = {
    enable: true,
    items: ['Paragraph', 'Heading 1', 'Heading 2', 'Heading 3'] 
    }

```

## Customizing the popup width and height

The size of the Slash Menu popup can be customized using the [popupWidth](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/slashMenuSettingsModel/#popupwidth) and [popupHeight](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/slashMenuSettingsModel/#popupheight) properties within slashMenuSettings. Adjusting these values allows for control over the dimensions of the menu. 

Below is an code snippet showing how to customize both the width and height of the popup:

```typescript

private slashMenuSettings: SlashMenuSettingsModel = {
    enable: true,
    items: ['Paragraph', 'Heading 1', 'Heading 2', 'Heading 3'],
    popupHeight: 300,
    popupWidth: 250
}

```

## Adding custom slash menu items

Custom items can be added by defining the items property inside slashMenuSettings. This property accepts either a string of predefined items or an array of objects representing custom menu items.

Each custom item object can include the following properties:

| Property    | Description                                           |
|-------------|-------------------------------------------------------|
| text        | The label of the menu item.                           |
| command     | The action to be executed when the item is clicked.   |
| type        | Groups related items in the Slash Menu.               |
| iconCss     | Specifies the CSS class for the item's icon.          |
| description | Provides a short description for the item.            |


The following code demonstrates how to set up the Custom Slash Menu item in the Rich Text Editor to insert meeting notes and signature:


`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/slash-menu-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/slash-menu-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/slash-menu-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/slash-menu-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/slash-menu-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/slash-menu-cs2" %}