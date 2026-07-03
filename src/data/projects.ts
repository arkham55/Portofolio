export interface Project {
  id: string;
  title: string;
  subtitle: string;
  techStack: string[];
  overview: string;
  problem: string;
  research: string;
  solution: string;
  architectureDescription: string;
  features: string[];
  challenges: string;
  lessonsLearned: string;
  futureImprovements: string;
  githubUrl: string;
  demoUrl?: string;
  imageUrl?: string;
  gallery?: string[];
}

export const projectsData: Project[] = [
  {
    id: "harvest-estimator",
    title: "Harvest Estimator Website",
    subtitle:
      "Web-based yield estimation and farming prediction tool",
    techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    overview:
      "An interactive web platform designed for local farming communities to estimate crop yields, manage farming logs, and calculate potential agricultural revenues.",
    problem:
      "Farmers and village cooperatives struggle with manual calculations, unpredictable crop estimation methods, and lack of digitized logs to track seasonal harvest trends.",
    research:
      "Conducted surveys with local farming groups in Yogyakarta during PLK UNY and found a critical requirement for a mobile-friendly, language-accessible crop calculator.",
    solution:
      "Developed a responsive Laravel application featuring a yield-weight estimation algorithm, agricultural revenue estimator, and dynamic farming activity logs.",
    architectureDescription:
      "Built on the Laravel MVC architecture. Employs MySQL database to store agricultural parameter records, seasonal crop logs, and generates real-time reports via Blade views.",
    features: [
      "Dynamic yield weight estimator based on field surface area and crop parameters",
      "Seasonal agricultural revenue and expense projections calculator",
      "Responsive, mobile-first farming activity logger",
      "Interactive harvest dashboard with exportable data logs",
    ],
    challenges:
      "Formulating an accurate mathematical estimation formula that factors in soil quality indices and unpredictable weather variables.",
    lessonsLearned:
      "Gained hands-on experience in building complex algorithm calculators in Laravel controllers and mapping database migrations for dynamic agricultural metrics.",
    futureImprovements:
      "Integrate weather forecasting API feeds to dynamically adjust harvest predictions based on precipitation models.",
    githubUrl: "https://github.com/SedekahIllahi/harvest-estimator-website",
    imageUrl: "/projects/harvest-estimator.png",
  },
  {
    id: "sistem-pendataan-lab",
    title: "Sistem Pendataan Lab UNY",
    subtitle:
      "Multi-laboratory inventory and activity logging platform",
    techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    overview:
      "A specialized administrative dashboard built to manage and log operations across multiple academic laboratories at Universitas Negeri Yogyakarta, tracking inventories and student utilization.",
    problem:
      "Managing student logging, scheduling reservations, and tracking lab equipment status across multiple department laboratories manually resulted in data losses and booking conflicts.",
    research:
      "Analyzed physical laboratory logbooks at UNY and designed a unified database model capable of organizing lab records independently.",
    solution:
      "Created a secure, web-based management system with automated inventory audits, schedules manager, and unified activity logging.",
    architectureDescription:
      "Structured using Laravel MVC with a modular routing layout. Blade files handle administrative views, and Vite manages the frontend asset compiling process.",
    features: [
      "Multi-laboratory dashboard with isolated logging states",
      "Equipment inventory auditor with real-time status updates",
      "Student laboratory visit and reservation scheduler",
      "Automated PDF reporting for laboratory usage statistics",
    ],
    challenges:
      "Designing a database schema that supports multiple independent laboratories while preserving unified administrative control.",
    lessonsLearned:
      "Mastered designing dynamic Eloquent relationships and implementing secure user-role permissions for laboratory assistants and department heads.",
    futureImprovements:
      "Implement barcode scanner support for faster laboratory equipment tracking and asset auditing.",
    githubUrl: "https://github.com/Snku1/Sistem-Pendataan-Lab-UNY",
    imageUrl: "/projects/sistem-pendataan-lab.png",
  },
  {
    id: "sistem-kasir",
    title: "Sistem Kasir Minimarket",
    subtitle: "Point of sale and inventory system for retail stores",
    techStack: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    overview:
      "A responsive point of sale (POS) web application designed for retail minimarkets to handle checkout operations, track product inventory, and monitor daily sales revenues.",
    problem:
      "Retail shop owners suffer from slow customer checkout queues, lack of real-time inventory updates, and manual sales auditing processes.",
    research:
      "Investigated store cashier operations and built an optimized database schema for rapid transaction processing and dynamic stock counting.",
    solution:
      "Developed a Laravel cashier system with instant receipt generation, role permissions for cashiers and managers, and auto-deduct inventory auditing.",
    architectureDescription:
      "Built on Laravel MVC architecture. Employs Eloquent relations to map items to transactions and database transactions to ensure ledger safety.",
    features: [
      "Point of Sale (POS) checkout interface with instant billing calculations",
      "Real-time stock inventory management with low stock alert triggers",
      "Sales history logger and daily revenue dashboard",
      "Secure multi-tenant roles for admins, managers, and cashiers",
    ],
    challenges:
      "Handling concurrent sales transactions while ensuring stock levels are accurately decremented.",
    lessonsLearned:
      "Implemented database locking mechanisms in Laravel to avoid transaction conflicts when checking out products.",
    futureImprovements:
      "Add barcode scanning input integration and automatic printable PDF receipt formatting.",
    githubUrl: "https://github.com/YoktanNS/SistemKasirMinimarket",
    imageUrl: "/projects/sistem-kasir.png",
  },
  {
    id: "sistem-rekomendasi-laptop",
    title: "Sistem Rekomendasi Laptop",
    subtitle: "Python Flask recommendation system for laptops",
    techStack: ["Python", "Flask", "HTML", "CSS"],
    overview:
      "An interactive web application built on Python and Flask that recommends laptops based on user preferences and technical specifications.",
    problem:
      "Users face difficulties in parsing dense laptop specifications (RAM, CPU, GPU) when trying to buy a laptop within a specific budget.",
    research:
      "Collected laptop specification data, built scoring formulas, and designed a lightweight interface.",
    solution:
      "Developed a Flask recommendation app that filters and scores laptops according to user specs and budget.",
    architectureDescription:
      "Python Flask backend with basic data processing in helper modules. Templates serve HTML/CSS UI layouts with client-side JavaScript.",
    features: [
      "User preference filter dashboard (budget, RAM, CPU, GPU)",
      "Lightweight scoring and ranking algorithm",
      "Clean, interactive comparison templates",
    ],
    challenges:
      "Normalizing GPU and CPU benchmarking names and handling missing data.",
    lessonsLearned:
      "Gained deep experience in building python backend routes, routing templates in Flask, and basic data processing.",
    futureImprovements:
      "Integrate a machine learning clustering model (KNN) for advanced semantic recommendations.",
    githubUrl: "https://github.com/Gellsxly/SistemRekomendasiLaptop",
    imageUrl: "/projects/sistem-rekomendasi-laptop.png",
  },
  {
    id: "edubadget",
    title: "EduBudget",
    subtitle: "Smart student budgeting and financial tracker with ML recommendations",
    techStack: ["Python", "Flask", "MySQL", "Scikit-Learn"],
    overview:
      "An innovative personal finance web application built for college students to track expenses, log income, and receive personalized savings predictions based on lifestyle habits.",
    problem:
      "Students often struggle with limited budgets, leading to unplanned expenses, lack of savings structure, and no easy way to get financial advice tailored to their income.",
    research:
      "Built customized lifestyle surveys (frugal, moderate, active) to train dynamic regression models mapping budget guidelines to student spending habits.",
    solution:
      "Developed a Flask web portal integrating real-time dashboards, transaction logs, and interactive budget planners with ML-driven warnings for overspending.",
    architectureDescription:
      "Python Flask backend with a modular database handler. ML folder houses regression models, templates render UI, and MySQL manages user accounts and transactional history.",
    features: [
      "Real-time student finance dashboard tracking income and expenses",
      "Smart ML-driven budget recommendation engine based on lifestyle models",
      "Interactive budget planner with category expense limit calculators",
      "Dynamic transaction tracker with Excel export support",
    ],
    challenges:
      "Formulating an accurate machine learning prediction logic that factors in highly erratic student monthly allowances.",
    lessonsLearned:
      "Gained expertise in training regression models using Python data science libraries, exporting models, and loading them into Flask web controllers.",
    futureImprovements:
      "Integrate automated SMS or email alert alerts when category spending limits are breached.",
    githubUrl: "https://github.com/arkham55/edubadget",
    imageUrl: "/projects/edubadget.png",
  },
];

