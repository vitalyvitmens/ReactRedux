//TODO: React + Redux (Реагировать + Возвратившийся)
// Научитесь создавать мощные интерактивные пользовательские интерфейсы с помощью популярной библиотеки JavaScript, которой доверяют Facebook и Uber. Погрузитесь в основные концепции React и Redux.

//TODO: What is Front-End Development? (Что такое фронтенд-разработка?)
// Фронтенд-разработка относится к тому, что может видеть конечный пользователь (также обычно называемый «client»). В самых основных формах фронтенд-разработка состоит из HTML, CSS и JavaScript. Как разработчик, вы обнаружите, что ваш внешний интерфейс (веб-сайт, веб-приложение и т. д.) может стать очень сложным и состоять из множества различных движущихся частей. Это значительно усложняет решение проблем, когда вам нужно пройти через лабиринт кода, чтобы найти проблему. В конце концов разработчики решили, что должен быть лучший способ управления всем этим кодом, поэтому они создали библиотеки, которые могли бы облегчить жизнь. React был одной из таких библиотек.
// React был создан Facebook и выпущен для публики в мае 2013 года и с тех пор постоянно поддерживается.

//TODO: Why React? (Почему React?)
// React — одна из самых популярных библиотек JavaScript для интерфейсных веб-приложений. Вот некоторые из преимуществ React: Веб-сайты Speed ​​Interactive должны обновлять DOM (объектную модель документа) каждый раз, когда происходит изменение. Этот процесс, как правило, находчивый и медленный. По сравнению с другими библиотеками, которые манипулируют DOM, React использует Virtual DOM, что позволяет обновлять только те части веб-сайта, которые изменились. Это резко увеличивает скорость обновлений, поскольку современные веб-приложения могут содержать тысячи элементов.
// Мы узнаем больше о Virtual DOM в следующих уроках.
// Простота использования
// React позволяет разработчикам группировать связанный код вместе, тем самым значительно упрощая создание и поддержку крупномасштабных приложений. Support React имеет удивительно большое сообщество и имеет открытый исходный код. Он поддерживается Facebook и сообществом.
// Давайте начнем и погрузимся в создание нашего первого приложения React!

//TODO: Adding React (Добавление React)
// React можно добавить на сайт без каких-либо специальных инструментов и установок. Во-первых, нам нужно добавить библиотеку React в виде двух тегов script в head (заголовок) нашего HTML-документа:
// HTML:
{
  /* <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>

<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>  */
}
// Далее нам нужно добавить еще один скрипт, чтобы включить использование JSX.
// JSX — это расширение синтаксиса для JavaScript, и его рекомендуется использовать с React.
// Не волнуйтесь, мы узнаем больше о JSX на следующих уроках. А пока давайте просто добавим следующий тег script:
// HTML:
{
  /* <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>  */
}
// Этот подход добавления React на веб-сайт подходит только для создания небольших демонстраций.
// На следующем уроке мы научимся создавать реальный проект, готовый к производству.

//TODO: Adding React (Добавление React)
// После добавления необходимых тегов сценария мы можем приступить к созданию нашего приложения React! Мы добавляем контейнер, который будет использоваться для отображения чего-либо с помощью React.
// HTML:
{
  /* <div id="container"></div> */
}
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>Test</title>
//         <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
//         <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin>
//         </script>
//         <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
//     </head>
//     <body>

//         <div id="container"></div>

//         <script type="text/babel">
//         ReactDOM.render(
//           <h1>Hello, React!</h1>,
//           document.getElementById('container')
//         )
//         </script>
//     </body>
// </html>
// Вы можете использовать любой идентификатор для своего контейнера. Он будет использоваться React для поиска контейнера и добавления в него содержимого.
// Теперь пришло время для нашего первого кода React!
// Давайте отобразим простое сообщение в виде заголовка:
// Код находит контейнер div и добавляет к нему заголовок h1.
// Не беспокойтесь о новом синтаксисе. Мы рассмотрим это на следующих уроках.

