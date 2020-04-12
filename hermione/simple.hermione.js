const assert = require('assert');

describe('Список билдов', () => {
    it('должен появиться на странице', function() {
        return this.browser
            .url('/')
            .waitForVisible('.BuildList')
            .isExisting('.BuildCard')
            .then((exists) => {
                assert.ok(exists, 'Список билдов не появился');
            })
    })
});