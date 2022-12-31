//TODO: React + Redux (Реагировать + Редуктор)
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

//TODO: State (Состояние)
// До этого момента мы научились передавать данные компонентам с помощью props (реквизитов). Многие веб-приложения нуждаются в своих компонентах для изменения своих данных, например, после взаимодействия с пользователем (нажатие кнопки, отправка формы и т.д.). Однако реквизит не может быть изменен. Чтобы позволить компонентам управлять своими данными и изменять их, React предоставляет функцию, называемую состоянием. Состояние — это объект, который добавляется как свойство в компоненты класса. Например:
// JSX:
// class Hello extends React.Component {
//   state = {
//     name: "James"
//   }

//   render() {
//     return <h1>Hello {this.state.name}.</h1>;
//   }
// }
//TODO: Новая версия для index.js:
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
// Попробуйте на StackBlitz
// https://stackblitz.com/edit/react-state-initial-example?file
// Как видите, состояние — это простой объект, содержащий пары ключ:значение. Как и в случае с props, доступ к значениям можно получить с помощью this.state. Теперь, когда компонент отрисовывается, состояние инициализируется с заданным значением, и появляется заголовок «Привет, Джеймс». Попробуйте на StackBlitz
// https://stackblitz.com/edit/react-state-initial-example?file=index.js%3AL5
// Объект состояния может содержать несколько пар ключ:значение, разделенных запятыми.

//TODO: Changing State (Изменение состояния)
// Состояние не должно изменяться напрямую. Вместо этого React предоставляет метод setState(), который можно использовать для изменения состояния. Например:
// JSX:
// this.setState({
//   name: 'James',
//   age: 25,
// })
// Вам нужно передать объект с новыми парами ключ:значение в метод setState. Почему мы должны использовать setState вместо того, чтобы просто напрямую изменять значения свойств объекта? Ответ раскрывает одну из самых полезных функций React: когда вызывается setState, React автоматически повторно отображает затронутый компонент с новым состоянием! Обычно изменение состояния происходит в обработчиках событий. Мы рассмотрим пример в следующей части!
// Когда состояние изменяется с помощью метода setState, React получает уведомление и немедленно повторно отображает компонент с обновленным состоянием.

//TODO: Counter App (Приложение счетчика)
// Чтобы лучше понять, как работает состояние, давайте создадим приложение-счетчик, которое увеличивает счетчик при каждом нажатии кнопки.
// Начнем с создания нашего компонента Counter, который включает в себя счетчик и кнопку:
// JSX:
// class Counter extends React.Component {
//   state = {
//     counter: 0,
//   }
//   render() {
//     return (
//       <div>
//         <p>{this.state.counter}</p>
//         <button>Increment</button>
//       </div>
//     )
//   }
// }
// Мы инициализировали наш счетчик значением 0 в состоянии. Теперь нам нужно добавить обработчик события клика на кнопку и увеличить счетчик в состоянии. Вот окончательный код:
// JSX:
// class Counter extends React.Component {
//   state = {
//     counter: 0,
//   }
//   increment = () => {
//     this.setState({
//       counter: this.state.counter + 1,
//     })
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
//TODO: Новая версия для index.js:
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
// Попробуйте на StackBlitz Событие onClick вызывает функцию увеличения нашего компонента, которая использует setState для изменения значения нашего счетчика. Когда состояние изменяется, React автоматически запускает повторный рендеринг компонента. Нажмите «Попробовать на StackBlitz», чтобы увидеть счетчик в действии!
// Обратите внимание, что обработчик событий использует синтаксис camelCase и что функция обработчика передается в фигурных скобках.
// Мы рассмотрим обработчики событий более подробно в следующих уроках.

//TODO: Props vs State (Реквизит против состояния)
// В качестве резюме, вот краткое изложение основных различий между Props (реквизитами) и State (состоянием):
// - Мы используем реквизиты для передачи данных компонентам.
// - Компоненты используют состояние для управления своими данными.
// - Реквизиты доступны только для чтения и не могут быть изменены.
// - Состояние может быть изменено его компонентом с помощью метода setState().
// - Метод setState() приводит к повторному рендерингу затронутого компонента.
// Компоненты, которые имеют состояние, называются с состоянием, а компоненты, которые не используют состояние, называются без состояния.

//TODO: Hooks (Крючки)
// Более ранняя версия React позволяла использовать состояние только с компонентами класса.
// В последних версиях React была представлена ​​новая функция, называемая хуками, позволяющая использовать состояние внутри функциональных компонентов. Во-первых, нам нужно импортировать хук useState :
// JSX:
// import React, { useState } from 'react';
//TODO: Новая версия для index.js:
// useState возвращает пару, текущее значение состояния и функцию, которая позволяет изменить состояние.
// useState принимает один аргумент, который является начальным значением состояния. Давайте посмотрим на пример:
// JSX:
// function Hello() {
//   const [name, setName] = useState("David");

