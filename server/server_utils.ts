import Axios, {AxiosError} from 'axios';

export function isStr(str: string | number | boolean | undefined | object) : boolean {
    return typeof str === "string";
}

export function isNum(n: string | number | boolean | undefined | object) : boolean {
    return typeof n === "number";
}

export function invalidBuildCommand(buildCommand: string) : boolean {
    const cmd = buildCommand.trim();
    const invalidCommandsList = [
        'rm',
        'unlink',
        'mv',
        'cp'
    ];
    console.log('test f = ', invalidCommandsList.some(invalidCommand => cmd.startsWith(invalidCommand)));
    return invalidCommandsList.some(invalidCommand => cmd.startsWith(invalidCommand));
}

export interface ServerError {
    status: number,
    data: string
}

export interface ResponseError {
    status?: number,
    data?: string,    
    response?: ServerError
}

export type GeneralError = ResponseError | undefined;

export function getErrorData(e: GeneralError) {
    if (e === undefined) {
        return {
            status: 500,
            data: 'undefined'
        }
    }
    if (e.response && e.response.status && e.response.data) {
        const axiosError = e as AxiosError<ServerError>;
        return {
            status: e.response.status,
            data: JSON.stringify(e.response.data)
        }
    }
    return {
        status: e.status ? e.status : 500,
        data: e.data ? e.data : 'undefined error type'
    };
}
