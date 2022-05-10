/** ---------------------------- Dữ LIỆU ----------------------------- */
let productList = [
   {
      id: 1,
      categoriesId: 1,
      name: "Apple Watch Series 7 GPS Viền nhôm dây cao su",
      type: "Apple",
      status: ["dealhot"],
      quantity: 99,
      new_price: 9190000,
      old_price: 10900000,
      sizes: ["41mm", "45mm"],
      colors: ["Green", "White", "Blue", "Red"],
      short_description:
         "Đồng hồ thông minh thế hệ thứ 7 của Appe chính thức xuất hiện dưới tên Apple Watch Series 7, với thiết kế hiện đại cùng hai kích thước mặt là 41mm và 45mm để phù hợp nhiều người. Hỗ trợ các tính năng thông minh, theo dõi sức khoẻ cá nhân, trợ lý luyện tập thể thao.",
      categoryId: 1,
      rating_average: 5,
      review_count: 60,
      sell_count: 200,
      images: [
         "./../images/products/smart-watch/apple-watch7-1.png",
         "./../images/products/smart-watch/apple-watch7-2.png",
         "./../images/products/smart-watch/apple-watch7-3.png",
         "./../images/products/smart-watch/apple-watch7-4.png",
      ],
      tags: ["smart watch", "đồng hồ thông minh", "apple watch seri 7"],
   },
   {
      id: 2,
      categoriesId: 1,
      name: "Garmin Fenix 6 Sapphire dây silicone viền Titanium",
      type: "Garmin",
      status: ["dealhot"],
      quantity: 99,
      new_price: 15490000,
      old_price: 20990000,
      sizes: ["41mm", "45mm"],
      colors: ["Green", "White", "Pink", "Red"],
      short_description:
         "Đồng hồ thông minh Garmin Fenix 6 là thiết bị hướng tới đối tượng người dùng chơi những môn thể thao như: chạy bộ, leo núi,... đem đến cho người dùng một sản phẩm cao cấp với sự chính xác bậc nhất trong từng khả năng tracking cũng như hỗ trợ tối đa cho hoạt động thể thao chuyên nghiệp.",
      categoryId: 1,
      rating_average: 4.5,
      review_count: 60,
      sell_count: 200,
      images: [
         "./../images/products/smart-watch/garmin-fenix6-1.jpg",
         "./../images/products/smart-watch/garmin-fenix6-2.jpg",
         "./../images/products/smart-watch/garmin-fenix6-3.jpg",
         "./../images/products/smart-watch/garmin-fenix6-4.jpg",
      ],
      tags: ["smart watch", "đồng hồ thông minh", "garmin fenix 6"],
   },
   {
      id: 3,
      categoriesId: 1,
      name: "Đồng hồ thông minh Samsung Galaxy Watch 4",
      type: "Samsung",
      status: ["best-seller"],
      quantity: 99,
      new_price: 7300000,
      old_price: 8400000,
      sizes: ["41mm", "42mm", "45mm"],
      colors: ["Green", "White", "Pink", "Red"],
      short_description:
         "Nối tiếp sự thành công của các sản phẩm Samsung Watch trước, Samsung tiếp tục nghiên cứu và cho ra mắt sản phẩm đồng hồ thông minh mới mang tên đồng hồ thông minh Samsung Galaxy Watch4 Classic 42 mm, mẫu đồng hồ thông minh với thiết kế sang trọng.",
      categoryId: 1,
      rating_average: 4.2,
      review_count: 60,
      sell_count: 200,
      images: [
         "./../images/products/smart-watch/samsung-watch4-1.jpg",
         "./../images/products/smart-watch/samsung-watch4-2.jpg",
         "./../images/products/smart-watch/samsung-watch4-3.jpg",
         "./../images/products/smart-watch/samsung-watch4-4.jpg",
      ],
      tags: [
         "samgsung watch",
         "đồng hồ thông minh",
         "samsung galaxy watch 4 classic",
      ],
   },
   {
      id: 4,
      categoriesId: 2,
      name: "Vòng đeo tay thông minh Xiaomi Mi Band 6",
      type: "Xiaomi",
      status: ["best-seller", "dealhot"],
      quantity: 99,
      new_price: 7300000,
      old_price: 8400000,
      sizes: ["41mm", "42mm", "45mm"],
      colors: ["Green", "White", "Pink", "Red"],
      short_description:
         "Vòng đeo tay thông minh Mi Band 6 là phiên bản đáng mong đợi của nhà Xiaomi với thiết kế màn hình tràn viền cho bạn góc nhìn tốt hơn. Mặt kính cường lực chống trầy xước tốt cùng dây đeo cao su với thiết kế ôm trọn cổ tay, không thấm nước khi đeo, mang lại cho bạn cảm giác dễ chịu cả ngày dài.",
      rating_average: 4.2,
      review_count: 60,
      sell_count: 200,
      images: [
         "./../images/products/smart-bracelet/xiaomi-miband6-1.jpg",
         "./../images/products/smart-bracelet/xiaomi-miband6-2.jpg",
         "./../images/products/smart-bracelet/xiaomi-miband6-3.jpg",
         "./../images/products/smart-bracelet/xiaomi-miband6-4.jpg",
      ],
      tags: ["smart bracelet", "vòng đeo tay thông minh", "xiaomi miband 6"],
   },
   {
      id: 5,
      categoriesId: 2,
      name: "Vòng đeo tay thông minh Huawei Band 6 Chính Hãng",
      type: "Huawei",
      status: ["dealhot"],
      quantity: 99,
      new_price: 950000,
      old_price: 1300000,
      sizes: ["41mm", "42mm", "45mm"],
      colors: ["Green", "White", "Pink", "Red"],
      short_description:
         "Vòng đeo tay thông minh Huawei Band 6 sở hữu thiết kế năng động và khỏe khoắn, tương tự như trên những người tiền nhiệm Huawei Fit và Honor ES. Đặc điệt là phần vòng day đồng hồ được làm từ silicon mềm dẻo hướng đến sự trải nghiệm đeo tay mang cảm giác êm ái.",
      rating_average: 4.2,
      review_count: 60,
      sell_count: 200,
      images: [
         "./../images/products/smart-bracelet/huawei-band6-1.jpg",
         "./../images/products/smart-bracelet/huawei-band6-2.jpg",
         "./../images/products/smart-bracelet/huawei-band6-3.jpg",
         "./../images/products/smart-bracelet/huawei-band6-4.jpg",
      ],
      tags: ["smart bracelet", "vòng đeo tay thông minh", "huawei band 6"],
   },
   {
      id: 6,
      categoriesId: 2,
      name: "Đồng hồ thông minh Realme Band 2 Chính Hãng",
      type: "Realme",
      status: ["best-seller"],
      quantity: 99,
      new_price: 690000,
      old_price: 990000,
      sizes: ["41mm", "42mm", "45mm"],
      colors: ["Green", "White", "Pink", "Red"],
      short_description:
         "Đồng hồ Realme Band 2 là dòng sản phẩm vòng đeo tay thông minh, là thế hệ tiếp theo của dòng Realme Band được ra mắt năm ngoái do nhà sản xuất thiết bị di động Realme. Chiếc đồng hồ thông minh này sở hữu các tính năng có liên quan đến vấn đề theo dõi sức khỏe của con người",
      rating_average: 4.2,
      review_count: 60,
      sell_count: 200,
      images: [
         "./../images/products/smart-bracelet/realme-band2-1.jpg",
         "./../images/products/smart-bracelet/realme-band2-2.jpg",
         "./../images/products/smart-bracelet/realme-band2-3.jpg",
         "./../images/products/smart-bracelet/realme-band2-4.jpg",
      ],
      tags: ["smart bracelet", "vòng đeo tay thông minh", "realme band 2"],
   },
   {
      id: 7,
      categoriesId: 3,
      name: "Tai nghe Bluetooth Apple AirPods 2 Chính Hãng VN/A",
      type: "Apple",
      status: ["best-seller"],
      quantity: 99,
      new_price: 2790000,
      old_price: 3300000,
      sizes: ["41mm", "42mm", "45mm"],
      colors: ["Green", "White", "Pink", "Red"],
      short_description:
         "Vừa qua, Apple đã chính thức cho ra mắt chiếc tai nghe Airpods 2. Thế hệ thứ 2 lần này không có nhiều sự khác biệt so với thế hệ đầu về ngoại hình, trừ một số chi tiết về đèn báo hiệu cũng như ra mắt thêm phiên bản sạc không dây và sạc thường (sạc có dây).",
      rating_average: 4.2,
      review_count: 60,
      sell_count: 200,
      images: [
         "./../images/products/headphone/apple-aripod2-1.jpg",
         "./../images/products/headphone/apple-aripod2-2.jpg",
         "./../images/products/headphone/apple-aripod2-3.jpg",
         "./../images/products/headphone/apple-aripod2-4.jpg",
      ],
      tags: ["headphone", "tai nghe bluetooth", "apple airpod 2"],
   },
   {
      id: 8,
      categoriesId: 3,
      name: "Tai nghe không dây Samsung Galaxy Buds2",
      type: "Samsung",
      status: ["best-seller", "dealhot"],
      quantity: 99,
      new_price: 1850000,
      old_price: 2900000,
      sizes: ["41mm", "42mm", "45mm"],
      colors: ["Green", "White", "Pink", "Red"],
      short_description:
         "Thiết kế nhỏ gọn luôn là một trong những lợi thế của dòng tai nghe không dây. Sự tiện lợi của Buds2 giúp người dùng dễ dàng mang đi khắp mọi nơi. Sản phẩm được tích hợp công nghệ hiện đại giúp người tiêu dùng nhanh chóng đàm thoại hoặc đắm chìm trong không gian âm nhạc bất cứ đâu và bất kì lúc nào",
      rating_average: 4.2,
      review_count: 60,
      sell_count: 200,
      images: [
         "./../images/products/headphone/samsung-galaxybudp-1.jpg",
         "./../images/products/headphone/samsung-galaxybudp-2.jpg",
         "./../images/products/headphone/samsung-galaxybudp-3.jpg",
         "./../images/products/headphone/samsung-galaxybudp-4.jpg",
      ],
      tags: ["headphone", "tai nghe bluetooth", "samsung galaxy bud"],
   },
   {
      id: 9,
      categoriesId: 3,
      name: "Tai nghe không dây Sony WF-1000XM4 Chính hãng",
      type: "Sony",
      status: ["best-seller"],
      quantity: 99,
      new_price: 5490000,
      old_price: 6490000,
      sizes: ["41mm", "42mm", "45mm"],
      colors: ["Green", "White", "Pink", "Red"],
      short_description:
         "Tai nghe Sony WF-1000XM4 gây ấn tượng với người dùng bởi khả năng chống ồn cực kỳ hiệu quả, thứ đã làm nên thương hiệu của Sony. Tất cả là nhờ vào bộ xử lý tích hợp V1 với công nghệ cảm biến tiếng ồn kép thu tiếng ồn môi trường xung quanh. ",
      rating_average: 4.2,
      review_count: 60,
      sell_count: 200,
      images: [
         "./../images/products/headphone/sony-wf1000x-1.jpg",
         "./../images/products/headphone/sony-wf1000x-1.jpg",
         "./../images/products/headphone/sony-wf1000x-1.jpg",
         "./../images/products/headphone/sony-wf1000x-1.jpg",
      ],
      tags: ["headphone", "tai nghe bluetooth", "sony wf-1000mx4"],
   },
];

