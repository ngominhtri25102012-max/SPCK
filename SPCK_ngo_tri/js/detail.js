const containerDetail = document.querySelector(".detail-container");

const getDetailProduct = async () => {
  const path = new URLSearchParams(window.location.search);

  proDuctId = path.get("id");

  const response = await fetch("../../data.json");

  const data = await response.json();

  const findProDuctId = data.find(
    (item) => item.id.toString() === proDuctId.toString()
  );

  containerDetail.innerHTML = `
        <div class = "detail">
            <p class="theloaimcchitiet mt-4 text-uppercase text-muted fw-bold">SINH TỒN / PHIÊU LƯU / SÁNG TẠO</p>
            <h1 class="namemcchitiet display-4 fw-bold text-primary">Minecraft</h1>
            <section>
                <div id="carouselExampleCaptions" class="carousel slide rounded overflow-hidden shadow">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="${findProDuctId.img}"  class="d-block w-100" alt="Minecraft ảnh 1" />
                        </div>
                        <div class="carousel-item">
                            <img src="./img/images.jpeg" class="d-block w-100" alt="Minecraft ảnh 2" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </button>
                </div>
            </section>

            <section class="container mb-5">
                <h2 class="mb-4 text-center">Thông tin chi tiết</h2>
                <p class="noi_dung">
                    Minecraft là trò chơi điện tử sandbox được phát triển và phát hành bởi Mojang Studio. Trò chơi được
                    tạo bởi
                    Markus "Notch" Persson bằng ngôn ngữ lập trình Java...
                </p>
                <p class="noi_dung">
                    Trong Minecraft, người chơi khám phá thế giới 3D được tạo ngẫu nhiên, khai thác tài nguyên, xây dựng
                    công
                    trình, chiến đấu với quái vật và chế độ sáng tạo...
                </p>
                <img class="img img-fluid rounded shadow my-4 d-block mx-auto" src="./img/tải xuống (2).jpeg"
                    alt="Ảnh minh họa Minecraft" />
                <p class="noi_dung">
                    Minecraft được sử dụng trong giáo dục, nhận nhiều giải thưởng và được Microsoft mua lại với giá 2.5
                    tỷ USD.
                </p>
            </section>

            <!-- ===== ĐÁNH GIÁ ===== -->
            <section class="container mb-5">
                <h2 class="text-center">Xếp hạng & Đánh giá</h2>

                <!-- Bình luận 1 -->
                <div class="review mb-4 border rounded p-3 shadow-sm">
                    <div class="d-flex align-items-center mb-2">
                        <img class="binh_luan me-2" src="./img/tải xuống (1).jpeg" alt="" />
                        <strong>Phạm Thị Meozz</strong>
                    </div>
                    <div class="text-warning mb-2">★★★★★</div>
                    <p class="binh_luan_user">Game hay</p>
                    <p class="text-muted small">20 người thấy bình luận hữu ích</p>
                    <div class="traloi">
                        <button class="btn btn-sm btn-success me-2">Có</button>
                        <button class="btn btn-sm btn-outline-danger">Không</button>
                    </div>
                </div>

                <!-- Bình luận 2 -->
                <div class="review mb-4 border rounded p-3 shadow-sm">
                    <div class="d-flex align-items-center mb-2">
                        <img class="binh_luan me-2" src="./img/tải xuống (4).jpeg" alt="" />
                        <strong>Nguyễn Thị Đậu</strong>
                    </div>
                    <div class="text-warning mb-2">★★★★☆</div>
                    <p class="binh_luan_user">Game cũng rất hay</p>
                    <p class="text-muted small">12 người thấy bình luận hữu ích</p>
                    <div class="traloi">
                        <button class="btn btn-sm btn-success me-2">Có</button>
                        <button class="btn btn-sm btn-outline-danger">Không</button>
                    </div>
                </div>

                <!-- Bình luận 3 -->
                <div class="review mb-4 border rounded p-3 shadow-sm">
                    <div class="d-flex align-items-center mb-2">
                        <img class="binh_luan me-2" src="./img/tải xuống (6).jpeg" alt="" />
                        <strong>Nguyễn Hoàn Đức</strong>
                    </div>
                    <div class="text-danger mb-2">Người dùng không đánh giá</div>
                    <p class="binh_luan_user">Có ai bị lỗi giống vậy không giúp mình với</p>
                    <p class="text-muted small">12 người thấy bình luận hữu ích</p>
                    <div class="text-center">
                        <img class="img_cauhoi img-fluid" src="./img/Screenshot 2025-07-11 193757.png" alt=""
                            width="400" />
                    </div>
                    <div class="traloi">
                        <button class="btn btn-sm btn-success me-2">Có</button>
                        <button class="btn btn-sm btn-outline-danger">Không</button>
                    </div>
                </div>

            </section>

            <!-- ===== BÌNH LUẬN ===== -->
            <section class="container mb-5">
                <h3 class="text-center">Bình luận</h3>
                <div class="alert alert-warning text-center mt-3">
                    <i class="fa-solid fa-lock me-2"></i>Đăng nhập để tham gia thảo luận chủ đề này.
                </div>
                <p class="text-muted text-center">Chưa có bình luận nào</p>
            </section>
        </div>
    `;
};

getDetailProduct();
