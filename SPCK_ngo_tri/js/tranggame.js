const fetchDataGame = async () => {
  let response = await fetch("./data.json");
  let data = await response.json();

  let theGame = document.querySelector("#the_game");
  
  theGame.innerHTML = data
    .map((item) => {
      return `
            <div class="card col khung_the_home mx-2">
                <img class="the_game_khu_home" src="${item.img}" class="card-img-top" alt="${item.name}">
                <div class="ca  rd-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">
                        Thể loại: ${item.the_loai}<br>
                        Giá: ${item.gia}br>
                        Thiết bị: ${item.thiet_bi}<br>
                        Giới thiệu: ${item.gioi_thieu}
                    </p>
                    <a href="game-detail.html?id=${item.id}" class="btn btn-primary xem_chi_tiet">Xem chi tiết</a>
                </div>
            </div>
   `;
    })
    .join("");
};

fetchDataGame();