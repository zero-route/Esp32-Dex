// ESP32 Variant Catalog — Data Source
window.ESP32_DATA = {
  categories: [
    {
      id: "chip",
      nav: "Chip Inti",
      title: "Taksonomi SoC Resmi Espressif",
      description: "Silikon resmi Espressif (System on Chip) dari arsitektur Xtensa hingga RISC-V.",
      groups: [
        {
          label: "Seri ESP32 Original (Xtensa LX6 Dual-Core & Single-Core)",
          items: [
            { name: "ESP32", desc: "Dual-core Xtensa LX6 240MHz, Wi-Fi b/g/n + BT Classic & BLE.", tags: ["Wi-Fi", "BT+BLE", "240MHz"], image: "img/esp32.png" },
            { name: "ESP32-D0WDQ6", desc: "Dual-core Xtensa LX6, kemasan QFN48 6×6 mm.", tags: ["Dual-core", "QFN48 6x6"], image: "img/esp32.png" },
            { name: "ESP32-D0WD", desc: "Dual-core Xtensa LX6, kemasan QFN48 5×5 mm.", tags: ["Dual-core", "QFN48 5x5"], image: "img/esp32.png" },
            { name: "ESP32-D2WD", desc: "Dual-core Xtensa LX6, 2 MB embedded flash.", tags: ["Embedded Flash", "2MB"], image: "img/esp32.png" },
            { name: "ESP32-S0WD", desc: "Single-core Xtensa LX6, kemasan QFN48 5×5 mm.", tags: ["Single-core", "Low-power"], image: "img/esp32.png" },
            { name: "ESP32-PICO-D4", desc: "SiP Dual-core Xtensa LX6 + 4 MB flash tertanam.", tags: ["SiP", "4MB Flash"], image: "img/esp32.png" },
            { name: "ESP32-PICO-V3", desc: "SiP Dual-core Xtensa LX6, silicon stepping ECO V3.", tags: ["SiP", "ECO V3"], image: "img/esp32.png" },
            { name: "ESP32-PICO-V3-02", desc: "SiP Dual-core Xtensa LX6 + 8 MB flash + 2 MB PSRAM.", tags: ["SiP", "8MB Flash", "2MB PSRAM"], image: "img/esp32.png" },
          ],
        },
        {
          label: "Seri ESP32-S — Performa & Keamanan (Xtensa)",
          items: [
            { name: "ESP32-S2", desc: "Single-core Xtensa LX7 240MHz, USB OTG native, Wi-Fi (tanpa BT).", tags: ["Wi-Fi", "USB OTG", "Single-core"], image: "img/esp32-s2.png" },
            { name: "ESP32-S2FH2 / S2FH4", desc: "Single-core Xtensa LX7 + 2 MB / 4 MB embedded flash.", tags: ["Embedded Flash", "USB OTG"], image: "img/esp32-s2.png" },
            { name: "ESP32-S2FN4", desc: "Single-core Xtensa LX7 + 4 MB embedded flash.", tags: ["4MB Flash", "USB OTG"], image: "img/esp32-s2.png" },
            { name: "ESP32-S3", desc: "Dual-core Xtensa LX7 240MHz, Vektor AI, USB OTG, BLE 5.0.", tags: ["Wi-Fi", "BLE", "AI-accel", "USB OTG"], image: "img/esp32-s3.png" },
            { name: "ESP32-S3FH4R2 / S3R8 / S3R8V", desc: "SoC ESP32-S3 dengan variasi kapasitas embedded flash & PSRAM.", tags: ["Varian Memory", "PSRAM"], image: "img/esp32-s3.png" },
          ],
        },
        {
          label: "Seri ESP32-C — Hemat Biaya & Ultra-Low Power (RISC-V)",
          items: [
            { name: "ESP32-C2 (ESP8684)", desc: "Single-core RISC-V 120MHz, Wi-Fi 4 + BLE 5.0.", tags: ["Wi-Fi", "BLE", "Low-cost"], image: "img/esp32-c2.png" },
            { name: "ESP32-C3", desc: "Single-core RISC-V 160MHz, Wi-Fi 4 + BLE 5.0.", tags: ["Wi-Fi", "BLE", "RISC-V"], image: "img/esp32-c3.png" },
            { name: "ESP32-C5", desc: "Single-core RISC-V, Wi-Fi 6 dual-band (2.4/5 GHz) + BLE 5.0.", tags: ["Wi-Fi 6", "Dual-band", "BLE"], image: "img/esp32-c5.png" },
            { name: "ESP32-C6", desc: "Single-core RISC-V 160MHz, Wi-Fi 6 + BLE 5.3 + 802.15.4 (Zigbee/Thread).", tags: ["Wi-Fi 6", "Thread/Zigbee", "BLE 5.3"], image: "img/esp32-c6.png" },
            { name: "ESP32-C61", desc: "Single-core RISC-V, Wi-Fi 6 + BLE teroptimasi cost-effective.", tags: ["RISC-V", "Cost-effective"], image: "img/esp32-c61.png" },
          ],
        },
        {
          label: "Seri ESP32-E — High-Performance Wireless Gateway (RISC-V)",
          items: [
            { name: "ESP32-E22", desc: "Dual-core RISC-V 500MHz, Wi-Fi 6E + Thread Border Router + BLE.", tags: ["RISC-V", "Wi-Fi 6E", "Thread Border Router", "BLE"], image: "img/esp32-e22.png" },
          ],
        },
        {
          label: "Seri ESP32-H — Wireless Ultra-Low Power (RISC-V, Non Wi-Fi)",
          items: [
            { name: "ESP32-H2", desc: "Single-core RISC-V 96MHz, BLE 5.2 + 802.15.4 (tanpa Wi-Fi).", tags: ["BLE", "Thread/Zigbee", "No Wi-Fi"], image: "img/esp32-h2.png" },
            { name: "ESP32-H22", desc: "Single-core RISC-V, BLE 5.2 + 802.15.4 (kemasan ultra-kompak).", tags: ["Compact", "Thread/Zigbee"], image: "img/esp32-h2.png" },
          ],
        },
        {
          label: "Seri ESP32-P — High-Performance Multimedia (RISC-V, Non Wireless)",
          items: [
            { name: "ESP32-P4", desc: "Dual-core RISC-V 400MHz + LP core, MIPI-CSI/DSI, H.264 (tanpa radio).", tags: ["No wireless", "High-perf", "MIPI/H.264"], image: "img/esp32-p4.png" },
          ],
        },
      ],
    },
    {
      id: "modul",
      nav: "Modul Antena",
      title: "Nomenklatur Modul Resmi & Opsi Antena",
      description: "SoC terintegrasi PCB bersama Flash, PSRAM, dan Antena.",
      groups: [
        {
          label: "Berbasis ESP32 Original",
          items: [
            { name: "ESP32-WROOM-32 / 32D / 32U", desc: "Modul ESP32, 4MB Flash (U: konektor IPEX/U.FL).", tags: ["4MB flash", "PCB/U.FL"], image: "img/esp32-wroom-32.png" },
            { name: "ESP32-WROVER / WROVER-B / E / IE", desc: "Modul ESP32 + 4MB/8MB PSRAM.", tags: ["PSRAM", "PCB/U.FL"], image: "img/esp32-wrover.png" },
            { name: "ESP32-MINI-1", desc: "Modul ESP32 footprint ultra-kecil (QFN).", tags: ["Compact"], image: "img/esp32-mini-1.png" },
          ],
        },
        {
          label: "Berbasis ESP32-S2",
          items: [
            { name: "ESP32-S2-WROOM", desc: "Modul ESP32-S2, USB OTG, antena PCB/IPEX.", tags: ["USB OTG", "PCB antenna"], image: "img/esp32-s2-wroom.png" },
            { name: "ESP32-S2-MINI-1 / S2-MINI", desc: "Modul ESP32-S2 ukuran kompak.", tags: ["Compact"], image: "img/esp32-s2-mini.png" },
            { name: "ESP32-S2-SOLO", desc: "Modul ESP32-S2 tanpa PSRAM, 4MB Flash.", tags: ["4MB flash"], image: "img/esp32-s2-solo.png" },
          ],
        },
        {
          label: "Berbasis ESP32-S3",
          items: [
            { name: "ESP32-S3-WROOM-1 / -1U", desc: "Modul ESP32-S3, Flash 4-16MB, PSRAM 2-8MB.", tags: ["Up to 16MB flash", "AI-accel"], image: "img/esp32-s3-wroom-1.png" },
            { name: "ESP32-S3-MINI-1", desc: "Modul ESP32-S3 footprint ringkas.", tags: ["Compact", "PSRAM opt."], image: "img/esp32-s3-mini-1.png" },
            { name: "ESP32-S3-WROOM-2", desc: "Modul ESP32-S3, 16MB Octal Flash + 8MB Octal PSRAM.", tags: ["Octal PSRAM", "16MB Flash"], image: "img/esp32-s3-wroom-2.png" },
          ],
        },
        {
          label: "Berbasis RISC-V (C3, C6, H2)",
          items: [
            { name: "ESP32-C3-MINI-1", desc: "Modul ESP32-C3 ringkas, antena PCB.", tags: ["Compact", "RISC-V"], image: "img/esp32-c3-mini-1.png" },
            { name: "ESP32-C3-WROOM-02", desc: "Modul ESP32-C3 form factor standar.", tags: ["RISC-V"], image: "img/esp32-c3-wroom-02.png" },
            { name: "ESP32-C6-MINI-1", desc: "Modul ESP32-C6 ringkas, Wi-Fi 6 + 802.15.4.", tags: ["Wi-Fi 6", "Thread/Zigbee", "Compact"], image: "img/esp32-c6-mini-1.png" },
            { name: "ESP32-C6-WROOM-1", desc: "Modul ESP32-C6 standar, Wi-Fi 6 + 802.15.4.", tags: ["Wi-Fi 6", "Thread/Zigbee"], image: "img/esp32-c6-wroom-1.png" },
            { name: "ESP32-H2-MINI-1", desc: "Modul ESP32-H2 ringkas, BLE + 802.15.4.", tags: ["BLE", "Low-power", "No Wi-Fi"], image: "img/esp32-h2-mini-1.png" },
          ],
        },
      ],
    },
    {
      id: "devkit",
      nav: "Development Board",
      title: "Varian DevKit Resmi & General-Purpose",
      description: "Board pengembang siap pakai dengan USB-to-Serial, regulator, dan pin header.",
      groups: [
        {
          label: "ESP32 Original (Classic)",
          items: [
            { name: "ESP32-DevKitC V2 / V4", desc: "Board referensi resmi Espressif (WROOM-32/WROVER).", tags: ["USB-UART", "Official"], image: "img/esp32-devkitc.png" },
            { name: "ESP32-WROVER-KIT", desc: "Devkit resmi ESP32 dengan JTAG, LCD header, dan kamera.", tags: ["On-board JTAG", "LCD"], image: "img/esp32-wrover-kit.png" },
            { name: "ESP32-PICO-KIT V4", desc: "Board referensi berbasis SiP ESP32-PICO-D4.", tags: ["PICO SiP", "Official"], image: "img/esp32-pico-kit.png" },
            { name: "ESP32 DevKit V1 (30-Pin)", desc: "Board 30-pin, kompatibel dengan breadboard.", tags: ["Breadboard-friendly", "30-Pin"], image: "img/esp32-devkit-v1-30.png" },
            { name: "ESP32 DevKit V1 / V4 (38-Pin)", desc: "Board 38-pin dengan ekspansi GPIO lebih banyak.", tags: ["38-Pin"], image: "img/esp32-devkit-v1-38.png" },
            { name: "NodeMCU-32S", desc: "Board ESP32 dengan layout form-factor NodeMCU.", tags: ["NodeMCU Layout"], image: "img/nodemcu-32s.png" },
            { name: "DOIT ESP32 DEVKIT V1", desc: "Board klon ESP32 30-pin standar.", tags: ["Popular Clone"], image: "img/doit-esp32-devkit-v1.png" },
            { name: "MH-ET LIVE ESP32 Minikit", desc: "Board ESP32 ringkas untuk prototyping.", tags: ["Compact"], image: "img/mh-et-live-minikit.png" },
            { name: "WeMos D1 Mini ESP32", desc: "Form-factor WeMos D1 Mini berbasis ESP32.", tags: ["D1 Form Factor"], image: "img/wemos-d1-mini-esp32.png" },
            { name: "WeMos D1 R32", desc: "Form-factor Arduino UNO berbasis ESP32.", tags: ["Arduino Uno Shape"], image: "img/wemos-d1-r32.png" },
          ],
        },
        {
          label: "ESP32-S2 Series",
          items: [
            { name: "ESP32-S2-Saola-1", desc: "Board referensi resmi ESP32-S2.", tags: ["USB OTG", "Official"], image: "img/esp32-s2-saola-1.png" },
            { name: "ESP32-S2-Kaluga-1", desc: "Devkit resmi ESP32-S2 dengan touch, LCD, dan kamera.", tags: ["LCD", "Touch", "HMI"], image: "img/esp32-s2-kaluga-1.png" },
            { name: "Adafruit Feather ESP32-S2", desc: "Form-factor Adafruit Feather berbasis ESP32-S2.", tags: ["Feather", "Adafruit"], image: "img/adafruit-feather-esp32s2.png" },
            { name: "Adafruit QTPy ESP32-S2", desc: "Board ultra-mini ESP32-S2 dengan STEMMA QT.", tags: ["Ultra-mini", "STEMMA QT"], image: "img/adafruit-qtpy-esp32s2.png" },
            { name: "SparkFun Thing Plus ESP32-S2", desc: "Board ESP32-S2 dengan sirkuit charger LiPo.", tags: ["LiPo Charger"], image: "img/sparkfun-thing-plus-s2.png" },
          ],
        },
        {
          label: "ESP32-S3 Series",
          items: [
            { name: "ESP32-S3-DevKitC-1", desc: "Board referensi resmi ESP32-S3.", tags: ["USB native", "Official"], image: "img/esp32-s3-devkitc-1.png" },
            { name: "ESP32-S3-DevKitM-1", desc: "Board referensi resmi ESP32-S3 berukuran mini.", tags: ["Compact", "Official"], image: "img/esp32-s3-devkitm-1.png" },
            { name: "ESP32-S3-Korvo-2", desc: "Board audio AI resmi berbasis ESP32-S3.", tags: ["Audio AI", "Voice"], image: "img/esp32-s3-korvo-2.png" },
            { name: "ESP32-S3 DevKit N8R2 / N16R8", desc: "Board ESP32-S3 dengan Flash 8/16 MB & PSRAM 2/8 MB.", tags: ["High PSRAM", "AI"], image: "img/esp32-s3-devkit-n16r8.png" },
            { name: "ESP32-S3 SuperMini", desc: "Board ESP32-S3 ultra-kecil dengan USB-C.", tags: ["SuperMini", "USB-C"], image: "img/esp32-s3-supermini.png" },
            { name: "Waveshare ESP32-S3-Zero", desc: "Board ESP32-S3 mini form-factor zero.", tags: ["Zero Form Factor"], image: "img/waveshare-esp32-s3-zero.png" },
            { name: "LILYGO T-QT S3", desc: "Board ESP32-S3 mini dilengkapi layar LCD.", tags: ["Mini LCD"], image: "img/lilygo-t-qt-s3.png" },
          ],
        },
        {
          label: "RISC-V (C3 / C6 / H2 Series)",
          items: [
            { name: "ESP32-C3-DevKitM-1", desc: "Board referensi resmi ESP32-C3 (MINI-1).", tags: ["RISC-V", "Official"], image: "img/esp32-c3-devkitm-1.png" },
            { name: "ESP32-C3-DevKitC-02", desc: "Board referensi resmi ESP32-C3 standar.", tags: ["RISC-V", "Official"], image: "img/esp32-c3-devkitc-02.png" },
            { name: "ESP32-C6-DevKitC-1", desc: "Board referensi resmi ESP32-C6 (Wi-Fi 6 / Thread).", tags: ["Wi-Fi 6", "Thread", "Official"], image: "img/esp32-c6-devkitc-1.png" },
            { name: "ESP32-H2-DevKitM-1", desc: "Board referensi resmi ESP32-H2 (802.15.4 / BLE).", tags: ["802.15.4", "Official"], image: "img/esp32-h2-devkitm-1.png" },
            { name: "ESP32-C3 SuperMini", desc: "Board ESP32-C3 ultra-kecil hemat daya.", tags: ["SuperMini", "Low-power"], image: "img/esp32-c3-supermini.png" },
            { name: "LuatOS ESP32-C3 Core", desc: "Board ESP32-C3 teroptimasi untuk Lua firmware.", tags: ["Lua Firmware"], image: "img/luatos-esp32-c3-core.png" },
            { name: "Seeed Studio XIAO ESP32C3", desc: "Board ESP32-C3 seukuran ibu jari dengan USB-C.", tags: ["XIAO", "USB-C"], image: "img/seeed-xiao-esp32c3.png" },
            { name: "Seeed Studio XIAO ESP32C6", desc: "Board ESP32-C6 seukuran ibu jari (Wi-Fi 6 / Zigbee).", tags: ["XIAO", "Wi-Fi 6"], image: "img/seeed-xiao-esp32c6.png" },
          ],
        },
      ],
    },
    {
      id: "khusus",
      nav: "Board Fungsi Khusus",
      title: "Board Turunan & Fitur Khusus Pihak Ketiga",
      description: "Board dengan perantara sensor Kamera, Audio, LoRa, Ethernet, atau Display.",
      groups: [
        {
          label: "Kamera & AI Vision",
          items: [
            { name: "AI-Thinker ESP32-CAM", desc: "Board kamera ESP32 + OV2640 + MicroSD.", tags: ["OV2640", "microSD"], image: "img/ai-thinker-esp32-cam.png" },
            { name: "ESP32-CAM-MB", desc: "ESP32-CAM dengan programmer USB terintegrasi.", tags: ["USB Daughterboard", "OV2640"], image: "img/esp32-cam-mb.png" },
            { name: "ESP32-S3-EYE / ESP32-S3-CAM", desc: "Devkit AI Vision ESP32-S3 + Kamera + LCD + Mic.", tags: ["On-device AI", "LCD", "USB OTG"], image: "img/esp32-s3-eye.png" },
            { name: "Freenove ESP32-WROVER CAM", desc: "Board kamera ESP32 berbasis WROVER (PSRAM).", tags: ["PSRAM", "OV2640"], image: "img/freenove-esp32-wrover-cam.png" },
            { name: "Seeed XIAO ESP32S3 Sense", desc: "Board mini ESP32-S3 + Kamera + Mic (TinyML).", tags: ["TinyML", "Mic on-board", "XIAO"], image: "img/seeed-xiao-esp32s3-sense.png" },
            { name: "M5Stack Timer Camera / Unit CAM", desc: "Kamera portabel ESP32 dengan RTC & Baterai.", tags: ["Enclosed", "RTC/Battery"], image: "img/m5stack-timer-camera.png" },
            { name: "M5Stack CamPSRAM", desc: "Kamera ultra-kompak ESP32 + PSRAM.", tags: ["Compact", "PSRAM"], image: "img/m5stack-campsram.png" },
          ],
        },
        {
          label: "Audio & Voice Assistant",
          items: [
            { name: "AI-Thinker ESP32-A1S (Audio Kit)", desc: "Board ESP32 + Audio Codec + Amp Speaker.", tags: ["Audio codec", "Speaker amp"], image: "img/ai-thinker-esp32-a1s.png" },
            { name: "Espressif ESP32-LyraT / LyraTD-MSC", desc: "Devkit audio resmi ESP32 dengan Dual Mic array.", tags: ["Dual mic", "Reference"], image: "img/esp32-lyrat.png" },
            { name: "ESP32-S3-BOX / BOX-3", desc: "Smart display & Voice Assistant berbasis ESP32-S3.", tags: ["Smart Display", "Voice Assistant"], image: "img/esp32-s3-box.png" },
            { name: "M5Stack Atom Echo", desc: "Voice assistant mini berbasis ESP32 + Mic + Speaker.", tags: ["Mic+Speaker", "Compact"], image: "img/m5stack-atom-echo.png" },
          ],
        },
        {
          label: "LoRa, GPS & LPWAN",
          items: [
            { name: "LILYGO TTGO LoRa32", desc: "ESP32 + Radio LoRa SX1276/78 + OLED.", tags: ["LoRa", "OLED"], image: "img/lilygo-ttgo-lora32.png" },
            { name: "Heltec WiFi LoRa 32 V1/V2/V3", desc: "ESP32/S3 + LoRa SX1262 + OLED 0.96\".", tags: ["LoRa", "OLED", "ESP32-S3"], image: "img/heltec-wifi-lora-32-v3.png" },
            { name: "LILYGO T-Beam (V1.1 / S3-SUPREME)", desc: "ESP32/S3 + LoRa + GPS + Holder Baterai 18650.", tags: ["LoRa", "GPS", "18650 Holder"], image: "img/lilygo-t-beam.png" },
            { name: "LILYGO T-3S3", desc: "ESP32-S3 + Modul LoRa ringkas.", tags: ["LoRa", "ESP32-S3"], image: "img/lilygo-t-3s3.png" },
            { name: "RAKwireless WisBlock RAK11200", desc: "Modul core ESP32 ekosistem modular WisBlock.", tags: ["Modular", "LPWAN"], image: "img/rakwireless-rak11200.png" },
          ],
        },
        {
          label: "Ethernet & Wired Network",
          items: [
            { name: "WT32-ETH01 (Wireless-Tag)", desc: "ESP32 + PHY Ethernet LAN8720 + Port RJ45.", tags: ["LAN8720", "Wired"], image: "img/wt32-eth01.png" },
            { name: "Olimex ESP32-POE / GATEWAY", desc: "ESP32 + Power-over-Ethernet (PoE) + RJ45.", tags: ["PoE", "Industrial"], image: "img/olimex-esp32-poe.png" },
            { name: "LILYGO T-ETH-Lite", desc: "ESP32-S3/C6 + Port RJ45.", tags: ["ESP32-S3", "RJ45"], image: "img/lilygo-t-eth-lite.png" },
          ],
        },
        {
          label: "Display & HMI Panel",
          items: [
            { name: "LILYGO TTGO T-Display (ESP32 / S3)", desc: "ESP32/S3 + Layar IPS ST7789 berwarna.", tags: ["IPS Display", "Pocket"], image: "img/lilygo-ttgo-t-display.png" },
            { name: "M5Stack Core2", desc: "ESP32 + Layar Sentuh + Baterai + IMU + Speaker.", tags: ["Touchscreen", "Battery", "IMU"], image: "img/m5stack-core2.png" },
            { name: "M5StickC Plus", desc: "ESP32 + Layar Mini + IMU + Baterai.", tags: ["Wearable", "IMU"], image: "img/m5stickc-plus.png" },
            { name: "ESP32 Cheap Yellow Display (CYD)", desc: "ESP32 + Layar Sentuh TFT 2.8\" + MicroSD + Audio.", tags: ["2.8\" TFT Touch", "Cheap"], image: "img/esp32-cyd.png" },
          ],
        },
      ],
    },
    {
      id: "matrix",
      nav: "Perbandingan",
      title: "Matriks Perbandingan Chip Inti",
      description: "Ringkasan cepat pilihan chip berdasarkan radio, performa, dan arsitektur.",
      matrix: {
        head: ["Chip", "Core", "Clock", "Radio", "Catatan Utama"],
        rows: [
          ["ESP32", "Dual Xtensa LX6", "240MHz", "Wi-Fi + BT/BLE", "Pilihan default, ekosistem terluas"],
          ["ESP32-S2", "Single Xtensa LX7", "240MHz", "Wi-Fi saja", "USB OTG native, tanpa Bluetooth"],
          ["ESP32-S3", "Dual Xtensa LX7", "240MHz", "Wi-Fi + BLE 5.0", "Akselerasi AI ringan, GPIO banyak, USB OTG"],
          ["ESP32-C2", "Single RISC-V", "120MHz", "Wi-Fi + BLE 5.0", "Termurah, memori terbatas"],
          ["ESP32-C3", "Single RISC-V", "160MHz", "Wi-Fi + BLE 5.0", "Efisien biaya, penerus ESP8266"],
          ["ESP32-C5", "Single RISC-V", "240MHz", "Wi-Fi 6 (Dual Band) + BLE", "Dukungan Wi-Fi 2.4/5GHz"],
          ["ESP32-C6", "Single RISC-V", "160MHz", "Wi-Fi 6 + BLE 5.3 + 802.15.4", "Gateway Matter/Thread/Zigbee"],
          ["ESP32-H2", "Single RISC-V", "96MHz", "BLE 5.2 + 802.15.4", "Tanpa Wi-Fi, node Thread/Zigbee"],
          ["ESP32-P4", "Dual RISC-V", "400MHz", "Tanpa radio", "Multimedia, MIPI/H.264"],
        ],
      },
    },
  ],
};
