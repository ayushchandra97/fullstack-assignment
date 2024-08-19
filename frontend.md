## React Assignment

1. How can you implement shared functionality across a component tree?

We can implement shared functionality accross a component tree in many ways:

    - Context API : Context API allows us to share data, functions, state etc. across the component tree without having to pass down props manually at every level. We can use `createContext` in the context file and can access the data, functions, state etc. by wrapping the App inside context provider and using `useContext` hook within components.

    - Custom Hooks : These allow us to encapsulate shared logic that can be used across multiple components. These can be used just like inbuilt hooks.

    - Props : We can share functionality by passing data as a prop to child components. We can then acccess them using props.property or using object destructuring in child components.


2. Why is the `useState` hook appropriate for handling state in a complex component?

The `useState` hook is appropriate for handling state in a complex component because even in complex components, state changes can sometimes be simple (e.g., toggling a boolean, updating a number, or managing form inputs). We can use multiple `useState` hooks for different purposes in complex components. It can be used inside only one component and need not be used elsewhere. It has a very simple syntax. It minimizes re-rendering by updating state efficiently, it batches multiple state updates to reduce re-rendering of a complex component.


    - Performance : `useState` can be more efficient when handling localized state updates. Since the state is isolated, it minimizes the re-rendering of unnecessary parts of the component tree.

1. Design a user interface resembling the provided page. Fetch the data from the server and dynamically map the information cards to the fetched data. Ensure that the search functionality is also implemented.

![Logo](UI-Screen-1.png)
