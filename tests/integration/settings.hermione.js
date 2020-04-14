const assert = require('assert');
var chai = require('chai');
var expect = chai.expect;


const URL_SETTINGS = '/settings';

const TEST_REPO_NAME = 'https://github.com/appalse/sportmaster-task.git';

const REPOSITORY_NAME_SELECTOR = '#repoName';
const MAIN_BRANCH_SELECTOR = '#mainBranch';
const BUILD_COMMAND_SELECTOR = '#buildCommand';
const PERIOD_SELECTOR = '#period';

const elementExists = (browser, selector, errorMsg) => {
    return browser
            .url(URL_SETTINGS)
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
        return elementExists(this.browser, REPOSITORY_NAME_SELECTOR, 'Поле для ввода репозитория не появилось');
    })
    it('Поле для ввода ветки должно появиться на странице', function() {
        return elementExists(this.browser, MAIN_BRANCH_SELECTOR, 'Поле для ввода репозитория не появилось');
    })
    it('Поле для ввода команды должно появиться на странице', function() {
        return elementExists(this.browser, BUILD_COMMAND_SELECTOR, 'Поле для ввода команды не появилось');
    })
    it('Поле для ввода периода должно появиться на странице', function() {
        return elementExists(this.browser, PERIOD_SELECTOR, 'Поле для ввода периода не появилось');
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
            .url(URL_SETTINGS)
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
    it('Нельзя ввести опасную команду', function() {
        return this.browser
            .url(URL_SETTINGS)
            .waitForVisible(REPOSITORY_NAME_SELECTOR)
            .click(REPOSITORY_NAME_SELECTOR)
            .keys(TEST_REPO_NAME)
            .click(BUILD_COMMAND_SELECTOR)
            .keys('rm -rf')
            .submitForm('.Form')
            .alertText()
            .then((alert) => {
                console.log('alert = ', alert);
                expect(alert).to.be.a('string').that.is.equal("Invalid build command");
            })
            .alertAccept()
    })
});