//TODO: Create React App (Создать React-приложение)
// В предыдущем уроке мы узнали, как добавить React в простой HTML-документ с помощью тегов script.
// Однако настоящие веб-приложения имеют другой масштаб, содержат несколько файлов, используют сторонние библиотеки и т.д. Facebook создал удобный инструмент под названием «Create React App» https://create-react-app.dev/, который упрощает настройку проекта React с помощью простой команды! Для начала убедитесь, что на вашем компьютере установлена ​​последняя версия Node https://nodejs.org/en/. Запустите следующие команды в Терминале, чтобы создать и запустить приложение React под названием «my-app»:
// npx create-react-app my-app
// cd my-app
// npm start
// Это установит все необходимые зависимости, настроит и запустит проект на localhost:3000. Это стандартный вывод нашего проекта в браузере:
// См. Рис: CreateReactApp.png
// Create React App позволяет нам сосредоточиться на коде, а не на установке и настройке различных инструментов.

//TODO: Project Structure (Структура проекта)
// Давайте изучим структуру нашего проекта, открыв его с помощью редактора кода.
// В нашем примере мы будем использовать Visual Studio Code, но вы можете использовать любой редактор кода.
// См. Рис: ProjectStructure_1.jpg
// public folder (Общая папка) содержит файлы, связанные с тем, как приложение будет отображаться на клиенте, наиболее важными из которых являются index.html, который является HTML-шаблоном нашей страницы:
// См. Рис: ProjectStructure_2.jpg
// Папка src содержит все файлы JavaScript, CSS и изображения, которые будет скомпилирован в файл пакета и введен в index.html. Как React скомпилирован в файл пакета? Он использует так называемый «file loader» (загрузчик файлов). В случае приложения Create React используется Webpack.
// См. Рис: ProjectStructure_3.jpg
// Webpack создает файл «bundle» (связки), содержащий содержимое нескольких файлов, которые необходимо «bundled» (объединить) вместе, и все это добавляется в один файл. Вместо того, чтобы заставлять HTML-файл искать несколько файлов, что может значительно замедлить время загрузки, ему нужно найти только один файл.
// Помните, что все файлы CSS и JS нужно добавлять в папку src, иначе webpack их не увидит.
// Хотя в папке src есть и другие файлы, которые поставляются с приложением Create React при его создании, два файла ниже являются единственными важными файлами:
// • index.js : этот файл является точкой входа в наше приложение. В нашем коде метод ReactDOM.render() используется для поиска элемента с id="root" в HTML и добавления нашего приложения React внутрь этого элемента (аналогично предыдущему уроку).
// • App.js : этот файл является основным компонентом, который будет отображаться в DOM, который в настоящее время включает изображение логотипа React и текст по умолчанию, который мы видим в выходных данных.
// Мы узнаем о компонентах в следующих уроках.

//TODO: Changing the Output (Изменение вывода)
// Теперь, когда мы знаем, как создать и запустить проект React, давайте изменим вывод по умолчанию на простое сообщение Hello. Для этого нам нужно открыть src/index.js и изменить код на следующий:
// JSX:
// ReactDOM.render(
//   <h1>Hello, React!</h1>,
//   document.getElementById('root')
// );
//TODO: Новая версия для index.js:
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<h1>Hello, React!</h1>)
// Это выведет сообщение в виде заголовка:
// См. Рис: ChangingOutput.png
// Действительно классная функция Create React App — Fast Refresh, которая автоматически отражает изменения, внесенные в код в браузере.

