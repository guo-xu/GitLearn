Git is a version control system.
Git is free software.
Git tracks changes of files.

1、初始化一个Git仓库，使用 git init 命令。
2、添加文件到Git仓库，分两步：
    1. 使用命令 git add <file>,注意，可反复多次使用，添加多个文件；----  把文件添加到暂存区。
    2. 使用命令 git commit -m <message>,完成。 ---- 把暂存区的所有内容提交到当前分支。
    可理解为，需要提交的文件修改都放到暂存区，然后，一次性提交暂存区的所有修改。
3、git status可以随时显示工作区的状态。
4、如果 git status 告诉你有文件被修改过，用git diff可以查看修改内容。
git diff 比较的是工作区文件与暂存区文件的区别， git diff --cached比较的是暂存区文件与仓库分支里的区别。
5、HEAD指向的版本就是当前版本，Git允许我们在版本的历史之间穿梭，使用命令 git reset --hard commit_id。
穿梭前，用git log查看提交历史，以便确认要回退到哪个版本。
要重返未来，用git reflog查看命令历史，以便确认要回到未来的哪个版本。
6、还原：（丢弃工作区的修改）git checkout -- file，在当前文件还没有执行 git add 命令前，使用该命令可以还原当前文件做的修改
    （丢弃已提交到暂存区的修改）如果已经执行了git add命令，但是还没有执行git commit，想还原。可以先使用git reset HEAD file命令，将该文件add的内容撤销回去，然后再执行 git checkout -- file命令。
7、git rm 用于删除一个文件。如果一个文件已经被提交到版本库，那么你永远不用担心误删。
但是要小心，只能恢复到文件的最新版本，会丢失最近一次提交后你修改的内容。
8、本地提交后，只要有必要，可以使用命令 git push origin master 推送最新修改内容到git服务器上。