import { MissionData } from '../types';

export const MISSIONS: MissionData[] = [
  {
    id: 1,
    title: 'Misi 1 — Kenapa Aku Ada?',
    subtitle: 'Tujuan Penciptaan Manusia & Jin',
    coreQuestion: 'Menurutmu, kenapa manusia diciptakan?',
    category: 'Tujuan Penciptaan',
    icon: 'Compass',
    badge: {
      id: 'badge_1',
      title: 'Pencari Tujuan Hidup',
      subtitle: 'Memahami bahwa hidup adalah untuk beribadah kepada Allah',
      iconName: 'Award',
      description: 'Mengetahui hakikat keberadaan diri kita di muka bumi berdasarkan QS. Adz-Dzariyat: 56.'
    },
    steps: [
      {
        id: 'm1_q1',
        question: 'Menurutmu, kenapa manusia diciptakan di muka bumi ini?',
        contextStory: 'Pernahkah kamu merenung di malam hari atau saat menatap langit: "Sebenarnya untuk apa aku dilahirkan ke dunia ini?"',
        options: [
          { id: 'A', text: 'Supaya terkenal dan viral di media sosial', isCorrect: false },
          { id: 'B', text: 'Supaya kaya raya dan punya segalanya', isCorrect: false },
          { id: 'C', text: 'Untuk beribadah kepada Allah semata', isCorrect: true },
          { id: 'D', text: 'Supaya selalu bersenang-senang tanpa beban', isCorrect: false }
        ],
        explanation: 'Allah Yang Maha Bijaksana menegaskan bahwa jin dan manusia diciptakan bukan tanpa arah, melainkan untuk beribadah dan menghambakan diri hanya kepada-Nya.',
        arabicQuote: {
          arabic: 'وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ',
          translation: 'Dan Aku tidak menciptakan jin dan manusia melainkan supaya mereka mengabdi (beribadah) kepada-Ku.',
          reference: 'QS. Adz-Dzariyat: 56'
        },
        lifeApplication: {
          school: 'Belajar di kelas bukan sekadar kejar nilai atau gengsi, tapi bagian dari ketaatan kepada Allah saat diniatkan ikhlas mencari ilmu yang bermanfaat.',
          home: 'Membantu orang tua, menyapu kamar, dan berbakti bukan beban, melainkan ladang pahala ibadah nyata setiap hari.'
        }
      }
    ]
  },
  {
    id: 2,
    title: 'Misi 2 — Siapa Rabb-ku?',
    subtitle: 'Mengenal Tauhid Rububiyah',
    coreQuestion: 'Siapa yang menciptakan dan mengatur alam semesta?',
    category: 'Tauhid Rububiyah',
    icon: 'Key',
    badge: {
      id: 'badge_2',
      title: 'Saksi Rububiyah',
      subtitle: 'Mengakui Allah sebagai Rabb, Pencipta, dan Pengatur Alam',
      iconName: 'Shield',
      description: 'Menyakini bahwa hanya Allah yang menciptakan, mengurus rezeki, dan mengatur seluruh kehidupan kita.'
    },
    steps: [
      {
        id: 'm2_q1',
        question: 'Siapa yang menciptakan langit, bumi, dan seluruh sel di dalam tubuhmu?',
        contextStory: 'Jantungmu berdetak 100.000 kali sehari tanpa kamu perintahkan. Siapakah yang mengatur ritme kehidupan ini?',
        options: [
          { id: 'A', text: 'Terjadi dengan sendirinya secara kebetulan', isCorrect: false },
          { id: 'B', text: 'Hanya Allah, Rabb Semesta Alam', isCorrect: true },
          { id: 'C', text: 'Kekuatan alam gaib misterius', isCorrect: false },
          { id: 'D', text: 'Para ilmuwan teknologi tinggi', isCorrect: false }
        ],
        explanation: 'Tauhid Rububiyah adalah meyakini keesaan Allah dalam perbuatan-Nya: Dia satu-satunya Pencipta, Pemilik, Pengatur rezeki, dan Penguasa seluruh alam semesta.',
        arabicQuote: {
          arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
          translation: 'Segala puji bagi Allah, Rabb (Pencipta dan Pemelihara) seluruh alam.',
          reference: 'QS. Al-Fatihah: 2'
        },
        lifeApplication: {
          school: 'Saat meraih ranking atau juara kelas, tidak sombong merasa "aku pintar sendiri", melainkan memuji Allah yang memberi kecerdasan.',
          home: 'Saat ada makanan lezat di meja makan, lisan kita basah dengan "Alhamdulillah" mengakui bahwa rezeki itu datang dari Allah.'
        }
      }
    ]
  },
  {
    id: 3,
    title: 'Misi 3 — Kepada Siapa Aku Beribadah?',
    subtitle: 'Memurnikan Tauhid Uluhiyah',
    coreQuestion: 'Kalau Allah yang menciptakan kita, kepada siapa kita beribadah?',
    category: 'Tauhid Uluhiyah',
    icon: 'Flame',
    badge: {
      id: 'badge_3',
      title: 'Pemurni Uluhiyah',
      subtitle: 'Mempersembahkan seluruh ibadah hanya kepada Allah',
      iconName: 'HeartHandshake',
      description: 'Mengesakan Allah dalam setiap gerak ibadah: doa, tawakkal, isti\'anah, dan tidak menduakan-Nya.'
    },
    steps: [
      {
        id: 'm3_q1',
        question: 'Kalau Allah satu-satunya yang menciptakan dan memelihara kita, kepada siapa seluruh ibadah kita persembahkan?',
        contextStory: 'Orang-orang musyrik Quraisy mengakui Allah yang menciptakan langit dan bumi, namun mereka tetap berdoa kepada selain Allah. Apa yang membedakan seorang Muslim sejati?',
        options: [
          { id: 'A', text: 'Kepada Allah dan sesekali kepada benda bertuah pembawa hoki', isCorrect: false },
          { id: 'B', text: 'Hanya kepada Allah semata, tanpa sekutu apa pun', isCorrect: true },
          { id: 'C', text: 'Kepada siapa saja yang kita anggap punya kekuatan sakti', isCorrect: false },
          { id: 'D', text: 'Terserah perasaan masing-masing individu', isCorrect: false }
        ],
        explanation: 'Tauhid Uluhiyah adalah mengesakan Allah dalam segala bentuk ibadah kita: doa, tawakkal, sembelihan, nazar, rasa harap (raja\'), dan takut (khauf). Tidak boleh ada sedikit pun ditujukan kepada selain Allah.',
        arabicQuote: {
          arabic: 'إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ',
          translation: 'Hanya kepada Engkaulah kami beribadah dan hanya kepada Engkaulah kami memohon pertolongan.',
          reference: 'QS. Al-Fatihah: 5'
        },
        lifeApplication: {
          school: 'Sebelum ujian, kita belajar maksimal lalu berdoa memohon kemudahan hanya kepada Allah, bukan mencari pensil sakti atau jimat.',
          home: 'Ketika menghadapi kesulitan ekonomi keluarga atau sakit, orang tua dan anak bersama-sama menengadahkan tangan sholat malam memohon kepada Allah.'
        }
      }
    ]
  },
  {
    id: 4,
    title: 'Misi 4 — Bagaimana Aku Mengenal Allah?',
    subtitle: 'Tauhid Asma\' wa Shifat',
    coreQuestion: 'Apakah kita bebas membayangkan rupa Allah sesuai imajinasi kita?',
    category: 'Tauhid Asma wa Shifat',
    icon: 'BookOpen',
    badge: {
      id: 'badge_4',
      title: 'Penjaga Asma\' wa Shifat',
      subtitle: 'Mengenal Allah sesuai Al-Qur\'an dan As-Sunnah',
      iconName: 'Sparkles',
      description: 'Menetapkan nama dan sifat Allah tanpa menyerupakan dengan makhluk (Laisa kamitslihi syai\').'
    },
    steps: [
      {
        id: 'm4_q1',
        question: 'Kalau kita ingin mengenal Allah, apakah kita bebas membayangkan atau melukiskan rupa Allah sesuai imajinasi manusia?',
        contextStory: 'Pernahkah kamu mendengar seseorang menebak-nebak wujud Allah berdasarkan kartun atau patung makhluk? Bagaimana pandangan aqidah Islam yang murni?',
        options: [
          { id: 'A', text: 'Bebas, karena pikiran manusia punya imajinasi luas', isCorrect: false },
          { id: 'B', text: 'Tidak boleh, Allah dikenal melalui Al-Qur\'an dan hadits shahih tanpa diserupakan dengan makhluk', isCorrect: true },
          { id: 'C', text: 'Boleh membayangkan Allah seperti cahaya lampu neon', isCorrect: false },
          { id: 'D', text: 'Kita tidak perlu tahu sama sekali tentang Allah', isCorrect: false }
        ],
        explanation: 'Tauhid Asma\' wa Shifat mengajarkan kita menetapkan nama-nama yang indah (Asma\'ul Husna) dan sifat-sifat mulia yang Allah tetapkan bagi diri-Nya dalam Al-Qur\'an dan hadits Rasulullah ﷺ yang shahih, dengan meyakini Allah tidak serupa dengan makhluk apa pun.',
        arabicQuote: {
          arabic: 'لَيْسَ كَمِثْلِهِ شَيْءٌ ۖ وَهُوَ السَّمِيعُ الْبَصِيرُ',
          translation: 'Tidak ada sesuatu pun yang serupa dengan-Nya, dan Dialah Yang Maha Mendengar lagi Maha Melihat.',
          reference: 'QS. Asy-Syura: 11'
        },
        lifeApplication: {
          school: 'Meyakini Allah Maha Mendengar (As-Sami\') dan Maha Melihat (Al-Bashir) membuat kita menjaga lisan dari ghibah dan mata dari pornografi saat browsing HP.',
          home: 'Meyakini Allah Maha Pengasih (Ar-Rahman) membuat kita penuh optimisme saat berdoa dan tidak pernah berputus asa dari rahmat-Nya.'
        }
      }
    ]
  },
  {
    id: 5,
    title: 'Misi 5 — Tauhid dalam Kehidupanku',
    subtitle: 'Ujian Praktik di Sekolah & di Rumah',
    coreQuestion: 'Bagaimana membuktikan iman ketika tidak ada yang melihat?',
    category: 'Aplikasi Hidup',
    icon: 'MapPin',
    badge: {
      id: 'badge_5',
      title: 'Teladan Tauhid Nyata',
      subtitle: 'Membawa Nilai Tauhid ke Ranah Sekolah dan Rumah',
      iconName: 'CheckCircle2',
      description: 'Menerapkan Muroqobatullah (merasa selalu diawasi Allah) dalam kejujuran, adab, dan pergaulan.'
    },
    steps: [
      {
        id: 'm5_case1',
        question: 'Sekolah: Guru keluar kelas saat ulangan. Temanmu berbisik: "Ayo buka catatan/lihat jawaban, mumpung guru nggak ada!" Apa sikapmu?',
        contextStory: '🏫 CASE 1: Ruang Kelas SMP/SMA Attaufiq saat ulangan harian. Suasana ramai dan banyak teman mulai saling bertukar contekan.',
        options: [
          { id: 'A', text: 'Ikut mencontek karena semua teman melakukannya dan guru tidak tahu', isCorrect: false },
          { id: 'B', text: 'Tegas menolak dan tetap mengerjakan sendiri dengan jujur', isCorrect: true },
          { id: 'C', text: 'Menunggu teman selesai menyalin lalu ikut menyontek sedikit', isCorrect: false }
        ],
        explanation: 'Manusia mungkin sedang keluar dari kelas, tetapi Allah Maha Melihat (Al-Bashir). Seorang penuntut ilmu yang bertauhid meyakini keberkahan ilmu lahir dari kejujuran dan rasa diawasi oleh Allah (Muroqobatullah).'
      },
      {
        id: 'm5_case2',
        question: 'Sekolah: Beberapa teman sedang berkerumun menertawakan dan mem-bully seorang siswa yang pendiam. Apa tindakanmu?',
        contextStory: '🏫 CASE 2: Di koridor sekolah saat jam istirahat. Tekanan teman sebaya (peer pressure) sangat kuat.',
        options: [
          { id: 'A', text: 'Ikut mengejek supaya tidak dianggap aneh atau dijauhi geng', isCorrect: false },
          { id: 'B', text: 'Diam saja sambil ikut tertawa kecil', isCorrect: false },
          { id: 'C', text: 'Tidak ikut mengejek dan berusaha merangkul korban atau menghentikan dengan adab yang baik', isCorrect: true }
        ],
        explanation: 'Seorang Muslim takut kepada murka Allah melebihi takut dijauhi teman. Menjaga lisan dari menyakiti saudara seiman adalah cabang dari keimanan yang kokoh.'
      },
      {
        id: 'm5_case3',
        question: 'Rumah: Kamu sedang asyik bermain game di HP, tiba-tiba Ibu memanggil minta tolong dibelikan kebutuhan dapur. Apa yang kamu pilih?',
        contextStory: '🏠 CASE 3: Di kamar santai setelah pulang sekolah. Permainan online sedang seru-serunya.',
        options: [
          { id: 'A', text: 'Marah-marah dan mendengus kesal karena merasa diganggu', isCorrect: false },
          { id: 'B', text: 'Mengabaikan suara Ibu dan pura-pura memakai earphone', isCorrect: false },
          { id: 'C', text: 'Menjeda/menutup game, menyahut dengan lembut, dan segera membantu Ibu', isCorrect: true }
        ],
        explanation: 'Birrul walidain (berbakti kepada orang tua) adalah kewajiban agung yang bergandengan dengan tauhid dalam Al-Qur\'an. Ridha Allah terletak pada ridha kedua orang tua.'
      },
      {
        id: 'm5_case4',
        question: 'Rumah/Pribadi: Kamu sangat cemas menghadapi masalah besar (kelulusan/ujian berat). Cara mana yang paling tepat?',
        contextStory: '🏠 CASE 4: Pikiran terasa buntu, hati gelisah, dan ada yang membisikkan cara-cara instan.',
        options: [
          { id: 'A', text: 'Putus asa, mengurung diri, dan menyalahkan nasib', isCorrect: false },
          { id: 'B', text: 'Berusaha sungguh-sungguh, lalu bersimpuh berdoa dan bertawakkal kepada Allah', isCorrect: true },
          { id: 'C', text: 'Membeli gelang atau jimat keberuntungan yang katanya membawa nasib baik', isCorrect: false }
        ],
        explanation: 'Bergantung kepada benda atau jimat adalah bentuk kesyirikan yang merusak tauhid. Hati seorang mukmin hanya tenang dengan mengingat Allah dan menyandarkan hasil kepada-Nya semata.'
      }
    ]
  },
  {
    id: 6,
    title: 'Misi 6 — Jalan Mana yang Harus Diikuti?',
    subtitle: 'Sunnah, Manhaj, & Firqah Najiyah',
    coreQuestion: 'Jika manusia berselisih banyak jalan, apa pedoman keselamatan kita?',
    category: 'Sunnah & Manhaj',
    icon: 'Milestone',
    badge: {
      id: 'badge_6',
      title: 'Pencari Firqah Najiyah',
      subtitle: 'Berpegang pada Al-Qur\'an, Sunnah, dan Petunjuk Sahabat',
      iconName: 'Compass',
      description: 'Menelusuri jalan golongan yang selamat dengan mengikuti petunjuk Rasulullah ﷺ dan para sahabat.'
    },
    steps: [
      {
        id: 'm6_q1',
        question: 'Ketika manusia berbeda-beda pendapat dalam agama dan banyak aliran bermunculan, bagaimana kita menentukan jalan yang benar?',
        contextStory: 'Rasulullah ﷺ pernah membuat satu garis lurus di tanah, lalu membuat banyak garis bercabang di kiri-kanannya. Garis lurus itulah jalan Allah, sedangkan jalan bercabang ada setan yang mengajak ke kesesatan.',
        options: [
          { id: 'A', text: 'Memilih pendapat yang paling viral dan trending di medsos', isCorrect: false },
          { id: 'B', text: 'Memilih jalan yang paling banyak pengikutnya tanpa cek dalil', isCorrect: false },
          { id: 'C', text: 'Berpegang teguh pada Al-Qur\'an dan Sunnah yang shahih sesuai pemahaman para sahabat', isCorrect: true }
        ],
        explanation: 'Golongan yang selamat (Firqah Najiyah) adalah mereka yang teguh berjalan di atas apa yang dicontohkan oleh Rasulullah ﷺ dan para sahabatnya (Ahlus Sunnah wal Jama\'ah / Ashhabul Hadits). Kebenaran diukur dari kesesuaiannya dengan wahyu, bukan dari ramainya orang yang mengikuti.',
        arabicQuote: {
          arabic: 'وَإِن تُطِعْ أَكْثَرَ مَن فِي الْأَرْضِ يُضِلُّوكَ عَن سَبِيلِ اللَّهِ',
          translation: 'Dan jika kamu menuruti kebanyakan orang-orang di muka bumi ini, niscaya mereka akan menyesatkanmu dari jalan Allah.',
          reference: 'QS. Al-An\'am: 116'
        },
        lifeApplication: {
          school: 'Tidak mudah latah ikut-ikutan tren gaya hidup atau perkataan kotor hanya karena "lagi viral" di kalangan teman.',
          home: 'Menghidupkan sunnah Rasulullah ﷺ dalam keseharian: makan minum dengan tangan kanan sambil duduk, mengucapkan salam, dan menjaga sholat berjamaah.'
        }
      }
    ]
  },
  {
    id: 7,
    title: 'Boss Battle — Jangan Asal Ikut!',
    subtitle: 'Ujian Akhir Standar Kebenaran dalam Agama',
    coreQuestion: 'Apa standar tertinggi kita ketika terjadi perbedaan dan perselisihan?',
    category: 'Boss Battle',
    icon: 'Crown',
    badge: {
      id: 'badge_boss',
      title: 'Penjaga Kebenaran Wahyu',
      subtitle: 'Kembali kepada Allah dan Rasul-Nya saat Terjadi Perselisihan',
      iconName: 'Trophy',
      description: 'Lulus Boss Battle: Menjadikan Al-Qur\'an dan As-Sunnah sebagai neraca penimbang segala perkara.'
    },
    steps: [
      {
        id: 'm7_boss',
        question: 'Ketika di medsos bertebaran klaim: "Ustadz A bilang begini", "Temanku bilang begitu", "Di TikTok jutaan orang joget seperti ini". Apa barometer kita dalam agama?',
        contextStory: '⚔️ BOSS BATTLE FINAL: Arus informasi begitu deras. Kamu ditantang untuk membuktikan apakah kamu akan terombang-ambing oleh opini manusia atau teguh pada tali kebenaran Allah!',
        options: [
          { id: 'A', text: 'Ikut pendapat sosok yang paling terkenal dan followers-nya terbanyak', isCorrect: false },
          { id: 'B', text: 'Ikut arus umum apa yang disenangi teman-teman sebaya', isCorrect: false },
          { id: 'C', text: 'Kembalikan persoalan kepada bimbingan Al-Qur\'an dan Sunnah yang shahih', isCorrect: true }
        ],
        explanation: 'Buku kajian "Jalan Golongan Yang Selamat" menegaskan: Setiap kali terjadi perselisihan pendapat dalam agama, timbangannya wajib dikembalikan kepada Allah (Al-Qur\'an) dan Rasul-Nya (Sunnah yang shahih), bukan kepada hawa nafsu atau popularitas semata.',
        arabicQuote: {
          arabic: 'فَإِن تَنَازَعْتُمْ فِي شَيْءٍ فَرُدُّوهُ إِلَى اللَّهِ وَالرَّسُولِ إِن كُنتُمْ تُؤْمِنُونَ بِاللَّهِ وَالْيَوْمِ الْآخِرِ',
          translation: 'Kemudian jika kamu berlainan pendapat tentang sesuatu, maka kembalikanlah ia kepada Allah (Al-Qur\'an) dan Rasul (Sunnah-nya), jika kamu benar-benar beriman kepada Allah dan hari kemudian.',
          reference: 'QS. An-Nisa: 59'
        },
        lifeApplication: {
          school: 'Saat ada perdebatan agama di sekolah atau media sosial, selalu tanyakan: "Mana dalil shahih dari Al-Qur\'an dan haditsnya?" dengan tetap santun.',
          home: 'Menjadikan rumah sebagai tempat belajar sunnah bersama keluarga, merujuk kepada kitab-kitab para ulama yang terpercaya.'
        }
      }
    ]
  }
];

