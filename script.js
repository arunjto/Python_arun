document.addEventListener('DOMContentLoaded', () => {

    const data = {
            cpus: {
                // --- NEWLY LAUNCHED & UPCOMING CPUs (Projected Scores) ---
                "AMD Ryzen 9 9950X3D": { score: 125, tier: 'enthusiast' },
                "AMD Ryzen 9 9900X3D": { score: 124, tier: 'enthusiast' },
                "AMD Ryzen 7 9800X3D": { score: 122, tier: 'enthusiast' },
                "AMD Ryzen 9 9950X": { score: 118, tier: 'enthusiast' },
                "Intel Core Ultra 9 285K": { score: 116, tier: 'enthusiast' },
                "AMD Ryzen 9 9900X": { score: 115, tier: 'enthusiast' },
                "AMD Ryzen 7 9700X": { score: 110, tier: 'enthusiast' },
                "Intel Core Ultra 7 265K": { score: 108, tier: 'enthusiast' },
                "Intel Core Ultra 300 Series (Panther Lake)": { score: 105, tier: 'enthusiast' },
                "AMD Ryzen 5 9600X": { score: 102, tier: 'enthusiast' },
                "Intel Core i9-14900K": { score: 100, tier: 'enthusiast', imageUrl: "https://i.imgur.com/4o7iY2A.png" },
                "AMD Threadripper 3990X": { score: 99, tier: 'enthusiast' },
                "AMD Ryzen 9 7950X3D": { score: 98, tier: 'enthusiast', imageUrl: "https://i.imgur.com/S6FE88v.png" },
                "Intel Core i9-13900K": { score: 98, tier: 'enthusiast' },
                "Apple M2 Ultra": { score: 98, tier: 'enthusiast' },
                "AMD EPYC 7763": { score: 97, tier: 'enthusiast' },
                "AMD Ryzen 7 7800X3D": { score: 96, tier: 'high-end', imageUrl: "https://i.imgur.com/S6FE88v.png" },
                "Intel Core i7-14700K": { score: 95, tier: 'enthusiast' },
                "Apple M1 Ultra": { score: 95, tier: 'enthusiast' },
                "Intel Core i9-14900HX": { score: 95, tier: 'enthusiast' },
                "Apple M3 Max (Laptop)": { score: 95, tier: 'enthusiast' },
                "AMD Ryzen 9 7900X": { score: 94, tier: 'high-end' },
                "AMD Ryzen AI 300 Series": { score: 94, tier: 'high-end' },
                "Intel Core i9-12900K": { score: 93, tier: 'high-end' },
                "AMD Ryzen 9 8945HS": { score: 93, tier: 'high-end' },
                "Intel Core i9-13980HX": { score: 93, tier: 'high-end' },
                "Apple M3 Max": { score: 92, tier: 'high-end' },
                "AMD Ryzen 7 7700X": { score: 92, tier: 'high-end' },
                "Intel Core Ultra 9 185H": { score: 92, tier: 'high-end' },
                "Intel Core i7-12700K": { score: 91, tier: 'high-end' },
                "AMD Ryzen 9 7945HX": { score: 91, tier: 'high-end' },
                "Intel Core i5-14600K": { score: 90, tier: 'high-end' },
                "Intel Core i7-13700K": { score: 90, tier: 'high-end' },
                "Intel Core i5-13600K": { score: 90, tier: 'high-end' },
                "AMD EPYC 7502": { score: 90, tier: 'high-end' },
                "AMD Ryzen 7 8840HS": { score: 90, tier: 'high-end' },
                "Intel Core i7-14700HX": { score: 90, tier: 'high-end' },
                "AMD Ryzen 9 5950X": { score: 89, tier: 'high-end' },
                "Intel Core i9-12900HX": { score: 89, tier: 'high-end' },
                "AMD Ryzen 5 7600X": { score: 88, tier: 'high-end' },
                "Apple M2 Max": { score: 88, tier: 'high-end' },
                "Intel Core Ultra 7 155H": { score: 88, tier: 'high-end' },
                "Apple M3 Pro (Laptop)": { score: 88, tier: 'high-end' },
                "Intel Core i7-13700HX": { score: 88, tier: 'high-end' },
                "Intel Core i9-12900HK": { score: 88, tier: 'high-end' },
                "AMD Ryzen 5 7600": { score: 87, tier: 'high-end' },
                "AMD Ryzen 7 7745HX": { score: 87, tier: 'high-end' },
                "AMD Ryzen 9 6980HX": { score: 87, tier: 'high-end' },
                "AMD Ryzen 7 5800X3D": { score: 85, tier: 'high-end' },
                "Intel Core i9-11900K": { score: 85, tier: 'high-end' },
                "AMD Threadripper 2990WX": { score: 85, tier: 'high-end' },
                "Apple M3 Pro": { score: 85, tier: 'high-end' },
                "Intel Core i5-14500HX": { score: 85, tier: 'high-end' },
                "AMD Ryzen 5 8640HS": { score: 85, tier: 'high-end' },
                "AMD Ryzen 9 6900HX": { score: 85, tier: 'high-end' },
                "Apple M2 Pro (Laptop)": { score: 85, tier: 'high-end' },
                "AMD Ryzen 7 5800X": { score: 84, tier: 'mid-range' },
                "Intel Core i7-12700H": { score: 84, tier: 'mid-range' },
                "Intel Core i5-13600HX": { score: 83, tier: 'mid-range' },
                "Apple M1 Max (Laptop)": { score: 83, tier: 'mid-range' },
                "Intel Core i7-12800H": { score: 83, tier: 'mid-range' },
                "Intel Core i5-12400": { score: 82, tier: 'mid-range' },
                "Intel Core i9-11980HK": { score: 82, tier: 'mid-range' },
                "AMD Ryzen 5 7645HX": { score: 82, tier: 'mid-range' },
                "Intel Core Ultra 5 125H": { score: 82, tier: 'mid-range' },
                "AMD Ryzen 7 6800HS": { score: 82, tier: 'mid-range' },
                "Intel Core i5-12600K": { score: 80, tier: 'mid-range' },
                "Intel Core i7-11700K": { score: 80, tier: 'mid-range' },
                "AMD Ryzen 9 3950X": { score: 80, tier: 'mid-range' },
                "Apple M2 Pro": { score: 80, tier: 'mid-range' },
                "Apple M1 Max": { score: 80, tier: 'mid-range' },
                "AMD EPYC 7702": { score: 80, tier: 'mid-range' },
                "AMD Ryzen 7 6800H": { score: 80, tier: 'mid-range' },
                "AMD Ryzen 5 5600X": { score: 78, tier: 'mid-range' },
                "Intel Core i9-10900K": { score: 78, tier: 'mid-range' },
                "Apple M3": { score: 78, tier: 'mid-range' },
                "AMD Ryzen 9 5900HX": { score: 78, tier: 'mid-range' },
                "Intel Core i5-12500H": { score: 78, tier: 'mid-range' },
                "Intel Core i7-11800H": { score: 77, tier: 'mid-range' },
                "Intel Core i5-12600H": { score: 77, tier: 'mid-range' },
                "AMD Ryzen 5 6600HS": { score: 76, tier: 'mid-range' },
                "Intel Core i5-11600K": { score: 75, tier: 'mid-range' },
                "Apple M2": { score: 75, tier: 'mid-range' },
                "AMD Ryzen 9 3900X": { score: 75, tier: 'mid-range' },
                "AMD Ryzen 5 6600H": { score: 75, tier: 'mid-range' },
                "Apple M1 Pro (Laptop)": { score: 75, tier: 'mid-range' },
                "AMD Ryzen 7 5800H": { score: 73, tier: 'mid-range' },
                "AMD Ryzen 7 3700X": { score: 72, tier: 'mid-range' },
                "Apple M1 Pro": { score: 72, tier: 'mid-range' },
                "Intel Core i5-11400H": { score: 72, tier: 'mid-range' },
                "Intel Core i7-10700K": { score: 70, tier: 'mid-range' },
                "AMD Ryzen 9 2950X": { score: 70, tier: 'mid-range' },
                "Intel Xeon E5-2690 V4": { score: 70, tier: 'mid-range' },
                "Intel Core i9-9900K": { score: 70, tier: 'mid-range' },
                "Apple M1": { score: 68, tier: 'mid-range' },
                "AMD Ryzen 5 3600X": { score: 68, tier: 'mid-range' },
                "AMD Ryzen 7 3800X": { score: 68, tier: 'mid-range' },
                "AMD Ryzen 5 5600H": { score: 68, tier: 'mid-range' },
                "Intel Core i7-1165G7": { score: 68, tier: 'mid-range' },
                "Intel Core i7-9700K": { score: 65, tier: 'mid-range' },
                "AMD Ryzen 5 3600": { score: 65, tier: 'mid-range' },
                "Intel Core i5-10600K": { score: 65, tier: 'mid-range' },
                "Intel Core i7-10750H": { score: 65, tier: 'mid-range' },
                "Intel Core i5-1135G7": { score: 63, tier: 'entry-level' },
                "AMD Ryzen 7 2700X": { score: 62, tier: 'entry-level' },
                "Intel Core i5-9600K": { score: 60, tier: 'entry-level' },
                "Intel Core i7-8700K": { score: 60, tier: 'entry-level' },
                "AMD Threadripper 1950X": { score: 60, tier: 'entry-level' },
                "AMD Ryzen 5 3500X": { score: 60, tier: 'entry-level' },
                "Intel Core i5-10300H": { score: 60, tier: 'entry-level' },
                "AMD Ryzen 7 5700U": { score: 60, tier: 'entry-level' },
                "AMD Ryzen 5 2600X": { score: 58, tier: 'entry-level' },
                "Intel Core i7-9750H": { score: 58, tier: 'entry-level' },
                "Intel Core i7-1065G7": { score: 58, tier: 'entry-level' },
                "Intel Core i7-7700K": { score: 55, tier: 'entry-level' },
                "Intel Core i5-8600K": { score: 55, tier: 'entry-level' },
                "Intel Core i5-9400F": { score: 55, tier: 'entry-level' },
                "AMD Ryzen 7 2700": { score: 55, tier: 'entry-level' },
                "AMD Ryzen 7 3750H": { score: 55, tier: 'entry-level' },
                "AMD Ryzen 5 5500U": { score: 55, tier: 'entry-level' },
                "Intel Core i3-1115G4": { score: 55, tier: 'entry-level' },
                "Intel Core i7-8750H": { score: 52, tier: 'entry-level' },
                "Intel Core i5-1035G1": { score: 52, tier: 'entry-level' },
                "AMD Ryzen 7 1800X": { score: 50, tier: 'entry-level' },
                "Intel Core i7-6700K": { score: 50, tier: 'entry-level' },
                "Intel Core i7-7700": { score: 50, tier: 'entry-level' },
                "AMD Ryzen 5 2600": { score: 50, tier: 'entry-level' },
                "AMD Ryzen 5 3550H": { score: 50, tier: 'entry-level' },
                "AMD Ryzen 7 4700U": { score: 50, tier: 'entry-level' },
                "Intel Core i5-6600K": { score: 48, tier: 'entry-level' },
                "Intel Core i7-6700": { score: 48, tier: 'entry-level' },
                "Intel Core i5-8300H": { score: 48, tier: 'entry-level' },
                "AMD Ryzen 3 5300U": { score: 48, tier: 'entry-level' },
                "Intel Core i5-4690K": { score: 45, tier: 'entry-level' },
                "AMD Ryzen 5 1600X": { score: 45, tier: 'entry-level' },
                "Intel Core i5-7600": { score: 45, tier: 'entry-level' },
                "Intel Core i7-7700HQ": { score: 45, tier: 'entry-level' },
                "Intel Core i3-1005G1": { score: 45, tier: 'entry-level' },
                "AMD Ryzen 5 4500U": { score: 45, tier: 'entry-level' },
                "Intel Core i7-4790K": { score: 42, tier: 'entry-level' },
                "Intel Core i5-6500": { score: 42, tier: 'entry-level' },
                "Intel Core i3-8100": { score: 40, tier: 'entry-level' },
                "Intel Xeon E3-1230 V2": { score: 40, tier: 'entry-level' },
                "Intel Core i5-7300HQ": { score: 40, tier: 'entry-level' },
                "Intel Core i7-8550U": { score: 40, tier: 'entry-level' },
                "AMD Ryzen 7 3700U": { score: 40, tier: 'entry-level' },
                "AMD Ryzen 3 1300X": { score: 38, tier: 'entry-level' },
                "Intel Core i7-4770": { score: 38, tier: 'entry-level' },
                "Intel Core i7-6700HQ": { score: 38, tier: 'entry-level' },
                "AMD Ryzen 3 4300U": { score: 38, tier: 'entry-level' },
                "AMD FX-8350": { score: 35, tier: 'entry-level' },
                "Intel Core i3-6100": { score: 35, tier: 'entry-level' },
                "Intel Core i7-2600K": { score: 35, tier: 'entry-level' },
                "AMD Ryzen 3 2200G": { score: 35, tier: 'entry-level' },
                "Intel Core i5-4570": { score: 35, tier: 'entry-level' },
                "Intel Core i5-6300HQ": { score: 35, tier: 'entry-level' },
                "Intel Core i5-8250U": { score: 35, tier: 'entry-level' },
                "AMD Ryzen 5 3500U": { score: 35, tier: 'entry-level' },
                "Intel Core i5-2500K": { score: 32, tier: 'entry-level' },
                "Intel Core i7-3770": { score: 32, tier: 'entry-level' },
                "Intel Core i7-4700MQ": { score: 32, tier: 'entry-level' },
                "Intel Pentium G4560": { score: 30, tier: 'entry-level' },
                "Intel Core i3-4130": { score: 30, tier: 'entry-level' },
                "Intel Core i3-7100": { score: 30, tier: 'entry-level' },
                "Intel Core i3-6100": { score: 30, tier: 'entry-level' },
                "Intel Core i5-3570": { score: 30, tier: 'entry-level' },
                "AMD Ryzen 7 2700U": { score: 30, tier: 'entry-level' },
                "Intel Core i7-7500U": { score: 30, tier: 'entry-level' },
                "AMD A10-7850K": { score: 28, tier: 'entry-level' },
                "Intel Core i3-4160": { score: 28, tier: 'entry-level' },
                "AMD FX-6300": { score: 28, tier: 'entry-level' },
                "Intel Core i5-4200M": { score: 28, tier: 'entry-level' },
                "Intel Core i3-8130U": { score: 28, tier: 'entry-level' },
                "Intel Core i7-6500U": { score: 28, tier: 'entry-level' },
                "AMD Ryzen 3 3200U": { score: 28, tier: 'entry-level' },
                "Intel Celeron G5905": { score: 25, tier: 'entry-level' },
                "Intel Core i3-2100": { score: 25, tier: 'entry-level' },
                "Intel Pentium G3258": { score: 25, tier: 'entry-level' },
                "Intel Core i7-870": { score: 25, tier: 'entry-level' },
                "AMD Ryzen 5 2500U": { score: 25, tier: 'entry-level' },
                "Intel Core i5-7200U": { score: 25, tier: 'entry-level' },
                "Intel Core i7-5500U": { score: 25, tier: 'entry-level' },
                "AMD Athlon X4 860K": { score: 22, tier: 'entry-level' },
                "Intel Core i3-3220": { score: 22, tier: 'entry-level' },
                "Intel Core i5-6200U": { score: 22, tier: 'entry-level' },
                "Intel Core i7-4500U": { score: 22, tier: 'entry-level' },
                "Intel Core 2 Quad Q6600": { score: 20, tier: 'entry-level' },
                "Intel Core i7-920": { score: 20, tier: 'entry-level' },
                "AMD Athlon 3000G": { score: 20, tier: 'entry-level' },
                "AMD A8-9600": { score: 20, tier: 'entry-level' },
                "Intel Core i5-760": { score: 20, tier: 'entry-level' },
                "Intel Core i3-4000M": { score: 20, tier: 'entry-level' },
                "Intel Core i3-7100U": { score: 20, tier: 'entry-level' },
                "Intel Core i5-5200U": { score: 20, tier: 'entry-level' },
                "AMD A12-9720P": { score: 20, tier: 'entry-level' },
                "Intel Core i5-750": { score: 18, tier: 'entry-level' },
                "Intel Core i3-540": { score: 18, tier: 'entry-level' },
                "AMD A8-7600": { score: 18, tier: 'entry-level' },
                "AMD Athlon Gold 3150U": { score: 18, tier: 'entry-level' },
                "Intel Core i3-6100U": { score: 18, tier: 'entry-level' },
                "Intel Core i5-4200U": { score: 18, tier: 'entry-level' },
                "Intel Pentium G4560": { score: 15, tier: 'entry-level' },
                "Intel Core i3-530": { score: 15, tier: 'entry-level' },
                "Intel Celeron G1840": { score: 15, tier: 'entry-level' },
                "AMD Athlon X4 760K": { score: 15, tier: 'entry-level' },
                "Intel Pentium N5030": { score: 15, tier: 'entry-level' },
                "Intel Core i3-5005U": { score: 15, tier: 'entry-level' },
                "AMD A9-9420": { score: 15, tier: 'entry-level' },
                "AMD Athlon 220GE": { score: 15, tier: 'entry-level' },
                "AMD Athlon 300U": { score: 12, tier: 'entry-level' },
                "Intel Core i3-4010U": { score: 12, tier: 'entry-level' },
                "AMD A6-9220": { score: 12, tier: 'entry-level' },
                "Intel Celeron N4020": { score: 10, tier: 'entry-level' },
                "Intel Pentium 4415U": { score: 10, tier: 'entry-level' },
                "AMD Athlon Silver 3050U": { score: 10, tier: 'entry-level' },
                "Intel Celeron 3867U": { score: 8, tier: 'entry-level' },
                "AMD E1-7010": { score: 5, tier: 'entry-level' },
            },
            gpus: {
                // --- NEWLY LAUNCHED & UPCOMING GPUs (Projected Scores) ---
                "NVIDIA GeForce RTX 5090": { score: 140, tier: 'enthusiast' },
                "NVIDIA GeForce RTX 5080": { score: 120, tier: 'enthusiast' },
                "NVIDIA GeForce RTX 5070 Ti": { score: 105, tier: 'enthusiast' },
                "AMD Radeon RX 9070 XT": { score: 102, tier: 'enthusiast' },
                "NVIDIA GeForce RTX 4090": { score: 100, tier: 'enthusiast', imageUrl: "https://i.imgur.com/z2x4UG9.png" },
                "AMD Radeon RX 7900 XTX": { score: 98, tier: 'enthusiast', imageUrl: "https://i.imgur.com/mSSTK2B.png" },
                "NVIDIA GeForce RTX 5070": { score: 95, tier: 'enthusiast' },
                "NVIDIA GeForce RTX 4080 Super": { score: 95, tier: 'high-end', imageUrl: "https://i.imgur.com/z2x4UG9.png" },
                "Intel Arc Battlemage 24GB": { score: 94, tier: 'high-end' },
                "AMD Radeon RX 7900 XT": { score: 92, tier: 'high-end' },
                "AMD Radeon RX 9070": { score: 92, tier: 'high-end' },
                "NVIDIA GeForce RTX 4090 Laptop": { score: 92, tier: 'high-end' },
                "NVIDIA GeForce RTX 4070 Ti Super": { score: 90, tier: 'high-end', imageUrl: "https://i.imgur.com/uCHO0Lq.png" },
                "NVIDIA GeForce RTX 3090 Ti": { score: 90, tier: 'high-end' },
                "AMD Radeon RX 6950 XT": { score: 88, tier: 'high-end' },
                "NVIDIA GeForce RTX 4070 Super": { score: 88, tier: 'high-end' },
                "Apple M3 Max (Laptop GPU)": { score: 88, tier: 'high-end' },
                "NVIDIA GeForce RTX 4080 Laptop": { score: 88, tier: 'high-end' },
                "NVIDIA GeForce RTX 3080": { score: 85, tier: 'high-end' },
                "AMD Radeon RX 7800 XT": { score: 85, tier: 'high-end' },
                "Apple M3 Max (GPU)": { score: 85, tier: 'high-end' },
                "AMD Radeon AI PRO R9700": { score: 85, tier: 'high-end' },
                "NVIDIA GeForce RTX 5060 Ti": { score: 85, tier: 'high-end' },
                "Apple M2 Max (Laptop GPU)": { score: 83, tier: 'mid-range' },
                "AMD Radeon RX 6800 XT": { score: 82, tier: 'mid-range' },
                "NVIDIA GeForce RTX 3070 Ti": { score: 82, tier: 'mid-range' },
                "NVIDIA GeForce RTX 3080 Laptop": { score: 82, tier: 'mid-range' },
                "AMD Radeon RX 9060 XT": { score: 82, tier: 'mid-range' },
                "NVIDIA GeForce RTX 4060 Ti": { score: 80, tier: 'mid-range' },
                "Apple M3 Pro (Laptop GPU)": { score: 80, tier: 'mid-range' },
                "NVIDIA GeForce RTX 4070 Laptop": { score: 80, tier: 'mid-range' },
                "AMD Radeon RX 7900S": { score: 80, tier: 'mid-range' },
                "NVIDIA GeForce RTX 3070": { score: 78, tier: 'mid-range' },
                "AMD Radeon RX 7700 XT": { score: 78, tier: 'mid-range' },
                "Apple M2 Max (GPU)": { score: 78, tier: 'mid-range' },
                "AMD Radeon RX 6850M XT": { score: 78, tier: 'mid-range' },
                "AMD Radeon RX 6700 XT": { score: 75, tier: 'mid-range' },
                "NVIDIA GeForce RTX 3060 Ti": { score: 75, tier: 'mid-range' },
                "Apple M3 Pro (GPU)": { score: 75, tier: 'mid-range' },
                "Apple M2 Pro (Laptop GPU)": { score: 75, tier: 'mid-range' },
                "NVIDIA GeForce RTX 4060 Laptop": { score: 75, tier: 'mid-range' },
                "AMD Radeon RX 7800S": { score: 75, tier: 'mid-range' },
                "Apple M1 Max (Laptop GPU)": { score: 75, tier: 'mid-range' },
                "NVIDIA GeForce RTX 5060": { score: 75, tier: 'mid-range' },
                "AMD Radeon RX 6800M": { score: 72, tier: 'mid-range' },
                "NVIDIA GeForce RTX 2080 Ti": { score: 70, tier: 'mid-range' },
                "NVIDIA GeForce RTX 4060": { score: 70, tier: 'mid-range' },
                "AMD Radeon RX 6700": { score: 70, tier: 'mid-range' },
                "Apple M2 Pro (GPU)": { score: 70, tier: 'mid-range' },
                "Apple M1 Max (GPU)": { score: 70, tier: 'mid-range' },
                "NVIDIA GeForce RTX 4050 Laptop": { score: 70, tier: 'mid-range' },
                "AMD Radeon RX 7700S": { score: 70, tier: 'mid-range' },
                "AMD Radeon RX 7600": { score: 68, tier: 'mid-range' },
                "NVIDIA GeForce RTX 3060": { score: 68, tier: 'mid-range' },
                "Apple M3 (GPU)": { score: 68, tier: 'mid-range' },
                "NVIDIA GeForce RTX 3060 Laptop": { score: 68, tier: 'mid-range' },
                "Intel Arc Pro B60": { score: 68, tier: 'mid-range' },
                "AMD Radeon RX 5700 XT": { score: 65, tier: 'mid-range' },
                "Apple M2 (GPU)": { score: 65, tier: 'mid-range' },
                "AMD Radeon RX 6600 XT": { score: 65, tier: 'mid-range' },
                "NVIDIA GeForce RTX 2070 Super": { score: 65, tier: 'mid-range' },
                "AMD Radeon RX 7600S": { score: 65, tier: 'mid-range' },
                "Apple M1 Pro (Laptop GPU)": { score: 65, tier: 'mid-range' },
                "AMD Radeon RX 6700M": { score: 65, tier: 'mid-range' },
                "NVIDIA GeForce RTX 5050": { score: 65, tier: 'mid-range' },
                "Intel Arc Pro B50": { score: 64, tier: 'entry-level' },
                "NVIDIA GeForce RTX 3050 Ti Laptop": { score: 62, tier: 'entry-level' },
                "Intel Arc A770": { score: 60, tier: 'entry-level' },
                "NVIDIA GeForce GTX 1080 Ti": { score: 60, tier: 'entry-level' },
                "AMD Radeon RX 6600": { score: 60, tier: 'entry-level' },
                "NVIDIA GeForce RTX 2060 Super": { score: 60, tier: 'entry-level' },
                "Apple M1 Pro (GPU)": { score: 60, tier: 'entry-level' },
                "NVIDIA GeForce RTX 3050 Laptop": { score: 60, tier: 'entry-level' },
                "AMD Radeon RX 5600 XT": { score: 58, tier: 'entry-level' },
                "NVIDIA GeForce GTX 980 Ti": { score: 58, tier: 'entry-level' },
                "AMD Radeon RX 6600M": { score: 58, tier: 'entry-level' },
                "Intel Arc A750": { score: 55, tier: 'entry-level' },
                "Apple M1 (GPU)": { score: 55, tier: 'entry-level' },
                "NVIDIA GeForce RTX 2060": { score: 55, tier: 'entry-level' },
                "NVIDIA GeForce GTX 1070 Ti": { score: 55, tier: 'entry-level' },
                "AMD Radeon R9 Fury X": { score: 55, tier: 'entry-level' },
                "NVIDIA GeForce GTX 1080 Laptop": { score: 55, tier: 'entry-level' },
                "AMD Radeon RX 5500 XT": { score: 52, tier: 'entry-level' },
                "NVIDIA GeForce GTX 1070": { score: 52, tier: 'entry-level' },
                "NVIDIA GeForce GTX 980": { score: 52, tier: 'entry-level' },
                "AMD Radeon RX 580": { score: 50, tier: 'entry-level' },
                "NVIDIA GeForce GTX 1660 Super": { score: 50, tier: 'entry-level' },
                "AMD Radeon R9 Nano": { score: 50, tier: 'entry-level' },
                "Intel Arc A570M": { score: 50, tier: 'entry-level' },
                "NVIDIA GeForce GTX 1070 Laptop": { score: 50, tier: 'entry-level' },
                "Intel Arc A580": { score: 48, tier: 'entry-level' },
                "AMD Radeon RX 590": { score: 48, tier: 'entry-level' },
                "NVIDIA GeForce GTX 1660 Ti Laptop": { score: 48, tier: 'entry-level' },
                "NVIDIA GeForce GTX 1060": { score: 45, tier: 'entry-level' },
                "NVIDIA GeForce GTX 1650 Super": { score: 45, tier: 'entry-level' },
                "Intel Arc A550M": { score: 45, tier: 'entry-level' },
                "AMD Radeon RX 570": { score: 40, tier: 'entry-level' },
                "Intel Arc A380": { score: 40, tier: 'entry-level' },
                "NVIDIA GeForce GTX 1650": { score: 40, tier: 'entry-level' },
                "Intel Arc A530M": { score: 40, tier: 'entry-level' },
                "NVIDIA GeForce GTX 1060 Laptop": { score: 40, tier: 'entry-level' },
                "AMD Radeon RX 560": { score: 38, tier: 'entry-level' },
                "NVIDIA GeForce GTX 970": { score: 35, tier: 'entry-level' },
                "AMD Radeon HD 7970": { score: 35, tier: 'entry-level' },
                "Intel Arc A370M": { score: 35, tier: 'entry-level' },
                "NVIDIA GeForce GTX 1650 Laptop": { score: 35, tier: 'entry-level' },
                "NVIDIA GeForce GTX 960": { score: 32, tier: 'entry-level' },
                "AMD Radeon R9 390": { score: 30, tier: 'entry-level' },
                "NVIDIA GeForce GTX 1050 Ti": { score: 30, tier: 'entry-level' },
                "AMD Radeon HD 7950": { score: 30, tier: 'entry-level' },
                "Intel Arc A350M": { score: 30, tier: 'entry-level' },
                "AMD Radeon RX 560X": { score: 30, tier: 'entry-level' },
                "NVIDIA GeForce GTX 1050": { score: 28, tier: 'entry-level' },
                "AMD Radeon R9 380": { score: 28, tier: 'entry-level' },
                "NVIDIA GeForce GTX 750 Ti": { score: 25, tier: 'entry-level' },
                "NVIDIA GeForce GTX 1050 Laptop": { score: 25, tier: 'entry-level' },
                "AMD Radeon RX 550X": { score: 25, tier: 'entry-level' },
                "NVIDIA GeForce GTX 660 Ti": { score: 22, tier: 'entry-level' },
                "AMD Radeon HD 7870": { score: 20, tier: 'entry-level' },
                "NVIDIA GeForce GTX 660": { score: 20, tier: 'entry-level' },
                "AMD Radeon RX 540X": { score: 20, tier: 'entry-level' },
                "AMD Radeon HD 7770": { score: 18, tier: 'entry-level' },
                "NVIDIA GeForce MX450": { score: 18, tier: 'entry-level' },
                "AMD Radeon 680M": { score: 18, tier: 'entry-level' },
                "NVIDIA GeForce GT 1030": { score: 15, tier: 'entry-level' },
                "Intel Iris Xe Max": { score: 15, tier: 'entry-level' },
                "NVIDIA GeForce MX350": { score: 15, tier: 'entry-level' },
                "AMD Radeon 660M": { score: 15, tier: 'entry-level' },
                "Intel Iris Xe Graphics G7": { score: 12, tier: 'entry-level' },
                "NVIDIA GeForce MX250": { score: 12, tier: 'entry-level' },
                "Intel Iris Xe Graphics": { score: 10, tier: 'entry-level' },
                "NVIDIA GeForce GT 730": { score: 10, tier: 'entry-level' },
                "NVIDIA GeForce MX150": { score: 10, tier: 'entry-level' },
                "AMD Radeon 610M": { score: 10, tier: 'entry-level' },
                "AMD Radeon Vega 8": { score: 10, tier: 'entry-level' },
                "AMD Radeon R7 240": { score: 8, tier: 'entry-level' },
                "Intel Iris Plus Graphics": { score: 8, tier: 'entry-level' },
                "AMD Radeon Vega 7": { score: 8, tier: 'entry-level' },
                "AMD Radeon Vega 6": { score: 6, tier: 'entry-level' },
                "Intel UHD Graphics 770": { score: 5, tier: 'entry-level' },
                "Intel UHD Graphics": { score: 5, tier: 'entry-level' },
                "Intel UHD Graphics 630": { score: 3, tier: 'entry-level' },
            },
            ramImpact: { "8": 0.9, "16": 1.0, "32": 1.05, "64": 1.1 },
            purposeImpact: { gaming: { cpu: 0.9, gpu: 1.1 }, streaming: { cpu: 1.1, gpu: 1.0 }, video_editing: { cpu: 1.15, gpu: 0.95 }, "3d_rendering": { cpu: 1.05, gpu: 1.05 }, general: { cpu: 1.0, gpu: 1.0 } },
            resolutionImpact: { "1080p": 1.0, "1440p": 0.85, "4k": 0.65, "ultrawide": 0.9 }
        };

    const dom = {
        calculatorView: document.getElementById('calculator-view'),
        resultsView: document.getElementById('results-view'),
        cpuSelect: document.getElementById('cpu-select'),
        gpuSelect: document.getElementById('gpu-select'),
        ramSelect: document.getElementById('ram-select'),
        resolutionSelect: document.getElementById('resolution-select'),
        purposeSelect: document.getElementById('purpose-select'),
        calculateBtn: document.getElementById('calculate-btn'),
        toggleAdvancedBtn: document.getElementById('toggle-advanced'),
        advancedContent: document.getElementById('advanced-content'),
        themeToggle: document.getElementById('theme-toggle'),
    };
        // --- NEW HELPER FUNCTION FOR OPTION 2 ---
    // This function gets the component's score and its image URL.
    function getComponentInfo(type, name) {
        const componentData = data[type][name];
        let score = 0;
        let imageUrl = '';

        // Check if the data is in the new {score, imageUrl} format
        if (typeof componentData === 'object' && componentData !== null) {
            score = componentData.score;
            imageUrl = componentData.imageUrl; // Use the specific image if it exists
        } else {
            score = componentData || 0; // Otherwise, just get the score
        }

        // If no specific imageUrl was found, generate one automatically using logo.dev
        if (!imageUrl) {
            let brand = "chip"; // A generic fallback
            const lowerCaseName = name.toLowerCase();

            if (lowerCaseName.includes("intel")) brand = "intel";
            else if (lowerCaseName.includes("amd") || lowerCaseName.includes("ryzen") || lowerCaseName.includes("radeon")) brand = "amd";
            else if (lowerCaseName.includes("nvidia") || lowerCaseName.includes("geforce")) brand = "nvidia";
            else if (lowerCaseName.includes("apple")) brand = "apple";
            
            // Construct the URL for logo.dev
            // Note: logo.dev might not have every brand, but it's great for major ones.
            if(brand !== "chip") {
                 imageUrl = `https://logo.dev/${brand}.com`;
            } else {
                 // Fallback to your original placeholder if no brand is matched
                 imageUrl = (type === 'cpus') ? "https://i.imgur.com/PHYyIxl.png" : "https://i.imgur.com/Jprx55s.png";
            }
        }
        
        return { score, imageUrl };
    }

    function populateDropdown(selectElement, data) {
        Object.keys(data).sort().forEach(item => {
            selectElement.add(new Option(item, item));
        });
    }

        function calculateBottleneck() {
        const selected = {
            cpu: dom.cpuSelect.value, gpu: dom.gpuSelect.value, ram: dom.ramSelect.value,
            resolution: dom.resolutionSelect.value, purpose: dom.purposeSelect.value
        };

        if (!selected.cpu || !selected.gpu) {
            alert('Please select both a CPU and a GPU.'); return;
        }

        // --- MODIFICATION START ---
        // Use the new helper function to get ALL component info, including image URLs
        const cpuInfo = getComponentInfo('cpus', selected.cpu);
        const gpuInfo = getComponentInfo('gpus', selected.gpu);

        // Use the scores from the info objects for calculations
        const baseScores = { cpu: cpuInfo.score, gpu: gpuInfo.score };
        // --- MODIFICATION END ---
        
        const modifiers = {
            ram: data.ramImpact[selected.ram],
            purpose: data.purposeImpact[selected.purpose],
            resolution: data.resolutionImpact[selected.resolution]
        };

        const finalScores = {
            cpu: baseScores.cpu * modifiers.purpose.cpu * modifiers.ram,
            gpu: baseScores.gpu * modifiers.purpose.gpu * modifiers.resolution.gpu
        };
        
        let bottleneck = { percentage: 0, component: 'None', text: '' };
        if (finalScores.cpu > finalScores.gpu * 1.05) {
            bottleneck.percentage = ((finalScores.cpu - finalScores.gpu) / finalScores.cpu) * 100;
            bottleneck.component = 'CPU';
        } else if (finalScores.gpu > finalScores.cpu * 1.05) {
            bottleneck.percentage = ((finalScores.gpu - finalScores.cpu) / finalScores.gpu) * 100;
            bottleneck.component = 'GPU';
        }

        if (bottleneck.percentage > 20) bottleneck.text = `Severe ${bottleneck.component} Bottleneck`;
        else if (bottleneck.percentage > 10) bottleneck.text = `Moderate ${bottleneck.component} Bottleneck`;
        else if (bottleneck.component !== 'None') bottleneck.text = `Minor ${bottleneck.component} Bottleneck`;
        else bottleneck.text = 'Excellent System Balance';
        
        // --- MODIFICATION: Pass the new info objects to the display function ---
        displayResults(selected, bottleneck, cpuInfo, gpuInfo);
    }
         // --- FINAL, CORRECTED FUNCTION ---
    function displayResults(selected, bottleneck, cpuInfo, gpuInfo) { // Note the arguments from the last step
        dom.calculatorView.classList.add('hidden');
        dom.resultsView.classList.remove('hidden');

        let summaryColor = bottleneck.percentage > 10 ? 'var(--accent)' : 'var(--success)';
        let summaryText = bottleneck.component === 'CPU' ? `Your GPU is being limited by your CPU's performance.` :
                          bottleneck.component === 'GPU' ? `Your CPU is powerful enough for a stronger GPU.` :
                          'Your components are very well-balanced for this workload.';
        
        // --- NEW: LOGIC TO GET THE CORRECT LOGO URL ---
        const brandToDomain = {
            intel: "intel.com",
            amd: "amd.com",
            nvidia: "nvidia.com",
            apple: "apple.com"
        };
        
        const getLogoUrl = (name) => {
            const lowerCaseName = name.toLowerCase();
            for (const brand in brandToDomain) {
                if (lowerCaseName.includes(brand)) {
                    // Use a reliable service that provides direct image links
                    return `https://icons.duckduckgo.com/ip3/${brandToDomain[brand]}.ico`;
                }
            }
            return null; // Return null if no brand is found
        };

        const cpuLogoUrl = getLogoUrl(selected.cpu);
        const gpuLogoUrl = getLogoUrl(selected.gpu);

        // --- NEW: DEFINE THE FALLBACK IMAGES ---
        const cpuFallbackImage = "https://i.imgur.com/PHYyIxl.png";
        const gpuFallbackImage = "https://i.imgur.com/Jprx55s.png";
        
        dom.resultsView.innerHTML = `
            <h2>Bottleneck Analysis</h2>
            <div class="bottleneck-summary" style="border-color: ${summaryColor}; background-color: ${summaryColor}1A;">
                <h3 style="color: ${summaryColor};">${bottleneck.text}</h3>
                <p>${summaryText}</p>
            </div>
            <div class="results-card">
                <h4>Bottleneck: ${bottleneck.percentage.toFixed(1)}% at ${dom.resolutionSelect.options[dom.resolutionSelect.selectedIndex].text}</h4>
                <div class="progress-bar-container">
                    <div class="progress-bar" style="width: ${bottleneck.percentage.toFixed(1)}%; background-color: ${summaryColor};">${bottleneck.percentage.toFixed(1)}%</div>
                </div>
            </div>
            <div class="component-analysis">
                <div class="component-card">
                    <h4>Processor (CPU)</h4>
                    
                    <!-- CRITICAL FIX: The 'onerror' attribute provides a fallback -->
                    <img src="${cpuLogoUrl || cpuFallbackImage}" 
                         onerror="this.onerror=null; this.src='${cpuFallbackImage}';" 
                         alt="${selected.cpu} logo">
                    
                    <p><strong>${selected.cpu}</strong></p>
                    <a href="https://cpu.userbenchmark.com/Search?searchTerm=${encodeURIComponent(selected.cpu)}" target="_blank" rel="noopener">View Benchmarks →</a>
                </div>
                <div class="component-card">
                    <h4>Graphics Card (GPU)</h4>
                    
                    <!-- CRITICAL FIX: The 'onerror' attribute provides a fallback -->
                    <img src="${gpuLogoUrl || gpuFallbackImage}" 
                         onerror="this.onerror=null; this.src='${gpuFallbackImage}';" 
                         alt="${selected.gpu} logo">
                    
                    <p><strong>${selected.gpu}</strong></p>
                    <a href="https://gpu.userbenchmark.com/Search?searchTerm=${encodeURIComponent(selected.gpu)}" target="_blank" rel="noopener">View Benchmarks →</a>
                </div>
            </div>
            <div class="performance-details">
                <h4>Recommendations & Insights</h4>
                <ul>
                    <li><strong>System Balance:</strong> ${bottleneck.component === 'None' ? 'Your system is well-balanced.' : `Your <strong>${bottleneck.component}</strong> is the limiting factor.`}</li>
                    <li><strong>Gaming Performance:</strong> ${bottleneck.component === 'CPU' ? 'In CPU-heavy games (e.g., strategy, simulations), you may see inconsistent framerates. Consider lowering settings like physics or NPC density.' : 'Your system is well-suited for GPU-intensive games. You can likely increase graphical settings without a major performance hit.'}</li>
                    <li><strong>Resolution Impact:</strong> At ${dom.resolutionSelect.options[dom.resolutionSelect.selectedIndex].text}, the workload is ${data.resolutionImpact[selected.resolution].gpu > 1 ? 'heavily placed on the GPU' : 'balanced between the CPU and GPU'}.</li>
                    ${bottleneck.percentage > 10 ? `<li><strong>Upgrade Path:</strong> To improve performance for this workload, upgrading your <strong>${bottleneck.component}</strong> would yield the best results.</li>` : ''}
                </ul>
            </div>
            <div class="action-buttons">
                <button id="new-calculation-btn">Calculate Again</button>
            </div>
        `;
        document.getElementById('new-calculation-btn').addEventListener('click', () => {
            dom.resultsView.innerHTML = ''; // Clear the results
            dom.resultsView.classList.add('hidden');
            dom.calculatorView.classList.remove('hidden');
        });
    }

    function setupTheme() {
        const storedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const currentTheme = storedTheme || (systemPrefersDark ? 'dark-mode' : 'light-mode');
        
        document.body.classList.toggle('dark-mode', currentTheme === 'dark-mode');
        dom.themeToggle.checked = currentTheme === 'dark-mode';

        dom.themeToggle.addEventListener('change', (e) => {
            const theme = e.target.checked ? 'dark-mode' : 'light-mode';
            document.body.classList.toggle('dark-mode', e.target.checked);
            localStorage.setItem('theme', theme);
        });
    }

    // Initial Setup
    populateDropdown(dom.cpuSelect, data.cpus);
    populateDropdown(dom.gpuSelect, data.gpus);
    setupTheme();

    // Event Listeners
    dom.calculateBtn.addEventListener('click', calculateBottleneck);
    dom.toggleAdvancedBtn.addEventListener('click', () => {
        const isHidden = dom.advancedContent.classList.toggle('hidden');
        dom.toggleAdvancedBtn.textContent = isHidden ? 'Advanced Options ▼' : 'Advanced Options ▲';
    });
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const answer = button.nextElementSibling;
            button.classList.toggle('active');
            answer.style.maxHeight = button.classList.contains('active') ? answer.scrollHeight + "px" : null;
        });
    });
});

