var {convertDateTime, convertDuration} = require('./../../client/src/utils');
var chai = require('chai');
var expect = chai.expect;

describe('Конвертация даты и времени', () => {
    describe('Функция convertDateTime', () => {
        it('возвращает 12 апр 18:52 на строке "2020-04-12T15:52:46.924Z"', () => {
            const input = "2020-04-12T15:52:46.924Z";
            const result = convertDateTime(input);
            expect(result).to.be.an('object').that.is.deep.equal({
                date: "12 апр",
                time: "18:52"
            });
        })
        it('возвращает 12 апр 15:52 на строке "2020-04-12T15:52:46"', () => {
            const input = "2020-04-12T15:52:46";
            const result = convertDateTime(input);
            expect(result).to.be.an('object').that.is.deep.equal({
                date: "12 апр",
                time: "15:52"
            });
        })
        it('возвращает прочерки на строке ""', () => {
            const input = "";
            const result = convertDateTime(input);
            expect(result).to.be.an('object').that.is.deep.equal({
                date: "-",
                time: "-"
            });
        })
        
    }) /* describe: convertDateTime */
        
    describe('Функция convertDuration', () => {
        it('возвращает "0 ч 1 мин" на 60000 ms', () => {
            const input = 60000;
            const result = convertDuration(input);
            expect(result).to.be.a('string').that.is.equal("0 ч 1 мин");
        })
        it('возвращает "1 ч 0 мин" на 3600000 ms', () => {
            const input = 3600000;
            const result = convertDuration(input);
            expect(result).to.be.a('string').that.is.equal("1 ч 0 мин");
        })
        it('возвращает "0 ч 0 мин" на 0 ms', () => {
            const input = 0;
            const result = convertDuration(input);
            expect(result).to.be.a('string').that.is.equal("0 ч 0 мин");
        })
    }) /* describe: convertDuration */
}) 