export const WORSHIP_CHALLENGE_ITEMS = [
  { id: 'w1', name: 'Belajar sungguh-sungguh', canBeWorship: true, note: 'Bisa jadi ibadah bila diniatkan ikhlas mencari ilmu bermanfaat untuk bekal kebaikan!' },
  { id: 'w2', name: 'Membantu Ibu di rumah', canBeWorship: true, note: 'Sangat bernilai ibadah besar karena birrul walidain dicintai Allah!' },
  { id: 'w3', name: 'Tidur tepat waktu', canBeWorship: true, note: 'Bisa bernilai ibadah jika berniat mengistirahatkan badan agar kuat bangun sholat shubuh!' },
  { id: 'w4', name: 'Olahraga & menjaga fisik', canBeWorship: true, note: 'Bisa jadi ibadah dengan niat menjaga amanah raga agar kuat beribadah kepada Allah!' },
  { id: 'w5', name: 'Membaca Al-Qur\'an', canBeWorship: true, note: 'Ibadah mahdhah yang mulia, setiap huruf bernilai sepuluh kebaikan!' },
  { id: 'w6', name: 'Bermain game secukupnya untuk rehat', canBeWorship: true, note: 'Mubah yang bisa bernilai positif sebagai penyegar pikiran asalkan tidak melalaikan sholat dan adab!' }
];

