const products = [
  {
    icon:'SR', name:'ShipReady', status:'Live demo', state:'active', area:'business', areaLabel:'Business Tools', category:'App Release Operations',
    availability:'Vercel production • canlı',
    summary:'App Store ve Google Play yayın sürecini tek kontrol akışına dönüştürür.',
    desc:'Mobil uygulama yayınlamayı teknik bir labirent olmaktan çıkaran release operasyon aracı.',
    detail:'Build, mağaza gereksinimleri, yayın hazırlığı ve release kontrol noktalarını tek yerde anlaşılır hale getirir.',
    primary:['Canlı demoyu aç','https://shipready-mu.vercel.app'], secondary:null
  },
  {
    icon:'JF', name:'JobFit', status:'Live demo', state:'active', area:'career', areaLabel:'Career', category:'Job Application Assistant',
    availability:'Vercel production • canlı',
    summary:'CV ile iş ilanını karşılaştırıp başvuru uyumunu ve eksik noktaları hızlıca gösterir.',
    desc:'İş başvurusu öncesi “bu ilana ne kadar uyuyorum?” sorusuna hızlı ve somut cevap verir.',
    detail:'CV metni ile iş ilanını karşılaştırır; 0–100 eşleşme skoru, güçlü anahtar kelimeler ve başvuru önerileri üretir.',
    primary:['Canlı demoyu aç','https://job-fit-one.vercel.app'], secondary:null
  },
  {
    icon:'IF', name:'InternFlow', status:'Live demo', state:'active', area:'career', areaLabel:'Career', category:'Internship Matching',
    availability:'Vercel production • canlı',
    summary:'Mühendislik öğrencileri ile şirketlerin staj fırsatlarını yapay zeka ile eşleştirir.',
    desc:'Türkiye odaklı mühendislik staj eşleştirme ve yerleştirme platformu.',
    detail:'Öğrenci profili, yetenekler, bölüm, şehir ve şirket ihtiyaçlarını yapay zeka algoritması ile bir araya getirerek staj eşleşmesi sağlar.',
    primary:['Canlı demoyu aç','https://intern-flow-eta.vercel.app'], secondary:null
  },
  {
    icon:'MF', name:'MarineFlow', status:'Live demo', state:'active', area:'naval', areaLabel:'Naval Engineering', category:'Hydraulic Calculation',
    availability:'Vercel production • canlı',
    summary:'Marine piping hatlarında basınç kaybı ve gerekli pompa basma yüksekliğini hızlıca hesaplar.',
    desc:'Tek boru hattı için Darcy-Weisbach, fitting kayıpları ve toplam head hesabını tek ekranda toplar.',
    detail:'Debi, çap, uzunluk, fitting ve statik yükseklik girdilerinden major/minor kayıplar ve gerekli pompa basma yüksekliği üretir.',
    primary:['Canlı demoyu aç','https://marine-flow-tau.vercel.app'], secondary:null
  },
  {
    icon:'FL', name:'ForexLab', status:'Live demo', state:'active', area:'trading', areaLabel:'Trading', category:'Strategy & Signal Lab',
    availability:'Vercel production • canlı',
    summary:'H1 kapanış bazlı forex strateji sinyallerini, webhook ve dashboard akışında test eder.',
    desc:'Manuel stratejiyi ölçülebilir ve tekrar test edilebilir bir araştırma sistemine dönüştüren trading laboratuvarı.',
    detail:'H1 EBP sinyallerini TradingView Pine ile yakalar, webhook üzerinden sunucuda doğrular ve canlı panelde sunar.',
    primary:['Canlı demoyu aç','https://forex-lab-nine.vercel.app'], secondary:null
  },
  {
    icon:'TR', name:'TradeDeck', status:'Live demo', state:'active', area:'trading', areaLabel:'Trading', category:'Account Risk Monitor',
    availability:'Vercel production • canlı',
    summary:'MT4, MT5 ve cTrader hesaplarını equity, günlük P&L ve drawdown açısından tek panelde izler.',
    desc:'Prop ve kişisel trading hesaplarının risk kurallarını mobil odaklı tek ekranda toplar.',
    detail:'Portföy equity, günlük P&L, hesap kartları ve drawdown kullanımını tek ekranda takip eder.',
    primary:['Canlı demoyu aç','https://tradedeck-one.vercel.app'], secondary:null
  },
  {
    icon:'SM', name:'SpecMatch', status:'Live demo', state:'active', area:'business', areaLabel:'Business Tools', category:'Technical Specification Matcher',
    availability:'Vercel production • canlı',
    summary:'Teknik şartname ve ürün gereksinimlerini otomatik olarak karşılaştırıp eşleştirir.',
    desc:'Mühendislik ve ihale süreçlerinde şartname uyumluluk analizini hızlandıran karar aracı.',
    detail:'Şartname maddeleri ile ürün teknik föylerini eşleştirerek uygunluk ve sapma raporu üretir.',
    primary:['Canlı demoyu aç','https://specmatch-nine.vercel.app'], secondary:null
  },
  {
    icon:'ST', name:'SpoolTrack', status:'Live demo', state:'active', area:'naval', areaLabel:'Naval Engineering', category:'Production Tracking',
    availability:'Vercel production • canlı PWA',
    summary:'Spool ve ISO üretimini zone, sistem, revizyon ve durum bazında sahadan takip eder.',
    desc:'Gemi ve yat projelerinde mekanik imalat ilerlemesini sahadan takip etmeye yönelik mobil araç.',
    detail:'Üretim ilerlemesini sistem, zone, spool ve ISO bazında sahadan telefondan takip etmeyi sağlar.',
    primary:['Canlı demoyu aç','https://boru-takip.vercel.app'], secondary:null
  },
  {
    icon:'PA', name:'P&ID Analyst', status:'Live demo', state:'active', area:'naval', areaLabel:'Naval Engineering', category:'Technical Document Analysis',
    availability:'Vercel production • canlı',
    summary:'P&ID PDF’lerini analiz edip ekipman, hat ve malzeme ilişkilerini daha hızlı incelemeye yardımcı olur.',
    desc:'Naval engineering ekipleri için P&ID inceleme ve ilk malzeme çıkarım aracıdır.',
    detail:'P&ID PDF analizi ve malzeme listesi çıkarma süreçlerindeki manuel emeği azaltır.',
    primary:['Canlı demoyu aç','https://pid-analist.vercel.app'], secondary:null
  },
  {
    icon:'TD', name:'TeacherDesk', status:'Live demo', state:'active', area:'education', areaLabel:'Education', category:'Teacher Operations',
    availability:'Vercel production • canlı',
    summary:'Öğretmenlerin ders, nöbet ve görevlendirme listelerini tek yerde takip etmesini kolaylaştırır.',
    desc:'Öğretmenin günlük okul planını tek ekranda görünür hale getiren takip aracı.',
    detail:'Ders listeleri, nöbet planı ve öğretmen görevlendirmelerini tek yerde toplar.',
    primary:['Canlı demoyu aç','https://schoolflow-ai.vercel.app'], secondary:null
  },
  {
    icon:'MB', name:'MindBack', status:'Live demo', state:'active', area:'social', areaLabel:'Social & Everyday', category:'Focus Awareness',
    availability:'Vercel production • canlı PWA',
    summary:'Zihnin dağıldığını tek dokunuşla kaydedip tekrar mevcut işe dönmeyi kolaylaştırır.',
    desc:'Dikkat dağınıklığını bastırmak yerine fark edip “sonra” listesine park eden kişisel odak aracı.',
    detail:'Günün tek odağı, tek dokunuşla zihin dağılması kaydı ve 7 günlük metrikler sunar.',
    primary:['Canlı demoyu aç','https://mindback-navy.vercel.app'], secondary:null
  },
  {
    icon:'RT', name:'Rutin', status:'Live demo', state:'active', area:'social', areaLabel:'Social & Everyday', category:'Habit & Routine Tracking',
    availability:'Vercel production • canlı PWA',
    summary:'Günlük alışkanlık, seri, kilo ve günün odağını tek mobil akışta takip eder.',
    desc:'Karmaşık planlama yerine günlük rutinin görülmesini ve tamamlanmasını kolaylaştırır.',
    detail:'Günlük alışkanlık listesi, tamamlanma oranı, streak ve kilo takibi sunar.',
    primary:['Canlı demoyu aç','https://rutin-drab.vercel.app'], secondary:null
  },
  {
    icon:'KP', name:'Kapış Live', status:'Live beta', state:'pilot', area:'social', areaLabel:'Social & Everyday', category:'Social Prediction',
    availability:'Vercel production • canlı beta',
    summary:'İki seçenek arasında hızlı tahmin/oy verme deneyimini canlı eşleşmelerle test eder.',
    desc:'Sağa/sola seçim mantığını sosyal tahmin ve karşılaştırma deneyimine dönüştüren canlı beta.',
    detail:'Profiller, oylar ve eşleşmeler üzerinden kullanıcı davranışını ölçen sosyal tahmin aracı.',
    primary:['Canlı betayı aç','https://kapis-live.vercel.app'], secondary:null
  },
  {
    icon:'KN', name:'Kalori Notu', status:'Live demo', state:'active', area:'social', areaLabel:'Social & Everyday', category:'Personal Tracking',
    availability:'Vercel production • canlı',
    summary:'Yemeğin fotoğrafından yaklaşık kalori tahminiyle hızlı günlük kayıt oluşturur.',
    desc:'Kalori takibini uzun formlar yerine hızlı fotoğraf kaydına indiren kişisel takip aracı.',
    detail:'Günlük yeme içme farkındalığını düşük sürtünmeli bir kayıt alışkanlığına dönüştürür.',
    primary:['Canlı demoyu aç','https://kalori-notu.vercel.app'], secondary:null
  },
  {
    icon:'MP', name:'MutfakPlan', status:'Live demo', state:'active', area:'social', areaLabel:'Social & Everyday', category:'Home Utility',
    availability:'Vercel production • canlı',
    summary:'Evdeki malzemelerden ne pişirilebileceğini gösterir ve eksikleri alışveriş listesine dönüştürür.',
    desc:'“Bugün ne pişirsem?” sorusunu birkaç dokunuşta plana dönüştüren günlük yaşam aracı.',
    detail:'Evdeki malzemeleri değerlendirip tarifler önerir ve eksik ürünleri listeye ekler.',
    primary:['Canlı demoyu aç','https://yemek-fikirleri.vercel.app'], secondary:null
  },
  {
    icon:'OT', name:'Oyun Alanı Takip', status:'Live demo', state:'active', area:'business', areaLabel:'Business Tools', category:'Venue Operations',
    availability:'Vercel production • canlı PWA',
    summary:'Çocuk oyun alanlarında giriş-çıkış, süre ve günlük operasyon takibini telefondan kolaylaştırır.',
    desc:'Oyun alanı işletmelerinin masa başı yerine sahadan yönetilmesine yardımcı olan mobil operasyon uygulaması.',
    detail:'Çocukların giriş-çıkış akışı, kullanım süresi ve günlük işletme takibini tek ekranda toplar.',
    primary:['Canlı demoyu aç','https://oyun-alani.vercel.app'], secondary:null
  },
  {
    icon:'PDF', name:'PDF Düzenleyici', status:'Live demo', state:'active', area:'productivity', areaLabel:'Productivity', category:'Document Tool',
    availability:'Vercel production • canlı',
    summary:'PDF içindeki metinleri çıkarmaya, incelemeye ve düzenleme akışını hızlandırmaya yardımcı olur.',
    desc:'Tarayıcı tabanlı PDF görüntüleme, metin çıkarma ve düzenleme aracı.',
    detail:'PDF sayfalarındaki metinleri çıkarıp düzenleme süreçlerini kolaylaştırır.',
    primary:['Canlı demoyu aç','https://pdf-duzenliyici.vercel.app'], secondary:null
  },
  {
    icon:'RV', name:'Review Analyzer', status:'Live demo', state:'active', area:'growth', areaLabel:'Growth', category:'Customer Insight',
    availability:'Vercel production • canlı demo',
    summary:'Müşteri yorumlarını inceleyip tekrar eden sorunları ve ürün sinyallerini görünür hale getirir.',
    desc:'Ham yorumları ürün kararına dönüşebilecek müşteri içgörülerine çevirir.',
    detail:'Tekrar eden pain point, olumlu sinyal ve ürün geliştirme fırsatlarını raporlar.',
    primary:['Canlı demoyu aç','https://proof-coral-two.vercel.app'], secondary:null
  },
  {
    icon:'GE', name:'Growth Engine', status:'Live internal', state:'active', area:'growth', areaLabel:'Growth', category:'Portfolio Growth Operations',
    availability:'Vercel production • internal MVP',
    summary:'Project Factory ürünleri için growth, SEO, social ve kampanya çalışmalarını tek panelde toplar.',
    desc:'Portföy genelinde büyüme işlerini proje bazında görünür hale getiren ortak growth paneli.',
    detail:'Proje bazlı skorlar, CMO ajanları ve günlük brief alanı sunar.',
    primary:['Canlı paneli aç','https://project-factory-growth-engine.vercel.app'], secondary:null
  },
  {
    icon:'YT', name:'YouTube Translator', status:'Beta', state:'pilot', area:'media', areaLabel:'Media', category:'Voice & Translation',
    availability:'Deneme sürümü • Windows + Chrome',
    summary:'İngilizce YouTube videolarını izlerken Türkçe seslendirme üretir.',
    desc:'Gerçek zamanlıya yakın Türkçe dublaj prototipi.',
    detail:'Konuşmayı yakalayıp Türkçe ses üretmek için yerel model ve TTS akışı kullanır.',
    primary:['Deneme sürümünü indir','/downloads/YouTube-Translator-Beta-0.3.1.zip'],
    secondary:['Geri bildirim','mailto:hello@trendflowapp.com?subject=YouTube%20Translator%20Beta%20Geri%20Bildirim'],
    downloadPending:false
  },
  {
    icon:'AV', name:'Answer Visibility', status:'Pilot', state:'pilot', area:'growth', areaLabel:'Growth', category:'Brand Visibility',
    availability:'Müşteri pilotu aktif • public app henüz yok',
    summary:'Bir markanın cevap motorlarında rakiplere karşı ne kadar görünür olduğunu ölçer.',
    desc:'ChatGPT ve benzeri motorlardaki marka görünürlüğünü kıyaslayan analiz sistemi.',
    detail:'Marka ve rakip bazında görünürlük sorguları üreterek raporlar.',
    primary:null, secondary:null
  },
  {
    icon:'UG', name:'UGC Engine', status:'Live test', state:'pilot', area:'growth', areaLabel:'Growth', category:'Customer Acquisition',
    availability:'Gerçek outreach üzerinde test ediliyor',
    summary:'Marka bulma, mesaj hazırlama ve takip işini tek satış akışında toplar.',
    desc:'Küçük markalar için UGC fırsatı bulma ve takip operasyonunu hızlandırır.',
    detail:'Lead bulma ve kişiselleştirilmiş outreach yönetimini tek akışta toplar.',
    primary:null, secondary:null
  },
  {
    icon:'LO', name:'LifeOS', status:'Building', state:'building', area:'productivity', areaLabel:'Productivity', category:'Focus & Prioritization',
    availability:'Geliştirme aşamasında • public app henüz yok',
    summary:'Hangi projeye devam edip hangisini durdurman gerektiğini görünür hale getirir.',
    desc:'Projeleri sıralayan, gerektiğinde STOP / GO kararı veren odak sistemi.',
    detail:'Idea Vault, Score ve STOP/GO akışıyla daha fazla iş bitirmeyi hedefler.',
    primary:null, secondary:null
  },
  {
    icon:'MT', name:'MailTask', status:'Beta', state:'local', area:'productivity', areaLabel:'Productivity', category:'Email Productivity',
    availability:'Deneme sürümü • Windows + Outlook',
    summary:'Outlook maillerini görev, öncelik ve takip listesine dönüştürür.',
    desc:'Mail trafiğini yapılacak işe çeviren yerel masaüstü yardımcısı.',
    detail:'Mail içeriği yerelde işlenerek konuşma özeti ve görev listesi üretir.',
    primary:null,
    secondary:['Geri bildirim','mailto:hello@trendflowapp.com?subject=MailTask%20Beta%20Geri%20Bildirim'],
    downloadPending:true
  },
  {
    icon:'TF', name:'TrendFlow', status:'Product', state:'active', area:'growth', areaLabel:'Growth', category:'Market Intelligence',
    availability:'Web sitesi aktif',
    summary:'Trend, uygulama ve ürün fırsatlarını keşfetmek için sinyalleri tek merkezde toplar.',
    desc:'Yeni fırsatları araştırmayı hızlandıran pazar keşif ürünü.',
    detail:'Trend ve ürün fırsatlarını tek merkezde toplayan istihbarat aracı.',
    primary:['Web sitesini aç','https://trendflowapp.com'], secondary:null
  },
  {
    icon:'MC', name:'Marine Calculation', status:'Toolset', state:'local', area:'naval', areaLabel:'Naval Engineering', category:'Engineering Calculations',
    availability:'Hesaplama araç seti • web demosu henüz yok',
    summary:'Gemi ve yat projelerindeki mühendislik hesaplarını küçük araçlara dönüştürür.',
    desc:'Naval engineering hesaplarını hızlandırmak için geliştirilen araç seti.',
    detail:'Tekrar eden mühendislik hesaplarını standartlaştırmak için geliştirilmektedir.',
    primary:null, secondary:null
  },
  {
    icon:'DA', name:'DosyaAsistanı', status:'Local', state:'local', area:'productivity', areaLabel:'Productivity', category:'Document Automation',
    availability:'Yerel masaüstü aracı • web üzerinden açılmaz',
    summary:'Teknik dosyaları başlık ve antet bilgilerine göre otomatik isimlendirir ve sınıflandırır.',
    desc:'Dağınık teknik dokümanları sınıflandıran yerel dosya düzenleme yardımcısı.',
    detail:'PDF, Excel, DWG dosyalarını antet bilgilerine göre otomatik adlandırır.',
    primary:null, secondary:null
  }
];

