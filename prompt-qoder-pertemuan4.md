# Prompt Qoder — Praksul Pertemuan 4
> **Project:** `2sie-2457301095-praksul-apps`  
> **Stack:** React + Vite + TailwindCSS  
> **Jalankan prompt secara berurutan. Tunggu setiap prompt selesai sebelum lanjut ke prompt berikutnya.**

---

## PROMPT 1 — Struktur Portal & Routing

Salin dan jalankan prompt berikut di Qoder:

```
Saya memiliki project React + Vite + TailwindCSS bernama "2sie-2457301095-praksul-apps".

Tolong lakukan hal berikut:

1. Install react-router-dom:
   npm install react-router-dom

2. Edit src/main.jsx, bungkus <App /> dengan <BrowserRouter> dari react-router-dom.

3. Edit src/App.jsx menjadi halaman Portal utama dengan ketentuan:
   - Judul halaman: "Portal Praktikum Susulan"
   - Tampilkan subtitle: "2SIE | 2457301095 | Luthfi"
   - Tampilkan 1 card navigasi untuk "Pertemuan 4" dengan:
     - Judul: "Pertemuan 4"
     - Deskripsi: "Data JSON, Search & Filter, Best Practice State, Responsive & Grid Design"
     - Tombol "Masuk" yang mengarah ke route /pertemuan-4
   - Gunakan TailwindCSS untuk styling. Layout card menggunakan grid, tampilan rapi dan responsif.
   - Gunakan Link dari react-router-dom untuk tombol navigasi.

4. Edit src/main.jsx untuk menambahkan routing:
   - Route "/" menampilkan App (halaman portal)
   - Route "/pertemuan-4" menampilkan komponen Pertemuan4 dari src/pertemuan-4/index.jsx

5. Buat folder src/pertemuan-4/ dan file src/pertemuan-4/index.jsx dengan isi sementara:
   - Judul "Pertemuan 4"
   - Tombol "Kembali ke Portal" yang mengarah ke route /
   - 4 card placeholder untuk topik: "Data JSON List", "Search & Filter", "Best Practice State", "Responsive & Grid Design"

Pastikan semua routing berjalan dengan baik.
```

---

## PROMPT 2 — Data JSON List & Komponen FrameworkList

Salin dan jalankan prompt berikut di Qoder:

```
Lanjutkan project React "2sie-2457301095-praksul-apps". Kerjakan di dalam folder src/pertemuan-4/.

LANGKAH 1 — Buat file src/pertemuan-4/framework.json dengan isi berikut (salin persis):

[
  {
    "id": 1,
    "name": "React",
    "description": "A JavaScript library for building user interfaces.",
    "details": { "developer": "Meta (Facebook)", "releaseYear": 2013, "officialWebsite": "https://react.dev/" },
    "tags": ["JavaScript", "Library", "UI", "Component-Based"]
  },
  {
    "id": 2,
    "name": "Vue",
    "description": "The Progressive JavaScript Framework.",
    "details": { "developer": "Evan You", "releaseYear": 2014, "officialWebsite": "https://vuejs.org/" },
    "tags": ["JavaScript", "Framework", "Reactive", "Lightweight"]
  },
  {
    "id": 3,
    "name": "Angular",
    "description": "One framework. Mobile & desktop.",
    "details": { "developer": "Google", "releaseYear": 2010, "officialWebsite": "https://angular.io/" },
    "tags": ["JavaScript", "Framework", "TypeScript", "Enterprise"]
  },
  {
    "id": 4,
    "name": "Svelte",
    "description": "Cybernetically enhanced web apps.",
    "details": { "developer": "Rich Harris", "releaseYear": 2016, "officialWebsite": "https://svelte.dev/" },
    "tags": ["JavaScript", "Compiler", "Reactive", "Lightweight"]
  },
  {
    "id": 5,
    "name": "Next.js",
    "description": "The React Framework for Production.",
    "details": { "developer": "Vercel", "releaseYear": 2016, "officialWebsite": "https://nextjs.org/" },
    "tags": ["React", "Framework", "SSR", "Static Generation"]
  },
  {
    "id": 6,
    "name": "Nuxt.js",
    "description": "The Intuitive Vue Framework.",
    "details": { "developer": "Nuxt Labs", "releaseYear": 2016, "officialWebsite": "https://nuxt.com/" },
    "tags": ["Vue", "Framework", "SSR", "Static Generation"]
  },
  {
    "id": 7,
    "name": "Gatsby",
    "description": "Fast in every way that matters.",
    "details": { "developer": "Gatsby Inc.", "releaseYear": 2015, "officialWebsite": "https://www.gatsbyjs.com/" },
    "tags": ["React", "Static Site", "SEO", "GraphQL"]
  },
  {
    "id": 8,
    "name": "Ember",
    "description": "A framework for ambitious web developers.",
    "details": { "developer": "Ember Core Team", "releaseYear": 2011, "officialWebsite": "https://emberjs.com/" },
    "tags": ["JavaScript", "Framework", "Convention over Configuration"]
  },
  {
    "id": 9,
    "name": "Meteor",
    "description": "Build apps fast, simple, scalable.",
    "details": { "developer": "Meteor Software", "releaseYear": 2012, "officialWebsite": "https://www.meteor.com/" },
    "tags": ["Full-Stack", "JavaScript", "Realtime", "Web & Mobile"]
  },
  {
    "id": 10,
    "name": "Backbone.js",
    "description": "Give your JS app some Backbone.",
    "details": { "developer": "Jeremy Ashkenas", "releaseYear": 2010, "officialWebsite": "https://backbonejs.org/" },
    "tags": ["JavaScript", "Library", "MVC", "Lightweight"]
  }
]

LANGKAH 2 — Buat komponen src/pertemuan-4/FrameworkList.jsx dengan ketentuan:
- Import framework.json: import frameworkData from "./framework.json"
- Map setiap item dan tampilkan dalam card dengan TailwindCSS
- Setiap card menampilkan: name (judul bold), description, developer, officialWebsite (sebagai link), releaseYear
- Tags ditampilkan sebagai badge dengan: item.tags.map((tag, index) => <span key={index}>...</span>)
- Setiap elemen map() wajib memiliki key={item.id}
- Akses nested data menggunakan dot notation: item.details.developer, item.details.officialWebsite

LANGKAH 3 — Di bawah komponen FrameworkList, tampilkan tabel penjelasan konsep dengan format:
| Konsep | Penjelasan | Digunakan di mana |
|--------|-----------|-------------------|
| import JSON | Mengambil data dari file .json menggunakan import | import frameworkData from "./framework.json" |
| .map() | Iterasi array untuk render komponen React | frameworkData.map((item) => ...) |
| key prop | Identitas unik tiap elemen dalam list, mencegah warning React | key={item.id} di setiap card |
| Nested data | Akses properti bersarang menggunakan dot notation | item.details.developer, item.details.officialWebsite |
| tags.map() | Map kedua untuk render array tags sebagai badge | item.tags.map((tag, index) => ...) |

LANGKAH 4 — Daftarkan FrameworkList di src/pertemuan-4/index.jsx sebagai section pertama dengan judul "📁 Data JSON (List)".
```

---

## PROMPT 3 — Search & Filter + Best Practice State

Salin dan jalankan prompt berikut di Qoder:

```
Lanjutkan project React "2sie-2457301095-praksul-apps". Kerjakan di dalam folder src/pertemuan-4/.

LANGKAH 1 — Buat komponen src/pertemuan-4/FrameworkListSearchFilter.jsx dengan ketentuan:

- Import frameworkData dari "./framework.json"
- Import useState dari react

- Gunakan SATU state object (best practice):
  const [dataForm, setDataForm] = useState({
    searchTerm: "",
    selectedTag: "",
  })

- Buat fungsi handleChange:
  const handleChange = (evt) => {
    const { name, value } = evt.target
    setDataForm({
      ...dataForm,
      [name]: value,
    })
  }

- Logic filter data:
  const _searchTerm = dataForm.searchTerm.toLowerCase()
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm)
    const matchesTag = dataForm.selectedTag
      ? framework.tags.includes(dataForm.selectedTag)
      : true
    return matchesSearch && matchesTag
  })

- Ambil unique tags:
  const allTags = [...new Set(frameworkData.flatMap((framework) => framework.tags))]

- Tampilkan:
  1. Input search dengan: type="text" name="searchTerm" onChange={handleChange} value={dataForm.searchTerm} placeholder="Search framework..."
  2. Select tag dengan: name="selectedTag" onChange={handleChange} value={dataForm.selectedTag}
     - Option pertama: <option value="">All Tags</option>
     - Lalu: allTags.map((tag, index) => <option key={index} value={tag}>{tag}</option>)
  3. Map menggunakan filteredFrameworks (BUKAN frameworkData)
  4. Setiap card sama seperti FrameworkList (name, description, developer, officialWebsite, tags)

LANGKAH 2 — Di bawah komponen FrameworkListSearchFilter, tampilkan 2 tabel penjelasan:

Tabel 1 - Search & Filter:
| Konsep | Penjelasan | Digunakan di mana |
|--------|-----------|-------------------|
| useState | Menyimpan nilai input form secara reaktif | state dataForm untuk searchTerm dan selectedTag |
| filter() | Menyaring array berdasarkan kondisi yang ditentukan | filteredFrameworks dari frameworkData |
| includes() | Mengecek apakah string/array mengandung nilai tertentu | Cek name, description, dan tags |
| flatMap() + Set | Mengambil semua tags lalu menghilangkan duplikat | const allTags = [...new Set(...flatMap(...))] |
| onChange + name | Menghubungkan setiap input ke state melalui satu handler | handleChange dengan evt.target.name |

Tabel 2 - Best Practice State:
| Konsep | Penjelasan | Digunakan di mana |
|--------|-----------|-------------------|
| Single state object | Menggabungkan banyak state dalam satu objek | const [dataForm, setDataForm] = useState({...}) |
| Computed property name | Update key secara dinamis berdasarkan name attribute input | [name]: value di dalam setDataForm |
| Spread operator | Menyalin semua nilai state lama sebelum update | ...dataForm di dalam setDataForm |
| name attribute | Menghubungkan input HTML ke key di state object | name="searchTerm", name="selectedTag" |

LANGKAH 3 — Daftarkan FrameworkListSearchFilter di src/pertemuan-4/index.jsx sebagai section kedua dan ketiga:
- Section "📁 Data JSON (Search & Filter)" → tampilkan komponen FrameworkListSearchFilter
- Section "📁 Best Practice State" → tampilkan penjelasan tekstual bahwa komponen FrameworkListSearchFilter sudah menerapkan best practice state dengan single state object dan satu handleChange untuk semua input
```

---

## PROMPT 4 — Responsive & Grid Design

Salin dan jalankan prompt berikut di Qoder:

```
Lanjutkan project React "2sie-2457301095-praksul-apps". Kerjakan di dalam folder src/pertemuan-4/.

LANGKAH 1 — Buat komponen src/pertemuan-4/ResponsiveDesign.jsx yang berisi 3 child component:

Child Component 1 - ResponsiveText:
function ResponsiveText() {
  return (
    <div className="mb-8 p-4 border rounded-lg bg-white">
      <h3 className="font-bold text-lg mb-2">1. Responsive Text</h3>
      <p className="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl mb-2 text-gray-700">
        Coba lakukan zoom in atau zoom out. Perhatikan bahwa ukuran teks akan menyesuaikan dengan ukuran layar.
        Coba hapus class yang menggunakan prefix breakpoint (md:xxx, lg:xxx, xl:xxx) dan lihat perbedaannya!
      </p>
      <p className="text-sm text-gray-500">Class yang digunakan: <code>text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl</code></p>
    </div>
  )
}

Child Component 2 - ResponsiveWidth:
function ResponsiveWidth() {
  return (
    <div className="mb-8 p-4 border rounded-lg bg-white">
      <h3 className="font-bold text-lg mb-2">2. Responsive Width & Flex Direction</h3>
      <p className="text-sm text-gray-600 mb-3">
        Pada layar kecil (mobile) dua kolom ini tersusun vertikal. Pada layar tablet ke atas (md: 768px), tersusun horizontal sejajar.
      </p>
      <p className="text-sm text-gray-500 mb-2">Class parent: <code>flex flex-col md:flex-row</code> | Class child: <code>w-full md:w-1/2</code></p>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="bg-red-400 text-white w-full md:w-1/2 p-4 rounded">Kolom 1 (md:w-1/2)</div>
        <div className="bg-blue-400 text-white w-full md:w-1/2 p-4 rounded">Kolom 2 (md:w-1/2)</div>
      </div>
    </div>
  )
}

Child Component 3 - ResponsiveLayout:
function ResponsiveLayout() {
  return (
    <div className="mb-8 p-4 border rounded-lg bg-white">
      <h3 className="font-bold text-lg mb-2">3. Responsive Grid Layout</h3>
      <p className="text-sm text-gray-600 mb-1">Jumlah kolom berubah sesuai ukuran layar:</p>
      <ul className="text-sm text-gray-500 mb-3 list-disc list-inside">
        <li><strong>grid-cols-1</strong> → Mobile: 1 kolom</li>
        <li><strong>sm:grid-cols-2</strong> → Tablet kecil (≥640px): 2 kolom</li>
        <li><strong>md:grid-cols-3</strong> → Tablet besar (≥768px): 3 kolom</li>
        <li><strong>lg:grid-cols-4</strong> → Laptop/Desktop (≥1024px): 4 kolom</li>
      </ul>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="bg-blue-500 text-white p-4 rounded text-center">Box 1</div>
        <div className="bg-blue-500 text-white p-4 rounded text-center">Box 2</div>
        <div className="bg-blue-500 text-white p-4 rounded text-center">Box 3</div>
        <div className="bg-blue-500 text-white p-4 rounded text-center">Box 4</div>
      </div>
    </div>
  )
}

Export default component ResponsiveDesign yang memanggil ketiga child component di atas.

LANGKAH 2 — Di bawah komponen ResponsiveDesign, tampilkan tabel penjelasan konsep:

| Konsep | Penjelasan | Digunakan di mana |
|--------|-----------|-------------------|
| Breakpoint prefix | Menentukan tampilan berdasarkan lebar layar minimum | sm: md: lg: xl: pada class TailwindCSS |
| grid-cols-* | Mengatur jumlah kolom dalam CSS Grid | grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 |
| flex-col md:flex-row | Mengubah arah flex dari vertikal ke horizontal sesuai layar | ResponsiveWidth component |
| text-xs md:text-lg | Ukuran teks yang berubah sesuai ukuran layar | ResponsiveText component |
| w-full md:w-1/2 | Lebar elemen berubah dari penuh menjadi setengah di tablet | Kolom di ResponsiveWidth |

Tambahkan juga tabel perbandingan Bootstrap vs TailwindCSS:

| Fitur | Bootstrap (col-md) | TailwindCSS (grid-cols) |
|-------|-------------------|------------------------|
| Sistem Layout | Flexbox 12 kolom | CSS Grid |
| Penulisan Struktur | row + col-xx-* | grid + grid-cols-* |
| Responsiveness | Kolom berubah ukuran berdasarkan col-xx-* | Kolom bertambah/berkurang sesuai grid-cols-* |
| Penyesuaian | Terbatas pada sistem 12 kolom | Fleksibel: grid-cols-3, grid-cols-7, dll |

LANGKAH 3 — Daftarkan ResponsiveDesign di src/pertemuan-4/index.jsx sebagai section keempat dengan judul "📁 Responsive & Grid Design".

LANGKAH 4 — Pastikan halaman src/pertemuan-4/index.jsx sudah rapi dengan:
- Judul halaman "Pertemuan 4 — Praktikum Susulan"
- Tombol "← Kembali ke Portal" di bagian atas
- 4 section dengan judul yang jelas:
  1. 📁 Data JSON (List)
  2. 📁 Data JSON (Search & Filter)  
  3. 📁 Best Practice State
  4. 📁 Responsive & Grid Design
- Setiap section memiliki komponen yang berjalan + tabel penjelasan konsep di bawahnya
```

---

## PROMPT 5 — Push ke GitHub & Finalisasi

Setelah semua prompt selesai dan hasil di browser sudah benar, jalankan di terminal:

```bash
git add .
git commit -m "feat: pertemuan 4 - data json, search filter, best practice state, responsive grid"
git push origin main
```

Lalu deploy ke Vercel:
1. Buka https://vercel.com → login dengan GitHub
2. Klik "Add New Project"
3. Pilih repo `2sie-2457301095-praksul-apps`
4. Klik "Deploy" (biarkan setting default)

---

## Catatan Penting

- Jalankan prompt **secara berurutan** — jangan loncat
- Setiap selesai 1 prompt, **cek di browser** (`npm run dev`) sebelum lanjut
- Kalau ada error, ceritakan pesan error-nya ke Qoder dan minta diperbaiki
- Pastikan setiap tabel konsep muncul di bawah komponen yang relevan — ini yang dinilai dosen