export const DRAG_DROP_ITEMS = [
  { id: 'dd_1', text: 'Berdoa meminta pertolongan dan ampunan', target: 'allah', categoryLabel: 'Ibadah Hati & Lisan' },
  { id: 'dd_2', text: 'Bertanya kepada guru ketika tidak paham pelajaran', target: 'manusia', categoryLabel: 'Mengambil Sebab di Dunia' },
  { id: 'dd_3', text: 'Belajar dan latihan soal untuk ujian besok', target: 'manusia', categoryLabel: 'Ikhtiar Nyata Siswa' },
  { id: 'dd_4', text: 'Memohon kemudahan kelulusan dan taufiq', target: 'allah', categoryLabel: 'Ibadah Doa Mutlak' },
  { id: 'dd_5', text: 'Tawakkal menggantungkan hasil akhir setelah berusaha', target: 'allah', categoryLabel: 'Ibadah Hati' },
  { id: 'dd_6', text: 'Pergi berobat dan meminta resep ke dokter saat sakit', target: 'manusia', categoryLabel: 'Ikhtiar Medis yang Mampu Dilakukan Manusia' }
];

export const BONUS_TERMS = [
  {
    name: 'Tahrif (تحريف)',
    meaning: 'Mengubah lafazh atau membelokkan makna ayat tanpa dalil yang shahih.',
    analogy: 'Seperti seseorang mengubah pesan guru demi menyesuaikan keinginannya sendiri.',
    status: 'Istilah Bonus — Pembahasan lebih dalam di kajian lanjutan'
  },
  {
    name: 'Ta\'thil (تعطيل)',
    meaning: 'Meniadakan atau menolak sifat-sifat mulia yang Allah tetapkan bagi diri-Nya.',
    analogy: 'Mengabaikan keagungan nama yang telah Allah nyatakan sendiri dalam kitab-Nya.',
    status: 'Istilah Bonus — Pembahasan lebih dalam di kajian lanjutan'
  },
  {
    name: 'Takyif (تكييف)',
    meaning: 'Menanyakan dan mereka-reka "bagaimana hakikat rupa" sifat Allah yang tidak diberitahukan.',
    analogy: 'Mencoba mengukur luas samudra hanya menggunakan tutup botol plastik.',
    status: 'Istilah Bonus — Pembahasan lebih dalam di kajian lanjutan'
  },
  {
    name: 'Tamtsil (تمثيل)',
    meaning: 'Menyerupakan sifat Allah dengan sifat makhluk ciptaan-Nya.',
    analogy: 'Melanggar ayat "Laisa kamitslihi syai\'" (Tidak ada sesuatu pun yang serupa dengan Allah).',
    status: 'Istilah Bonus — Pembahasan lebih dalam di kajian lanjutan'
  },
  {
    name: 'Tafwidh (تفويض)',
    meaning: 'Menyerahkan makna hakiki kepada Allah pada perkara yang telah dijelaskan maknanya dalam bahasa Arab yang jelas.',
    analogy: 'Kita menetapkan makna yang jelas dari Al-Qur\'an, dan menyerahkan hakikat rupa kepada Allah.',
    status: 'Istilah Bonus — Pembahasan lebih dalam di kajian lanjutan'
  }
];

