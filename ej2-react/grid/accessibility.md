---
layout: post
title: React Grid - Accessibility | Syncfusion
description: React Grid accessibility covers keyboard navigation, ARIA roles, and screen reader support to help build inclusive, user‑friendly grids.
control: Accessibility
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Accessibility in the React Grid Component

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component follows major accessibility guidelines and standards, including the [Americans with Disabilities Act (ADA)](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/), and [WAI‑ARIA roles](https://www.w3.org/TR/wai-aria#roles). These standards ensure the grid is usable with assistive technologies and keyboard‑only navigation. 

The sections below describe the grid's accessibility compliance and behavior.

## Accessibility criteria

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Section 508 Support](../common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Screen Reader Support](../common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes">  |
| [Right-To-Left Support](../common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Color Contrast](../common/accessibility#color-contrast) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Mobile Device Support](../common/accessibility#mobile-device-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Keyboard Navigation Support](../common/accessibility#keyboard-navigation-support) |<img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Accessibility Checker Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Axe-core Accessibility Validation](../common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |

<style>
    .post .post-content img {
        display: inline-block;
        margin: 0.5em 0;
    }
</style>
<div><img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> - All features of the component meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> - Some features of the component do not meet the requirement.</div>

<div><img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> - The component does not meet the requirement.</div>

## WAI-ARIA attributes

The React Grid follows the [WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/grid/) grid pattern to ensure compatibility with assistive technologies. The following attributes and roles are used throughout the component:

| Attribute / Role | Purpose |
|------------------|---------|
| `role=grid` | Identifies the container element of the grid. |
| `role=row` | Represents a row containing grid cells. |
| `role=rowgroup` | Represents a logical grouping of rows. |
| `role=columnheader` | Identifies header cells that describe a column. |
| `role=gridcell` | Defines an individual grid cell. |
| `role=button` | Represents button elements inside the grid. |
| `role=search` | Identifies a search region, the toolbar search control. |
| `role=presentation` | Indicates elements that are ignored by assistive technologies (used for layout-only elements). |
| `role=navigation` | Identifies the pager navigation region. |
| `aria-colindex` | Defines the column index relative to total columns. |
| `aria-rowindex` | Defines the row index relative to total rows. |
| `aria-rowspan` | Indicates how many rows a cell spans. |
| `aria-colspan` | Indicates how many columns a cell spans. |
| `aria-rowcount` | Specifies the total number of rows. |
| `aria-colcount` | Specifies the total number of columns. |
| `aria-selected` | Indicates the selection state of a row or cell. |
| `aria-expanded` | Indicates the expanded or collapsed state in hierarchical grids. |
| `aria-sort` | Indicates ascending or descending sort order. |
| `aria-busy` | Indicates that an element is being updated. |
| `aria-owns` | Defines contextual relationships between parent and child elements. |
| `aria-hidden` | Hides elements from assistive technologies. |
| `aria-labelledby` | Provides an accessible name for specific elements such as filter dialog items. |
| `aria-describedby` | Provides descriptive help text for focused header cells. |

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid uses a two‑table structure for header and content rendering. This improves screen reader interpretation but may trigger warnings in automated accessibility tools. These warnings do not necessarily affect actual assistive-technology usability. Known checker tool warnings include:

* aria-required-children: This warning can occur when the grid renders certain feature elements (for example, textarea or toolbar content). It may be reported when toolbar or grouping features are enabled.

* color-contrast: This warning can appear when the toolbar search item or custom styles reduce text contrast below WCAG thresholds.

* An explicit ARIA 'role' is not valid for `<tr>` element within an ARIA role 'grid' per the ARIA in HTML specification.

* An explicit ARIA 'role' is not valid for `<th>` element within an ARIA role 'grid' per the ARIA in HTML specification.

* An explicit ARIA 'role' is not valid for `<td>` element within an ARIA role 'grid' per the ARIA in HTML specification.

* The element with role "button" contains descendants with roles "rowgroup" which are ignored by browsers.

* Content is not within a landmark element.

* Multiple elements with "search" role do not have unique labels.

* Text contrast of 4.10 with its background is less than the WCAG AA minimum requirements for text of size 13px and weight of 400.

* Interactive component with ARIA role 'grid' does not have a programmatically associated name.

* The element with role "rowgroup" is not contained in or owned by an element with one of the following roles: "grid, table, treegrid". 

## Keyboard interaction

The Grid provides keyboard navigation and follows WAI‑ARIA [keyboard interaction](https://www.w3.org/WAI/ARIA/apg/patterns/alert#keyboardinteraction) guidelines. Some keyboard behaviors vary depending on which features are enabled; consult the compatibility table above and the examples below for specific behavior.

### Pager

**Windows**  | **MAC** | **Description**
-----|----- | -----
<kbd>Tab</kbd> | <kbd>Tab</kbd> | Focus the next pager item.
<kbd>Shift + Tab</kbd> | <kbd>Shift + Tab</kbd> | Focus the previous pager item.
<kbd>Enter / Space</kbd> | <kbd>Enter / Space</kbd> | Select the focused page.
<kbd>PageUp / Left Arrow</kbd> | <kbd>Left Arrow</kbd> | Navigate to the previous page.
<kbd>PageDown / Right Arrow</kbd> | <kbd>Right Arrow</kbd> | Navigate to the next page.
<kbd>Home / Ctrl + Alt + PageUp</kbd> | <kbd>Fn + Left Arrow</kbd> | Navigate to the first page.
<kbd>End / Ctrl + Alt + PageDown</kbd> | <kbd>Fn + Right Arrow</kbd> | Navigate to the last page.

### Focus Elements

**Windows**  | **MAC** | **To do this**
-----|----- | -----
<kbd>Home</kbd> | <kbd>Fn + Left Arrow</kbd> | Shifts the focus to the first cell in the currently focused row.
<kbd>End</kbd> | <kbd>Fn + Right Arrow</kbd> | Shifts the focus to the last cell in the currently focused row.
<kbd>Ctrl + Home</kbd> | <kbd>Command + Fn + Left Arrow</kbd> | Shifts the focus to the first cell of the first row within the grid.
<kbd>Ctrl + End</kbd> | <kbd>Command + Fn + Right Arrow</kbd> | Shifts the focus to the last cell of the last row within the grid.
<kbd>Up Arrow</kbd> | <kbd>Up Arrow</kbd> | Moves the cell focus upward from the current cell.
<kbd>Down Arrow</kbd> | <kbd>Down Arrow</kbd> | Moves the cell focus downward from the current cell.
<kbd>Right Arrow</kbd> | <kbd>Right Arrow</kbd> | Moves the cell focus to the right of the current cell.
<kbd>Left Arrow</kbd> | <kbd>Left Arrow</kbd> | Moves the cell focus to the left of the current cell.
<kbd>Alt + J</kbd> | <kbd>Alt + J</kbd> | Moves the focus to the entire grid.
<kbd>Alt + W</kbd> | <kbd>Alt + W</kbd> | Moves the focus to the grid content element.

### Selection

**Windows**  | **MAC** | **To do this**
-----|----- | -----
<kbd>Up Arrow</kbd> | <kbd>Up Arrow</kbd> | Moves the selection up by one row or cell from the current position.
<kbd>Down Arrow</kbd> | <kbd>Down Arrow</kbd> | Moves the selection down by one row or cell from the current position.
<kbd>Right Arrow</kbd> | <kbd>Right Arrow</kbd> | Moves the selection one cell to the right from the current cell.
<kbd>Left Arrow</kbd> | <kbd>Left Arrow</kbd> | Moves the selection one cell to the left from the current cell.
<kbd>Shift + Up Arrow</kbd> | <kbd>Shift + Up Arrow</kbd> | Extends the selection upward by rows or cells from the current selection.
<kbd>Shift + Down Arrow</kbd> | <kbd>Shift + Down Arrow</kbd> | Extends the selection downward by rows or cells from the current selection.
<kbd>Shift + Right Arrow</kbd> | <kbd>Shift + Right Arrow</kbd> | Extends the selection to the right from the current cell.
<kbd>Shift + Left Arrow</kbd> | <kbd>Shift + Left Arrow</kbd> | Extends the selection to the left from the current cell.
<kbd>Enter</kbd> | <kbd>Enter</kbd> | Moves the selection down by one row or cell.
<kbd>Shift + Enter</kbd> | <kbd>Shift + Enter</kbd> | Moves the selection up by one row or cell.
<kbd>Esc</kbd> | <kbd>Esc</kbd> | Clears all current selections.
<kbd>Ctrl + A</kbd> | <kbd>Ctrl + A</kbd> | Selects all rows or cells on the current page.

### Grouping

**Windows**  | **MAC** | **To do this**
-----|----- | -----
<kbd>Ctrl + Up Arrow</kbd> | <kbd>Command + Up Arrow</kbd> | Collapses all visible groups.
<kbd>Ctrl + Down Arrow</kbd> | <kbd>Command + Down Arrow</kbd> | Expands all visible groups.
<kbd>Ctrl + Space</kbd> | <kbd>Ctrl + Space</kbd> | Groups items when the header element is focused.
<kbd>Enter</kbd> | <kbd>Enter</kbd> | Expands or collapses the current group, detail row, or child grid if the active cell controls this function.

### Print

**Windows**  | **MAC** | **To do this**
-----|----- | -----
<kbd>Ctrl + P</kbd> | <kbd>Command + P</kbd>| Prints the grid.

### Clipboard

**Windows**  | **MAC** | **To do this**
-----|----- | -----
<kbd>Ctrl + C</kbd> | <kbd>Command + C</kbd> | Copies the data of selected rows or cells to the clipboard.
<kbd>Ctrl + Shift + H</kbd> | <kbd>Ctrl + Shift + H</kbd> | Copies the data of selected rows or cells along with the header to the clipboard.

### Editing

**Windows**  | **MAC** | **To do this**
-----|----- | -----
<kbd>F2</kbd> | <kbd>F2</kbd> | Begins editing the selected row when Mode is Normal or Dialog, or begins editing the selected cell when Mode is Batch.
<kbd>Enter</kbd> | <kbd>Enter</kbd> | Saves the current form if Mode is Normal or Dialog; saves the current cell and begins editing the next row cell if Mode is Batch.
<kbd>Insert</kbd> | <kbd>Ctrl + Command + Enter</kbd> | Creates a new add form based on the NewRowPosition.
<kbd>Delete</kbd> | <kbd>Delete</kbd> | Removes the currently selected record.
<kbd>Tab</kbd> | <kbd>Tab</kbd> | Moves to the next editable cell if Mode is Normal or Dialog; saves the current cell and begins editing the next cell if Mode is Batch.
<kbd>Shift + Tab</kbd> | <kbd>Shift + Tab</kbd> | Moves to the previous editable cell if Mode is Normal or Dialog; saves the current cell and begins editing the previous cell if Mode is Batch.
<kbd>Shift + Enter</kbd> | <kbd>Shift + Enter</kbd> | Saves the current cell and begins editing the previous row cell when Mode is Batch.

### Filtering

**Windows**  | **MAC** | **To do this**
-----|----- | -----
<kbd>Alt + Down arrow</kbd> | <kbd>Alt + Down arrow</kbd> | Opens the filter menu (Excel, menu, and checkbox filter) when the header element is focused.

### Column Menu

**Windows**  | **MAC** | **To do this**
-----|----- | -----
<kbd>Alt + Down arrow</kbd> | <kbd>Alt + Down arrow</kbd> | Opens the column menu when the header element is focused.

**Windows**  | **MAC** | **To do this**
-----|----- | -----
<kbd>Ctrl + left arrow or right arrow</kbd> | <kbd>Command + left arrow or right arrow</kbd> | Moves the selected header column to the left or right.

**Windows**  | **MAC** | **To do this**
-----|----- | -----
<kbd>Enter</kbd> | <kbd>Enter</kbd> | Executes sorting (ascending or descending) on a column when its header element is focused.
<kbd>Ctrl + Enter</kbd> | <kbd>Command + Enter</kbd> | Executes multi-sorting on a column when its header element is focused.
<kbd>Shift + Enter</kbd> | <kbd>Shift + Enter</kbd> | Removes sorting from the currently focused header column.


> * The <kbd>Command</kbd> and <kbd>Control</kbd> keys on Mac devices can be swapped. When this swap is made, use the <kbd>Command</kbd> key instead of the <kbd>Control</kbd> key, and the <kbd>Control</kbd> key instead of the <kbd>Command</kbd> key for the key interactions mentioned above with Mac devices.
> * For instance, after swapping the keys, to group the columns when the header element is focused, use <kbd>Command + Space</kbd>, and to expand the visible groups, use <kbd>Ctrl + Down Arrow</kbd>.

### Preventing Default Key Actions

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid provides the capability to disable the default key action behavior according to your needs.

This allows you to intercept and modify the response when certain keys are pressed within a web application.

To disable the default key action in the grid, you can use the [keyPressed](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#keypressed) event.


{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/keyboard-navigation-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/keyboard-navigation-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/keyboard-navigation-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/keyboard-navigation-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/grid/keyboard-navigation-cs1" %}

### Custom shortcut keys

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component allows improving the usability of keyboard shortcuts for various grid actions and navigation.

Besides the built-in keyboard navigation features, custom keyboard shortcuts can be created to perform specific tasks.

Use the [keyPressed](https://ej2.syncfusion.com/react/documentation/api/grid/index-default#keypressed) event of the grid to achieve this. This event triggers on every key press, enabling customization of the response according to the key pressed.

The example below illustrates how to use shortcut keys to perform grid actions via the `keyPressed` event. Define the following custom shortcuts within the event to execute different grid actions:

* Pressing N adds a new record.
* Pressing Ctrl + S saves a record by calling `endEdit`.
* Pressing Ctrl + D deletes a record.
* Pressing Ctrl + A selects all rows.
* Pressing Ctrl + G groups the grid by a selected column.

Additionally, the default actions for these keyboard shortcuts related to grouping and editing are prevented:

* Ctrl + Space
* Insert
* F2
* Delete
* Enter

You can add further custom shortcuts and actions as required to enhance the capabilities of your Syncfusion<sup style="font-size:70%">&reg;</sup> React Grid component.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/customizedialog-cs8/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/customizedialog-cs8/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/customizedialog-cs8/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/customizedialog-cs8/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/grid/customizedialog-cs8" %}

## Ensuring Accessibility

The accessibility standards of the Grid component are verified using the software tools [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) during automated testing.

The compliance of the Grid component with accessibility requirements is demonstrated in the example below. Open the [sample](https://ej2.syncfusion.com/accessibility/grid.html) in a new window to assess the Grid component's accessibility using appropriate tools.
{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/ensuring-accessibility/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/ensuring-accessibility/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/ensuring-accessibility/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/ensuring-accessibility/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}
{% previewsample "page.domainurl/code-snippet/grid/ensuring-accessibility" %}

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> React components](../common/accessibility)