/** --------------------------------------- VARIABLES ---------------------------------------------------------------- */
let cart = [];
const cartStorage = JSON.parse(localStorage.getItem("cart"));
if (cartStorage) {
   cart = [...cartStorage];
}

let qty = 1;
/** -------------------------------------- DOM MANIPULATION --------------------------------------------------------------------------------------------- */

let dealhotWrapper = document.querySelector(".dealhot-list");
let bestSellerWrapper = document.getElementById("bestseller-products");
let shopListProducts = document.getElementById("shop-list");
let prodDetailWrapper = document.getElementById("prod-detail-wrapper");
let largeImg = document.getElementById("large-img");
let thumbnailImg = document.getElementById("thumbnail-img");
let productSummary = document.getElementById("prod-summary");
let colorList = document.querySelector(".color-filter-list");
let sizeList = document.querySelector(".prod-size-list");
let colorText = document.querySelector(".prod-colors > p");
let sizeText = document.querySelector(".prod-sizes > p");
let cartIcon = document.getElementById("cart-icon");
let tblCart = document.getElementById("tblCart");
let subtotalText = document.getElementById("subtotal-text");
let totalText = document.getElementById("total-text");
let shipText = document.getElementById("shippint-text");
let loginBtn = document.getElementById("login");

let loginEmailErr = document.getElementById("login-email-err");
let loginPasswordErr = document.getElementById("login-psw-err");
let usernameHeder = document.getElementById("username-header");