const grid = document.querySelector('#product-grid');
const modal = document.querySelector('#product-modal');
const modalContent = document.querySelector('#modal-content');
const filters = document.querySelector('#filters');
const statProducts = document.querySelector('#stat-products');

if (statProducts) {
  statProducts.textContent = `${products.length}`;
}

function linkMarkup(link, className='') {
  if (!link) return '';
  const [label, url] = link;
  const external = url.startsWith('http');
  const download = url.endsWith('.zip') ? 'download' : '';
  return `<a class="${className}" href="${url}" ${external ? 'target="_blank" rel="noreferrer"' : ''} ${download}>${label} ${url.endsWith('.zip') ? '↓' : external ? '↗' : '→'}</a>`;
}

function render(filter='all') {
  const visible = filter === 'all' ? products : products.filter(p => p.area === filter);
  if (!grid) return;
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
  if (!modal || !modalContent) return;
  modalContent.innerHTML = `
    <div class="modal-head"><span class="icon big">${product.icon}</span><span class="badge ${product.state}">${product.status}</span></div>
    <span class="area-label modal-area">${product.areaLabel}</span>
    <span class="kicker">${product.category}</span>
    <h2 id="modal-title">${product.name}</h2>
    <p class="modal-summary">${product.summary}</p>
    <p class="modal-lead">${product.detail}</p>
    ${product.downloadPending ? '<div class="beta-notice"><strong>Deneme sürümü</strong><span>İndirilebilir beta paketi hazırlanıyor. Test eden kullanıcılardan geri bildirim toplanacak.</span></div>' : ''}
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
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  document.body.classList.remove('modal-open');
}

if (filters) {
  filters.addEventListener('click', e => {
    const btn = e.target.closest('.filter');
    if (!btn) return;
    document.querySelectorAll('.filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    render(btn.dataset.filter);
  });
}

if (grid) {
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
}

document.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeModal));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

render();
