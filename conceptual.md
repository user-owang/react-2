### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  to give a single page react app the similar navigational functionality as a ssr app

- What is a single page application?
  a single page app is a web app that does not need to load additional pages as the entire app is loaded on the first visit to the site. subsequent "pages" are just javascript functions that replace what is in the dom

- What are some differences between client side and server side routing?
  client side will have longer initial load times compared to server side routing, however client side rendering will not need to load additionaly pages upon app navigation.

- What are two ways of handling redirects with React Router? When would you use each?
  you can useNavigate or use the <Navigate/> component. you would use the first if you want to retain the previous page in browser history whereas the second you would use as a redirect from an invalid url and does not log the invalid url into browser history

- What are two different ways to handle page-not-found user experiences using React Router?
  you could render a separate 404 component or you could redirect to a valid route

- How do you grab URL parameters from within a component using React Router?
  use the hook useParams

- What is context in React? When would you use it?
  context is a way more easily pass data from a parent component to descendant components

- Describe some differences between class-based components and function
  components in React.
  function components use hooks to manage state instead of having to declare state as part of a class. function components are also easier to read as there is less boilerplate code. 

- What are some of the problems that hooks were designed to solve?
  fixing this and bind issues, getting rid of higher order components