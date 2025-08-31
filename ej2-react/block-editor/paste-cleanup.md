---
layout: post
title: Paste Clean-up in React Block Editor component | Syncfusion
description: Checkout and learn about Paste Clean-up with React Block Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Block Editor
documentation: ug
domainurl: ##DomainURL##
---

# Paste Clean-up in React Block Editor component

The Block Editor component provides robust paste clean-up functionalities to ensure that pasted content integrates seamlessly and maintains styling and structural consistency. This feature helps remove unwanted formatting, scripts, and elements copied from external sources like web pages or word processors.

You can configure the paste behavior using the [pasteSettings](../api/blockeditor/#pastesettings) property, which allows you to define how content is handled when pasted into the editor.

## Configuring allowed styles

The [allowedStyles](../api/blockeditor/pasteSettingsModel/#allowedstyles) property lets you define which CSS styles are permitted in pasted content. Any style not in this list is stripped out, ensuring that only desired visual attributes are preserved.

By default, the following styles are allowed:

['font-weight', 'font-style', 'text-decoration', 'text-transform'].

In the below example, only `font-weight` and `font-style` styles will be retained from the pasted content. All other inline styles will be removed.

{% raw %}
```typescript
<BlockEditorComponent pasteSettings={{ allowedStyles: ['font-weight', 'font-style'] }}></BlockEditorComponent>
```
{% endraw %}

## Setting denied tags

The [deniedTags](../api/blockeditor/pasteSettingsModel/#deniedtags) property specifies a list of HTML tags to be removed from pasted content. This is useful for stripping potentially problematic elements like `<script>` or `<iframe>` tags. By default, this property is an empty array, so no tags are removed.

In the below example, any `<script>` or `<iframe>` tags found in the pasted content will be removed, preventing unwanted behavior or styling issues.

{% raw %}
```typescript
<BlockEditorComponent pasteSettings={{ deniedTags: ['script', 'iframe'] }}></BlockEditorComponent>
```
{% endraw %}

Below example demonstrates the usage of paste settings that allows only specific styles and also removes the specific tags from the pasted content.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/block-editor/paste-cleanup/allowedstyle/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/block-editor/paste-cleanup/allowedstyle/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/paste-cleanup/allowedstyle" %}

## Disable Keep format

By default, the editor retains the formatting of pasted content (e.g., bold, italics, links). You can disable this by setting the [keepFormat](../api/blockeditor/pasteSettingsModel/#keepformat) property to `false`. When disabled, the editor primarily pastes content as plain text, regardless of the `allowedStyles` configuration.

{% raw %}
```typescript
<BlockEditorComponent pasteSettings={{ keepFormat: false }}></BlockEditorComponent>
```
{% endraw %}

## Allowing plain text

To paste content as plain text, stripping all HTML tags and inline styles, set the [plainText](../api/blockeditor/pasteSettingsModel/#plaintext) property to `true` in [pasteSettings](../api/blockeditor/#pastesettings). This ensures that only raw text is inserted, which is ideal for maintaining strict content consistency. By default, this property is `false`.

{% raw %}
```typescript
<BlockEditorComponent pasteSettings={{ plainText: true }}></BlockEditorComponent>
```
{% endraw %}

Below example demonstrates the usage of paste settings that disables the keep format and allows plain text.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/block-editor/paste-cleanup/plaintext/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/block-editor/paste-cleanup/plaintext/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/paste-cleanup/plaintext" %}

### Events

The Block Editor provides events to monitor and interact with the paste action.

|Name|Args|Description|
|---|---|---|
|[beforePaste](../api/blockeditor/#beforepaste)|BeforePasteEventArgs|Triggers before the content is pasted into the editor.|
|[afterPaste](../api/blockeditor/#afterpaste)|AfterPasteEventArgs|Triggers after the content is pasted into the editor.|

Below example demonstrates how to configure above events in the editor.