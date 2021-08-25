
```function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    
    const valorFixo = 2000
    let valorCarro = valorTotalVendas / qtdeCarrosVendidos
    let comissao = 100 + (5 * valorCarro) / 100
    return valorFixo + comissao
}