/** ------------------------------------------------------ EVENT HANDLERS ------------------------------------------------------------------------------- */

document.querySelector("body").addEventListener("click", function (e) {
   //  khi người dùng nhấn vào title của sản phẩm, tìm sản phẩm đàng được chọn
   // đẩy lên localStorage để trang chi tiết sản phẩm có thể lấy đc dữ liệy sản phẩm hiện taji
   // sau đó navigate tới trang chi tiết sp

   if (e.target.className == "prod-title-text") {
      let currentID = Number.parseInt(e.target.id);
      const [currItem] = productList.filter((item) => item.id === currentID);
      const data = JSON.stringify(currItem);
      localStorage.setItem("currentItem", data);
      window.location.href = "http://127.0.0.1:5500/product-details.html";
      window.location.replace("http://127.0.0.1:5500/product-details.html");
   }
});

// ----- Xử lí sự kiện chọn màu và size trong trang chi tiết sản phẩm
document.querySelector("body").addEventListener("click", (e) => {
   if (e.target.className.includes("color-item")) {
      const x = e.target.parentNode.parentNode.children;
      for (let i = 0; i < x.length; i++) {
         x[i].classList.remove("active-color");
      }
      e.target.parentElement.classList.add("active-color");

      colorText.innerHTML = "Màu sắc," + e.target.id;
   } else if (e.target.className.includes("size-item")) {
      const x = e.target.parentNode.children;
      for (let i = 0; i < x.length; i++) {
         x[i].classList.remove("active-size");
      }
      sizeText.innerHTML = "Kích thước," + e.target.id;
      e.target.classList.add("active-size");
   }
});

