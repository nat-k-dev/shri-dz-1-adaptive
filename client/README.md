# Домашнее задание. React.

В консоли зайдите в папку client. Установите зависимости
```
npm install
```

Запустите реакт через
```
npm start
```

Откроется страница в браузере по адресу localhost:3000.

Доступны страницы:
* localhost:3000
* localhost:3000/settings
* localhost:3000/build_history
* localhost:3000/build_details

TODO (не сделано):
* кнопка button не выделена в отдельный компонент
* scss используется, но код написан в стиле css
* используется глобальное подключение стилей, нет mixin'ов
* не подключен redux и т.д.
* нет части запросов к Node.js-серверу из предыдущей домашки, соответственно некоторые данные статичны, захардкожены в компонентах (в build history)
* нет клиентской валидации поля с продолжительностью на форме settings
* кнопки не блокируются во время клонирования репы
* нет всплывающего окна для ввода хэша коммита
* нет раскраски логов 

PS: я болела пару дней, и в итоге решила высыпаться, на домашки остается по часу в день. Если что, ставьте минусы по всем пунктам дз. Сервер с реактом и дальше буду делать, но в медленном темпе, потихоньку. Здровья всем!

Мои вопросы:
1. Когда открываю домашнюю страницу, то функциональный компонент HomePage вызывается много раз (пишу в консоль сообщение). Почти 8 раз. У меня там вызывается бэкенд-метод api/settings (проверяем, заданы ли настройки на сервере), через хуки useState устанавливается состояние. Почему так много раз?
2. Когда вызываем метод бэкенда через fetch и сервер возвращает 500 Internal Server Error, то сам метод fetch пишет в консоль браузера сообщение красным цветом GET ... Internal Server Error. Я далее отлавливаю все ошибки, но как убрать это сообщение от fetch?



Стандартная простыня, сгенерированная create-react-app:

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
