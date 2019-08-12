Git is a version control system.
Git is free software.

1、初始化一个Git仓库，使用 git init 命令。
2、添加文件到Git仓库，分两步：
    1. 使用命令 git add <file>,注意，可反复多次使用，添加多个文件；----  把文件添加到暂存区。
    2. 使用命令 git commit -m <message>,完成。 ---- 把暂存区的所有内容提交到当前分支。
    可理解为，需要提交的文件修改都放到暂存区，然后，一次性提交暂存区的所有修改。
3、git status可以随时显示工作区的状态。
4、如果 git status 告诉你有文件被修改过，用git diff可以查看修改内容。
5、HEAD指向的版本就是当前版本，Git允许我们在版本的历史之间穿梭，使用命令 git reset --hard commit_id。
穿梭前，用git log查看提交历史，以便确认要回退到哪个版本。
要重返未来，用git reflog查看命令历史，以便确认要回到未来的哪个版本。