// ----- Xử lí sự kiện chọn icon giỏ hàng -> tới trang giỏ hàng
document.querySelector("body").addEventListener("click", (e) => {
   if (e.target.id === "cart-icon") {
      window.history.pushState(
         "cart",
         "Giỏ hàng",
         "http://127.0.0.1:5500/cart.html"
      );
      window.location.assign("http://127.0.0.1:5500/cart.html");
   }
});

// ----- Xử lí sự kiện tăng giảm số lượng sản phẩm
document.querySelector("body").addEventListener("click", (e) => {
   if (e.target.id === "quantity") {
      qty = e.target.value;
   }
});

// ----- Cập nhật số sản phẩm trong giỏ hàng
const cartBadge = document.getElementById("cart-badge");
if (cartBadge) {
   cartBadge.innerHTML = cart.length;
}

// ----- Xử lí sự kiện thêm vào giỏ hàng
document.querySelector("body").addEventListener("click", (e) => {
   if (e.target.className === "prod-addCart") {
      // console.log("hehe")
      // b1: check sp đã có trong giỏ hàng chưa: lấy id của item hiện tại từ localStorage, check với cart
      const currentProduct = JSON.parse(localStorage.getItem("currentItem"));
      const currId = Number.parseInt(currentProduct.id);

      console.log(currId);
      const alreadyInCart = cart.find((item) => item.id === currId);
      //  nếu đã có trong giỏ hàng: chỉ cộng dồn tăng  số lượng
      if (alreadyInCart) {
         cart.forEach(
            (item) =>
               function () {
                  if (item.id === currId) {
                     item.quantity += Number.parseInt(qty);
                  }
               }
         );
      }
      //  nếu chưa có thì push vào giỏ hàng các thông tin của 1 sản phẩm
      else {
         cart.push({
            id: currentProduct.id,
            name: currentProduct.name,
            price: currentProduct.new_price,
            quantity: Number.parseInt(qty),
            image: currentProduct.images[0],
         });
      }
      // renderCart(cart)
      document.getElementById("cart-badge").innerHTML = cart.length;
      localStorage.setItem("cart", JSON.stringify(cart));
      window.alert("Đã thêm sản phẩm vào giỏ hàng");
   }
});

