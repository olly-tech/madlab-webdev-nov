console.log("hi");

// WHERE
const form = document.orderForm;
const elements = form.elements;

const submitBtn = document.getElementById("submit-btn");

// console.dir(form);
// console.dir(elements);

// WHAT DO
function getValue(inputName) {
  return elements[inputName].value;
}

function handleSubmit(event) {
  event.preventDefault();
  console.log(elements);

  const name = getValue("name");
  const email = getValue("email");
  const deliveryMethod = getValue("delivery-method");
  const quantity = getValue("quantity");

  console.log(name + email + deliveryMethod + quantity);

  ///////// RADIO BUTTONS - SIZE OF PIZZA

  let sizeValue = "No size selected";

  const sizeElements = elements.size; // elements["size"]

  console.log(sizeElements);

  sizeValue = sizeElements.value;

  ////
  let toppingsValues = "";
  const toppingElements = elements.toppings;
  console.log(toppingElements);

  for (let topping of toppingElements) {
    if (topping.checked) {
        toppingsValues = toppingsValues + topping.value;
    }
  }

  alert(`
        Name: ${name}, 
        Email: ${email},
        Delivery Method: ${deliveryMethod},
        Size: ${sizeValue},
        Toppings: ${toppingsValues},

        `);

    form.reset();
}

// WHEN
submitBtn.addEventListener("click", handleSubmit);
