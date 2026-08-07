window.ESP32_DATA = {
  categories: [
    {
      id: "chip",
      nav: "Chip Inti",
      title: "Taksonomi SoC Resmi Espressif",
      description:
        "Silikon resmi Espressif (System on Chip) yang menjadi otak dari seluruh ekosistem ESP32 — dari arsitektur Xtensa klasik hingga RISC-V generasi baru.",
      groups: [
        {
          label: "Seri ESP32 Original (Xtensa LX6 Dual-Core & Single-Core)",
          items: [
            { name: "ESP32", desc: "Chip generasi pertama. Dual-core Xtensa LX6 240MHz, Wi-Fi b/g/n + Bluetooth Classic & BLE. Fondasi hampir seluruh ekosistem.", tags: ["Wi-Fi", "BT+BLE", "240MHz"], image: "img/esp32.png" },
            { name: "ESP32-D0WDQ6", desc: "Chip dual-core andalan generasi pertama dalam kemasan QFN48 6×6 mm, menjadi fondasi mayoritas modul WROOM/WROVER awal.", tags: ["Dual-core", "QFN48 6x6"], image: "img/esp32-d0wdq6.png" },
            { name: "ESP32-D0WD", desc: "Varian dual-core dengan kemasan lebih ringkas QFN48 5×5 mm, dipakai pada modul-modul berukuran lebih kecil.", tags: ["Dual-core", "QFN48 5x5"], image: "img/esp32-d0wd.png" },
            { name: "ESP32-D2WD", desc: "Menyematkan 2 MB flash langsung di dalam chip (embedded flash), memangkas kebutuhan komponen memori eksternal.", tags: ["Embedded Flash", "2MB"], image: "img/esp32-d2wd.png" },
            { name: "ESP32-S0WD", desc: "Versi single-core hemat biaya dalam kemasan QFN48 5×5 mm, cocok untuk aplikasi ringan bertenaga rendah.", tags: ["Single-core", "Low-power"], image: "img/esp32-s0wd.png" },
            { name: "ESP32-PICO-D4", desc: "System-in-Package dual-core dengan 4 MB flash tertanam, menyatukan chip, kristal, dan flash dalam satu paket mini.", tags: ["SiP", "4MB Flash"], image: "img/esp32-pico-d4.png" },
            { name: "ESP32-PICO-V3", desc: "Revisi SiP dual-core dengan silicon stepping ECO V3 untuk stabilitas dan kompatibilitas software yang lebih baik.", tags: ["SiP", "ECO V3"], image: "img/esp32-pico-v3.png" },
            { name: "ESP32-PICO-V3-02", desc: "SiP dual-core kelas atas dengan 8 MB flash dan 2 MB PSRAM terintegrasi, mendukung aplikasi dengan kebutuhan memori lebih besar.", tags: ["SiP", "8MB Flash", "2MB PSRAM"], image: "img/esp32-pico-v3-02.png" },
          ],
        },
        {
          label: "Seri ESP32-S — Performa & Keamanan (Xtensa)",
          items: [
            { name: "ESP32-S2", desc: "Single-core LX7 240MHz, fokus USB OTG native dan efisiensi daya. Tanpa Bluetooth, hanya Wi-Fi.", tags: ["Wi-Fi", "USB OTG", "Single-core"], image: "img/esp32-s2.png" },
            { name: "ESP32-S2FH2 / S2FH4", desc: "Varian S2 dengan flash tertanam langsung 2 MB atau 4 MB, mengurangi jumlah komponen pada PCB.", tags: ["Embedded Flash", "USB OTG"], image: "img/esp32-s2fh4.png" },
            { name: "ESP32-S2FN4", desc: "Varian S2 dengan 4 MB embedded flash, ditujukan untuk desain board yang lebih ringkas.", tags: ["4MB Flash", "USB OTG"], image: "img/esp32-s2fn4.png" },
            { name: "ESP32-S3", desc: "Penerus populer ESP32. Dual-core LX7 240MHz, instruksi vektor untuk AI ringan, USB OTG native, BLE 5.0, lebih banyak GPIO.", tags: ["Wi-Fi", "BLE", "AI-accel", "USB OTG"], image: "img/esp32-s3.png" },
            { name: "ESP32-S3FH4R2 / S3R8 / S3R8V", desc: "Kumpulan varian SoC S3 dengan kombinasi embedded flash dan PSRAM berbeda untuk menyesuaikan kebutuhan memori aplikasi.", tags: ["Varian Memory", "PSRAM"], image: "img/esp32-s3-variants.png" },
          ],
        },
        {
          label: "Seri ESP32-C — Hemat Biaya & Ultra-Low Power (RISC-V)",
          items: [
            { name: "ESP32-C2 (ESP8684)", desc: "Varian termurah, RISC-V single-core 120MHz, Wi-Fi 4 + BLE 5.0, memori on-chip terbatas, ditujukan untuk produk volume tinggi.", tags: ["Wi-Fi", "BLE", "Low-cost"], image: "img/esp32-c2.png" },
            { name: "ESP32-C3", desc: "Single-core RISC-V 160MHz, Wi-Fi 4 + BLE 5.0, harga rendah. Pengganti umum untuk desain IoT sederhana / ESP8266.", tags: ["Wi-Fi", "BLE", "RISC-V"], image: "img/esp32-c3.png" },
            { name: "ESP32-C5", desc: "RISC-V single-core dengan dukungan Wi-Fi 6 dual-band 2.4/5 GHz dan BLE 5.0 untuk kebutuhan jaringan modern.", tags: ["Wi-Fi 6", "Dual-band", "BLE"], image: "img/esp32-c5.png" },
            { name: "ESP32-C6", desc: "RISC-V 160MHz, Wi-Fi 6 (2.4 GHz) + BLE 5.3 + 802.15.4 (Zigbee/Thread) dalam satu chip. Cocok untuk gateway Matter.", tags: ["Wi-Fi 6", "Thread/Zigbee", "BLE 5.3"], image: "img/esp32-c6.png" },
            { name: "ESP32-C61", desc: "Versi teroptimasi dari C6 yang difokuskan pada efisiensi biaya untuk implementasi IoT skala besar.", tags: ["RISC-V", "Cost-effective"], image: "img/esp32-c61.png" },
          ],
        },
        {
          label: "Seri ESP32-H — Wireless Ultra-Low Power (RISC-V, Non Wi-Fi)",
          items: [
            { name: "ESP32-H2", desc: "RISC-V single-core 96MHz tanpa Wi-Fi sama sekali — hanya BLE 5.2 + 802.15.4. Ditujukan sebagai node Thread/Zigbee hemat daya.", tags: ["BLE", "Thread/Zigbee", "No Wi-Fi"], image: "img/esp32-h2.png" },
            { name: "ESP32-H22", desc: "Varian kemasan lebih kecil dari H2, ditujukan untuk perangkat mesh sensor yang mengutamakan ukuran.", tags: ["Compact", "Thread/Zigbee"], image: "img/esp32-h22.png" },
          ],
        },
        {
          label: "Seri ESP32-P — High-Performance Multimedia (RISC-V, Non Wireless)",
          items: [
            { name: "ESP32-P4", desc: "Dual-core RISC-V 400MHz performa tinggi + LP core tanpa radio nirkabel — dilengkapi MIPI-CSI/DSI dan encoder H.264 untuk kamera resolusi tinggi dan display.", tags: ["No wireless", "High-perf", "MIPI/H.264"], image: "img/esp32-p4.png" },
          ],
        },
      ],
    },
    {
      id: "modul",
      nav: "Modul Antena",
      title: "Nomenklatur Modul Resmi & Opsi Antena",
      description:
        "SoC yang sudah dipasang di PCB kecil bersama flash, PSRAM opsional, dan antena (PCB tercetak atau konektor U.FL/IPEX) — siap disolder ke board turunan.",
      groups: [
        {
          label: "Berbasis ESP32 Original",
          items: [
            { name: "ESP32-WROOM-32 / 32D / 32U", desc: "Modul standar tanpa PSRAM, flash 4MB. Varian U menggunakan konektor IPEX/U.FL untuk antena eksternal.", tags: ["4MB flash", "PCB/U.FL"], image: "img/esp32-wroom-32.png" },
            { name: "ESP32-WROVER / WROVER-B / E / IE", desc: "Menambahkan 4MB/8MB PSRAM di atas WROOM — dibutuhkan untuk buffer kamera, UI grafis, atau data besar.", tags: ["PSRAM", "PCB/U.FL"], image: "img/esp32-wrover.png" },
            { name: "ESP32-MINI-1", desc: "Footprint sangat kecil (QFN), cocok untuk board dengan ruang terbatas seperti wearable.", tags: ["Compact"], image: "img/esp32-mini-1.png" },
          ],
        },
        {
          label: "Berbasis ESP32-S2",
          items: [
            { name: "ESP32-S2-WROOM", desc: "Modul standar S2 dengan antena PCB dan opsi PSRAM, fokus USB OTG.", tags: ["USB OTG", "PCB antenna"], image: "img/esp32-s2-wroom.png" },
            { name: "ESP32-S2-MINI-1 / S2-MINI", desc: "Versi ringkas modul S2 untuk board berukuran kecil.", tags: ["Compact"], image: "img/esp32-s2-mini.png" },
            { name: "ESP32-S2-SOLO", desc: "Varian ekonomis tanpa PSRAM, flash dasar 4MB.", tags: ["4MB flash"], image: "img/esp32-s2-solo.png" },
          ],
        },
        {
          label: "Berbasis ESP32-S3",
          items: [
            { name: "ESP32-S3-WROOM-1 / -1U", desc: "Modul flagship saat ini — tersedia dalam pilihan antena PCB atau IPEX, flash 4–16MB dan PSRAM 2–8MB.", tags: ["Up to 16MB flash", "AI-accel"], image: "img/esp32-s3-wroom-1.png" },
            { name: "ESP32-S3-MINI-1", desc: "S3 dalam footprint kecil, tetap membawa PSRAM opsional.", tags: ["Compact", "PSRAM opt."], image: "img/esp32-s3-mini-1.png" },
            { name: "ESP32-S3-WROOM-2", desc: "Kapasitas tertinggi di lini S3: flash 16MB Octal + PSRAM 8MB Octal untuk beban AI/multimedia.", tags: ["Octal PSRAM", "16MB Flash"], image: "img/esp32-s3-wroom-2.png" },
          ],
        },
        {
          label: "Berbasis RISC-V (C3, C6, H2)",
          items: [
            { name: "ESP32-C3-MINI-1", desc: "Modul C3 ringkas dengan antena PCB terintegrasi, populer untuk sensor node baterai.", tags: ["Compact", "RISC-V"], image: "img/esp32-c3-mini-1.png" },
            { name: "ESP32-C3-WROOM-02", desc: "Modul C3 ukuran standar, kompatibel pin dengan sejumlah modul S2.", tags: ["RISC-V"], image: "img/esp32-c3-wroom-02.png" },
            { name: "ESP32-C6-MINI-1", desc: "Modul C6 ringkas membawa Wi-Fi 6 dan radio 802.15.4 sekaligus.", tags: ["Wi-Fi 6", "Thread/Zigbee", "Compact"], image: "img/esp32-c6-mini-1.png" },
            { name: "ESP32-C6-WROOM-1", desc: "Modul C6 ukuran standar untuk board gateway Matter/Thread smart home generasi baru.", tags: ["Wi-Fi 6", "Thread/Zigbee"], image: "img/esp32-c6-wroom-1.png" },
            { name: "ESP32-H2-MINI-1", desc: "Modul H2 ringkas, radio 802.15.4 + BLE tanpa Wi-Fi, ditujukan untuk node sensor mesh/baterai.", tags: ["BLE", "Low-power", "No Wi-Fi"], image: "img/esp32-h2-mini-1.png" },
          ],
        },
      ],
    },
    {
      id: "devkit",
      nav: "Development Board",
      title: "Varian DevKit Resmi & General-Purpose",
      description:
        "Board referensi Espressif dan turunan umum — modul terpasang lengkap dengan USB-to-serial, tombol boot/reset, dan header pin, siap dipakai untuk prototyping.",
      groups: [
        {
          label: "ESP32 Original (Classic)",
          items: [
            { name: "ESP32-DevKitC V2 / V4", desc: "Board referensi resmi Espressif paling umum (modul WROOM-32/WROVER) dengan header dua baris standar.", tags: ["USB-UART", "Official"], image: "img/esp32-devkitc.png" },
            { name: "ESP32-WROVER-KIT", desc: "Versi lengkap dengan JTAG on-board, layar kecil, dan kamera header — untuk debugging mendalam.", tags: ["On-board JTAG", "LCD"], image: "img/esp32-wrover-kit.png" },
            { name: "ESP32-PICO-KIT V4", desc: "Board resmi berbasis modul SiP PICO-D4 dalam form factor yang jauh lebih ringkas dari DevKitC.", tags: ["PICO SiP", "Official"], image: "img/esp32-pico-kit.png" },
            { name: "ESP32 DevKit V1 (30-Pin)", desc: "Klon populer dengan desain sempit yang pas di tengah breadboard, pilihan favorit pemula.", tags: ["Breadboard-friendly", "30-Pin"], image: "img/esp32-devkit-v1-30.png" },
            { name: "ESP32 DevKit V1 / V4 (38-Pin)", desc: "Versi dengan pin lebih banyak (38-pin) namun menutup seluruh lebar breadboard standar saat dipasang.", tags: ["38-Pin"], image: "img/esp32-devkit-v1-38.png" },
            { name: "NodeMCU-32S", desc: "Mengadopsi tata letak ala NodeMCU ESP8266, memudahkan migrasi proyek dari ekosistem ESP8266.", tags: ["NodeMCU Layout"], image: "img/nodemcu-32s.png" },
            { name: "DOIT ESP32 DEVKIT V1", desc: "Salah satu klon paling awal dan paling banyak beredar, sering menjadi board referensi di tutorial.", tags: ["Popular Clone"], image: "img/doit-esp32-devkit-v1.png" },
            { name: "MH-ET LIVE ESP32 Minikit", desc: "Board kompak dengan harga terjangkau, populer di kalangan hobiis untuk prototipe cepat.", tags: ["Compact"], image: "img/mh-et-live-minikit.png" },
            { name: "WeMos D1 Mini ESP32", desc: "Form factor menyerupai D1 Mini ESP8266, memungkinkan pemakaian ulang shield dan casing yang sama.", tags: ["D1 Form Factor"], image: "img/wemos-d1-mini-esp32.png" },
            { name: "WeMos D1 R32", desc: "Mengikuti bentuk Arduino UNO, memudahkan penggunaan shield-shield berbasis Arduino pada ESP32.", tags: ["Arduino Uno Shape"], image: "img/wemos-d1-r32.png" },
          ],
        },
        {
          label: "ESP32-S2 Series",
          items: [
            { name: "ESP32-S2-Saola-1", desc: "Board minimalis resmi Espressif untuk eksplorasi USB OTG dan fitur dasar S2.", tags: ["USB OTG", "Official"], image: "img/esp32-s2-saola-1.png" },
            { name: "ESP32-S2-Kaluga-1", desc: "Kit ekspansi resmi dengan touch panel, LCD, dan kamera untuk demo HMI.", tags: ["LCD", "Touch", "HMI"], image: "img/esp32-s2-kaluga-1.png" },
            { name: "Adafruit Feather ESP32-S2", desc: "Mengikuti standar form factor Feather, kompatibel dengan puluhan FeatherWing ekosistem Adafruit.", tags: ["Feather", "Adafruit"], image: "img/adafruit-feather-esp32s2.png" },
            { name: "Adafruit QTPy ESP32-S2", desc: "Board ultra-mini dengan konektor STEMMA QT untuk sambungan sensor tanpa solder.", tags: ["Ultra-mini", "STEMMA QT"], image: "img/adafruit-qtpy-esp32s2.png" },
            { name: "SparkFun Thing Plus ESP32-S2", desc: "Board dengan slot baterai LiPo bawaan, dirancang untuk perangkat portabel bertenaga baterai.", tags: ["LiPo Charger"], image: "img/sparkfun-thing-plus-s2.png" },
          ],
        },
        {
          label: "ESP32-S3 Series",
          items: [
            { name: "ESP32-S3-DevKitC-1", desc: "Board referensi resmi S3 dengan header lengkap dan konektor USB native.", tags: ["USB native", "Official"], image: "img/esp32-s3-devkitc-1.png" },
            { name: "ESP32-S3-DevKitM-1", desc: "Varian ringkas resmi memakai modul S3-MINI-1.", tags: ["Compact", "Official"], image: "img/esp32-s3-devkitm-1.png" },
            { name: "ESP32-S3-Korvo-2", desc: "Board resmi yang difokuskan pada aplikasi audio AI seperti wake-word detection dan voice assistant.", tags: ["Audio AI", "Voice"], image: "img/esp32-s3-korvo-2.png" },
            { name: "ESP32-S3 DevKit N8R2 / N16R8", desc: "Varian S3 dengan kombinasi flash 8/16 MB dan PSRAM 2/8 MB, disesuaikan untuk kebutuhan AI dan buffer kamera.", tags: ["High PSRAM", "AI"], image: "img/esp32-s3-devkit-n16r8.png" },
            { name: "ESP32-S3 SuperMini", desc: "Board berukuran sangat kecil dengan konektor USB Type-C, favorit untuk proyek wearable dan ruang terbatas.", tags: ["SuperMini", "USB-C"], image: "img/esp32-s3-supermini.png" },
            { name: "Waveshare ESP32-S3-Zero", desc: "Form factor mini dengan tata letak pin rapat, cocok disisipkan ke dalam enclosure kecil.", tags: ["Zero Form Factor"], image: "img/waveshare-esp32-s3-zero.png" },
            { name: "LILYGO T-QT S3", desc: "Board S3 berukuran mungil dengan layar mini terpasang, ditujukan untuk perangkat display genggam.", tags: ["Mini LCD"], image: "img/lilygo-t-qt-s3.png" },
          ],
        },
        {
          label: "RISC-V (C3 / C6 / H2 Series)",
          items: [
            { name: "ESP32-C3-DevKitM-1", desc: "Board dasar C3 resmi dengan modul MINI-1.", tags: ["RISC-V", "Official"], image: "img/esp32-c3-devkitm-1.png" },
            { name: "ESP32-C3-DevKitC-02", desc: "Board C3 ukuran standar, kompatibel pin dengan devkit S2/S3.", tags: ["RISC-V", "Official"], image: "img/esp32-c3-devkitc-02.png" },
            { name: "ESP32-C6-DevKitC-1", desc: "Board referensi C6 untuk pengembangan Matter/Thread over Wi-Fi 6.", tags: ["Wi-Fi 6", "Thread", "Official"], image: "img/esp32-c6-devkitc-1.png" },
            { name: "ESP32-H2-DevKitM-1", desc: "Board referensi H2, fokus pengujian radio 802.15.4 tanpa Wi-Fi.", tags: ["802.15.4", "Official"], image: "img/esp32-h2-devkitm-1.png" },
            { name: "ESP32-C3 SuperMini", desc: "Board mini yang sangat populer untuk sensor IoT hemat daya berbasis baterai.", tags: ["SuperMini", "Low-power"], image: "img/esp32-c3-supermini.png" },
            { name: "LuatOS ESP32-C3 Core", desc: "Board C3 yang dioptimalkan untuk firmware berbasis Lua, mempercepat prototyping skrip.", tags: ["Lua Firmware"], image: "img/luatos-esp32-c3-core.png" },
            { name: "Seeed Studio XIAO ESP32C3", desc: "Board seukuran ibu jari dengan konektor USB-C, ideal untuk wearable dan proyek ruang sempit.", tags: ["XIAO", "USB-C"], image: "img/seeed-xiao-esp32c3.png" },
            { name: "Seeed Studio XIAO ESP32C6", desc: "Varian XIAO dengan chip C6, menambahkan dukungan Wi-Fi 6 dan Zigbee/Thread dalam bodi mini.", tags: ["XIAO", "Wi-Fi 6"], image: "img/seeed-xiao-esp32c6.png" },
          ],
        },
      ],
    },
    {
      id: "khusus",
      nav: "Board Fungsi Khusus",
      title: "Board Turunan & Fitur Khusus Pihak Ketiga",
      description:
        "Board fungsi khusus dari vendor seperti AI-Thinker, LILYGO, Heltec, M5Stack, Seeed, Olimex, dll — menambahkan kamera, audio codec, radio LoRa, PHY Ethernet, atau layar di atas modul ESP32.",
      groups: [
        {
          label: "Kamera & AI Vision",
          items: [
            { name: "AI-Thinker ESP32-CAM", desc: "Board kamera termurah dan paling populer, memakai sensor OV2640, slot microSD, dan LED flash. Butuh FTDI external.", tags: ["OV2640", "microSD"], image: "img/ai-thinker-esp32-cam.png" },
            { name: "ESP32-CAM-MB", desc: "Versi ESP32-CAM dengan daughterboard Micro-USB/Type-C bawaan sehingga bisa diprogram langsung tanpa FTDI.", tags: ["USB Daughterboard", "OV2640"], image: "img/esp32-cam-mb.png" },
            { name: "ESP32-S3-EYE / ESP32-S3-CAM", desc: "Devkit AI vision resmi/turunan berbasis S3, kamera + LCD + mic untuk demo pengenalan wajah/objek on-device.", tags: ["On-device AI", "LCD", "USB OTG"], image: "img/esp32-s3-eye.png" },
            { name: "Freenove ESP32-WROVER CAM", desc: "Board kamera berbasis WROVER dengan PSRAM lebih besar untuk resolusi gambar lebih tinggi.", tags: ["PSRAM", "OV2640"], image: "img/freenove-esp32-wrover-cam.png" },
            { name: "Seeed XIAO ESP32S3 Sense", desc: "Board sangat kecil dengan kamera dan mikrofon on-board, populer untuk proyek TinyML.", tags: ["TinyML", "Mic on-board", "XIAO"], image: "img/seeed-xiao-esp32s3-sense.png" },
            { name: "M5Stack Timer Camera / Unit CAM", desc: "Kamera terenkapsulasi dengan baterai dan RTC internal, siap pakai untuk time-lapse portabel.", tags: ["Enclosed", "RTC/Battery"], image: "img/m5stack-timer-camera.png" },
            { name: "M5Stack CamPSRAM", desc: "Varian kamera ultra-kompak dari M5Stack dengan tambahan PSRAM untuk pemrosesan gambar lebih lega.", tags: ["Compact", "PSRAM"], image: "img/m5stack-campsram.png" },
          ],
        },
        {
          label: "Audio & Voice Assistant",
          items: [
            { name: "AI-Thinker ESP32-A1S (Audio Kit)", desc: "Board dengan codec audio (AC101/ES8388), speaker amp, dan slot kartu — dasar banyak proyek speaker pintar DIY.", tags: ["Audio codec", "Speaker amp"], image: "img/ai-thinker-esp32-a1s.png" },
            { name: "Espressif ESP32-LyraT / LyraTD-MSC", desc: "Devkit audio referensi resmi dengan dual mic array untuk pengembangan voice assistant dan streaming audio.", tags: ["Dual mic", "Reference"], image: "img/esp32-lyrat.png" },
            { name: "ESP32-S3-BOX / BOX-3", desc: "Smart display sekaligus voice assistant berbasis S3 dengan dual microphone array untuk penangkapan suara jarak jauh.", tags: ["Smart Display", "Voice Assistant"], image: "img/esp32-s3-box.png" },
            { name: "M5Stack Atom Echo", desc: "Board voice-assistant mungil dengan mic dan speaker terintegrasi, populer di Home Assistant.", tags: ["Mic+Speaker", "Compact"], image: "img/m5stack-atom-echo.png" },
          ],
        },
        {
          label: "LoRa, GPS & LPWAN",
          items: [
            { name: "LILYGO TTGO LoRa32", desc: "Menggabungkan ESP32 dengan modul radio LoRa SX1276/78 dan OLED kecil di satu board.", tags: ["LoRa", "OLED"], image: "img/lilygo-ttgo-lora32.png" },
            { name: "Heltec WiFi LoRa 32 V1/V2/V3", desc: "Menggabungkan ESP32/S3, radio LoRa SX1262, dan layar OLED 0.96 inci — untuk gateway LoRaWAN portabel.", tags: ["LoRa", "OLED", "ESP32-S3"], image: "img/heltec-wifi-lora-32-v3.png" },
            { name: "LILYGO T-Beam (V1.1 / S3-SUPREME)", desc: "Kombinasi ESP32/S3, LoRa, dan GPS Neo-6M/M8N dengan holder baterai 18650 — board favorit untuk jaringan Meshtastic.", tags: ["LoRa", "GPS", "18650 Holder"], image: "img/lilygo-t-beam.png" },
            { name: "LILYGO T-3S3", desc: "Modul LoRa berbasis ESP32-S3 dengan ukuran lebih ringkas untuk node LoRa portabel.", tags: ["LoRa", "ESP32-S3"], image: "img/lilygo-t-3s3.png" },
            { name: "RAKwireless WisBlock RAK11200", desc: "Modul core berbasis ESP32 dalam ekosistem modular WisBlock untuk sensor LPWAN.", tags: ["Modular", "LPWAN"], image: "img/rakwireless-rak11200.png" },
          ],
        },
        {
          label: "Ethernet & Wired Network",
          items: [
            { name: "WT32-ETH01 (Wireless-Tag)", desc: "Board kompak dengan PHY Ethernet LAN8720 on-board dan port RJ45 — solusi murah untuk koneksi kabel.", tags: ["LAN8720", "Wired"], image: "img/wt32-eth01.png" },
            { name: "Olimex ESP32-POE / GATEWAY", desc: "Board dengan Power-over-Ethernet (PoE) dan port Ethernet, cocok untuk instalasi industri tanpa adaptor terpisah.", tags: ["PoE", "Industrial"], image: "img/olimex-esp32-poe.png" },
            { name: "LILYGO T-ETH-Lite", desc: "Board Ethernet ringkas berbasis ESP32-S3 atau C6 dengan konektor RJ45 langsung di board.", tags: ["ESP32-S3", "RJ45"], image: "img/lilygo-t-eth-lite.png" },
          ],
        },
        {
          label: "Display & HMI Panel",
          items: [
            { name: "LILYGO TTGO T-Display (ESP32 / S3)", desc: "Board saku dengan layar IPS ST7789 berwarna terpasang di PCB, populer untuk dashboard mini.", tags: ["IPS Display", "Pocket"], image: "img/lilygo-ttgo-t-display.png" },
            { name: "M5Stack Core2", desc: "Modul kotak dengan layar sentuh, baterai, IMU, dan speaker — platform HMI industri yang matang.", tags: ["Touchscreen", "Battery", "IMU"], image: "img/m5stack-core2.png" },
            { name: "M5StickC Plus", desc: "Bentuk stik dengan layar kecil, IMU, dan baterai — cocok untuk wearable dan alat ukur genggam.", tags: ["Wearable", "IMU"], image: "img/m5stickc-plus.png" },
            { name: "ESP32 Cheap Yellow Display (CYD)", desc: "Board edukasi ekonomis dengan layar sentuh TFT 2.8 inci, slot MicroSD, dan speaker audio dalam satu paket.", tags: ["2.8\" TFT Touch", "Cheap"], image: "img/esp32-cyd.png" },
          ],
        },
      ],
    },
    {
      id: "matrix",
      nav: "Perbandingan",
      title: "Matriks Perbandingan Chip Inti",
      description: "Ringkasan cepat untuk memilih chip berdasarkan kebutuhan radio, performa, dan arsitektur.",
      matrix: {
        head: ["Chip", "Core", "Clock", "Radio", "Catatan Utama"],
        rows: [
          ["ESP32", "Dual Xtensa LX6", "240MHz", "Wi-Fi + BT/BLE", "Pilihan default, ekosistem terluas"],
          ["ESP32-S2", "Single Xtensa LX7", "240MHz", "Wi-Fi saja", "USB OTG native, tanpa Bluetooth"],
          ["ESP32-S3", "Dual Xtensa LX7", "240MHz", "Wi-Fi + BLE 5.0", "Akselerasi AI ringan, GPIO banyak, USB OTG"],
          ["ESP32-C2", "Single RISC-V", "120MHz", "Wi-Fi + BLE 5.0", "Termurah, memori paling terbatas"],
          ["ESP32-C3", "Single RISC-V", "160MHz", "Wi-Fi + BLE 5.0", "Efisien biaya, penerus ESP8266"],
          ["ESP32-C5", "Single RISC-V", "240MHz", "Wi-Fi 6 (Dual Band) + BLE", "Dukungan Wi-Fi 2.4/5GHz"],
          ["ESP32-C6", "Single RISC-V", "160MHz", "Wi-Fi 6 + BLE 5.3 + 802.15.4", "Gateway Matter/Thread/Zigbee"],
          ["ESP32-H2", "Single RISC-V", "96MHz", "BLE 5.2 + 802.15.4", "Tanpa Wi-Fi, node Thread/Zigbee hemat daya"],
          ["ESP32-P4", "Dual RISC-V", "400MHz", "Tanpa radio", "Chip pendamping multimedia, MIPI/H.264"],
        ],
      },
    },
  ],
};
