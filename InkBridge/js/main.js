var flag = false;
var regcheckboxes = document.querySelectorAll('input.regsubOption'),
    checkallreg = document.getElementById('regoption');
for (var i = 0; i < regcheckboxes.length; i++) {
    regcheckboxes[i].onclick = function () {
        var checkedCount = document.querySelectorAll('input.regsubOption:checked').length;
        checkallreg.checked = checkedCount > 0;
        checkallreg.indeterminate = checkedCount > 0 && checkedCount < regcheckboxes.length;
    }
}
checkallreg.onclick = function () {
    for (var i = 0; i < regcheckboxes.length; i++) {
        regcheckboxes[i].checked = this.checked;
    }
}

var intcheckboxes = document.querySelectorAll('input.intsubOption'),
    checkallint = document.getElementById('intoption');
for (var i = 0; i < intcheckboxes.length; i++) {
    intcheckboxes[i].onclick = function () {
        var checkedCount = document.querySelectorAll('input.intsubOption:checked').length;
        checkallint.checked = checkedCount > 0;
        checkallint.indeterminate = checkedCount > 0 && checkedCount < intcheckboxes.length;
    }
}
checkallint.onclick = function () {
    for (var i = 0; i < intcheckboxes.length; i++) {
        intcheckboxes[i].checked = this.checked;
    }
}

function check() {
    var password = document.getElementById("password").value;
    var password1 = document.getElementById("password1").value;
    if (password1 == (password)) {
        return true;
    } else {
        alert("Passwords didn't match");
        return false;
    }
}

function alterflag() {
    flag = true;
}

function fillcheck() {
    var password = document.getElementById("password").value;
    var password1 = document.getElementById("password1").value;
    var username = document.getElementById("username").value;
    var penname = document.getElementById("penname").value;
    var email = document.getElementById("email").value;
    var f = document.getElementById("next");
    if (flag == true)
        f.style.display = 'none';
    else {
        if (password.length != 0 && password1.length != 0 && username.length != 0 && penname.length != 0 &&
            email.length !=
            0) {
            f.style.display = 'block';
        } else {
            f.style.display = 'none';
        }
    }
}

function showafter() {
    document.getElementById('right').style.height = "100%";
    document.getElementById("right").style.borderLeft = "2px solid #000000";
    document.getElementById("LogoAndQuotes").style.borderRight = "none";
    document.getElementById('next').style.display = "none";
    document.getElementById('after').style.display = "block";
    document.getElementById('extraquotes').style.display = "block";
}

var genreval;

function addgenre() {
    genreval = document.getElementById("genre").value;
    var tabledata = document.createElement("td");
    var buttonadd = document.createElement("button");
    var node = document.createTextNode(genreval.substring(1));
    buttonadd.appendChild(node);
    if (genreval.length > 0) {
        tabledata.appendChild(buttonadd);
        var element = document.getElementById("frstrw");
        var child = document.getElementById("frstcl");
        element.insertBefore(tabledata, child);
        document.getElementById("genre").value = "";
    }
}

function enabler() {
    var i = 1;
    var check = document.getElementById("regoption");
    console.log(check);
    if (check.checked) {
        for (i = 1; i <= 3; i++) {
            var subele = document.getElementById(i.toString());
            console.log(i.toString());
            subele.disabled = false;
        }
    }
    if (!(check.checked)) {
        for (i = 1; i <= 3; i++) {
            var subele = document.getElementById(i.toString());
            subele.disabled = true;
        }
    }
}
var flag = false;
var regcheckboxes = document.querySelectorAll('input.regsubOption'),
    checkallreg = document.getElementById('regoption');
for (var i = 0; i < regcheckboxes.length; i++) {
    regcheckboxes[i].onclick = function () {
        var checkedCount = document.querySelectorAll('input.regsubOption:checked').length;
        checkallreg.checked = checkedCount > 0;
        checkallreg.indeterminate = checkedCount > 0 && checkedCount < regcheckboxes.length;
    }
}
checkallreg.onclick = function () {
    for (var i = 0; i < regcheckboxes.length; i++) {
        regcheckboxes[i].checked = this.checked;
    }
}

var intcheckboxes = document.querySelectorAll('input.intsubOption'),
    checkallint = document.getElementById('intoption');
for (var i = 0; i < intcheckboxes.length; i++) {
    intcheckboxes[i].onclick = function () {
        var checkedCount = document.querySelectorAll('input.intsubOption:checked').length;
        checkallint.checked = checkedCount > 0;
        checkallint.indeterminate = checkedCount > 0 && checkedCount < intcheckboxes.length;
    }
}
checkallint.onclick = function () {
    for (var i = 0; i < intcheckboxes.length; i++) {
        intcheckboxes[i].checked = this.checked;
    }
}

function check() {
    var password = document.getElementById("password").value;
    var password1 = document.getElementById("password1").value;
    if (password1 == (password)) {
        return true;
    } else {
        alert("Passwords didn't match");
        return false;
    }
}

function alterflag() {
    flag = true;
}

function fillcheck() {
    var password = document.getElementById("password").value;
    var password1 = document.getElementById("password1").value;
    var username = document.getElementById("username").value;
    var penname = document.getElementById("penname").value;
    var email = document.getElementById("email").value;
    var f = document.getElementById("next");
    if (flag == true)
        f.style.display = 'none';
    else {
        if (password.length != 0 && password1.length != 0 && username.length != 0 && penname.length != 0 &&
            email.length !=
            0) {
            f.style.display = 'block';
        } else {
            f.style.display = 'none';
        }
    }
}

function showafter() {
    document.getElementById('right').style.height = "100%";
    document.getElementById("right").style.borderLeft = "2px solid #000000";
    document.getElementById("LogoAndQuotes").style.borderRight = "none";
    document.getElementById('next').style.display = "none";
    document.getElementById('after').style.display = "block";
    document.getElementById('extraquotes').style.display = "block";
}

var genreval;

function addgenre() {
    genreval = document.getElementById("genre").value;
    var tabledata = document.createElement("td");
    var buttonadd = document.createElement("button");
    var node = document.createTextNode(genreval.substring(1));
    buttonadd.appendChild(node);
    if (genreval.length > 0) {
        tabledata.appendChild(buttonadd);
        var element = document.getElementById("frstrw");
        var child = document.getElementById("frstcl");
        element.insertBefore(tabledata, child);
        document.getElementById("genre").value = "";
    }
}

function enabler() {
    var i = 1;
    var check = document.getElementById("regoption");
    console.log(check);
    if (check.checked) {
        for (i = 1; i <= 3; i++) {
            var subele = document.getElementById(i.toString());
            console.log(i.toString());
            subele.disabled = false;
        }
    }
    if (!(check.checked)) {
        for (i = 1; i <= 3; i++) {
            var subele = document.getElementById(i.toString());
            subele.disabled = true;
        }
    }
}