import Link from "next/link";

export default function Home() {
  return(
    <div>
      <div className='mb-9 max-w-xl mx-auto px-5'>
        <h1 className="font-bold text-xl underline my-5">Tentang Farnsworth Munsell 100 Hue Test</h1>
        <img src="/FM100.jpg" className="my-3" />
        <p className="my-5 text-sm">Tes Warna Farnsworth-Munsell 100 Hue adalah tes untuk sistem penglihatan manusia yang sering digunakan untuk menguji buta warna. Sistem ini dikembangkan oleh Dean Farnsworth pada tahun 1940-an dan menguji kemampuan untuk mengisolasi serta menyusun perbedaan kecil dalam berbagai target warna dengan nilai dan kroma yang konstan, yang mencakup semua rona visual yang dijelaskan oleh sistem warna Munsell.</p>
        <img src="/Munsell-color-system.jpg" className="my-3" />
        <p className="my-5 text-sm">Ada beberapa variasi dari tes ini, salah satunya menampilkan 100 rona warna dan yang lainnya menampilkan 15 rona warna.</p>
        <p className="my-5 text-sm">Bentuk paling umum dari Tes Warna Farnsworth-Munsell 100 Hue terdiri dari empat baris terpisah yang berisi rona warna serupa, dengan masing-masing baris mengandung 25 variasi berbeda dari setiap rona. Setiap rona warna di ujung polar setiap baris ditempatkan secara tetap sebagai patokan. Setiap keping warna di antara patokan tersebut dapat disesuaikan sesuai dengan pengamatan penguji. Susunan akhir dari keping-keping warna ini mencerminkan kemampuan sistem visual dalam membedakan perbedaan rona warna. Gangguan dalam sistem visual penguji dapat diukur berdasarkan dua faktor yang terkandung dalam tes ini: jumlah kasus di mana keping warna ditempatkan secara salah, atau tingkat keparahan pergeseran keping warna (yaitu jarak antara posisi seharusnya keping tersebut ditempatkan dan posisi sebenarnya di mana keping itu diletakkan).</p>
        <img src="/farnsworth100.jpg" className="my-3" />
        <p className="my-5 text-sm">Keping-keping warna disusun dalam empat baris berdasarkan rona warna. Baris-baris tersebut mencakup rona oranye/magenta, rona kuning/hijau, rona biru/ungu, dan rona ungu/magenta, secara berurutan. Tes fisik ini disajikan di atas latar belakang hitam untuk mengisolasi dan menonjolkan rona warna. Keping-keping warnanya berbentuk bulat dengan diameter sekitar satu inci.</p>
        <h1 className="font-bold text-xl underline my-5">Tes Buta Warna Farnsworth Munsell 100 Hue Online</h1>
        <p className="my-5 text-sm">Ini adalah versi online dari tes Farnsworth Munsell 100 Hue, yang dibatasi hingga 40 warna.</p>
        <p className="my-5 text-sm">Diagram menunjukkan wilayah spektrum warna di mana kemampuan membedakan warna rendah. Semakin rendah skor, semakin baik hasilnya. Skor 0 adalah hasil sempurna. Poin kesalahan antara 1 hingga 4 dianggap hampir normal, dengan 1-2 kesalahan kecil. Jika skor kesalahan Anda lebih dari 4, kemungkinan Anda memiliki kekurangan dalam penglihatan warna (buta warna).</p>
        <Link href="/farnsworth-munsell-100-hue-test">
          <button className="bg-[#2e5cb8] hover:bg-[#4775d1] px-4 py-2 rounded-md my-4">
            <span className="text-white">Test Buta Warna Sekarang</span>
          </button>
        </Link>
      </div>
    </div>
  )
}