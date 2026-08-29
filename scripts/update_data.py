import os
import json
import requests
from datetime import datetime

# GitHub kullanıcı adınız
GITHUB_USER = "erdempirci"

# Takip edilecek projeleriniz, kategorileri ve Vercel canlı linkleri
PROJECTS_CONFIG = {
    "InternFlow": {
        "title": "InternFlow",
        "category": "AI / Staj Eşleştirme",
        "live_url": "https://intern-flow-eta.vercel.app",
        "default_desc": "Mühendislik stajında yapay zeka destekli eşleştirme platformu."
    },
    "JobFit": {
        "title": "JobFit",
        "category": "HR Tech / Kariyer",
        "live_url": "https://job-fit-one.vercel.app",
        "default_desc": "Yetenek ve iş ilanı uyumluluk analiz aracı."
    },
    "MarineFlow": {
        "title": "MarineFlow",
        "category": "Marine Engineering",
        "live_url": "https://marine-flow-tau.vercel.app",
        "default_desc": "Gemi boru donatım, refit ve dizayn hesaplama platformu."
    },
    "ForexLab": {
        "title": "ForexLab / TradeDeck",
        "category": "Fintech / Prop Trading",
        "live_url": "https://tradedeck-one.vercel.app",
        "default_desc": "Prop trading kuralları ve risk analizi paneli."
    },
    "SpecMatch": {
        "title": "SpecMatch",
        "category": "SaaS / Analytics",
        "live_url": "",
        "default_desc": "Teknik şartname ve ürün eşleştirme analiz motoru."
    },
    "viennalife-kart": {
        "title": "Viennalife Dijital Kart",
        "category": "NFC / Dijital Kimlik",
        "live_url": "https://erdempirci.github.io/viennalife-kart",
        "default_desc": "NFC ve QR entegreli mobil uyumlu dijital kartvizit."
    },
    "project-factory-growth-engine": {
        "title": "Growth Engine",
        "category": "Core Architecture",
        "live_url": "https://project-factory-growth-engine.vercel.app",
        "default_desc": "TrendFlow ürün geliştirme ve büyüme motoru."
    }
}

def sync_projects():
    headers = {"Accept": "application/vnd.github.v3+json"}
    token = os.getenv("GH_TOKEN") or os.getenv("GITHUB_TOKEN")
    if token:
        headers["Authorization"] = f"token {token}"

    project_list = []
    for repo_name, config in PROJECTS_CONFIG.items():
        # GitHub API'den reponun en son bilgilerini çek
        api_url = f"https://api.github.com/repos/{GITHUB_USER}/{repo_name}"
        res = requests.get(api_url, headers=headers)
        
        last_updated = ""
        description = config["default_desc"]
        language = "TypeScript"

        if res.status_code == 200:
            repo_info = res.json()
            last_updated = repo_info.get("pushed_at") or repo_info.get("updated_at") or ""
            if repo_info.get("description"):
                description = repo_info.get("description")
            language = repo_info.get("language") or language

        project_list.append({
            "id": repo_name.lower(),
            "name": config["title"],
            "category": config["category"],
            "description": description,
            "language": language,
            "live_url": config["live_url"],
            "github_url": f"https://github.com/{GITHUB_USER}/{repo_name}",
            "last_updated": last_updated
        })

    output_data = {
        "last_synced": datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S UTC"),
        "total_projects": len(project_list),
        "projects": project_list
    }

    os.makedirs("data", exist_ok=True)
    with open("data/projects.json", "w", encoding="utf-8") as f:
        json.dump(output_data, f, ensure_ascii=False, indent=2)

    print(f"Toplam {len(project_list)} proje 'data/projects.json' dosyasına yazıldı.")

if __name__ == "__main__":
    sync_projects()
