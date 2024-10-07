function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max, decimals) {
  const str = (Math.random() * (max - min) + min).toFixed(decimals);
  return parseFloat(str);
}

const categories = ["Смартфон", "Ноутбук", "Телевизор", "Планшет", "Часы", "Камера", "Игровая консоль", "Наушники", "Монитор", "Принтер"];
const brands = ["ASUS", "Samsung", "Apple", "Sony", "Xiaomi", "LG", "HP", "Lenovo", "Acer", "Dell"];
const colors = ["черный", "белый", "серебристый", "золотистый", "синий", "красный"];
const osList = ["Android 14", "Windows 11", "iOS 15", "MacOS", "HarmonyOS"];
const processorList = [
  "Qualcomm Snapdragon 8 Gen 3", 
  "Apple M1", 
  "Intel Core i7", 
  "AMD Ryzen 7", 
  "Exynos 2100"
];
const descriptions = [
  "Высокопроизводительный и стильный продукт для современных пользователей.",
  "Отличный выбор для тех, кто ценит качество и надежность.",
  "Идеально подходит для работы и развлечений.",
  "Мощное устройство с множеством функций.",
  "Современный дизайн и передовые технологии."
];

const images = [
  "https://avatars.mds.yandex.net/get-mpic/11167279/2a0000018eb379ca1125de095ef74bed1f8c/600x800",
  "https://avatars.mds.yandex.net/get-mpic/11919271/img_id7688990112880663195.jpeg/600x800",
  "https://avatars.mds.yandex.net/get-mpic/11919271/img_id7419000859475586417.jpeg/600x800",
  "https://avatars.mds.yandex.net/get-mpic/11382628/img_id725408807528582003.jpeg/600x800",
  "https://avatars.mds.yandex.net/get-mpic/11492929/img_id5898187915297811115.jpeg/600x800"
];

const logoImages = [
  "https://avatars.mds.yandex.net/get-mpic/7978910/img_id8183009368190306787.png/orig",
  "https://avatars.mds.yandex.net/get-mpic/1719425/img_id7173009261170306787.png/orig",
  "https://avatars.mds.yandex.net/get-mpic/12239785/img_id6202809368250306777.png/orig",
  "https://avatars.mds.yandex.net/get-mpic/1182813/img_id9172003369210306758.png/orig",
  "https://avatars.mds.yandex.net/get-mpic/7891237/img_id6198009368912306782.png/orig"
];

const products = [];

for (let i = 1; i <= 100; i++) {
  const product = {
      id: i,
      price: getRandomInt(10000, 100000),
      "logo-title": brands[getRandomInt(0, brands.length - 1)],
      "logo-image": logoImages[getRandomInt(0, logoImages.length - 1)],
      "img1": images[getRandomInt(0, images.length - 1)],
      "img2": images[getRandomInt(0, images.length - 1)],
      "img3": images[getRandomInt(0, images.length - 1)],
      "img4": images[getRandomInt(0, images.length - 1)],
      title: `${categories[getRandomInt(0, categories.length - 1)]} ${brands[getRandomInt(0, brands.length - 1)]} ${getRandomInt(1, 10)}, ${getRandomInt(4, 32)}/256Gb, Dual nano SIM, ${colors[getRandomInt(0, colors.length - 1)]}`,
      opisanie: descriptions[getRandomInt(0, descriptions.length - 1)],
      star: getRandomFloat(1, 5, 1),
      color: colors[getRandomInt(0, colors.length - 1)],
      tip: getRandomInt(0, 1) === 0 ? "Global" : "Local",
      os: osList[getRandomInt(0, osList.length - 1)],
      prothessor: processorList[getRandomInt(0, processorList.length - 1)],
      harakteristike_prothessora: `частота: ${getRandomInt(2000, 3500)} МГц; количество ядер: ${getRandomInt(4, 8)}; видеопроцессор: ${["Adreno 750", "Mali-G78", "Apple GPU"][getRandomInt(0, 2)]}`,
      material_korpusa: ["пластик", "металл", "стекло"][getRandomInt(0, 2)],
      tip_korpusa: "классический",
      operativnaya_pamyat: getRandomInt(4, 32),
      tip_thashita: "IP68",
      kolichestvo_sim: "Dual nano SIM",
      dioganal_ekrana: `${getRandomFloat(5.0, 7.0, 1)}' (2400x1080), Full HD, AMOLED`,
      osobenoste_ekrana: "сенсорный экран",
      chastota_obnavleniya: getRandomInt(60, 165),
      PPI: getRandomInt(300, 450),
      bethprovodnov_interfeys: "Bluetooth, NFC, Wi-Fi, GPS",
      standart_wifi: "802.11be",
      versiya_bluetooth: 5.3,
      standart_svyathe: "2G, 3G, 4G LTE, 5G",
      gepothition: "BeiDou, GPS, Galileo, NavIC, QZSS, ГЛОНАСС",
      NFC: "есть",
      slot_kart_pamyate: "нет",
      function_zaradke: "беспроводная зарядка, быстрая зарядка",
      tip_razem: "USB-C",
      ssd: "256 ГБ",
      emkost_akuma: 5500,
      akum: "несъемный",
      dop_info: "ASUS ROG Phone 8*1 Адаптер мощностью 65 Вт*1 Кабель для передачи данных типа C-C*1 Руководство пользователя (гарантийный талон)*1 Чехол для мобильного телефона*1 PIN-код SIM-карты*1 Адаптер питания европейского стандарта*1",
      gabarite: "9.50х18.50х8.50 см",
      ves: 225,
      garantiya: "1 г.",
      function_kamera: "основная камера, тыловая вспышка, фронтальная камера, Макрообъектив, Сверхширокоугольный объектив",
      kolichstvo_kamer: 3,
      rathresheniye_osnovnoy_kamera: 50,
      max_rathresheniye_video: "7680x4320",
      video_semka: "8K (7680 x 4320) 24 fps, 4K (3840 x 2160) 30/60 fps, 1080p 30/60 fps, 720p 30/60 fps",
      rathresheniye_frontal_kamera: 32,
      vehod_naushnik: "mini jack 3.5 mm"
  };
  products.push(product);
}

console.log(JSON.stringify(products, null, 2));