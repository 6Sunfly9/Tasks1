let myObject = new Object();

myObject.surname = "Крутов";
myObject.name = "Семён";
myObject.patronymic = "Владимирович";
myObject.ocupation = "Студент";
myObject.degree = "Среднее";
myObject.category = "Первая";
myObject.education = Array("Многопрофильный колледж", " Педагогический колледж");
myObject.discipline = Array("Информатика", " Математика", " Физика");
myObject.note = "Примечание"

document.writeln("Фамилия: " + myObject.surname + "<br>");
document.writeln("Имя: " + myObject.name + "<br>");
document.writeln("Отчество: " + myObject.patronymic + "<br>");
document.writeln("Профессия: " + myObject.ocupation + "<br>");
document.writeln("Уровень образования: " + myObject.degree + "<br>");
document.writeln("Категория: " + myObject.category + "<br>");
document.writeln("Образование: " + myObject.education + "<br>");
document.writeln("Дисциплина: " + myObject.discipline + "<br>");
document.writeln("Фамилия: " + myObject.note + "<br>");