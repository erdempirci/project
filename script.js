// Takip edilen projelerin varsayılan listesi (InternFlow dahil)
const defaultProjects = [
  {
    name: "InternFlow",
    category: "AI / Staj Eşleştirme",
    description: "Mühendislik stajında yapay zeka destekli akıllı öğrenci ve şirket eşleştirme platformu.",
    live_url: "https://intern-flow-eta.vercel.app"
  },
  {
    name: "JobFit",
    category: "HR Tech",
    description: "Yetenek ve iş ilanı uyumluluk analiz aracı.",
    live_url: "https://job-fit-one.vercel.app"
  },
  {
    name: "MarineFlow",
    category: "Marine Tech",
    description: "Gemi boru donatım, refit ve dizayn hesaplama platformu.",
    live_url: "https://marine-flow-tau.vercel.app"
  },
  {
    name: "ForexLab",
    category: "Fintech",
    description: "Prop trading ve risk değerlendirme analitik paneli.",
    live_url: "https://tradedeck-one.vercel.app"
  },
  {
    name: "Viennalife Kart",
    category: "NFC / Web",
    description: "NFC ve vCard entegreli mobil uyumlu dijital kartvizit çözümü.",
    live_url: "https://erdempirci.github.io/viennalife-kart"
  },
  {
    name: "Growth Engine",
    category: "Core Engine",
    description: "TrendFlow proje geliştirme ve otomasyon motoru.",
    live_url: "https://project-factory-growth-engine.vercel.app"
  }
];

async function loadProjects() {
  const grid = document.getElementById("projects-grid");
  const syncInfo = document.getElementById("sync-info");

  let projects = defaultProjects;

  try {
    const res = await fetch("./data/projects.json");
    if (res.ok) {
      const data = await res.json();
      if (data.projects && data.projects.length > 0) {
        projects = data.projects;
      }
      syncInfo.textContent = `🟢 Canlı Senkronize (Son Güncelleme: ${data.last_synced || 'Yeni'})`;
    } else {
      syncInfo.textContent = "🟢 Canlı Vitrin Paneli";
    }
  } catch (e) {
    syncInfo.textContent = "🟢 Canlı Vitrin Paneli";
  }

  grid.innerHTML = "";
  projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "card";

    const hasLiveUrl = project.live_url && project.live_url.trim() !== "";

    card.innerHTML = `
      <div>
        <div class="card-top">
          <h2 class="card-title">${project.name}</h2>
          <span class="badge">${project.category || 'SaaS'}</span>
        </div>
        <p class="card-desc">${project.description || 'Proje detayları hazırlanıyor.'}</p>
      </div>
      <div class="card-footer">
        <div class="status-dot">Canlı</div>
        ${hasLiveUrl ? `<a href="${project.live_url}" target="_blank" class="btn-live">Uygulamaya Git ↗</a>` : `<span style="color:#64748b; font-size:12px;">Yakında</span>`}
      </div>
    `;

    grid.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", loadProjects);
