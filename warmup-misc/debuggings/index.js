// var submit = document.getElementById("button");
var firstname = document.getElementById("firstName");
var lastname = document.getElementById("lastName");
var age = document.getElementById("age");
var gender = document.getElementsByName("gender");
var form = document.getElementById("form");

var output = {};

function getsgender() {
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            return gender[i].value;
        }
        return "not given!!"
    }
}

function submit() {
    alert("First name: " + firstname.value + "\nLast name: " + lastname.value + "\nAge: " + age.value + "\nGender: " + gender);
}
form.onsubmit = submit;


//works
// submit.onclick = function () {
//         alert("First name: " + firstname + "\n" + "Last name: " + lastname + "\n" + "Age: " + age + "\n" + "Gender: " + gender);
// }

//undefined
// submit.onclick = function () {
//     var firstname = document.getElementsByName("firstName").value;
//     var lastname = document.getElementsByName("lastName").value;
//     var age = document.getElementsByName("age").value;
//     alert("First name: " + firstname + "\n" +"Last name: " + lastname + "\n" + "Age: " + age);
// }

//doesnt work
// submit.onclick = function () {
//     var firstname = document.getElementByName("firstName").value;
//     var lastname = document.getElementByName("lastName").value;
//     var age = document.getElementByName("age").value;
//     alert("First name: " + firstname + "\n" +"Last name: " + lastname + "\n" + "Age: " + age);
// }

