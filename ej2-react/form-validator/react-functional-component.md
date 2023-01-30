---
layout: post
title: React functional component in React Form validator component | Syncfusion
description: Learn here all about React functional component in Syncfusion React Form validator component of Syncfusion Essential JS 2 and more.
control: React functional component 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# React functional component in React Form validator component

This article provides a step-by-step instructions on using the React functional Hooks in a simple HTML form with the FormValidator component.

The following is a list of React Hooks methods to utilize while performing form validation.

| Hooks | Description |
| ------------- | ------------- |
| `useState` | The useState is a Hook that allows the state to be defined in the functional components. If the initial state is passed to this function, then it will return a state variable with a value and a function to update this state value. |
| `useEffect` | The useEffect is a Hook that executes code after rendering and re-rendering the component. |
| `useRef` | The useRef is a Hook function that allows the functional component to create a direct reference to the DOM element. |
| `useReducer` | The useReducer is a Hook function that accepts a reducer function and an initial state as arguments. It returns a state value and another function to dispatch an action. |

## Create a React form with Syncfusion form components

To create a React application with Syncfusion components, refer to the [`Getting Started`](https://ej2.syncfusion.com/react/documentation/getting-started/quick-start/#create-the-react-application) section. Once the application is set up, replace the components with React form and Syncfusion form components to create a simple form.

In the following example, a login form is created with Syncfusion components such as TextBox, DatePicker, and Button. This form is validated using the React FormValidator component.

* [`TextBox`](https://ej2.syncfusion.com/react/documentation/textbox/getting-started/) - To get the user's email and password
* [`DatePicker`](https://ej2.syncfusion.com/react/documentation/datepicker/getting-started/) - To get the user's date of birth

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

For the input validation, specify rules for the email, password, and date of birth fields. The form validation will be initiated using the `useEffect` Hook.

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

Here, the `useState` Hook is used to store the value of the date of birth field.

```javascript
const [dateOfBirth, setDateOfBirth] = useState('');
```

The `useReducer` Hook is used to update the email and password state values.

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

Here, the `useRef` Hook is used to focus the username field at initial loading.

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