//   return <h1>Hello {name}.</h1>;
// }

// function Hello() {
//   const [name, setName] = useState('David')

//   return <h1>Hello {name}.</h1>
// }

// const el = <Hello />
// ReactDOM.createRoot(document.getElementById('root')).render(el)
// Попробуйте на StackBlitz
// https://stackblitz.com/edit/react-hooks-initial-example?file=index.js
// В приведенном выше примере мы создаемпеременную состояния name и функцию setName. Синтаксис квадратных скобок называется деструктурированием массива. Он присваивает переменной name значение текущего состояния, а setName — функции, позволяющей изменить состояние. Вы можете назвать эти переменные как угодно. Затем мы передаем «Дэвид» в качестве начального значения для нашей переменной имени в useState().
// Вы можете создать несколько переменных состояния с соответствующими им методами набора. Просто используйте отдельные операторы для каждой переменной, используя хук useState.

//TODO: Counter App using Hooks (Приложение счетчика с использованием хуков)
// Теперь мы можем переписать наше приложение Counter из предыдущего урока, используя функциональный компонент и хуки!
// Вот код:
// JSX:
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
// Попробуйте на StackBlitz
// https://stackblitz.com/edit/react-hooks-counter-example?file=index.js
// Как видите, по сравнению с классовым компонентом код намного короче, его легче читать и понимать. Это была одна из причин, по которой команда React создала хуки.
// Помните, хуки можно использовать только внутри функциональных компонентов.
// Хуки — это функции, которые позволяют «подключаться» к функциям React из функциональных компонентов.

//TODO: Lifecycle Methods (Методы жизненного цикла)
// React предоставляет специальные методы жизненного цикла для компонентов класса, которые вызываются при монтировании, обновлении или размонтировании компонентов.
// Mounting (Монтирование) — это процесс, когда компонент отображается на странице.
// Unmounting (Размонтирование) — это процесс удаления компонента со страницы. Метод componentDidMount вызывается при отображении компонента на странице. Например, мы можем использовать componentDidMount в нашем приложении Counter, чтобы установить начальное значение счетчика:
// JSX:
// componentDidMount() {
//   this.setState({counter: 42});
// }
// Попробуйте на StackBlitz
// https://stackblitz.com/edit/react-state-counter-mount-example?file=index.js
// Это установит начальное значение счетчика при рендеринге компонента. componentDidMount обычно используется для заполнения состояния внутри компонента, когда он изначально монтируется в DOM.
// Точно так же метод жизненного цикла componentWillUnmount() вызывается непосредственно перед удалением компонента из DOM. Его можно использовать для освобождения ресурсов, занятых компонентом.

//TODO: componentDidUpdate (компонентСделалОбновление)
// Еще один метод жизненного цикла — componentDidUpdate(), который вызывается при обновлении компонента в DOM. Мы можем, например, предупредить текущее значение счетчика, когда оно увеличивается:
// JSX:
// componentDidUpdate() {
//   alert("Number of clicks: " + this.state.counter);
// }
// Попробуйте на StackBlitz
// https://stackblitz.com/edit/react-state-counter-update-example?file=index.js
// componentDidUpdate() вызывается только при обновлении компонента.
// class Counter extends React.Component {
//   state = {
//     counter: 0,
//   }
//   increment = () => {
//     this.setState({ counter: this.state.counter + 1 })
//   }
//   componentDidUpdate() {
//     alert('Number of clicks: ' + this.state.counter)
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
// Рассмотренные нами методы жизненного цикла доступны только для компонентов класса.
// Однако React предоставляет специальный хук под названием useEffect, чтобы сделать методы жизненного цикла доступными в функциональных компонентах. Он объединяет методы componentDidMount, componentDidUpdate и componentWillUnmount в один. Например, мы можем добиться поведения нашего последнего примера, используя функциональный компонент Counter:
// JSX:
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
// Попробуйте на StackBlitz
// https://stackblitz.com/edit/react-hooks-useeffect-counter-example?file=index.js
// Когда вы запустите код, вы заметите, что диалоговое окно предупреждения появляется также во время первого рендеринга. Это связано с тем, что по умолчанию useEffect запускается как после первого рендера, так и после каждого обновления. Чтобы вызывать метод только тогда, когда что-то меняется, мы можем предоставить ему второй аргумент:
// JSX:
// useEffect(() => {
//   //do something
// }, [count])
// Теперь метод useEffect() будет выполняться только при изменении счетчика. Чтобы имитировать componentWillUnmount, useEffect может возвращать функцию, которая выполняет очистку после него:
// JSX:
// useEffect(() => {
//   // do something