// xoá sp khỏi giỏ hàng,khi ng dùng click vào icon thùng rác

document.querySelector("body").addEventListener("click", (e) => {
   // nếu ng dùng click vào bi-trash (icon thùng rác)
   if (e.target.className.includes("bi-trash")) {
      if (confirm("Xác nhận xoá sản phẩm này khỏi giỏ hàng?") === true) {
         // lấy id sản phẩm đang xoá hiện tjai
         const currID = Number.parseInt(e.target.id);
         let newCart = [];
         cart.forEach(function (item) {
            if (item.id !== currID) {
               newCart.push(item);
            }
         });
         // cart = [...cart.filter((item) => item.id !== currID)];
         renderCart(newCart);
         document.getElementById("cart-badge").innerHTML = newCart.length;
         console.log(newCart);
         localStorage.setItem("cart", JSON.stringify(newCart));
      }
   }
});

// xử lí sự kiện nhấn nút quay lại trang chủ
document.querySelector("body").addEventListener("click", (e) => {
   if (e.target.id === "back-to-home") {
      window.history.pushState(
         "home",
         "Trang chủ",
         "http://127.0.0.1:5500/index.html"
      );
      window.location.assign("http://127.0.0.1:5500/index.html");
   }
});

// Nhận vào số sao đánh giá, return 1 dãy các icon star
const starRating = (rate) => {
   // làm tròn 0.5: rating = 4.4 -> 4 sao và 1 nửa sao
   const roundRate = Math.floor(rate * 2 + 0.5) / 2;
   let d = Math.floor(roundRate);
   let m = roundRate - d;

   let res = "";
   for (let i = 0; i < d; i++) {
      res += '<i class="bi bi-star-fill yellow primary-text"></i>';
   }

   if (m == 0.5) {
      res += '<i class="bi bi-star-half yellow primary-text"></i>';
      for (let j = d + 1; j < 5; j++) {
         res += '<i class="bi bi-star yellow primary-text"></i>';
      }
   } else {
      for (let j = d; j < 5; j++) {
         res += '<i class="bi bi-star yellow primary-text"></i>';
      }
   }
   return res;
};

// chuyển đỏi tiền thành dạng vnđ
const formatVND = (num) => {
   return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
   }).format(num);
};

