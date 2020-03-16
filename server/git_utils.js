//const { spawn } = require("child_process");
const del = require('del');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

const repoFolder = 'repo';

async function GitClone(repoName, mainBranch) {
    try {
        const deletedPaths = await del([repoFolder]);
        console.log('deleted paths: ', deletedPaths);

        
        //const command = 'rm repo -r -f & mkdir repo & git clone ' + repoName + ' repo';
        const { err, stdout, stderr } = await exec('git clone ' + repoName + ' ' + repoFolder);
        console.log('stdout:', stdout);
        console.error('stderr:', stderr);

        await exec('cd ' + repoFolder + ' && git checkout ' + mainBranch);
        console.log('Repository cloning is finished');
    } catch(e) {
        console.log(e); 
    }

}

function FindCommit(commitHash) {
    // const { commitMessage, branchName, authorName } = FindCommit(commitHash);
}

module.exports = {
    GitClone,
    FindCommit
}