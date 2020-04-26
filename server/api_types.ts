
export enum BuildStatus {Waiting, InProgress, Success, Fail, Canceled}

export interface BuildModel {
    id:	string,
    configurationId: string,
    buildNumber: number,
    commitMessage:	string,
    commitHash:	string,
    branchName:	string,
    authorName:	string,
    status:	BuildStatus,
    start: string | null,
    duration: number | null
}

export interface BuildModelArrayApiResponse {
    data: BuildModel[]
}

export interface BuildModelApiResponse {
    data: BuildModel
}

export interface QueueBuildInput {
    commitMessage: string,
    commitHash:	string,
    branchName:	string,
    authorName:	string
}

export interface BuildRequestResultModel {
    id:	string,
    buildNumber: number,
    status:	BuildStatus
}

export interface BuildRequestResultModelApiResponse{
    data: {
        id: string,
        buildNumber: number,
        status: BuildStatus
    }
}

export interface StartBuildInput {
    buildId: string,
    dateTime: string
}

export interface FinishBuildInput {
    buildId: string,
    duration: number,
    success: boolean,
    buildLog: string
}

export interface CancelBuildInput {
    buildId: string
}

export interface ConfigurationModel {
    id: string,
    repoName: string,
    buildCommand: string,
    mainBranch: string,
    period:number
}

export interface ConfigurationModelApiResponse{
    data: {
        id: string,
        repoName: string,
        buildCommand: string,
        mainBranch: string,
        period:number
    }
}

export interface ConfigurationInput{
    repoName: string,
    buildCommand: string,
    mainBranch: string,
    period:number
}