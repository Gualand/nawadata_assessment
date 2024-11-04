# Penjelasan Kode

## Logic1.js

- Membuat fungsi bernama _**sortChar**_ yang menerima satu parameter berupa string.
- Membuat variabel **vowel** berupa array yang berisi kumpulan huruf vokal.
- Lalu merubah input string menjadi huruf kecil semua dengan funsgi _toLowerCase_.
- Lalu memecah string tersebut dengan funsgi _split_.
- Setelah itu menghilangkan spasi jika ada.
- Melakukan pemisahan terhadap input string yang sudah disesuaikan diatas, dangan cara dicocokan pada variabel **vowel**. jika ada huruf atau element pada string yang sama dengan element yang ada pada variabel **vowel** maka akan dimasukan ke variabel **vowelChar**
- Dengan logic yang sama dengan diatas, namun yang difilter adalah selain yang ada di element **vowel**, maka akan disimpan di variabel **consonantChar**.

## Logic2.js

- Membuat funsgi bernama **numberOfBus** yang menerima 2 variabel, yaitu **totalFamily** dan **mamberFamily**.
- Melakukan pengecekan, jika **totalFamily** dan **mamberFamily** tidak sama, makan akan me-return _"Input must be equal with count of family"_.
- Namun jika sama, makan input **memberFamily** akan di sort dari yang terbesar.
- Membuat variabel **bus** yang nantinya menjadi return dari fungsi ini.
- Membuat variabel **i** dan **j** yang masing masing berfungsi untuk indexing awal dan akhir dari input **memberFamily**.
- Melakukan perulangan, yang tujuannya untuk menambah anggota keluarga terkecil dan yang besar untuk dijadikan satu selama tidak melebihi 4 dan menambahkan value 1 dari variabel **bus**, namun jika tidak memungkinkan akan langsung menambah value 1 ke variabel **bus**.
