---
layout: post
title: React Grid Custom Formula Functions | Syncfusion
description: Learn how to create and use custom formula functions in React Data Grid for your own business rules and calculations.
control: Custom Formula
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Custom Formula Functions in React Data Grid

The formula engine supports custom functions in addition to the built-in functions. Registered functions can be used in formulas to perform custom calculations.

## Custom function API

Use the [formulaSettings.customFunctions](https://ej2.syncfusion.com/react/documentation/api/grid/formulaSettings#customfunctions)  property to define the custom formulas available in the Grid. Each custom function has a unique name, and the calculation logic is written inside the `func` callback.

| Property | Type | Description |
| --- | --- | --- |
| `formulaSettings.customFunctions` | `Object` | Defines the custom formulas available in the Grid. |
| `formulaSettings.customFunctions.<FunctionName>` | `Object` | Represents a custom formula registered under a unique name. |
| `formulaSettings.customFunctions.<FunctionName>.func` | `Function` | This callback runs when the formula is calculated. It receives the evaluated argument values and returns the result. |

```ts
const formulaSettings = {
  customFunctions: {
    CUSTOMSUM: {
      func: ({ values }: { values: (number | string)[] }) =>
        values.reduce(
          (total: number, value: number | string) =>
            total + Number(value || 0),
          0
        ),
    },
  },
};
```

The function name in the formula must match the key used in `customFunctions`. For example, if you register `CUSTOMSUM`, you can use it like this: `=CUSTOMSUM(B2:B10)`.

## Register custom functions

You can register custom formula functions with the `formulaSettings.customFunctions` property. Each function is given a unique name and a calculation method. After registration, it works like a built-in function inside the Grid formula editor.

The following example registers a custom function named `CUSTOMSUM`. It accepts multiple values, including cell ranges, and returns the total of all provided values.

{% tabs %}
{% highlight js tabtitle="App.jsx" %}
{% include code-snippet/grid/formula-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.tsx" %}
{% include code-snippet/grid/formula-cs4/app/App.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/formula-cs4/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/formula-cs4/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/grid/formula-cs4" %}

## Add and remove formulas in programmatic way

The Grid also allows you to add or remove custom functions after the grid is already loaded. This is useful when your formula list changes based on user actions or business conditions.

- `addFormula(name, handler)`: Adds a custom formula at runtime. The `name` must match the function name used in a formula, and `handler` contains the formula logic.
- `removeFormula(name)`: Removes a previously registered formula from the Grid instance.

```ts
const discountedTotal = ({ values }) => {
  const [price, quantity, discount] = values;
  return Number(price || 0) * Number(quantity || 0) * (1 - Number(discount || 0));
};

grid.addFormula('DISCOUNTEDTOTAL', discountedTotal);

grid.removeFormula('DISCOUNTEDTOTAL');
```

Use `addFormula` to dynamically add custom formulas when needed. Use `removeFormula` to remove formulas that are no longer required or to avoid naming conflicts.

## See also

- [Formulas](./formula)
- [Formula reference](./formula-reference)
- [Formula Editor](./formula-editor)
- [Editing](../editing/cell-editing)