// kiểm tra email
const validateEmail = (email) => {
   if (email === "") {
      
      loginEmailErr.innerText = "Bạn không được để trống trường này";
      loginEmailErr.classList.remove("hide")
      return false;
   }
   // email chỉ chấp nhận các chữ cái a-z A-Z chữ số, dấu chấm, gạch ngang
   // có có ít nhẩt 1 dấu chấm theo sau kí hiệu @,
   let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
   if (!emailPattern.test(email)) {
      
      loginEmailErr.innerText = "Email không hợp lệ";
      loginEmailErr.classList.remove("hide")
      return false;
   }
   return true;
};

const validatePassword = (password) => {
   if (password === "") {
      loginPasswordErr.innerText = "Bạn không được để trống trường này";
      loginPasswordErr.classList.remove("hide")
      return false;
      
   }
   // mk phải có trên 4 chữ , các kí tự từ a -z, A-Z, các số và dấu châms
   let passwordPattern = /.{4,}([a-zA-Z0-9.])/;

   if (!passwordPattern.test(password)) {
      
      loginPasswordErr.innerText = "Mật khẩu phải có ít nhất 4 kí tự";
      loginPasswordErr.classList.remove("hide")
      return false;
   }
   return true;
}

if (loginBtn) {
   loginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const formData = document.getElementById("login-form").elements;
      var obj = {};
      for (var i = 0; i < formData.length; i++) {
         var item = formData.item(i);
         obj[item.name] = item.value;
      }
      console.log(obj.email);
      const data = {
         // user name là phần trước @: abc@gmail.com -> username: abc
         username: obj.email.split("@")[0],
      };
      let isOk = false;
      isOk = validateEmail(obj.email);
      isOk = validatePassword(obj.password);
      if (isOk){
         localStorage.setItem("username", JSON.stringify(data));
         window.history.pushState(
            "home",
            "Trang chủ",
            "http://127.0.0.1:5500/index.html"
         );
         window.location.assign("http://127.0.0.1:5500/index.html");
      }
   });
}

/** ------------------------------------------------------ RENDER UI --------------------------------------------------- */
// TODO: cập nhật giao diện danh sách sản phẩm hot theo dữ liệu
const renderDealHotProducts = (list) => {
   if (!dealhotWrapper) return;
   dealhotWrapper.innerHTML = "";
   list.forEach((item) => {
      const starlist = starRating(item.rating_average);
      dealhotWrapper.innerHTML += `
      <div class="prod__wrapper">
      <div class="prod-card bg-white position-relative">
          <img src=${item.images[0]} alt="" width="100%">
          <div class="prod-title my-4 px-2">
              <h4 class="prod-title-text" id=${item.id} >${item.name}</h4>
          </div>

          <div class="prod-rate flex-display my-4 px-2">
              <div class="prod-star">
                  ${starlist}
              </div>
              <span class="rate-counter primary-text">(${
                 item.review_count
              })</span>
          </div>

          <div class="prod-price my-4 px-2">
              <span class="price">${formatVND(item.new_price)}</span>
              <span class="old-price">${formatVND(item.old_price)}</span>
          </div>

          <div class="prod-action">
              <div class="wishlist">
                  <i class="bi bi-heart"></i>
              </div>
              <div class="add-cart">
                  <i class="bi bi-cart-plus"></i>
              </div>
          </div>

          <div class="prod-bottom">
              <span>Trả góp 0 &#37;</span>
          </div>

      </div>
  </div>
      `;
   });
};

const renderBestsellerProduct = (list) => {
   if (!bestSellerWrapper) return;
   bestSellerWrapper.innerHTML = "";

   list.forEach((item) => {
      const starlist = starRating(item.rating_average);
      bestSellerWrapper.innerHTML += `
      <div class="col-3 prod-card-large position-relative">
         <div class="prod-img">
            <img src=${item.images[0]} alt="anh" width="90%">
            <div class="prod-large-action">
               <div class="wishlist">
                  <i class="bi bi-heart-fill"></i>
               </div>
               <div class="add-cart">
                  <i class="bi bi-cart-plus-fill"></i>
               </div>
            </div>
         </div>

         <div class="prod-title my-4 px-2 " id="prod_title">
            <h4 class="prod-title-text" id=${item.id}>${item.name}</h4>
         </div>

         <div class="prod-rate flex-display my-4 px-2">
            <div class="prod-star">
                ${starlist}
            </div>
            <span class="rate-counter primary-text">(${
               item.review_count
            })</span>
         </div>

         <div class="prod-price my-4 px-2">
            <span class="price">${formatVND(item.new_price)}</span>
            <span class="old-price">${formatVND(item.old_price)}</span>
         </div>

      </div>
      `;
   });
};

