var names = [],
userName = null,
i = 0;
nameCount = 5;
var loggedIn = 0;

for (i = 0; i < nameCount; i++) {
	names.push(prompt("Введите имя", "имя"));
}

userName = prompt("Введите ваше имя", "ваше имя");

for (i = 0; i < names.length; i++) {
	if (names[i] == userName) {
		loggedIn = 1;
	}
}

if (loggedIn) {
	alert(userName + ", вы успешно вошли!");
} else {
	alert("Error! =(");
}

