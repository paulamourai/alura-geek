window.onload = function () {
  var overlay = document.getElementById("overlay");
  var closeBtn = document.getElementById("closeBtn");

  // Exibe o overlay ao carregar a página
  overlay.style.display = "flex";

  // Adiciona um evento de clique no botão de fechar
  closeBtn.onclick = function () {
    overlay.style.display = "none";
  };
};

let products = [
  {
    id: 0,
    image:
      "https://global.cdn.magazord.com.br/apaixonadosporpelucia/img/2018/12/produto/313/urso-de-pel-cia-40-cm-decore-marrom-com-la-o.jpg?ims=800x800",
    product: "Urso de Gravata",
    price: 100.0,
  },
  {
    id: 1,
    image:
      "https://cdn.awsli.com.br/600x700/68/68618/produto/9627470/5737755d76.jpg",
    product: "Urso de Coração",
    price: 100.0,
  },
  {
    id: 2,
    image:
      "https://superlegalbrinquedos.vteximg.com.br/arquivos/ids/191277-800-800/1471-Urso-de-Pelucia-Amo-Voce-40-cm-Lovely-Toys.jpg?v=637582309320730000",
    product: "Urso Amo Você",
    price: 100.0,
  },

  {
    id: 3,
    image:
      "https://a-static.mlcdn.com.br/450x450/urso-de-pelucia-gigante-110cm-buba-7565/parisluzcombr/23375p/84ab099a146eeafd3ccb1aa8723a05cf.jpeg",
    product: "Urso Gigante",
    price: 300.0,
  },
];

// Função para mostrar um novo produto

function readProducts() {
  const cards = document.getElementById("cards");
  cards.innerHTML = "";
  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <img src="${product.image}" alt="Imagem do produto">
            <div class="card-container--info">
                <p>${product.product}</p>
                <div class="card-container--price">
                    <p>R$ ${product.price.toFixed(2)}</p>
                    <img class="trash" src="./assets/lixeira.png" alt="Ícone do Lixo" onclick="deleteProduct(${
                      product.id
                    })">
                   
                </div>
            </div>
        `;
    cards.appendChild(card);
  });
}

// Função para criar um novo produto
function createProduct() {
  const form = document.getElementById("form-product");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const price = parseFloat(document.getElementById("price").value);
    const image = document.getElementById("image").value;
    if (name && price && image) {
      const newProduct = {
        id: products.length,
        image,
        product: name,
        price,
      };
      products.push(newProduct);
      readProducts();
      form.reset();
    } else {
      alert("Preencha todos os campos!");
    }
  });
}

// Função para deletar um produto
function deleteProduct(id) {
  if (confirm("Tem certeza que deseja excluir o produto?")) {
    products = products.filter((product) => product.id !== id);
    readProducts();
    if (products.length === 0) {
      alert("Nenhum produto encontrado!");
    }
  }
}

// Função para atualizar um produto
function updateProduct(id) {
  const product = products.find((product) => product.id === id);
  if (product) {
    const name = prompt("Novo nome do produto:", product.product);
    const price = parseFloat(prompt("Novo valor do produto:", product.price));
    const image = prompt("Nova imagem do produto:", product.image);
    if (name && price && image) {
      product.product = name;
      product.price = price;
      product.image = image;
      readProducts();
      alert("Produto atualizado com sucesso!");
    } else {
      alert("Preencha todos os campos!");
    }
  } else {
    alert("Produto não encontrado!");
  }
}

// Inicializar a leitura dos produtos
readProducts();

// Inicializar a criação de produtos
createProduct();