//TODO: StackBlitz (Стек-Блиц https://stackblitz.com/edit/hello-react-example?file=index.js%3AL1)
// Чтобы упростить эксперименты с React, мы будем использовать StackBlitz https://stackblitz.com/edit/hello-react-example?file=index.js%3AL1 в качестве нашей онлайн-площадки, позволяющей изменять и запускать реальный код React. Вот тот же проект на StackBlitz: Попробуйте на StackBlitz Мы удалили все лишние файлы, такие как изображения логотипа, чтобы упростить структуру проекта. Теперь у нас есть следующие файлы:
//  - index.html : шаблон HTML-страницы.
//  - index.js : точка входа нашего приложения.
//  - style.css : таблица стилей для нашего проекта.
//  - package.json : содержит различные метаданные, относящиеся к проекту, например зависимости.
// См. Рис: StackBlitz.png
// Нажмите «Попробовать» на StackBlitz и поэкспериментируйте с кодом!
// https://stackblitz.com/edit/hello-react-example?file=index.js%3AL1

//TODO: Course Project (Курсовой проект https://stackblitz.com/edit/react-contact-manager-4?file=index.js)
// На протяжении этого курса мы поможем вам попрактиковаться и создать собственное приложение Contact Manager с помощью React, чтобы вы сохранили полученные знания и смогли применить их на практике. Наш менеджер контактов позволит просматривать список контактов и добавлять новые в список. Посмотрите краткий обзор нашего приложения Contact Manager в действии на StackBlitz https://stackblitz.com/edit/react-contact-manager-4?file=index.js
// См. Рис: CourseProject.png
// Не бойтесь кода проекта. К тому времени, когда вы закончите курс, все будет иметь полный смысл и выглядеть вполне выполнимым. Мы гарантируем это!

//TODO: What is JSX? (Что такое JSX? https://stackblitz.com/edit/hello-react-example?file=index.js)
// В предыдущем модуле мы использовали следующий код для отображения вывода с помощью React:
// JSX:
// ReactDOM.render(
//   <h1>Hello, React!</h1>,
//   document.getElementById('root')
// );
// Попробуйте на StackBlitz
// https://stackblitz.com/edit/hello-react-example?file=index.js
// Давайте начнем разбирать код и разбираться в каждой его части. Мы начнем с элемента
{
  /* <h1>Hello, React!</h1>.  */
}
// Как видите, элемент не заключен в кавычки для представления строки. Это похоже на элемент HTML, однако мы используем его прямо в коде JavaScript! Это называется JSX и является расширением синтаксиса JavaScript. Это позволяет нам создавать элементы пользовательского интерфейса прямо в коде JavaScript!
// React не требует использования JSX, однако в сообществе React принято использовать JSX, поскольку он упрощает разработку пользовательских интерфейсов, а также позволяет React отображать полезные сообщения об ошибках и предупреждениях.

//TODO: Intro to JSX (Введение в JSX https://stackblitz.com/edit/hello-react-example?file=index.js)
// Давайте еще раз посмотрим на наш код:
// JSX:
// ReactDOM.render(
//   <h1>Hello, React!</h1>,
//   document.getElementById('root')
// );
// Код вызывает метод рендеринга React и передает ему два аргумента: элемент JSX и контейнер. Метод рендеринга отображает предоставленный элемент в контейнере, который в нашем случае является элементом HTML с id="root" . Попробуйте на StackBlitz:
// https://stackblitz.com/edit/hello-react-example?file=index.js
// Когда вы вызываете метод рендеринга, любое существующее содержимое контейнера заменяется. Вот почему, как правило, контейнеры в HTML пусты.

//TODO: Expressions in JSX (Выражения в JSX https://stackblitz.com/edit/react-jsx-expressions-example?file=index.js)
// Мы можем использовать любое выражение JavaScript внутри JSX, используя фигурные скобки.
// Например:
// JSX:
// const name = "David";
// const el = <p>Hello, {name}!</p>;

