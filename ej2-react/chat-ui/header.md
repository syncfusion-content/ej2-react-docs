---
layout: post
title: Header in React Chat UI component | Syncfusion
description: Checkout and learn about Header with React Chat UI component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: Chat UI
documentation: ug
domainurl: ##DomainURL##
---

# Header in React Chat UI component

## Header visibility

The [showHeader](https://ej2.syncfusion.com/react/documentation/api/chat-ui/#showheader) property enables or disables the Chat header. When enabled, the header can display a title and an icon using the [headerText](../api/chat-ui/#headertext) and [headerIconCss](../api/chat-ui/#headericoncss) properties, respectively.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/header/showHeader/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/header/showHeader/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/header/showHeader" %}

### Setting header text

The [headerText](https://ej2.syncfusion.com/react/documentation/api/chat-ui/#headertext) property sets the title displayed in the header, typically used for a username or group name to provide context for the conversation.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/header/header-text/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/header/header-text/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/header/header-text" %}

### Setting header icon CSS

You can use the [headerIconCss](https://ej2.syncfusion.com/react/documentation/api/chat-ui/#headericoncss) property to customize the styling of the header icon.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/header/header-icon/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/header/header-icon/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/header/header-icon" %}

## Toolbar

The Chat toolbar can be configured by defining a collection of items in the [headerToolbar](https://ej2.syncfusion.com/react/documentation/api/chat-ui/#headertoolbar) property. Each item in the collection configures a specific toolbar element.

### Configuring toolbar items

Toolbar items can be configured with the following properties to control their appearance and behavior.

#### Icon

The [iconCss](https://ej2.syncfusion.com/react/documentation/api/chat-ui/toolbarItemModel/#iconcss) property customizes a toolbar item by applying a specific icon class.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/header/iconCss/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/header/iconCss/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/header/iconCss" %}

#### Item type

The [type](../api/chat-ui/toolbarItemModel/#type) property defines the type of toolbar item. Supported values are `Button`, `Separator`, and `Input`, with `Button` being the default.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/header/itemType/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/header/itemType/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/header/itemType" %}

#### Text

The [text](https://ej2.syncfusion.com/react/documentation/api/chat-ui/toolbarItemModel/#text) property sets the display text for a toolbar item.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/header/text/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/header/text/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/header/text" %}

#### Visibility

The [visible](https://ej2.syncfusion.com/react/documentation/api/chat-ui/toolbarItemModel/#visible) property shows or hides a toolbar item. The default value is `true`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/header/visible/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/header/visible/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/header/visible" %}

#### Disabled state

The [disabled](https://ej2.syncfusion.com/react/documentation/api/chat-ui/toolbarItemModel/#disabled) property disables a toolbar item. The default value is `false`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/header/disable/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/header/disable/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/header/disable" %}

#### Tooltip

The [tooltip](https://ej2.syncfusion.com/react/documentation/api/chat-ui/toolbarItemModel/#tooltip) property sets the text that appears when a user hovers over a toolbar item.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/header/tooltip/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/header/tooltip/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/header/tooltip" %}

#### Setting CSS Class

The [cssClass](https://ej2.syncfusion.com/react/documentation/api/chat-ui/toolbarItemModel/#cssclass) property applies one or more custom CSS classes to a toolbar item for advanced styling.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/header/cssClass/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/header/cssClass/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/chat-ui/header/cssClass/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/header/cssClass" %}

#### Alignment

The [align](https://ej2.syncfusion.com/react/documentation/api/chat-ui/toolbarItemModel/#align) property positions a toolbar item. Supported values are `Left`, `Center`, and `Right`, with `Left` being the default.

In the following example, the `align` property for the toolbar item is set to `Right`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/header/align/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/header/align/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/header/align" %}

#### Enabling tab key navigation in toolbar

You can use the `tabIndex` property of a Toolbar item to enable tab key navigation for the item. By default, the user can switch between items using the arrow keys, but the `tabIndex` property allows you to switch between items using the `Tab` and `Shift+Tab` keys as well.

To use the `tabIndex` property, set it for each Toolbar item which you want to enable tab key navigation. The `tabIndex` property should be set to a positive integer value. A value of `0` or a negative value will disable tab key navigation for the item.

For example, to enable tab key navigation for two Toolbar items you can use the following code:

{% raw %}
```ts
import { ChatUIComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {

    const headerToolbar = {
        items: [
            { text: "Item 1", tabIndex: 1 },
            { text: "Item 2", tabIndex: 2 }
        ]
    };

    return (
        // specifies the tag for render the Chat UI component
        <ChatUIComponent headerToolbar={headerToolbar}></ChatUIComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));
```
{% endraw %}

With the above code, the user can switch between the two Toolbar items using the Tab and Shift+Tab keys, in addition to using the arrow keys. The items will be navigated in the order specified by the `tabIndex` values.

If you set the `tabIndex` value to 0 for all Toolbar items, tab key navigation will be based on the element order rather than the `tabIndex` values. For example:

{% raw %}
```ts
import { ChatUIComponent } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {
    
    const headerToolbar = {
        items: [
            { text: "Item 1", tabIndex: 0 },
            { text: "Item 2", tabIndex: 0 }
        ]
    };
  
    return (
        // specifies the tag for render the Chat UI component
        <ChatUIComponent headerToolbar={headerToolbar}></ChatUIComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));
```
{% endraw %}

In this case, the user can switch between the two Toolbar items using the Tab and Shift+Tab keys, and the items will be navigated in the order in which they appear in the DOM.

#### Setting template

You can use the [template](https://ej2.syncfusion.com/react/documentation/api/chat-ui/toolbarItemModel/#template) property to add custom toolbar item in the Chat UI component.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/header/template/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/header/template/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/chat-ui/header/template/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/header/template" %}

### Click event

The [itemClicked](https://ej2.syncfusion.com/react/documentation/api/chat-ui/toolbarSettings/#itemclicked) event, defined within the `toolbarSettings` property, triggers when a user clicks a toolbar item. It returns the item that was clicked.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/chat-ui/header/itemClick/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/chat-ui/header/itemClick/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/chat-ui/header/itemClick" %}