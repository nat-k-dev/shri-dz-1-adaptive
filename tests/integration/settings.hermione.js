const assert = require('assert');

describe('Настройки', () => {
    it('должны появиться на странице', function() {
        return this.browser
            .url('/settings')
            .waitForVisible('.Form')
            .isExisting('.Form')
            .then((exists) => {
                assert.ok(exists, 'Форма для ввода настроек не появилась');
            })
    })
    it('обновляются после сохранения', function() {
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
    })
});