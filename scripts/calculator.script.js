const lsNangLuong = {
  dien: 0.521,
  khitunhien: 2.04542,
  dau: 2.66155,
  lbp: 1.6,
  thanda: 0.33368,

  oto: 0.26885,
  xemay: 0.13252,
  tauhoa: 0.03546,
  xebuyt: 0.12999,
  maybay: 0.15,
  pha: 0.1127,

  raucuqua: 1,
  traicaytuoi: 0.4,
  hat: 1.2,
  cahaisan: 4.41,
  bo: 27,
  heo: 7,
  ga: 6,
  trung: 2,
  suadau: 2.53,
  biaruou: 1.1,

  quanao: 0.0000783,
  thietbidientu: 0.00001346,
  thucanchothucung: 0.0000333,
  okhachsan: 38.5,
  thietbidien: 3.267,
};

// Danh sách input
const inputs = document.querySelectorAll(".numberInput");

// Hộ gia đình
const ipdien = document.getElementById("ipdien");
const ipkhitunhien = document.getElementById("ipkhitunhien");
const ipdau = document.getElementById("ipdau");
const iplbp = document.getElementById("iplbp");
const ipthanda = document.getElementById("ipthanda");

// Phương tiện di chuyển
const ipoto = document.getElementById("ipoto");
const ipxemay = document.getElementById("ipxemay");
const iptauhoa = document.getElementById("iptauhoa");
const ipxebuyt = document.getElementById("ipxebuyt");
const ipmaybay = document.getElementById("ipmaybay");
const ippha = document.getElementById("ippha");

// Thức ăn
const ipraucuqua = document.getElementById("ipraucuqua");
const iptraicaytuoi = document.getElementById("iptraicaytuoi");
const iphat = document.getElementById("iphat");
const ipcahaisan = document.getElementById("ipcahaisan");
const ipheo = document.getElementById("ipheo");
const ipbo = document.getElementById("ipbo");
const ipga = document.getElementById("ipga");
const iptrung = document.getElementById("iptrung");
const ipsuadau = document.getElementById("ipsuadau");
const ipbiaruou = document.getElementById("ipbiaruou");

// Tiêu dùng
const ipquanao = document.getElementById("ipquanao");
const ipthietbidientu = document.getElementById("ipthietbidientu");
const ipthucanchothucung = document.getElementById("ipthucanchothucung");
const ipokhachsan = document.getElementById("ipokhachsan");
const ipthietbidien = document.getElementById("ipthietbidien");

// Kết quả
const ipTong = document.getElementById("ipTong");

// Lấy tất cả các nút và các thẻ nội dung
const buttons = document.querySelectorAll(".option");
const contents = document.querySelectorAll(".content");

// Thêm sự kiện click vào từng nút
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Thiết lập lại giá trị khi chọn
    this.onClearInput();

    // Bỏ class 'selected' khỏi tất cả các nút
    buttons.forEach((btn) => {
      let targetId = btn.getAttribute("data-target");
      btn.classList.remove("selected");
      let image = document.getElementById(`img-${targetId}`);

      if (image) {
        switch (targetId) {
          case "content1":
            image.src = "./images/home.png";
            break;

          case "content2":
            image.src = "./images/map.png";
            break;

          case "content3":
            image.src = "./images/burger.png";
            break;

          case "content4":
            image.src = "./images/money.png";
            break;

          default:
            break;
        }
      }
    });

    // Thêm class 'selected' vào nút được nhấn
    button.classList.add("selected");

    // Ẩn tất cả các thẻ nội dung
    contents.forEach((content) => content.classList.remove("active"));

    // Hiện thẻ nội dung tương ứng
    const targetId = button.getAttribute("data-target");

    const targetContent = document.getElementById(targetId);
    if (targetContent) {
      targetContent.classList.add("active");
    }

    const image = document.getElementById(`img-${targetId}`);
    if (image) {
      switch (targetId) {
        case "content1":
          image.src = "./images/home-selected.png";
          break;

        case "content2":
          image.src = "./images/map-selected.png";
          break;

        case "content3":
          image.src = "./images/burger-selected.png";
          break;

        case "content4":
          image.src = "./images/money-selected.png";
          break;

        default:
          break;
      }
    }
  });
});

