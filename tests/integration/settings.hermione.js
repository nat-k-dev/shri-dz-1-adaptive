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
        return this.browser
            .url('/settings')
            .waitForVisible('#repoName')
            .click('#repoName')
            .keys('https://github.com/appalse/sportmaster-task.git')
            .click('#buildCommand')
            .keys('npm run build')
            .click('#mainBranch')
            .keys('master')
            .submitForm('.Form')
    })
});