// ReactDOM.render(el, document.getElementById('root'));
//TODO: Новая версия для index.js:
// const name = 'David'
// const el = <p>Hello, {name}!</p>
//
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(el)
//
// Попробуйте на StackBlitz:
// https://stackblitz.com/edit/react-jsx-expressions-example?file=index.js
// В приведенном выше примере мы используем имя переменной в элементе JSX.
// Как видите, JSX можно использовать так же, как и выражения JavaScript. Вы можете присвоить выражение JSX переменной, вернуть его из функции и т. д.

//TODO: Attributes in JSX (Атрибуты в JSX)
// Мы можем указывать атрибуты с помощью кавычек, как в HTML:
// JSX:
{
  /* <div id="name"></div> */
}
// При использовании выражения JavaScript в качестве значения атрибута не следует использовать кавычки:
// JSX:
{
  /* <div id={user.id}></div>  */
}
// React DOM использует соглашение об именах свойств camelCase вместо имен атрибутов HTML.
// Например, class становится className в JSX.

//TODO: How Does JSX Work? (Как работает JSX? https://stackblitz.com/edit/react-jsx-counter-example?file=index.js)
// Когда выражения JSX компилируются, они преобразуются в объекты JavaScript, представляющие элементы React.
// Затем React использует эти элементы для создания соответствующей модели HTML DOM и отображения ее в браузере. Давайте создадим приложение-счетчик, которое каждую секунду увеличивает значение счетчика и отображает его на странице в виде абзаца:
// JSX:
// let counter = 0;

// function show() {
//   counter++;
//   const el = <p>{counter}</p>;
//   ReactDOM.render(
//     el, document.getElementById('root')
//   );
// }

// setInterval(show, 1000);
//TODO: Новая версия для index.js:
// let counter = 0

// function show() {
//   counter++
//   const el = <p>{counter}</p>
//   const root = ReactDOM.createRoot(document.getElementById('root'))
//   root.render(el)
// }

// setInterval(show, 1000)
// Попробуйте на StackBlitz.
// https://stackblitz.com/edit/react-jsx-counter-example?file=index.js
// Мы используем setInterval для вызова функции show каждую секунду и отображения элемента счетчика на странице. Одной из замечательных особенностей React является то, что он обновляет только те элементы, которые нуждаются в обновлении. Вы можете проверить вывод HTML из приведенного выше примера и увидеть, что каждую секунду обновляется только текст в абзаце.
// На практике большинство приложений React вызывают ReactDOM.render() один раз. В следующих уроках
// мы узнаем, как обновлять элементы без вызова метода рендеринга.

//TODO: Virtual DOM (Виртуальный дом)
// В предыдущей части мы узнали, что React обновляет только те элементы, которые необходимы.
// Это позволяет приложениям React работать намного быстрее, чем приложения, созданные с использованием других интерфейсных технологий. Но как React достигает этого? React использует виртуальный DOM, который является облегченным представлением DOM. Когда элемент изменяется, он сначала обновляется в Virtual DOM. Этот процесс быстрый, так как виртуальный DOM представлен простыми объектами. После этого React сравнивает виртуальный DOM с его предыдущим состоянием и применяет только те обновления DOM, которые необходимы для приведения DOM в желаемое состояние.
// DOM означает объектную модель документа и представляет собой древовидное представление HTML-страницы. Ознакомьтесь с нашим руководством по JavaScript, чтобы узнать больше о DOM.
// let counter = 0

// function show() {
//   counter++
//   const el = <p>{counter}</p>
//   const root = ReactDOM.createRoot(document.getElementById('root'))
//   root.render(el)
// }

// setInterval(show, 1000)

// let counter2 = 0

// function show2() {
//   counter2++
//   const el2 = <p>{counter2}</p>
//   const root = ReactDOM.createRoot(document.getElementById('root2'))
//   root.render(el2)
// }

// setInterval(show2, 100)

// let counter3 = 0

// function show3() {
//   counter3++
//   const el3 = <p>{counter3}</p>
//   const root = ReactDOM.createRoot(document.getElementById('root3'))
//   root.render(el3)
// }

