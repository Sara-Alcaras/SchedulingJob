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

// console.log(Job[0]);
var lista = 0;

const dateStart = new Date('2019-11-10 09:00:00');

const dateEnd = new Date('2019-11-11 12:00:00');

for (i = 0; i < Job.length; i++) {
    var dateIndex = Job[i].MaxDate;
    console.log(Job[i].MaxDate)
    if (dateStart.getTime() <= new Date(Job[i].MaxDate).getTime() 
    && dateEnd.getTime() >= new Date(Job[i].MaxDate).getTime()) {
        console.log('A data', dateIndex, 'está contida dentro do período especificado');
    } else {
        console.log('A data', Job[i].MaxDate, 'está fora do período especificado');
    }
}

for (i = 0; i < Job.length - 1; i++) {
    if (new Date(Job[i].MaxDate).getTime() < new Date(Job[i + 1].MaxDate).getTime())
        lista = i;
    console.log('Na iteração', i, 'Lista equivale', lista);
} 