//   return () => {
//     // cleanup
//   }
// })
// Вы можете иметь несколько эффектов в одном компоненте.
// Как и в случае с хуком useState, нам нужно импортировать useEffect, чтобы иметь возможность его использовать: import React, { useState, useEffect } from 'react';

//TODO: Event Handling (Обработка событий)
// Обработка событий в React очень похожа на обработку событий в DOM. Единственное отличие состоит в том, что в именах событий используется синтаксис camelCase, а обработчик событий необходимо передавать в фигурных скобках. Например, для обработки события нажатия на кнопку:
// JSX:
{
  /* <button onClick={handleClick}>
  My Button
</button> */
}
// Щелчок по кнопке вызовет функцию handleClick компонента. Давайте изучим наше приложение Counter:
// JSX:
// function Counter() {
//   const [counter, setCounter] = useState(0);

//   function increment() {
//     setCounter(counter+1);
//   }
//   return <div>
//   <p>{counter}</p>
//   <button onClick={increment}>Increment</button>
//   </div>;
// }
// Попробуйте на StackBlitz.
// https://stackblitz.com/edit/react-hooks-counter-example?file=index.js
// Событие onClick вызывает функцию увеличения, которая увеличивает переменную состояния счетчика.
// Посмотрите то же самое приложение Counter, созданное с использованием компонента класса, здесь:
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
// Одним из распространенных способов взаимодействия пользователей с веб-страницами являются текстовые поля. Мы можем обрабатывать пользовательский ввод в React, используя событие onChange текстового поля. Когда значение текстового поля изменяется, вызывается обработчик события, обновляющий значение поля в состоянии компонента. Таким образом, у вас всегда будет фактическое значение текстового поля в состоянии. Давайте сделаем приложение для конвертации километров в мили. Мы возьмем значение км из текстового поля и рассчитаем значение миль после ввода:
// JSX:
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
// Попробуйте на StackBlitz
// https://stackblitz.com/edit/react-km-miles-converter?file=index.js
// Наш компонент Converter включает текстовое поле, которое вызывает функцию handleChange при изменении его значения. Функция handleChange обновляет состояние текущим значением текстового поля, заставляя компонент повторно отображать и отображать соответствующее значение миль, которое вычисляется с помощью функции преобразования.
// Доступ к значению текстового поля осуществляется через объект e, который представляет событие React. Он передается функции обработчика событий в качестве аргумента и может использоваться для доступа к объекту события.

//TODO: Forms (Формы)
// В предыдущей части мы узнали, как обрабатывать пользовательский ввод в текстовых полях. Текстовые поля обычно являются частью формы. Как и в предыдущем примере, элементы формы React сохраняют свое состояние и обновляют его в зависимости от ввода пользователя. Таким образом, у вас всегда есть данные вашей формы в вашем распоряжении в штате. Чтобы продемонстрировать это, мы создадим форму, которая будет добавлять числа каждый раз при отправке формы и отображать сумму. Наша форма содержит поле ввода и кнопку отправки:
// JSX:
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
// Попробуйте на StackBlitz.
// https://stackblitz.com/edit/react-simple-calc-form-example?file=index.js
// В приведенном выше коде значение ввода контролируется React (мы сохраняем значение в состоянии). Когда форма отправляется с помощью кнопки отправки, вызывается функция handleSubmit, которая обновляет значение суммы в состоянии. Элемент формы ввода, значение которого контролируется React таким образом, называется «controlled component» (управляемым компонентом).
// Обратите внимание на e.preventDefault(); утверждение. Этот оператор предотвращает поведение формы по умолчанию, которая по умолчанию перезагружает страницу при отправке. В JavaScript мы бы использовали return false; для этого, но в React нам нужно вызвать preventDefault().

//TODO: Lists(Списки)
// Веб-приложения обычно содержат повторяющиеся элементы, такие как списки или разделы, где один и тот же элемент DOM повторяется с другим набором данных. Рассмотрим массив строк:
// JSX:
// const arr = ['A', 'B', 'C']
// Нам нужно отобразить элемент списка <li> для каждого элемента в массиве.
// Мы можем определить компонент MyList и передать ему массив в качестве реквизита, используя пользовательский атрибут данных:
// JSX:
{
  /* <MyList data = {arr} /> */
}
// Теперь, когда массив доступен через реквизиты, мы можем написать логику компонента:
// JSX:
// function MyList(props) {
//   const arr = props.data
//   const listItems = arr.map((val) => <li>{val}</li>)
//   return <ul>{listItems}</ul>
// }

