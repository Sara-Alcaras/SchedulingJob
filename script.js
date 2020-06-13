var Job = [
    { "ID": 1, "Description": "Importação de arquivos de fundos", "MaxDate": "2019-11-10 12:00:00,", "time": 2 }, 
    { "ID": 2, "Description": "Importação de dados da Base Legada", "MaxDate": "2019-11-11 12:00:00,", "time": 4 }, 
    { "ID": 3, "Description": "Importação de dados de integração", "MaxDate": "2019-11-11 08:00:00", "time": 6 }
]

var lista = 0;

console.log(Job[0]); 

//Verificar urgencia de serv
for (i = 0; i < Job.length - 1; i++) {
    if (Job[i].MaxDate.getTime > Job[i + 1].MaxDate.getTime)
        Lista = i;
    console.log("Depois de comparar", i, "com", i + 1, lista);
} 