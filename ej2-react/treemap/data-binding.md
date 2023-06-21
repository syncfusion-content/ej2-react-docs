---
layout: post
title: Data binding in React Treemap component | Syncfusion
description: Learn here all about Data binding in Syncfusion React Treemap component of Syncfusion Essential JS 2 and more.
control: Data binding 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Data binding in React Treemap component

The TreeMap control supports data binding using the dataSource property.

## Populate data

The [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/treemap/#datasource) property accepts collection values as input. For example, a list of objects can be provided as input. Data can be given as either flat or hierarchical collection to the [`dataSource`](https://ej2.syncfusion.com/react/documentation/api/treemap/#datasource) property.

<!-- markdownlint-disable MD036 -->

### Flat collection

The following code shows, how to bind a flat collection as data source to the TreeMap control.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/treemap/databind-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/treemap/databind-cs1/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/treemap/databind-cs1" %}

### Hierarchical collection

The following code shows, how to bind a hierarchical collection as data source to the TreeMap control.

<!-- markdownlint-disable MD010 -->

{% raw %}
```ts
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  TreeMapComponent,
  LevelDirective,
  LevelsDirective,
} from '@syncfusion/ej2-react-treemap';
export function App() {
  return (
    <TreeMapComponent
      id="treemap"
      dataSource={[
        {
          Name: 'United States',
          Sales: 28092,
          Expense: 26000,
          States: [
            { Name: 'New York', Sales: 2353, Expense: 2000 },
            { Name: 'Los Angeles', Sales: 3453, Expense: 3000 },
            { Name: 'San Francisco', Sales: 8456, Expense: 8000 },
            { Name: 'Chicago', Sales: 6785, Expense: 7000 },
            { Name: 'Miami', Sales: 7045, Expense: 6000 },
          ],
        },
        {
          Name: 'Canada',
          Sales: 19240,
          Expense: 18500,
          States: [
            { Name: 'Toronto', Sales: 7045, Expense: 7000 },
            { Name: 'Vancouver', Sales: 4352, Expense: 4000 },
            { Name: 'Winnipeg', Sales: 7843, Expense: 7500 },
          ],
        },
        {
          Name: 'Mexico',
          Sales: 16980,
          Expense: 14500,
          States: [
            {
              Name: 'Mexico City',
              Sales: 7843,
              Expense: 6500,
              States1: [
                { Name: 'Cancun1', Sales: 6683, Expense: 6000 },
                { Name: 'Acapulco1', Sales: 2454, Expense: 2000 },
              ],
            },
            { Name: 'Cancun', Sales: 6683, Expense: 6000 },
            { Name: 'Acapulco', Sales: 2454, Expense: 2000 },
          ],
        },
      ]}
      weightValuePath="Sales"
      leafItemSettings={{
        labelPath: 'Name',
      }}
    >
      <LevelsDirective>
        <LevelDirective
          groupPath="States"
          groupGap={3}
          showHeader={true}
          headerHeight={25}
          showLabels={true}
        />
        <LevelDirective
          groupPath="States1"
          groupGap={3}
          showHeader={true}
          headerHeight={25}
          showLabels={true}
        />
      </LevelsDirective>
    </TreeMapComponent>
  );
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
```
{% endraw %}