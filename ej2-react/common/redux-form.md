---
layout: post
title: Integration of React components in Redux Form | Syncfusion
description: Learn here all about integration of the Syncfusion EJ2 React UI components in the Redux Form and more.
control: Redux 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Integration of Syncfusion<sup style="font-size:70%">&reg;</sup> React Components in Redux Form

[Redux Form](https://redux-form.com/) is a popular library used in React project for managing and handling form state. It integrates with the Redux state management library ([Redux Store](https://redux.js.org/api/store)) and provides a simple and efficient way to handle form inputs, validation, submission, and data synchronization with Redux.

This guide will provide you with a step-by-step process for creating a `Redux Form`, integrating Syncfusion<sup style="font-size:70%">&reg;</sup> components, and implementing form validation.

## Create a Redux Form

To create a simple login form using React Redux Form, follow these steps:

1\. Create a new [React](https://reactjs.org/docs/create-a-new-react-app.html) project.

2\. Install the necessary Redux dependencies by executing the following command:

```bash
npm install --save redux react-redux redux-form
```

In this command:

* [Redux](https://reactjs.org/docs/create-a-new-react-app.html) is a state container that stores the data.

* [React Redux](https://reactjs.org/docs/create-a-new-react-app.html) allows users to read and update the data from the store to the React components.

* [Redux Form](https://redux-form.com/7.0.1/docs/gettingstarted.md/) is used to manage the form state in React.

3\. Create an empty form by creating a new file called **LoginForm.js** and defining the form component:

{% tabs %}
{% highlight js tabtitle="LoginForm.js" %}

import { reduxForm } from "redux-form";
 
let LoginForm = (props) => {
    return (
        <form />
    );
};

{% endhighlight %}
{% endtabs %}

4\. Include the form component in your React project by adding the following code to the **App.js** file:

{% tabs %}
{% highlight js tabtitle="App.js" %}

import './App.css';
import LoginForm from "./LoginForm";
 
function App() {
  return (
    <div className="App">
      <div className="login-form">
        <h2>Redux form</h2>
        <LoginForm />
      </div>
    </div>
  );
}
export default App;

{% endhighlight %}
{% endtabs %}

## Setting up the Redux store

After creating the form and integrating it into the React project, set up a store in the **index.js** file to store the form state using the `Provider` component. This allows the `Redux store` to be accessible to the child components.

{% tabs %}
{% highlight js tabtitle="index.js" %}

import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
 
const appReducer = combineReducers({ form: formReducer });
const store = createStore(appReducer);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

{% endhighlight %}
{% endtabs %}

## Connect with Redux Form

In the **LoginForm.js** file, connect the form component with `Redux Form` by exporting it using the `reduxForm` higher-order component:

{% tabs %}
{% highlight js tabtitle="LoginForm.js" %}

export default LoginForm = reduxForm({
    form: "login"
})(LoginForm);

{% endhighlight %}
{% endtabs %}

## Add Syncfusion<sup style="font-size:70%">&reg;</sup> React components

To incorporate Syncfusion<sup style="font-size:70%">&reg;</sup> React components (DatePicker, TextBox, Button) into the login form, follow these steps:

1\. Install the necessary dependencies for React components.

```bash
npm install @syncfusion/ej2-react-calendars @syncfusion/ej2-react-inputs @syncfusion/ej2-react-buttons --save
```

2\. Integrate the React components within the login form using the `Field` component provided by Redux Form.

{% tabs %}
{% highlight js tabtitle="LoginForm.js" %}

import { reduxForm, Field } from "redux-form";
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
 
const textBox = ({ placeholder }) => {
    return <TextBoxComponent placeholder={placeholder} floatLabelType="Auto" />
};
const datePicker = ({ placeholder }) => {
    return <DatePickerComponent placeholder={placeholder} floatLabelType="Auto" />
};
let LoginForm = () => {
    return (
        <form>
            <Field name="username" component={textBox} placeholder="Enter the user name" />
            <Field name="password" component={textBox} placeholder="Enter the password" />
            <Field name="dob" component={datePicker} placeholder="Enter the date of birth" />
            <ButtonComponent type="submit">Submit</ButtonComponent>
        </form>
    );
};
 
export default LoginForm = reduxForm({
    form: "login"
})(LoginForm);

{% endhighlight %}
{% endtabs %}

3\. Define a `handler` function to handle form submission and display the form data in the **App.js** file:

{% tabs %}
{% highlight js tabtitle="App.js" %}

function App() {
  const handleLogin = values => {
    console.log(`User name: ${values.username}`);
    console.log(`Password: ${values.password}`);
    console.log(`DOB: ${values.dob}`);
  }
  return (
    <div className="App">
      <div className="login-form">
        <h2>Redux form</h2>
        <LoginForm onSubmit={handleLogin} />
      </div>
    </div>
  );
}
export default App;

{% endhighlight %}
{% highlight js tabtitle="LoginForm.js" %}

let LoginForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>
            …
        </form>
    );
};

{% endhighlight %}
{% endtabs %}

## Form Validation

`Redux Form` provides built-in functionality for form validation. Implement the `validate` function to validate the form and display error messages when needed. The form inputs will be automatically validated upon submission.

{% tabs %}
{% highlight js tabtitle="App.js" %}

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required';
    }
    if (!values.password) {
        errors.password = 'Required';
    }
    if (!values.dob) {
        errors.dob = 'Required';
    }
    return errors;
}

export default LoginForm = reduxForm({
    form: "login",
    validate
})(LoginForm);

{% endhighlight %}
{% endtabs %}

## Displaying Errors

Upon form submission, the inputs will be validated and corresponding error messages will be displayed below the respective input fields.

{% tabs %}
{% highlight js tabtitle="App.js" %}

const textBox = ({ placeholder, input, meta: { touched, error } }) => {
    return <div>
        <TextBoxComponent placeholder={placeholder} floatLabelType="Auto" {...input}
            onChange={(e) => {
                input.onChange(e.target.value);
            }}
        />
        {touched && error && <span className="error">{error}</span>}
    </div>
};
const datePicker = ({ placeholder, input, meta: { touched, error } }) => {
    return <div>
      <DatePickerComponent placeholder={placeholder} floatLabelType="Auto" {...input}
         onChange={(e) => {
            input.onChange(e.target.value);
         }}
      />
      {touched && error && <span className="error">{error}</span>}</div>
};

{% endhighlight %}
{% endtabs %}

## Run the project

To run the project, use the following command:

```bash
npm start
```

Refer to the following output image.

![redux-image](../appearance/images/redux-form.png)

> Refer to the [GitHub repository](https://github.com/SyncfusionExamples/Creating-a-Redux-Form-with-Syncfusion-components-in-React) for a runnable demo.