// const arr = ['A', 'B', 'C']
// const el = <MyList data={arr} />

// ReactDOM.createRoot(document.getElementById('root')).render(el)
// Попробуйте на StackBlitz.
// https://stackblitz.com/edit/react-simple-list-example?file=index.js
// Мы берем входной массив из входящих реквизитов, перебираем массив с помощью функции map JavaScript и возвращаем элемент <li> для каждого элемента. Полученный массив сохраняется в переменной listItems. Затем компонент возвращает массив listItems внутри тега <ul>. Результат:
// См. Рис: Lists.png
// Этот код приводит к предупреждению о том, что каждому элементу нужен уникальный ключ. Мы рассмотрим ключи в следующей части.

//TODO: Keys (Ключи)
// Каждый элемент в списке должен иметь ключевой атрибут.
// Ключи действуют как уникальные идентификаторы, идентифицирующие каждый элемент.
// Обычно это идентификаторы из ваших данных или автоматически сгенерированные индексы. Например:
// JSX:
const listItems = arr.map((val, index) => <li key={index}>{val}</li>)
// Попробуйте на StackBlitz
// https://stackblitz.com/edit/react-simple-list-keys-example?file=index.js
// Ключи важны, потому что они однозначно идентифицируют элементы, помогая React понять, какие элементы были изменены, добавлены или удалены.

//TODO: Contact Manager (Менеджер контактов)
// Теперь, когда мы знаем, как создавать компоненты, передавать им данные с помощью свойств и управлять их данными с помощью состояния, давайте приступим к созданию нашего диспетчера контактов. Наш менеджер контактов позволит просматривать список контактов и добавлять новые в список. Глядя на макет, имеет смысл иметь два компонента:
// - AddPersonForm: форма с текстовым полем и кнопкой «Add» (Добавить).
// - PeopleList: список контактов.
// Давайте создадим эти компоненты. AddPersonForm использует состояние для управления значением текстового поля:
// JSX:
// function AddPersonForm() {
//   const [ person, setPerson ] = useState("");

//   function handleChange(e) {
//     setPerson(e.target.value);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//     <input type="text"
//     placeholder="Add new contact"
//     onChange={handleChange}
//     value={person} />
//     <button type="submit">Add</button>
//     </form>
//     );
// }
// На данный момент мы просто предотвращаем поведение по умолчанию при отправке формы. PeopleList получает массив, представляющий контакты, и отображает список на странице:
// JSX:
// function PeopleList(props) {
//   const arr = props.data;
//   const listItems = arr.map((val, index) =>
//     <li key={index}>{val}</li>
//   );
//   return <ul>{listItems}</ul>;
// }
// Теперь мы можем отобразить наши компоненты на странице и включить некоторые исходные данные:
// JSX:
// const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

// const el = (
//   <div>
//     <AddPersonForm />
//     <PeopleList data={contacts} />
//   </div>
// );
// ReactDOM.createRoot(document.getElementById('root')).render(el)
// Попробуйте на StackBlitz
// https://stackblitz.com/edit/react-contact-manager-1?file=index.js
// Добавление нового контакта не работает, так как мы еще не построили логику в функции handleSubmit.

//TODO: ЗАДАЧА: Contact Manager (Менеджер контактов)
// Передавая массив сообщений, создаём элементы div для каждого объекта сообщения.
// const posts = arr.map((post) => <div key={post.id}>{post.text}</div>)

//TODO: Sharing State (Состояние обмена)
// Сейчас наша форма AddPersonForm самостоятельно сохраняет свое состояние. Как мы можем добавить новый контакт в наш список людей после отправки формы? Для этого нам нужно разделить состояние между компонентами. Мы можем сделать это, подняв состояние до родительского компонента. Это означает, что родительский компонент будет содержать данные, которые необходимо разделить между компонентами. В нашем случае это список контактов. Давайте создадим родительский компонент с именем ContactManager, который включает AddPersonForm и PeopleList в качестве дочерних компонентов и содержит список контактов в своем состоянии:
// JSX:
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
// Попробуйте на StackBlitz
// https://stackblitz.com/edit/react-contact-manager-2?file=index.js
// Компонент ContactManager получает исходный список контактов с помощью props, сохраняет его в своем состоянии. Затем он передает список контактов своему дочернему компоненту.
// Данные могут передаваться от родителя к дочернему, но не от дочернего к родительскому. React использует то, что называется однонаправленным потоком данных, другими словами, данные текут, так сказать, только вниз.

