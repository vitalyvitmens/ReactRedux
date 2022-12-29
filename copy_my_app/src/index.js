import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// import App from './App'
// import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
const root2 = ReactDOM.createRoot(document.getElementById('root2'))
const root3 = ReactDOM.createRoot(document.getElementById('root3'))

// TODO: Changing the Output
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<h1>Hello, React!</h1>)

// TODO: Expressions in JSX
// const name = 'David'
// const el = <p>Hello, {name}!</p>
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(el)

// TODO: How Does JSX Work?
// let counter = 0

// function show() {
//   counter++
//   const el = <p>{counter}</p>
//   const root = ReactDOM.createRoot(document.getElementById('root'))
//   root.render(el)
// }

// setInterval(show, 1000)

//TODO: Rendering Components (Отрисовка компонентов)
// function Hello() {
//   return <h1>Hello world.</h1>
// }

// const el = <Hello />
// // ReactDOM.createRoot(document.getElementById('root')).render(el)
// root.render(el)
// root2.render(el)
// root3.render(el)

//TODO: Class Components (Компоненты класса)
// class Hello extends React.Component {
//   render() {
//     return <h1>!!! Hello world !!!</h1>
//   }
// }

// const el = <Hello />
// // ReactDOM.createRoot(document.getElementById('root')).render(el)
// root.render(el)
// root2.render(el)
// root3.render(el)

// //TODO: Props (Реквизит)
// function Hello(props) {
//   return <p>Hello, {props.name}!</p>
// }

// const el = <Hello name="David" />
// root.render(el)
// root2.render(el)
// root3.render(el)

//TODO: Components using Components (Компоненты с использованием компонентов)
// function Hello(props) {
//   return <p>Hello, {props.name}!</p>
// }

// function App() {
//   return (
//     <div>
//       <Hello name="David" />
//       <Hello name="James" />
//       <Hello name="Amy" />
//     </div>
//   )
// }

// const el = <App />
// // ReactDOM.createRoot(document.getElementById('root')).render(el)
// root.render(el)
// root2.render(el)
// root3.render(el)

//TODO: Props in Class Components (Реквизиты в компонентах класса)
// class Hello extends React.Component {
//   render() {
//     return <p>Hello, {this.props.name}!</p>
//   }
// }

// const el = <Hello name="David" />
// // ReactDOM.createRoot(document.getElementById('root')).render(el)
// root.render(el)
// root2.render(el)
// root3.render(el)

//TODO: An Example (Пример)
// function Item(props) {
//   return (
//     <div className="item">
//       <b>Name:</b> {props.name} <br />
//       <b>Price:</b> ${props.price}
//     </div>
//   )
// }

// function App() {
//   return (
//     <div>
//       <Item name="Cheese" price="4.99" />
//       <Item name="Bread" price="1.5" />
//       <Item name="Ice cream" price="24" />
//     </div>
//   )
// }

// const el = <App />
// ReactDOM.createRoot(document.getElementById('root')).render(el)

//TODO: State (Состояние)
// class Hello extends React.Component {
//   state = {
//     name: 'James',
//   }
//   render() {
//     return <h1>Hello {this.state.name}.</h1>
//   }
// }

// const el = <Hello />
// ReactDOM.createRoot(document.getElementById('root')).render(el)

//TODO:Counter App (Приложение счетчика)
// class Counter extends React.Component {
//   state = {
//     counter: 0,
//   }
//   increment = () => {
//     this.setState({ counter: this.state.counter + 1 })
//   }
//   render() {
//     return (
//       <div>
//         <p>{this.state.counter}</p>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     )
//   }
// }

// const el = <Counter />
// ReactDOM.createRoot(document.getElementById('root')).render(el)

//TODO: Hooks (Крючки)
// function Hello() {
//   const [name, setName] = useState('David')

//   return <h1>Hello {name}.</h1>
// }

// const el = <Hello />
// ReactDOM.createRoot(document.getElementById('root')).render(el)

//TODO: Counter App using Hooks (Приложение счетчика с использованием хуков)
// function Counter() {
//   const [counter, setCounter] = useState(0)

