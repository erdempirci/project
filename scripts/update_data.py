import json
import os
from datetime import datetime

def update_trends():
    # Güncel zaman damgası
    current_time = datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S UTC")
    
    # Sitenizde gösterilecek örnek veri yapısı
    data = {
        "last_updated": current_time,
        "status": "online",
        "trends": [
            {
                "id": 1,
                "title": "AI Agent Workflows & Automation",
                "category": "Technology",
                "growth_rate": "+145%",
                "summary": "Otonom yazılım ve yapay zeka ajanları ile iş akışı otomasyonu."
            },
            {
                "id": 2,
                "title": "NFC & Micro-SaaS Integrations",
                "category": "Hardware / SaaS",
                "growth_rate": "+88%",
                "summary": "Fiziksel NFC çözümleri ve dijital işletme yönetim araçları."
            },
            {
                "id": 3,
                "title": "Real Estate & Asset Arbitrage",
                "category": "Finance",
                "growth_rate": "+62%",
                "summary": "Gayrimenkul ve varlık veri analitiği ile pazar fırsatlarının tespiti."
            }
        ]
    }

    # Hedef klasör ve dosya yolu
    output_dir = "data"
    output_file = os.path.join(output_dir, "trends.json")

    # data klasörü yoksa otomatik oluştur
    os.makedirs(output_dir, exist_ok=True)

    # Veriyi JSON olarak kaydet
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

    print(f"[{current_time}] Veriler başarıyla '{output_file}' dosyasına kaydedildi.")

if __name__ == "__main__":
    update_trends()