//TODO: Adding a Contact (Добавление контакта)
// Теперь мы можем создать функцию addPerson() для нашего компонента ContactManager, чтобы добавить нового человека в наш массив состояний контактов:
// JSX:
// function ContactManager(props) {
//   const [contacts, setContacts] = useState(props.data);

//   function addPerson(name) {
//     setContacts([...contacts, name]);
//   }
//  ...
// }
// Но как мы будем вызывать эту функцию из нашего дочернего компонента AddPersonForm, где хранятся данные для нового человека?
// Точно так же, как мы передавали данные с помощью реквизита, React позволяет нам передавать ссылки на функции!
// JSX:
// function ContactManager(props) {
//   const [contacts, setContacts] = useState(props.data);

//   function addPerson(name) {
//     setContacts([...contacts, name]);
//   }

//   return (
//     <div>
//       <AddPersonForm handleSubmit={addPerson} />
//       <PeopleList data={contacts} />
//     </div>
//   );
// }
// Подобно передаче списка контактов в наш компонент PeopleList, мы передали функцию addPerson() в нашу AddPersonForm, используя реквизит с именем handleSubmit. Теперь наш PeopleList может вызвать функцию handleSubmit , полученную при отправке формы, чтобы добавить нового человека в список:
// JSX:
// function AddPersonForm(props) {
//   const [ person, setPerson ] = useState('');

//   function handleChange(e) {
//     setPerson(e.target.value);
//   }

//   function handleSubmit(e) {
//     props.handleSubmit(person);
//     setPerson('');
//     e.preventDefault();
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text"
//         placeholder="Add new contact"
//         onChange={handleChange}
//         value={person} />
//       <button type="submit">Add</button>
//     </form>
//   );
// }
// Попробуйте на StackBlitz
// https://stackblitz.com/edit/react-contact-manager-3?file=index.js
// Мы также очищаем значение текстового поля, используя setPerson('') после добавления нового человека.

//TODO: Summary (Резюме)
// Важным выводом из этого урока является то, что props можно использовать для передачи не только состояния, но и функций, которые могут манипулировать состоянием.
// Таким образом, мы можем хранить состояние приложения в родительском приложении и позволять его дочерним компонентам использовать это состояние и манипулировать им. Теперь, когда наше приложение полностью функционально, мы можем добавить несколько стилей CSS и проверку, чтобы предотвратить создание пустых контактов. Попробуйте на StackBlitz
// https://stackblitz.com/edit/react-contact-manager-4?file=index.js
// Изучите проект, попробуйте модифицировать код и добавить в наши контакты атрибуты, такие как возраст, местонахождение, номер телефона.
// Настройте свой список контактов и поделитесь своим творением в комментариях ниже!

//TODO: State Management (управление состоянием)
// В предыдущем модуле мы создали приложение «Contact Manager» (Диспетчер контактов), которое сохраняет состояние в родительском компоненте и передает его соответствующим дочерним компонентам. В реальном мире с более масштабными приложениями это может стать намного сложнее. Возможно, нам придется передать данные состояния на несколько уровней, чтобы добраться до нужного компонента. Необходимость передавать данные на несколько уровней вложенных компонентов затруднит понимание того, что вызвало изменение состояния, поскольку может существовать несколько потенциальных компонентов, которые могут изменить состояние. Это также приведет к большому количеству избыточного кода, затруднит его поддержку и отладку.

//TODO: Introducing Redux (Представляем Редукс)
// Redux был создан, чтобы сделать управление состоянием предсказуемым, предоставляя единый контейнер состояний и строгие правила изменения состояния. Redux — это небольшая библиотека JavaScript, которую можно использовать с любым интерфейсным фреймворком, таким как React, Angular, jQuery. Он использует шаблон «single source of truth» (единственный источник правды). Короче говоря, единый источник правды просто означает перемещение состояния приложения и всей связанной с ним логики за пределы приложения, что позволяет ЛЮБОМУ компоненту получить доступ к нужным ему данным.
// Наличие единого контейнера состояния упрощает управление состоянием вашего приложения, поскольку вы можете получать доступ и изменять данные из любого компонента, который в них нуждается, без необходимости передавать данные.

//TODO: Store (хранилище)
// Давайте рассмотрим основные концепции Redux. В Redux состояние приложения хранится в виде простого объекта, называемого store. В приложении должен быть только один store. Например, store может выглядеть так:
// JS:
// {
//   contacts: [{
//     name: 'David'
//   }, {
//     name: 'Amy'
//   }],
//   toggle: true
// }
// Вы не можете изменить состояние напрямую. Вместо этого вам нужно отправить действие.