const renderShop = (list) => {
   if (!shopListProducts) return;
   shopListProducts.innerHTML = "";
   list.forEach((item) => {
      const starlist = starRating(item.rating_average);
      shopListProducts.innerHTML += `
      <div class="col-3 prod-card-large ">
         <div class="prod-img position-relative">

            <img src=${item.images[0]} alt="anh" width="90%">
            <div class="prod-large-action">
               <div class="wishlist">
                  <i class="bi bi-heart-fill"></i>
               </div>
               <div class="add-cart">
                  <i class="bi bi-cart-plus-fill"></i>
               </div>
            </div>
         </div>

         <div class="prod-title my-4 px-2">
            <h4 class="prod-title-text" id=${item.id}>${item.name}</h4>
         </div>

         <div class="prod-rate flex-display my-4 px-2">
            <div class="prod-star">
               ${starlist}         
            </div>
            <span class="rate-counter primary-text">(${
               item.review_count
            })</span>
         </div>

         <div class="prod-price my-4 px-2">
            <span class="price">${formatVND(item.new_price)}</span>
            <span class="old-price">${formatVND(item.old_price)}</span>
         </div>

      </div>
      `;
   });
};

const renderProductDetail = () => {
   /** cập nhật ảnh sản phẩm */
   const product = JSON.parse(localStorage.getItem("currentItem"));
   if (!largeImg) return;
   let arrSlider = "";
   let thumbsSlider = "";
   for (let i = 0; i < product.images.length; i++) {
      arrSlider += `
      <div class="swiper-slide slide-img">
         <img src=${product.images[i]} alt="" width="80%">
      </div>`;

      thumbsSlider += `
      <div class="swiper-slide">
         <img src=${product.images[i]} alt="" width="100%">
      </div>
      `;
   }

   largeImg.innerHTML = arrSlider;
   thumbnailImg.innerHTML = thumbsSlider;

   /** cập nhật thông tin chi tiết  */
   let listSize = "";
   let listColor = "";
   for (let i = 0; i < product.colors.length; i++) {
      const color = product.colors[i].toLowerCase();
      listColor += `
      <li class="position-relative">
         <div class="bg-${color} color-item" id=${color}></div>
      </li>
      `;
   }

   for (let i = 0; i < product.sizes.length; i++) {
      listSize += `
      <li class="size-item" id=${product.sizes[i]}>${product.sizes[i]}</li>
      `;
   }

   let listStar = starRating(product.rating_average);

   productSummary.innerHTML = "";
   productSummary.innerHTML += `
   <h1 class="prodDetail-title">
      ${product.name}
   </h1>
   <div class="prod-meta">
      <div class="prod-model">Model: MYL92LL/A</div>
      <div class="prod-sku">SKU: BE45VGRT</div>
   </div>

   <div class="prod-rate flex-display my-4">
      <div class="prod-star">
         ${listStar}
      </div>
      <span class="rate-counter primary-text">(${product.review_count})</span>
   </div>
   <div class="prod-shortdesc">
      ${product.short_description}
   </div>
   <div class="prod-price">
      <span class="prod-newprice">${formatVND(product.new_price)}</span>
      <span class="prod-oldprice">${formatVND(product.old_price)}</span>
   </div>

   <div class="prod-colors">
      <p>Màu sắc</p>
      <ul class="color-filter-list">
         ${listColor}
      </ul>
   </div>

   <div class="prod-sizes">
      <p>Kích thước</p>
      <ul class="prod-size-list">
         ${listSize}
      </ul>
   </div>
   <div class="clear-option">Xoá lựa chọn</div>
   <div class="prod-sale">
      <div class="prod-sale-title">
         <i class="bi bi-gift"></i>
         <h5>Ưu đãi hấp dẫn</h5>
      </div>
      <div class="prod-sale-content">
         <p>[HOT] Thu cũ đổi mới - Lên đời giá cao - Trợ giá lên tới 1.000.000 đ</p>
         <p>Nhập WSP500 - Giảm 500k cho hoá đơn trên 5 triệu khi thanh toán qua VNPay hoặc TP Bank</p>
      </div>

   </div>

   <div class="prod-action-wrapper">
      <div class="prod-adjust-qty position-relative">
         <input type="number" id="quantity" name="quantity" min="1" max="5" value="1">
      </div>
      <div class="prod-addCart">
         Thêm vào giỏ
      </div>
      <div class="prod-addWishlist">
         <i class="bi bi-heart"></i>
      </div>

   </div>

   <div class="prod-tags">
      <i class="bi bi-tags"></i>
      <span>Đồng hồ, Apple Watch</span>
   </div>
   `;
};