export const projectsTranslationId: Record<string, Partial<Project>> = {
  "harvest-estimator": {
    subtitle: "Alat estimasi hasil panen dan prediksi pertanian berbasis web",
    overview: "Platform web interaktif yang dirancang untuk komunitas petani lokal untuk mengestimasi hasil panen, mengelola catatan pertanian, dan menghitung potensi pendapatan pertanian.",
    problem: "Petani dan koperasi desa kesulitan dengan perhitungan manual, metode estimasi tanaman yang tidak dapat diprediksi, dan kurangnya catatan digital untuk melacak tren panen musiman.",
    research: "Melakukan survei dengan kelompok tani lokal di Yogyakarta selama PLK UNY dan menemukan kebutuhan mendasar akan kalkulator tanaman yang mobile-friendly dan mudah dipahami.",
    solution: "Mengembangkan aplikasi Laravel responsif yang dilengkapi algoritma estimasi berat hasil panen, estimator pendapatan pertanian, dan catatan aktivitas pertanian dinamis.",
    architectureDescription: "Dibangun dengan arsitektur Laravel MVC. Menggunakan database MySQL untuk menyimpan data parameter pertanian, catatan tanaman musiman, dan menghasilkan laporan real-time melalui Blade views.",
    features: [
      "Estimator berat hasil panen dinamis berdasarkan luas lahan dan parameter tanaman",
      "Kalkulator proyeksi pengeluaran dan pendapatan pertanian musiman",
      "Pencatat aktivitas pertanian responsif yang ramah perangkat seluler",
      "Dashboard panen interaktif dengan fitur ekspor data laporan",
    ],
    challenges: "Merumuskan formula estimasi matematis yang akurat dengan mempertimbangkan indeks kualitas tanah dan variabel cuaca yang tidak menentu.",
    lessonsLearned: "Mendapatkan pengalaman praktis dalam membangun kalkulator algoritma kompleks di Laravel controller dan memetakan migrasi database untuk metrik pertanian dinamis.",
    futureImprovements: "Mengintegrasikan feed API prakiraan cuaca untuk menyesuaikan prediksi panen secara dinamis berdasarkan model curah hujan.",
  },
  "sistem-pendataan-lab": {
    subtitle: "Platform inventarisasi dan pencatatan aktivitas multi-laboratorium",
    overview: "Dashboard administratif khusus yang dibangun untuk mengelola dan mencatat operasional di berbagai laboratorium akademik di Universitas Negeri Yogyakarta, melacak inventaris dan pemanfaatan mahasiswa.",
    problem: "Mengelola log mahasiswa, penjadwalan reservasi, dan pelacakan status peralatan lab di berbagai laboratorium departemen secara manual menyebabkan kehilangan data dan konflik jadwal.",
    research: "Menganalisis buku log laboratorium fisik di UNY dan merancang model database terpadu yang mampu mengatur catatan lab secara indeks independen.",
    solution: "Membuat sistem manajemen berbasis web yang aman dengan audit inventaris otomatis, manajer jadwal, dan pencatatan aktivitas terpadu.",
    architectureDescription: "Terstruktur menggunakan Laravel MVC dengan tata letak perutean modular. File Blade menangani tampilan administratif, dan Vite mengelola proses kompilasi aset frontend.",
    features: [
      "Dashboard multi-laboratorium dengan status pencatatan terisolasi",
      "Auditor inventaris peralatan dengan pembaruan status real-time",
      "Penjadwal kunjungan dan reservasi laboratorium mahasiswa",
      "Pelaporan PDF otomatis untuk statistik penggunaan laboratorium",
    ],
    challenges: "Merancang skema database yang mendukung beberapa laboratorium independen sambil tetap mempertahankan kontrol administratif terpadu.",
    lessonsLearned: "Menguasai perancangan hubungan Eloquent dinamis dan menerapkan izin peran pengguna yang aman untuk asisten laboratorium dan kepala departemen.",
    futureImprovements: "Menerapkan dukungan pemindai barcode untuk pelacakan peralatan laboratorium dan audit aset yang lebih cepat.",
  },
  "sistem-kasir": {
    subtitle: "Sistem kasir (point of sale) dan inventaris untuk toko ritel",
    overview: "Aplikasi web kasir (POS) responsif yang dirancang untuk minimarket ritel untuk menangani transaksi checkout, melacak inventaris produk, dan memantau pendapatan penjualan harian.",
    problem: "Pemilik toko ritel menghadapi antrean checkout pelanggan yang lambat, kurangnya pembaruan inventaris secara real-time, dan proses audit penjualan manual.",
    research: "Menyelidiki operasional kasir toko dan membangun skema database yang dioptimalkan untuk pemrosesan transaksi cepat dan penghitungan stok dinamis.",
    solution: "Mengembangkan sistem kasir Laravel dengan pembuatan struk instan, izin peran untuk kasir dan manajer, serta audit inventaris otomatis yang memotong stok.",
    architectureDescription: "Dibangun pada arsitektur Laravel MVC. Menggunakan relasi Eloquent untuk memetakan item ke transaksi dan transaksi database untuk memastikan keamanan pembukuan.",
    features: [
      "Antarmuka checkout Point of Sale (POS) dengan perhitungan tagihan instan",
      "Manajemen inventaris stok real-time dengan pemicu peringatan stok rendah",
      "Pencatat riwayat penjualan dan dashboard pendapatan harian",
      "Peran multi-tenant yang aman untuk admin, manajer, dan kasir",
    ],
    challenges: "Menangani transaksi penjualan bersamaan sambil memastikan tingkat stok berkurang secara akurat.",
    lessonsLearned: "Menerapkan mekanisme penguncian database di Laravel untuk menghindari konflik transaksi saat melakukan checkout produk.",
    futureImprovements: "Menambahkan integrasi pemindai barcode dan format struk cetak PDF otomatis.",
  },
  "sistem-rekomendasi-laptop": {
    subtitle: "Sistem rekomendasi laptop berbasis Python Flask",
    overview: "Aplikasi web interaktif yang dibangun menggunakan Python dan Flask yang merekomendasikan laptop berdasarkan preferensi pengguna dan spesifikasi teknis.",
    problem: "Pengguna menghadapi kesulitan dalam membaca spesifikasi laptop yang rumit (RAM, CPU, GPU) ketika mencoba membeli laptop sesuai budget tertentu.",
    research: "Mengumpulkan data spesifikasi laptop, membangun formula penilaian, dan merancang antarmuka yang ringan.",
    solution: "Mengembangkan aplikasi rekomendasi Flask yang memfilter dan menilai laptop sesuai spesifikasi dan budget pengguna.",
    architectureDescription: "Backend Python Flask dengan pemrosesan data dasar dalam modul pembantu. Template menyajikan UI HTML/CSS dengan JavaScript di sisi klien.",
    features: [
      "Dashboard filter preferensi pengguna (budget, RAM, CPU, GPU)",
      "Algoritma penilaian dan peringkat yang ringan",
      "Template perbandingan yang bersih dan interaktif",
    ],
    challenges: "Menormalisasi nama benchmark GPU dan CPU serta menangani data yang hilang.",
    lessonsLearned: "Mendapatkan pengalaman mendalam dalam membangun rute backend python, merender template di Flask, dan pemrosesan data dasar.",
    futureImprovements: "Mengintegrasikan model pengelompokan machine learning (KNN) untuk rekomendasi semantik tingkat lanjut.",
  },
  "edubadget": {
    subtitle: "Pelacak keuangan mahasiswa cerdas dengan rekomendasi ML",
    overview: "Aplikasi keuangan pribadi inovatif yang dibangun untuk mahasiswa untuk melacak pengeluaran, mencatat pemasukan, dan menerima prediksi tabungan yang dipersonalisasi berdasarkan kebiasaan gaya hidup.",
    problem: "Mahasiswa sering kali kesulitan dengan budget yang terbatas, menyebabkan pengeluaran tidak terencana, kurangnya struktur tabungan, dan tidak adanya saran keuangan yang disesuaikan dengan pemasukan.",
    research: "Membangun survei gaya hidup kustom (hemat, moderat, aktif) untuk melatih model regresi dinamis yang memetakan panduan anggaran ke kebiasaan pengeluaran mahasiswa.",
    solution: "Mengembangkan portal web Flask yang mengintegrasikan dashboard real-time, log transaksi, dan perencana anggaran interaktif dengan peringatan berbasis ML untuk pengeluaran berlebihan.",
    architectureDescription: "Backend Python Flask dengan penangan database modular. Folder ML menampung model regresi, template merender UI, dan MySQL mengelola akun pengguna dan riwayat transaksi.",
    features: [
      "Dashboard keuangan mahasiswa real-time yang melacak pemasukan dan pengeluaran",
      "Mesin rekomendasi anggaran berbasis ML yang disesuaikan dengan model gaya hidup",
      "Perencana anggaran interaktif dengan kalkulator batas pengeluaran kategori",
      "Pelacak transaksi dinamis dengan dukungan ekspor Excel",
    ],
    challenges: "Merumuskan logika prediksi machine learning yang akurat yang memperhitungkan uang saku bulanan mahasiswa yang sangat tidak menentu.",
    lessonsLearned: "Mendapatkan keahlian dalam melatih model regresi menggunakan pustaka data science Python, mengekspor model, dan memuatnya ke dalam Flask controller.",
    futureImprovements: "Mengintegrasikan peringatan otomatis via SMS atau email ketika batas pengeluaran kategori terlampaui.",
  },
};
