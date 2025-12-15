---
layout: post
title: Appearance in React Block Editor component | Syncfusion
description: Checkout and learn about appearance with React Block Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Block Editor
documentation: ug
domainurl: ##DomainURL##
---

# Appearance in React Block Editor component

The Block Editor component provides several properties to customize its visual appearance, allowing you to control its dimensions, styling, and behavior.

## Setting width and height

You can specify the width and height for the Block Editor component using the [width](../api/blockeditor#width) and [height](../api/blockeditor#height) properties.

{% raw %}
```typescript
<BlockEditorComponent width="100%" height="80vh"></BlockEditorComponent>

// Or with specific pixel values
<BlockEditorComponent width="800px" height="500px"></BlockEditorComponent>
```
{% endraw %}

## Setting readonly mode

You can utilize the [readOnly](../api/blockeditor#readOnly) property to control whether the editor is in read-only mode. When set to `true`, users cannot edit the content but can still view it.

{% raw %}
```typescript
<BlockEditorComponent readonly={true}></BlockEditorComponent>
```
{% endraw %}

## Customization using CSS Class

You can use the [cssClass](../api/blockeditor#cssClass) property to customize the appearance of the Block Editor control.

{% raw %}
```typescript
<BlockEditorComponent width="600px" height="400px" cssClass="custom-editor-theme"></BlockEditorComponent>
```
{% endraw %}

The following example demonstrates the usage of `readOnly` and `cssClass` properties of the Block Editor.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/block-editor/appearance/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/block-editor/appearance/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/appearance" %}