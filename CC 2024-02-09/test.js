// this is just a test file

function test() {
    return 'Hello World'
} 

console.log(test())

// how to push n pull stuff to github directly from vscode!!
// step 1: make sure vscode and github are connected. create a repository (repo) on github and have whatever directory you want uploaded open on vscode

// step 2: use "git init" in the terminal to initialize git. this will help with the following steps
// step 3: there are several commands to remember
    // "git commit -m 'insert msg here'" will ready up a file with a msg. the "-m" part indicates a msg or memo, similar to adding a note or caption to your file. when you view this commit, you can read the msg to get a snapshot of what the change was or why
    // "git pull" helps merge your files with whatever is currently uploaded on github (im not sure about this definition at the moment...)
    // "git commit --amend --date='insert date here'" will do the same as the first commit command, but this time with a different date. say you want to commit a change to yesterday (or any previous date)
        // be aware, when using this command, you will have to exit a menu by typing in the following: esc, then type ":wq" and enter
// step 4: time to connect the github repo to your vscode editor! type in the following in the terminal: 
    // "git remote add origin https://github.com/heylolily/${NAME-OF-REPO}.git"
    // the link should be to whichever repo you desire, so it will change based on circumstance.
    // once you type this in and press enter, you might be hit with an error, type in the following if it does occur: git push --set-upstream origin main
        //not surre sure what this means but i will look up more details later
// step 5: check whats on the stage to be pushed to your repo by typing in the following:
    // git status
// step 6: add the files you want to push to the repo by typing in the following:
    // git add _____
        // this can contain anything, from the name of the directory/file you want, to any changed files. typing in "git add ." will add all files that have changes.
// step step 7: push your files (aka confirm all your changes and submit them so they appear in your repo) by typing the following:
    // git push
    // now, you can refresh your page on github and you should be able to see your files and changes on your repo!!! congrats! you have a green square on your page now :) happy coding!!!