export interface DiscussionPrompt {
  id: number;
  question: string;
  contextNote: string;
  teachingGuide: string;
}

export interface TeacherGuideItem {
  missionId: number;
  title: string;
  objective: string;
  keyConcepts: string[];
  dalil: string;
  discussionQuestion: string;
}

export const TEACHER_GUIDES: TeacherGuideItem[] = [
  {
    missionId: 1,
    title: 'Misi 1: Kenapa Aku Ada? (Tujuan Penciptaan)',
    objective: 'Siswa memahami bahwa eksistensi manusia adalah untuk beribadah kepada Allah semata, dan seluruh rutinitas harian bisa bernilai ibadah bila dilandasi niat yang benar.',
    keyConcepts: [
      'Hakikat penciptaan bukan mengejar popularitas atau materi semata.',
      'Definisi ibadah yang mencakup amalan hati, lisan, dan anggota badan.',
      'Rutinitas mubah (belajar, tidur, membantu orang tua) bisa menjadi ibadah bernilai pahala.'
    ],
    dalil: 'QS. Adz-Dzariyat: 56 (وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ)',
    discussionQuestion: 'Apakah belajar dan bermain game bisa bernilai ibadah? Bagaimana caranya?'
  },
  {
    missionId: 2,
    title: 'Misi 2: Siapa Rabb-ku? (Tauhid Rububiyah)',
    objective: 'Menanamkan pengakuan bahwa Allah adalah satu-satunya Pencipta, Pemilik, dan Pengatur alam semesta.',
    keyConcepts: [
      'Konsep Allah: Menciptakan → Mengatur → Memberi Rezeki → Memelihara Kehidupan.',
      'Keseimbangan antara ikhtiar manusia dan pengakuan bahwa keberhasilan adalah karunia Allah.',
      'Membiasakan mengucap Alhamdulillah daripada ujub ("aku hebat sendiri").'
    ],
    dalil: 'QS. Al-Fatihah: 2, QS. Al-Baqarah: 21-22',
    discussionQuestion: 'Raka dapat nilai 95 setelah belajar keras. Apakah usaha Raka penting? Kenapa kita tetap harus memuji Allah?'
  },
  {
    missionId: 3,
    title: 'Misi 3: Kepada Siapa Aku Beribadah? (Tauhid Uluhiyah)',
    objective: 'Membedakan secara jernih antara mengambil sebab kepada sesama manusia dengan mempersembahkan ibadah mutlak hanya kepada Allah.',
    keyConcepts: [
      'Tauhid Uluhiyah: mengesakan Allah dalam segala perbuatan hamba (doa, isti\'anah, tawakkal, sembelihan, nazar).',
      'Meminta bantuan manusia hanya boleh dalam perkara yang manusia mampu di dunia nyata.',
      'Larangan menyandarkan harapan mutlak kepada jimat, dukun, atau selain Allah.'
    ],
    dalil: 'QS. Al-Fatihah: 5 (إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ)',
    discussionQuestion: 'Apa bedanya meminta tolong kepada dokter saat sakit dengan berdoa meminta kesembuhan kepada Allah?'
  },
  {
    missionId: 4,
    title: 'Misi 4: Bagaimana Aku Mengenal Allah? (Tauhid Asma\' wa Shifat)',
    objective: 'Mengenal Allah melalui nama dan sifat-Nya yang ditetapkan dalam Al-Qur\'an dan As-Sunnah yang shahih tanpa menyerupakan dengan makhluk.',
    keyConcepts: [
      'Kaidah emas: Laisa kamitslihi syai\' (Tidak ada sesuatu pun yang serupa dengan Allah).',
      'Pengenalan istilah dasar aqidah (Tahrif, Ta\'thil, Takyif, Tamtsil, Tafwidh) sebagai wawasan tanpa beban hafalan kaku.',
      'Dampak keimanan pada Asma\'ul Husna: merasa diawasi (As-Sami\', Al-Bashir).'
    ],
    dalil: 'QS. Asy-Syura: 11 (لَيْسَ كَمِثْلِهِ شَيْءٌ ۖ وَهُوَ السَّمِيعُ الْبَصِيرُ)',
    discussionQuestion: 'Kenapa kita dilarang membayangkan rupa Allah seperti tokoh kartun atau makhluk?'
  },
  {
    missionId: 5,
    title: 'Misi 5: Tauhid dalam Kehidupanku (Sekolah & Rumah)',
    objective: 'Menerjemahkan konsep tauhid menjadi akhlak dan integritas nyata dalam situasi dilematis remaja di sekolah dan rumah.',
    keyConcepts: [
      'Muroqobatullah saat guru tidak mengawasi ulangan.',
      'Kekuatan menolak perundungan (bullying) dan peer pressure negatif.',
      'Birrul walidain sebagai amal shalih yang sangat dicintai Allah.',
      'Larangan khurafat dan jimat keberuntungan.'
    ],
    dalil: 'QS. Luqman: 16 (Amalan sekecil biji sawi pasti diketahui Allah)',
    discussionQuestion: 'Apa yang kamu lakukan jika teman sekelasmu mengajak berbuat curang saat guru keluar kelas?'
  },
  {
    missionId: 6,
    title: 'Misi 6: Jalan Mana yang Harus Diikuti? (Sunnah & Firqah Najiyah)',
    objective: 'Memahami prinsip Ahlus Sunnah wal Jama\'ah dan Firqah Najiyah dalam beragama dengan berpegang kepada dalil shahih dan jalan para sahabat.',
    keyConcepts: [
      'Hadits satu jalan lurus dan banyak jalan bercabang (Ibnu Mas\'ud).',
      'Kebenaran diukur oleh kesesuaian dengan Al-Qur\'an dan Sunnah shahih, bukan jumlah massa / viralitas.',
      'Menjaga ukhuwah dan adab dalam mempelajari agama.'
    ],
    dalil: 'QS. Al-An\'am: 153, Hadits Iftiraqul Ummah (Firqah Najiyah)',
    discussionQuestion: 'Jika sebuah tren ibadah sedang sangat viral di TikTok atau Instagram tapi tidak ada dalil shahihnya, bagaimana sikap kita?'
  },
  {
    missionId: 7,
    title: 'Boss Battle: Jangan Asal Ikut! (Standar Kebenaran)',
    objective: 'Mengukuhkan prinsip kembali kepada Allah dan Rasul-Nya ketika terjadi perselisihan pendapat.',
    keyConcepts: [
      'Al-Qur\'an dan As-Sunnah sebagai neraca tertinggi dalam agama.',
      'Tidak taqlid buta pada figur manusia siapapun jika bertentangan dengan wahyu shahih.'
    ],
    dalil: 'QS. An-Nisa: 59 (فَإِن تَنَازَعْتُمْ فِي شَيْءٍ فَرُدُّوهُ إِلَى اللَّهِ وَالرَّسُولِ)',
    discussionQuestion: 'Mengapa ketika para ulama atau ustadz berbeda pendapat, kita harus merujuk pada dalil shahih?'
  }
];