function onClearInput() {
  // Hộ gia đình
  ipdien.value = "";
  ipkhitunhien.value = "";
  ipdau.value = "";
  iplbp.value = "";
  ipthanda.value = "";

  // Phương tiện di chuyển
  ipoto.value = "";
  ipxemay.value = "";
  iptauhoa.value = "";
  ipxebuyt.value = "";
  ipmaybay.value = "";
  ippha.value = "";

  // Thức ăn
  ipraucuqua.value = "";
  iptraicaytuoi.value = "";
  iphat.value = "";
  ipcahaisan.value = "";
  ipheo.value = "";
  ipbo.value = "";
  ipga.value = "";
  iptrung.value = "";
  ipsuadau.value = "";
  ipbiaruou.value = "";

  // Tiêu dùng
  ipquanao.value = "";
  ipthietbidientu.value = "";
  ipthucanchothucung.value = "";
  ipokhachsan.value = "";
  ipthietbidien.value = "";

  // Kết quả
  ipTong.value = "";
}

function onCalHoGiaDinh() {
  const tong =
    formatFloat(ipdien.value) * lsNangLuong.dien +
    formatFloat(ipkhitunhien.value) * lsNangLuong.khitunhien +
    formatFloat(ipdau.value) * lsNangLuong.dau +
    formatFloat(iplbp.value) * lsNangLuong.lbp +
    formatFloat(ipthanda.value) * lsNangLuong.thanda;
  result=tong.toFixed(2);
  ipTong.value = result.toString();
}

function onCalPhuongTienDiChuyen() {
  const tong =
    formatFloat(ipoto.value) * lsNangLuong.oto +
    formatFloat(ipxemay.value) * lsNangLuong.xemay +
    formatFloat(iptauhoa.value) * lsNangLuong.tauhoa +
    formatFloat(ipxebuyt.value) * lsNangLuong.xebuyt +
    formatFloat(ipmaybay.value) * lsNangLuong.maybay +
    formatFloat(ippha.value) * lsNangLuong.pha;
  result=tong.toFixed(2);
  ipTong.value = result.toString();
}

function onCalThucAn() {
  const tong =
    formatFloat(ipraucuqua.value) * lsNangLuong.raucuqua +
    formatFloat(iptraicaytuoi.value) * lsNangLuong.traicaytuoi +
    formatFloat(iphat.value) * lsNangLuong.hat +
    formatFloat(ipcahaisan.value) * lsNangLuong.cahaisan +
    formatFloat(ipheo.value) * lsNangLuong.heo +
    formatFloat(ipbo.value) * lsNangLuong.bo +
    formatFloat(ipga.value) * lsNangLuong.ga +
    formatFloat(iptrung.value) * lsNangLuong.trung +
    formatFloat(ipsuadau.value) * lsNangLuong.suadau +
    formatFloat(ipbiaruou.value) * lsNangLuong.biaruou;
  result=tong.toFixed(2);
  ipTong.value = result.toString();
}

function onCalTieuDung() {
  const tong =
    formatFloat(ipquanao.value) * lsNangLuong.quanao +
    formatFloat(ipthietbidientu.value) * lsNangLuong.thietbidientu +
    formatFloat(ipthucanchothucung.value) * lsNangLuong.thucanchothucung +
    formatFloat(ipokhachsan.value) * lsNangLuong.okhachsan +
    formatFloat(ipthietbidien.value) * lsNangLuong.thietbidien;
  result=tong.toFixed(2);
  ipTong.value = result.toString();
}

// Thêm sự kiện 'input' cho từng input
inputs.forEach((input) => {
  input.addEventListener("input", function () {
    // Loại bỏ tất cả ký tự không phải số
    let value = formatNumber(input.value);

    // Định dạng số: Dùng '.' làm dấu phân cách hàng nghìn và ',' làm dấu thập phân
    if (value.includes(".")) {
      // Xử lý phần số thập phân
      let parts = value.split(".");
      parts[0] = formatThousands(parts[0]); // Thêm dấu phân cách hàng nghìn cho phần nguyên
      input.value = parts[0] + "." + parts[1]; // Ghép lại chuỗi
    } else {
      // Chỉ có phần nguyên
      input.value = formatThousands(value);
    }
  });
});

function formatThousands(value) {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatNumber(value) {
  return value.replace(/[^0-9.\.]/g, "");
}

function formatFloat(value) {
  if (value == null || value.toString().trim().length == 0) {
    return 0;
  }
  return parseFloat(formatNumber(value));
}
