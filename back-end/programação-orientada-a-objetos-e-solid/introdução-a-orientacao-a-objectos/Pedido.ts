class Pedido { 
    cliente: Cliente;
    itens: Item[];
    formaDePagamento: string;
    desconto: number;
   

    constructor(cliente: Cliente, itens: Item[], formaDePagamento: string, desconto: number) {
        this.cliente = cliente;
        this.itens = itens;
        this.formaDePagamento;
        this.desconto;
    }

    getTotal() {
        const total = this.itens.reduce((a, item) {
            return a+ item.price;
        }, 0)
        return total;
    }

    calculateTotalWithDiscount() {
        return this.getTotal() * (1 -  this.desconto) ; 
    }
}