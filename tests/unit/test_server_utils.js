var {isStr, isNum, invalidBuildCommand, getErrorData} = require('./../../server/server_utils');
var chai = require('chai');
var expect = chai.expect;

describe('Серверные утилиты', () => {
    describe('Функция isStr', () => {
        it('возвращает true на строке', () => {
            const input = "some string";
            const result = isStr(input);
            expect(result).to.be.true;
        })
        it('возвращает false на числе', () => {
            const input = 0;
            const result = isStr(input);
            expect(result).to.be.false;
        })
        it('возвращает false на boolean', () => {
            const input = false;
            const result = isStr(input);
            expect(result).to.be.false;
        })
    }) /* describe: isStr */
        
    describe('Функция isNum', () => {
        it('возвращает true на числе', () => {
            const input = 123;
            const result = isNum(input);
            expect(result).to.be.true;
        })
        it('возвращает false на строке', () => {
            const input = '123';
            const result = isNum(input);
            expect(result).to.be.false;
        })
        it('возвращает false на boolean', () => {
            const input = false;
            const result = isNum(input);
            expect(result).to.be.false;
        })
    }) /* describe: isNum */

    describe('Функция invalidBuildCommand', () => {
        it('возвращает false на npm run', () => {
            const input = "npm run";
            const result = invalidBuildCommand(input);
            expect(result).to.be.false;
        })
        it('возвращает true на rm -rf', () => {
            const input = "rm -rf";
            const result = invalidBuildCommand(input);
            expect(result).to.be.true;
        })
        it('возвращает true на cp', () => {
            const input = "  cp .";
            const result = invalidBuildCommand(input);
            expect(result).to.be.true;
        })
    }) /* describe: invalidBuildCommand */

    describe('Функция getErrorData', () => {
        it('возвращает объект {data: "message", status: 300} на таком же входном объекте', () => {
            const input = {data: "message", status: 300};
            const result = getErrorData(input);
            expect(result).to.be.an('object').that.is.deep.equal({
                data: "message",
                status: 300
            });
        })
        it('возвращает объект {data: "message", status: 400} на response', () => {
            const input = { response: {data: {field: "message"}, status: 400}};
            const result = getErrorData(input);
            expect(result).to.be.an('object').that.is.deep.equal({
                data: "{\"field\":\"message\"}",
                status: 400
            });
        })
        it('возвращает объект {data: undefined, status: 500} на undefined', () => {
            const input = undefined;
            const result = getErrorData(input);
            expect(result).to.be.an('object').that.is.deep.equal({
                data: undefined,
                status: 500
            });
        })
    }) /* describe: getErrorData */
}) 