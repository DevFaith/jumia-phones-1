var Phone1 = {
    Image: "/images/phone4.jpg",
    iphone: "image",
    name: "iphone SE",
    discountedPrice: "Ksh" + " " + 30000,
    originalPrice: "Ksh" + " " + 38500,
    itemId: "I001"
  };
  document.getElementById("image").src = Phone1.Image;
  document.getElementById("name1").innerText = Phone1.name;
  document.getElementById("discountedPrice1").innerText = Phone1.discountedPrice;
  document.getElementById("originalPrice1").innerText = Phone1.originalPrice;
  
  var Phone2 = {
    Image: "/images/phone3.jpg",
    iphone: "image2",
    name: "Iphone 10",
    discountedPrice: "Ksh" + " " + 55000,
    originalPrice: "Ksh" + " " + 60500,
    itemId: "I002"
  };
  document.getElementById("image2").src = Phone2.Image;
  document.getElementById("name2").innerText = Phone2.name;
  document.getElementById("discountedPrice2").innerText = Phone2.discountedPrice;
  document.getElementById("originalPrice2").innerText = Phone2.originalPrice;
  
  var Phone3 = {
    Image: "/images/phone2.jpg",
    iphone: "image3",
    name: "Iphone 11",
    discountedPrice: "Ksh" + " " + 60000,
    originalPrice: "Ksh" + " " + 70500,
    itemId: "I003"
  };
  document.getElementById("image3").src = Phone3.Image;
  document.getElementById("name3").innerText = Phone3.name;
  document.getElementById("discountedPrice3").innerText = Phone3.discountedPrice;
  document.getElementById("originalPrice3").innerText = Phone3.originalPrice;
  
  var Phone4 = {
    Image: "/images/phone1.jpg",
    iphone: "image4",
    name: "Iphone 12",
    discountedPrice: "Ksh" + " " + 70000,
    originalPrice: "Ksh" + " " + 75000,
    itemId: "I004",
  };
  document.getElementById("image4").src = Phone4.Image;
  document.getElementById("name4").innerText = Phone4.name;
  document.getElementById("discountedPrice4").innerText = Phone4.discountedPrice;
  document.getElementById("originalPrice4").innerText = Phone4.originalPrice;
  
  document.getElementById("phone1").onclick = function () {
    window.location.href = "/select.html" + "?" + Phone1.itemId;
  };
  
  document.getElementById("phone2").onclick = function () {
    window.location.href = "/select.html" + "?" + Phone2.itemId;
  };
  
  document.getElementById("phone3").onclick = function () {
    window.location.href = "/select.html" + "?" + Phone3.itemId;
  };
  
  document.getElementById("phone4").onclick = function () {
    window.location.href = "/select.html" + "?" + Phone4.itemId;
  };
  