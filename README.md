# unipasaport

## Backend

Node.js + Express tabanlı API `/backend` dizini altında yer alır.

### Kurulum

```bash
cd backend
npm install
cp .env.example .env
# .env dosyasındaki değerleri güncelleyin
npm run dev
```

### Özellikler

- Kullanıcı kayıt ve login (JWT ile)
- Ders (Course) ve konu (Topic) modelleri
- Videoların ders ve konuya bağlı şekilde eklenmesi
- Filtreli listeleme endpoint'leri

### Önemli Scriptler

- `npm run dev` – Nodemon ile geliştirme sunucusunu başlatır.
- `npm start` – Üretim sunucusunu başlatır.
