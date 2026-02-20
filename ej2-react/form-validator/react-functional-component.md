---
layout: post
title: Functional component in React Form validator component | Syncfusion
description: Learn here all about React functional component in Syncfusion React Form validator component of Syncfusion Essential JS 2 and more.
control: React functional component 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# React functional component in React Form validator component

This article provides step-by-step instructions on using React Hooks in an HTML form with the FormValidator component.

The following is a list of React Hooks methods to utilize while performing form validation.

| Hooks | Description |
| ------------- | ------------- |
| `useState` | A Hook that allows you to define state in functional components. Returns a state variable and a function to update it. |
| `useEffect` | A Hook that executes code after the component renders and re-renders. |
| `useRef` | A Hook that creates a direct reference to a DOM element within the functional component. |
| `useReducer` | A Hook that accepts a reducer function and initial state, returning a state value and a dispatch function for actions. |

## Create a React form with Syncfusion<sup style="font-size:70%">&reg;</sup> form components

To create a React application with Syncfusion<sup style="font-size:70%">&reg;</sup> components, refer to the [`Getting Started`](https://ej2.syncfusion.com/react/documentation/getting-started/quick-start/#create-the-react-application) section. Once the application is set up, add Syncfusion<sup style="font-size:70%">&reg;</sup> form components to create a simple form.

In the following example, a login form is created using Syncfusion<sup style="font-size:70%">&reg;</sup> components such as TextBox, DatePicker, and Button, and validated with the FormValidator component.

* [`TextBox`](https://ej2.syncfusion.com/react/documentation/textbox/getting-started/) - Collects the user's email and password
* [`DatePicker`](https://ej2.syncfusion.com/react/documentation/datepicker/getting-started/) - Collects the user's date of birth

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/form-validator/react-hooks-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/form-validator/react-hooks-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/form-validator/react-hooks-cs1" %}

## Perform validation

To validate the input, specify rules for the email, password, and date of birth fields. Form validation is initiated using the `useEffect` Hook.

```javascript
    useEffect(() => {
        const options = {
            // add the rules for validation
            rules: {
                email: {
                    required: [true, '* Please enter your email'],
                },
                password: {
                    required: [true, '* Please enter your password'],
                },
                date: {
                    required: [true, '* Please enter your date of birth'],
                },
            }
        };
        // initialize the form validator
        this.formObject = new FormValidator('#form1', options);
    }, []);
```

Check out the [`validation rules`](https://ej2.syncfusion.com/react/documentation/form-validator/validation-rules/#validation-rules) section to learn more about the validation rules.

The `useState` Hook stores the value of the date of birth field.

```javascript
const [dateOfBirth, setDateOfBirth] = useState('');
```

The `useReducer` Hook updates the email and password state values.

```javascript
    const initialState = { email: '', password: '' };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'update':
                return { ...state, [action.field]: action.value };
            default:
                return initialState;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);
```

The `useRef` Hook focuses the username field on initial load.

```javascript
    const userNameRef = useRef(null);
    useEffect(() => {
        userNameRef.current.focusIn();
    }
```

## Run the Application

Run the application in the browser using the following command.

```
npm run start
```