export const CLASSROOM_DISCUSSIONS: DiscussionPrompt[] = [
  {
    id: 1,
    question: 'Apakah belajar pelajaran umum (seperti Matematika/IPA) bisa menjadi ibadah?',
    contextNote: 'Misi 1 — Tujuan Penciptaan',
    teachingGuide: 'Ajak siswa menyadari bahwa seluruh ilmu yang bermanfaat di dunia bila diniatkan untuk menolong sesama, mencari nafkah halal, dan memahami kebesaran ciptaan Allah akan berpahala ibadah.'
  },
  {
    id: 2,
    question: 'Apa bedanya berusaha kepada manusia dengan beribadah kepada Allah?',
    contextNote: 'Misi 3 — Tauhid Uluhiyah',
    teachingGuide: 'Jelaskan bahwa meminta bantuan manusia terbatas pada hal yang manusia sanggup (meminjam buku, berobat ke dokter, bertanya pelajaran). Sedangkan ibadah seperti berdoa, memohon keselamatan, dan bersujud hanya milik Allah.'
  },
  {
    id: 3,
    question: 'Kenapa kita tetap wajib berusaha keras kalau seluruh takdir sudah diatur Allah?',
    contextNote: 'Misi 2 — Tauhid Rububiyah',
    teachingGuide: 'Jelaskan hikmah Sunnatullah dan hukum sebab-akibat. Rasulullah ﷺ memerintahkan: "Bersemangatlah meraih apa yang bermanfaat bagimu dan mohonlah pertolongan kepada Allah."'
  },
  {
    id: 4,
    question: 'Apa yang kamu rasakan dan lakukan ketika kamu sendirian di kamar atau di kelas tanpa pengawasan guru?',
    contextNote: 'Misi 5 — Muroqobatullah',
    teachingGuide: 'Tanamkan konsep Ihsan: "Engkau beribadah kepada Allah seakan-akan engkau melihat-Nya, dan jika engkau tidak melihat-Nya, sesungguhnya Dia melihatmu."'
  },
  {
    id: 5,
    question: 'Kalau ada perbedaan pendapat agama yang ramai di media sosial, apa yang seharusnya kita lakukan?',
    contextNote: 'Misi 6 & Boss Battle — Firqah Najiyah',
    teachingGuide: 'Ajarkan adab menuntut ilmu: tidak tergesa-gesa membagikan konten, menanyakan kepada ustadz/guru yang mumpuni, dan selalu menimbang dengan dalil Al-Qur\'an dan hadits shahih.'
  }
];
