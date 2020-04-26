import del  from 'del';
import util from 'util';
import child_process_lib from 'child_process';
const exec = util.promisify(child_process_lib.exec);

const repoFolder = 'repo';

export async function gitClone(repoName: string, mainBranch: string) : Promise<void> {
    const deletedPaths = await del([repoFolder]);
    console.log('deleted paths: ', deletedPaths);
    const { stdout, stderr } = await exec('git clone ' + repoName + ' ' + repoFolder);
    console.log('git clone stdout:', stdout);
    console.log('git clone stderr:', stderr);
    await exec('cd ' + repoFolder + ' && git checkout ' + mainBranch);
    console.log('Repository cloning is finished. Checkout branch');
}

export interface CommitInfo {
    commitMessage: string,
    authorName: string
}

export async function findCommit(commitHash: string) : Promise<CommitInfo> {
    const { stdout, stderr } = await exec('cd ' + repoFolder + ' && git log --format="%h|%an|%s. %D"');
    if (stderr.length > 0) {
        throw {message: stderr, status: 500};
    }
    let msg = '';
    let author = '';
    stdout.split('\n').forEach((line: string) => {
        const lineItems = line.split('|');
        if (lineItems.includes(commitHash)) {
            msg = lineItems[2];
            author = lineItems[1]
        }
    });
    
    if (author.length === 0) {
        throw {message: 'Commit with hash ' + commitHash + ' was not found.', status: 400};
    }
    return {
        commitMessage: msg, 
        authorName: author
    };
}
