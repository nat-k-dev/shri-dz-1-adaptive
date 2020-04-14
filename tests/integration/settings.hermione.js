const assert = require('assert');

const elementExists = (browser, selector, errorMsg) => {
    return browser
            .url('/settings')
            .waitForVisible(selector)
            .isExisting(selector)
            .then((exists) => {
                assert.ok(exists, errorMsg);
            })
}

describe('Страница settings.', () => {
    it('Форма для ввода настроек должна появиться на странице', function() {
        return elementExists(this.browser, '.Form', 'Форма для ввода настроек не появилась');
    })
    it('Header должен появиться на странице', function() {
        return elementExists(this.browser, '.Header', 'Header не появился');
    })
    it('Footer должен появиться на странице', function() {
        return elementExists(this.browser, '.Footer', 'Footer не появился');
    })
    it('Поле для ввода репозитория должно появиться на странице', function() {
        return elementExists(this.browser, '#repoName', 'Поле для ввода репозитория не появилось');
    })
    it('Поле для ввода ветки должно появиться на странице', function() {
        return elementExists(this.browser, '#mainBranch', 'Поле для ввода репозитория не появилось');
    })
    it('Поле для ввода команды должно появиться на странице', function() {
        return elementExists(this.browser, '#buildCommand', 'Поле для ввода команды не появилось');
    })
    it('Поле для ввода периода должно появиться на странице', function() {
        return elementExists(this.browser, '#period', 'Поле для ввода периода не появилось');
    })
    it('Кнопка Save должна появиться на странице', function() {
        return elementExists(this.browser, 'button[type="submit"]', 'Кнопка Save не появилось');
    })
    it('Кнопка Cancel должна появиться на странице', function() {
        return elementExists(this.browser, 'button[type="button"]', 'Кнопка Cancel не появилось');
    })
    /*it('обновляются после сохранения', function() {
        const repoName = 'https://github.com/appalse/sportmaster-task.git';
        return this.browser
            .url('/settings')
            .waitForVisible('#repoName')
            .click('#repoName')
            .keys(repoName)
            .click('#buildCommand')
            .keys('npm run build')
            .click('#mainBranch')
            .keys('master')
            .submitForm('.Form')
            .waitForEnabled('.Button')
            .url('/')
            .url('/settings')
            .waitForVisible('#repoName')
            .getText('#repoName')
            .then((value) => {
                console.log('VALUE = ', value);
                assert.strictEqual(value, repoName, 'Название репозитория не обновилось');
            })
    })*/
});