// setInterval(show3, 10)

// let counter4 = 0

// function show4() {
//   counter4++
//   const el4 = <p>{counter4}</p>
//   const root = ReactDOM.createRoot(document.getElementById('root4'))
//   root.render(el4)
// }

// setInterval(show4, 1)

//TODO: Components (Компоненты)
// Компоненты позволяют разделить страницу на независимые и многократно используемые части. Давайте визуализируем это, взглянув на часть страницы Discussions (обсуждений) SoloLearn: Обратите внимание, что страницу можно разделить на несколько частей. Каждая из этих «частей» является компонентом. Заголовок — это компонент, кнопка «новый вопрос» — это компонент, а строка поиска — это отдельный компонент. Это упрощает организацию страниц на дрожжах, но, что еще более важно, компоненты позволяют нам, как разработчикам, отделять задачи друг от друга.
// См. Рис: Components.png
// Разделение задач — это принцип программирования, который гласит, что каждая задача должна быть разделена на отдельные части.
// Например, на приведенной выше диаграмме кнопка «Новый вопрос» (2) должна быть нажата, если пользователь хочет добавить новый вопрос, тогда как панель поиска (3) будет использоваться, если пользователь хочет найти существующие вопросы.

//TODO: Functional Components (Функциональные компоненты)
// В React есть два типа компонентов, которые вы можете использовать: функциональные компоненты и компоненты класса.
// В этой части мы поговорим о функциональных компонентах. Функциональный компонент — это простая функция JavaScript:
// JSX:
// function Hello() {
//   return <h1>Hello world.</h1>;
// }
// В приведенном выше коде определен функциональный компонент Hello, который возвращает простой элемент React.
// Обратите внимание, что имя функционального компонента начинается с заглавной буквы. Это абсолютно критично. Если мы начнем имя компонента со строчной буквы, браузер будет рассматривать наш компонент как обычный HTML-элемент, а не как компонент.

//TODO: Rendering Components (Отрисовка компонентов)
// Чтобы отобразить компонент, нам нужно создать соответствующий элемент JSX. Например, для нашего пользовательского компонента Hello:
// JSX:
// const el = <Hello />;
// Теперь мы можем использовать наш пользовательский элемент и отображать его на странице:
// JSX:
// function Hello() {
//   return <h1>Hello world.</h1>;
// }

// const el = <Hello />;
// ReactDOM.render(
//   el,
//   document.getElementById('root')
// );
//TODO: Новая версия для index.js:
// function Hello() {
//   return <h1>Hello world.</h1>
// }

// const el = <Hello />

// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(el)
// Попробуйте на StackBlitz
// https://stackblitz.com/edit/react-functional-components-example?file=index.js
// Помните, все имена компонентов должны начинаться с заглавной буквы.

//TODO: Class Components (Компоненты класса)
// Компоненты класса обычно используются, когда есть более сложные взаимодействия с пользователем, такие как формы и анимация. Все компоненты класса должны расширять класс React.Component. Мы можем переписать наш функциональный компонент Hello как компонент класса:
// JSX:
// class Hello extends React.Component {
//   render() {
//     return <h1>Hello world.</h1>
//   }
// }
//TODO: Новая версия для index.js:
// class Hello extends React.Component {
//   render() {
//     return <h1>!!! Hello world !!!</h1>
//   }
// }

// const el = <Hello />
// ReactDOM.createRoot(document.getElementById('root')).render(el)
// Попробуйте это на StackBlitz
// https://stackblitz.com/edit/react-class-component-example?file=index.js%3AL5
// Компоненты класса должны иметь метод рендеринга, который отвечает за то, что страница должна отображаться.
// Об особенностях и различиях функциональных и классовых компонентов мы узнаем на следующих уроках.

