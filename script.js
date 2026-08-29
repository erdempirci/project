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
    icon:'IF', name:'InternFlow', status:'Live demo', state:'active', area:'career', areaLabel:'Career', category:'Internship Matching',
    availability:'Vercel production • canlı',
    summary:'Mühendislik öğrencileri ile şirketlerin staj fırsatlarını yapay zeka ile eşleştirir.',
    desc:'Türkiye odaklı mühendislik staj eşleştirme ve yerleştirme platformu.',
    detail:'Öğrenci profili, yetenekler, bölüm, şehir ve şirket ihtiyaçlarını yapay zeka algoritması ile bir araya getirerek doğrudan staj eşleşmesi sağlayan platform.',
    primary:['Canlı demoyu aç','https://intern-flow-eta.vercel.app'], secondary:null
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
    icon:'FL', name:'ForexLab', status:'Live demo', state:'active', area:'trading', areaLabel:'Trading', category:'Strategy Research & Risk',
    availability:'Vercel production • canlı',
    summary:'H1 kapanış bazlı forex strateji sinyallerini, risk ve drawdown analizini tek panelde izler.',
    desc:'Manuel stratejiyi ölçülebilir ve tekrar test edilebilir bir araştırma sistemine dönüştüren trading laboratuvarı.',
    detail:'H1 EBP sinyallerini TradingView Pine ile yakalar, prop trading hesaplarının risk ve drawdown analizini tek ekranda sunar.',
    primary:['Canlı demoyu aç','https://tradedeck-one.vercel.app'], secondary:null
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
    primary:
