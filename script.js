const products = [
  {icon:'SR',name:'ShipReady',status:'Active',group:'active',category:'Marine Operations',availability:'Ürün geliştirme aktif',summary:'Teknik ekiplerin proje hazırlığı ve operasyon takibini tek yerde hızlandırır.',desc:'Yacht / shipbuilding ekipleri için teknik hazırlık ve proje operasyon çözümü.',detail:'Teknik ekiplerin proje hazırlığı, doküman takibi ve operasyon akışını hızlandırmak için geliştirilen marine odaklı ürün.',primary:null,secondary:null},
  {icon:'AV',name:'Answer Visibility',status:'Pilot',group:'pilot',category:'Growth',availability:'Müşteri pilotu aktif • public app henüz yok',summary:'Bir markanın ChatGPT ve benzeri cevap motorlarında rakiplere karşı ne kadar görünür olduğunu ölçer.',desc:'Markaların cevap motorlarındaki görünürlüğünü rakiplerle kıyaslayan analiz sistemi.',detail:'Rakip karşılaştırması, görünürlük sorguları ve aksiyon önerileri üreten; ilk müşteri pilotu üzerinde test edilen servis ve yazılım katmanı.',primary:null,secondary:null},
  {icon:'UG',name:'UGC Engine',status:'Live test',group:'pilot',category:'Growth',availability:'Gerçek outreach üzerinde test ediliyor',summary:'Marka bulma, mesaj hazırlama, takip ve UGC kreatif üretimini tek satış akışına toplar.',desc:'Küçük markalar için UGC fırsatı bulma, outreach, takip ve kreatif üretim iş akışı.',detail:'Lead bulma, kişiselleştirilmiş outreach, takip ve kreatif örnek üretimini tek akışta toplamak için geliştiriliyor.',primary:null,secondary:null},
  {icon:'LO',name:'LifeOS',status:'Building',group:'building',category:'Productivity',availability:'Geliştirme aşamasında • public app henüz yok',summary:'Yeni fikir üretmekten çok, hangi projeye devam edip hangisini durdurman gerektiğine karar verir.',desc:'Projeleri ve fikirleri sıralayan, gerektiğinde STOP / GO kararı veren odak sistemi.',detail:'Mission → Projects → Idea Vault → Score → STOP/GO → Today → Weekly Review akışıyla, daha fazla iş yönetmek yerine daha fazla işi bitirmeyi hedefliyor.',primary:null,secondary:null},
  {icon:'YT',name:'YouTube Translator',status:'Beta',group:'pilot',category:'Voice & Translation',availability:'Deneme sürümü • Windows + Chrome',summary:'İngilizce YouTube videolarını izlerken Türkçe seslendirme üretir.',desc:'Gerçek zamanlıya yakın Türkçe dublaj prototipi. Beta kullanıcılarının gecikme, akıcılık ve ses kalitesi geri bildirimi özellikle değerli.',detail:'Videodaki konuşmayı yakalayıp Türkçe ses üretmek için yerel konuşma tanıma, çeviri ve TTS akışı kullanır. Bu sürüm deneysel beta olarak dağıtılıyor; amaç gerçek kullanıcı bilgisayarlarında gecikme, süreklilik ve kurulum deneyimini ölçmek.',primary:['Deneme sürümünü indir','/downloads/YouTube-Translator-Beta-0.3.1.zip'],secondary:['Geri bildirim','mailto:hello@trendflowapp.com?subject=YouTube%20Translator%20Beta%20Geri%20Bildirim'],downloadPending:false},
  {icon:'MT',name:'MailTask',status:'Beta',group:'local',category:'Email Productivity',availability:'Deneme sürümü • Windows + Outlook + yerel işlem',summary:'Outlook maillerini bilgisayarda okuyup görev, öncelik ve takip listesine dönüştürür.',desc:'Mail verisini merkezi sunucuya göndermeden, Outlook konuşmalarından görev ve takip listesi çıkaran yerel uygulama.',detail:'Klasik Outlook + Ollama + yerel veritabanı ile çalışır. Mail içeriği kullanıcının bilgisayarında kalır; konuşma özeti, görev, öncelik, kanıt ve kullanıcı geri bildirimi katmanları üretir. Beta dağıtımı Windows kullanıcıları için hazırlanıyor.',primary:null,secondary:['Geri bildirim','mailto:hello@trendflowapp.com?subject=MailTask%20Beta%20Geri%20Bildirim'],downloadPending:true},
  {icon:'TF',name:'TrendFlow',status:'Product',group:'active',category:'Market Intelligence',availability:'Web sitesi aktif',summary:'Trend, uygulama ve ürün fırsatlarını keşfetmek için farklı sinyalleri tek merkezde toplar.',desc:'Trend, pazar ve ürün fırsatlarını keşfetmeye odaklı opportunity intelligence ürünü.',detail:'Trend, uygulama, ürün ve içerik fırsatlarını tek yerde araştırmak için geliştirilen fırsat keşif ürünü.',primary:['Web sitesini aç','https://trendflowapp.com'],secondary:null},
  {icon:'MC',name:'Marine Calculation',status:'Tool',group:'active',category:'Engineering',availability:'Mühendislik aracı • web demosu henüz yok',summary:'Gemi ve yat projelerindeki tekrarlayan mühendislik hesaplarını küçük araçlara dönüştürür.',desc:'Marine engineering hesaplarını hızlandıran hafif mühendislik araç seti.',detail:'Gemi ve yat projelerinde tekrar eden mühendislik hesaplarını daha hızlı ve düzenli yapmak için geliştirilen araç seti.',primary:null,secondary:null},
  {icon:'SF',name:'SchoolFlow',status:'Live demo',group:'active',category:'Education Operations',availability:'Vercel production • canlı',summary:'Ders programı çakışmalarını azaltır ve öğretmen uygunluğu / görevlendirmesini kolaylaştırır.',desc:'Okul ders programı, çakışma önleme ve öğretmen görevlendirme platformu.',detail:'Okul operasyonlarında ders programı, öğretmen uygunluğu, çakışma önleme, vekalet ve devamsızlık işlerini otomatikleştirmeye odaklanan çalışan prototip. Production demo Vercel üzerinde çalışıyor.',primary:['Canlı demoyu aç','https://schoolflow-ai.vercel.app'],secondary:null},
  {icon:'ST',name:'SpoolTrack',status:'Live demo',group:'active',category:'Marine Operations',availability:'Vercel production • canlı',summary:'Spool ve ISO üretimini zone, sistem, revizyon ve durum bazında sahadan takip eder.',desc:'Mekanik imalat için mobil odaklı spool / ISO üretim takip sistemi.',detail:'SpoolTrack; mekanik üretim ilerlemesini sistem, zone, spool ve ISO bazında takip etmek üzere tasarlandı. PWA desteği sayesinde mobil cihazda uygulama benzeri kullanılabilir.',primary:['Canlı demoyu aç','https://boru-takip.vercel.app'],secondary:null},
  {icon:'EA',name:'Eymiş Kids — Oyun Alanı',status:'Live demo',group:'active',category:'Local Business',availability:'Vercel production • canlı PWA',summary:'Çocuk oyun alanı ve cafe operasyonunu telefondan yönetmeye yönelik mobil uygulama.',desc:'Eymiş Kids için oyun alanı ve cafe yönetimini kolaylaştıran PWA tabanlı operasyon uygulaması.',detail:'Oyun alanı ve cafe işletmesinde giriş/çıkış ve mobil operasyon akışlarını desteklemek üzere geliştirildi. PWA desteği, ana ekrana kurulum, offline durum ve mobil güvenli alan optimizasyonları içeriyor.',primary:['Canlı demoyu aç','https://oyun-alani.vercel.app'],secondary:null},
  {icon:'MP',name:'MutfakPlan',status:'Live demo',group:'active',category:'Food Utility',availability:'Vercel production • canlı',summary:'Evdeki malzemelerden ne pişirilebileceğini gösterir ve eksikleri alışveriş listesine dönüştürür.',desc:'Buzdolabındaki malzemeleri tarif ve alışveriş planına dönüştüren pratik mutfak yardımcısı.',detail:'MutfakPlan, evdeki malzemeleri fotoğraftan veya listeden değerlendirip uygun tarifleri önermek ve eksik ürünleri alışveriş listesine eklemek için geliştirildi. Kullanıcıya teknoloji değil, hızlı yemek kararı ve planlama kolaylığı sunar.',primary:['Canlı demoyu aç','https://yemek-fikirleri.vercel.app'],secondary:null},
  {icon:'KN',name:'Kalori Notu',status:'Live demo',group:'active',category:'Health Utility',availability:'Vercel production • canlı',summary:'Yemeğin fotoğrafından yaklaşık kalori tahmini yapmayı hedefleyen hızlı kayıt aracı.',desc:'Fotoğrafını çek, yaklaşık kalori bilgisini öğren ve günlük takibi kolaylaştır.',detail:'Mobil kullanım için geliştirilen kalori takip aracı. Fotoğraf üzerinden yaklaşık kalori tahmini yaklaşımını hızlı, düşük sürtünmeli bir günlük kayıt deneyimine dönüştürmeyi hedefliyor.',primary:['Canlı demoyu aç','https://kalori-notu.vercel.app'],secondary:null},
  {icon:'PDF',name:'PDF Düzenleyici',status:'Live demo',group:'active',category:'Document Tool',availability:'Vercel production • canlı',summary:'PDF içindeki metinleri çıkarmaya, incelemeye ve düzenleme akışını hızlandırmaya yardımcı olur.',desc:'Tarayıcı tabanlı PDF görüntüleme, metin çıkarma ve düzenleme aracı.',detail:'PDF sayfalarındaki metin elementlerini çıkarmak, içerikleri incelemek ve düzenleme süreçlerini kolaylaştırmak için geliştirildi. Safari uyumluluğu ve PDF render çakışmalarını önleyen iyileştirmeler de içeriyor.',primary:['Canlı demoyu aç','https://pdf-duzenliyici.vercel.app'],secondary:null},
  {icon:'PA',name:'P&ID Analyst',status:'Live demo',group:'active',category:'Engineering',availability:'Vercel production • canlı',summary:'P&ID PDF’lerini analiz edip ekipman, hat ve malzeme ilişkilerini daha hızlı incelemeye yardımcı olur.',desc:'P&ID PDF analizi ve malzeme listesi üretimi için geliştirilen mühendislik aracı.',detail:'P&ID PDF analizi ve material list generation akışlarını desteklemek üzere geliştirildi. Teknik doküman incelemesini ve ilk malzeme çıkarımını hızlandırmayı hedefliyor.',primary:['Canlı demoyu aç','https://pid-analist.vercel.app'],secondary:null},
  {icon:'RV',name:'Review Analyzer',status:'Live demo',group:'active',category:'Customer Insight',availability:'Vercel production • canlı demo',summary:'Müşteri yorumlarını toplu biçimde inceleyip tekrar eden sorunları ve ürün sinyallerini görünür hale getirir.',desc:'Manuel yorum metni veya demo ürün verisi üzerinden çalışan müşteri yorum analiz aracı.',detail:'Review Analyzer, ham müşteri yorumlarını analiz eder; manuel metin girişi ve demo ürün analizi akışlarını destekler. Amaç tekrar eden pain point, olumlu sinyal ve ürün geliştirme fırsatlarını hızlıca görünür hale getirmektir.',primary:['Canlı demoyu aç','https://proof-coral-two.vercel.app'],secondary:null},
  {icon:'DA',name:'DosyaAsistanı',status:'Local',group:'local',category:'Document Automation',availability:'Yerel masaüstü aracı • web üzerinden açılmaz',summary:'Teknik dosyaları başlık ve antet bilgilerine göre otomatik isimlendirir ve sınıflandırır.',desc:'PDF, Excel, DWG, DXF ve Word dosyalarını içeriklerine göre isimlendiren ve sınıflandıran yerel asistan.',detail:'Teknik dokümanları antet ve başlık bilgilerine göre sınıflandırıp yeniden adlandırmaya odaklanan masaüstü araç.',primary:null,secondary:null}
];

const grid = document.querySelector('#product-grid');
const modal = document.querySelector('#product-modal');
const modalContent = document.querySelector('#modal-content');
const filters = document.querySelector('#filters');
const statProducts = document.querySelector('#stat-products');

statProducts.textContent = `${products.length}`;

function linkMarkup(link, className='') {
  if (!link) return '';
  const [label,url] = link;
  const external = url.startsWith('http');
  const download = url.endsWith('.zip') ? 'download' : '';
  return `<a class="${className}" href="${url}" ${external ? 'target="_blank" rel="noreferrer"' : ''} ${download}>${label} ${url.endsWith('.zip') ? '↓' : external ? '↗' : '→'}</a>`;
}

function render(filter='all') {
  const visible = filter === 'all' ? products : products.filter(p => p.group === filter);
  grid.innerHTML = visible.map(p => `
    <article class="card" data-product="${products.indexOf(p)}" tabindex="0">
      <div class="card-top"><span class="icon">${p.icon}</span><span class="badge ${p.group}">${p.status}</span></div>
      <div class="card-category">${p.category}</div>
      <h3>${p.name}</h3>
      <p class="card-summary">${p.summary}</p>
      <p class="card-desc">${p.desc}</p>
      <div class="availability"><span></span>${p.availability}</div>
      ${p.downloadPending ? '<div class="beta-strip">↓ Beta indirme paketi siteye ekleniyor</div>' : ''}
      <div class="card-links">
        ${p.primary ? linkMarkup(p.primary) : '<button class="detail-link" type="button">Detay →</button>'}
        ${p.secondary ? linkMarkup(p.secondary) : ''}
        ${p.primary ? '<button class="detail-link" type="button">Detay →</button>' : ''}
      </div>
    </article>`).join('');
}

function openModal(product) {
  modalContent.innerHTML = `
    <div class="modal-head"><span class="icon big">${product.icon}</span><span class="badge ${product.group}">${product.status}</span></div>
    <span class="kicker">${product.category}</span>
    <h2 id="modal-title">${product.name}</h2>
    <p class="modal-summary">${product.summary}</p>
    <p class="modal-lead">${product.detail}</p>
    ${product.downloadPending ? '<div class="beta-notice"><strong>Deneme sürümü</strong><span>İndirilebilir beta paketi hazırlanıyor. Test eden kullanıcılardan kurulum, hız, hata ve kullanım deneyimi geri bildirimi toplanacak.</span></div>' : ''}
    <div class="modal-meta">
      <div><span>STATUS</span><strong>${product.status}</strong></div>
      <div><span>ERİŞİM</span><strong>${product.availability}</strong></div>
    </div>
    <div class="modal-actions">
      ${linkMarkup(product.primary,'btn primary')}
      ${linkMarkup(product.secondary,'btn secondary')}
    </div>`;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.classList.add('modal-open');
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  document.body.classList.remove('modal-open');
}

filters.addEventListener('click', e => {
  const btn = e.target.closest('.filter');
  if (!btn) return;
  document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  render(btn.dataset.filter);
});

grid.addEventListener('click', e => {
  if (e.target.closest('a')) return;
  const card = e.target.closest('.card');
  if (card) openModal(products[Number(card.dataset.product)]);
});

grid.addEventListener('keydown', e => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.closest('.card')) {
    e.preventDefault();
    const card = e.target.closest('.card');
    openModal(products[Number(card.dataset.product)]);
  }
});

document.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeModal));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

render();