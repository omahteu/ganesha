$.getJSON("./modelos/usuario.json", function(data) {
    // Manipule os dados do JSON aqui
    console.log(data);

    // Exemplo: percorrer os dados
    $.each(data, function(key, value) {
        console.log("Chave: " + key + ", Valor: " + value);
    });
}).fail(function() {
    console.log("Erro ao carregar o arquivo JSON.");
});
