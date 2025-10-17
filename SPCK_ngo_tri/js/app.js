const fetchData = async () => {
  let response = await fetch("./data.json");
  let data = await response.json();

  let theGame = document.querySelector("#the_game");

  let gioiHan = data.slice(0, 4);
  theGame.innerHTML = gioiHan
    .map((item) => {
      return `
            <div class="card col khung_the_home mx-2">
                <img class="the_game_khu_home" src="${item.img}" alt="${item.name}">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">
                        Thể loại:${item.the_loai}<br>
                        Giá: ${item.gia}<br>
                        Thiết bị: ${item.thiet_bi}<br>
                        Giới thiệu: ${item.gioi_thieu}
                    </p>
                    <a href="#" class="btn btn-primary xem_chi_tiet">Xem chi tiết</a>
                </div>
            </div>
        `;
    })
    .join("");
};
        // =========================================



fetchData();