//TODO: Actions & Reducers (Действия и Редукторы)
// action (Действие) — это просто объект JavaScript:
// JS:
// {
//   type: 'ADD_CONTACT',
//   name: 'James'
// }
// Приведенный выше код определяет action (действие) с типом ADD_CONTACT и свойством имени. Действие четко описывает, почему произошло изменение состояния, и может быть отправлено из любого места вашего приложения. На данный момент у нас есть только хранилище, которое включает в себя данные о нашем состоянии и объект, который включает в себя некоторые данные, которые необходимо изменить в состоянии. Итак, как мы на самом деле делаем изменения? Чтобы связать хранилище и действие вместе, нам нужно написать функцию, называемую reducer (редуктором). Он принимает state (состояние) и action (действие) в качестве аргументов и возвращает следующий state (состояние) приложения. Например:
// JS:
// function contactsApp(state, action) {
//   if (action.type === 'ADD_CONTACT') {
//     return [ ...state,  action.name ]
//   } else {
//     return state
//   }
// }
// Приведенный выше код определяет простую функцию-редуктор, которая проверяет action (действие) и возвращает новый state (состояние). Эти концепции в основном являются идеей Redux: вы храните глобальный state (состояние) в хранилище, определяете actions (действия), чтобы описать, что нужно изменить в хранилище, и пишете функции-редьюсеры для обработки этих действий.
// Обратите внимание, мы не коснулись синтаксиса, специфичного для React, все вышеперечисленное — это обычный JavaScript.

//TODO: Core Concepts (Основные концепции)
// Redux можно описать, используя следующие принципы:
// - Single source of truth (Единый источник правды).
// - State is read-only (Состояние доступно только для чтения). Вы можете изменить состояние только путем отправки actions (действий). actions (Действия) — это объекты, содержащие информацию о том, что нужно изменить.
// - Pure reducers (Чистые редукторы). Редюсеры — это функции, которые обрабатывают action (действия) и возвращают следующий state (состояние) приложения. Редьюсеры должны быть чистыми, то есть они не могут изменять состояние, им нужно возвращать новый объект состояния.
// Давайте углубимся в эти концепции и создадим настоящие приложения React, использующие Redux!

//TODO: Actions (Действия)
// Действие можно рассматривать как полезную нагрузку информации, которая отправляет данные в хранилище.
// Действия представлены простым объектом JavaScript и должны иметь свойство type:
// JS:
// {
//   type: 'ADD_CONTACT',
//   name: 'James'
// }
// В приведенном выше примере мы определяем действие с type (типом): ADD_CONTACT и предоставляем ему свойство name в качестве полезной нагрузки.
// Обратите внимание, что для type мы используем все прописные буквы и слова, разделенные символом подчеркивания. Это также называется «snake case». Это общепринятый способ создания action type (типа действия).
// Вы можете использовать любое имя и структуру для других свойств, определяющих данные в действии. Вы можете, например, назвать его payload и предоставить ему объект с данными:
// JS:
// {
//   type: 'ADD_CONTACT',
//   payload: {
//       name: "Jimmy Barnes"
//   }
// }
// Вы должны передавать как можно меньше данных в каждом действии. Это делает действия чистыми и легко читаемыми.

//TODO: Action Creators (Создатели действий)
// Чтобы использовать одно и то же действие с разными пейлоадами, а также создавать повторно используемый код, мы можем создать создателей действий.
// Создатели действий — это простые функции, которые возвращают действия. Например:
// JS:
// function addContact(person) {
//   return {
//     type: 'ADD_CONTACT',
//     payload: person,
//   }
// }
// Функция создателя действия принимает параметр человека и использует его в качестве полезной нагрузки действий.
// Теперь мы можем использовать генератор действий для создания нескольких новых контактов, передав ему соответствующие данные.
// Создатели действий не встроены в библиотеку Redux по умолчанию. Это шаблон, который был реализован для создания кода, отражающего DRY (Don't Repeat Yourself) более СУХОЙ подход (не повторяйтесь).

//TODO: Reducer Function (Функция редуктора)
// Reducers (Редюсеры) — это функции, которые обрабатывают действия.
// Функция принимает текущее состояние и действие в качестве параметров и возвращает новое состояние. Reducer (Редуктор) может обрабатывать несколько действий, поэтому обычно он включает оператор switch для каждого случая действия. Например:
// JS:
// function contactsApp(state, action) {
//   switch (action.type) {
//     case 'ADD_CONTACT':
//       return [...state, action.person]
//     default:
//       return state
//   }
// }
// В приведенном выше коде наша функция редуктора использует оператор switch для обработки соответствующих действий.
// По умолчанию он просто возвращает текущее состояние. Помните, редьюсер должен быть чистой функцией, то есть он не может изменять текущее состояние. Вместо этого он должен возвращать новый объект состояния.
// Добавлен регистр по умолчанию для обработки неизвестных действий.

