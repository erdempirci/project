const products = [
  {icon:'SR',name:'ShipReady',status:'Active',group:'active',category:'Marine AI',availability:'Repo hazır • ürün geliştirme aktif',summary:'Teknik ekiplerin proje hazırlığı ve operasyon takibini tek yerde hızlandırır.',desc:'Yacht / shipbuilding ekipleri için AI destekli teknik hazırlık ve proje operasyon ürünü.',detail:'Teknik ekiplerin proje hazırlığı, doküman takibi ve operasyon akışını hızlandırmak için geliştirilen marine odaklı ürün.',primary:['GitHub','https://github.com/erdempirci/shipready'],secondary:null},
  {icon:'AV',name:'AI Visibility',status:'Pilot',group:'pilot',category:'Growth AI',availability:'Müşteri pilotu aktif • public app henüz yok',summary:'Bir markanın ChatGPT ve benzeri AI cevaplarında rakiplere karşı ne kadar görünür olduğunu ölçer.',desc:'Markaların ChatGPT, Gemini ve diğer AI cevap motorlarındaki görünürlüğünü rakiplerle kıyaslayan analiz sistemi.',detail:'Rakip karşılaştırması, görünürlük sorguları ve aksiyon önerileri üreten; ilk müşteri pilotu üzerinde test edilen servis ve yazılım katmanı.',primary:null,secondary:null},
  {icon:'UG',name:'UGC Engine',status:'Live test',group:'pilot',category:'Growth',availability:'Gerçek outreach üzerinde test ediliyor',summary:'Marka bulma, mesaj hazırlama, takip ve UGC kreatif üretimini tek satış akışına toplar.',desc:'Küçük markalar için UGC fırsatı bulma, outreach, takip ve kreatif üretim iş akışı.',detail:'Lead bulma, kişiselleştirilmiş outreach, takip ve kreatif örnek üretimini tek akışta toplamak için geliştiriliyor.',primary:null,secondary:null},
  {icon:'LO',name:'LifeOS',status:'Building',group:'building',category:'Productivity AI',availability:'Geliştirme aşamasında • public app henüz yok',summary:'Yeni fikir üretmekten çok, hangi projeye devam edip hangisini durdurman gerektiğine karar verir.',desc:'Projeleri ve fikirleri sıralayan, gerektiğinde STOP / GO kararı veren AI odak sistemi.',detail:'Mission → Projects → Idea Vault → AI Score → STOP/GO → Today → Weekly Review akışıyla, daha fazla iş yönetmek yerine daha fazla işi bitirmeyi hedefliyor.',primary:null,secondary:null},
  {icon:'YT',name:'YouTube Translator',status:'Beta',group:'pilot',category:'Voice AI',availability:'Deneme sürümü • Windows yerel prototip',summary:'İngilizce YouTube videolarını izlerken Türkçe seslendirme üretir.',desc:'Gerçek zamanlıya yakın Türkçe dublaj prototipi. Beta kullanıcılarının gecikme, akıcılık ve ses kalitesi geri bildirimi özellikle değerli.',detail:'Videodaki konuşmayı yakalayıp Türkçe ses üretmek için yerel/AI tabanlı konuşma işleme ve TTS akışı kullanır. Bu sürüm deneysel bir beta olarak geliştiriliyor; amaç gerçek kullanıcı bilgisayarlarında gecikme ve süreklilik sorunlarını ölçmek.',primary:null,secondary:['Geri bildirim','mailto:hello@trendflowapp.com?subject=YouTube%20Translator%20Beta%20Geri%20Bildirim'],downloadPending:true},
  {icon:'MT',name:'MailTask AI',status:'Beta',group:'local',category:'Local AI',availability:'Deneme sürümü • Windows + Outlook + yerel AI',summary:'Outlook maillerini bilgisayarda okuyup görev, öncelik ve takip listesine dönüştürür.',desc:'Mail verisini merkezi sunucuya göndermeden, Outlook konuşmalarından görev ve takip listesi çıkaran yerel uygulama.',detail:'Klasik Outlook + Ollama + yerel veritabanı ile çalışır. Mail içeriği kullanıcının bilgisayarında kalır; konuşma özeti, görev, öncelik, kanıt ve kullanıcı geri bildirimi katmanları üretir. Beta dağıtımı Windows kullanıcıları için hazırlanıyor.',primary:null,secondary:['Geri bildirim','mailto:hello@trendflowapp.com?subject=MailTask%20AI%20Beta%20Geri%20Bildirim'],downloadPending:true},
  {icon:'TF',name:'TrendFlow',status:'Product',group:'active',category:'Market Intelligence',availability:'Web sitesi aktif',summary:'Trend, uygulama ve ürün fırsatlarını keşfetmek için farklı sinyalleri tek merkezde toplar.',desc:'Trend, pazar ve ürün fırsatlarını keşfetmeye odaklı AI-first opportunity intelligence ürünü.',detail:'Trend, uygulama, ürün ve içerik fırsatlarını tek yerde araştırmak için geliştirilen fırsat keşif ürünü.',primary:['Website','https://trendflowapp.com'],secondary:['GitHub','https://github.com/erdempirci/TrendFlowAI']},
  {icon:'MC',name:'Marine Calculation',status:'Tool',group:'active',category:'Engineering',availability:'GitHub repo erişilebilir',summary:'Gemi ve yat projelerindeki tekrarlayan mühendislik hesaplarını küçük araçlara dönüştürür.',desc:'Marine engineering hesaplarını hızlandıran hafif mühendislik araç seti.',detail:'Gemi ve yat projelerinde tekrar eden mühendislik hesaplarını daha hızlı ve düzenli yapmak için geliştirilen araç seti.',primary:['GitHub','https://github.com/erdempirci/MarineCalculation'],secondary:null},
  {icon:'SF',name:'SchoolFlow AI',status:'Live demo',group:'active',category:'Education AI',availability:'Vercel production demo aktif',summary:'Ders programı çakışmalarını azaltır ve öğretmen uygunluğu / görevlendirmesini AI ile kolaylaştırır.',desc:'AI destekli okul ders programı, çakışma önleme ve akıllı öğretmen görevlendirme platformu.',detail:'Okul operasyonlarında ders programı, öğretmen uygunluğu, çakışma önleme, vekalet ve devamsızlık işlerini otomatikleştirmeye odaklanan çalışan prototip. Vercel production deployment üzerinden doğrudan denenebilir.',primary:['Canlı demoyu aç','https://schoolflow-ai-git-main-schoolflow-ai.vercel.app'],secondary:null},
  {icon:'PA',name:'P&ID Analyst',status:'Prototype',group:'building',category:'Engineering AI',availability:'Prototip • public app henüz yok',summary:'P&ID üzerindeki ekipman, hat ve ilişkileri daha hızlı kontrol etmeye yardımcı olur.',desc:'P&ID dokümanlarını analiz etmeye ve teknik kontrolleri hızlandırmaya odaklanan mühendislik aracı.',detail:'P&ID üzerindeki ekipman, hat ve teknik ilişkilere yönelik AI destekli inceleme akışlarının denendiği proje.',primary:null,secondary:null},
  {icon:'BT',name:'Boru Takip',status:'Prototype',group:'building',category:'Marine Ops',availability:'Geliştirme aşamasında',summary:'Spool ve ISO üretimini zone, sistem, revizyon ve durum bazında sahadan takip eder.',desc:'Spool / iso üretim durumlarını, sistem ve zone bazında takip etmeye yönelik üretim aracı.',detail:'Mobil odaklı üretim takibinde spool, iso, revizyon, sistem ve zone durumlarını tek ekranda yönetmek üzere tasarlanıyor.',primary:null,secondary:null},
  {icon:'DA',name:'DosyaAsistanı',status:'Local',group:'local',category:'Local AI',availability:'Yerel masaüstü aracı • web üzerinden açılmaz',summary:'Teknik dosyaları başlık ve antet bilgilerine göre otomatik isimlendirir ve sınıflandırır.',desc:'PDF, Excel, DWG, DXF ve Word dosyalarını içeriklerine göre isimlendiren ve sınıflandıran yerel asistan.',detail:'Teknik dokümanları antet ve başlık bilgilerine göre sınıflandırıp yeniden adlandırmaya odaklanan masaüstü araç.',primary:null,secondary:null}
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