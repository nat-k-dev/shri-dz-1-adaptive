import React from 'react';
import './BuildLog.scss';

export default function BuildLog({logText}) {
    return (
        <div className="BuildLog font_size_xxs">
            <pre>{logText}</pre>
{/*}            <pre>{`Build 'Stack Exchange Network :: New York :: SENetwork - Dev' #21007
                Started 'Wed Apr 27 23:54:04 UTC 2016' on 'NY-WEB05' by 'Git'
                Finished 'Wed Apr 27 23:56:21 UTC 2016' with status 'NORMAL Success'
                TeamCity URL https://build/viewLog.html?buildId=477326&buildTypeId=StackExchangeNetwork_NewYork_SENetworkDev 
                TeamCity server version is 9.1.5 (build 37377)
                
                [23:54:03]i: TeamCity server version is 9.1.5 (build 37377)
                [23:54:03]W: bt4 (2m:17s)
                [23:54:03] : projectId:project55 projectExternalId:StackExchangeNetwork_NewYork buildTypeId:bt4 buildTypeExternalId:StackExchangeNetwork_NewYork_SENetworkDev
                [23:54:03] : Collecting changes in 2 VCS roots (1s)
                [23:54:03] :	 [Collecting changes in 2 VCS roots] VCS Root details
                [23:54:03] :		 [VCS Root details] "Gitlab - TeamCity Build Configs" instance id=968, parent internal id=158, parent id=GitlabTeamCityBuildConfigs, description: "git@git:shared/teamcity-build-configs.git#refs/heads/master"
                [23:54:03] :		 [VCS Root details] "Gitlab - Stack Exchange Network" instance id=939, parent internal id=99, parent id=GitlabStackExchangeNetwork, description: "git@git:core/stackoverflow.git#refs/heads/master"
                [23:54:04]i:	 [Collecting changes in 2 VCS roots] Waiting for completion of current operations for the VCS root 'Gitlab - TeamCity Build Configs'
                [23:54:04]i:	 [Collecting changes in 2 VCS roots] Waiting for completion of current operations for the VCS root 'Gitlab - Stack Exchange Network'
                [23:54:04]i:	 [Collecting changes in 2 VCS roots] Detecting changes in VCS root 'Gitlab - Stack Exchange Network' (used in 'Release', 'SENetwork - Dev' and 36 other configurations)
                [23:54:04]i:	 [Collecting changes in 2 VCS roots] Will collect changes for 'Gitlab - Stack Exchange Network' starting from revision 52173e6ad55dd55da435aaf7dd3343894afb3f1a
                [23:54:04]i:	 [Collecting changes in 2 VCS roots] Detecting changes in VCS root 'Gitlab - TeamCity Build Configs' (used in 'ADTools - Dev', 'ADTools - Dev' and 257 other configurations)
                [23:54:04]i:	 [Collecting changes in 2 VCS roots] Will collect changes for 'Gitlab - TeamCity Build Configs' starting from revision 35ddc3e78bcae9b7bbb71638dad519abd7d12249
                [23:54:04]i: Waiting for the agent to start the build
                [23:54:04]i: Agent time zone: UTC
                [23:54:04]i: Agent is running under JRE: 1.7.0_72-b14
                [23:54:05]W: Swabra (2s)
                [23:54:05] :	 [Swabra] Scanning directory C:\\TeamCity\\buildAgent\\work\\6daa56c20f8558cf for newly created, modified and deleted files comparing with snapshot 62e917d.snapshot, paths to monitor are C:\\TeamCity\\buildAgent\\work\\6daa56c20f8558cf, -:C:\\TeamCity\\buildAgent\\work\\6daa56c20f8558cf\\**\\.git and 7 more paths
                [23:54:07]W:	 [Swabra] Detected 18509 unchanged, 1434 newly created (1434 of them deleted), 70 modified, 0 deleted files and directories
                [23:54:07] :	 [Swabra] Checkout directory contains modified files or some files were deleted. Need a clean checkout directory snapshot - forcing clean checkout
                [23:54:07] : Clearing temporary directory: C:\\TeamCity\\buildAgent\\temp\\buildTmp
                [23:54:07] : Publishing internal artifacts (1s)
                [23:54:08] :	 [Publishing internal artifacts] Publishing 1 file using [ArtifactsCachePublisher]
                [23:54:08] :	 [Publishing internal artifacts] Publishing 1 file using [WebPublisher]
                [23:54:07] : Checkout directory: C:\\TeamCity\\buildAgent\\work\\6daa56c20f8558cf
                [23:54:07] : Updating sources: agent side checkout (13s)
                [23:54:07] :	 [Updating sources] Will perform clean checkout. Reason: Checkout directory is empty or doesn't exist (running for 2m:14s)
                [23:54:07] :	 [Updating sources] Cleaning C:\\TeamCity\\buildAgent\\work\\6daa56c20f8558cf
                [23:54:09] :	 [Updating sources] Using vcs information from server. Reason: no revision information for build configuration "SENetwork - Dev" and checkout directory C:\\TeamCity\\buildAgent\\work\\6daa56c20f8558cf on agent
                [23:54:09] :	 [Updating sources] VCS Root: Gitlab - Stack Exchange Network (11s)
                [23:54:09] :		 [VCS Root: Gitlab - Stack Exchange Network] revision: 52173e6ad55dd55da435aaf7dd3343894afb3f1a
                [23:54:09] :		 [VCS Root: Gitlab - Stack Exchange Network] [C:\\TeamCity\\buildAgent\\system\\git\\git-899F01F4.git]: "C:\\Program Files (x86)\\Git\\bin\\git.exe" show-ref
                [23:54:09] :		 [VCS Root: Gitlab - Stack Exchange Network] [C:\\TeamCity\\buildAgent\\system\\git\\git-899F01F4.git]: "C:\\Program Files (x86)\\Git\\bin\\git.exe" ls-remote origin
                [23:54:10] :		 [VCS Root: Gitlab - Stack Exchange Network] [C:\\TeamCity\\buildAgent\\system\\git\\git-899F01F4.git]: "C:\\Program Files (x86)\\Git\\bin\\git.exe" show-ref refs/heads/master
                [23:54:10] :		 [VCS Root: Gitlab - Stack Exchange Network] [C:\\TeamCity\\buildAgent\\system\\git\\git-899F01F4.git]: "C:\\Program Files (x86)\\Git\\bin\\git.exe" show-ref refs/heads/master
                [23:54:10] :		 [VCS Root: Gitlab - Stack Exchange Network] [C:\\TeamCity\\buildAgent\\system\\git\\git-899F01F4.git]: "C:\\Program Files (x86)\\Git\\bin\\git.exe" fetch --progress origin +refs/heads/master:refs/heads/master (1s)
                [23:54:12] :			 [[C:\\TeamCity\\buildAgent\\system\\git\\git-899F01F4.git]: "C:\\Program Files (x86)\\Git\\bin\\git.exe" fetch --progress origin +refs/heads/master:refs/heads/master] remote: Counting objects: 6, done. [K
                [23:54:12] :			 [[C:\\TeamCity\\buildAgent\\system\\git\\git-899F01F4.git]: "C:\\Program Files (x86)\\Git\\bin\\git.exe" fetch --progress origin +refs/heads/master:refs/heads/master] remote: Compressing objects:  16% (1/6)    [K
                [23:54:12] :			 [[C:\\TeamCity\\buildAgent\\system\\git\\git-899F01F4.git]: "C:\\Program Files (x86)\\Git\\bin\\git.exe" fetch --progress origin +refs/heads/master:refs/heads/master] remote: Compressing objects:  33% (2/6)    [K
                [23:54:12] :			 [[C:\\TeamCity\\buildAgent\\system\\git\\git-899F01F4.git]: "C:\\Program Files (x86)\\Git\\bin\\git.exe" fetch --progress origin +refs/heads/master:refs/heads/master] remote: Compressing objects:  50% (3/6)    [K
                [23:54:12] :			 [[C:\\TeamCity\\buildAgent\\system\\git\\git-899F01F4.git]: "C:\\Program Files (x86)\\Git\\bin\\git.exe" fetch --progress origin +refs/heads/master:refs/heads/master] remote: Compressing objects:  66% (4/6)    [K
                [23:54:12] :			 [[C:\\TeamCity\\buildAgent\\system\\git\\git-899F01F4.git]: "C:\\Program Files (x86)\\Git\\bin\\git.exe" fetch --progress origin +refs/heads/master:refs/heads/master] remote: Compressing objects:  83% (5/6)    [K
                [23:54:12] :			 [[C:\\TeamCity\\buildAgent\\system\\git\\git-899F01F4.git]: "C:\\Program Files (x86)\\Git\\bin\\git.exe" fetch --progress origin +refs/heads/master:refs/heads/master] remote: Compressing objects: 100% (6/6)    [K
                [23:54:12] :			 [[C:\\TeamCity\\buildAgent\\system\\git\\git-899F01F4.git]: "C:\\Program Files (x86)\\Git\\bin\\git.exe" fetch --progress origin +refs/heads/master:refs/heads/master] remote: Compressing objects: 100% (6/6), done. [K
                [23:54:12] :			 [[C:\\TeamCity\\buildAgent\\system\\git\\git-899F01F4.git]: "C:\\Program Files (x86)\\Git\\bin\\git.exe" fetch --progress origin +refs/heads/master:refs/heads/master] remote: Total 6 (delta 5), reused 0 (delta 0) [K
                [23:54:12] :			 [[C:\\TeamCity\\buildAgent\\system\\git\\git-899F01F4.git]: "C:\\Program Files (x86)\\Git\\bin\\git.exe" fetch --progress origin +refs/heads/master:refs/heads/master] From git:core/stackoverflow
                [23:54:12] :			 [[C:\\TeamCity\\buildAgent\\system\\git\\git-899F01F4.git]: "C:\\Program Files (x86)\\Git\\bin\\git.exe" fetch --progress origin +refs/heads/master:refs/heads/master]    e4385c6..52173e6  master     -> master
                [23:54:12] :			 [[C:\\TeamCity\\buildAgent\\system\\git\\git-899F01F4.git]: "C:\\Program Files (x86)\\Git\\bin\\git.exe" fetch --progress origin +refs/heads/master:refs/heads/master]    e4385c6..52173e6  master     -> origin/master
                [23:54:12] :		 [VCS Root: Gitlab - Stack Exchange Network] [C:\\TeamCity\\buildAgent\\system\\git\\git-899F01F4.git]: "C:\\Program Files (x86)\\Git\\bin\\git.exe" log -n1 --pretty=format:%H%x20%s 52173e6ad55dd55da435aaf7dd3343894afb3f1a --
                [23:54:12] :		 [VCS Root: Gitlab - Stack Exchange Network] Cleaning C:\\TeamCity\\buildAgent\\work\\6daa56c20f8558cf
                [23:54:12] :		 [VCS Root: Gitlab - Stack Exchange Network] The .git directory is missing in 'C:\\TeamCity\\buildAgent\\work\\6daa56c20f8558cf'. Running 'git init'...
                [23:54:12] :		 [VCS Root: Gitlab - Stack Exchange Network] [C:\\TeamCity\\buildAgent\\work\\6daa56c20f8558cf]: "C:\\Program Files (x86)\\Git\\bin\\git.exe" init
                [23:54:12] :		 [VCS Root: Gitlab - Stack Exchange Network] [C:\\TeamCity\\buildAgent\\work\\6daa56c20f8558cf]: "C:\\Program Files (x86)\\Git\\bin\\git.exe" remote add origin git@git:core/stackoverflow.git
                [23:54:12] :		 [VCS Root: Gitlab - Stack Exchange Network] [C:\\TeamCity\\buildAgent\\system\\git\\git-899F01F4.git]: "C:\\Program Files (x86)\\Git\\bin\\git.exe" pack-refs --all
                [23:54:12] :		 [VCS Root: Gitlab - Stack Exchange Network] [C:\\TeamCity\\buildAgent\\work\\6daa56c20f8558cf]: "C:\\Program Files (x86)\\Git\\bin\\git.exe" config core.sparseCheckout false
                [23:54:12] :		 [VCS Root: Gitlab - Stack Exchange Network] [C:\\TeamCity\\buildAgent\\work\\6daa56c20f8558cf]: "C:\\Program Files (x86)\\Git\\bin\\git.exe" show-ref
                [23:54:12] :		 [VCS Root: Gitlab - Stack Exchange Network] [C:\\TeamCity\\buildAgent\\work\\6daa56c20f8558cf]: "C:\\Program Files (x86)\\Git\\bin\\git.exe" ls-remote origin
                [23:54:14] :		 [VCS Root: Gitlab - Stack Exchange Network] [C:\\TeamCity\\buildAgent\\work\\6daa56c20f8558cf]: "C:\\Program Files (x86)\\Git\\bin\\git.exe" show-ref refs/remotes/origin/master
                [23:54:14] :		 [VCS Root: Gitlab - Stack Exchange Network] [C:\\TeamCity\\buildAgent\\work\\6daa56c20f8558cf]: "C:\\Program Files (x86)\\Git\\bin\\git.exe" log -n1 --pretty=format:%H%x20%s 52173e6ad55dd55da435aaf7dd3343894afb3f1a --
                [23:54:14] :		 [VCS Root: Gitlab - Stack Exchange Network] [C:\\TeamCity\\buildAgent\\work\\6daa56c20f8558cf]: "C:\\Program Files (x86)\\Git\\bin\\git.exe" branch
                [23:54:14] :		 [VCS Root: Gitlab - Stack Exchange Network] [C:\\TeamCity\\buildAgent\\work\\6daa56c20f8558cf]: "C:\\Program Files (x86)\\Git\\bin\\git.exe" reset --hard 52173e6ad55dd55da435aaf7dd3343894afb3f1a
                [23:54:15] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  15% (2512/15988)   
                [23:54:15] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  16% (2559/15988)   
                [23:54:15] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  17% (2718/15988)   
                [23:54:15] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  18% (2878/15988)   
                [23:54:15] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  19% (3038/15988)   
                [23:54:15] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  20% (3198/15988)   
                [23:54:15] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  21% (3358/15988)   
                [23:54:15] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  22% (3518/15988)   
                [23:54:15] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  23% (3678/15988)   
                [23:54:15] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  24% (3838/15988)   
                [23:54:15] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  25% (3997/15988)   
                [23:54:15] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  26% (4157/15988)   
                [23:54:15] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  27% (4317/15988)   
                [23:54:15] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  28% (4477/15988)   
                [23:54:16] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  29% (4637/15988)   
                [23:54:16] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  30% (4797/15988)   
                [23:54:16] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  31% (4957/15988)   
                [23:54:16] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  32% (5117/15988)   
                [23:54:16] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  32% (5173/15988)   
                [23:54:16] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  33% (5277/15988)   
                [23:54:16] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  34% (5436/15988)   
                [23:54:16] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  35% (5596/15988)   
                [23:54:16] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  36% (5756/15988)   
                [23:54:16] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  37% (5916/15988)   
                [23:54:16] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  38% (6076/15988)   
                [23:54:16] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  39% (6236/15988)   
                [23:54:16] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  40% (6396/15988)   
                [23:54:16] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  41% (6556/15988)   
                [23:54:16] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  42% (6715/15988)   
                [23:54:16] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  43% (6875/15988)   
                [23:54:17] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  44% (7035/15988)   
                [23:54:17] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  45% (7195/15988)   
                [23:54:17] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  46% (7355/15988)   
                [23:54:17] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  47% (7515/15988)   
                [23:54:17] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  48% (7675/15988)   
                [23:54:17] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  49% (7835/15988)   
                [23:54:17] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  50% (7994/15988)   
                [23:54:17] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  51% (8154/15988)   
                [23:54:17] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  52% (8314/15988)   
                [23:54:17] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  52% (8428/15988)   
                [23:54:17] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  53% (8474/15988)   
                [23:54:17] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  54% (8634/15988)   
                [23:54:17] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  55% (8794/15988)   
                [23:54:17] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  56% (8954/15988)   
                [23:54:17] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  57% (9114/15988)   
                [23:54:17] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  58% (9274/15988)   
                [23:54:17] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  59% (9433/15988)   
                [23:54:17] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  60% (9593/15988)   
                [23:54:17] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  61% (9753/15988)   
                [23:54:17] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  62% (9913/15988)   
                [23:54:17] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  63% (10073/15988)   
                [23:54:17] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  64% (10233/15988)   
                [23:54:17] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  65% (10393/15988)   
                [23:54:18] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  66% (10553/15988)   
                [23:54:18] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  67% (10712/15988)   
                [23:54:18] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  68% (10872/15988)   
                [23:54:18] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  69% (11032/15988)   
                [23:54:18] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  70% (11192/15988)   
                [23:54:18] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  70% (11256/15988)   
                [23:54:18] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  71% (11352/15988)   
                [23:54:18] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  72% (11512/15988)   
                [23:54:18] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  73% (11672/15988)   
                [23:54:18] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  74% (11832/15988)   
                [23:54:18] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  75% (11991/15988)   
                [23:54:18] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  76% (12151/15988)   
                [23:54:18] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  77% (12311/15988)   
                [23:54:18] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  78% (12471/15988)   
                [23:54:18] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  79% (12631/15988)   
                [23:54:19] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  80% (12791/15988)   
                [23:54:19] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  81% (12951/15988)   
                [23:54:19] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  82% (13111/15988)   
                [23:54:19] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  83% (13271/15988)   
                [23:54:19] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  84% (13430/15988)   
                [23:54:19] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  85% (13590/15988)   
                [23:54:19] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  86% (13750/15988)   
                [23:54:19] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  87% (13910/15988)   
                [23:54:19] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  87% (14033/15988)   
                [23:54:19] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  88% (14070/15988)   
                [23:54:19] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  89% (14230/15988)   
                [23:54:19] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  90% (14390/15988)   
                [23:54:19] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  91% (14550/15988)   
                [23:54:19] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  92% (14709/15988)   
                [23:54:19] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  93% (14869/15988)   
                [23:54:19] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  94% (15029/15988)   
                [23:54:20] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  95% (15189/15988)   
                [23:54:20] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  96% (15349/15988)   
                [23:54:20] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  96% (15412/15988)   
                [23:54:20] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  97% (15509/15988)   
                [23:54:20] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  98% (15669/15988)   
                [23:54:20] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files:  99% (15829/15988)   
                [23:54:20] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files: 100% (15988/15988)   
                [23:54:20] :		 [VCS Root: Gitlab - Stack Exchange Network] Checking out files: 100% (15988/15988), done.`}</pre>
*/}
        </div>
    );
}