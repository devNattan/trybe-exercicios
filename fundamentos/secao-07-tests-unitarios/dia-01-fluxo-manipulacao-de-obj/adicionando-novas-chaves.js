// obj costumer
const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };

  // chave e valor armazenadas em variáveis
  let newKey = 'lastName';
  const lastName = 'Ferreira';

  // função que adiciona novas chaves e valores ao objeto
  const adicionaPropriedade = (objeto, novaPropriedade, valor) => {
    objeto[novaPropriedade] = valor
  };

  //   adicionando a chave lastName + valor "Ferreira"
  adicionaPropriedade(customer, newKey, lastName);
  console.log(customer);
  

  //   adicionando uma nova chave a uma variável
  newKey = 'fullName';

  //   adicionando uma variável com o first e last name
  const fullName = `${customer.firstName} ${customer.lastName}`;

  // chamando a função para adicionar chaves e valores novas nos elementos  
  adicionaPropriedade(customer, newKey, fullName);
  console.log(customer);

//   hora da prática !!!
newKey = 'Email'
value = 'n11001000.11@gmail.com'
// chamando a func de adicionar chaves e valores
adicionaPropriedade(customer, newKey, value);
  console.log(customer);