//   function increment() {
//     setCounter(counter + 1)
//   }
//   return (
//     <div>
//       <p>{counter}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   )
// }

// const el = <Counter />
// ReactDOM.createRoot(document.getElementById('root')).render(el)

//TODO: Lifecycle Methods (Методы жизненного цикла)
// class Counter extends React.Component {
//   state = {
//     counter: 0,
//   }
//   increment = () => {
//     this.setState({ counter: this.state.counter + 1 })
//   }
//   componentDidMount() {
//     this.setState({ counter: 42 })
//   }
//   render() {
//     return (
//       <div>
//         <p>{this.state.counter}</p>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     )
//   }
// }

// const el = <Counter />
// ReactDOM.createRoot(document.getElementById('root')).render(el)

//TODO: componentDidUpdate (компонентСделалОбновление)
// class Counter extends React.Component {
//   state = {
//     counter: 0,
//   }
//   increment = () => {
//     this.setState({ counter: this.state.counter + 1 })
//   }
//   componentDidUpdate() {
//     alert(`Number of clicks: ${this.state.counter}`)
//   }
//   render() {
//     return (
//       <div>
//         <p>{this.state.counter}</p>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     )
//   }
// }

// const el = <Counter />
// ReactDOM.createRoot(document.getElementById('root')).render(el)

//TODO: The useEffect Hook (Хук с эффектом использования)
// function Counter() {
//   const [counter, setCounter] = useState(0)

//   useEffect(() => {
//     alert('Number of clicks: ' + counter)
//   })

//   function increment() {
//     setCounter(counter + 1)
//   }
//   return (
//     <div>
//       <p>{counter}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   )
// }

// const el = <Counter />
// ReactDOM.createRoot(document.getElementById('root')).render(el)

//TODO: Event Handling (Обработка событий)
// function Counter() {
//   const [counter, setCounter] = useState(0)

//   function increment() {
//     setCounter(counter + 1)
//   }
//   return (
//     <div>
//       <p>{counter}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   )
// }

// const el = <Counter />
// ReactDOM.createRoot(document.getElementById('root')).render(el)
// то же самое приложение Counter, созданное с использованием компонента класса
// class Counter extends React.Component {
//   state = {
//     counter: 0,
//   }
//   increment = () => {
//     this.setState({ counter: this.state.counter + 1 })
//   }
//   render() {
//     return (
//       <div>
//         <p>{this.state.counter}</p>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     )
//   }
// }

// const el = <Counter />
// ReactDOM.createRoot(document.getElementById('root')).render(el)

//TODO: Handling User Input (Обработка пользовательского ввода)
// function Converter() {
//   const [km, setKm] = useState(0)

//   function handleChange(e) {
//     setKm(e.target.value)
//   }
//   function convert(km) {
//     return (km / 1.609).toFixed(2)
//   }

//   return (
//     <div>
//       <input type="text" value={km} onChange={handleChange} />
//       <p>
//         {' '}
//         {km} km is {convert(km)} miles{' '}
//       </p>
//     </div>
//   )
// }

// const el = <Converter />
// ReactDOM.createRoot(document.getElementById('root')).render(el)

//TODO: Forms (Формы)
// function AddForm() {
//   const [sum, setSum] = useState(0)
//   const [num, setNum] = useState(0)

//   function handleChange(e) {
//     setNum(e.target.value)
//   }

//   function handleSubmit(e) {
//     setSum(sum + Number(num))
//     e.preventDefault()
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="number" value={num} onChange={handleChange} />
//       <input type="submit" value="Add" />
//       <p> Sum is {sum} </p>
//     </form>
//   )
// }

// const el = <AddForm />
// ReactDOM.createRoot(document.getElementById('root')).render(el)

//TODO: Lists(Списки)
// function MyList(props) {
//   const arr = props.data
//   const listItems = arr.map((val) => <li>{val}</li>)
//   return <ul>{listItems}</ul>
// }

// const arr = ['A', 'B', 'C']
// const el = <MyList data={arr} />

// ReactDOM.createRoot(document.getElementById('root')).render(el)

