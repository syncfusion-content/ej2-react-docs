---
layout: post
title: Testing the React application using Jest | Syncfusion
description: Learn here all about Testing the React application using Jest in Syncfusion React Grid component of Syncfusion Essential JS 2 and more.
control: Testing the React application using Jest
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Testing the React application using Jest

React [Jest](https://jestjs.io/docs/tutorial-react) testing is a popular approach to test React applications using the Jest testing framework. This approach involves the creation and execution of unit tests specifically designed for React components. By conducting unit testing, which focuses on testing isolated units of code like functions, methods, and components to ensure that they behave as expected. This approach validates the individual units of your React components, catch potential bugs early in the development process, and maintains the reliability and stability of your React application. To create a Jest test case for the Grid component, follow the below steps:

**Step 1: Set up the Jest testing environment**

**I. Check and install the node version:**

You need to verify if the installed version of Node is 14 or higher. If it is below version 14, you must install a version of Node above 14. You can refer the following link to install the [node version](https://nodejs.org/en/download). You can select the any node version is 14 or above and installed.

**II. Create an React application and install the Syncfusion Grid package:**

To create an React application and install the Syncfusion Grid package, you can refer to the [Getting started](https://ej2.syncfusion.com/react/documentation/grid/getting-started) documentation.

**III. Install the Jest:**

When react application is installed, the dependency for Jest should be automatically installed. To verify if the Jest dependency is installed, you can check the **package.json** file. If the Jest dependency is not installed, you can run the following command to install the Jest dependency using npm.

```
npm install --save-dev jest
```

**IV. Install the testing library package:**

Run the following command to install the testing library package using npm.

```
npm install --save-dev @testing-library/jest-dom
```

**Step 2: Adding a Grid component**

Refer to the [documentation](https://ej2.syncfusion.com/react/documentation/grid/getting-started#adding-css-reference) to add the styling for the Grid component. The following code is used in this demonstration to create a Grid component. For further information on creating the Grid component, refer to the detailed [documentation](https://ej2.syncfusion.com/react/documentation/grid/getting-started#adding-grid-component).

**App.tsx:**

```typescript
import * as React from 'react';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
// import the your datasource instead of this
import { customerData} from './dataSource';
import './App.css';

function App() {
    return (<div>
        <GridComponent dataSource={customerData.slice(0,5)} height={315}>
            <ColumnsDirective>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='100'/>
                <ColumnDirective field='ContactName' headerText='CustomerName' width='100' textAlign="Right"/>
                <ColumnDirective field='Address' headerText='Address' width='80' textAlign="Right"/>
                <ColumnDirective field='Country' headerText='Country' width='100'/>
            </ColumnsDirective>
        </GridComponent>
    </div>)
};
export default App;
```

**Step 3: To implement the Jest test case.**

You can write the Jest test case in the test.tsx extension file.  You need to import the below required files in your component. You need to import the `render` function from the **@testing-library/react** package. This function is used to render the component for react testing. To test a specific component, you need to import it into your testing environment. In this demo, we have written the grid component in the **App** file. So, you need to import the **App** file in the Jest test case.

```typescript
import { render } from '@testing-library/react';
import App from './App';
```

**I. Define test suite:**

The `describe` function is utilized to define the test suite. Within the `describe` function, you can use the `beforeEach` function. This function to execute the before each test case. Inside the `beforeEach` function, The Jest mock function is assign to the `windows.crypto`. By using `jest.fn`, we are creating a mock implementation for the crypto object. The another Jest mock function is assign to the `window.crypto.getRandomValues`. This is done to replace the original implementation of the `getRandomValues` method with a mock implementation for testing.

```typescript
window.crypto = jest.fn() as any;
window.crypto.getRandomValues = jest.fn();
```

**II. Types of testing:**

You need to add the different types of test cases in a `it` block.

**1. Snapshot Testing:**

The Snapshot testing involves capturing a snapshot of the rendered output of a component and comparing it against a previously stored snapshot. If the current output matches the stored snapshot, the test case will be passed successfully.

**Example:**

In the below example, the `it` block is utilized to define a test case for **Snapshot testing**. Within the test case, the `<App/>` component is rendered within the container object. After, the `expect` statement verifies that the container matches the stored snapshot, utilizing the `toMatchSnapshot` matcher provided by Jest.

```typescript
it('Snapshot testing', () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
});
```
![Snapshot Testing](../images/snapshot_testing.png)

**2. DOM testing:**

The **DOM** testing involves testing the behavior and interact of React component. This goal is to ensure that the component function correctly and produce the expected output when interacting with the DOM. You can utilize libraries like **react-testing-library**, `Enzyme`, or **React's TestUtils** to manipulate the rendered component in the DOM testing.

**Example:** 

In the below example, the `it` block is used to define a test case for the "Length of the record". Within the test case, render the `<App/>` component in the container object. After, you need to create the instance of grid component. We check that the data grid in the data source has the appropriate number of data records. The [dataSource](https://ej2.syncfusion.com/react/documentation/api/grid/#datasource) property is employed to retrieve the record of the data. By utilizing this property, we can verify the accurate population of data length in the grid component.

```typescript
it('Length of the record', () => {
    const { container } = render(<App />);
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const gridElement = container.getElementsByClassName('e-grid');
    const gridInstance = (gridElement as any)[0].ej2_instances[0];
    expect(gridInstance.dataSource).toHaveLength(5);
  });
```

The following example illustrates how to create the grid sample and how to write the Jest test case.

{% tabs %}
{% highlight js tabtitle="App.tsx" %}
{% include code-snippet/grid/testcase-cs1/app/App.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.test.tsx" %}
{% include code-snippet/grid/testcase-cs1/app/App.test.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="Snap.test.tsx" %}
{% include code-snippet/grid/testcase-cs1/app/Snap.test.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="App.jsx" %}
{% include code-snippet/grid/testcase-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight js tabtitle="App.test.jsx" %}
{% include code-snippet/grid/testcase-cs1/app/App.test.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="Snap.test.jsx" %}
{% include code-snippet/grid/testcase-cs1/app/Snap.test.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/grid/testcase-cs1/app/datasource.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/grid/testcase-cs1/app/datasource.jsx %}
{% endhighlight %}
{% endtabs %}

**Run the Jest test case:**

Run the following command to execute the Jest test case.

```
npm test
```

> * This is only for local data. You can use the [currentViewData](https://ej2.syncfusion.com/react/documentation/api/grid/#currentviewdata) property by rendering the remote data.
> * You can find the sample of the Unit Jest testing in DataGrid [here](https://github.com/SyncfusionExamples/DataGrid-react-test-case)
