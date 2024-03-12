var Phone1 = {
    Image: "/images/phone4.jpg",
    iphone: "image",
    name: "iphone SE",
    discountedPrice: 30000,
    originalPrice: 38500,
    itemId: "I001"
  };
  
  var Phone2 = {
    Image: "/images/phone3.jpg",
    iphone: "image2",
    name: "Iphone 10",
    discountedPrice: 55000,
    originalPrice: 60500,
    itemId: "I002"
  };
  
  var Phone3 = {
    Image: "/images/phone2.jpg",
    iphone: "image3",
    name: "Iphone 11",
    discountedPrice: 60000,
    originalPrice: 70500,
    itemId: "I003"
  };
  
  var Phone4 = {
    Image: "/images/phone1.jpg",
    iphone: "image4",
    name: "Iphone 12",
    discountedPrice: 70000,
    originalPrice: 75000,
    itemId: "I004"
  };
  
  var selectId = decodeURIComponent(window.location.search);
  
  var selectedItem = selectId.substring(1);
  
  // console.log(selectedItem);
  document.getElementById("display").innerText = selectedItem;
  
  if (selectedItem == Phone1.itemId) {
    document.getElementById("image").src = Phone1.Image;
    document.getElementById("name1").innerText = Phone1.name;
    document.getElementById("discountedPrice1").innerText =
      Phone1.discountedPrice;
    document.getElementById("originalPrice1").innerText = Phone1.originalPrice;
  
    var cost = Phone1.discountedPrice;
    qty(cost);
  }
  
   else if (selectedItem == Phone2.itemId) {
    document.getElementById("image").src = Phone2.Image;
    document.getElementById("name1").innerText = Phone2.name;
    document.getElementById("discountedPrice1").innerText =
      Phone2.discountedPrice;
    document.getElementById("originalPrice1").innerText = Phone2.originalPrice;
  
    var cost = Phone2.discountedPrice;
    qty(cost);
  } 
  
  else if (selectedItem == Phone3.itemId) {
    document.getElementById("image").src = Phone3.Image;
    document.getElementById("name1").innerText = Phone3.name;
    document.getElementById("discountedPrice1").innerText =
      Phone3.discountedPrice;
    document.getElementById("originalPrice1").innerText = Phone3.originalPrice;
  
    var cost = Phone3.discountedPrice;
    qty(cost);
  }
  
  else if (selectedItem == Phone4.itemId) {
    document.getElementById("image").src = Phone4.Image;
    document.getElementById("name1").innerText = Phone4.name;
    document.getElementById("discountedPrice1").innerText =
      Phone4.discountedPrice;
    document.getElementById("originalPrice1").innerText = Phone4.originalPrice;
  
    var cost = Phone4.discountedPrice;
    qty(cost);
  }
  
  function qty(cost) {
    document.getElementById("qty").onkeyup = function () {
      var amount = parseInt(cost);
      var quantity = parseInt(document.getElementById("qty").value);
  
      if (quantity > 1) {
        var total = quantity * amount;
        document.getElementById("total").innerText = "Total: KES " + total;
        userLocation(total);
      } 
      else {
        var total = 1 * amount;
        document.getElementById("total").innerText = "Total: KES " + total;
  
        userLocation(total);
      }
    };
  }
  
  function userLocation(total) {
    document.getElementById("Location").onchange = function () {
      var Karen = 500;
      var Kitsuru = 600;
      var Muthaiga = 700;
  
      var delivery = document.getElementById("Location").value;
  
      if (delivery == "Karen") {
        document.getElementById("total").innerText = total + Karen;
      } else if (delivery == "Kitsuru") {
        document.getElementById("total").innerText = total + Kitsuru;
      } else if (delivery == "Muthaiga") {
        document.getElementById("total").innerText = total + Muthaiga;
  }
    };
  }