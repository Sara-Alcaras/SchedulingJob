var Job = [
    { 
    "ID": 1, 
    "Description": "Importação de arquivos de fundos", 
    "MaxDate": "2019-11-10 12:00:00,",
    "time": 2 
    }, 

    { 
    "ID": 2, 
    "Description": 
    "Importação de dados da Base Legada", 
    "MaxDate": "2019-11-11 12:00:00,", 
    "time": 4 
    }, 

    { 
    "ID": 3, 
    "Description": "Importação de dados de integração", 
    "MaxDate": "2019-11-11 08:00:00", 
    "time": 6 
    }

]
// verificar se está correto
// console.log(Job[0]);

var lista = 0;

for (i = 0; i < Job.length; i++) {
    
}

console.log('Consultando array antes de ordenar');
console.log(Job[0].MaxDate);
console.log(Job[1].MaxDate);
console.log(Job[2].MaxDate);


Job.sort(function(a, b) {
    var dateA = new Date(a.MaxDate),
        dateB = new Date(b.MaxDate);
    return dateA - dateB;
});
console.log('Consultando array depois de ordenar');
console.log(Job[0].MaxDate);
console.log(Job[1].MaxDate);
console.log(Job[2].MaxDate); 