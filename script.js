const products = [
  {icon:'SR',name:'ShipReady',status:'Active',desc:'Yacht / shipbuilding ekipleri için AI destekli teknik hazırlık ve proje operasyon ürünü.',links:[['GitHub','https://github.com/erdempirci/shipready']]},
  {icon:'AV',name:'AI Visibility',status:'Pilot',desc:'Markaların ChatGPT, Gemini ve diğer AI cevap motorlarındaki görünürlüğünü rakiplerle kıyaslayan analiz sistemi.',links:[['Case study','#']]},
  {icon:'UG',name:'UGC Engine',status:'Live test',desc:'Küçük markalar için UGC fırsatı bulma, outreach, takip ve kreatif üretim iş akışı.',links:[['Experiment','#']]},
  {icon:'LO',name:'LifeOS',status:'Building',desc:'Projeleri ve fikirleri sıralayan, gerektiğinde STOP / GO kararı veren AI odak sistemi.',links:[['Overview','#']]},
  {icon:'YT',name:'YouTube Translator',status:'Testing',desc:'YouTube videolarını gerçek zamanlıya yakın Türkçe seslendirme ile dinleme prototipi.',links:[['Prototype','#']]},
  {icon:'MT',name:'MailTask AI',status:'Working',desc:'Outlook maillerinden yerel AI ile görev çıkaran, veriyi bilgisayardan çıkarmayan görev takip uygulaması.',links:[['Local app','#']]},
  {icon:'TF',name:'TrendFlow',status:'Product',desc:'Trend, pazar ve ürün fırsatlarını keşfetmeye odaklı AI-first opportunity intelligence ürünü.',links:[['Website','https://trendflowapp.com'],['GitHub','https://github.com/erdempirci/TrendFlowAI']]},
  {icon:'MC',name:'Marine Calculation',status:'Tool',desc:'Marine engineering hesaplarını hızlandıran hafif mühendislik araç seti.',links:[['GitHub','https://github.com/erdempirci/MarineCalculation']]},
  {icon:'SF',name:'SchoolFlow AI',status:'Prototype',desc:'Öğretmen programı, vekalet ve devamsızlık akışlarını kolaylaştıran eğitim operasyon aracı.',links:[['Project','#']]}
];

const grid = document.querySelector('#product-grid');
grid.innerHTML = products.map(p => `
  <article class="card">
    <div class="card-top"><span class="icon">${p.icon}</span><span class="badge">${p.status}</span></div>
    <h3>${p.name}</h3>
    <p>${p.desc}</p>
    <div class="card-links">${p.links.map(([label,url]) => `<a href="${url}" ${url.startsWith('http')?'target="_blank" rel="noreferrer"':''}>${label} ${url.startsWith('http')?'↗':'→'}</a>`).join('')}</div>
  </article>`).join('');