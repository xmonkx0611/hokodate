// --- TRIP DATA FILE ---
// Version 9.0.2: Hakodate 7-Day In-Depth Itinerary (Syntax Corrected)

const tripData = {
    // Meta information for the page
    meta: {
        title: "北海道函館7日紀行：互動式作戰儀表板 v9.0 (深度攻略版)",
        mainTitle: "北海道函館7日紀行"
    },

    // Food Mission data
    missionSummary: {
        yakiniku: { completed: false, description: "燒肉" },
        kaitenSushi: { completed: false, description: "迴轉壽isi" },
        ramen: { completed: false, description: "拉麵店" },
        pasta: { completed: false, description: "義大利麵" },
        tonkatsu: { completed: false, description: "豬排飯" },
        familyRestaurant: { completed: false, description: "家庭餐廳" },
        afternoonTea: { completed: false, description: "下午茶" },
        fastFood: { completed: false, description: "速食店" },
        bGradeGourmet: { completed: false, description: "B級美食" }
    },

    // Data for the Themed Guides section
    themedGuidesData: {
        amulets: {
            title: "⛩️ 函館人氣御守攻略",
            description: "根據最新攻略整理，本趟行程中不可錯過的人氣御守與特色神社。",
            items: [
                { name: "湯倉神社", prefecture: "北海道函館市", popular: "溫泉守護神，必求『御神緣御守』（多種漢字可選）與『大丈夫御守』。", special: "可以釣『烏賊籤詩』(いかみくじ)，極具函館特色。" },
                { name: "函館護國神社", prefecture: "北海道函館市", popular: "位於函館山纜車站旁，以可愛的『貓頭鷹御守』聞名，象徵智慧與守護。", special: "因戊辰戰爭歷史，也被視為祈求勝負運的能量景點。" },
                { name: "船魂神社", prefecture: "北海道函館市", popular: "北海道最古老神社，主祀航海安全，必求獨特的『舵守』，庇佑交通平安、指引人生方向。", special: "據傳是源義經登陸之地。" },
                { name: "函館八幡宮", prefecture: "北海道函館市", popular: "函館最大神社，地位崇高，御守種類齊全，適合祈求總合平安與家運昌隆。", special: "無。" }
            ]
        },
        souvenirs: {
            title: "🛍️ 2025 最新伴手禮情報",
            description: "結合在地人推薦與觀光客必買商品，整理出函館必買的代表性伴手禮清單。",
            items: [
                { name: "經典甜點", items: ['<span class="emphasis">Snaffle\'s 輕乳酪蛋糕</span>: 入口即化的口感，站前店可內用下午茶。', '<span class="emphasis">六花亭系列</span>: 葡萄奶油夾心餅乾是定番，五稜郭店環境優美。', '<span class="emphasis">特拉普派女子修道院</span>: 修女製作的『法式奶油蛋糕捲』(Madalena) 與白巧克力。'] },
                { name: "在地特色", items: ['<span class="emphasis">幸運小丑漢堡周邊</span>: T-Shirt、餅乾、咖哩調理包，灣區本店限定商品最多。', '<span class="emphasis">長谷川商店</span>: 『烤肉便當風味仙貝』，將B級美食帶著走。', '<span class="emphasis">烏賊相關</span>: 函館朝市的『烏賊飯』(いかめし)真空包、各式烏賊一夜干。'] }
            ]
        },
        animePilgrimage: {
            title: "🎥 動漫與日劇聖地巡禮",
            description: "函館的異國風情街景，使其成為眾多動漫與影視作品的舞台。",
            items: [
                { name: "《Love Live! Sunshine!!》", locations: ["八幡坂（Saint Snow 演唱會場景）", "函館西高等學校（Saint Snow 學校原型）", "幸運小丑漢堡 灣區本店", "金森紅磚倉庫"] },
                { name: "《黃金神威》", locations: ["五稜郭（土方歲三的最終戰場）"] },
                { name: "《Pucchimas!》", locations: ["五稜郭塔", "函館山夜景"] },
                { name: "日劇《First Love 初戀》", locations: ["八幡坂", "元町公園周邊"] }
            ]
        }
    },

    // Data for the Awards section
    awardsData: {
        top100: [
            {
                title: "🌸 日本櫻花名所100選",
                theme: "border-pink-300",
                locations: [
                    { name: "五稜郭公園", prefecture: "北海道函館市", details: "約1500株染井吉野櫻，星型護城河倒映櫻花美景，最佳觀賞期：4月下旬～5月上旬。" }
                ]
            },
            {
                title: "🍁 日本紅葉名所100選",
                theme: "border-orange-300",
                locations: [
                     { name: "大沼國定公園", prefecture: "北海道七飯町", details: "駒岳火山下的湖光山色，楓紅與湖中島嶼相映成趣，見頃：10月中旬～10月下旬。" }
                ]
            },
            {
                title: "🏯 日本100名城 (續)",
                theme: "border-gray-400",
                locations: [
                    { name: "五稜郭 (No.102)", prefecture: "北海道函館市", details: "日本江戶時代末期建造的星形要塞，也是戊辰戰爭的最終舞台。" }
                ]
            }
        ],
        greatThree: [
            {
                title: "🌟 日本新三景",
                theme: "border-blue-300",
                status: "入選",
                location: {
                    name: "大沼公園",
                    prefecture: "北海道七飯町",
                    description: "以其駒岳火山為背景的湖光山色，與九州「耶馬溪」、靜岡「三保松原」並列為日本新三景。"
                },
                others: "耶馬溪（大分縣）、三保之松原（靜岡縣）"
            },
            {
                title: "🌃 日本三大夜景 (米其林三星)",
                theme: "border-indigo-300",
                status: "入選",
                location: {
                    name: "函館山夜景",
                    prefecture: "北海道函館市",
                    description: "米其林綠色指南三星景點。由津輕海峽與函館港包夾的獨特「雙C」型海岸線，被譽為「百萬夜景」。"
                },
                others: "稻佐山（長崎縣）、摩耶山（兵庫縣）"
            },
             {
                title: "♨️ 日本三名泉 (地區精選)",
                theme: "border-cyan-300",
                status: "地區精選",
                description: "此地區未包含日本三大名泉，但卻是北海道最著名的溫泉鄉之一。",
                others: "有馬溫泉（兵庫縣）、草津溫泉（群馬縣）、下呂溫泉（岐阜縣）",
                alternative_title: "北海道三大溫泉鄉",
                alternatives: ["湯之川溫泉 (函館市)", "登別溫泉", "定山溪溫泉"]
            }
        ]
    },

    // Data for the seasonal highlights section
    seasonalData: {
        spring: {
            title: '春 (4-5月)',
            theme_color: 'bg-pink-100',
            icon: '🌸',
            highlights: [
                '<span class="emphasis">五稜郭賞櫻</span>: 「日本櫻花名所100選」，星型護城河邊的櫻花隧道是絕景。',
                '<span class="emphasis">猴子下山</span>: 湯之川熱帶植物園的猴子溫泉約在5月初結束。'
            ],
            foods: [
                '<span class="emphasis">時令海鮮</span>: 扇貝、北寄貝、毛蟹。',
                '<span class="emphasis">限定美食</span>: 櫻花季限定甜點。'
            ]
        },
        summer: {
            title: '夏 (6-8月)',
            theme_color: 'bg-blue-100',
            icon: '☀️',
            highlights: [
                '<span class="emphasis">烏賊漁火</span>: 函館山的夜景中會點綴著海面上的捕烏賊漁火。',
                '<span class="emphasis">函館港祭</span>: 8月初舉行，有盛大的花火大會與「烏賊舞」遊行。',
                '<span class="emphasis">紫陽花季</span>: 元町與特拉普派修道院的紫陽花 (7月)。'
            ],
            foods: [
                '<span class="emphasis">烏賊 (いか)</span>: 函館的代表性漁獲，朝市的「活烏賊釣」是必體驗活動。',
                '<span class="emphasis">海膽 (うに)</span>: 6-8月是海膽最肥美的季節。'
            ]
        },
        autumn: {
            title: '秋 (9-11月)',
            theme_color: 'bg-orange-100',
            icon: '🍁',
            highlights: [
                '<span class="emphasis">大沼公園紅葉</span>: 「日本紅葉名所100選」，適合騎行或划船賞楓。',
                '<span class="emphasis">MOMI-G節</span>: 見晴公園（舊岩船氏庭園）的夜間點燈 (10月下旬)。'
            ],
            foods: [
                '<span class="emphasis">時令海鮮</span>: 鮭魚、鮭魚卵、秋刀魚。',
                '<span class="emphasis">在地美食</span>: 函館美食馬戲團 (9月)。'
            ]
        },
        winter: {
            title: '冬 (12-2月)',
            theme_color: 'bg-indigo-100',
            icon: '❄️',
            highlights: [
                '<span class="emphasis">函館聖誕夢幻節</span>: 12月在金森紅磚倉庫前，海上的巨大聖誕樹與每日點燈煙火。',
                '<span class="emphasis">五稜星之夢</span>: 五稜郭護城河點燈，星型要塞浮現於雪地。',
                '<span class="emphasis">猴子泡湯</span>: 湯之川熱帶植物園的日本獼猴 (12月開始)。'
            ],
            foods: [
                '<span class="emphasis">時令海鮮</span>: 鱈魚、寒鰤、牡蠣。',
                '<span class="emphasis">暖身美食</span>: 溫泉鄉的鹽拉麵。'
            ]
        }
    },

    // Data for the detailed highlights section in Overview
    detailedHighlights: [
        {
            name: "函館朝市",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E6%9C%9D%E5%B8%82",
            ticketInfo: "免費入場",
            parkingInfo: "有專用付費停車場『函館朝市駐車場』(30分鐘內免費，之後每30分鐘¥100)。",
            expertRec: "函館的廚房，體驗在地活力的最佳起點。建議早晨7點至10點前往最為熱鬧，可品嚐最新鮮的海鮮丼。",
            historyCulture: "戰後初期形成的市集，是北海道最具代表性的早市之一。以「釣活烏賊」和「海鮮丼」聞名。",
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">行動指令</span>：必體驗「元祖活いか釣堀」釣活烏賊，釣上後師傅會立刻做成生魚片。</li><li><span class="emphasis">美食焦點</span>：品嚐「きくよ食堂」的元祖海鮮丼，或在「駅二市場」自選帝王蟹後現場烹煮。</li><li><span class="emphasis">拍照點</span>：釣起烏賊的瞬間、色彩繽紛的海鮮丼飯特寫。</li></ul>'
        },
        {
            name: "Snaffle's (站前店)",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Snaffle's%20%E5%87%BD%E9%A4%A8%E7%AB%99%E5%89%8D%E5%BA%97",
            parkingInfo: "店家設有平面停車場。",
            expertRec: "函館代表性甜點，其『輕乳酪蛋糕 (Cheese Omlette)』以入口即化的口感聞名。站前店是少數設有內用咖啡廳的分店。",
            historyCulture: '看板料理：<span class="emphasis">輕乳酪蛋糕 (チーズオムレット)</span>。人氣搭配：<span class="emphasis">下午茶套餐</span> (任選蛋糕+飲料)。',
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">料理特色</span>：口感介於舒芙蕾與重乳酪之間，奶香濃郁。</li><li><span class="emphasis">IG/FB 人氣</span>：拍攝精緻的下午茶套餐組合。</li><li><span class="emphasis">拍照點</span>：店門口的白色建築、蛋糕特寫。</li></ul>'
        },
        {
            name: "金森紅磚倉庫",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E9%87%91%E6%A3%AE%E7%B4%85%E7%A3%9A%E5%80%89%E5%BA%AB",
            ticketInfo: "免費入場",
            parkingInfo: "有合作的『TIMES24金森紅磚倉庫停車場』，1小時¥440，於設施內消費滿¥1,000可免費停車2小時。",
            expertRec: "函館灣區的地標，白天適合逛街購物，傍晚的夕陽與夜間點燈氛圍極佳。冬季的「聖誕夢幻節」是重頭戲。",
            historyCulture: "前身是明治時代的營業倉庫，現改建為複合式商場，保留了當時的紅磚建築風貌。",
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">購物重點</span>：尋找Snaffle\'s、Petite Merveille等甜點伴手禮，以及函館限定的雜貨。</li><li><span class="emphasis">拍照點</span>：倉庫群與運河倒影、傍晚點燈後的浪漫氛圍、冬季的海上聖誕樹。</li></ul>'
        },
        {
            name: "幸運小丑漢堡 (灣區本店)",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%B9%B8%E9%81%8B%E5%B0%8F%E4%B8%91%E6%BC%A2%E5%A0%A1%20%E7%81%A3%E5%8D%80%E6%9C%AC%E5%BA%97",
            parkingInfo: "本店無專用停車場，請使用金森紅磚倉庫的『TIMES24』收費停車場。",
            expertRec: "函館限定的靈魂美食，被譽為「日本第一的在地漢堡」。每間分店主題不同，灣區本店是人氣最旺的打卡點。",
            historyCulture: '看板料理：<span class="emphasis">中華雞腿漢堡 (チャイニーズチキンバーガー)</span>。人氣搭配：<span class="emphasis">幸運薯條</span> (淋上起司與肉醬)。',
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">料理特色</span>：現點現做的炸雞腿裹上特製糖醋醬，風味獨特。</li><li><span class="emphasis">聖地巡禮</span>：這裡是《Love Live! Sunshine!!》的聖地之一。</li><li><span class="emphasis">拍照點</span>：店門口的華麗招牌、店內獨特的鞦韆座位。</li></ul>'
        },
        {
            name: "長谷川商店 (灣區店)",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E9%95%B7%E8%B0%B7%E5%B7%9D%E5%95%86%E5%BA%97%20%E7%81%A3%E5%8D%80%E5%BA%97",
            parkingInfo: "店家門口有少量免費停車位 (約4台)。",
            expertRec: "函館最強B級美食之一，本業是便利商店，但以現點現烤的『烤肉便當』聞名。是在地人與觀光客都熱愛的美味。",
            historyCulture: '看板料理：<span class="emphasis">烤肉便當 (やきとり弁当)</span>。雖然叫烤雞(Yakitori)，但使用的是豬五花肉，是函館的飲食特色。',
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">點餐技巧</span>：選擇便當大小、肉串數量，以及口味（推薦鹽味或獨門醬汁）。</li><li><span class="emphasis">IG/FB 人氣</span>：拍攝師傅在吧台後方現烤肉串的畫面。</li><li><span class="emphasis">拍照點</span>：打開便當盒，拍攝鋪滿肉串的瞬間。</li></ul>'
        },
        {
            name: "函館山纜車 & 夜景",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E5%B1%B1%E7%BA%9C%E8%BB%8A%20%E5%B1%B1%E9%BA%93%E7%AB%99",
            ticketInfo: "觀景台免費。纜車來回票: 大人 1,800日圓。",
            parkingInfo: "山麓站設有免費停車場 (約85輛)，但車位極少易滿。建議搭乘市電至「十字街」站後步行。",
            expertRec: "米其林三星景點，被譽為「世界三大夜景」。建議在日落前30分鐘抵達山頂，一次捕捉黃昏、魔幻時刻與夜景。",
            historyCulture: "函館山夜景的獨特之處在於其被津輕海峽和函館港包夾的「雙C」型海岸線。",
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">行動指令</span>：務必提早上山卡位！最佳觀景點在展望台二樓戶外區的最右側。</li><li><span class="emphasis">裝備建議</span>：山上風大，即使是夏天也務必攜帶防風外套。</li><li><span class="emphasis">拍照點</span>：捕捉城市燈光剛點亮、天空尚有餘暉的「魔幻時刻」。</li></ul>'
        },
        {
            name: "函太郎 (宇賀浦總店)",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E5%A4%AA%E9%83%8E%20%E5%AE%87%E8%B3%80%E6%B5%A6%E7%B8%BD%E5%BA%97",
            parkingInfo: "設有大型免費專用停車場 (約60台)。",
            expertRec: "函館最強的連鎖迴轉壽司，品質媲美高級壽司店。宇賀浦總店擁有絕佳海景，可眺望津輕海峽。",
            historyCulture: '看板料理：<span class="emphasis">當日現撈地魚</span>、<span class="emphasis">烏賊</span>、<span class="emphasis">北寄貝</span>。',
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">點餐技巧</span>：迴轉帶上的壽司以保鮮為主，強烈建議直接拿點菜單向師傅點餐，才能吃到現握的美味。</li><li><span class="emphasis">IG/FB 人氣</span>：拍攝窗外的海景與壽司的合照。</li><li><span class="emphasis">拍照點</span>：特寫當日限定的豪華壽司。</li></ul>'
        },
        {
            name: "元町教會群 & 八幡坂",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%20%E5%85%83%E7%94%BA%20%E5%85%AB%E5%B9%A1%E5%9D%82",
            ticketInfo: "戶外參觀免費。舊函館區公會堂: 300日圓。",
            parkingInfo: "無專用停車場，請使用『函館市元町觀光停車場』(1小時內¥200，之後每30分鐘¥100)。",
            expertRec: "函館異國風情的代表區域。石板路、教會與洋房，充滿浪漫氛圍，適合花半天時間悠閒散步。",
            historyCulture: "函館作為日本最早開放的港口之一，在此地遺留了大量外國人居所與宗教建築，形成獨特的和洋折衷景觀。",
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">聖地巡禮</span>：<span class="emphasis">八幡坂</span>是函館最知名的坂道，也是《Love Live!》與多部日劇的取景地。</li><li><span class="emphasis">參觀重點</span>：舊函館區公會堂（可體驗歐洲禮服）、函館正教會（俄羅斯風格）、元町天主堂（哥德式）。</li><li><span class="emphasis">拍照點</span>：從八幡坂頂端，由上往下拍攝直通港口的道路。</li></ul>'
        },
        {
            name: "船魂神社",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E8%88%B9%E9%AD%82%E7%A5%9E%E7%A4%BE",
            ticketInfo: "免費參拜",
            parkingInfo: "無專用停車場，請使用『函館市元町觀光停車場』後步行前往。",
            expertRec: "北海道最古老的神社，位於元町散步路線的起點。是庇佑航海與交通安全的能量景點。",
            historyCulture: "主祀潮汐之神與大海之神，據傳源義經也曾在此受庇佑而平安登陸。",
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">御守/御朱印</span>：必買獨特的『舵守』，適合祈求交通安全或人生方向。</li><li><span class="emphasis">拍照點</span>：神社入口的石梯、古樸的拜殿。</li></ul>'
        },
        {
            name: "とん悦 (Tonetsu)",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%81%A8%E3%82%93%E6%82%A6%20%E5%87%BD%E9%A4%A8",
            parkingInfo: "店家設有專用停車場。",
            expertRec: "函館在地的老字號炸豬排專門店，以其高品質的豬肉和酥脆的麵衣聞名，是在地人不想觀光客知道的隱藏名店。",
            historyCulture: '看板料理：<span class="emphasis">炸里肌豬排套餐 (ロースかつ定食)</span>、<span class="emphasis">炸腰內肉豬排套餐 (ヒレかつ定食)</span>。',
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">料理特色</span>：豬排麵衣酥脆不扎口，肉質多汁。高麗菜絲與白飯皆可免費續加。</li><li><span class="emphasis">IG/FB 人氣</span>：拍攝豬排金黃色的酥脆斷面。</li><li><span class="emphasis">拍照點</span>：豬排套餐全景、淋上醬汁的特寫。</li></ul>'
        },
        {
            name: "五稜郭塔 & 五稜郭公園",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E4%BA%94%E7%A8%9C%E9%83%AD%E5%A1%94",
            ticketInfo: "公園免費。五稜郭塔展望台: 大人 1,000日圓。",
            parkingInfo: "塔樓無專用停車場，請使用周邊付費停車場 (如『函館市藝術廳停車場』，1小時¥200)。",
            expertRec: "函館的另一個地標。必登塔從空中俯瞰完整的「星型」要塞，春季賞櫻與冬季點燈（五稜星之夢）是其最美的時刻。",
            historyCulture: "日本100名城 (續)，是江戶幕府末期建造的西式堡壘，也是戊辰戰爭的最終戰場，土方歲三在此戰死。",
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">聖地巡禮</span>：這裡是《黃金神威》粉絲必訪的聖地。</li><li><span class="emphasis">歷史探索</span>：可進入公園中央的「箱館奉行所」（需另付門票）了解當時的歷史。</li><li><span class="emphasis">拍照點</span>：從塔頂俯瞰完整的星型要塞、櫻花季時的粉色星型。</li></ul>'
        },
        {
            name: "函館麵厨房 味彩 (本店)",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E9%BA%B5%E5%BB%9A%E6%88%BF%20%E5%91%B3%E5%BD%A9%20%E6%9C%AC%E5%BA%97",
            parkingInfo: "店家設有專用停車場 (約7台)，若客滿請使用五稜郭塔周邊的收費停車場。",
            expertRec: "函館鹽味拉麵的代名詞，觀光客與在地人都會造訪的名店。本店位於五稜郭塔正對面，位置極佳。",
            historyCulture: '看板料理：<span class="emphasis">味彩鹽拉麵 (味彩塩拉麺)</span>。湯頭清澈，以昆布、雞骨、豬骨熬製，口感清爽不死鹹。',
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">料理特色</span>：湯頭透明澄澈，是函館鹽味拉麵的王道代表。</li><li><span class="emphasis">IG/FB 人氣</span>：拍攝拉麵清澈的湯頭與麵條的特寫。</li><li><span class="emphasis">拍照點</span>：從店內窗邊座位拍攝五稜郭塔。</li></ul>'
        },
        {
            name: "Colz (コルツ)",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Colz%20%E3%82%B3%E3%83%AB%E3%83%84%20%E5%87%BD%E9%A4%A8",
            parkingInfo: "店家後方設有專用停車場。",
            expertRec: "Tabelog高分名店，位於五稜郭附近，以使用北海道在地食材製作的義大利麵聞名，是在地人約會聚餐的口袋名單。",
            historyCulture: '看板料理：<span class="emphasis">當季食材義大利麵套餐 (パスタランチ)</span>。',
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">料理特色</span>：午間套餐CP值極高，能品嚐到使用當地海鮮與蔬菜的精緻義麵。</li><li><span class="emphasis">IG/FB 人氣</span>：拍攝擺盤精緻的義大利麵。</li><li><span class="emphasis">拍照點</span>：店內時尚沉靜的氛圍、餐點特寫。</li></ul>'
        },
        {
            name: "大沼國定公園",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E6%B2%BC%E5%9C%8B%E5%AE%9A%E5%85%AC%E5%9C%92",
            ticketInfo: "公園免費。遊覽船: 1,200日圓。租腳踏車: 約200日圓/小時。",
            parkingInfo: "JR大沼公園站對面有大型收費停車場 (約¥400/次)。",
            expertRec: "名列「新日本三景」的國家公園，是函館近郊最棒的自然景點。湖光山色映襯著駒岳火山，景緻壯麗。",
            historyCulture: "由駒岳火山噴發形成的湖泊，湖中有126個小島，由18座橋梁連接，形成獨特的景觀。",
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">行動指令</span>：建議租借<span class="emphasis">腳踏車</span>環湖一圈（約14公里，需1.5小時），或搭乘<span class="emphasis">遊覽船</span>穿梭於島嶼間。</li><li><span class="emphasis">美食推薦</span>：必吃「沼之家」的醬油與芝麻雙色糰子。</li><li><span class="emphasis">拍照點</span>：湖畔木棧道、駒岳火山與湖面的倒影。</li></ul>'
        },
        {
            name: "炭火燒肉 泉味亭",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E7%82%AD%E7%81%AB%E7%87%92%E8%82%89%20%E6%B3%89%E5%91%B3%E4%BA%AD%20%E5%87%BD%E9%A4%A8",
            parkingInfo: "店家設有專屬停車場。",
            expertRec: "位於五稜郭區域的熟成和牛專門店，是在地人推薦的高品質燒肉店，適合旅程中安排一頓豪華的燒肉大餐。",
            historyCulture: '看板料理：<span class="emphasis">熟成和牛拼盤</span>、<span class="emphasis">松阪牛</span>。',
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">料理特色</span>：提供高品質的熟成肉品，油花分布均勻，入口即化。</li><li><span class="emphasis">IG/FB 人氣</span>：拍攝和牛美麗的油花紋路。</li><li><span class="emphasis">拍照點</span>：爐火上燒烤和牛的特寫。</li></ul>'
        },
        {
            name: "湯倉神社",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%B9%AF%E5%80%89%E7%A5%9E%E7%A4%BE",
            ticketInfo: "免費參拜",
            parkingInfo: "設有大型免費專用停車場 (約80台)。",
            expertRec: "湯之川溫泉的守護神，也是溫泉的發源地。神社雖小但五臟俱全，充滿特色，是溫泉區必訪的能量景點。",
            historyCulture: '主祀溫泉之神與醫藥之神，神社內的「神兔」據說撫摸後可以治癒疾病。',
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">御守/御朱印</span>：必求『御神緣御守』（可選『健』、『愛』、『美』等漢字）與『大丈夫御守』。</li><li><span class="emphasis">趣味體驗</span>：挑戰函館限定的<span class="emphasis">『釣烏賊籤詩』(いかみくじ)</span>。</li><li><span class="emphasis">拍照點</span>：釣起烏賊籤詩的瞬間、可愛的神兔雕像。</li></ul>'
        },
        {
            name: "函館市熱帶植物園",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E5%B8%82%E7%86%B1%E5%B9%B6%E6%A4%8D%E7%89%A9%E5%9C%92",
            ticketInfo: "大人 300日圓",
            parkingInfo: "設有免費停車場。",
            expertRec: "冬季限定（12月至5月）的「猴子泡湯」是這裡的最大亮點，看著日本獼猴一臉享受地泡在溫泉中，非常療癒。",
            historyCulture: "除了猴子山，園區內也有大型溫室，種植了多種熱帶植物。",
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">參觀重點</span>：冬季限定的猴子泡湯。</li><li><span class="emphasis">拍照點</span>：拍攝猴子泡湯時的各種逗趣表情。</li></ul>'
        },
        {
            name: "ガスト (Gusto) 函館鍛治店",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E3%82%AC%E3%82%B9%E3%83%88%20%E5%87%BD%E9%A4%A8%E9%8D%9B%E5%86%B6%E5%BA%97",
            parkingInfo: "設有專用停車場。",
            expertRec: "日本連鎖家庭餐廳的代表，提供平價多樣的日式、西式餐點，是體驗在地日常飲食文化的好地方。",
            historyCulture: '看板料理：<span class="emphasis">起司IN漢堡排 (チーズINハンバーグ)</span>、<span class="emphasis">飲料吧 (ドリンクバー)</span>。',
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">料理特色</span>：菜單豐富，價格實惠，飲料吧可無限暢飲。</li><li><span class="emphasis">IG/FB 人氣</span>：拍攝切開漢堡排後流出起司的瞬間。</li><li><span class="emphasis">拍照點</span>：豐盛的餐點組合。</li></ul>'
        },
        {
            name: "特拉普派女子修道院",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E7%89%B9%E6%8B%89%E6%99%AE%E6%B4%BE%E5%A5%B3%E5%AD%90%E4%BF%AE%E9%81%93%E9%99%A2",
            ticketInfo: "庭園免費參觀。資料館: 200日圓。",
            parkingInfo: "修道院對面的「市民之森」設有收費停車場 (一般小客車 ¥200/次)。",
            expertRec: "日本第一座女子修道院，建築風格莊嚴美麗。院內販售的修女手作甜點與冰淇淋非常有名。",
            historyCulture: '明治31年（1898年）由法國派遣的八位修女所創立，至今仍有修女在此過著祈禱與勞動的生活。',
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">必買伴手禮</span>：修女手作的『法式奶油蛋糕捲』(Madalena) 與白巧克力。</li><li><span class="emphasis">美食推薦</span>：務必品嚐停車場旁「市民之森」販賣的<span class="emphasis">『牛奶霜淇淋』</span>，號稱函館第一。</li><li><span class="emphasis">拍照點</span>：修道院本館的紅磚建築、聖米迦勒像、聖母瑪利亞像。</li></ul>'
        }
    ],

    // Data for Accommodation section
    accommodation: [
        {
            day: "1-2",
            city: "函館 (站前)",
            name: "JR Inn 函館",
            url: "https://www.google.com/maps/search/?api=1&query=JR%20Inn%20%E5%87%BD%E9%A4%A8",
            parking: "無飯店專用停車場。可停合作的『JR函館站停車場』(¥600/24小時，可多次進出)。",
            convenienceStores: [
                { brand: "7-Eleven", name: "セブン-イレブン JR函館駅店" },
                { brand: "Lawson", name: "ローソン 函館駅前店" }
            ]
        },
        {
            day: "3-4",
            city: "函館 (灣區)",
            name: "La Vista 函館灣",
            url: "https://www.google.com/maps/search/?api=1&query=La%20Vista%20%E5%87%BD%E9%A4%A8%E7%81%A3",
            parking: "有 (飯店專用停車場，¥1,000/晚，採先到先停制)。",
            convenienceStores: [
                { brand: "FamilyMart", name: "ファミリーマート ラビスタ函館ベイ店 (位於飯店1樓)" }
            ]
        },
        {
            day: "5-6",
            city: "函館 (湯之川溫泉)",
            name: "湯之川溫泉 平成館潮騷亭",
            url: "https://www.google.com/maps/search/?api=1&query=%E6%B9%AF%E4%B9%8B%E5%B7%9D%E6%BA%AB%E6%B3%89%20%E5%B9%B3%E6%88%90%E9%A4%A8%E6%BD%AE%E9%A8%B7%E4%BA%AD",
            parking: "提供免費專用停車場 (約70台，無需預約)。",
            convenienceStores: [
                 { brand: "Lawson", name: "ローソン 函館湯の川温泉店" },
            ]
        }
    ],
    
    // Data for Transport Pass section
    transportPass: {
        title: "核心交通票券：函館市電 & 巴士",
        details: {
            "類型": "市電一日券 (¥600) 或 市電・巴士共通一日券 (¥1,000)",
            "啟用日期": "視每日行程彈性購買",
        },
        description: '<p><span class="emphasis">票券價值解析：</span>由於本次行程以函館市區為核心，JR Pass 並不適用。交通主力將是函館市電與巴士。若單日搭乘市電超過3次，購買「市電一日券」即回本。若行程包含特拉普派修道院等巴士才能抵達的郊區，則可考慮「市電・巴士共通一日券」。</p><p class="text-sm text-red-600 mt-2"><span class="emphasis">重要提醒:</span> 大沼公園需額外購買 JR 車票或使用租車。</p>'
    },

    transportPassAnalysis: null,

    // Data for Transport Summary table
    transportSummary: [
        { day: 1, route: "機場→函館站", transport: "機場接駁巴士", time: "下午", cost: "約 ¥500" },
        { day: 2, route: "函館站↔灣區/元町", transport: "函館市電", time: "全日", cost: "市電一日券 ¥600" },
        { day: 3, route: "灣區↔五稜郭", transport: "函館市電/租車", time: "全日", cost: "市電一日券 ¥600 / 租車" },
        { day: 4, route: "函館↔大沼公園", transport: "JR函館本線 / 租車", time: "全日", cost: "JR 約 ¥1,140 (來回) / 租車" },
        { day: 5, route: "市區→湯之川溫泉", transport: "函館市電 / 租車", time: "全日", cost: "市電 / 租車" },
        { day: 6, route: "湯之川↔修道院", transport: "函館巴士 / 租車", time: "全日", cost: "巴士 / 租車" },
        { day: 7, route: "湯之川溫泉→機場", transport: "機場接駁巴士 / 租車", time: "上午", cost: "約 ¥300 / 租車" }
    ],

    // Data for Transport Tactics list
    transportTactics: [
        '<span class="emphasis">租車策略:</span> 函館市區（站前、灣區、元町）停車位少且貴，建議 Day 1-3 依靠市電。Day 4-6 可考慮租車，以攻略大沼公園、湯之川、修道院等郊區景點，效率最高。',
        '<span class="emphasis">市電一日券:</span> 只要當天搭乘市電3次以上（例如：站前→五稜郭→灣區），就務必購買600日圓的一日券。',
        '<span class="emphasis">IC卡準備:</span> 準備一張 SUICA 或 ICOCA 卡，用於支付市電、巴士與JR車資，省去每次購票的麻煩。',
        '<span class="emphasis">函館山交通:</span> 纜車停車場極易客滿，強烈建議搭乘市電至「十字街」站後步行上山麓站，或搭乘登山巴士直達山頂。'
    ],

    // Data for Preparation section
    prepList: {
        description: "這份清單已根據函館7天6夜的行程重新彙整，並加入了季節性注意事項。請在出發前逐一確認。",
        categories: [
            {
                category: '重要文件與預訂',
                items: [
                    '<span class="emphasis">護照與簽證</span>: 確認護照效期超過6個月。',
                    '<span class="emphasis">電子機票 & 住宿憑證</span>: 儲存所有預訂確認信。',
                    '<span class="emphasis">租車預訂 (若有)</span>: 務必攜帶「護照」、「駕照正本」、「駕照日文譯本」。'
                ]
            },
            {
                category: '交通與票券',
                items: [
                    '<span class="emphasis">IC卡 (SUICA/ICOCA)</span>: 準備或儲值一張IC卡。函館也接受日本全國通用的交通IC卡。',
                    '<span class="emphasis">[關鍵任務] 函館山纜車</span>: 旺季（尤其冬季點燈）人潮眾多，建議提早排隊。'
                ]
            },
            {
                category: '行李策略 (7日版)',
                items: [
                    '<span class="emphasis">行李轉送</span>：本次行程更換3次飯店，可善用宅急便。',
                    ' • <span class="emphasis">Day 3 (JR Inn→La Vista)</span>: 距離近，可搭計程車或自行拉行李。',
                    ' • <span class="emphasis">Day 5 (La Vista→平成館)</span>: 建議將大行李寄送至 Day 5 的溫泉旅館。',
                    '<span class="emphasis">過夜包</span>：準備一個輕便背包，用於飯店間移動日。',
                ]
            },
            {
                category: '衣物與裝備',
                items: [
                    '<span class="emphasis">舒適的鞋子</span>: 行程包含大量步行（元町、大沼公園），務必穿著防滑好走的鞋子。',
                    '<span class="emphasis">洋蔥式穿搭</span>: 函館日夜溫差大，海風強勁。即使是夏天，函館山頂也需要防風外套。',
                    '<span class="emphasis">防滑 (冬季)</span>: 若為冬季(12-2月)來訪，務必穿著雪靴，並考慮加裝冰爪。'
                ]
            },
        ]
    },

    prepMemos: [
        {
            title: "★ 函館旅行哲學：坂道與夜景",
            content: "函館的魅力在於「慢」。慢慢地走過元町的每一條坂道（斜坡），感受異國風情。保留充足的時間等待函館山的百萬夜景，從黃昏到入夜的魔幻時刻是精華所在。"
        },
        {
            title: "溫泉禮儀",
            content: "進入浴池前，請務必先在旁邊的淋浴區將身體沖洗乾淨。毛巾不可帶入浴池中。"
        },
        {
            title: "神社參拜",
            content: '進入鳥居前先鞠躬。在「手水舍」洗手漱口。參拜時遵循「二拜二拍手一拜」為基本。'
        }
    ],

    prepExpertTips: [
        {
            title: "通訊建議",
            content: "建議購買吃到飽流量的SIM卡或租借Pocket WiFi。函館市區訊號良好。"
        },
        {
            title: "貨幣與支付",
            content: "函館朝市的許多小店可能只收現金，建議準備足夠的日圓。"
        },
        {
            title: "打包策略 (海港城市)",
            content: "函館是一個海港城市，海風非常強勁。防風外套是四季必備單品，冬季更需要帽子和圍巾保護頭部。"
        }
    ],

    // Main data for the daily itinerary
    dailyData: {
        day1: {
            title: '序章・北國之港', date: 'Day 1', location: '函館機場 → 函館站', timeAnalysis: { travel: 1.5, activity: 4.0 },
            timeline: [
                { time: '14:00', type: '✈️', event: '抵達 函館機場 (HKD)' },
                { time: '14:30-15:00', type: '🚌', event: '機場交通: 搭乘機場接駁巴士 →「JR函館站」', cost: '約 ¥500'},
                { time: '15:00-15:30', type: '🏨', event: '飯店Check-in: <a href="https://www.google.com/maps/search/?api=1&query=JR%20Inn%20%E5%87%BD%E9%A4%A8" target="_blank" class="text-blue-600 hover:underline">JR Inn 函館</a>'},
                { time: '15:30-17:30', type: '🚶', event: '站前散策 & <a href="https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E6%9C%9D%E5%B8%82" target="_blank" class="text-blue-600 hover:underline">函館朝市</a> (駅二市場)', description: '雖然是朝市，但傍晚仍有部分乾貨店營業，先熟悉環境。', parkingInfo: "『函館朝市駐車場』(30分鐘內免費)。" },
                { time: '17:30-18:30', type: '☕', event: '下午茶: <a href="https://www.google.com/maps/search/?api=1&query=Snaffle's%20%E5%87%BD%E9%A4%A8%E7%AB%99%E5%89%8D%E5%BA%97" target="_blank" class="text-blue-600 hover:underline">Snaffle s (站前店)</a>', description: '品嚐函館最知名的輕乳酪蛋糕。<span class="emphasis">【美食任務：下午茶已達成】</span>', parkingInfo: "店家設有平面停車場。' },
                { time: '19:00', type: '🍽️', event: '晚餐: 函館站前 <a href="https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E3%81%BE%E3%82%8B%E3%81%8B%E3%81%A4%E6%B0%B4%E7%94%A3%20%E6%9C%AC%E5%BA%97" target="_blank" class="text-blue-600 hover:underline">函館まるかつ水産 (本店)</a>', description: '位於車站旁的高品質迴轉壽司。' },
                { time: '21:00', type: '🏨', event: '住宿: <a href="https://www.google.com/maps/search/?api=1&query=JR%20Inn%20%E5%87%BD%E9%A4%A8" target="_blank" class="text-blue-600 hover:underline">JR Inn 函館</a>'}
            ],
            intel: {
                jr_inn_tip: { title: 'JR Inn 住宿TIPS', text: '飯店頂樓設有大浴場，可眺望函館山與車站夜景。一樓大廳提供免費咖啡與多種枕頭可選。' }
            },
            insights: {
                first_day_strategy: { title: '<span class="emphasis">專家策略：首日高效佈局</span>', text: '首日入住函館站前，是最高效的選擇。可輕鬆往返機場，步行範圍內即包含函館朝市、Snaffle\'s 等必訪地點，並方便隔天搭乘市電。' },
            }
        },
        day2: {
            title: '灣區浪漫・百萬夜景', date: 'Day 2', location: '函館站 ↔ 灣區・元町', timeAnalysis: { travel: 1.5, activity: 8.0 },
            timeline: [
                 { time: '09:00', type: '☕', event: '早餐: <a href="https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E6%9C%9D%E5%B8%82" target="_blank" class="text-blue-600 hover:underline">函館朝市</a>', description: '在「きくよ食堂」品嚐元祖海鮮丼，或體驗「釣活烏賊」。', stay: '2 小時' },
                 { time: '11:00-14:00', type: '🚶', event: '灣區探索: <a href="https://www.google.com/maps/search/?api=1&query=%E9%87%91%E6%A3%AE%E7%B4%85%E7%A3%9A%E5%80%89%E5%BA%AB" target="_blank" class="text-blue-600 hover:underline">金森紅磚倉庫</a>', description: '逛特色雜貨店、品嚐Snaffle\'s等甜點。', ticketInfo: "免費入場", stay: '3 小時', parkingInfo: "『TIMES24』停車場，消費滿¥1,000免費2小時。" },
                 { time: '14:00-15:00', type: '🍽️', event: '午餐: <a href="https://www.google.com/maps/search/?api=1&query=%E5%B9%B8%E9%81%8B%E5%B0%8F%E4%B8%91%E6%BC%A2%E5%A0%A1%20%E7%81%A3%E5%8D%80%E6%9C%AC%E5%BA%97" target="_blank" class="text-blue-600 hover:underline">幸運小丑漢堡 (灣區本店)</a>', description: '品嚐函館靈魂美食「中華雞腿漢堡」。<span class="emphasis">【美食任務：速食店已達成】</span><span class="emphasis">【美食任務：B級美食已達成】</span>', parkingInfo: "無專用停車場，請使用金森倉庫停車場。" },
                 { time: '15:00-17:00', type: '🚶', event: '灣區B級美食: <a href="https://www.google.com/maps/search/?api=1&query=%E9%95%B7%E8%B0%B7%E5%B7%9D%E5%95%86%E5%BA%97%20%E7%81%A3%E5%8D%80%E5%BA%97" target="_blank" class="text-blue-600 hover:underline">長谷川商店 (灣區店)</a>', description: '品嚐現點現烤的「烤肉便當」。', parkingInfo: "店家門口有少量免費停車位 (約4台)。" },
                 { time: '17:30', type: '🚠', event: '關鍵任務: <a href="https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E5%B1%B1%E7%BA%9C%E8%BB%8A%20%E5%B1%B1%E9%BA%93%E7%AB%99" target="_blank" class="text-blue-600 hover:underline">函館山纜車</a>', description: '搭乘纜車上山，搶佔觀景台最佳位置。', ticketInfo: "來回 ¥1,800", parkingInfo: "山麓站有免費停車場 (車位極少)。" },
                 { time: '18:00-19:30', type: '🌃', event: '絕景鑑賞: <a href="https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E5%B1%B1%E7%BA%9C%E8%BB%8A%20%E5%B1%B1%E9%BA%93%E7%AB%99" target="_blank" class="text-blue-600 hover:underline">函館山夜景</a>', description: '欣賞黃昏、魔幻時刻至百萬夜景。', awardHighlight: "日本三大夜景 (米其林三星)", ticketInfo: "觀景台免費", stay: '約 1.5 小時' },
                 { time: '20:00', type: '🍽️', event: '晚餐: <a href="https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E5%A4%AA%E9%83%8E%20%E5%AE%87%E8%B3%80%E6%B5%A6%E7%B8%BD%E5%BA%97" target="_blank" class="text-blue-600 hover:underline">函太郎 (宇賀浦總店)</a>', description: '搭乘計程車或市電轉乘，品嚐海景迴轉壽司。<span class="emphasis">【美食任務：迴轉壽司已達成】</span>', parkingInfo: "設有大型免費專用停車場 (約60台)。" },
                 { time: '22:00', type: '🏨', event: '住宿: <a href="https://www.google.com/maps/search/?api=1&query=JR%20Inn%20%E5%87%BD%E9%A4%A8" target="_blank" class="text-blue-600 hover:underline">JR Inn 函館</a>'}
            ],
            intel: {
                night_view_hack: { title: '函館山夜景 關鍵TIPS', text: '函館山頂風大極冷，務必穿著最保暖的防風外套。最佳拍攝時間是日落後15-30分鐘的「魔幻時刻」，天空呈寶藍色，城市燈火初上。' },
                transport_hack: { title: '交通TIPS：市電一日券', text: '本日行程（站前→灣區→十字街→宇賀浦）搭乘市電次數多，購買600日圓的「市電一日券」絕對划算。' }
            },
            insights: {
                b_gourmet: { title: '<span class="emphasis">美食筆記：函館的B級美食王者</span>', text: '「幸運小丑漢堡」與「長谷川商店烤肉便當」並列為函館兩大B級美食。兩者總店都在灣區附近，時間充裕可一次挑戰，是深度旅行的證明。' }
            }
        },
        day3: {
            title: '異國風情・元町坂道散策', date: 'Day 3', location: '元町・灣區', timeAnalysis: { travel: 1.0, activity: 7.0 },
            timeline: [
                { time: '09:00', type: '🏨', event: '飯店Check-out，移動並Check-in <a href="https://www.google.com/maps/search/?api=1&query=La%20Vista%20%E5%87%BD%E9%A4%A8%E7%81%A3" target="_blank" class="text-blue-600 hover:underline">La Vista 函館灣</a>', description: '寄放行李。(若租車可於今日開始)' },
                { time: '10:00-11:00', type: '⛩️', event: '元町散策起點: <a href="https://www.google.com/maps/search/?api=1&query=%E8%88%B9%E9%AD%82%E7%A5%9E%E7%A4%BE" target="_blank" class="text-blue-600 hover:underline">船魂神社</a>', description: '參拜北海道最古老神社，祈求交通安全。', ticketInfo: "免費參拜", stay: '約 1 小時' },
                { time: '11:00-14:00', type: '🚶', event: '<a href="https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%20%E5%85%83%E7%94%BA%20%E5%85%AB%E5%B9%A1%E5%9D%82" target="_blank" class="text-blue-600 hover:underline">元町教會群 & 坂道巡禮</a>', description: '散步遊覽八幡坂、函館正教會、元町天主堂。', stay: '約 3 小時', parkingInfo: "『函館市元町觀光停車場』(1小時內¥200)。" },
                { time: '14:00-15:00', type: '🏛️', event: '參觀 <a href="https://www.google.com/maps/search/?api=1&query=%E8%88%8A%E5%87%BD%E9%A4%A8%E5%8D%80%E5%85%AC%E6%9C%83%E5%A0%82" target="_blank" class="text-blue-600 hover:underline">舊函館區公會堂</a>', description: '欣賞藍黃色的華麗洋館，可付費體驗歐洲禮服。', ticketInfo: "大人 300日圓", stay: '約 1 小時' },
                { time: '15:30', type: '🍽️', event: '午餐/下午茶: 元町咖啡廳 (e.g. <a href="https://www.google.com/maps/search/?api=1&query=%E8%8C%B6%E6%88%BF%20%E8%8F%8A%E6%B3%89" target="_blank" class="text-blue-600 hover:underline">茶房 菊泉</a>)', description: '在古民家咖啡廳享受甜點。' },
                { time: '17:00-18:30', type: '⛩️', event: '參拜 <a href="https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E8%AD%B7%E5%9C%8B%E7%A5%9E%E7%A4%BE" target="_blank" class="text-blue-600 hover:underline">函館護國神社</a>', description: '位於纜車站旁，尋找可愛的貓頭鷹御守。', ticketInfo: "免費參拜", parkingInfo: "可使用函館山纜車站免費停車場。" },
                { time: '19:00', type: '🍽️', event: '晚餐: <a href="https://www.google.com/maps/search/?api=1&query=%E3%81%A8%E3%82%93%E6%82%A6%20%E5%87%BD%E9%A4%A8" target="_blank" class="text-blue-600 hover:underline">とん悦 (Tonetsu)</a>', description: '品嚐在地人推薦的美味炸豬排。<span class="emphasis">【美食任務：豬排飯已達成】</span>', parkingInfo: "店家設有專用停車場。" },
                { time: '21:00', type: '🏨', event: '宵夜/住宿: <a href="https://www.google.com/maps/search/?api=1&query=La%20Vista%20%E5%87%BD%E9%A4%A8%E7%81%A3" target="_blank" class="text-blue-600 hover:underline">La Vista 函館灣</a>', description: '享受飯店頂樓溫泉與免費的「夜鳴拉麵」。'}
            ],
            intel: {
                la_vista_hack: { title: 'La Vista 住宿TIPS', text: '這間飯店以「日本第一的飯店早餐」聞名（需另付費）。頂樓的露天溫泉可眺望函館港，泡湯後別忘了享用免費的冰棒與養樂多。' },
                motomachi_walk: { title: '元町散步TIPS', text: '元町地區全是坡道（坂道），建議搭市電至「十字街」站，先逛灣區，再步行至元町，由下往上攻略，或搭車至最上方（如公會堂）再由上往下走較省力。' }
            },
            insights: {
                pilgrimage_focus: { title: '<span class="emphasis">聖地巡禮：尋找 Saint Snow</span>', text: 'Day 2 的灣區與 Day 3 的元町是《Love Live! Sunshine!!》中對手團體 Saint Snow 的主要活動區域。八幡坂是經典演唱會場景，而函館西高校（原型）就在坂道頂端附近。' }
            }
        },
        day4: {
            title: '星型要塞・五稜郭之戰', date: 'Day 4', location: '函館 (五稜郭)', timeAnalysis: { travel: 1.5, activity: 7.0 },
            timeline: [
                 { time: '08:00', type: '☕', event: '早餐: <a href="https://www.google.com/maps/search/?api=1&query=La%20Vista%20%E5%87%BD%E9%A4%A8%E7%81%A3" target="_blank" class="text-blue-600 hover:underline">La Vista 函館灣</a>', description: '體驗傳說中的「日本第一飯店早餐」，主打海鮮丼飯吃到飽。' },
                 { time: '10:00-12:30', type: '🏯', event: '登上 <a href="https://www.google.com/maps/search/?api=1&query=%E4%BA%94%E7%A8%9C%E9%83%AD%E5%A1%94" target="_blank" class="text-blue-600 hover:underline">五稜郭塔</a>', description: '從展望台俯瞰完整的星型要塞與函館市景。', awardHighlight: "日本100名城 (續)", ticketInfo: "大人 1,000日圓", stay: '約 2.5 小時', parkingInfo: "無專用停車場，請使用『函館市藝術廳停車場』(1小時¥200)。" },
                 { time: '12:30-13:30', type: '🍽️', event: '午餐: <a href="https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E9%BA%B5%E5%BB%9A%E6%88%BF%20%E5%91%B3%E5%BD%A9%20%E6%9C%AC%E5%BA%97" target="_blank" class="text-blue-600 hover:underline">函館麵厨房 味彩 (本店)</a>', description: '品嚐函館鹽味拉麵的王者。<span class="emphasis">【美食任務：拉麵已達成】</span>', parkingInfo: "有專用停車場 (7台)。" },
                 { time: '13:30-15:00', type: '🚶', event: '漫步 <a href="https://www.google.com/maps/search/?api=1&query=%E4%BA%94%E7%A8%9C%E9%83%AD%E5%A1%94" target="_blank" class="text-blue-600 hover:underline">五稜郭公園</a> & 箱館奉行所', awardHighlight: "日本櫻花名所100選", description: '感受戊辰戰爭的歷史氛圍，尋找《黃金神威》土方歲三的足跡。', ticketInfo: "公園免費 (奉行所 500日圓)", stay: '約 1.5 小時' },
                 { time: '15:00-16:30', type: '☕', event: '下午茶: <a href="https://www.google.com/maps/search/?api=1&query=%E5%85%AD%E8%8A%B1%E4%BA%AD%20%E4%BA%94%E7%A8%9C%E9%83%AD%E5%BA%97" target="_blank" class="text-blue-600 hover:underline">六花亭 (五稜郭店)</a>', description: '在優美的環境中品嚐葡萄奶油夾心餅乾與咖啡。', parkingInfo: "設有免費專用停車場。" },
                 { time: '17:00-18:30', type: '🍽️', event: '晚餐 (選項A): <a href="https://www.google.com/maps/search/?api=1&query=Colz%20%E3%82%B3%E3%83%AB%E3%83%84%20%E5%87%BD%E9%A4%A8" target="_blank" class="text-blue-600 hover:underline">Colz (コルツ)</a>', description: '品嚐Tabelog高分的在地義大利麵。<span class="emphasis">【美食任務：義大利麵已達成】</span>', parkingInfo: "店家後方設有專用停車場。" },
                 { time: '17:00-18:30', type: '🍽️', event: '晚餐 (選項B): <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%AC%E3%82%B9%E3%83%88%20%E5%87%BD%E9%A4%A8%E9%8D%9B%E5%86%B6%E5%BA%97" target="_blank" class="text-blue-600 hover:underline">ガスト (Gusto) 函館鍛治店</a>', description: '體驗日本家庭餐廳文化。<span class="emphasis">【美食任務：家庭餐廳已達成】</span>', parkingInfo: "設有專用停車場。" },
                 { time: '20:00', type: '🏨', event: '住宿: <a href="https://www.google.com/maps/search/?api=1&query=La%20Vista%20%E5%87%BD%E9%A4%A8%E7%81%A3" target="_blank" class="text-blue-600 hover:underline">La Vista 函館灣</a>'}
            ],
            intel: {
                goryokaku_tower_hack: { title: '五稜郭塔 攻略TIPS', text: '塔內除了展望台，還有展示土方歲三歷史的區域與透明玻璃地板，值得一看。若為櫻花季或冬季點燈（五稜星之夢）期間，景色最為壯觀。' }
            },
            insights: {
                golden_kamuy: { title: '文化見解：黃金神威與五稜郭', text: '五稜郭是《黃金神威》中土方歲三勢力的最終據點。在塔上俯瞰這片土地，更能感受到這段歷史與故事的厚重感。' }
            }
        },
        day5: {
            title: '北國自然・大沼公園環湖', date: 'Day 5', location: '函館 ↔ 大沼・湯之川', timeAnalysis: { travel: 2.5, activity: 5.5 },
            timeline: [
                { time: '09:00', type: '🏨', event: '飯店Check-out，(若租車) 取車。' },
                { time: '10:00-10:40', type: '🚆', event: '移動: (方案A) 搭乘 JR特急北斗號 (函館→大沼公園) / (方案B) 自駕前往 (約40分鐘)' },
                { time: '10:40-14:40', type: '🏞️', event: '<a href="https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E6%B2%BC%E5%9C%8B%E5%AE%9A%E5%85%AC%E5%9C%92" target="_blank" class="text-blue-600 hover:underline">大沼國定公園</a> 深度遊覽', awardHighlight: "日本新三景", description: '租腳踏車環湖，或搭乘遊覽船。', ticketInfo: "公園免費", stay: '約 4 小時', parkingInfo: "JR站對面有收費停車場 (¥400/次)。" },
                { time: '中午', type: '🍽️', event: '午餐: <a href="https://www.google.com/maps/search/?api=1&query=%E6%B2%BC%E4%B9%8B%E5%AE%B6" target="_blank" class="text-blue-600 hover:underline">沼之家 (沼の家)</a>', description: '品嚐知名的「大沼糰子」作為午餐或甜點。' },
                { time: '15:30-16:30', type: '🍽️', event: '豪華晚餐 (選項A): <a href="https://www.google.com/maps/search/?api=1&query=%E7%82%AD%E7%81%AB%E7%87%92%E8%82%89%20%E6%B3%89%E5%91%B3%E4%BA%AD%20%E5%87%BD%E9%A4%A8" target="_blank" class="text-blue-600 hover:underline">炭火燒肉 泉味亭</a>', description: '品嚐高品質熟成和牛。<span class="emphasis">【美食任務：燒肉已達成】</span>', parkingInfo: "設有專屬停車場。" },
                { time: '16:00-17:00', type: '🚆', event: '移動: (方案A) JR (大沼公園→函館→湯之川) / (方案B) 自駕前往 (約50分鐘)' },
                { time: '18:00', type: '🏨', event: '飯店Check-in & 晚餐 (選項B): <a href="https://www.google.com/maps/search/?api=1&query=%E6%B9%AF%E4%B9%8B%E5%B7%9D%E6%BA%AB%E6%B3%89%20%E5%B9%B3%E6%88%90%E9%A4%A8%E6%BD%AE%E9%A8%B7%E4%BA%AD" target="_blank" class="text-blue-600 hover:underline">平成館潮騷亭</a>', description: '若選擇溫泉旅館一泊二食，則在此享用會席料理或自助餐。' },
            ],
            intel: {
                onuma_park_hack: { title: '大沼公園攻略', text: '公園分為「大島之路」（約15分鐘）、「環島之路」（約50分鐘）等散步路線。但最推薦的是租<span class="emphasis">腳踏車</span>進行環湖（約1.5小時），才能真正感受駒岳火山的壯麗。' }
            },
            insights: {
                new_japan_three_views: { title: '文化見解：新日本三景', text: '大沼公園因其「駒岳火山、湖泊、島嶼」三者合一的獨特景觀，在1915年被選為「新日本三景」，與九州「耶馬溪」、靜岡「三保松原」齊名。' }
            }
        },
        day6: {
            title: '溫泉療癒 & 郊區巡禮', date: 'Day 6', location: '湯之川溫泉・函館郊區', timeAnalysis: { travel: 2.0, activity: 6.0 },
            timeline: [
                { time: '上午', type: '🏨', event: '早餐: 於溫泉旅館內享用日式早餐 (已含於一泊二食方案或自理)' },
                { time: '10:00-11:00', type: '⛩️', event: '溫泉區散策: <a href="https://www.google.com/maps/search/?api=1&query=%E6%B9%AF%E5%80%89%E7%A5%9E%E7%A4%BE" target="_blank" class="text-blue-600 hover:underline">湯倉神社</a>', description: '參拜湯之川的守護神，體驗釣烏賊籤詩。', ticketInfo: "免費參拜", stay: '約 1 小時', parkingInfo: "設有大型免費專用停車場 (80台)。" },
                { time: '11:00-12:00', type: '🐒', event: '<a href="https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E5%B8%82%E7%86%B1%E5%B9%B6%E6%A4%8D%E7%89%A9%E5%9C%92" target="_blank" class="text-blue-600 hover:underline">函館市熱帶植物園</a>', description: '（若為冬季）觀賞著名的猴子泡湯。', ticketInfo: "大人 300日圓", stay: '約 1 小時', parkingInfo: "設有免費停車場。" },
                { time: '13:00-14:30', type: '⛪', event: '郊區巡禮: <a href="https://www.google.com/maps/search/?api=1&query=%E7%89%B9%E6%8B%89%E6%99%AE%E6%B4%BE%E5%A5%B3%E5%AD%90%E4%BF%AE%E9%81%93%E9%99%A2" target="_blank" class="text-blue-600 hover:underline">特拉普派女子修道院</a>', description: '參觀莊嚴的紅磚修道院建築。', ticketInfo: "庭園免費", stay: '約 1.5 小時', parkingInfo: "對面「市民之森」有收費停車場 (¥200/次)。" },
                { time: '14:30', type: '🍽️', event: '午餐/甜點: <a href="https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E5%B8%82%E6%B0%91%E3%81%AE%E6%A3%AE%20%E3%82%BD%E3%83%95%E3%83%88%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%A0" target="_blank" class="text-blue-600 hover:underline">市民之森 霜淇淋</a>', description: '品嚐號稱函館第一的牛奶霜淇淋。' },
                { time: '16:00-18:00', type: '⛩️', event: '深度參拜: <a href="https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E5%85%AB%E5%B9%A1%E5%AE%AE" target="_blank" class="text-blue-600 hover:underline">函館八幡宮</a>', description: '參訪函館最大的神社，感受莊嚴氛圍。', ticketInfo: "免費參拜", stay: '約 1 小時', parkingInfo: "設有免費停車場 (80台)。" },
                { time: '18:30', type: '🍽️', event: '晚餐: 湯之川溫泉區 <a href="https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E9%BA%B5%E5%BB%B3%20%E4%B8%80%E6%96%87%E5%AD%97%20%E6%B9%AF%E3%81%AE%E5%B7%9D" target="_blank" class="text-blue-600 hover:underline">一文字 拉麵</a>', description: '品嚐與「味彩」齊名的鹽味拉麵名店。' },
                { time: '20:00', type: '🏨', event: '住宿: <a href="https://www.google.com/maps/search/?api=1&query=%E6%B9%AF%E4%B9%8B%E5%B7%9D%E6%BA%AB%E6%B3%89%20%E5%B9%B3%E6%88%90%E9%A4%A8%E6%BD%AE%E9%A8%B7%E4%BA%AD" target="_blank" class="text-blue-600 hover:underline">平成館潮騷亭</a>', description: '享受最後一晚的溫泉。'}
            ],
            intel: {
                trappistine_hack: { title: '修道院攻略', text: '修道院內部為修女修行場所，不可進入。參觀重點為外部庭園與資料館。必買的伴手禮（蛋糕捲、餅乾）在入口旁的商店販售。' }
            },
            insights: {
                yunokawa_onsen: { title: '溫泉筆記：湯之川溫泉', text: '北海道三大溫泉鄉之一，距離函館市區和機場都非常近。泉質是「鹽化物泉」，泡完後皮膚會留下一層薄鹽，有極佳的保溫效果，對神經痛和手腳冰冷特別有效。' }
            }
        },
        day7: {
            title: '歸鄉・帶著北國的回憶', date: 'Day 7', location: '湯之川溫泉 → 函館機場', timeAnalysis: { travel: 1.0, activity: 1.0 },
            timeline: [
                { time: '09:00', type: '🏨', event: '早餐 & 飯店Check-out' },
                { time: '09:30-10:30', type: '🛍️', event: '最後採買: (若租車) <a href="https://googleusercontent.com/maps.google.com/113" target="_blank" class="text-blue-600 hover:underline">MEGA唐吉訶德 函館店</a>', description: '進行最後的藥妝與伴手禮補給。', parkingInfo: "設有大型免費停車場。" },
                { time: '11:00', type: '🚗', event: '租車歸還 (若有)' },
                { time: '11:30', type: '🚌', event: '前往 函館機場 (HKD)', cost: '約 ¥300'},
                { time: '14:00', type: '✈️', event: '航班起飛: HKD → TPE' }
            ],
            intel: {
                airport_souvenir: { title: '機場伴手禮補給', text: '函館機場雖然不大，但國內線航廈的伴手禮店非常齊全，Snaffle\'s、六花亭、LeTAO（小樽名店）等皆有設櫃，是補齊伴手禮的最後機會。' }
            },
            insights: {
                ekiben: { title: '文化筆記：函館的鐵道便當', text: '若從函館站離開，不可錯過函館站限定的「鰊魚卵押壽司便當」(数の子押し寿司)。若在朝市，則推薦購買「烏賊飯」(いかめし)作為旅途的美味回憶。' }
            }
        }
    }
};



