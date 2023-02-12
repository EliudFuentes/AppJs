class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

class UI {
  addProduct(product) {
    let productList = document.getElementById("product-list");
    let element = document.createElement("div");
    element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product</strong>: ${product.name}
                    <strong>Price</strong>: ${product.price}
                    <strong>Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger ms-3" name="delete">Delete</a>
                </div>
            </div>
        `;
    productList.appendChild(element);
  }

  deleteProduct(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.parentElement.remove();
      this.showMenssage("Delete product success", "success");
    }
  }

  showMenssage(message, cssClass) {
    let div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-4`;
    div.appendChild(document.createTextNode(message));
    //Mostrando en el dom
    let container = document.querySelector(".container");
    let app = document.querySelector("#App");
    container.insertBefore(div, app);
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 1500);
  }

  restForm() {
    document.getElementById("product-form").reset();
  }
}

//Dom Events
document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let year = document.getElementById("year").value;

    let product = new Product(name, price, year);

    let ui = new UI();

    if (name === "" || price === "" || year === "") {
      return ui.showMenssage("Complete fields please", "danger");
    }

    ui.addProduct(product);
    ui.restForm();
    ui.showMenssage("Product added succes", "success");

    e.preventDefault();
  });

document.getElementById("product-list").addEventListener("click", function (e) {
  let ui = new UI();
  ui.deleteProduct(e.target);
});
