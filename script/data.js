// ESP32 Variant Catalog — Data Source (Optimized & Ringkas)
window.ESP32_DATA = {
  categories: [
    {
      id: "chip",
      nav: "Chip Inti",
      title: "Taksonomi SoC Resmi Espressif",
      description: "Silikon resmi Espressif (System on Chip) dari arsitektur Xtensa hingga RISC-V.",
      groups: [
        {
          label: "Seri ESP32 Original (Xtensa LX6)",
          items: [
            { name: "ESP32", desc: "Dual-core Xtensa LX6 240MHz, Wi-Fi b/g/n + BT Classic & BLE.", tags: ["Wi-Fi", "BT+BLE", "240MHz"], image: "img/esp32.png" },
            { name: "ESP32-S0WD", desc: "Single-core Xtensa LX6, kemasan QFN48 5×5 mm.", tags: ["Single-core", "Low-power"], image: "img/esp32.png" },
            { name: "ESP32-PICO-D4", desc: "SiP Dual-core Xtensa LX6 + 4 MB flash tertanam.", tags: ["SiP", "4MB Flash"], image: "img/esp32.png" },
          ],
        },
        {
          label: "Seri ESP32-S — Performa & Keamanan (Xtensa)",
          items: [
            { name: "ESP32-S2", desc: "Single-core Xtensa LX7 240MHz, USB OTG native, Wi-Fi (tanpa BT).", tags: ["Wi-Fi", "USB OTG", "Single-core"], image: "img/esp32-s2.png" },
            { name: "ESP32-S3", desc: "Dual-core Xtensa LX7 240MHz, Vektor AI, USB OTG, BLE 5.0.", tags: ["Wi-Fi", "BLE", "AI-accel", "USB OTG"], image: "img/esp32-s3.png" },
          ],
        },
        {
          label: "Seri ESP32-C — Ultra-Low Power (RISC-V)",
          items: [
            { name: "ESP32-C2", desc: "Single-core RISC-V 120MHz, Wi-Fi 4 + BLE 5.0.", tags: ["Wi-Fi", "BLE", "Low-cost"], image: "img/esp32-c2.png" },
            { name: "ESP32-C3", desc: "Single-core RISC-V 160MHz, Wi-Fi 4 + BLE 5.0.", tags: ["Wi-Fi", "BLE", "RISC-V"], image: "img/esp32-c3.png" },
            { name: "ESP32-C5", desc: "Single-core RISC-V, Wi-Fi 6 dual-band (2.4/5 GHz) + BLE 5.0.", tags: ["Wi-Fi 6", "Dual-band", "BLE"], image: "img/esp32-c5.png" },
            { name: "ESP32-C6", desc: "Single-core RISC-V 160MHz, Wi-Fi 6 + BLE 5.3 + 802.15.4.", tags: ["Wi-Fi 6", "Thread/Zigbee", "BLE 5.3"], image: "img/esp32-c6.png" },
          ],
        },
        {
          label: "Seri ESP32-H & P — Fitur Khusus (RISC-V)",
          items: [
            { name: "ESP32-H2", desc: "Single-core RISC-V 96MHz, BLE 5.2 + 802.15.4 (tanpa Wi-Fi).", tags: ["BLE", "Thread/Zigbee", "No Wi-Fi"], image: "img/esp32-h2.png" },
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
          label: "Modul Utamanya",
          items: [
            { name: "ESP32-WROOM-32", desc: "Modul ESP32 standar, 4MB Flash (U: konektor IPEX/U.FL).", tags: ["4MB flash", "PCB/U.FL"], image: "img/esp32-wroom-32.png" },
            { name: "ESP32-WROVER", desc: "Modul ESP32 + 4MB/8MB PSRAM.", tags: ["PSRAM", "PCB/U.FL"], image: "img/esp32-wrover.png" },
            { name: "ESP32-S2-WROOM", desc: "Modul ESP32-S2, USB OTG, antena PCB/IPEX.", tags: ["USB OTG", "PCB antenna"], image: "img/esp32-s2-wroom.png" },
            { name: "ESP32-S3-WROOM-1", desc: "Modul ESP32-S3, Flash 4-16MB, PSRAM 2-8MB.", tags: ["Up to 16MB flash", "AI-accel"], image: "img/esp32-s3-wroom-1.png" },
            { name: "ESP32-C3-MINI-1", desc: "Modul ESP32-C3 ringkas, antena PCB.", tags: ["Compact", "RISC-V"], image: "img/esp32-c3-mini-1.png" },
            { name: "ESP32-C6-WROOM-1", desc: "Modul ESP32-C6 standar, Wi-Fi 6 + 802.15.4.", tags: ["Wi-Fi 6", "Thread/Zigbee"], image: "img/esp32-c6-wroom-1.png" },
            { name: "ESP32-H2-MINI-1", desc: "Modul ESP32-H2 ringkas, BLE + 802.15.4.", tags: ["BLE", "Low-power", "No Wi-Fi"], image: "img/esp32-h2-mini-1.png" },
          ],
        },
      ],
    },
    {
      id: "devkit",
      nav: "Development Board",
      title: "Varian DevKit Resmi",
      description: "Board pengembang resmi Espressif siap pakai.",
      groups: [
        {
          label: "DevKit Resmi Espressif",
          items: [
            { name: "ESP32-DevKitC", desc: "Board referensi resmi Espressif (WROOM-32/WROVER).", tags: ["USB-UART", "Official"], image: "img/esp32-devkitc.png" },
            { name: "ESP32-S2-Saola-1", desc: "Board referensi resmi ESP32-S2.", tags: ["USB OTG", "Official"], image: "img/esp32-s2-saola-1.png" },
            { name: "ESP32-S3-DevKitC-1", desc: "Board referensi resmi ESP32-S3.", tags: ["USB native", "Official"], image: "img/esp32-s3-devkitc-1.png" },
            { name: "ESP32-C3-DevKitM-1", desc: "Board referensi resmi ESP32-C3 (MINI-1).", tags: ["RISC-V", "Official"], image: "img/esp32-c3-devkitm-1.png" },
            { name: "ESP32-C6-DevKitC-1", desc: "Board referensi resmi ESP32-C6 (Wi-Fi 6 / Thread).", tags: ["Wi-Fi 6", "Thread", "Official"], image: "img/esp32-c6-devkitc-1.png" },
            { name: "ESP32-H2-DevKitM-1", desc: "Board referensi resmi ESP32-H2 (802.15.4 / BLE).", tags: ["802.15.4", "Official"], image: "img/esp32-h2-devkitm-1.png" },
          ],
        },
      ],
    },
    {
      id: "khusus",
      nav: "Board Fungsi Khusus",
      title: "Board Acuan Utama",
      description: "Board dengan fungsi modul pendukung utama.",
      groups: [
        {
          label: "Kamera, Audio & Network",
          items: [
            { name: "AI-Thinker ESP32-CAM", desc: "Board kamera ESP32 + OV2640 + MicroSD.", tags: ["OV2640", "microSD"], image: "img/ai-thinker-esp32-cam.png" },
            { name: "ESP32-S3-BOX", desc: "Smart display & Voice Assistant berbasis ESP32-S3.", tags: ["Smart Display", "Voice Assistant"], image: "img/esp32-s3-box.png" },
            { name: "WT32-ETH01", desc: "ESP32 + PHY Ethernet LAN8720 + Port RJ45.", tags: ["LAN8720", "Wired"], image: "img/wt32-eth01.png" },
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