export const SCHOOL_HABITS = [
  { id: 'sh1', text: 'Tidak mencontek saat ujian, yakin Allah Maha Melihat', icon: 'ShieldCheck' },
  { id: 'sh2', text: 'Menjaga lisan dari ghibah, ejekan, dan kata-kata kotor', icon: 'Smile' },
  { id: 'sh3', text: 'Menghormati ustadz/ustadzah dan guru dengan adab mulia', icon: 'GraduationCap' },
  { id: 'sh4', text: 'Tidak ikut-ikutan tren buruk demi gengsi atau pertemanan', icon: 'Users' },
  { id: 'sh5', text: 'Jujur dan amanah saat diberi tanggung jawab tugas kelas', icon: 'CheckCircle' },
  { id: 'sh6', text: 'Berusaha belajar optimal lalu tawakkal berdoa kepada Allah', icon: 'Flame' }
];

export const HOME_HABITS = [
  { id: 'hh1', text: 'Menghormati dan tidak berkata "ah" kepada orang tua', icon: 'Heart' },
  { id: 'hh2', text: 'Membantu pekerjaan rumah tangga dengan senyum ikhlas', icon: 'Home' },
  { id: 'hh3', text: 'Menjaga sholat 5 waktu di awal waktu tanpa disuruh-suruh', icon: 'Clock' },
  { id: 'hh4', text: 'Membiasakan lisan mengucap Alhamdulillah atas setiap nikmat', icon: 'Sparkles' },
  { id: 'hh5', text: 'Menjaga pandangan dan adab saat sendirian di kamar (Muroqobah)', icon: 'Eye' },
  { id: 'hh6', text: 'Mendoakan kebaikan untuk orang tua dan keluarga setiap habis sholat', icon: 'HandHeart' }
];

