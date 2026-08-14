const products = [
  {icon:'SR',name:'ShipReady',status:'Active',group:'active',category:'Marine Operations',availability:'Ürün geliştirme aktif',summary:'Teknik ekiplerin proje hazırlığı, doküman takibi ve operasyon koordinasyonunu tek yerde hızlandırır.',desc:'Yat ve gemi projelerinde teknik hazırlık ve operasyon akışını sadeleştiren çalışma alanı.',detail:'ShipReady; teknik ekiplerin proje hazırlığı, doküman takibi ve operasyon akışını daha düzenli yürütmesi için geliştiriliyor. Amaç daha fazla araç göstermek değil, günlük teknik koordinasyonda kaybolan zamanı azaltmak.',primary:null,secondary:null},
  {icon:'AV',name:'Answer Visibility',status:'Pilot',group:'pilot',category:'Brand Visibility',availability:'Müşteri pilotu aktif',summary:'Markanızın ChatGPT, Gemini ve benzeri cevap motorlarında rakiplere karşı ne kadar görünür olduğunu ölçer.',desc:'Marka görünürlüğünü rakiplerle karşılaştırır ve hangi alanlarda güçlenmesi gerektiğini gösterir.',detail:'Answer Visibility; markanın yapay zekâ destekli cevap motorlarında ne kadar görünür olduğunu ölçer, rakiplerle kıyaslar ve içerik / konumlandırma tarafında güçlendirilmesi gereken alanları ortaya çıkarır. Teknoloji arka plandadır; teslim edilen şey görünürlük içgörüsü ve aksiyon planıdır.',primary:null,secondary:null},
  {icon:'UG',name:'UGC Engine',status:'Live test',group:'pilot',category:'Customer Acquisition',availability:'Gerçek outreach üzerinde test ediliyor',summary:'Marka bulma, kişiselleştirilmiş iletişim, takip ve örnek içerik üretimini tek satış akışına toplar.',desc:'Küçük markalara ulaşma ve ilk görüşmeyi başlatma sürecini daha hızlı ve düzenli hale getirir.',detail:'UGC Engine; potansiyel marka bulma, ilk temas, takip ve örnek kreatif hazırlama adımlarını tek akışta toplamak için geliştiriliyor. Amaç daha çok mesaj atmak değil, daha az eforla daha kaliteli satış görüşmesi oluşturmak.',primary:null,secondary:null},
  {icon:'LO',name:'LifeOS',status:'Building',group:'building',category:'Focus & Productivity',availability:'Geliştirme aşamasında',summary:'Hangi projeye devam edip hangisini bekletmeniz gerektiğini netleştirerek aynı anda çok fazla işe dağılmayı azaltır.',desc:'Projeleri, fikirleri ve günlük işleri önceliklendirerek neye odaklanılması gerektiğini gösteren karar sistemi.',detail:'LifeOS; Mission → Projects → Idea Vault → Score → STOP/GO → Today → Weekly Review akışıyla çalışır. Ana hedef daha fazla görev yönetmek değil, daha fazla işi tamamlamaktır.',primary:null,secondary:null},
  {icon:'YT',name:'YouTube Translator',status:'Beta',group:'pilot',category:'Translation',availability:'Deneme sürümü • Windows',summary:'İngilizce YouTube videolarını izlerken Türkçe seslendirme ile takip etmeyi kolaylaştırır.',desc:'İngilizce içerikleri Türkçe sesle dinlemeye yönelik gerçek zamanlıya yakın masaüstü çeviri prototipi.',detail:'YouTube Translator; videodaki konuşmayı yakalayıp Türkçe ses üretir. Beta testinde özellikle gecikme, konuşma sürekliliği ve ses kalitesi ölçülüyor.',primary:null,secondary:['Geri bildirim','mailto:hello@trendflowapp.com?subject=YouTube%20Translator%20Beta%20Geri%20Bildirim'],downloadPending:true},
  {icon:'MT',name:'MailTask',status:'Beta',group:'local',category:'Work Productivity',availability:'Deneme sürümü • Windows + Outlook',summary:'Outlook maillerini görev, öncelik ve takip listesine dönüştürerek önemli işlerin mail kutusunda kaybolmasını önler.',desc:'Mail konuşmalarından yapılacak işleri çıkaran ve veriyi kullanıcının bilgisayarında tutan yerel görev takip uygulaması.',detail:'MailTask; klasik Outlook üzerinden mail konuşmalarını okuyup görev, öncelik, özet ve takip kaydı üretir. Veriler kullanıcının bilgisayarında kalır. Amaç mail okumayı otomatikleştirmek değil, yapılacak işlerin gözden kaçmasını azaltmaktır.',primary:null,secondary:['Geri bildirim','mailto:hello@trendflowapp.com?subject=MailTask%20Beta%20Geri%20Bildirim'],downloadPending:true},
  {icon:'TF',name:'TrendFlow',status:'Product',group:'active',category:'Market Intelligence',availability:'Web sitesi aktif',summary:'Trend, uygulama ve ürün sinyallerini tek yerde toplayarak yeni fırsatları daha hızlı keşfetmeye yardımcı olur.',desc:'Pazar ve ürün fırsatlarını araştırmak için farklı sinyalleri tek merkezde birleştiren keşif ürünü.',detail:'TrendFlow; ürün, uygulama, içerik ve pazar sinyallerini aynı yerde inceleyerek yeni fırsatları bulmayı kolaylaştırır. Kullanıcının farklı kaynaklar arasında dağılmasını azaltmayı hedefler.',primary:['Web sitesini aç','https://trendflowapp.com'],secondary:null},
  {icon:'MC',name:'Marine Calculation',status:'Tool',group:'active',category:'Engineering',availability:'Mühendislik aracı • web demosu henüz yok',summary:'Gemi ve yat projelerindeki tekrarlayan mühendislik hesaplarını daha hızlı ve standart hale getirir.',desc:'Marine engineering hesaplarını küçük, tekrar kullanılabilir araçlara dönüştüren mühendislik seti.',detail:'Marine Calculation; günlük mühendislik işlerinde tekrar eden hesapları daha hızlı, düzenli ve izlenebilir yapmak için geliştirilen hafif araç setidir.',primary:null,secondary:null},

  {icon:'SF',name:'SchoolFlow',status:'Live demo',group:'active',category:'Education Operations',availability:'Vercel production • canlı',summary:'Ders programı çakışmalarını azaltır; öğretmen uygunluğu, görevlendirme ve devamsızlık süreçlerini tek yerde yönetir.',desc:'Okullar için ders programı ve öğretmen operasyonlarını sadeleştiren planlama aracı.',detail:'SchoolFlow; ders programı hazırlama, öğretmen uygunluğu, çakışma önleme, vekalet ve devamsızlık işlerini tek akışta toplar. Amaç idari ekibin tablo ve mesaj trafiğini azaltmaktır.',primary:['Canlı demoyu aç','https://schoolflow-ai.vercel.app'],secondary:null},
  {icon:'ST',name:'SpoolTrack',status:'Live demo',group:'active',category:'Production Tracking',availability:'Vercel production • canlı',summary:'Spool ve ISO üretimini zone, sistem, revizyon ve durum bazında sahadan takip eder.',desc:'Mekanik imalat için mobil odaklı spool ve ISO üretim takip sistemi.',detail:'SpoolTrack; mekanik üretim ilerlemesini sistem, zone, spool ve ISO bazında takip etmek üzere tasarlandı. Mobil kullanıma uygun yapısıyla sahadan durum güncelleme ve üretim görünürlüğü sağlar.',primary:['Canlı demoyu aç','https://boru-takip.vercel.app'],secondary:null},
  {icon:'EA',name:'Eymiş Kids',status:'Live demo',group:'active',category:'Venue Operations',availability:'Vercel production • canlı PWA',summary:'Çocuk oyun alanı ve cafe operasyonunda giriş, çıkış ve günlük takibi telefondan yönetmeyi kolaylaştırır.',desc:'Oyun alanı ve cafe işletmesi için mobil operasyon uygulaması.',detail:'Eymiş Kids; oyun alanı ve cafe tarafındaki günlük operasyonları telefondan takip etmek için geliştirildi. PWA yapısı sayesinde ana ekrana kurulabilir ve mobil cihazda uygulama benzeri kullanılabilir.',primary:['Canlı demoyu aç','https://oyun-alani.vercel.app'],secondary:null},
  {icon:'MP',name:'MutfakPlan',status:'Live demo',group:'active',category:'Home & Food',availability:'Vercel production • canlı',summary:'Evdeki malzemelerden ne pişirilebileceğini gösterir ve eksik ürünleri alışveriş listesine dönüştürür.',desc:'Buzdolabındaki malzemeleri yemek planına ve alışveriş listesine dönüştüren mutfak yardımcısı.',detail:'MutfakPlan; evde bulunan malzemelerden yemek fikirleri oluşturur, eksikleri alışveriş listesine taşır ve listeyi düzenlemeyi kolaylaştırır. Kullanılan modeller arka plandadır; ürünün asıl işi “bugün ne pişireceğim?” sorusunu hızla cevaplamaktır.',primary:['Canlı demoyu aç','https://yemek-fikirleri.vercel.app'],secondary:null},
  {icon:'KN',name:'Kalori Notu',status:'Live demo',group:'active',category:'Health Utility',availability:'Vercel production • canlı',summary:'Yemeğin fotoğrafından yaklaşık kalori bilgisi alıp günlük kaydı hızlıca tutmayı kolaylaştırır.',desc:'Fotoğrafla hızlı yaklaşık kalori tahmini ve günlük kayıt aracı.',detail:'Kalori Notu; ayrıntılı veri girişi yerine fotoğrafla hızlı yaklaşık kalori bilgisi sunarak günlük takip sürtünmesini azaltmayı hedefler.',primary:['Canlı demoyu aç','https://kalori-notu.vercel.app'],secondary:null},
  {icon:'PDF',name:'PDF Düzenleyici',status:'Live demo',group:'active',category:'Document Workflow',availability:'Vercel production • canlı',summary:'PDF içindeki metinleri çıkarmaya, incelemeye ve düzenleme sürecini hızlandırmaya yardımcı olur.',desc:'Tarayıcı tabanlı PDF görüntüleme, metin çıkarma ve düzenleme aracı.',detail:'PDF Düzenleyici; PDF sayfalarındaki metin elementlerini çıkarmak, içerikleri incelemek ve düzenleme sürecini kolaylaştırmak için geliştirildi.',primary:['Canlı demoyu aç','https://pdf-duzenliyici.vercel.app'],secondary:null},
  {icon:'PA',name:'P&ID Analyst',status:'Live demo',group:'active',category:'Engineering',availability:'Vercel production • canlı',summary:'P&ID PDF’lerini inceleyip ekipman, hat ve malzeme ilişkilerini daha hızlı kontrol etmeye yardımcı olur.',desc:'P&ID doküman analizi ve ilk malzeme listesi hazırlığını hızlandıran mühendislik aracı.',detail:'P&ID Analyst; teknik doküman incelemesini ve ilk malzeme çıkarımını hızlandırmak için geliştirildi. Amaç mühendisin yerini almak değil, tekrar eden ilk inceleme işini azaltmaktır.',primary:['Canlı demoyu aç','https://pid-analist.vercel.app'],secondary:null},
  {icon:'RV',name:'Review Analyzer',status:'Live demo',group:'active',category:'Customer Insight',availability:'Vercel production • canlı demo',summary:'Müşteri yorumlarındaki tekrar eden sorunları, olumlu sinyalleri ve ürün geliştirme fırsatlarını görünür hale getirir.',desc:'Ham müşteri yorumlarını ürün kararlarında kullanılabilir içgörülere dönüştüren analiz aracı.',detail:'Review Analyzer; manuel yorum metni veya demo ürün verisi üzerinden tekrar eden pain point, olumlu sinyal ve ürün geliştirme fırsatlarını hızlıca görünür hale getirir.',primary:['Canlı demoyu aç','https://proof-coral-two.vercel.app'],secondary:null},
  {icon:'DA',name:'DosyaAsistanı',status:'Local',group:'local',category:'Document Workflow',availability:'Yerel masaüstü aracı',summary:'Teknik dosyaları başlık ve antet bilgilerine göre otomatik isimlendirir ve sınıflandırır.',desc:'PDF, Excel, DWG, DXF ve Word dosyalarını içeriklerine göre düzenleyen masaüstü asistanı.',detail:'DosyaAsistanı; teknik dokümanları antet ve başlık bilgilerine göre sınıflandırıp yeniden adlandırır. Amaç büyük klasörlerde dosya bulma ve standart isimlendirme için harcanan zamanı azaltmaktır.',primary:null,secondary:null}
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
  return `<a class="${className}" href="${url}" ${external ? 'target="_blank" rel="noreferrer"' : ''}>${label} ${external ? '↗' : '→'}</a>`;
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
      ${p.downloadPending ? '<div class="beta-strip">↓ Beta indirme paketi hazırlanıyor</div>' : ''}
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
      <div><span>DURUM</span><strong>${product.status}</strong></div>
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