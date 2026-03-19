---
layout: post
title: Customization in React Sankey Chart component | Syncfusion
description: Learn here all about Customization in Syncfusion React Sankey Chart component of Syncfusion Essential JS 2 and more.
control: Customization
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Customization in React Sankey Chart component

The Sankey Chart provides extensive customization options to create visualizations that match your specific design requirements and data presentation needs. From styling and theming to advanced visual techniques, the component enables complete control over appearance and behavior.

This guide covers comprehensive customization techniques including styling, theming, color mapping, and visual customization strategies.

## Styling Overview

The Sankey Chart supports multiple levels of styling customization:

- **Global Styling**: Apply consistent styles to all elements
- **Element-Level Styling**: Customize specific nodes, links, or labels
- **Data-Driven Styling**: Apply styles based on data values or conditions
- **Theme-Based Styling**: Use predefined themes or create custom themes

## Node and Link Styling

### Global Node Styling

Apply consistent styling to all nodes using the `nodeStyle` property:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sankey/code-path/customization/node-styling-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sankey/code-path/customization/node-styling-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sankey/preview-sample/customization/node-styling-cs1" %}

### Global Link Styling

Configure link appearance using the `linkStyle` property:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sankey/code-path/customization/link-styling-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sankey/code-path/customization/link-styling-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sankey/preview-sample/customization/link-styling-cs1" %}

## Individual Element Customization

### Custom Node Appearance

Customize individual nodes by setting properties on each node object:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sankey/code-path/customization/individual-nodes-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sankey/code-path/customization/individual-nodes-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sankey/preview-sample/customization/individual-nodes-cs1" %}

### Custom Node Labels

Customize individual node labels with specific text, styling, and positioning:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sankey/code-path/customization/individual-labels-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sankey/code-path/customization/individual-labels-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sankey/preview-sample/customization/individual-labels-cs1" %}

## Color Customization

### Predefined Color Palettes

Apply predefined color palettes to automatically color nodes:

```typescript
const nodes = [
  { id: 'Source1', label: { text: 'Source 1' }, color: '#3DA6D4' },
  { id: 'Source2', label: { text: 'Source 2' }, color: '#FFA500' },
  { id: 'Target', label: { text: 'Target' }, color: '#28A745' }
];
```

### Color Mapping

Map colors to specific categories or value ranges:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sankey/code-path/customization/color-mapping-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sankey/code-path/customization/color-mapping-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sankey/preview-sample/customization/color-mapping-cs1" %}

## Theme Customization

### Apply Theme

```typescript
const theme = 'Material'; // or 'Fabric', 'Bootstrap', 'HighContrast'

return (
  <SankeyChartComponent 
    theme={theme}
    {...otherProps}
  >
  </SankeyChartComponent>
);
```

### Custom Theme Colors

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sankey/code-path/customization/custom-theme-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sankey/code-path/customization/custom-theme-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sankey/preview-sample/customization/custom-theme-cs1" %}

## Tooltip Customization

### Template-Based Tooltips

Create custom tooltip templates for rich content:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sankey/code-path/customization/tooltip-template-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sankey/code-path/customization/tooltip-template-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sankey/preview-sample/customization/tooltip-template-cs1" %}

## Advanced Customization Patterns

### Conditional Styling Based on Data

Apply different styles based on data conditions or value ranges:

```typescript
const onNodeRendering = (args) => {
  const value = args.node.value || 0;
  
  if (value > 200) {
    args.node.color = '#00A651'; // High flow - green
  } else if (value > 100) {
    args.node.color = '#FFB81C'; // Medium flow - orange
  } else {
    args.node.color = '#E81B23'; // Low flow - red
  }
};
```

### Category-Based Styling

Assign colors and styles based on node categories:

```typescript
const categoryColors = {
  'Energy': '#FF6B6B',
  'Transport': '#4ECDC4',
  'Industry': '#95E1D3',
  'Residential': '#FFD93D'
};

const onNodeRendering = (args) => {
  const category = extractCategory(args.node.id);
  args.node.color = categoryColors[category] || '#999';
};
```

### Interactive Styling

Apply different styles for hover and focus states:

```typescript
const onNodeEnter = (args) => {
  // Highlight node on hover
  args.node.highlightOpacity = 1;
};

const onNodeLeave = (args) => {
  // Reset to normal state
  args.node.highlightOpacity = 0.3;
};
```

## Performance Optimization

### Large Dataset Customization

For charts with many nodes and links, optimize rendering performance:

1. **Use Global Styles**: Apply global `nodeStyle` and `linkStyle` instead of individual customization
2. **Minimize Calculations**: Reduce complex calculations in rendering events
3. **Conditional Rendering**: Only customize visible elements in viewport
4. **Cache Results**: Cache computed styles and colors

## Customization Best Practices

### Key Considerations

1. **Consistency**
   - Maintain consistent color schemes across nodes and links
   - Use meaningful colors that represent data categories
   - Apply visual hierarchy through size and opacity

2. **Performance**
   - Avoid complex calculations in rendering events
   - Use global styles when possible
   - Optimize for large datasets

3. **Accessibility**
   - Don't rely solely on color for information
   - Ensure sufficient contrast ratios
   - Provide alternative representations

4. **User Experience**
   - Use intuitive color mapping
   - Provide clear visual feedback for interactions
   - Maintain visual consistency with your application

5. **Maintainability**
   - Document custom styling logic
   - Use reusable style functions
   - Separate styling from business logic

## Example: Comprehensive Customization

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/sankey/code-path/customization/comprehensive-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/sankey/code-path/customization/comprehensive-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/sankey/preview-sample/customization/comprehensive-cs1" %}

## Related Topics

- [Appearance](appearance.md)
- [Nodes](nodes.md)
- [Links](links.md)
- [Labels](labels.md)
- [Legend](legend.md)
- [Events](events.md)