export function getRankFromXp(xp: number): { title: string; color: string; desc: string } {
  if (xp >= 2500) {
    return {
      title: 'Master Misi Tauhid',
      color: 'text-amber-500 bg-amber-50 border-amber-300 dark:bg-amber-950/40 dark:border-amber-700',
      desc: 'Pemahaman tauhid mendalam dan siap menjadi teladan di sekolah & rumah!'
    };
  }
  if (xp >= 1800) {
    return {
      title: 'Penjaga Tauhid',
      color: 'text-emerald-600 bg-emerald-50 border-emerald-300 dark:bg-emerald-950/40 dark:border-emerald-700',
      desc: 'Teguh memegang kemurnian ibadah dan menjaga adab sunnah.'
    };
  }
  if (xp >= 1000) {
    return {
      title: 'Pejuang Tauhid',
      color: 'text-blue-600 bg-blue-50 border-blue-300 dark:bg-blue-950/40 dark:border-blue-700',
      desc: 'Melangkah mantap mengenali Allah, tauhid, dan jalan Rasulullah ﷺ.'
    };
  }
  return {
    title: 'Penjelajah Tauhid',
    color: 'text-teal-600 bg-teal-50 border-teal-300 dark:bg-teal-950/40 dark:border-teal-700',
    desc: 'Langkah awal menemukan tujuan penciptaan hidup.'
  };
}