//TODO: Multiple Reducers (Множественные редукторы)
// Если у вас есть несколько объектов (например, пользователи, продукты, счета-фактуры, заказы и т.д.), обычно рекомендуется разбить их на несколько функций-редукторов, чтобы разделить задачи. Redux дает нам метод, который мы можем использовать, который называется combReducers. Это позволяет нам использовать более одного редьюсера, чтобы при отправке действия оно проходило через все редьюсеры, а не только через один. Это также позволяет нам разделить проблемы нашего состояния хранилища. Например:
// JS:
// const contactsApp = combineReducers({
//   addContacts,
//   doSomething
// })
// Теперь наше приложение для контактов объединяет два редюсера в один.
// Хорошей практикой является предоставление каждому редюсеру только той части состояния, которой он должен управлять. Это называется композицией редуктора и является фундаментальным шаблоном создания приложений Redux.

//TODO: Redux with React (Редукс с React)
// Теперь, когда мы знаем, что такое Redux, мы можем начать создавать приложения React, использующие Redux! Во-первых, нам нужно установить Redux:
// npm install redux
// Это установит библиотеку Redux.
// Однако сам Redux — это всего лишь небольшая библиотека, которую можно использовать с разными технологиями.
// Чтобы использовать его с React, нам нужно установить другую библиотеку под названием react-redux:
// npm install react-redux
// Библиотека react-redux связывает React с Redux, позволяя компонентам React считывать данные из хранилища Redux и отправлять действия в хранилище для обновления данных.

//TODO: Counter App (Приложение счетчика)
// В качестве нашего первого примера давайте создадим приложение Counter, которое мы сделали в предыдущем модуле, используя Redux! Во-первых, нам нужно создать наше действие и соответствующий редуктор.
// https://stackblitz.com/edit/react-hooks-counter-example?file=index.js
// JS:
// function incrementCounter(num) {
//   return {
//     type: 'INCREMENT',
//     num: num,
//   }
// }
// Код выше объявляет функцию создания действия с именем incrementCounter(), которая возвращает действие с типом INCREMENT и соответствующей полезной нагрузкой. Наш редуктор:
// JS:
// const initialState = {
//   count: 0,
// }

// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { count: state.count + action.num }
//     default:
//       return state
//   }
// }
// Приведенный выше код определяет функцию-редуктор, которая возвращает новое состояние на основе заданного действия. Мы увеличиваем переменную состояния count на предоставленное числовое значение. Мы также предоставляем значение по умолчанию для нашего состояния, используя переменную initialState.
// До сих пор ничего особенного, мы просто создали две простые функции, одна из которых возвращает наш объект действия, а другая возвращает новое состояние с увеличенным счетчиком.

//TODO: Creating the Store (Создание хранилища)
// Чтобы создать хранилище, мы вызываем функцию createStore(), которая принимает редюсер в качестве параметра:
// JSX:
// const store = createStore(reducer)
// Но как передать хранилище нашим компонентам?
// Это достигается с помощью специального элемента <Provider>. Это делает хранилище доступным для любого вложенного дочернего компонента. Итак, для нашего счетчика у нас будет следующее:
// JSX:
// const el = (
//   <Provider store={store}>
//     <Counter />
//   </Provider>
// )
// Provider (Поставщик) принимает хранилище как атрибут и делает его доступным для своего дочернего компонента.
// Нам нужно импортировать { createStore } и { Provider }, используя следующий синтаксис:
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'

//TODO: Создаём хранилище и передаём его нашему компоненту Post
// const store = createStore(reducer)
// const el = (
//   <Provider store={store}>
//     <Post />
//   </Provider>
// )

// ReactDOM.createRoot(document.getElementById('root')).render(el)

