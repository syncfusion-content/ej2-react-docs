---
layout: post
title: Code Blocks in React Block Editor Component | Syncfusion
description: Checkout and learn about Code Blocks with React Block Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Block Editor
documentation: ug
domainurl: ##DomainURL##
---

# Code Blocks in React Block Editor component

The Syncfusion Block Editor allows you to render code snippets with syntax highlighting by setting the block's [blockType](../../api/blockeditor/blockModel#blocktype) property to `Code`. You can customize the available programming languages and set a default language using the `properties` property.

## Global Code Settings

You can configure global settings for code blocks using the `codeBlockSettings` property in the Block Editor root configuration. This ensures consistent behavior for syntax highlighting and language options across all code blocks.

The `codeBlockSettings` property supports the following options:

| Property | Description | Default Value |
|----------|-------------|---------------|
| [languages](../../api/blockeditor/codeSettingsModel#languages) | Specifies the array of language options for syntax highlighting. | [] |
| [defaultLanguage](../../api/blockeditor/codeSettingsModel#defaultlanguage) | Defines the default language to use for syntax highlighting. | 'plaintext' |

## Configure code properties

For Code blocks, you can specify the language for syntax highlighting using the [properties](../../api/blockeditor/blockModel) property. This property supports the following options:

- [language](../../api/blockeditor/codeLanguageModel#language): The default language value used for syntax highlighting.

### Block type & properties
```typescript
// Adding Code block
{
    blockType: 'Code',
    content: [
        {
            const x = 10;
        }
    ],
    properties: {
        language: 'javascript'
    }
    }
```

The following example demonstrates how to configure and render a Code block within the Block Editor.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/block-editor/blocks/block-types/code-block/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/block-editor/blocks/block-types/code-block/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/block-editor/blocks/block-types/code-block" %}