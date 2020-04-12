const del = require('del');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const repoFolder = 'repo';

async function gitClone(repoName, mainBranch) {
    const deletedPaths = await del([repoFolder]);
    console.log('deleted paths: ', deletedPaths);
    const { stdout, stderr } = await exec('git clone ' + repoName + ' ' + repoFolder);
    console.log('git clone stdout:', stdout);
    console.log('git clone stderr:', stderr);
    await exec('cd ' + repoFolder + ' && git checkout ' + mainBranch);
    console.log('Repository cloning is finished. Checkout branch');
}

async function findCommit(commitHash) {
    const { stdout, stderr } = await exec('cd ' + repoFolder + ' && git log --format="%h|%an|%s. %D"');
    if (stderr.length > 0) {
        throw {message: stderr, status: 500};
    }
    let msg = '';
    let author = '';
    stdout.split('\n').forEach(line => {
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

module.exports = {
    gitClone,
    findCommit
}
