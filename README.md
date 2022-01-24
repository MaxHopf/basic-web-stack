# basic-web-stack
A template for frontend web development using HTML CSS &amp; JavaScript

## Getting Started
This section describes a basic Git workflow using GitHub as host service. 

### Using SSH connection 
Use the ```clone``` command to get a copy of the repository to your local development machine. 
```Bash 
git clone git@github.com:MaxHopf/basic-web-stack.git  
```
Change the working directory to the repository. To check the URL of your repository use the ```remote``` command.
```Bash
git remote -v
```
The URL should now be printed in the terminal. You can use your local copy of the repository to work on the project. Change whatever needs to be changed. 

Check the status of you Git repository.
```
git status
```
You may notice some modifications highlighted in red color. Use the ```add``` command to lift the modified file to the staging area before making a commit. 
```
git add <file.name>
```
The file is now ready to be committed. Use ```commit``` with the message tag ```-m``` to finalize the commit.
```
git commit -m "<my message>"
```

