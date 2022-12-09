alert( 'Hello, world!' );

var groupmates = [
    {
        "name": "Александр",
        "surname": "Тандем",
        "exams": ["Информатика", "Физика", "ВЕБ"],
        "group": "BIB2101",
        "marks": [4, 3, 5]
    },
    {
        "name": "Артур",
        "surname": "Кифиренко",
        "exams": ["Информатика", "Физика", "ВЕБ"],
        "group": "BIB2102",
        "marks": [4, 4, 4]
    },
    {
        "name": "Хамиль",
        "surname": "Андреев",
        "exams": ["Информатика", "Физика", "ВЕБ"],
        "group": "BIB2102",
        "marks": [3, 4, 4]
    },
    {
        "name": "Никита",
        "surname": "Иванов",
        "exams": ["Информатика", "Физика", "ВЕБ"],
        "group": "BIB2101",
        "marks": [3, 5, 2]
    },
    {
        "name": "Давит",
        "surname": "Варданов",
        "exams": ["Информатика", "Физика", "ВЕБ"],
        "group": "BIB2101",
        "marks": [5, 5, 5]
    },
    {
        "name": "Тимофей",
        "surname": "Кот",
        "exams": ["Информатика", "Физика", "ВЕБ"],
        "group": "BIB2102",
        "marks": [2, 2, 2]
    },
]

console.log(groupmates)


var rpad = function(source, length) {
    // js не поддерживает добавление нужного количества символов
    // справа от строки, т.е. аналога ljust из Python здесь нет 
    // str = (str).toString();
    source = String(source);
    while (source.length < length)
        source = source + ' '; 
    return source;
};

var printStudents = function(students){ 
    console.log(
        rpad("Имя", 15),
        rpad("Фамилия", 15),
        rpad("Группа", 8),
        rpad("Оценки", 20)
    );
    // был выведен заголовок таблицы
    for (var i = 0; i<=students.length-1; i++){
        // в цикле выводится каждый экземпляр студента 
        console.log(
            rpad(students[i]['name'], 15),
            rpad(students[i]['surname'], 15),
            rpad(students[i]['group'], 8),
            rpad(students[i]['marks'], 20)
        );
    }
    console.log('\n'); // добавляется пустая строка в конце вывода
};

var filterByGroup = function() {
    var group = prompt();
    var result = [];
    for (var i = 0; i <= groupmates.length-1 ; i++){
         var student = groupmates[i];
        if (student["group"] == group){
            result.push(student);
        }
    }
    return result;
};

printStudents(groupmates);
printStudents(filterByGroup(groupmates));