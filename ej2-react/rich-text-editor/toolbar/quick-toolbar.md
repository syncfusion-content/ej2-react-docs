---
layout: post
title: Quick Toolbars in React Rich Text Editor component | Syncfusion
description: Learn how to customize the Quick toolbars in the Syncfusion React Rich Text Editor component of Syncfusion Essential JS 2 and more.
control: Quick toolbars
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Quick Toolbars in the React Rich Text Editor component

The Rich Text Editor has quick toolbars that act as context-menus, appearing when you click on elements like images, links, audio, video, and tables. By default, specific quick toolbar items are displayed when clicking on the corresponding element. You can customize these items using the [quickToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#quickToolbarSettings) property.

> To use QuickToolbar feature, inject `QuickToolbar` module using the `<Inject services={[QuickToolbar]} />`.

## Image quick toolbar

Customize the image quick toolbar using the `image` property in [quickToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/quickToolbarSettings/). The Rich Text Editor provides essential tools such as 'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'Display', 'AltText', and 'Dimension' allowing seamless image management and editing directly within the content.

By configuring these options in the [quickToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/quickToolbarSettings/) property, you can enhance the editor’s functionality, ensuring a user-friendly experience for efficiently handling image elements.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/customize-image-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/customize-image-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/customize-image-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/customize-image-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/customize-image-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor/customize-image-cs2" %}

## Link quick toolbar

The link quick toolbar appears when you click on a link in the editor. You can customize its items using the `link` property in the  [quickToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/quickToolbarSettingsModel/#link).

The Rich Text Editor provides essential tools in the link quick toolbar, including "Open", "Edit Link", "Remove Link", and "Custom Tool".

The following example demonstrates how to customize the link quick toolbar using the [quickToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/quickToolbarSettingsModel/#link) property.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs44/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs44/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs44" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs45/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs45/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs45" %}

## Table quick toolbar

The table quick toolbar opens when you click anywhere within a table. Customize its items using the `table` property in the [quickToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/quickToolbarSettingsModel/#table).

The quick toolbar appears when clicking on a table, providing easy access to table-related commands. You can customize the quick toolbar by adding or removing tools using the [quickToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#quickToolbarSettings) property.

The following example demonstrates how to customize the table quick toolbar using the [quickToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/quickToolbarSettings) property.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/customize-table-quicktoolbar-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/customize-table-quicktoolbar-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/customize-table-quicktoolbar-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/customize-table-quicktoolbar-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/customize-table-quicktoolbar-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/customize-table-quicktoolbar-cs2" %}

## Audio quick toolbar

Customize the quick toolbar items for audio elements using the `audio` property in the [quickToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/quickToolbarSettingsModel/#audio).The Rich Text Editor provides essential tools such as "AudioReplace", "Remove", and "AudioLayoutOption", allowing seamless management and editing of audio content.

By configuring these options in the [quickToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/quickToolbarSettingsModel/#audio) property, you can enhance the editor’s capabilities, ensuring a user-friendly experience for handling audio elements efficiently.

`[Class-component]`

```ts

import * as React from 'react';
import { HtmlEditor, Audio, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

class App extends React.Component<{},{}> {
  private toolbarSettings: object = {
    items: ['Audio'],
  };
  private quickToolbarSettings: object = {
     audio: ['AudioReplace', 'Remove', 'AudioLayoutOption']
  }
  private rteValue:string = `<p><b>Get started with Quick Toolbar to click on an audio</b></p>
                        <p>Using the quick toolbar, users can replace, display, and delete the selected audio.</p>
                        <p><audio controls><source src="https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Audio.wav" type="audio/mp3" /></audio></p>`;
  public render() {
    return (
      <RichTextEditorComponent height={450} value={this.rtevalue} toolbarSettings={this.toolbarSettings} quickToolbarSettings={this.quickToolbarSettings}>
         <Inject services={[Toolbar, Audio, Link, HtmlEditor, QuickToolbar]} />
      </RichTextEditorComponent>
    );
  }
}

```

`[Functional-component]`

```ts

import * as React from 'react';
import { HtmlEditor, Audio, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

function App() {
  let toolbarSettings: object = {
    items: ['Audio'],
  }
  let quickToolbarSettings: object = {
    audio: ['AudioReplace', 'Remove', 'AudioLayoutOption']
  }
  let rteValue = `<p><b>Get started with Quick Toolbar to click on an audio</b></p>
                        <p>Using the quick toolbar, users can replace, display, and delete the selected audio.</p>
                        <p><audio controls><source src="https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Audio.wav" type="audio/mp3" /></audio></p>`;

  return (
    <RichTextEditorComponent height={450} value={rtevalue} toolbarSettings={toolbarSettings} quickToolbarSettings={quickToolbarSettings}>
        <Inject services={[Toolbar, Audio, Link, HtmlEditor, QuickToolbar]} />
    </RichTextEditorComponent>
  );
}

```

## Video quick toolbar

The video quick toolbar appears when you click on a video element. You can customize its tools using the `video` property in the [quickToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/quickToolbarSettingsModel/#video).

The Rich Text Editor allows you to tailor the video quick toolbar with essential tools such as "VideoReplace", "VideoAlign", "VideoRemove", "VideoLayoutOption", and "VideoDimension", enabling seamless management of embedded videos.

By configuring these options in the [quickToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/quickToolbarSettingsModel/#video) property, you enhance the editor's capabilities, ensuring a user-friendly experience for editing and customizing video elements effortlessly.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/customize-video-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/customize-video-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/customize-video-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/customize-video-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/customize-video-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/customize-video-cs2" %}

## Text quick toolbar

The text quick toolbar provides easy access to commonly used formatting tools, enabling users to apply styles and adjustments effortlessly. This enhances the editing experience by streamlining text formatting.

Customize the quick toolbar items using the `text` property in the [quickToolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/quickToolbarSettingsModel/#text). Any toolbar items available in the Rich Text Editor can be configured for the text quick toolbar. The example below demonstrates its customization.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/text-quick-toolbar-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/text-quick-toolbar-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/text-quick-toolbar-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/text-quick-toolbar-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/text-quick-toolbar-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/text-quick-toolbar-cs2" %}

## Quick inline toolbar

Quick commands are opened as context-menu on clicking the corresponding element. The commands must be passed as string collection to image, text, and link attributes of the [quickToolbarSettings](/rich-text-editor/api-quickToolbarSettings.html) property.

| **Target element** | **Default quick toolbar items** |
| --- | --- |
| Image | 'Replace', 'Align', 'Caption', 'Remove', 'InsertLink', 'Display', 'AltText', and 'Dimension' |
| Link | 'Open', 'Edit', and 'UnLink' |
| Text | null <br> (Any toolbar [items](https://ej2.syncfusion.com/react/documentation/rich-text-editor/toolbar#toolbar-items) in the Rich Text Editor can be configured here). |
| Table | 'TableHeader', 'TableRows', 'TableColumns', 'BackgroundColor', 'TableRemove', 'Alignments', 'TableCellVerticalAlign' and 'Styles' |

Custom tool can be added to the corresponding quick toolbar, using the [quickToolbarSettings](/rich-text-editor/quickToolbarSettings/)  property.

The following sample demonstrates the option to insert the image to the Rich Text Editor content as well as option to rotate the image through the quick toolbar. The image rotation functionalities have been achieved through the [toolbarClick](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/#toolbarclick) event.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs76/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs76/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs76" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/basic-cs77/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/basic-cs77/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/basic-cs77" %}
