let tableCount = 0; // Inicia com 0 mesas
const tablesContainer = document.getElementById("tablesContainer");
const addTableButton = document.getElementById("addTableButton");
const editModal = document.getElementById("editModal");
const closeModalButton = document.querySelector(".close-button");
const editForm = document.getElementById("editForm");
const quantityInput = document.getElementById("quantity");
const dishTypeSelect = document.getElementById("dish-type");
const specificDishSelect = document.getElementById("specific-dish");
const specificDishContainer = document.getElementById(
  "specific-dish-container"
);
const quantityContainer = document.getElementById("quantity-container");
const sideSelect = document.getElementById("side-select"); // Seletor de acompanhamentos
const beverageContainer = document.getElementById("beverage-container"); // Contêiner de bebidas
const beverageQuantityContainer = document.getElementById(
  "beverage-quantity-container"
); // Contêiner de quantidade de bebidas
const beverageSelect = document.getElementById("beverage"); // Seletor de bebidas
const beverageQuantityInput = document.getElementById("beverage-quantity"); // Campo de quantidade de bebidas

// Função para adicionar uma nova mesa
addTableButton.addEventListener("click", () => {
  addTable();
});

// Função para adicionar mesa
function addTable() {
  const tableCard = document.createElement("div");
  tableCard.classList.add("table-card");
  tableCard.setAttribute("data-id", tableCount);
  tableCard.innerHTML = `
        <h3>Mesa ${tableCount + 1}</h3>
        <button class="edit-button">Editar</button>
        <button class="remove-button">Remover</button>
    `;
  tablesContainer.appendChild(tableCard);
  tableCount++;

  // Adiciona eventos aos botões
  tableCard
    .querySelector(".edit-button")
    .addEventListener("click", () => openModal(tableCard));
  tableCard
    .querySelector(".remove-button")
    .addEventListener("click", () => removeTable(tableCard));
}

// Função para abrir o modal de edição
function openModal(tableCard) {
  editModal.style.display = "block";
  populateTableSelect(); // Popula as mesas no modal
  specificDishContainer.style.display = "none"; // Esconde o seletor de pratos
  quantityContainer.style.display = "none"; // Esconde o campo de quantidade
  beverageContainer.style.display = "none"; // Esconde o seletor de bebidas
  beverageQuantityContainer.style.display = "none"; // Esconde o campo de quantidade de bebidas
  quantityInput.value = ""; // Limpa o campo de quantidade
  specificDishSelect.innerHTML = ""; // Limpa opções do seletor de pratos
  beverageSelect.innerHTML = ""; // Limpa opções do seletor de bebidas
}

// Função para remover mesa
function removeTable(tableCard) {
  tablesContainer.removeChild(tableCard);
}

// Função para popular o seletor de mesas
function populateTableSelect() {
  const tableSelect = document.getElementById("table-select");
  tableSelect.innerHTML = ""; // Limpa o seletor

  for (let i = 0; i < tableCount; i++) {
    const option = document.createElement("option");
    option.value = `Mesa ${i + 1}`;
    option.textContent = `Mesa ${i + 1}`;
    tableSelect.appendChild(option);
  }
}

// Adiciona evento para fechar o modal
closeModalButton.addEventListener("click", () => {
  editModal.style.display = "none";
});

// Habilita ou desabilita o seletor de pratos e quantidade baseado no tipo de prato
dishTypeSelect.addEventListener("change", () => {
  const selectedDish = dishTypeSelect.value;

  // Limpa o seletor de pratos
  specificDishSelect.innerHTML = "";

  // Habilita o campo de quantidade e o seletor de pratos com base no tipo escolhido
  if (selectedDish) {
    specificDishContainer.style.display = "block";
    quantityContainer.style.display = "block";

    if (selectedDish === "peixe") {
      specificDishSelect.innerHTML += `
                <option value="salmão">Salmão</option>
                <option value="tilápia">Tilápia</option>
                <option value="bacalhau">Bacalhau</option>
            `;
    } else if (selectedDish === "prato") {
      specificDishSelect.innerHTML += `
                <option value="lasanha">Lasanha</option>
                <option value="espaguete">Espaguete</option>
                <option value="pizza">Pizza</option>
            `;
    } else if (selectedDish === "carne") {
      specificDishSelect.innerHTML += `
                <option value="picanha">Picanha</option>
                <option value="frango">Frango</option>
                <option value="costela">Costela</option>
            `;
    }
  } else {
    specificDishContainer.style.display = "none";
    quantityContainer.style.display = "none";
  }
});

// Adiciona evento para habilitar ou desabilitar o seletor de bebidas e quantidade baseado no tipo de acompanhamento
sideSelect.addEventListener("change", () => {
  const selectedSide = sideSelect.value;

  // Limpa o seletor de bebidas e campo de quantidade
  beverageSelect.innerHTML = "";

  // Habilita o campo de quantidade e o seletor de bebidas com base no tipo escolhido
  if (selectedSide) {
    beverageContainer.style.display = "block";
    beverageQuantityContainer.style.display = "block";

    if (selectedSide === "alcoólico") {
      beverageSelect.innerHTML += `
                <option value="cerveja">Cerveja</option>
                <option value="vinho">Vinho</option>
            `;
    } else if (selectedSide === "não alcoólico") {
      beverageSelect.innerHTML += `
                <option value="refrigerante">Refrigerante</option>
                <option value="suco">Suco</option>
                <option value="agua">Água</option>
            `;
    }
  } else {
    beverageContainer.style.display = "none";
    beverageQuantityContainer.style.display = "none";
  }
});

// Função para adicionar pedido à tabela
function addOrderToTable(order) {
  const ordersTableBody = document.querySelector("#ordersTable tbody");

  // Cria uma nova linha para o pedido
  const row = document.createElement("tr");
  row.innerHTML = `
      <td>${order.table}</td>
      <td>${order.dishType}</td>
      <td>${order.specificDish}</td>
      <td>${order.quantity}</td>
      <td>${order.side}</td>
      <td>${order.beverage}</td>
      <td>${order.beverageQuantity}</td>
  `;

  // Adiciona a nova linha ao corpo da tabela
  ordersTableBody.appendChild(row);
}

// Função para enviar o formulário (adicionar lógica para processar o pedido)
editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const order = {
    table: document.getElementById("table-select").value,
    dishType: dishTypeSelect.value,
    specificDish: specificDishSelect.value,
    quantity: quantityInput.value,
    side: sideSelect.value,
    beverage: beverageSelect.value,
    beverageQuantity: beverageQuantityInput.value,
  };

  // Adiciona o pedido à tabela
  addOrderToTable(order);

  // Fecha o modal após enviar
  editModal.style.display = "none";
});
