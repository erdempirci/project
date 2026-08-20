const products = [
  {
    icon:'SR', name:'ShipReady', status:'Live demo', state:'active', area:'business', areaLabel:'Business Tools', category:'App Release Operations',
    availability:'Vercel production • canlı',
    summary:'App Store ve Google Play yayın sürecini tek kontrol akışına dönüştürür.',
    desc:'Mobil uygulama yayınlamayı teknik bir labirent olmaktan çıkaran release operasyon aracı.',
    detail:'Build, mağaza gereksinimleri, yayın hazırlığı ve release kontrol noktalarını tek yerde anlaşılır hale getirir. Amaç geliştiricinin “uygulama yaptım, şimdi nasıl yayınlayacağım?” sorununu çözmektir.',
    primary:['Canlı demoyu aç','https://shipready.vercel.app'], secondary:null
  },
  {
    icon:'JF', name:'JobFit', status:'Live demo', state:'active', area:'career', areaLabel:'Career', category:'Job Application Assistant',
    availability:'Vercel production • canlı',
    summary:'CV ile iş ilanını karşılaştırıp başvuru uyumunu ve eksik noktaları hızlıca gösterir.',
    desc:'İş başvurusu öncesi “bu ilana ne kadar uyuyorum?” sorusuna hızlı ve somut cevap verir.',
    detail:'CV metni ile iş ilanını karşılaştırır; 0–100 eşleşme skoru, güçlü anahtar kelimeler, eksikler ve başvuru öncesi iyileştirme önerisi üretir. Mevcut MVP API gerektirmeden çalışır.',
    primary:['Canlı demoyu aç','https://job-fit-one.vercel.app'], secondary:null
  },
  {
    icon:'IF', name:'InternFlow', status:'Prototype', state:'building', area:'career', areaLabel:'Career', category:'Internship Matching',
    availability:'Repo hazır • canlı Vercel domaini henüz doğrulanmadı',
    summary:'Mühendislik öğrencileri ile şirketlerin staj fırsatlarını daha doğru eşleştirmeyi hedefler.',
    desc:'Türkiye odaklı mühendislik staj eşleştirme ve yerleştirme platformu.',
    detail:'Öğrenci profili, yetenekler, bölüm, şehir ve şirket ihtiyaçlarını bir araya getirerek daha anlamlı staj eşleşmeleri üretmeyi hedefleyen platform. Canlı Vercel adresi bu turda doğrulanmadığı için demo butonu gösterilmiyor.',
    primary:null, secondary:null
  },
  {
    icon:'MF', name:'MarineFlow', status:'Live demo', state:'active', area:'naval', areaLabel:'Naval Engineering', category:'Hydraulic Calculation',
    availability:'Vercel production • canlı',
    summary:'Marine piping hatlarında basınç kaybı ve gerekli pompa basma yüksekliğini hızlıca hesaplar.',
    desc:'Tek boru hattı için Darcy-Weisbach, fitting kayıpları, statik yükseklik ve toplam head hesabını tek ekranda toplar.',
    detail:'Debi, çap, uzunluk, pürüzlülük, fitting ve statik yükseklik girdilerinden Reynolds sayısı, sürtünme faktörü, major/minor kayıplar ve toplam gerekli pompa basma yüksekliği üretir. Mühendislik prototipidir; tasarım ve satın alma öncesi sonuçlar bağımsız doğrulanmalıdır.',
    primary:['Canlı demoyu aç','https://marine-flow-tau.vercel.app'], secondary:null
  },
  {
    icon:'FD', name:'ForexLab', status:'Prototype', state:'building', area:'trading', areaLabel:'Trading', category:'Strategy Research',
    availability:'Vercel-ready repo • canlı domain henüz doğrulanmadı',
    summary:'H1 kapanış bazlı forex strateji sinyallerini webhook, TradingView ve dashboard akışında test eder.',
    desc:'Manuel stratejiyi ölçülebilir ve tekrar test edilebilir bir araştırma sistemine dönüştüren trading laboratuvarı.',
    detail:'H1 EBP sinyallerini TradingView Pine ile yakalar, webhook üzerinden sunucuda yeniden doğrular ve opsiyonel Supabase ile saklar. Sistem araştırma/eğitim amaçlıdır ve emir çalıştırmaz.',
    primary:null, secondary:null
  },
  {
    icon:'TR', name:'TradeDeck', status:'Live demo', state:'active', area:'trading', areaLabel:'Trading', category:'Account Risk Monitor',
    availability:'Vercel production • canlı',
    summary:'MT4, MT5 ve cTrader hesaplarını equity, günlük P&L ve drawdown açısından tek panelde izler.',
    desc:'Prop ve kişisel trading hesaplarının risk kurallarını mobil odaklı tek ekranda toplar.',
    detail:'Portföy equity, günlük P&L, hesap kartları, drawdown kullanımı ve prop-account risk ekranı sunar. Collector/EA bridge üzerinden gerçek terminal verisi alınacak şekilde tasarlanmıştır.',
    primary:['Canlı demoyu aç','https://tradedeck-one.vercel.app'], secondary:null
  },
  {
    icon:'AV', name:'Answer Visibility', status:'Pilot', state:'pilot', area:'growth', areaLabel:'Growth', category:'Brand Visibility',
    availability:'Müşteri pilotu aktif • public app henüz yok',
    summary:'Bir markanın cevap motorlarında rakiplere karşı ne kadar görünür olduğunu ölçer.',
    desc:'Markaların ChatGPT ve benzeri cevap motorlarındaki görünürlüğünü rakiplerle kıyaslayan analiz sistemi.',
    detail:'Marka, kategori ve rakip bazında görünürlük sorguları üretir; sonuçları kıyaslar ve hangi konularda güçlenilmesi gerektiğini görünür hale getirir.',
    primary:null, secondary:null
  },
  {
    icon:'GE', name:'Growth Engine', status:'Live internal', state:'active', area:'growth', areaLabel:'Growth', category:'Portfolio Growth Operations',
    availability:'Vercel production • internal MVP',
    summary:'Project Factory ürünleri için growth, SEO, GEO, social ve campaign çalışmalarını tek panelde toplar.',
    desc:'Portföy genelinde pazarlama ve büyüme işlerini proje bazında görünür hale getiren ortak growth paneli.',
    detail:'Proje bazlı Growth / SEO / GEO / Social skorları, CMO ve kanal ajanları, günlük campaign brief alanı ve portföy görünümü sunar. İç operasyon aracı olarak geliştiriliyor.',
    primary:['Canlı paneli aç','https://project-factory-growth-engine.vercel.app'], secondary:null
  },
  {
    icon:'UG', name:'UGC Engine', status:'Live test', state:'pilot', area:'growth', areaLabel:'Growth', category:'Customer Acquisition',
    availability:'Gerçek outreach üzerinde test ediliyor',
    summary:'Marka bulma, mesaj hazırlama ve takip işini tek satış akışında toplar.',
    desc:'Küçük markalar için UGC fırsatı bulma, outreach ve takip operasyonunu hızlandırır.',
    detail:'Lead bulma, kişiselleştirilmiş outreach, takip ve kreatif örnek üretimini tek akışta toplamak için geliştiriliyor.',
    primary:null, secondary:null
  },
  {
    icon:'LO', name:'LifeOS', status:'Building', state:'building', area:'productivity', areaLabel:'Productivity', category:'Focus & Prioritization',
    availability:'Geliştirme aşamasında • public app henüz yok',
    summary:'Hangi projeye devam edip hangisini durdurman gerektiğini görünür hale getirir.',
    desc:'Projeleri ve fikirleri sıralayan, gerektiğinde STOP / GO kararı veren odak sistemi.',
    detail:'Mission → Projects → Idea Vault → Score → STOP/GO → Today → Weekly Review akışıyla daha fazla iş yönetmek yerine daha fazla işi bitirmeyi hedefler.',
    primary:null, secondary:null
  },
  {
    icon:'MB', name:'MindBack', status:'Live demo', state:'active', area:'social', areaLabel:'Social & Everyday', category:'Focus Awareness',
    availability:'Vercel production • canlı PWA',
    summary:'Zihnin dağıldığını tek dokunuşla kaydedip tekrar mevcut işe dönmeyi kolaylaştırır.',
    desc:'Dikkat dağınıklığını bastırmak yerine fark edip “sonra” listesine park eden kişisel odak aracı.',
    detail:'Günün tek odağı, tek dokunuşla zihin dağılması kaydı, kategori ve not, park listesi, günlük rapor ve 7 günlük temel metrikler sunar. v0.1 yerel depolama kullanır.',
    primary:['Canlı demoyu aç','https://mindback-navy.vercel.app'], secondary:null
  },
  {
    icon:'RT', name:'Rutin', status:'Live demo', state:'active', area:'social', areaLabel:'Social & Everyday', category:'Habit & Routine Tracking',
    availability:'Vercel production • canlı PWA',
    summary:'Günlük alışkanlık, seri, kilo ve günün odağını tek mobil akışta takip eder.',
    desc:'Karmaşık planlama yerine günlük rutinin görülmesini ve tamamlanmasını kolaylaştıran kişisel takip aracı.',
    detail:'Günlük alışkanlık listesi, tamamlanma oranı, streak, son 7 gün görünümü, kilo takibi ve günün odağını sunar. Veriler cihazdaki localStorage içinde tutulur.',
    primary:['Canlı demoyu aç','https://rutin-drab.vercel.app'], secondary:null
  },
  {
    icon:'KP', name:'Kapış Live', status:'Live beta', state:'pilot', area:'social', areaLabel:'Social & Everyday', category:'Social Prediction',
    availability:'Vercel production • canlı beta',
    summary:'İki seçenek arasında hızlı tahmin/oy verme deneyimini canlı eşleşmeler ve geri bildirimle test eder.',
    desc:'Sağa/sola seçim mantığını sosyal tahmin ve karşılaştırma deneyimine dönüştüren canlı beta.',
    detail:'Merkezi profiller, oylar, eşleşmeler ve geri bildirim Supabase üzerinde tutulur. Ürün gerçek kullanıcı davranışını ve hangi karşılaştırmaların ilgi çektiğini ölçmek için beta olarak çalışıyor.',
    primary:['Canlı betayı aç','https://kapis-live.vercel.app'], secondary:null
  },
  {
    icon:'YT', name:'YouTube Translator', status:'Beta', state:'pilot', area:'media', areaLabel:'Media', category:'Voice & Translation',
    availability:'Deneme sürümü • Windows + Chrome',
    summary:'İngilizce YouTube videolarını izlerken Türkçe seslendirme üretir.',
    desc:'Gerçek zamanlıya yakın Türkçe dublaj prototipi.',
    detail:'Videodaki konuşmayı yakalayıp Türkçe ses üretmek için yerel konuşma tanıma, çeviri ve TTS akışı kullanır. Beta sürümünde gecikme, süreklilik ve ses deneyimi ölçülüyor.',
    primary:['Deneme sürümünü indir','/downloads/YouTube-Translator-Beta-0.3.1.zip'],
    secondary:['Geri bildirim','mailto:hello@trendflowapp.com?subject=YouTube%20Translator%20Beta%20Geri%20Bildirim'],
    downloadPending:false
  },
  {
    icon:'MT', name:'MailTask', status:'Beta', state:'local', area:'productivity', areaLabel:'Productivity', category:'Email Productivity',
    availability:'Deneme sürümü • Windows + Outlook + yerel işlem',
    summary:'Outlook maillerini görev, öncelik ve takip listesine dönüştürür.',
    desc:'Mail trafiğini yapılacak işe çeviren yerel masaüstü yardımcısı.',
    detail:'Outlook + yerel model + yerel veritabanı ile çalışır. Mail içeriği kullanıcının bilgisayarında kalırken konuşma özeti, görev ve takip kaydı üretir.',
    primary:null,
    secondary:['Geri bildirim','mailto:hello@trendflowapp.com?subject=MailTask%20Beta%20Geri%20Bildirim'],
    downloadPending:true
  },
  {
    icon:'TF', name:'TrendFlow', status:'Product', state:'active', area:'growth', areaLabel:'Growth', category:'Market Intelligence',
    availability:'Web sitesi aktif',
    summary:'Trend, uygulama ve ürün fırsatlarını keşfetmek için farklı sinyalleri tek merkezde toplar.',
    desc:'Yeni fırsatları araştırmayı ve karşılaştırmayı hızlandıran pazar keşif ürünü.',
    detail:'Trend, uygulama, ürün ve içerik fırsatlarını tek yerde araştırmak için geliştirilen fırsat keşif ürünü.',
    primary:['Web sitesini aç','https://trendflowapp.com'], secondary:null
  },
  {
    icon:'MC', name:'Marine Calculation', status:'Toolset', state:'local', area:'naval', areaLabel:'Naval Engineering', category:'Engineering Calculations',
    availability:'Hesaplama araç seti • web demosu henüz yok',
    summary:'Gemi ve yat projelerindeki tekrarlayan mühendislik hesaplarını küçük araçlara dönüştürür.',
    desc:'Naval engineering hesaplarını daha hızlı ve standart şekilde yapmak için geliştirilen araç seti.',
    detail:'Gemi ve yat projelerinde tekrar eden mühendislik hesaplarını daha hızlı, izlenebilir ve düzenli yapmak için geliştiriliyor. Şu anda public web demosu bulunmadığı için canlı ürün olarak işaretlenmiyor.',
    primary:null, secondary:null
  },
  {
    icon:'TD', name:'TeacherDesk', status:'Live demo', state:'active', area:'education', areaLabel:'Education', category:'Teacher Operations',
    availability:'Vercel production • canlı',
    summary:'Öğretmenlerin ders, nöbet ve görevlendirme listelerini tek yerde takip etmesini kolaylaştırır.',
    desc:'Öğretmenin günlük okul planını tek ekranda görünür hale getiren takip aracı.',
    detail:'Ders listeleri, nöbet planı ve öğretmen görevlendirmelerini tek yerde takip etmeyi kolaylaştırır. Amaç okul yönetim sistemi olmaktan çok öğretmenin günlük iş akışındaki dağınıklığı azaltmaktır.',
    primary:['Canlı demoyu aç','https://schoolflow-ai.vercel.app'], secondary:null
  },
  {
    icon:'ST', name:'SpoolTrack', status:'Live demo', state:'active', area:'naval', areaLabel:'Naval Engineering', category:'Production Tracking',
    availability:'Vercel production • canlı PWA',
    summary:'Spool ve ISO üretimini zone, sistem, revizyon ve durum bazında sahadan takip eder.',
    desc:'Gemi ve yat projelerinde mekanik imalat ilerlemesini sahadan takip etmeye yönelik mobil araç.',
    detail:'SpoolTrack; üretim ilerlemesini sistem, zone, spool ve ISO bazında takip etmek üzere tasarlandı. PWA desteği sayesinde sahada telefondan uygulama benzeri kullanılabilir.',
    primary:['Canlı demoyu aç','https://boru-takip.vercel.app'], secondary:null
  },
  {
    icon:'OT', name:'Oyun Alanı Takip', status:'Live demo', state:'active', area:'business', areaLabel:'Business Tools', category:'Venue Operations',
    availability:'Vercel production • canlı PWA',
    summary:'Çocuk oyun alanlarında giriş-çıkış, süre ve günlük operasyon takibini telefondan kolaylaştırır.',
    desc:'Oyun alanı işletmelerinin masa başı yerine sahadan yönetilmesine yardımcı olan mobil operasyon uygulaması.',
    detail:'Çocukların giriş-çıkış akışı, kullanım süresi, yaklaşan çıkış zamanı ve günlük işletme takibini tek mobil ekranda toplamak üzere geliştirildi.',
    primary:['Canlı demoyu aç','https://oyun-alani.vercel.app'], secondary:null
  },
  {
    icon:'MP', name:'MutfakPlan', status:'Live demo', state:'active', area:'social', areaLabel:'Social & Everyday', category:'Home Utility',
    availability:'Vercel production • canlı',
    summary:'Evdeki malzemelerden ne pişirilebileceğini gösterir ve eksikleri alışveriş listesine dönüştürür.',
    desc:'“Bugün ne pişirsem?” sorusunu birkaç dokunuşta plana dönüştüren günlük yaşam aracı.',
    detail:'MutfakPlan, evdeki malzemeleri değerlendirip uygun tarifleri önerir ve eksik ürünleri alışveriş listesine ekler. Ana değeri teknoloji değil, karar yorgunluğunu azaltmasıdır.',
    primary:['Canlı demoyu aç','https://yemek-fikirleri.vercel.app'], secondary:null
  },
  {
    icon:'KN', name:'Kalori Notu', status:'Live demo', state:'active', area:'social', areaLabel:'Social & Everyday', category:'Personal Tracking',
    availability:'Vercel production • canlı',
    summary:'Yemeğin fotoğrafından yaklaşık kalori tahminiyle hızlı günlük kayıt oluşturur.',
    desc:'Kalori takibini uzun formlar yerine hızlı fotoğraf kaydına indiren kişisel takip aracı.',
    detail:'Amaç profesyonel beslenme analizi yapmak değil; günlük yeme içme farkındalığını düşük sürtünmeli bir kayıt alışkanlığına dönüştürmektir.',
    primary:['Canlı demoyu aç','https://kalori-notu.vercel.app'], secondary:null
  },
  {
    icon:'PDF', name:'PDF Düzenleyici', status:'Live demo', state:'active', area:'productivity', areaLabel:'Productivity', category:'Document Tool',
    availability:'Vercel production • canlı',
    summary:'PDF içindeki metinleri çıkarmaya, incelemeye ve düzenleme akışını hızlandırmaya yardımcı olur.',
    desc:'Tarayıcı tabanlı PDF görüntüleme, metin çıkarma ve düzenleme aracı.',
    detail:'PDF sayfalarındaki metin elementlerini çıkarmak, içerikleri incelemek ve düzenleme süreçlerini kolaylaştırmak için geliştirildi.',
    primary:['Canlı demoyu aç','https://pdf-duzenliyici.vercel.app'], secondary:null
  },
  {
    icon:'PA', name:'P&ID Analyst', status:'Live demo', state:'active', area:'naval', areaLabel:'Naval Engineering', category:'Technical Document Analysis',
    availability:'Vercel production • canlı',
    summary:'P&ID PDF’lerini analiz edip ekipman, hat ve malzeme ilişkilerini daha hızlı incelemeye yardımcı olur.',
    desc:'Naval engineering ekipleri için P&ID inceleme ve ilk malzeme çıkarım aracıdır.',
    detail:'P&ID PDF analizi ve ilk material list generation akışlarını destekler. Teknik doküman incelemesinde ilk tur manuel emeği azaltmayı hedefler.',
    primary:['Canlı demoyu aç','https://pid-analist.vercel.app'], secondary:null
  },
  {
    icon:'RV', name:'Review Analyzer', status:'Live demo', state:'active', area:'growth', areaLabel:'Growth', category:'Customer Insight',
    availability:'Vercel production • canlı demo',
    summary:'Müşteri yorumlarını toplu biçimde inceleyip tekrar eden sorunları ve ürün sinyallerini görünür hale getirir.',
    desc:'Ham yorumları ürün kararına dönüşebilecek müşteri içgörülerine çevirir.',
    detail:'Manuel yorum metni ve demo ürün verisi üzerinden tekrar eden pain point, olumlu sinyal ve ürün geliştirme fırsatlarını görünür hale getirir.',
    primary:['Canlı demoyu aç','https://proof-coral-two.vercel.app'], secondary:null
  },
  {
    icon:'DA', name:'DosyaAsistanı', status:'Local', state:'local', area:'productivity', areaLabel:'Productivity', category:'Document Automation',
    availability:'Yerel masaüstü aracı • web üzerinden açılmaz',
    summary:'Teknik dosyaları başlık ve antet bilgilerine göre otomatik isimlendirir ve sınıflandırır.',
    desc:'Dağınık teknik dokümanları daha bulunabilir hale getiren yerel dosya düzenleme yardımcısı.',
    detail:'PDF, Excel, DWG, DXF ve Word dosyalarını içeriklerine, başlıklarına ve antet bilgilerine göre sınıflandırıp yeniden adlandırmaya odaklanır.',
    primary:null, secondary:null
  }
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
  const visible = filter === 'all' ? products : products.filter(p => p.area === filter);
  grid.innerHTML = visible.map(p => `
    <article class="card" data-product="${products.indexOf(p)}" tabindex="0">
      <div class="card-top"><span class="icon">${p.icon}</span><span class="badge ${p.state}">${p.status}</span></div>
      <div class="area-label">${p.areaLabel}</div>
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
    <div class="modal-head"><span class="icon big">${product.icon}</span><span class="badge ${product.state}">${product.status}</span></div>
    <span class="area-label modal-area">${product.areaLabel}</span>
    <span class="kicker">${product.category}</span>
    <h2 id="modal-title">${product.name}</h2>
    <p class="modal-summary">${product.summary}</p>
    <p class="modal-lead">${product.detail}</p>
    ${product.downloadPending ? '<div class="beta-notice"><strong>Deneme sürümü</strong><span>İndirilebilir beta paketi hazırlanıyor. Test eden kullanıcılardan kurulum, hız, hata ve kullanım deneyimi geri bildirimi toplanacak.</span></div>' : ''}
    <div class="modal-meta">
      <div><span>STATUS</span><strong>${product.status}</strong></div>
      <div><span>ALAN</span><strong>${product.areaLabel}</strong></div>
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