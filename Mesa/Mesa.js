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
const sideSelect = document.getElementById("side-select");
const beverageContainer = document.getElementById("beverage-container");
const beverageQuantityContainer = document.getElementById(
  "beverage-quantity-container"
);
const beverageSelect = document.getElementById("beverage");
const beverageQuantityInput = document.getElementById("beverage-quantity");
const orders = {}; // Objeto para armazenar pedidos por mesa

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
  orders[tableCount] = []; // Inicializa a lista de pedidos para a nova mesa
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
  const tableId = tableCard.getAttribute("data-id"); // Obtém o ID da mesa
  editModal.style.display = "block";
  populateTableSelect(); // Popula as mesas no modal
  specificDishContainer.style.display = "none";
  quantityContainer.style.display = "none";
  beverageContainer.style.display = "none";
  beverageQuantityContainer.style.display = "none";
  quantityInput.value = "";
  specificDishSelect.innerHTML = "";
  beverageSelect.innerHTML = "";

  // Atualiza a tabela de pedidos no modal
  updateOrdersTable(tableId);
}

// Função para remover mesa
function removeTable(tableCard) {
  const tableId = tableCard.getAttribute("data-id");
  delete orders[tableId]; // Remove a lista de pedidos ao remover a mesa
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

// Função para atualizar a tabela de pedidos no modal
function updateOrdersTable(tableId) {
  const ordersTableBody = document.querySelector("#ordersTable tbody");
  ordersTableBody.innerHTML = ""; // Limpa a tabela antes de popular

  const tableOrders = orders[tableId]; // Obtém os pedidos da mesa
  tableOrders.forEach((order) => {
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
    ordersTableBody.appendChild(row);
  });
}

// Adiciona evento para fechar o modal
closeModalButton.addEventListener("click", () => {
  editModal.style.display = "none";
});

// Habilita ou desabilita o seletor de pratos e quantidade baseado no tipo de prato
dishTypeSelect.addEventListener("change", () => {
  const selectedDish = dishTypeSelect.value;
  specificDishSelect.innerHTML = ""; // Limpa o seletor de pratos

  if (selectedDish) {
    specificDishContainer.style.display = "block";
    quantityContainer.style.display = "block";

    // Adiciona pratos com base no tipo
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
  beverageSelect.innerHTML = ""; // Limpa o seletor de bebidas

  if (selectedSide) {
    beverageContainer.style.display = "block";
    beverageQuantityContainer.style.display = "block";

    // Adiciona bebidas com base no tipo
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

// Função para enviar o formulário (adicionar lógica para processar o pedido)
editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const tableId =
    document.getElementById("table-select").value.split(" ")[1] - 1; // Obtém o ID da mesa
  const order = {
    table: document.getElementById("table-select").value,
    dishType: dishTypeSelect.value,
    specificDish: specificDishSelect.value,
    quantity: quantityInput.value,
    side: sideSelect.value,
    beverage: beverageSelect.value,
    beverageQuantity: beverageQuantityInput.value,
  };

  // Adiciona o pedido à mesa correspondente
  orders[tableId].push(order);

  // Atualiza a tabela de pedidos no modal
  updateOrdersTable(tableId);

  // Fecha o modal após enviar
  editModal.style.display = "none";
});
