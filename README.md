# Dursunoglu Emlak CRM

Gayrimenkul yonetimi icin modern web tabanli CRM uygulamasi.

## Ozellikler

- Emlak ilanlari yonetimi
- Ilan ekleme ve silme
- Ilan detaylarini goruntuleme (fiyat, konum, alan, oda sayisi)
- Modern ve responsive tasarim
- Responsive tasarim (mobil, tablet, desktop)
- Modern gradyan temalar
- Smooth animasyonlar ve gecisler

## Teknolojiler

- React 18
- CSS3 (Flexbox, Grid, Animasyonlar)
- Vanilla JavaScript

## Kurulum

### Gereksinimler
- Node.js (v14 veya ustu)
- npm veya yarn

### Adimlar

1. Repository'yi klonlayin:
```bash
git clone https://github.com/dursunogluinsaat-insaat/dursunogluemlakcrm15.git
cd dursunogluemlakcrm15
```

2. Bagimliliklari yukleyin:
```bash
npm install
```

3. Gelistirme sunucusunu baslatın:
```bash
npm start
```

Uygulama http://localhost:3000 adresinde acilacaktir.

## Kullanim

### Yeni Ilan Eklemek
1. "+Yeni Ilan Ekle" butonuna tiklayin
2. Ilan bilgilerini doldurun
3. Tur secin
4. "Ekle" butonuna tiklayin

### Ilan Silmek
Ilan kartindaki "Sil" butonuna tiklayin.

## Build & Deploy

### Production Build
```bash
npm run build
```

Build dosyalari build/ klasorune olusturulacaktir.

### GitHub Pages'e Deploy
```bash
npm run deploy
```

## Proje Yapisi

```
src/
  App.js              # Ana uygulama komponenti
  App.css             # Stil dosyasi
  components/
    Header.js         # Ust navigasyon
    Header.css
    PropertyList.js   # Ilan listesi
    PropertyList.css
    PropertyCard.js   # Ilan karti
    PropertyCard.css
    AddProperty.js    # Ilan ekleme formu
    AddProperty.css
  index.js            # Entry point
public/
  index.html          # HTML template
package.json         # Bagimliliklari
```

## Lisans

MIT

## Iletisim

Sorulariniz icin lutfen GitHub issues uzerinden iletisime gecin.