//TODO: Keys (Ключи)
// function MyList(props) {
//   const arr = props.data
//   const listItems = arr.map((val, index) => <li key={index}>{val}</li>)
//   return <ul>{listItems}</ul>
// }

// const arr = ['A', 'B', 'C']
// const el = <MyList data={arr} />

// ReactDOM.createRoot(document.getElementById('root')).render(el)

//TODO: Contact Manager (Менеджер контактов)
// function AddPersonForm() {
//   const [person, setPerson] = useState('')

//   function handleChange(e) {
//     setPerson(e.target.value)
//   }

//   function handleSubmit(e) {
//     e.preventDefault()
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Add new contact"
//         onChange={handleChange}
//         value={person.name}
//       />
//       <button type="submit">Add</button>
//     </form>
//   )
// }

// function PeopleList(props) {
//   const arr = props.data
//   const listItems = arr.map((val, index) => <li key={index}>{val}</li>)
//   return <ul>{listItems}</ul>
// }

// const contacts = ['James Smith', 'Thomas Anderson', 'Bruce Wayne']
// const el = (
//   <div>
//     <AddPersonForm />
//     <PeopleList data={contacts} />
//   </div>
// )
// ReactDOM.createRoot(document.getElementById('root')).render(el)

//TODO: Sharing State (Состояние обмена)
// function AddPersonForm(props) {
//   const [person, setPerson] = useState('')

//   function handleChange(e) {
//     setPerson(e.target.value)
//   }

//   function handleSubmit(e) {
//     e.preventDefault()
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Add new contact"
//         onChange={handleChange}
//         value={person}
//       />
//       <button type="submit">Add</button>
//     </form>
//   )
// }

// function PeopleList(props) {
//   const arr = props.data
//   const listItems = arr.map((val, index) => <li key={index}>{val}</li>)
//   return <ul>{listItems}</ul>
// }

// function ContactManager(props) {
//   const [contacts, setContacts] = useState(props.data)

//   return (
//     <div>
//       <AddPersonForm />
//       <PeopleList data={contacts} />
//     </div>
//   )
// }
// const contacts = ['James Smith', 'Thomas Anderson', 'Bruce Wayne']

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <ContactManager data={contacts} />
// )

//TODO: Adding a Contact (Добавление контакта)
// function AddPersonForm(props) {
//   const [person, setPerson] = useState('')

//   function handleChange(e) {
//     setPerson(e.target.value)
//   }

//   function handleSubmit(e) {
//     props.handleSubmit(person)
//     setPerson('')
//     e.preventDefault()
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Add new contact"
//         onChange={handleChange}
//         value={person}
//       />
//       <button type="submit">Add</button>
//     </form>
//   )
// }

// function PeopleList(props) {
//   const arr = props.data
//   const listItems = arr.map((val, index) => <li key={index}>{val}</li>)
//   return <ul>{listItems}</ul>
// }

// function ContactManager(props) {
//   const [contacts, setContacts] = useState(props.data)

//   function addPerson(name) {
//     setContacts([...contacts, name])
//   }

//   return (
//     <div>
//       <AddPersonForm handleSubmit={addPerson} />
//       <PeopleList data={contacts} />
//     </div>
//   )
// }
// const contacts = ['James Smith', 'Thomas Anderson', 'Bruce Wayne']

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <ContactManager data={contacts} />
// )

//TODO: Summary (Резюме)
function AddPersonForm(props) {
  const [person, setPerson] = useState('')

  function handleChange(e) {
    setPerson(e.target.value)
  }

  function handleSubmit(e) {
    if (person !== '') {
      props.handleSubmit(person)
      setPerson('')
    }
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new contact"
        onChange={handleChange}
        value={person}
      />
      <button type="submit">Add</button>
    </form>
  )
}

function PeopleList(props) {
  const arr = props.data
  const listItems = arr.map((val, index) => <li key={index}>{val}</li>)
  return <ul>{listItems}</ul>
}

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data)

  function addPerson(name) {
    setContacts([...contacts, name])
  }

  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  )
}
const contacts = ['James Smith', 'Thomas Anderson', 'Bruce Wayne']

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContactManager data={contacts} />
)
