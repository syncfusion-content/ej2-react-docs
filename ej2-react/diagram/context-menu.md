---
layout: post
title: Context menu in React Diagram Component | Syncfusion®
description: Learn here all about Context menu in Syncfusion® React Diagram Component of Syncfusion Essential® JS 2 and more.
control: Context menu 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Context Menu in React Diagram Component

<!-- markdownlint-disable MD010 -->

In graphical user interfaces, a context menu appears when you perform a right-click operation, offering users a set of actions relevant to the current context. The React Diagram component provides extensive context menu customization capabilities through the [`contextMenuSettings`](https://ej2.syncfusion.com/react/documentation/api/diagram/#contextmenusettings) property.

The Diagram control includes built-in context menu items and allows you to define custom menu items. This flexibility enables you to tailor menus to specific application needs, including creating nested levels of menu items for complex user interactions.

## Prerequisites

To ensure the context menu renders correctly, include the necessary CSS references from the Syncfusion® `ej2-navigations` package by adding the following line to your `src/styles.css` file:

`@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";`

N> If you want to use contextMenu in diagram, you need to inject `DiagramContextMenu` Module in the diagram.

## Default Context Menu

The Diagram component provides default context menu items for frequently used commands. Use the [`show`](https://ej2.syncfusion.com/react/documentation/api/diagram/contextMenuSettings/#show) property to enable or disable the context menu.

The following code demonstrates how to enable the default context menu items:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/contextmenu/contextmenu-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/contextmenu/contextmenu-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/contextmenu/contextmenu-cs1" %}

## Customize Context Menu

You can customize context menus for individual nodes by defining specific menu items beyond the default options. To add custom context menu items, define and incorporate them into the [`items`](https://ej2.syncfusion.com/react/documentation/api/diagram/contextMenuSettings/#items) property of the context menu.

Each custom item can be defined with specific text and ID using the[`text`](https://ej2.syncfusion.com/react/documentation/api/diagram/contextMenuItemModel/#items) and [`ID`](https://ej2.syncfusion.com/react/documentation/api/diagram/contextMenuItemModel/#id) properties, respectively. Additionally, you can enhance visual cues by associating icons through the [`iconCss`](https://ej2.syncfusion.com/react/documentation/api/diagram/contextMenuItemModel/#iconcss) for enabling the use of font icons. The [`target`](https://ej2.syncfusion.com/react/documentation/api/diagram/contextMenuItemModel/#target) property specifies where each menu item should appear, and separators can be included using the [`separator`](https://ej2.syncfusion.com/react/documentation/api/diagram/contextMenuItemModel/#separator) property to visually group menu items. This flexibility allows for a tailored user interface that meets specific application needs efficiently. Nested menu items are defined within the [`items`](https://ej2.syncfusion.com/react/documentation/api/diagram/contextMenuItemModel/#items) property of a parent menu item.


### Display Custom Menu Only

To display only custom context menu items, set the [`showCustomMenuOnly`](https://ej2.syncfusion.com/react/documentation/api/diagram/contextMenuSettingsModel/#showcustommenuonly) property to **true**.

### Context Menu Click

Handle custom menu item actions using the [`contextMenuClick`](https://ej2.syncfusion.com/react/documentation/api/diagram/#contextmenuclick) event. This event triggers when a menu item is clicked and allows you to define specific actions based on the selected item.

The following example demonstrates context menu click handling for node cloning and color changes:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/contextmenu/contextmenu-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/contextmenu/contextmenu-cs2/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/contextmenu/contextmenu-cs2" %}


### Context Menu Open

In certain situations, you may want to hide specific menu items based on the selected elements in the diagram. This can be achieved using the [`contextMenuOpen`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramBeforeMenuOpenEventArgs/) event. When the context menu opens via right-click, this event triggers and allows you to create an array of menu items to hide for the selected element. Pass this array to the[`hiddenItems`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramBeforeMenuOpenEventArgs/#hiddenitems) property of the contextMenuOpen event argument. 

The following example shows how to display different custom menu items for nodes, connectors, and the diagram based on selection:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/contextmenu/contextmenu-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/contextmenu/contextmenu-cs3/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/contextmenu/contextmenu-cs3" %}

### Context Menu with URL

Use the[`url`](https://ej2.syncfusion.com/react/documentation/api/diagram/contextMenuItemModel#url) property of menu items to set website URLs that open when clicked. 

The following code example shows the context menu with url for three websites.

{% raw %}

```Javascript

import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, DiagramContextMenu, Inject } from "@syncfusion/ej2-react-diagrams";

let diagramInstance;

let node = [{
        id: 'node1',
        width: 100,
        height: 100,
        offsetX: 100,
        offsetY: 100,
        annotations: [{id: 'label1',content: 'Rectangle1'}],
    }, {
        id: 'node2',
        width: 100,
        height: 100,
        offsetX: 300,
        offsetY: 100,
        annotations: [{id: 'label2',content: 'Rectangle2'}],
    }
];

//Initializes the Diagram component
function App() {
    return (<DiagramComponent id="diagram_contextmenu" ref={(diagram) => (diagramInstance = diagram)} width={'650px'} height={'350px'} nodes={node} 
        contextMenuSettings={{
            //Enables the context menu
            show: true,
            items: [
                {
                  text: 'Google.com',
                  id: 'google',
                  target: '.e-diagramcontent',
                  url: 'https://www.google.co.in/',
                },
                {
                  text: 'w3schools.com',
                  id: 'W3Schools',
                  target: '.e-diagramcontent',
                  url: 'https://www.w3schools.com/',
                },
                {
                  text: 'stackoverflow.com',
                  id: 'stackoverflow',
                  target: '.e-diagramcontent',
                  url: 'https://stackoverflow.com/',
                },
              ],
            // Hides the default context menu items.
            showCustomMenuOnly: true,
        }}>
    <Inject services={[DiagramContextMenu]}/>
    </DiagramComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

```
{% endraw %}

## Template Support for Context Menu

The Diagram component provides template support for context menu customization. Customize menu item templates before rendering using the [`contextMenuBeforeItemRender`](https://ej2.syncfusion.com/react/documentation/api/diagram/#contextmenubeforeitemrender) event, which triggers while rendering each menu item.

The following example renders menu items with shortcut key codes for specific actions. Key codes for cut, copy, and paste actions display in the right corner of menu items by adding a span element in the `contextMenuBeforeItemRender` event:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/contextmenu/es5menutemplate-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/contextmenu/es5menutemplate-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/diagram/contextmenu/es5menutemplate-cs1" %}

## Context Menu Events

|Event|Description|
|----|----|
|[`contextMenuBeforeItemRender`](https://ej2.syncfusion.com/react/documentation/api/diagram/#contextmenubeforeitemrender) |Triggers while initializing each menu item.|
|[`contextMenuOpen`](https://ej2.syncfusion.com/react/documentation/api/diagram/diagramBeforeMenuOpenEventArgs/)|Triggers upon right-click before opening the context menu.|
|[`contextMenuClick`](https://ej2.syncfusion.com/react/documentation/api/diagram/#contextmenuclick)|Triggers when a menu item is clicked.|

The following example shows how to get these events.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/diagram/contextmenu/es5events-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/diagram/contextmenu/es5events-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/diagram/contextmenu/es5events-cs1" %}

 ## See Also

* [How to open context menu on left click](https://support.syncfusion.com/kb/article/15101/how-to-perform-clipboard-operation-with-custom-context-menu-on-left-click-using-react-diagram)