---
layout: post
title: Toolbar items in React AI AssistView component | Syncfusion
description:  Checkout and learn about Toolbar items with React AI AssistView component of Syncfusion Essential JS 2 and more details.
platform: ej2-react
control: AI AssistView
documentation: ug
domainurl: ##DomainURL##
---

# Toolbar items in React AI AssistView component

You can render the AI AssistView toolbar items by using the `items` property in the [toolbarSettings](https://ej2.syncfusion.com/react/documentation/api/ai-assistview#toolbarsettings), [responseToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/ai-assistview#responsetoolbarsettings) & [promptToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/ai-assistview#prompttoolbarsettings) properties.

## Adding header toolbar items

### Items

The AI AssistView toolbar's can be rendered by defining an array of items. Items can be constructed with the following built-in command types or item template.

#### Adding iconCss

You can customize the toolbar icons by using the [iconCss](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/toolbarItemModel/#iconcss) property.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/toolbar-items/align/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/toolbar-items/align/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/toolbar-items/align" %}

#### Setting item type

You can change the toolbar item type by using the [`type`](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/toolbarItemModel/#type) property. The `type` supports three types of items such as `Button`, `Separator` and `Input`. By default, the type is `Button`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/toolbar-items/item-type/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/toolbar-items/item-type/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/toolbar-items/item-type" %}

#### Setting text

You can use the [text](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/toolbarItemModel/#text) property to set the text for toolbar item.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/toolbar-items/text/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/toolbar-items/text/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/toolbar-items/text" %}

#### Show or hide toolbar item

You can use the [visible](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/toolbarItemModel/#visible) property to specify whether to show or hide the toolbar item. By default, its value is `true`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/toolbar-items/visible/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/toolbar-items/visible/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/toolbar-items/visible" %}

#### Setting disabled

You can use the [disabled](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/toolbarItemModel/#disabled) property to disable the toolbar item. By default, its value is `false`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/toolbar-items/disabled/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/toolbar-items/disabled/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/toolbar-items/disabled" %}

#### Setting tooltip text

You can use the [tooltip](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/toolbarItemModel/#tooltip) property to specify the tooltip text to be displayed on hovering the toolbar item.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/toolbar-items/tooltip/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/toolbar-items/tooltip/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/toolbar-items/tooltip" %}

#### Setting cssClass

You can use the [cssClass](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/toolbarItemModel/#cssclass) property to customize the toolbar item.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/toolbar-items/cssClass/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/toolbar-items/cssClass/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ai-assistview/toolbar-items/cssClass/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/toolbar-items/cssClass" %}

#### Setting alignment

You can change the alignment of toolbar item by using the [`align`](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/toolbarItemModel/#align) property. It supports three types of alignments such as `Left`, `Center` and `Right`. By default, the value is `Left`.

In the following example, toolbar item type is set with `Right`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/toolbar-items/align/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/toolbar-items/align/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/toolbar-items/align" %}

#### Enabling tab key navigation in toolbar

You can use the [`tabIndex`](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/toolbarItemModel/#tabindex) property of a Toolbar item to enable tab key navigation for the item. By default, the user can switch between items using the arrow keys, but the `tabIndex` property allows you to switch between items using the `Tab` and `Shift+Tab` keys as well.

To use the `tabIndex` property, set it for each Toolbar item which you want to enable tab key navigation. The `tabIndex` property should be set to a positive integer value. A value of `0` or a negative value will disable tab key navigation for the item.

For example, to enable tab key navigation for two Toolbar items you can use the following code:

{% raw %}
```ts
import { AIAssistViewComponent, PromptRequestEventArgs, ToolbarSettingsModel } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {

    const assistInstance = React.useRef<AIAssistViewComponent>(null);
    
    const toolbarSettings: ToolbarSettingsModel = {
        items: [
            { text: "Item 1", tabIndex: 1 },
            { text: "Item 2", tabIndex: 2 }
        ]
    };

    const onPromptRequest = (args: PromptRequestEventArgs) => {
        setTimeout(() => {
            let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            assistInstance.current.addPromptResponse(defaultResponse);
          }, 1000);
    };
  
    return (
        // specifies the tag for render the AI AssistView component
        <AIAssistViewComponent id="aiAssistView" ref={assistInstance} promptRequest={onPromptRequest} toolbarSettings={toolbarSettings}></AIAssistViewComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));
```
{% endraw %}

With the above code, the user can switch between the two Toolbar items using the Tab and Shift+Tab keys, in addition to using the arrow keys. The items will be navigated in the order specified by the `tabIndex` values.

If you set the `tabIndex` value to 0 for all Toolbar items, tab key navigation will be based on the element order rather than the `tabIndex` values. For example:

{% raw %}
```ts
import { AIAssistViewComponent, PromptRequestEventArgs, ToolbarSettingsModel } from '@syncfusion/ej2-react-interactive-chat';
import * as React from 'react';
import * as ReactDOM from "react-dom";

function App() {

    const assistInstance = React.useRef<AIAssistViewComponent>(null);
    
    const toolbarSettings: ToolbarSettingsModel = {
        items: [
            { text: "Item 1", tabIndex: 0 },
            { text: "Item 2", tabIndex: 0 }
        ]
    };

    const onPromptRequest = (args: PromptRequestEventArgs) => {
        setTimeout(() => {
            let defaultResponse = 'For real-time prompt processing, connect the AIAssistView component to your preferred AI service, such as OpenAI or Azure Cognitive Services. Ensure you obtain the necessary API credentials to authenticate and enable seamless integration.';
            assistInstance.current.addPromptResponse(defaultResponse);
          }, 1000);
    };
  
    return (
        // specifies the tag for render the AI AssistView component
        <AIAssistViewComponent id="aiAssistView" ref={assistInstance} promptRequest={onPromptRequest} toolbarSettings={toolbarSettings}></AIAssistViewComponent>
    );
}

ReactDOM.render(<App />, document.getElementById('container'));
```
{% endraw %}

In this case, the user can switch between the two Toolbar items using the Tab and Shift+Tab keys, and the items will be navigated in the order in which they appear in the DOM.

#### Setting template

You can use the [template](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/toolbarItemModel/#template) property to add custom toolbar item in the AI AssistView.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/toolbar-items/template/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/toolbar-items/template/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/ai-assistview/toolbar-items/template/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/toolbar-items/template" %}

### Item clicked

The [itemClicked](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/toolbarSettings/#itemclicked) event is triggered when the header toolbar item is clicked.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/toolbar-items/itemClick/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/toolbar-items/itemClick/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/toolbar-items/itemClick" %}

## Built-in toolbar items

### Prompt

By default, the prompt toolbar renders the built-in items such as `edit` and `copy` items. These allow users to edit the prompt text or copy as needed.

In the following example, AI AssistView component rendered with built-in toolbar items such as `edit` and `copy` items.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/assist-view/prompts/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/assist-view/prompts/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/prompts" %}

#### Setting width

You can use the [width](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/promptToolbarSettings/#width) property to set the width of the prompt toolbar in the AI AssistView.

#### Item clicked

The [itemClicked](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/promptToolbarSettings/#itemclicked) event is triggered when the prompt toolbar item is clicked.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/toolbar-items/prompt-itemClick/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/toolbar-items/prompt-itemClick/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/toolbar-items/prompt-itemClick" %}

### Response

By default, the response toolbar renders the built-in items like `copy`, `like`, and `dislike` items to perform response copy and perform rating actions.

In the following example, AI AssistView renders with built-in toolbar items.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/assist-view/prompts/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/assist-view/prompts/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/assist-view/prompts" %}

#### Setting width

You can use the [width](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/responseToolbarSettings/#width) property to set the width of the response toolbar in the AI AssistView.

#### Item clicked

The [itemClicked](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/responseToolbarSettings/#itemclicked) event is triggered when the response toolbar item is clicked.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/toolbar-items/response-itemClick/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/toolbar-items/response-itemClick/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/toolbar-items/response-itemClick" %}

## Adding custom toolbar items

You can also add custom toolbar items in the AI AssistView by using the [toolbarSettings](https://ej2.syncfusion.com/react/documentation/api/ai-assistview#toolbarsettings), [responseToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/ai-assistview#responsetoolbarsettings) & [promptToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/ai-assistview#prompttoolbarsettings) properties.

### Prompt

You can use the [promptToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/ai-assistview#prompttoolbarsettings) property to add custom items for the prompt toolbar in the AI AssistView.

> To know more about the items, please refer to the [Items](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/promptToolbarSettings/#items) section.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/toolbar-items/prompt-settings/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/toolbar-items/prompt-settings/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/toolbar-items/prompt-settings" %}

### Response

You can use the [responseToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/ai-assistview#responsetoolbarsettings) property to add custom response toolbar in the AI AssistView.

> To know more about the items, please refer to the [Items](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/responseToolbarSettings/#items) section.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/ai-assistview/toolbar-items/response-settings/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/ai-assistview/toolbar-items/response-settings/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/ai-assistview/toolbar-items/response-settings" %}

#### Item clicked

The [itemClicked](https://ej2.syncfusion.com/react/documentation/api/ai-assistview/promptToolbarSettings/#itemclicked) event is triggered when a custom toolbar item is clicked. This event applies to both prompt and response toolbar items.
