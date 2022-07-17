const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  console.log(`Olá ${order.name}, Telefone ${order.phoneNumber}, R.${order.address.street}, Nº${order.address.number}, AP ${order.address.apartment}`)

}

order.name = 'Thomas Jefferson'

order.order.pizza.marguerita.price = 20

customerInfo(order);

const orderModifier = (order) => {
  console.log(`Olá ${order.name}, O total do seu pedido de ${Object.keys(order.order.pizza)[0]}, ${Object.keys(order.order.pizza)[1]} e ${order.order.drinks.coke.type} é ${order.order.pizza.marguerita.price + order.order.pizza.pepperoni.price + order.order.drinks.coke.price}`)
}

orderModifier(order);

// console.log(Object.keys(order.order.pizza))