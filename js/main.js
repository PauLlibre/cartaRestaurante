// DISPLAY DEL POP UP MENU

function menu() {
  document.getElementById("container-menu-sm").style.display = "block";
}

// TAKE AWAY AÑADIR AL PULSAR

let number = 0;
document.getElementById("add1").addEventListener("click", function () {
  number = Number(document.getElementById("shop-quantity1").innerHTML);
  number++;
  document.getElementById("shop-quantity1").innerHTML = number;
});

document.getElementById("take1").addEventListener("click", function () {
  if (number <= 0) {
    number = 0;
  } else {
    number = Number(document.getElementById("shop-quantity1").innerHTML);
    number--;
    document.getElementById("shop-quantity1").innerHTML = number;
  }
});

document.getElementById("add2").addEventListener("click", function () {
  number = Number(document.getElementById("shop-quantity2").innerHTML);
  number++;
  document.getElementById("shop-quantity2").innerHTML = number;
});

document.getElementById("take2").addEventListener("click", function () {
  if (number <= 0) {
    number = 0;
  } else {
    number = Number(document.getElementById("shop-quantity2").innerHTML);
    number--;
    document.getElementById("shop-quantity2").innerHTML = number;
  }
});
