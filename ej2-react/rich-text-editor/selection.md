---
layout: post
title: Selection in React Rich Text Editor component | Syncfusion
description: Learn how to select a character range using React Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: ej2-react
control: Text Selection
documentation: ug
domainurl: ##DomainURL##
---

# Selection in React Rich Text Editor Component

## Text selection

The Rich Text Editor supports character range-based text selection using the **Syncfusion Slider** component. This feature allows users to select a specific range of characters (e.g., 33–45) within the editor content, which is then automatically highlighted.

### Adding a Slider for character range selection

The Rich Text Editor can be integrated with the **Slider** component to enable precise character range-based text selection. The slider is configured in `range` type, allowing users to select a start and end index within the editor content. When the slider values change, the corresponding text range is highlighted automatically. 

This approach is particularly useful for scenarios where exact character-level selection is required for operations such as copying, formatting, or analysis.

```ts
function App() {
    const [sliderValue, setSliderValue] = useState<[number, number]>([0, 50]);
    const [maxLength, setMaxLength] = useState(400);
    return (
        <SliderComponent type="Range" value={sliderValue} min={0} max={maxLength} />
    );
}

export default App;
```
### Dynamic range adjustment based on content

When the editor is created, the actual length of the text content is calculated, and the slider’s maximum value is updated dynamically to match this length. This ensures that the slider range always reflects the current content size. The editor is also focused programmatically to make the selection visible, and an initial selection is applied based on the slider’s default values.

```ts
function App() {
    const rteContent = `<p>The Syncfusion Rich Text Editor, a WYSIWYG ("what you see is what you get") editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here. Key features: Provides IFRAME and DIV modes. Bulleted and numbered lists. Handles images, hyperlinks, videos, uploads, etc. Contains undo/redo manager.</p>`;

    useEffect(() => {
        setTimeout(() => {
        const rte = rteRef.current;
        if (!rte) return;

        const panel = rte.contentModule.getEditPanel();
        const realLength = panel.textContent?.length ?? 0;

        setMaxLength(realLength);
        if (sliderRef.current) {
            sliderRef.current.max = realLength;
            sliderRef.current.dataBind();
        }

        panel.focus();
        onSliderChange({ value: sliderValue } as ChangeEventArgs);
        }, 100);
    }, []);
    return (
        <RichTextEditorComponent value={rteContent}>
            <Inject services={[Toolbar, Image, Link, HtmlEditor, QuickToolbar]} />
        </RichTextEditorComponent>
    );
}

export default App;
```

### Precise selection using DOM range

The selection logic is implemented in the [change](https://ej2.syncfusion.com/react/documentation/api/slider/index-default#change) event of the slider. It retrieves the start and end positions from the slider and ensures they are within valid bounds. The code then uses a helper function, `getTextNodeAtOffset()`, which employs a `TreeWalker` to traverse text nodes and locate the exact node and offset for the given character positions. 

A Range object is created using these offsets and applied to the current selection using the browser’s `Selection` API. This guarantees accurate highlighting even when the content spans multiple text nodes.

```ts
function App() {
    const [sliderValue, setSliderValue] = useState<[number, number]>([0, 50]);
    const [maxLength, setMaxLength] = useState(400);
      
    const onSliderChange = (args: ChangeEventArgs) => {
        const [start, end] = args.value as [number, number];
        const rte = rteRef.current;
        if (!rte) return;

        const panel = rte.contentModule.getEditPanel();
        const max = panel.textContent?.length ?? 0;
        const safeStart = Math.min(start, max);
        const safeEnd = Math.min(end, max);

        const startInfo = getTextNodeAtOffset(panel, safeStart);
        const endInfo = getTextNodeAtOffset(panel, safeEnd);

        if (startInfo && endInfo) {
            const range = document.createRange();
            range.setStart(startInfo.node, startInfo.offset);
            range.setEnd(endInfo.node, endInfo.offset);
            const selection = window.getSelection();
            if (selection) {
                selection.removeAllRanges();
                selection.addRange(range);
            }
        }
    setSliderValue([safeStart, safeEnd]);
    };

    return (
        <SliderComponent ref={sliderRef} type="Range" value={sliderValue} min={0} max=
        {maxLength} change={onSliderChange} />
    );
}

export default App;
```

### Helper function for accurate offset calculation

The `getTextNodeAtOffset()` function uses a `TreeWalker` to traverse text nodes inside the editor and determine the exact node and offset for a given character index. This ensures that even complex content structures are handled correctly.

```ts
function App() {
    const getTextNodeAtOffset = (root: Node, offset: number) => {
    let current = 0;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node: Text;
    while ((node = walker.nextNode() as Text)) {
      const len = node.textContent?.length ?? 0;
      if (current + len >= offset) {
        return { node, offset: offset - current };
      }
      current += len;
    }
    return null;
  };
   return()
}

export default App;
```

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/selection-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/selection-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/selection-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/selection-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/selection-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/selection-cs2" %}

## Node selection

Node selection allows users to programmatically select entire HTML elements (nodes) such as paragraphs, images, or tables within the Rich Text Editor. This is useful when you want to highlight or manipulate specific content blocks without relying on manual user selection.

The following example demonstrates how to select a paragraph node programmatically using the browser's native `Range` and `Selection` APIs.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/node-selection-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/node-selection-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/node-selection-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/node-selection-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/node-selection-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/node-selection-cs2" %}

## Cell selection

Cell selection allows users to programmatically select specific table cells within the Rich Text Editor. This is useful for highlighting or manipulating content inside tables without requiring manual user interaction.

The following example demonstrates how to select a table cell programmatically using the browser's native `Range` and `Selection` APIs.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/cell-selection-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/cell-selection-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/cell-selection-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/cell-selection-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/cell-selection-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/cell-selection-cs2" %}

## Select all content

To select all content within the Rich Text Editor, use the [selectAll](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/index-default#selectall) method. This method highlights all the text and elements inside the editor, allowing users to perform actions such as formatting or deleting the entire content.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/select-all-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/select-all-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/select-all-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor/select-all-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor/select-all-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/rich-text-editor/select-all-cs2" %}
