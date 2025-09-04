---
layout: post
title: Enter key Configuration in React Rich Text Editor component | Syncfusion
description: Learn how to customize Enter and Shift+Enter key behaviors in the Syncfusion React Rich text editor component of Syncfusion Essential JS 2 and more.
control: Enter key 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Enter and Shift+Enter Key Configuration in React Rich Text Editor Component

Rich Text Editor allows customization of the Enter and Shift+Enter key combinations. This feature provides flexibility in formatting and structuring content within the editor.

## Enter key configuration

By default, pressing the Enter key in the Rich Text Editor creates a new `<p>` tag. You can customize this behavior using the [enterKey](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#enterkey) property.

**Available Options**
| Value | Description |
|-------|-------------|
| `P` | Creates a new `<p>` tag (default), ideal for paragraph-based content. |
| `DIV` | Creates a `<div>` tag, suitable for block containers. |
| `BR` | Inserts a `<br>` tag, creating a single line break without a block element. |

When you customize the Enter key, the editor will create the specified tag when the Enter key is pressed. This configuration also affects the default content structure of the Rich Text Editor.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/enter-key-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/enter-key-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/enter-key-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/enter-key-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/enter-key-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/enter-key-cs2" %}

## Shift+Enter key configuration

By default, pressing Shift+Enter in the Rich Text Editor inserts a `<br>` tag. You can customize this behavior using the [shiftEnterKey](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#shiftEnterkey) property.

**Available Options**
| Value | Description |
|-------|-------------|
| `BR` | Inserts a `<br>` tag (default), creating a single line break. |
| `P` | Creates a new `<p>` tag, starting a new paragraph. |
| `DIV` | Creates a `<div>` tag, adding a block container. |

When you customize the Shift+Enter key, the editor will create the specified tag when the key combination is pressed. This configuration also affects the default content structure of the Rich Text Editor.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/shift-enter-key-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/shift-enter-key-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/shift-enter-key-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/shift-enter-key-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/shift-enter-key-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/shift-enter-key-cs2" %}

## Preventing enter key actions

In some cases, you may want to prevent the default Enter key behavior entirely. The Rich Text Editor allows you to intercept and prevent the default action of the Enter key at the editor level by handling the [actionBegin](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#actionbegin) event. To ensure that the default behavior is also suppressed at the browser level, you need to call the `preventDefault()` method on the event object within the event handler. This approach allows for precise control over the editor's behavior in response to the Enter key press, facilitating the implementation of custom functionality.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/prevent-enter-key-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/prevent-enter-key-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/prevent-enter-key-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/prevent-enter-key-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/prevent-enter-key-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/prevent-enter-key-cs2" %}