const renderCart = (carts) => {
   if(!carts || !tblCart) return;
   tblCart.innerHTML = "";
   carts.forEach((item) => {
      tblCart.innerHTML += `
      <tr class="position-relative">
         <td class="cart-item-thumbnail">
            <a href="#">
               <img src=${item.image} alt="" width="100%">
            </a>
         </td>

         <td class="cart-item-name">
            ${item.name}
         </td>

         <td class="cart-item-unit">${formatVND(item.price)}</td>

         <td class="cart-item-qty">
            <div class="prod-adjust-qty position-relative">
               <input type="number" id="quantity" name="quantity" min="1" max="5" value=${
                  item.quantity
               }>
            </div>
         </td>

         <td class="cart-item-subtotal">${formatVND(
            item.price * item.quantity
         )}</td>
         <td class="cart-item-del">
            <i class="bi bi-trash" id=${item.id}></i>
         </td>
      </tr>
      `;
   });

   // cập nhật lại bảng tổng giá, phí giao hàng
   const stotal = carts.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
   );
   let ship = 45000;
   if (stotal === 0) {
      ship = 0;
   }
   shipText.innerHTML = formatVND(ship);
   subtotalText.innerHTML = formatVND(stotal);
   totalText.innerHTML = formatVND(stotal + ship);
};

/** ------------------------------------------------------ MAIN --------------------------------------------------- */

// lọc các sản phẩm trong mục deal hot
const dealhotData = productList.filter((item) =>
   item.status.includes("dealhot")
);

// lọc các sản phẩm trong mục best seller
const bestsellerData = productList.filter((item) =>
   item.status.includes("best-seller")
);

renderDealHotProducts(dealhotData);
renderBestsellerProduct(bestsellerData);
renderShop(productList);
renderProductDetail();
renderCart(cart);

const username = JSON.parse(localStorage.getItem('username'));

if(username)
   usernameHeder.innerHTML = username.username;

// ----------------------------- THƯ VIỆN SWIPER ANIMATION -----------------------------

// SWIPER
var swiper = new Swiper(".bannerSwiper", {
   slidesPerView: 1,
   loop: true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".blog-swiper", {
   slidesPerView: 3,
   spaceBetween: 30,
   loop: true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
});

var thumbs_swiper = new Swiper(".thumbnail-swiper", {
   loop: true,
   spaceBetween: 10,
   slidesPerView: 4,
   freeMode: true,
   watchSlidesProgress: true,
});
var prod_swiper = new Swiper(".prodImg-slider", {
   loop: true,
   spaceBetween: 10,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   thumbs: {
      swiper: thumbs_swiper,
   },
});
