const produtos = [ {nome:"alface", categoria:"vegetais", preco:"0,90€"},
                   {nome:"tangerinas", categoria:"fruta", preco:"1,15€"},
                   {nome:"cápsulas delta q", categoria:"cafe", preco:"3,45€"},
                   {nome:"gel de banho", categoria:"higiene", preco:"5,05€"},
                   {nome:"gillette", categoria:"beleza", preco:"4,85€"},
                   {nome:"leite s/ lactose", categoria:"lacticínios", preco:"0,95€"},
                   {nome:"estrelitas", categoria:"cereais pequeno almoço", preco:"3€"},
                   {nome:"hamburgers de novilho", categoria:"carne", preco:"4,20€"}
]

let produtoTabela = document.getElementById('produtoLista')

for(i=0;i<produtos.length;i++){
    let produtoTabelaLinha = document.createElement('tr');

    let produtoTabelaDadosNome = document.createElement('td');
    produtoTabelaDadosNome.innerHTML = produtos[i].nome;
    produtoTabelaLinha.appendChild(produtoTabelaDadosNome);
    produtoTabela.appendChild(produtoTabelaLinha)

    let produtoTabelaDadosCategoria = document.createElement('td');
    produtoTabelaDadosCategoria.innerHTML = produtos[i].categoria;
    produtoTabelaLinha.appendChild(produtoTabelaDadosCategoria);
    produtoTabela.appendChild(produtoTabelaLinha)

    let produtoTabelaDadosPreco = document.createElement('td');
    produtoTabelaDadosPreco.innerHTML = produtos[i].preco;
    produtoTabelaLinha.appendChild(produtoTabelaDadosPreco);
    produtoTabela.appendChild(produtoTabelaLinha)}