//TODO: Connecting to the Store (Подключение к хранилищу)
// На данный момент мы создали наше действие, редуктор, хранилище и сделали его доступным для нашего компонента Counter с помощью элемента Provider. Чтобы подключить наш компонент к хранилищу, нам нужно вызвать функцию connect(). Функция connect() возвращает новый компонент, который упаковывает компонент, который вы ей передали, и подключает его к хранилищу, используя свои специальные функции параметров.
// JS:
// function connect(mapStateToProps?, mapDispatchToProps?)
// connect() принимает два необязательных параметра: mapStateToProps Эта функция вызывается каждый раз при изменении состояния хранилища. Он получает состояние в качестве параметра и возвращает состояние для компонента. Например, для нашего счетчика нам нужно вернуть переменную состояния счетчика:
// JSX:
// function mapStateToProps(state) {
//   return {
//     count: state.count
//   }
// }
// Теперь наш компонент может получить доступ к переменной count, используя свои Props (реквизиты)! Как указано в названии функции, она сопоставляет состояние реквизитам. mapDispatchToProps Как вы могли догадаться из названия, этот параметр используется для сопоставления функций отправки с реквизитами. Это может быть простой объект, определяющий функцию, которую нужно отобразить:
// JSX:
// const mapDispatchToProps = {
//   incrementCounter
// }
// Это может показаться немного запутанным, но это очень просто: mapStateToProps просто возвращает переменные состояния в качестве реквизита для нашего компонента, в то время как mapDispatchToProps позволяет определить, как мы отправляем действия, и делаем функции диспетчеризации доступными в качестве реквизита. Оба являются необязательными, так как, например, вашему компоненту может потребоваться только чтение из хранилища.
// mapDispatchToProps также можно определить как функцию. Взгляните на официальную документацию для более подробной информации.
// https://react-redux.js.org/using-react-redux/connect-mapdispatch
// Обратите внимание, что нам нужно импортировать функцию подключения:
// import { connect } from 'react-redux'

//TODO: Создаём корректную функцию mapStateToProps, которая возвращает массив food для нашего компонента.
function mapStateToProps(state) {
  return
  {
    food: state.food
  }
}

//TODO: Accessing The Store (Доступ к хранилищу)
// Внутри нашего компонента мы просто обращаемся к свойствам хранилища, используя реквизиты.
// JSX:
// function Counter(props) {
//   function handleClick() {
//     props.incrementCounter(1);
//   }
//     return <div>
//     <p>{props.count}</p>
//     <button onClick={handleClick}>Increment</button>
//     </div>;
// }
// Обратите внимание, что мы передаем 1 в качестве аргумента для нашего incrementCounter(), увеличивая наш счетчик на 1. Мы можем изменить значение на любое другое число, и наш счетчик будет вести себя так, как ожидалось, потому что мы обработали параметр приращения в нашем редюсере. Теперь осталось только вызвать функцию connect() для нашего компонента Counter и отобразить его на странице:
// JSX:
// const Counter = connect(mapStateToProps, mapDispatchToProps)(Counter);

// const el = <Provider store={store}>
//           <Counter/>
//         </Provider>;
// Попробуйте на StackBlitz
// https://stackblitz.com/edit/react-redux-counter-example-1?file=index.js
// Помните, что connect() возвращает новый компонент, который является оберткой для полученного компонента.
// Теперь у нас есть полнофункциональное приложение React+Redux!
// Это может показаться слишком большим количеством кода для простого приложения-счетчика, однако эта архитектура отлично подходит для создания крупномасштабных приложений, которые используют множество компонентов, несколько уровней вложенности и управляют большим количеством данных.

//TODO: Project Structure (Структура проекта)
// В нашем примере со счетчиком мы написали весь код в одном исходном файле.
// Обычно веб-приложения содержат несколько компонентов, редюсеров и действий. Чтобы сделать наш проект более управляемым, мы можем использовать отдельные исходные файлы (и папки) для компонентов, редукторов и действий. Например, мы можем переместить наш компонент Counter и функцию создания действия в отдельный файл Counter.js. Чтобы использовать компонент Counter в нашем index.js, нам нужно сначала его экспортировать:
// JS:
// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
// Обратите внимание, мы экспортируем подключенный компонент. Теперь мы можем импортировать компонент в index.js:
// JS:
// import Counter from './Counter';
// Попробуйте на StackBlitz
// https://stackblitz.com/edit/react-redux-counter-example-1?file=index.js
// Мы используем систему модулей ES6, которая позволяет использовать экспорт и импорт модулей.

//TODO: Contact Manager (Менеджер контактов)
// Давайте изменим наше приложение Contact Manager, чтобы использовать Redux! 
// https://stackblitz.com/edit/react-contact-manager-4?file=index.js
// Мы создали отдельную папку с именем components для наших компонентов. Мы используем Redux для хранения списка контактов. Действие ADD_PERSON используется для добавления нового человека в список. Ознакомьтесь с полным кодом проекта на StackBlitz! Обратите внимание, что мы управляем состоянием новой контактной формы в React, а не в Redux, потому что данные используются только компонентом AddPersonForm для временного хранения входного значения. Вы можете переместить его в Redux, если хотите; мы просто использовали состояние локального компонента для простоты.
// https://stackblitz.com/edit/react-redux-contact-manager-final?file=index.js
// Поэкспериментируйте с кодом, настройте свой диспетчер контактов, добавив новые действия и новые компоненты!
// Поделитесь своими творениями в разделе комментариев ниже.