//TODO: Props (Реквизит)
// Функциональные компоненты могут принимать аргументы, как и функции JavaScript. Эти аргументы называются props и представляют объект. Например, мы можем использовать props в нашем компоненте Hello:
// JSX:
// function Hello(props) {
//   return <p>Hello, {props.name}!</p>
// }
// Теперь мы можем добавить атрибут name к нашему элементу:
// JSX:
// const el = <Hello name="David" />
//TODO: Новая версия для index.js:
// function Hello(props) {
//   return <p>Hello, {props.name}!</p>
// }

// const el = <Hello name="David" />
// ReactDOM.createRoot(document.getElementById('root')).render(el)
// Значение атрибута будет передано компоненту при рендеринге. Попробуйте на StackBlitz
// https://stackblitz.com/edit/react-functional-component-props-example?file=index.js
// Элемент может иметь несколько настраиваемых атрибутов, которые будут переданы компоненту с помощью объекта props. Вы можете использовать любые пользовательские имена для ваших атрибутов.

//TODO: Components using Components (Компоненты с использованием компонентов)
// Компоненты могут использовать другие компоненты для создания выходных данных. Например:
// JSX:
// function App() {
//   return (
//     <div>
//       <Hello name="David" />
//       <Hello name="James" />
//       <Hello name="Amy" />
//     </div>
//   )
// }

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
// ReactDOM.render(el, document.getElementById('root'))
//TODO: Новая версия для index.js:
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
// Здесь наш компонент App использует компонент Hello три раза, каждый раз с новым атрибутом имени. Попробуйте на StackBlitz
// https://stackblitz.com/edit/react-functional-component-props-example-2?file=index.js
// Как правило, рекомендуется разбивать сложные компоненты на несколько более мелких компонентов, которые можно использовать повторно.
// Например, компонент Post может использовать компонент Avatar, компонент Image, компонент Date и т.д.

//TODO: Props in Class Components (Реквизиты в компонентах класса)
// Доступ к свойствам можно получить в компонентах класса с помощью this.props. Например:
// JSX:
// class Hello extends React.Component {
//   render() {
//     return <p>Hello, {this.props.name}!</p>
//   }
// }

// class Hello extends React.Component {
//   render() {
//     return <p>Hello, {this.props.name}!</p>
//   }
// }

// const el = <Hello name="David" />
// ReactDOM.render(el, document.getElementById('root'))
//TODO: Новая версия для index.js:
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
// Попробуйте на StackBlitz Важно учитывать, что реквизиты доступны только для чтения, то есть компоненты не могут изменять свои реквизиты.
// https://stackblitz.com/edit/react-class-component-props-example?file=index.js
// Интерактивные приложения обычно требуют изменения данных и элементов страницы. На следующем уроке мы узнаем, как изменить вывод компонентов с помощью состояния.

//TODO: An Example (Пример)
// Теперь, когда мы знаем, как создавать компоненты и передавать им данные, давайте создадим список покупок. Каждый предмет в нашем списке будет иметь имя и цену. Например:
// JSX:
{
  /* <Item name="Cheese" price="4.99" />  */
}
// Компонент Item отобразит простой элемент div с данными:
// JSX:
// function Item(props) {
//   return <div className="item">
//   <b>Name:</b> {props.name} <br />
//   <b>Price:</b> {props.price}
//   </div>;
// }
// Теперь мы можем использовать наш компонент и создать несколько элементов для нашего списка покупок:
// JSX:
{
  /* <Item name="Cheese" price="4.99" />
<Item name="Bread" price="1.5" />
<Item name="Ice cream" price="24" /> */
}

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
//TODO: Новая версия для index.js:
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
// const el = <App />
// ReactDOM.render(el, document.getElementById('root'))

// Попробуйте на StackBlitz
// https://stackblitz.com/edit/react-shopping-list-example?file=index.js
// Мы добавили несколько простых стилей CSS для визуального разделения элементов.
// Нажмите «Попробовать на StackBlitz» , чтобы увидеть результат и поэкспериментировать с кодом.
