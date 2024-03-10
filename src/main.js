const { app, BrowserWindow } = require('electron');
const fs = require('fs');
const path = require('path');
//call the button in plan.html
var btnCreate = document.getElementById('btnCreate');
var btnRead = document.getElementById('btnRead');
var btnDelete = document.getElementById('btnDelete');
var btnUpdate = document.getElementById('btnUpdate');
var message = document.getElementById('message');
var fileName = document.getElementById('fileName');
var fileContents = document.getElementById('fileContents');
let pathName = path.join(__dirname, 'Files');
//this is for create, where user can save ther destination and details file
btnCreate.addEventListener('click', function(){ 
    let fileNameValue = fileName.value;
    let file = path.join(pathName, fileNameValue);
    let contents = fileContents.value;
    fs.writeFile(file, contents, function(err){ 
        if(err){
            console.error(err);
            message.textContent = "Failed to create file. Please try again.";
            message.style.color = "red";
        } else {
            var txtfile = document.getElementById("fileName").value;
            message.textContent = "Destination \"" + txtfile + "\" has been successfully added to your travel plan.";
            message.style.color = "green";
            console.log("The file was created");
        }
        // Set focus back to the fileName input field
        fileName.focus();
        // Clear the input fields
        fileName.value = "";
        fileContents.value = "";
    });
});
//this is for user to read their file destination
btnRead.addEventListener('click', function(){ 
    let file = path.join(pathName, fileName.value);
    fs.readFile(file, function(err, data){ 
        if(err){
            console.error(err);
            message.textContent = "Failed to read file. Please try again.";
            message.style.color = "red";
        } else {
            fileContents.value = data;
            message.textContent = "Your details are now visible.";
            message.style.color = "green";
            console.log("The file was read!");
        }
    });
});
//this is for user to delete their file destination
btnDelete.addEventListener('click', function(){ 
    let file = path.join(pathName, fileName.value);

    fs.unlink(file, function(err){ 
        if(err){
            console.error(err);
            message.textContent = "Failed to delete file. Please try again.";
            message.style.color = "red";
        } else {
            fileName.value = "";
            fileContents.value = "";
            message.textContent = "Your Travel Plan Deleted Successfully.";
            message.style.color = "green";
            console.log("The file was deleted!");
        }
    });
});
//this is for user to edit/update their file destination
btnUpdate.addEventListener('click', function(){ 
    let file = path.join(pathName, fileName.value);
    let contents = fileContents.value;

    fs.writeFile(file, contents, function(err){ 
        if(err){
            console.error(err);
            message.textContent = "Failed to update file. Please try again.";
            message.style.color = "red";
        } else {
            message.textContent = "Your Travel Plan Edited Successfully.";
            message.style.color = "green";
            console.log("The file was updated!");
        }
        // Set focus back to the fileName input field
        fileName.focus();
    });
});
