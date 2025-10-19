// --- TRIP DATA FILE ---
// Version 9.1.1: Hakodate 7-Day In-Depth Itinerary (Added specialTags field for modular rendering)

const tripData = {
    // Meta information for the page
    meta: {
        title: "北海道函館7日紀行：互動式作戰儀表板 v9.1 (擴充指南版)",
        mainTitle: "北海道函館7日紀行"
    },

    // Food Mission data
    missionSummary: {
        yakiniku: { completed: false, description: "燒肉" },
        kaitenSushi: { completed: false, description: "迴轉壽司" },
        ramen: { completed: false, description: "拉麵店" },
        pasta: { completed: false, description: "義大利麵" },
        tonkatsu: { completed: false, description: "豬排飯" },
        familyRestaurant: { completed: false, description: "家庭餐廳" },
        afternoonTea: { completed: false, description: "下午茶" },
        fastFood: { completed: false, description: "速食店" },
        bGradeGourmet: { completed: false, description: "B級美食" }
    },

    // --- NEW: Food Guide ---
    foodGuide: {
        ramen: [
            { name: "函館麵厨房 味彩 (本店)", description: "函館鹽味拉麵代表，湯頭清爽。Tabelog 3.64分。 可用特級套票3點。", address: "函館市五稜郭町29-22", hours: "11:00～20:25", mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E9%BA%B5%E5%BB%9A%E6%88%BF%20%E5%91%B3%E5%BD%A9%20%E6%9C%AC%E5%BA%97", parkingInfo: "有專用停車場(7台)。" },
            { name: "龍鳳拉麵", description: "函館朝市內人氣鹽味拉麵老店。", address: "函館朝市內", hours: "清晨至中午", mapUrl: "https://www.google.com/maps/search/?api=1&query=ドーミーインPREMIUM五稜郭?query=Dormy%20Inn%20Premium%20Goryokaku", parkingInfo: "使用朝市停車場。" },
            { name: "一文字 (函館本店)", description: "與味彩齊名的鹽味拉麵名店，位於湯之川溫泉區。", address: "函館市湯川町2-1-3", hours: "11:00-凌晨1:00", mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E9%BA%B5%E5%BB%B3%20%E4%B8%80%E6%96%87%E5%AD%97%20%E6%B9%AF%E3%81%AE%E5%B7%9D", parkingInfo: "有專用停車場。" }
        ],
        burger: [
            { name: "幸運小丑漢堡 (灣區本店)", description: "全日本最好吃在地漢堡，函館限定。 必點油淋炸雞漢堡。 可用特級套票4點。", address: "函館市末広町23-18", hours: "10:00-00:30", mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%B9%B8%E9%81%8B%E5%B0%8F%E4%B8%91%E6%BC%A2%E5%A0%A1%20%E7%81%A3%E5%8D%80%E6%9C%AC%E5%BA%97", parkingInfo: "無專用停車場，使用金森倉庫停車場。" },
             { name: "幸運小丑漢堡 (峠下總本店)", description: "最具特色分店，有巨大紅椅子，適合自駕。", address: "亀田郡七飯町峠下337-11", hours: "10:00-00:30", mapUrl: "https://www.google.com/maps/search/?api=1&query=ドーミーインPREMIUM五稜郭", parkingInfo: "有大型免費停車場。" },
            { name: "幸運小丑漢堡 (五稜郭公園前店)", description: "小天使裝潢主題。", address: "函館市五稜郭町30-14", hours: "10:00-00:30", mapUrl: "https://www.google.com/maps/search/?api=1&query=出雲大社8", parkingInfo: "無專用停車場，使用周邊停車場。" }
        ],
        sushi: [
            { name: "函太郎 (宇賀浦總店)", description: "海景迴轉壽司，品質佳。 可用特級套票折抵。", address: "函館市宇賀浦町14-4", hours: "11:00-21:00", mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E5%A4%AA%E9%83%8E%20%E5%AE%87%E8%B3%80%E6%B5%A6%E7%B8%BD%E5%BA%97", parkingInfo: "有大型免費停車場(60台)。" },
            { name: "根室花丸 (キラリス函館店)", description: "北海道必吃迴轉壽司Top 5之一。 使用當日新鮮漁獲。", address: "函館市若松町20-1 キラリス函館 B1F", hours: "11:00-21:00", mapUrl: "googleusercontent.com/maps.google.com/NUMBER", parkingInfo: "位於商場內，有合作停車場。" }
        ],
        yakiniku: [
            { name: "炭火燒肉 泉味亭", description: "熟成和牛專門店，在地人推薦，價格相對優惠。 推薦熟成和牛拼盤、石鍋拌飯。", address: "函館市鍛冶1-49-6", hours: "17:00-22:30", mapUrl: "https://www.google.com/maps/search/?api=1&query=%E7%82%AD%E7%81%AB%E7%87%92%E8%82%89%20%E6%B3%89%E5%91%B3%E4%BA%AD%20%E5%87%BD%E9%A4%A8", parkingInfo: "有專屬停車場。" },
            { name: "炭火燒肉 JUU JUU", description: "高級黑毛和牛。 推薦辣牛肉湯。", address: "函館市富岡町3-25-13", hours: "17:00-23:00", mapUrl: "https://www.google.com/maps/search/?api=1&query=石見銀山2", parkingInfo: "有停車場。" },
             { name: "成吉思汗 羊羊亭", description: "新鮮無腥羶味的生羊肉成吉思汗烤肉。", address: "函館市豊川町12-8 (金森倉庫旁)", hours: "11:30-14:30, 17:00-21:30", mapUrl: "https://www.google.com/maps/search/?api=1&query=石見銀山3", parkingInfo: "使用金森倉庫停車場。" }
        ],
        western: [
            { name: "五島軒 (本店 雪河亭)", description: "創業1879年的百年洋食老店。 招牌燉牛肉、咖哩飯。 可用特級套票折抵。", address: "函館市末広町4-5", hours: "11:30-20:30", mapUrl: "https://www.google.com/maps/search/?api=1&query=石見銀山4", parkingInfo: "有停車場。" },
            { name: "函館啤酒館 (函館ビヤホール)", description: "位於金森倉庫內，氣氛佳。 推薦Sapporo直送生啤、德國香腸。 可用特級套票折抵。", address: "函館市末広町14-12", hours: "11:30-21:30", mapUrl: "https://www.google.com/maps/search/?api=1&query=羽根屋+本店4", parkingInfo: "使用金森倉庫停車場。" }
        ],
        sweets: [
             { name: "Pastry Snaffle's (金森洋物館店)", description: "招牌舒芙蕾起司蛋糕。 可用特級套票折抵。", address: "函館市末広町13-9 金森洋物館內", hours: "9:30-19:00", mapUrl: "https://www.google.com/maps/search/?api=1&query=石見銀山5", parkingInfo: "使用金森倉庫停車場。" },
             { name: "Angelique Voyage", description: "Tabelog函館甜點店排名第一。 使用北海道頂級生奶油。", address: "函館市弥生町3-11", hours: "10:00-19:00", mapUrl: "https://www.google.com/maps/search/?api=1&query=羽根屋+本店5", parkingInfo: "有停車場。" },
             { name: "六花亭 (五稜郭店)", description: "商品最齊全的六花亭分店，設有喫茶室。", address: "函館市五稜郭町27-6", hours: "商店9:30-17:30, 喫茶室11:00-16:00", mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%85%AD%E8%8A%B1%E4%BA%AD%20%E4%BA%94%E7%A8%9C%E9%83%AD%E5%BA%97", parkingInfo: "有免費停車場。" }
        ],
        b_gourmet: [
            { name: "長谷川商店 (灣區店)", description: "便利商店烤肉便當，函館特色。 可用特級套票2點。", address: "函館市末広町23-5", hours: "7:00-22:00", mapUrl: "https://www.google.com/maps/search/?api=1&query=%E9%95%B7%E8%B0%B7%E5%B7%9D%E5%95%86%E5%BA%97%20%E7%81%A3%E5%8D%80%E5%BA%97", parkingInfo: "有少量免費車位(4台)。" }
            // Lucky Pierrot already covered in burger
        ]
        // Other categories like pasta, tonkatsu not explicitly in guide, kept empty for now
    },

    // --- NEW: Shopping Guide ---
    shoppingGuide: {
        souvenirs: [
            { name: "烏賊羊羹 (柳屋)", description: "烏賊造型咖啡味羊羹，每日限量50盒。", priceEstimate: "約¥1,200", purchaseLocations: "函館柳屋 (本店限定)", shelfLife: "常溫7天" },
            { name: "烏賊蛋糕捲 (菓子司水野屋)", description: "墨魚汁製作的黑色蛋糕捲。", priceEstimate: "不明", purchaseLocations: "菓子司水野屋", shelfLife: "冷凍1個月/冷藏3天" },
            { name: "函館RUSK (King Bake)", description: "多種口味法式麵包脆餅，奶油味最人氣。", priceEstimate: "依包裝", purchaseLocations: "King Bake本店、機場、車站", shelfLife: "依包裝" },
            { name: "Trappist修道院奶油餅乾", description: "北海道三大餅乾之一，修女手作。", priceEstimate: "依包裝", purchaseLocations: "修道院、朝市、車站、機場", shelfLife: "依包裝" },
            { name: "箱館鹽味蜂蜜蛋糕 (北島麵包)", description: "木盒裝，使用北海道原料。", priceEstimate: "約¥1,600", purchaseLocations: "車站、機場、五稜郭塔、函館山", shelfLife: "依包裝" },
            { name: "函館散歩蜂蜜饅頭 (千秋庵)", description: "印有函館景點圖案。", priceEstimate: "約¥150/個", purchaseLocations: "車站、機場、五稜郭塔、函館山", shelfLife: "常溫12天" },
            { name: "究極的函館咖哩 (五島軒)", description: "知名洋食店咖哩調理包。", priceEstimate: "依包裝", purchaseLocations: "五島軒、各大伴手禮店", shelfLife: "依包裝" },
            { name: "函館蒟蒻しゃぼん", description: "天然蒟蒻香皂。", priceEstimate: "依款式", purchaseLocations: "專賣店、部分伴手禮店", shelfLife: "N/A" },
            // Classic Hokkaido Souvenirs
            { name: "白色戀人", description: "北海道代表性伴手禮。", priceEstimate: "依包裝", purchaseLocations: "各大伴手禮店、機場", shelfLife: "依包裝" },
            { name: "六花亭草莓巧克力", description: "經典必買。", priceEstimate: "依包裝", purchaseLocations: "六花亭、各大伴手禮店、機場", shelfLife: "依包裝" },
            { name: "ROYCE生巧克力/洋芋片", description: "人氣巧克力品牌。", priceEstimate: "依包裝", purchaseLocations: "各大伴手禮店、機場", shelfLife: "冷藏" },
            { name: "薯條三兄弟", description: "北海道限定Calbee薯條。", priceEstimate: "依包裝", purchaseLocations: "各大伴手禮店、機場", shelfLife: "依包裝" },
            { name: "LeTAO雙層起司蛋糕", description: "小樽名店，機場有售。", priceEstimate: "依包裝", purchaseLocations: "機場、部分百貨", shelfLife: "冷凍/冷藏" }
        ],
        locations: [
            { name: "金森紅磚倉庫", description: "集結多家甜點、雜貨、伴手禮店，氣氛佳。 BAY函館、金森洋物館是重點。", mapUrl: "https://www.google.com/maps/search/?api=1&query=%E9%87%91%E6%A3%AE%E7%B4%85%E7%A3%9A%E5%80%89%E5%BA%AB" },
            { name: "函館機場", description: "國內線航廈伴手禮店齊全，包含Snaffle's、六花亭、LeTAO等。 2025/8月後有新美食街。", mapUrl: "https://www.google.com/maps/search/?api=1&query=石見銀山6" },
            { name: "JR函館站", description: "站內有伴手禮店及7-Eleven(可免稅)。", mapUrl: "https://www.google.com/maps/search/?api=1&query=石見銀山7" },
            { name: "札幌藥妝 (金森倉庫店)", description: "連鎖藥妝店，可使用網路優惠券。", mapUrl: "https://www.google.com/maps/search/?api=1&query=石見銀山8" },
            { name: "MEGA唐吉訶德 (函館店)", description: "大型綜合折扣店，適合最後補貨。", mapUrl: "https://googleusercontent.com/maps.google.com/113" }
        ]
    },

    // Data for the Themed Guides section (Simplified Souvenirs)
    themedGuidesData: {
        amulets: {
            title: "⛩️ 函館人氣御守攻略",
            description: "根據最新攻略整理，本趟行程中不可錯過的人氣御守與特色神社。",
            items: [
                { name: "湯倉神社", prefecture: "北海道函館市", popular: "溫泉守護神，必求『御神緣御守』（多種漢字可選）與『大丈夫御守』。", special: "可以釣『烏賊籤詩』(いかみくじ)，極具函館特色。" },
                { name: "函館護國神社", prefecture: "北海道函館市", popular: "位於函館山纜車站旁，以可愛的『貓頭鷹御守』聞名，象徵智慧與守護。", special: "因戊辰戰爭歷史，也被視為祈求勝負運的能量景點。" },
                { name: "船魂神社", prefecture: "北海道函館市", popular: "北海道最古老神社，主祀航海安全，必求獨特的『舵守』，庇佑交通平安、指引人生方向。", special: "據傳是源義經登陸之地。" },
                { name: "函館八幡宮", prefecture: "北海道函館市", popular: "函館最大神社，地位崇高，御守種類齊全，適合祈求總合平安與家運昌隆。", special: "每年1月2日有騎馬參拜活動。" }
            ]
        },
        souvenirs: {
            title: "🛍️ 2025 最新伴手禮情報",
            description: "結合在地人推薦與觀光客必買商品，整理出函館必買的代表性伴手禮清單。",
            items: [
                { name: "經典甜點", items: ['<span class="emphasis">Snaffle\'s 輕乳酪蛋糕</span>: 入口即化的口感，可在金森倉庫店或機場購買。', '<span class="emphasis">六花亭系列</span>: 葡萄奶油夾心餅乾是定番，五稜郭店商品最齊全。', '<span class="emphasis">Trappist修道院奶油餅乾</span>: 北海道三大餅乾之一，修女手工製作。'] },
                { name: "在地特色", items: ['<span class="emphasis">幸運小丑漢堡周邊</span>: T-Shirt、餅乾、咖哩調理包，灣區本店限定商品最多。', '<span class="emphasis">烏賊羊羹 (柳屋)</span>: 烏賊造型咖啡味羊羹，每日限量。', '<span class="emphasis">函館RUSK (King Bake)</span>: 多種口味的法式麵包脆餅。', '<span class="emphasis">烏賊相關</span>: 函館朝市的『烏賊飯』(いかめし)真空包、各式烏賊一夜干。'] }
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
                    { name: "五稜郭公園", prefecture: "北海道函館市", details: "約1600株染井吉野櫻，星型護城河倒映櫻花美景，最佳觀賞期：4月下旬～5月上旬。" }
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
                    { name: "五稜郭 (No.102)", prefecture: "北海道函館市", details: "日本第一座西洋式星形要塞，也是戊辰戰爭的最終舞台。" }
                ]
            },
             {
                title: "🔊 日本音風景100選",
                theme: "border-teal-300",
                locations: [
                    { name: "函館正教會鐘聲", prefecture: "北海道函館市", details: "元町地區代表性教堂的鐘聲，音色悠揚。" }
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
                title: "🌃 世界三大夜景 (米其林三星)",
                theme: "border-indigo-300",
                status: "入選",
                location: {
                    name: "函館山夜景",
                    prefecture: "北海道函館市",
                    description: "米其林綠色指南三星景點。由津輕海峽與函館港包夾的獨特「雙C」型海岸線，與那不勒斯、香港齊名。"
                },
                others: "那不勒斯（義大利）、香港"
            },
             {
                title: "♨️ 北海道三大溫泉鄉",
                theme: "border-cyan-300",
                status: "入選",
                location: {
                    name: "湯之川溫泉",
                    prefecture: "北海道函館市",
                    description: "擁有約350年歷史，距離函館機場僅5分鐘車程，泉質為鹽化物泉，保溫效果佳。"
                },
                others: "登別溫泉、定山溪溫泉"
            },
            {
                 title: "🍜 北海道三大拉麵",
                 theme: "border-yellow-300",
                 status: "入選",
                 location: {
                     name: "函館鹽味拉麵",
                     prefecture: "北海道函館市",
                     description: "以清澈爽口的鹽味湯頭聞名，與札幌味噌、旭川醬油並列。"
                 },
                 others: "札幌味噌拉麵、旭川醬油拉麵"
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
                '<span class="emphasis">函館港祭</span>: 8月初舉行，有盛大的花火大會(8/1)與「烏賊舞」遊行。',
                '<span class="emphasis">國際民俗藝術節</span>: 8月上旬在元町公園舉行。'
            ],
            foods: [
                '<span class="emphasis">烏賊 (いか)</span>: 函館的代表性漁獲，朝市的「活烏賊釣」是必體驗活動。',
                '<span class="emphasis">海膽 (うに)</span>: 6-8月是海膽最肥美的季節。'
            ]
        },
        autumn: {
            title: '秋 (10-11月)',
            theme_color: 'bg-orange-100',
            icon: '🍁',
            highlights: [
                '<span class="emphasis">大沼公園紅葉</span>: 「日本紅葉名所100選」，適合騎行或划船賞楓 (10月中下旬)。',
                '<span class="emphasis">函館MOMI-G節</span>: 見晴公園（香雪園）夜楓點燈 (10月下旬至11月初)。'
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
                '<span class="emphasis">函館聖誕幻想</span>: 12月在金森紅磚倉庫前，海上的巨大聖誕樹與每日點燈煙火。',
                '<span class="emphasis">五稜星之夢</span>: 五稜郭護城河點燈，星型要塞浮現於雪地 (12月至2月)。',
                '<span class="emphasis">猴子泡湯</span>: 湯之川熱帶植物園的日本獼猴 (12月1日至5月上旬)。',
                '<span class="emphasis">函館冬季煙火</span>: 2月每週六舉行。'
            ],
            foods: [
                '<span class="emphasis">時令海鮮</span>: 鱈魚、寒鰤、牡蠣。',
                '<span class="emphasis">暖身美食</span>: 溫泉鄉的鹽拉麵。'
            ]
        }
    },
     eventCalendar: [
        { name: "函館聖誕幻想", dateRange: "11月底 - 12/25", location: "金森紅磚倉庫前", description: "海上巨大聖誕樹，每日18:00點燈+煙火。", type: "點燈/煙火" },
        { name: "五稜星之夢", dateRange: "12月 - 2月底", location: "五稜郭公園護城河", description: "星形護城河點燈，從五稜郭塔俯瞰最佳。", type: "點燈" },
        { name: "函館湯之川 冬之燈", dateRange: "12月 - 2月底", location: "湯之川溫泉街", description: "溫泉街燈飾，裝飾足湯設施。", type: "點燈" },
        { name: "猴子泡溫泉", dateRange: "12/1 - 隔年5月上旬", location: "函館市熱帶植物園", description: "獼猴泡溫泉的療癒景象。", type: "季節景觀" },
        { name: "函館冬季煙火", dateRange: "2月每週六", location: "函館灣綠島", description: "冬季夜空煙火，可與夜景同框。", type: "煙火" },
        { name: "五稜郭櫻花祭", dateRange: "4月下旬 - 5月初", location: "五稜郭公園", description: "櫻花名所百選，夜櫻點燈。", type: "花季/點燈" },
        { name: "函館港祭", dateRange: "8/1 - 8/5 (主要活動)", location: "函館港周邊", description: "大型花火大會(8/1)、Wassyoi函館烏賊舞遊行。", type: "祭典/煙火" },
        { name: "國際民俗藝術節", dateRange: "8月上旬", location: "元町公園", description: "世界各國表演者齊聚。", type: "藝術節" },
        { name: "函館MOMI-G楓葉節", dateRange: "10月下旬 - 11月初", location: "香雪園(見晴公園)", description: "北海道唯一國家指定文化財庭園夜楓點燈。", type: "點燈/市集" },
        { name: "函館山纜車停運", dateRange: "約每年10月中旬 - 11月中旬 (2025: 10/9-11/9)", location: "函館山", description: "設備檢修，此期間無法搭乘纜車上山。", type: "維修公告"}
    ],

    // Detailed Highlights --- ADDED specialTags where applicable ---
    detailedHighlights: [
        {
            name: "函館朝市",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E6%9C%9D%E5%B8%82",
            ticketInfo: "免費入場",
            parkingInfo: "有專用付費停車場『函館朝市駐車場』(30分鐘內免費，之後每30分鐘¥100)。",
            expertRec: "函館的廚房，體驗在地活力的最佳起點。建議早晨7點至10點前往最為熱鬧，可品嚐最新鮮的海鮮丼。 清潔無魚腥味。",
            historyCulture: "戰後初期形成的市集，是北海道最具代表性的早市之一。以「釣活烏賊」和「海鮮丼」聞名。",
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">行動指令</span>：必體驗「元祖活いか釣堀」釣活烏賊，釣上後師傅會立刻做成生魚片。</li><li><span class="emphasis">美食焦點</span>：品嚐「きくよ食堂」的元祖海鮮丼，或「一花亭たびじ」的活烏賊跳舞丼飯(約1,890日圓)。</li><li><span class="emphasis">拍照點</span>：釣起烏賊的瞬間、色彩繽紛的海鮮丼飯特寫。</li></ul>',
            specialTags: [ { type: 'ig_hotspot', text: '📸 IG 熱門打卡點' } ] // Added Tag
        },
        {
            name: "Milkissimo (ミルキッシモ) 五稜郭タワー店",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=出雲大社5",
            parkingInfo: "位於五稜郭塔內，請使用周邊付費停車場 (如『函館市藝術廳停車場』，1小時¥200)。五稜郭塔店無專用停車場。",
            expertRec: "發源於函館的義式冰淇淋 (Gelato) 專賣店，使用北海道高品質牛奶製作，口味豐富多樣，是品嚐在地乳製品美味的好選擇。",
            historyCulture: '看板料理：<span class="emphasis">各式義式冰淇淋 (ジェラート)</span>。推薦口味：<span class="emphasis">牛奶 (ミルキッシモミルク)</span>、<span class="emphasis">哈密瓜 (メロン)</span>、<span class="emphasis">當地季節限定口味</span>。',
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">料理特色</span>：標榜低脂、低卡路里，口感綿密細緻。</li><li><span class="emphasis">IG/FB 人氣</span>：拍攝色彩繽紛的多球冰淇淋組合。</li><li><span class="emphasis">拍照點</span>：（若在五稜郭塔店）冰淇淋與窗外景色的合照、冰淇淋特寫。</li></ul>'
        },
        {
            name: "金森紅磚倉庫",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E9%87%91%E6%A3%AE%E7%B4%85%E7%A3%9A%E5%80%89%E5%BA%AB",
            ticketInfo: "免費入場",
            parkingInfo: "有合作的『TIMES24金森紅磚倉庫停車場』，1小時¥440，於設施內消費滿¥1,000可免費停車2小時。",
            expertRec: "函館灣區的地標，白天適合逛街購物，傍晚的夕陽與夜間點燈氛圍極佳。冬季(11月底-12/25)的「聖誕幻想」是重頭戲，有海上聖誕樹與煙火。",
            historyCulture: "1909年興建的國際貿易倉庫，現分為BAY函館、金森洋物館、函館歷史廣場、金森廳四大設施。",
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">購物重點</span>：尋找Snaffle\'s、Petite Merveille起司蛋糕、北海道土產。 可使用札幌藥妝優惠券。</li><li><span class="emphasis">拍照點</span>：倉庫群與運河倒影、傍晚點燈後的浪漫氛圍、冬季的海上聖誕樹。</li></ul>',
             specialTags: [
                 { type: 'pilgrimage', text: '🎥 聖地巡禮: Love Live! Sunshine!! 場景' },
                 { type: 'ig_hotspot', text: '📸 IG 熱門打卡點' },
                 { type: 'event', text: '🎄 冬季活動: 函館聖誕幻想 (11月底-12/25)' }
             ] // Added Tags
        },
        {
            name: "幸運小丑漢堡 (灣區本店)",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%B9%B8%E9%81%8B%E5%B0%8F%E4%B8%91%E6%BC%A2%E5%A0%A1%20%E7%81%A3%E5%8D%80%E6%9C%AC%E5%BA%97",
            parkingInfo: "本店無專用停車場，請使用金森紅磚倉庫的『TIMES24』收費停車場。",
            expertRec: "函館限定的靈魂美食，被譽為「全日本最好吃漢堡」。 每間分店裝潢主題不同，灣區本店人氣高。 可用函館特級套票(4點)。",
            historyCulture: '看板料理：<span class="emphasis">油淋炸雞漢堡 (年銷50萬個)</span>。 人氣搭配：<span class="emphasis">起司薯條</span>。超值套餐約968日圓。',
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">料理特色</span>：現點現做的炸雞腿裹上特製糖醋醬，風味獨特。</li><li><span class="emphasis">聖地巡禮</span>：這裡是《Love Live! Sunshine!!》的聖地之一。</li><li><span class="emphasis">拍照點</span>：店門口的華麗招牌、店內獨特的鞦韆座位。</li></ul>',
             specialTags: [
                 { type: 'pilgrimage', text: '🎥 聖地巡禮: Love Live! Sunshine!! 場景' },
                 { type: 'ig_hotspot', text: '📸 IG 熱門餐廳' }
             ] // Added Tags
        },
        {
            name: "幸運小丑漢堡 (峠下總本店)",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=ドーミーインPREMIUM五稜郭",
            parkingInfo: "設有大型免費專用停車場。",
            expertRec: "最具特色的幸運小丑分店，位於七飯町郊區，適合自駕前往大沼公園途中安排。以其巨大的紅色椅子和豐富的裝飾聞名。",
            historyCulture: '看板料理：<span class="emphasis">油淋炸雞漢堡</span>。分店特色：<span class="emphasis">超巨大紅色椅子</span>、<span class="emphasis">豐富的紀念品販售區</span>。',
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">料理特色</span>：與其他分店菜單大致相同，重點在於獨特的用餐環境。</li><li><span class="emphasis">行動指令</span>：務必和戶外的巨大紅色椅子合照。</li><li><span class="emphasis">拍照點</span>：巨大紅色椅子、店內充滿個性的裝潢、購買特色紀念品。</li></ul>',
             specialTags: [ { type: 'recommendation', text: '🚗 自駕推薦特色分店' } ] // Added Tag
        },
        {
            name: "長谷川商店 (灣區店)",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E9%95%B7%E8%B0%B7%E5%B7%9D%E5%95%86%E5%BA%97%20%E7%81%A3%E5%8D%80%E5%BA%97",
            parkingInfo: "店家門口有少量免費停車位 (約4台)。",
            expertRec: "函館最強B級美食之一，以現點現烤的『烤肉便當』聞名。可用函館特級套票(2點)。",
            historyCulture: '看板料理：<span class="emphasis">烤肉便當 (やきとり弁当)</span>。雖然叫烤雞(Yakitori)，但使用的是豬五花肉，是函館的飲食特色。',
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">點餐技巧</span>：選擇便當大小、肉串數量，以及口味（推薦鹽味或獨門醬汁）。</li><li><span class="emphasis">IG/FB 人氣</span>：拍攝師傅在吧台後方現烤肉串的畫面。</li><li><span class="emphasis">拍照點</span>：打開便當盒，拍攝鋪滿肉串的瞬間。</li></ul>'
        },
        {
            name: "函館山纜車 & 夜景",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E5%B1%B1%E7%BA%9C%E8%BB%8A%20%E5%B1%B1%E9%BA%93%E7%AB%99",
            ticketInfo: "觀景台免費。纜車來回票: 大人 1,800日圓。可用函館特級套票(7點)。",
            parkingInfo: "山麓站設有免費停車場 (約85輛)，但車位極少易滿。建議搭乘市電至「十字街」站後步行10分鐘。",
            expertRec: "米其林三星景點，世界三大夜景之一。 建議在日落前30分鐘抵達山頂，捕捉黃昏、魔幻時刻與夜景。注意：每年秋季約有一個月停運檢修(2025年為10/9-11/9)。",
            historyCulture: "海拔334公尺，俯瞰被津輕海峽和函館港包夾的獨特「雙C」型海岸線。",
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">行動指令</span>：務必提早上山卡位！最佳觀景點在展望台二樓戶外區的最右側。</li><li><span class="emphasis">裝備建議</span>：山上風大，即使是夏天也務必攜帶防風外套。</li><li><span class="emphasis">拍照點</span>：捕捉城市燈光剛點亮、天空尚有餘暉的「魔幻時刻」。</li></ul>',
             specialTags: [ { type: 'ig_hotspot', text: '📸 IG 熱門打卡點' } ] // Added Tag
        },
        {
            name: "函太郎 (宇賀浦總店)",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E5%A4%AA%E9%83%8E%20%E5%AE%87%E8%B3%80%E6%B5%A6%E7%B8%BD%E5%BA%97",
            parkingInfo: "設有大型免費專用停車場 (約60台)。",
            expertRec: "函館人氣迴轉壽司，品質媲美高級壽司店。宇賀浦總店擁有絕佳海景，可眺望津輕海峽。可用函館特級套票折抵。",
            historyCulture: '看板料理：<span class="emphasis">當日現撈地魚</span>、<span class="emphasis">烏賊</span>、<span class="emphasis">北寄貝</span>。',
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">點餐技巧</span>：迴轉帶上的壽司以保鮮為主，強烈建議直接拿點菜單向師傅點餐，才能吃到現握的美味。</li><li><span class="emphasis">IG/FB 人氣</span>：拍攝窗外的海景與壽司的合照。</li><li><span class="emphasis">拍照點</span>：特寫當日限定的豪華壽司。</li></ul>',
             specialTags: [ { type: 'ig_hotspot', text: '📸 IG 熱門餐廳' } ] // Added Tag
        },
        {
            name: "元町教會群 & 八幡坂",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%20%E5%85%83%E7%94%BA%20%E5%85%AB%E5%B9%A1%E5%9D%82",
            ticketInfo: "戶外參觀免費。舊函館區公會堂: 300日圓(可用特級套票1點)。舊英國領事館可用特級套票(1點)。",
            parkingInfo: "無專用停車場，請使用『函館市元町觀光停車場』(1小時內¥200，之後每30分鐘¥100)。",
            expertRec: "函館異國風情的代表區域。石板路、教會與洋房，充滿浪漫氛圍，適合花半天時間悠閒散步。",
            historyCulture: "函館作為日本最早開放的港口之一，遺留大量西洋建築。 函館正教會鐘聲入選「日本音風景100選」。",
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">聖地巡禮</span>：<span class="emphasis">八幡坂</span>被票選為「觀光最想造訪坡道第一名」，也是多部影視作品取景地。</li><li><span class="emphasis">參觀重點</span>：舊函館區公會堂（可體驗歐洲禮服）、函館正教會、元町天主堂。</li><li><span class="emphasis">拍照點</span>：從八幡坂頂端，由上往下拍攝直通港口的道路。</li></ul>',
             specialTags: [
                 { type: 'pilgrimage', text: '🎥 聖地巡禮: Love Live! Sunshine!! / First Love 場景' },
                 { type: 'ig_hotspot', text: '📸 IG 熱門打卡點 (八幡坂/正教會)' }
             ] // Added Tags
        },
        {
            name: "船魂神社",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E8%88%B9%E9%AD%82%E7%A5%9E%E7%A4%BE",
            ticketInfo: "免費參拜",
            parkingInfo: "無專用停車場，請使用『函館市元町觀光停車場』後步行前往。",
            expertRec: "北海道最古老神社之一，位於元町散步路線的起點。是祈求航海安全、事業順利的能量景點。",
            historyCulture: "主祀潮汐之神與大海之神，據傳源義經也曾在此受庇佑而平安登陸。",
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">御守/御朱印</span>：必買獨特的『舵守』，適合祈求交通安全或人生方向。</li><li><span class="emphasis">拍照點</span>：神社入口的石梯、古樸的拜殿。</li></ul>',
             specialTags: [ { type: 'recommendation', text: '🎯 必買推薦: 舵守' } ] // Added Tag
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
            ticketInfo: "公園免費。五稜郭塔展望台: 大人 900日圓 (可用特級套票4點)。 箱館奉行所: 500日圓 (可用特級套票2點)。",
            parkingInfo: "塔樓無專用停車場，請使用周邊付費停車場 (如『函館市藝術廳停車場』，1小時¥200)。",
            expertRec: "函館地標，必登塔俯瞰完整星形要塞。 春櫻、秋楓、冬燈(五稜星之夢, 12月-2月)各有風情。",
            historyCulture: "日本百名城，江戶末期西式堡壘，戊辰戰爭最終戰場。 土方歲三在此戰死。",
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">聖地巡禮</span>：這裡是《黃金神威》粉絲必訪的聖地。</li><li><span class="emphasis">歷史探索</span>：參觀「箱館奉行所」了解幕末歷史。</li><li><span class="emphasis">拍照點</span>：從塔頂俯瞰完整的星型要塞、櫻花季時的粉色星型、冬季點燈時的星芒。</li></ul>',
             specialTags: [
                 { type: 'pilgrimage', text: '🎥 聖地巡禮: 黃金神威 場景' },
                 { type: 'ig_hotspot', text: '📸 IG 熱門打卡點' },
                 { type: 'event', text: '✨ 冬季活動: 五稜星之夢 (12月-2月)' }
             ] // Added Tags
        },
        {
            name: "函館麵厨房 味彩 (本店)",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E9%BA%B5%E5%BB%9A%E6%88%BF%20%E5%91%B3%E5%BD%A9%20%E6%9C%AC%E5%BA%97",
            parkingInfo: "店家設有專用停車場 (約7台)，若客滿請使用五稜郭塔周邊的收費停車場。",
            expertRec: "函館鹽味拉麵的代表，Tabelog 3.64分名店。 本店位於五稜郭塔對面。可用函館特級套票(3點)。",
            historyCulture: '看板料理：<span class="emphasis">味彩鹽拉麵 (味彩塩拉麺, 750日圓)</span>。 湯頭以雞骨、豬骨、海帶熬製，清爽不油膩。',
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">料理特色</span>：湯頭透明澄澈，是函館鹽味拉麵的王道代表，北海道三大拉麵之一。</li><li><span class="emphasis">IG/FB 人氣</span>：拍攝拉麵清澈的湯頭與麵條的特寫。</li><li><span class="emphasis">拍照點</span>：從店內窗邊座位拍攝五稜郭塔。</li></ul>',
             specialTags: [ { type: 'ig_hotspot', text: '📸 IG 熱門餐廳' } ] // Added Tag
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
            expertRec: "名列「新日本三景」的國家公園，函館近郊最佳自然景點。 湖光山色映襯著駒岳火山，景緻壯麗。秋季為紅葉名所。",
            historyCulture: "由駒岳火山噴發形成的湖泊，湖中有126個小島，由18座橋梁連接。",
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">行動指令</span>：建議租借<span class="emphasis">腳踏車</span>環湖一圈（約14公里，需1.5小時），或搭乘<span class="emphasis">遊覽船</span>穿梭於島嶼間。</li><li><span class="emphasis">美食推薦</span>：必吃「沼之家」的醬油與芝麻雙色糰子。</li><li><span class="emphasis">拍照點</span>：湖畔木棧道、駒岳火山與湖面的倒影。</li></ul>'
        },
        {
            name: "炭火燒肉 泉味亭",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E7%82%AD%E7%81%AB%E7%87%92%E8%82%89%20%E6%B3%89%E5%91%B3%E4%BA%AD%20%E5%87%BD%E9%A4%A8",
            parkingInfo: "店家設有專屬停車場。",
            expertRec: "位於五稜郭區域的熟成和牛專門店，在地人推薦的高品質燒肉店。 價格相對優惠。",
            historyCulture: '看板料理：<span class="emphasis">熟成和牛3部位拼盤</span>。 特色：<span class="emphasis">石鍋拌飯</span> (多種口味)。',
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">料理特色</span>：提供高品質的熟成肉品，油花分布均勻，入口即化。</li><li><span class="emphasis">IG/FB 人氣</span>：拍攝和牛美麗的油花紋路。</li><li><span class="emphasis">拍照點</span>：爐火上燒烤和牛的特寫。</li></ul>',
             specialTags: [ { type: 'ig_hotspot', text: '📸 IG 熱門餐廳' } ] // Added Tag
        },
        {
            name: "湯倉神社",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E6%B9%AF%E5%80%89%E7%A5%9E%E7%A4%BE",
            ticketInfo: "免費參拜",
            parkingInfo: "設有大型免費專用停車場 (約80台)。",
            expertRec: "湯之川溫泉的守護神與發源地。 神社雖小但充滿特色，是溫泉區必訪的能量景點。",
            historyCulture: '1653年重建。 主祀溫泉之神與醫藥之神，神社內的「神兔」據說撫摸後可以治癒疾病。',
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">御守/御朱印</span>：必求『御神緣御守』（可選『健』、『愛』、『美』等漢字）與『大丈夫御守』。</li><li><span class="emphasis">趣味體驗</span>：挑戰函館限定的<span class="emphasis">『釣烏賊籤詩』(いかみくじ)</span>。</li><li><span class="emphasis">拍照點</span>：釣起烏賊籤詩的瞬間、可愛的神兔雕像。</li></ul>',
             specialTags: [ { type: 'recommendation', text: '🎯 必買推薦: 御神緣御守 / 釣烏賊籤詩' } ] // Added Tag
        },
        {
            name: "函館市熱帶植物園",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E5%B8%82%E7%86%B1%E5%B9%B6%E6%A4%8D%E7%89%A9%E5%9C%92",
            ticketInfo: "大人 300日圓。",
            parkingInfo: "設有免費停車場。",
            expertRec: "冬季限定（12月1日至5月上旬）的「猴子泡湯」是最大亮點。 非常療癒，還可買飼料餵食。",
            historyCulture: "除了猴子山，園區內也有大型溫室與免費足湯（與猴子同泉源）。",
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">參觀重點</span>：冬季限定的猴子泡湯 (9:30開園)。</li><li><span class="emphasis">拍照點</span>：拍攝猴子泡湯時的各種逗趣表情。</li></ul>',
             specialTags: [
                 { type: 'ig_hotspot', text: '📸 IG 熱門打卡點 (冬季)' },
                 { type: 'event', text: '🐒 冬季活動: 猴子泡湯 (12/1-5月上旬)' }
             ] // Added Tags
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
            expertRec: "日本第一座女子修道院，建築風格莊嚴美麗。 院內販售的修女手作甜點與冰淇淋非常有名。",
            historyCulture: '明治31年（1898年）由法國派遣的八位修女所創立，至今仍有修女在此過著祈禱與勞動的生活。',
            focusPoints: '<ul><li class="list-disc list-inside space-y-1"><span class="emphasis">必買伴手禮</span>：修女手作的『法式奶油蛋糕捲』(Madalena) 與白巧克力。</li><li><span class="emphasis">美食推薦</span>：務必品嚐停車場旁「市民之森」販賣的<span class="emphasis">『牛奶霜淇淋』</span>，號稱函館第一。</li><li><span class="emphasis">拍照點</span>：修道院本館的紅磚建築、聖米迦勒像、聖母瑪利亞像。</li></ul>',
             specialTags: [ { type: 'recommendation', text: '🎯 必買推薦: Madalena 蛋糕捲 / 牛奶霜淇淋' } ] // Added Tag
        }
    ],

    // Data for Accommodation section
    accommodation: [
        {
            day: "1-6",
            city: "函館 (灣區)",
            name: "ラビスタ函館ベイ (La Vista Hakodate Bay)",
            url: "https://www.google.com/maps/search/?api=1&query=La%20Vista%20%E5%87%BD%E9%A4%A8%E7%81%A3",
            parking: "有 (飯店專用停車場，¥1,000/晚，採先到先停制)。",
            convenienceStores: [
                { brand: "FamilyMart", name: "ファミリーマート ラビスタ函館ベイ店 (位於飯店1樓)" } //
            ]
        }
    ],

    // --- NEW: Recommended Accommodations (for reference) ---
    recommendedAccommodations: [
        { name: "La Vista函館灣", area: "灣區", features: "早餐第一名、頂樓海景溫泉、復古風。", priceEstimate: "¥¥¥", rating: "高", url: "https://www.google.com/maps/search/?api=1&query=La%20Vista%20%E5%87%BD%E9%A4%A8%E7%81%A3" },
        { name: "函館JR旅館", area: "站前", features: "直通車站、朝市對面、山景房、大浴場。", priceEstimate: "¥¥", rating: "高", url: "https://www.google.com/maps/search/?api=1&query=JR%20Inn%20%E5%87%BD%E9%A4%A8" },
        { name: "東急STAY函館早市 燈之湯", area: "站前", features: "2022開幕、近朝市、天然溫泉、時尚。", priceEstimate: "¥¥¥", rating: "高", url: "https://www.google.com/maps/search/?api=1&query=石見銀山9" },
        { name: "平成館潮騷亭", area: "湯之川", features: "海景觀景浴場、露天浴池客房、自助餐豐富。", priceEstimate: "¥¥¥", rating: "中高", url: "https://www.google.com/maps/search/?api=1&query=%E6%B9%AF%E4%B9%8B%E5%B7%9D%E6%BA%AB%E6%B3%89%20%E5%B9%B3%E6%88%90%E9%A4%A8%E6%BD%AE%E9%A8%B7%E4%BA%AD" },
        { name: "湯之川海與燈休伊特度假村", area: "湯之川", features: "頂樓露天風呂、海景、空中酒吧免費飲品。", priceEstimate: "¥¥", rating: "8.8/10", url: "https://www.google.com/maps/search/?api=1&query=すし丸+ekie広島店60" },
        { name: "割烹旅館若松", area: "湯之川", features: "米其林一星、百年老字號、全室海景、露天浴池。", priceEstimate: "¥¥¥¥", rating: "極高", url: "https://www.google.com/maps/search/?api=1&query=すし丸+ekie広島店61" },
        { name: "東橫INN 函館站前朝市", area: "站前", features: "高CP值、近朝市。", priceEstimate: "¥", rating: "中", url: "https://www.google.com/maps/search/?api=1&query=すし丸+ekie広島店62" }
        // Add more from guide if needed
    ],

    // --- UPDATED: Transport Passes ---
    transportPasses: {
         specialTicket: {
             name: "函館特級套票 (はこだてスペシャルチケット)",
             price: "¥3,500",
             validity: "2025/4/1 - 2025/11/24 (每年更新，需確認)",
             includes: "交通1日券(市電或巴士擇一) + 11點設施點數",
             exchangeLocation: "JR函館站觀光案內所",
             purchase: "KKDAY, KLOOK, e路東瀛, 現場",
             valueAnalysis: "總價值遠超售價，含交通券(¥600-1000) + 11點(¥2750)，極划算。",
             pointUsage: [
                 { facility: "函館山纜車 (來回)", points: 7 },
                 { facility: "五稜郭塔", points: 4 },
                 { facility: "箱館奉行所", points: 2 },
                 { facility: "舊函館區公會堂", points: 1 },
                 { facility: "舊英國領事館", points: 1 },
                 { facility: "青函渡輪記念館摩周丸", points: 1 },
                 { facility: "北方民族資料館", points: 1 },
                 { facility: "文學館", points: 2 },
                 { facility: "繩文文化交流中心", points: 1 },
                 { facility: "味彩拉麵 (本店/紅店)", points: 3 },
                 { facility: "幸運小丑漢堡", points: 4 },
                 { facility: "長谷川商店", points: 2 }
                 // List more point usage from guide
             ],
             discountFacilities: [
                 "五島軒", "Snaffle's (金森店)", "函太郎壽司", "大門橫丁", "千秋庵總本家", "函館啤酒館", "函館機場商店/餐廳"
                 // List more discount usage from guide
             ]
         },
         otherPasses: [
             { name: "函館市電一日券", price: "¥600", description: "當日無限次搭乘函館市電。" },
             { name: "函館市電/巴士共通一日券", price: "¥1,000", description: "當日無限次搭乘函館市電與指定範圍內函館巴士。" },
             { name: "函館巴士一日券", price: "¥800", description: "當日無限次搭乘指定範圍內函館巴士。" }
             // Mention JR Pass if relevant for wider Hokkaido travel
         ]
    },
    // Remove old transportPass structure

    transportPassAnalysis: null,

    // Data for Transport Summary table
    transportSummary: [
        { day: 1, route: "機場→函館站→灣區", transport: "機場接駁巴士+市電/計程車/步行", time: "下午", cost: "約 ¥700+" },
        { day: 2, route: "灣區↔朝市/元町", transport: "步行/函館市電", time: "全日", cost: "市電一日券 ¥600 / 步行" }, // Adjusted ticket suggestion
        { day: 3, route: "灣區↔元町", transport: "步行/函館市電", time: "全日", cost: "市電一日券 ¥600 / 步行" }, // Adjusted ticket suggestion
        { day: 4, route: "灣區↔五稜郭/函館站", transport: "函館市電", time: "全日", cost: "特級套票交通券 / 市電一日券 ¥600" }, // Recommend ticket use here
        { day: 5, route: "灣區↔函館站↔大沼公園", transport: "函館市電+JR / 租車", time: "全日", cost: "市電+JR 約 ¥1,600+ / 租車" },
        { day: 6, route: "灣區↔湯之川/修道院", transport: "函館市電+巴士 / 租車", time: "全日", cost: "市電巴士共通一日券 ¥1000 / 租車" },
        { day: 7, route: "灣區→函館站→機場", transport: "市電/計程車+機場接駁巴士", time: "上午", cost: "約 ¥700+" }
    ],

    // Data for Transport Tactics list
    transportTactics: [
        '<span class="emphasis">函館特級套票最大化:</span> 抵達後於JR函館站觀光案內所兌換。 將交通一日券用在市電/巴士搭乘最頻繁的一天(如Day 4或Day 6)。點數優先用於高價項目如函館山纜車(7點)和五稜郭塔(4點)。',
        '<span class="emphasis">租車策略:</span> Day 5(大沼公園/峠下總本店) & Day 6(湯之川/修道院)最適合租車。市區內(Day 1-4)建議依靠市電/步行。La Vista有付費停車場但車位有限。',
        '<span class="emphasis">IC卡準備:</span> 準備 SUICA/ICOCA 支付特級套票不含的交通，或單次市電/巴士費用。',
        '<span class="emphasis">函館山交通:</span> 從La Vista步行至纜車站約15-20分鐘。或搭市電至「十字街」站。纜車停車場極易客滿。 注意秋季停運時間。'
    ],

    // Data for Preparation section
    prepList: {
        description: "這份清單已根據函館7天6夜、住宿La Vista函館灣的行程，並參考2025年指南更新。請在出發前逐一確認。",
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
                    '<span class="emphasis">函館特級套票</span>: 建議事先於 KKDAY/KLOOK 等平台購買兌換券，抵達後在JR函館站觀光案內所兌換實體票。',
                    '<span class="emphasis">IC卡 (SUICA/ICOCA)</span>: 準備或儲值。',
                    '<span class="emphasis">[關鍵任務] 函館山纜車</span>: 確認運行狀況 (避開秋季檢修期)。 天氣好務必提早排隊。規劃兩天機會觀賞。'
                ]
            },
            {
                category: '行李策略 (單一飯店版)',
                items: [
                    '<span class="emphasis">無需轉送</span>：本次行程固定住宿，無需使用行李轉送服務。',
                    '<span class="emphasis">輕便日用包</span>：準備一個適合每日行程攜帶隨身物品的背包或提袋。',
                ]
            },
            {
                category: '衣物與裝備',
                items: [
                    '<span class="emphasis">舒適的鞋子</span>: 行程包含大量步行（元町、大沼公園），務必穿著防滑好走的鞋子。',
                    '<span class="emphasis">洋蔥式穿搭</span>: 函館日夜溫差大，海風強勁。即使是夏天，函館山頂也需要防風外套。',
                    '<span class="emphasis">防滑保暖 (冬季)</span>: 若為12月來訪，務必穿著雪靴/防水防滑鞋，備妥帽子、圍巾、手套。考慮加裝簡易冰爪。'
                ]
            },
             {
                 category: '活動與預約確認',
                 items: [
                     '<span class="emphasis">季節活動時間</span>: 出發前再次確認聖誕幻想、五稜星之夢等活動的確切點燈時間與細節。',
                     '<span class="emphasis">餐廳預約</span>: 熱門餐廳如 Colz、泉味亭 建議考慮預約。La Vista早餐非常熱門，建議提早去排隊。'
                 ]
             },
        ]
    },

    prepMemos: [
        {
            title: "★ 函館旅行哲學：坂道與夜景",
            content: "函館的魅力在於「慢」。慢慢地走過元町的每一條坂道（斜坡），感受異國風情。保留充足的時間等待函館山的百萬夜景，從黃昏到入夜的魔幻時刻是精華所在。天氣不好就啟動備案，享受其他室內行程或冬季燈飾。"
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
            title: "便利商店攻略",
            content: "別錯過北海道限定的便利商店 Seicomart，試試他們的 Hot Chef 熱食便當和自有品牌乳製品。 LAWSON 也有許多北海道限定商品，如起司口味炸雞君。"
        }
    ],


    // --- NEW: Local Tips ---
    localTips: {
        convenienceStores: [
            { brand: "LAWSON", highlights: ["北海道限定炸雞君(起司味)", "Uchi Cafe'瑞士捲(每月22號草莓)", "限定飲料/泡麵", "常溫水", "FANCL保養品", "低卡餅乾"] }, //
            { brand: "7-ELEVEN", highlights: ["迷你冷拉麵", "北海道限定零食"] }, //
            { brand: "Seicomart", highlights: ["北海道限定便利店", "自有品牌Hot Chef便當/麵包/乳製品", "哈密瓜冰淇淋", "大福"] } //
        ],
        igHotspots: { // From guide
            locations: ["HAKODATE地名立牌", "八幡坂", "函館山夜景", "五稜郭塔", "金森紅磚倉庫", "舊函館區公會堂", "函館正教會", "元町建築群", "函館朝市釣烏賊", "猴子泡溫泉(冬季)"],
            accommodations: ["La Vista函館灣", "海峽之風", "平成館潮騷亭", "海與燈休伊特", "函館國際", "世紀濱海", "OMO5函館", "啄木亭", "Imagine Hotel", "函館JR Inn"],
            restaurants: ["幸運小丑漢堡", "味彩拉麵", "根室花丸", "五島軒", "函館朝市海鮮丼", "泉味亭", "Snaffle's", "函館啤酒館", "函太郎", "龍鳳拉麵"]
        },
        bloggerRecs: [ // From guide
            { blogger: "林氏璧", recommendations: "函館國際飯店, 函館朝市, 函館山夜景, 元町建築群" },
            { blogger: "工頭堅", recommendations: "函館異國風情散步路線" },
            { blogger: "哲青", recommendations: "函館歷史文化深度遊" }
        ],
        practicalInfo: { // From guide
            network: ["日本4G上網SIM卡", "日本4G虛擬eSIM卡"],
            coupons: ["唐吉軻德", "BIC CAMERA", "札幌藥妝", "日本百貨藥妝"],
            emergency: ["函館市觀光資訊官方網站: https://www.hakodate.travel/cht/", "函館車站觀光案內所"]
        }
    },

    // Daily Data --- ADDED specialTags where applicable ---
    dailyData: {
        day1: { // Dec 1st (Fri)
            title: '序章・北國之港・灣區初探', date: 'Day 1 (12/01 週五)', location: '函館機場 → 灣區', timeAnalysis: { travel: 1.5, activity: 4.0 },
            timeline: [
                { time: '14:00', type: '✈️', event: '抵達 函館機場 (HKD)' },
                { time: '14:30-15:00', type: '🚌', event: '機場交通: 搭乘機場接駁巴士 →「JR函館站」', cost: '約 ¥700'},
                { time: '15:00-15:30', type: '🚕', event: '從JR函館站搭乘計程車或市電(函館駅前→魚市場通)前往飯店'},
                { time: '15:30-16:00', type: '🏨', event: '飯店Check-in: <a href="https://www.google.com/maps/search/?api=1&query=La%20Vista%20%E5%87%BD%E9%A4%A8%E7%81%A3" target="_blank" class="text-blue-600 hover:underline">ラビスタ函館ベイ</a>'},
                { time: '16:00', type: '☕', event: '午餐: (視班機時間決定)'},
                { time: '16:00-17:30', type: '🚶', event: '飯店周邊熟悉 & <a href="https://www.google.com/maps/search/?api=1&query=%E9%87%91%E6%A3%AE%E7%B4%85%E7%A3%9A%E5%80%89%E5%BA%AB" target="_blank" class="text-blue-600 hover:underline">金森紅磚倉庫</a> 初步探索', description: '飯店就在倉庫旁，先熟悉環境。', parkingInfo: "『TIMES24』停車場。", specialTags: [ { type: 'ig_hotspot', text: '📸 IG 熱門打卡點' } ] },
                { time: '17:30-18:00', type: '☕', event: '下午茶: 飯店內或附近咖啡廳 (飯店提供手沖咖啡設備)' },
                { time: '18:00', type: '🎄', event: '冬季限定: 觀賞 <a href="https://www.google.com/maps/search/?api=1&query=%E9%87%91%E6%A3%AE%E7%B4%85%E7%A3%9A%E5%80%89%E5%BA%AB" target="_blank" class="text-blue-600 hover:underline">金森倉庫</a> 聖誕幻想點燈/煙火 (18:00開始)', stay: '約 1 小時', specialTags: [ { type: 'event', text: '🎄 冬季活動: 函館聖誕幻想' } ] },
                { time: '19:30', type: '🍽️', event: '晚餐: <a href="https://www.google.com/maps/search/?api=1&query=%E5%B9%B8%E9%81%8B%E5%B0%8F%E4%B8%91%E6%BC%A2%E5%A0%A1%20%E7%81%A3%E5%8D%80%E6%9C%AC%E5%BA%97" target="_blank" class="text-blue-600 hover:underline">幸運小丑漢堡 (灣區本店)</a>', description: '體驗函館限定漢堡。(可用特級套票4點)', specialTags: [ { type: 'pilgrimage', text: '🎥 聖地巡禮: Love Live! Sunshine!! 場景' }, { type: 'ig_hotspot', text: '📸 IG 熱門餐廳' } ] },
                { time: '21:00', type: '🏨', event: '住宿: <a href="https://www.google.com/maps/search/?api=1&query=La%20Vista%20%E5%87%BD%E9%A4%A8%E7%81%A3" target="_blank" class="text-blue-600 hover:underline">ラビスタ函館ベイ</a>', description: '享受飯店頂樓天然溫泉，遠眺函館山。 泡湯後有免費冰棒。'}
            ],
             intel: {
                 la_vista_tip: { title: 'La Vista 住宿TIPS', text: '飯店以「全日本第一早餐」聞名，務必體驗(需另付費或含於方案)。 頂樓溫泉視野絕佳，男女湯會交換。泡湯後有免費冰棒/飲品。' },
                  special_ticket_plan: { title: '特級套票規劃', text: '今日可先熟悉環境，明日開始使用特級套票的交通券與點數。可在JR函館站觀光案內所購買或兌換。'}
             },
             insights: {
                 location_strategy: { title: '<span class="emphasis">住宿策略：灣區核心</span>', text: '入住La Vista，位於灣區核心，金森倉庫、多數B級美食皆在步行範圍內。前往元町、函館山也相對方便。' },
                 winter_lights: { title: '冬季亮點', text: '今日(12/1)起，金森倉庫「聖誕幻想」、五稜郭「五稜星之夢」、湯之川「冬之燈」等冬季點燈活動陸續開始。'}
             }
        },
        day2: { // Dec 2nd (Sat)
            title: '朝市活力・百萬夜景 (含雨備)', date: 'Day 2 (12/02 週六)', location: '灣區 ↔ 朝市・元町', timeAnalysis: { travel: 1.0, activity: 8.0 },
            options: {
                optionA: {
                    label: '選項A: 晴天衝夜景 & 聖誕',
                    timeline: [
                         { time: '08:00', type: '☕', event: '早餐: <a href="https://www.google.com/maps/search/?api=1&query=La%20Vista%20%E5%87%BD%E9%A4%A8%E7%81%A3" target="_blank" class="text-blue-600 hover:underline">La Vista 函館灣</a> 傳說中的第一名早餐'},
                         { time: '10:00-12:00', type: '🚶', event: '步行前往 <a href="https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E6%9C%9D%E5%B8%82" target="_blank" class="text-blue-600 hover:underline">函館朝市</a> 體驗', description: '釣烏賊(現釣現吃)、逛乾貨。', stay: '2 小時', specialTags: [ { type: 'ig_hotspot', text: '📸 IG 熱門打卡點' } ] },
                         { time: '12:00-14:00', type: '🚶', event: '灣區探索: <a href="https://www.google.com/maps/search/?api=1&query=%E9%87%91%E6%A3%AE%E7%B4%85%E7%A3%9A%E5%80%89%E5%BA%AB" target="_blank" class="text-blue-600 hover:underline">金森紅磚倉庫</a> & <a href="https://www.google.com/maps/search/?api=1&query=羽根屋+本店3" target="_blank" class="text-blue-600 hover:underline">HAKODATE地名立牌</a>', description: '逛街購物，尋找IG打卡點。', ticketInfo: "免費入場", stay: '2 小時', parkingInfo: "『TIMES24』停車場。", specialTags: [ { type: 'pilgrimage', text: '🎥 聖地巡禮: Love Live! Sunshine!! 場景' }, { type: 'ig_hotspot', text: '📸 IG 熱門打卡點' } ] },
                         { time: '14:00-15:00', type: '🍽️', event: '午餐: <a href="https://www.google.com/maps/search/?api=1&query=%E5%B9%B8%E9%81%8B%E5%B0%8F%E4%B8%91%E6%BC%A2%E5%A0%A1%20%E7%81%A3%E5%8D%80%E6%9C%AC%E5%BA%97" target="_blank" class="text-blue-600 hover:underline">幸運小丑漢堡 (灣區本店)</a>', description: '品嚐油淋炸雞漢堡。 (可用特級套票4點)<span class="emphasis">【美食任務：速食店已達成】</span><span class="emphasis">【美食任務：B級美食已達成】</span>', parkingInfo: "使用金森倉庫停車場。", specialTags: [ { type: 'pilgrimage', text: '🎥 聖地巡禮: Love Live! Sunshine!! 場景' }, { type: 'ig_hotspot', text: '📸 IG 熱門餐廳' } ] },
                         { time: '15:00-16:00', type: '🚶', event: '點心: <a href="https://www.google.com/maps/search/?api=1&query=%E9%95%B7%E8%B0%B7%E5%B7%9D%E5%95%86%E5%BA%97%20%E7%81%A3%E5%8D%80%E5%BA%97" target="_blank" class="text-blue-600 hover:underline">長谷川商店 (灣區店)</a>', description: '嚐嚐看烤肉便當。(可用特級套票2點)', parkingInfo: "店家門口有少量免費停車位 (約4台)。" },
                         { time: '16:30', type: '🚠', event: '關鍵任務: 步行或搭市電至「十字街」前往 <a href="https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E5%B1%B1%E7%BA%9C%E8%BB%8A%20%E5%B1%B1%E9%BA%93%E7%AB%99" target="_blank" class="text-blue-600 hover:underline">函館山纜車</a>', description: '搭乘纜車上山。(使用特級套票7點)', ticketInfo: "來回 ¥1,800", parkingInfo: "山麓站免費停車場 (車位極少)。" },
                         { time: '17:00-18:00', type: '🌃', event: '絕景鑑賞: <a href="https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E5%B1%B1%E7%BA%9C%E8%BB%8A%20%E5%B1%B1%E9%BA%93%E7%AB%99" target="_blank" class="text-blue-600 hover:underline">函館山夜景</a>', description: '欣賞百萬夜景。', awardHighlight: "世界三大夜景 (米其林三星)", ticketInfo: "觀景台免費", stay: '約 1 小時', specialTags: [ { type: 'ig_hotspot', text: '📸 IG 熱門打卡點' } ] },
                         { time: '18:15', type: '🎄', event: '下山後步行返回 <a href="https://www.google.com/maps/search/?api=1&query=%E9%87%91%E6%A3%AE%E7%B4%85%E7%A3%9A%E5%80%89%E5%BA%AB" target="_blank" class="text-blue-600 hover:underline">金森倉庫</a> 觀賞聖誕幻想點燈/煙火 (18:00開始)', stay: '約 1 小時', specialTags: [ { type: 'event', text: '🎄 冬季活動: 函館聖誕幻想' } ] },
                         { time: '19:30', type: '🍽️', event: '晚餐: <a href="https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E5%A4%AA%E9%83%8E%20%E5%AE%87%E8%B3%80%E6%B5%A6%E7%B8%BD%E5%BA%97" target="_blank" class="text-blue-600 hover:underline">函太郎 (宇賀浦總店)</a>', description: '搭計程車或市電轉乘。(可用特級套票折抵)<span class="emphasis">【美食任務：迴轉壽司已達成】</span>', parkingInfo: "設有大型免費專用停車場 (約60台)。", specialTags: [ { type: 'ig_hotspot', text: '📸 IG 熱門餐廳' } ] },
                         { time: '21:30', type: '🏨', event: '住宿: <a href="https://www.google.com/maps/search/?api=1&query=La%20Vista%20%E5%87%BD%E9%A4%A8%E7%81%A3" target="_blank" class="text-blue-600 hover:underline">ラビスタ函館ベイ</a>'}
                    ]
                },
                optionB: {
                    label: '選項B: 雨天備案・灣區室內 & 聖誕',
                    timeline: [
                         { time: '08:00', type: '☕', event: '早餐: <a href="https://www.google.com/maps/search/?api=1&query=La%20Vista%20%E5%87%BD%E9%A4%A8%E7%81%A3" target="_blank" class="text-blue-600 hover:underline">La Vista 函館灣</a> 傳說中的第一名早餐' },
                         { time: '10:00-12:00', type: '🚶', event: '步行前往 <a href="https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E6%9C%9D%E5%B8%82" target="_blank" class="text-blue-600 hover:underline">函館朝市</a> 體驗', description: '釣烏賊、品嚐海鮮。', stay: '2 小時', specialTags: [ { type: 'ig_hotspot', text: '📸 IG 熱門打卡點' } ] },
                         { time: '12:00-16:00', type: '🚶', event: '灣區深度探索: <a href="https://www.google.com/maps/search/?api=1&query=%E9%87%91%E6%A3%AE%E7%B4%85%E7%A3%9A%E5%80%89%E5%BA%AB" target="_blank" class="text-blue-600 hover:underline">金森紅磚倉庫</a> & <a href="https://www.google.com/maps/search/?api=1&query=羽根屋+本店1" target="_blank" class="text-blue-600 hover:underline">函館明治館</a>', description: '增加室內購物與參觀時間 (明治館有音樂盒、玻璃工藝)。', ticketInfo: "倉庫/明治館免費入場", stay: '約 4 小時', parkingInfo: "『TIMES24』停車場。", specialTags: [ { type: 'pilgrimage', text: '🎥 聖地巡禮: Love Live! Sunshine!! 場景' }, { type: 'ig_hotspot', text: '📸 IG 熱門打卡點' } ] },
                         { time: '16:00-17:00', type: '🍽️', event: '午餐/下午茶: <a href="https://www.google.com/maps/search/?api=1&query=%E5%B9%B8%E9%81%8B%E5%B0%8F%E4%B8%91%E6%BC%A2%E5%A0%A1%20%E7%81%A3%E5%8D%80%E6%9C%AC%E5%BA%97" target="_blank" class="text-blue-600 hover:underline">幸運小丑漢堡 (灣區本店)</a>', description: '品嚐油淋炸雞漢堡。 (可用特級套票4點)<span class="emphasis">【美食任務：速食店已達成】</span><span class="emphasis">【美食任務：B級美食已達成】</span>', parkingInfo: "使用金森倉庫停車場。", specialTags: [ { type: 'pilgrimage', text: '🎥 聖地巡禮: Love Live! Sunshine!! 場景' }, { type: 'ig_hotspot', text: '📸 IG 熱門餐廳' } ] },
                         { time: '17:00-18:00', type: '☕', event: '下午茶: 灣區咖啡廳 (e.g. <a href="https://www.google.com/maps/search/?api=1&query=羽根屋+本店2" target="_blank" class="text-blue-600 hover:underline">Starbucks 函館ベイサイド店</a> 或 倉庫內咖啡店)', description: '避雨休息。<span class="emphasis">【美食任務：下午茶已達成】</span>', parkingInfo: "使用金森倉庫停車場。" },
                         { time: '18:00', type: '🎄', event: '觀賞 <a href="https://www.google.com/maps/search/?api=1&query=%E9%87%91%E6%A3%AE%E7%B4%85%E7%A3%9A%E5%80%89%E5%BA%AB" target="_blank" class="text-blue-600 hover:underline">金森倉庫</a> 聖誕幻想點燈/煙火 (18:00開始)', description: '雨天也可欣賞的燈光活動。', stay: '約 1 小時', specialTags: [ { type: 'event', text: '🎄 冬季活動: 函館聖誕幻想' } ] },
                         { time: '19:00', type: '🍽️', event: '晚餐: <a href="https://www.google.com/maps/search/?api=1&query=羽根屋+本店4" target="_blank" class="text-blue-600 hover:underline">函館啤酒館 (函館ビヤホール)</a>', description: '在紅磚倉庫內享用晚餐與啤酒。 (可用特級套票折抵)', parkingInfo: "使用金森倉庫停車場。", specialTags: [ { type: 'ig_hotspot', text: '📸 IG 熱門餐廳' } ] },
                         { time: '21:00', type: '🏨', event: '住宿: <a href="https://www.google.com/maps/search/?api=1&query=La%20Vista%20%E5%87%BD%E9%A4%A8%E7%81%A3" target="_blank" class="text-blue-600 hover:underline">ラビスタ函館ベイ</a>'}
                    ]
                }
            },
             intel: {
                 christmas_fantasy: { title: '聖誕幻想攻略', text: '活動期間(11月底-12/25)每天18:00在金森倉庫前有聖誕樹點燈儀式與煙火。 還有熱湯吧攤位可取暖。 無論晴雨都是晚間亮點。' },
                 rainy_day_alt: { title: '雨備選項B 提示', text: '選項B避開戶外視野為主的函館山。金森倉庫、明治館、啤酒館提供充足的室內活動。聖誕幻想活動雨天照常舉行。' },
                  special_ticket_plan: { title: '特級套票交通券', text: '今日行程步行可達處多，可考慮將特級套票的交通一日券保留給後面需要搭乘市電/巴士較多的日子(如Day 4或Day 6)。' }
             },
             insights: {
                 bay_area_focus: { title: '<span class="emphasis">灣區魅力</span>', text: '住宿灣區能深度體驗此區的日夜景致。白天逛朝市、倉庫，傍晚賞夕陽、聖誕燈飾，晚上還能就近用餐或回飯店泡湯，行程非常順暢。' }
             }
        },
        day3: { // Dec 3rd (Sun)
            title: '異國風情・元町坂道散策 (夜景備案)', date: 'Day 3 (12/03 週日)', location: '灣區 ↔ 元町', timeAnalysis: { travel: 0.5, activity: 7.5 },
            options: {
                 optionA: {
                    label: '選項A: 晴天再戰夜景',
                    timeline: [
                        { time: '09:00', type: '☕', event: '早餐: 飯店 (La Vista 早餐)' },
                        { time: '10:00-11:00', type: '⛩️', event: '步行前往 元町散策起點: <a href="https://www.google.com/maps/search/?api=1&query=%E8%88%B9%E9%AD%82%E7%A5%9E%E7%A4%BE" target="_blank" class="text-blue-600 hover:underline">船魂神社</a>', description: '參拜北海道最古老神社。', ticketInfo: "免費參拜", stay: '約 1 小時', specialTags: [ { type: 'recommendation', text: '🎯 必買推薦: 舵守' } ] },
                        { time: '11:00-14:00', type: '🚶', event: '<a href="https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%20%E5%85%83%E7%94%BA%20%E5%85%AB%E5%B9%A1%E5%9D%82" target="_blank" class="text-blue-600 hover:underline">元町教會群 & 坂道巡禮</a>', description: '散步遊覽八幡坂、函館正教會、元町天主堂。', awardHighlight: "日本音風景100選 (正教會鐘聲)", stay: '約 3 小時', parkingInfo: "『函館市元町觀光停車場』。", specialTags: [ { type: 'pilgrimage', text: '🎥 聖地巡禮: Love Live! Sunshine!! / First Love 場景' }, { type: 'ig_hotspot', text: '📸 IG 熱門打卡點 (八幡坂/正教會)' } ] },
                        { time: '14:00-15:00', type: '🏛️', event: '參觀 <a href="https://www.google.com/maps/search/?api=1&query=%E8%88%8A%E5%87%BD%E9%A4%A8%E5%8D%80%E5%85%AC%E6%9C%83%E5%A0%82" target="_blank" class="text-blue-600 hover:underline">舊函館區公會堂</a>', description: '欣賞華麗洋館。(可用特級套票1點)', ticketInfo: "大人 300日圓", stay: '約 1 小時', specialTags: [ { type: 'ig_hotspot', text: '📸 IG 熱門打卡點' } ] },
                        { time: '15:30', type: '🍽️', event: '午餐/下午茶: 元町咖啡廳 (e.g. <a href="https://www.google.com/maps/search/?api=1&query=%E8%8C%B6%E6%88%BF%20%E8%8F%8A%E6%B3%89" target="_blank" class="text-blue-600 hover:underline">茶房 菊泉</a> 或 <a href="https://www.google.com/maps/search/?api=1&query=羽根屋+本店5" target="_blank" class="text-blue-600 hover:underline">Angelique Voyage</a>)', description: '在古民家咖啡廳或Tabelog第一名甜點店休息。' },
                        { time: '17:00-17:30', type: '⛩️', event: '參拜 <a href="https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E8%AD%B7%E5%9C%8B%E7%A5%9E%E7%A4%BE" target="_blank" class="text-blue-600 hover:underline">函館護國神社</a>', description: '尋找貓頭鷹御守。', ticketInfo: "免費參拜", parkingInfo: "可使用函館山纜車站免費停車場。", stay: '約 30 分鐘', specialTags: [ { type: 'recommendation', text: '🎯 必買推薦: 貓頭鷹御守' } ] },
                        { time: '17:45', type: '🚠', event: '關鍵任務(二次機會): <a href="https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E5%B1%B1%E7%BA%9C%E8%BB%8A%20%E5%B1%B1%E9%BA%93%E7%AB%99" target="_blank" class="text-blue-600 hover:underline">函館山纜車</a>', description: '再次挑戰百萬夜景！(使用特級套票7點)', ticketInfo: "來回 ¥1,800", parkingInfo: "山麓站免費停車場 (車位極少)。" },
                        { time: '18:15-19:45', type: '🌃', event: '絕景鑑賞: <a href="https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E5%B1%B1%E7%BA%9C%E8%BB%8A%20%E5%B1%B1%E9%BA%93%E7%AB%99" target="_blank" class="text-blue-600 hover:underline">函館山夜景</a>', description: '把握第二次機會欣賞夜景。', awardHighlight: "世界三大夜景 (米其林三星)", ticketInfo: "觀景台免費", stay: '約 1.5 小時', specialTags: [ { type: 'ig_hotspot', text: '📸 IG 熱門打卡點' } ] },
                        { time: '20:15', type: '🍽️', event: '晚餐: 十字街周邊<a href="https://www.google.com/maps/search/?api=1&query=羽根屋+本店6" target="_blank" class="text-blue-600 hover:underline">大門橫丁</a> 或 返回灣區用餐', description: '體驗居酒屋小巷氛圍。(大門橫丁可用特級套票折抵)' },
                        { time: '21:30', type: '🏨', event: '住宿: <a href="https://www.google.com/maps/search/?api=1&query=La%20Vista%20%E5%87%BD%E9%A4%A8%E7%81%A3" target="_blank" class="text-blue-600 hover:underline">ラビスタ函館ベイ</a>'}
                    ]
                 },
                 optionB: {
                    label: '選項B: 雨天/已看夜景',
                    timeline: [
                        { time: '09:00', type: '☕', event: '早餐: 飯店 (La Vista 早餐)' },
                        { time: '10:00-11:00', type: '⛩️', event: '步行前往 元町散策起點: <a href="https://www.google.com/maps/search/?api=1&query=%E8%88%B9%E9%AD%82%E7%A5%9E%E7%A4%BE" target="_blank" class="text-blue-600 hover:underline">船魂神社</a>', description: '參拜北海道最古老神社。', ticketInfo: "免費參拜", stay: '約 1 小時', specialTags: [ { type: 'recommendation', text: '🎯 必買推薦: 舵守' } ] },
                        { time: '11:00-14:00', type: '🚶', event: '<a href="https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%20%E5%85%83%E7%94%BA%20%E5%85%AB%E5%B9%A1%E5%9D%82" target="_blank" class="text-blue-600 hover:underline">元町教會群 & 坂道巡禮</a> (雨天可重點參觀教堂內部/領事館)', description: '散步遊覽八幡坂、函館正教會、舊英國領事館(可用特級套票1點)。', awardHighlight: "日本音風景100選 (正教會鐘聲)", stay: '約 3 小時', parkingInfo: "『函館市元町觀光停車場』。", specialTags: [ { type: 'pilgrimage', text: '🎥 聖地巡禮: Love Live! Sunshine!! / First Love 場景' }, { type: 'ig_hotspot', text: '📸 IG 熱門打卡點 (八幡坂/正教會)' } ] },
                        { time: '14:00-15:00', type: '🏛️', event: '參觀 <a href="https://www.google.com/maps/search/?api=1&query=%E8%88%8A%E5%87%BD%E9%A4%A8%E5%8D%80%E5%85%AC%E6%9C%83%E5%A0%82" target="_blank" class="text-blue-600 hover:underline">舊函館區公會堂</a>', description: '欣賞華麗洋館。(可用特級套票1點)', ticketInfo: "大人 300日圓", stay: '約 1 小時', specialTags: [ { type: 'ig_hotspot', text: '📸 IG 熱門打卡點' } ] },
                        { time: '15:30', type: '🍽️', event: '午餐/下午茶: 元町咖啡廳 (e.g. <a href="https://www.google.com/maps/search/?api=1&query=%E8%8C%B6%E6%88%BF%20%E8%8F%8A%E6%B3%89" target="_blank" class="text-blue-600 hover:underline">茶房 菊泉</a> 或 <a href="https://www.google.com/maps/search/?api=1&query=羽根屋+本店5" target="_blank" class="text-blue-600 hover:underline">Angelique Voyage</a>)', description: '在古民家咖啡廳或Tabelog第一名甜點店休息。' },
                        { time: '17:00-18:30', type: '⛩️', event: '參拜 <a href="https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E8%AD%B7%E5%9C%8B%E7%A5%9E%E7%A4%BE" target="_blank" class="text-blue-600 hover:underline">函館護國神社</a>', description: '尋找貓頭鷹御守。', ticketInfo: "免費參拜", parkingInfo: "可使用函館山纜車站免費停車場。", stay: '約 1.5 小時', specialTags: [ { type: 'recommendation', text: '🎯 必買推薦: 貓頭鷹御守' } ] },
                        { time: '19:00', type: '🍽️', event: '晚餐: <a href="https://www.google.com/maps/search/?api=1&query=%E3%81%A8%E3%82%93%E6%82%A6%20%E5%87%BD%E9%A4%A8" target="_blank" class="text-blue-600 hover:underline">とん悦 (Tonetsu)</a>', description: '搭市電前往品嚐在地炸豬排。<span class="emphasis">【美食任務：豬排飯已達成】</span>', parkingInfo: "店家設有專用停車場。" },
                        { time: '21:00', type: '🏨', event: '住宿: <a href="https://www.google.com/maps/search/?api=1&query=La%20Vista%20%E5%87%BD%E9%A4%A8%E7%81%A3" target="_blank" class="text-blue-600 hover:underline">ラビスタ函館ベイ</a>'}
                    ]
                 }
            },
             intel: {
                  night_view_strategy: { title: '夜景策略：第二次機會 (選項A)', text: '如果Day 2天氣不佳或想再次欣賞，Day 3傍晚是第二次機會。結束元町行程後，護國神社就在纜車站旁，動線順暢。' },
                  special_ticket_points: { title: '特級套票點數運用', text: '今日可使用點數於舊函館區公會堂(1點)、舊英國領事館(1點)。 若選擇Option A，則再加上函館山纜車(7點)，點數剛好用完！' }, // Updated point usage
                  transport_hack: { title: '交通TIPS：步行+市電', text: '從La Vista出發，元町大部分景點可步行抵達。若要前往較遠處(如Tonetsu)或節省體力，可搭配市電一日券(¥600)。' }
             },
             insights: {
                  motomachi_charm: { title: '<span class="emphasis">文化見解：元町的魅力</span>', text: '元町不僅有美麗的教堂和坂道，更承載了函館開港的歷史。漫步其中，可以感受不同文化交融的獨特氛圍。函館正教會的鐘聲更是被選為「日本音風景100選」。' }
             }
        },
        day4: { // Dec 4th (Mon)
            title: '星型要塞・冬日星芒', date: 'Day 4 (12/04 週一)', location: '灣區 ↔ 五稜郭', timeAnalysis: { travel: 1.5, activity: 7.0 },
            timeline: [
                 { time: '08:30', type: '☕', event: '早餐: 飯店 (La Vista 早餐)' },
                 { time: '09:30', type: '🚋', event: '搭乘市電 (魚市場通 → 五稜郭公園前) (使用特級套票交通券)'},
                 { time: '10:00-12:00', type: '🏯', event: '登上 <a href="https://www.google.com/maps/search/?api=1&query=%E4%BA%94%E7%A8%9C%E9%83%AD%E5%A1%94" target="_blank" class="text-blue-600 hover:underline">五稜郭塔</a>', description: '白天俯瞰星形要塞。(特級套票已用完點數，需購票)', awardHighlight: "日本100名城 (續)", ticketInfo: "大人 900日圓", stay: '約 2 小時', parkingInfo: "無專用停車場，使用周邊付費停車場。", specialTags: [ { type: 'ig_hotspot', text: '📸 IG 熱門打卡點' } ] },
                 { time: '12:00-13:00', type: '🍽️', event: '午餐: <a href="https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E9%BA%B5%E5%BB%9A%E6%88%BF%20%E5%91%B3%E5%BD%A9%20%E6%9C%AC%E5%BA%97" target="_blank" class="text-blue-600 hover:underline">函館麵厨房 味彩 (本店)</a>', description: '品嚐函館鹽味拉麵。(特級套票已用完點數，需付費)<span class="emphasis">【美食任務：拉麵已達成】</span>', parkingInfo: "有專用停車場 (7台)。", specialTags: [ { type: 'ig_hotspot', text: '📸 IG 熱門餐廳' } ] },
                 { time: '13:00-15:00', type: '🚶', event: '漫步 <a href="https://www.google.com/maps/search/?api=1&query=%E4%BA%94%E7%A8%9C%E9%83%AD%E5%A1%94" target="_blank" class="text-blue-600 hover:underline">五稜郭公園</a> & <a href="https://www.google.com/maps/search/?api=1&query=羽根屋+本店7" target="_blank" class="text-blue-600 hover:underline">箱館奉行所</a>', description: '深入了解幕末歷史。(特級套票已用完點數，需購票)', awardHighlight: "日本櫻花名所100選", ticketInfo: "公園免費 (奉行所 500日圓)", stay: '約 2 小時', specialTags: [ { type: 'pilgrimage', text: '🎥 聖地巡禮: 黃金神威 場景' } ] },
                 { time: '15:00-16:30', type: '☕', event: '下午茶: <a href="https://www.google.com/maps/search/?api=1&query=%E5%85%AD%E8%8A%B1%E4%BA%AD%20%E4%BA%94%E7%A8%9C%E9%83%AD%E5%BA%97" target="_blank" class="text-blue-600 hover:underline">六花亭 (五稜郭店)</a>', description: '享受喫茶室的甜點與咖啡。', parkingInfo: "設有免費專用停車場。" },
                 { time: '17:00-18:00', type: '✨', event: '冬季限定: 觀賞 <a href="https://www.google.com/maps/search/?api=1&query=%E4%BA%94%E7%A8%9C%E9%83%AD%E5%A1%94" target="_blank" class="text-blue-600 hover:underline">五稜星之夢</a> 點燈', description: '在公園周邊欣賞護城河點燈。', stay: '約 1 小時', specialTags: [ { type: 'event', text: '✨ 冬季活動: 五稜星之夢' } ] },
                 { time: '18:30', type: '🍽️', event: '晚餐 (選項A): <a href="https://www.google.com/maps/search/?api=1&query=Colz%20%E3%82%B3%E3%83%AB%E3%83%84%20%E5%87%BD%E9%A4%A8" target="_blank" class="text-blue-600 hover:underline">Colz (コルツ)</a> (需預約)', description: '品嚐Tabelog高分的在地義大利麵。<span class="emphasis">【美食任務：義大利麵已達成】</span>', parkingInfo: "店家後方設有專用停車場。" },
                 { time: '18:30', type: '🍽️', event: '晚餐 (選項B): <a href="https://www.google.com/maps/search/?api=1&query=%E3%82%AC%E3%82%B9%E3%83%88%20%E5%87%BD%E9%A4%A8%E9%8D%9B%E5%86%B6%E5%BA%97" target="_blank" class="text-blue-600 hover:underline">ガスト (Gusto) 函館鍛治店</a>', description: '體驗日本家庭餐廳文化。<span class="emphasis">【美食任務：家庭餐廳已達成】</span>', parkingInfo: "設有專用停車場。" },
                 { time: '20:30', type: '🏨', event: '返回飯店: <a href="https://www.google.com/maps/search/?api=1&query=La%20Vista%20%E5%87%BD%E9%A4%A8%E7%81%A3" target="_blank" class="text-blue-600 hover:underline">ラビスタ函館ベイ</a>'}
            ],
             intel: {
                  goryokaku_illumination: { title: '五稜星之夢 觀賞點', text: '「五稜星之夢」(12月-2月)點亮星形護城河。 傍晚在公園周圍散步即可欣賞，無需再次登塔。搭配雪景更美。'},
                  special_ticket_strategy: { title: '特級套票點數策略', text: '若前兩天已使用函館山(7點)+五稜郭塔(4點)，點數已用完。 今天參觀奉行所、味彩拉麵需另外付費。或者，可以調整點數用法，例如放棄其中一個點數景點，將點數用於味彩(3點)或奉行所(2點)。'}
             },
             insights: {
                  golden_kamuy: { title: '文化見解：黃金神威與五稜郭', text: '五稜郭是《黃金神威》中土方歲三勢力的最終據點。在塔上俯瞰這片土地，更能感受到這段歷史與故事的厚重感。' },
                  star_fort: { title: '<span class="emphasis">建築見解：星形要塞</span>', text: '五稜郭的星形設計是為了減少防禦死角，是當時歐洲流行的稜堡式城郭。從塔上俯瞰才能完全理解其設計巧思。' }
             }
        },
        day5: { // Dec 5th (Tue)
            title: '北國自然・大沼公園 & 特色漢堡', date: 'Day 5 (12/05 週二)', location: '灣區 ↔ 大沼公園 / 七飯町', timeAnalysis: { travel: 2.0, activity: 6.0 },
            options: {
                 optionA: {
                     label: "選項A: 自駕遊 (含峠下總本店)",
                     timeline: [
                         { time: '09:00', type: '☕', event: '早餐: 飯店 (La Vista 早餐)' },
                         { time: '09:30-10:10', type: '🚗', event: '租車/自駕前往大沼公園 (約40分鐘)' },
                         { time: '10:10-14:10', type: '🏞️', event: '<a href="https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E6%B2%BC%E5%9C%8B%E5%AE%9A%E5%85%AC%E5%9C%92" target="_blank" class="text-blue-600 hover:underline">大沼國定公園</a> 深度遊覽', awardHighlight: "日本新三景, 日本紅葉名所100選", description: '冬季雪地散策、欣賞駒岳火山與結冰湖景。', ticketInfo: "公園免費", stay: '約 4 小時', parkingInfo: "JR站對面有收費停車場 (¥400/次)。" },
                         { time: '14:10-14:30', type: '🚗', event: '駕車前往峠下總本店 (約15-20分鐘)' },
                         { time: '14:30-15:30', type: '🍽️', event: '午餐: <a href="https://www.google.com/maps/search/?api=1&query=ドーミーインPREMIUM五稜郭" target="_blank" class="text-blue-600 hover:underline">幸運小丑漢堡 (峠下總本店)</a>', description: '前往最具特色的分店，與巨大紅椅子合照。', parkingInfo: "設有大型免費停車場。", specialTags: [ { type: 'recommendation', text: '🚗 自駕推薦特色分店' } ] },
                         { time: '15:30-16:30', type: '🚗', event: '移動: 返回函館市區'},
                         { time: '18:00', type: '🍽️', event: '晚餐: <a href="https://www.google.com/maps/search/?api=1&query=%E7%82%AD%E7%81%AB%E7%87%92%E8%82%89%20%E6%B3%89%E5%91%B3%E4%BA%AD%20%E5%87%BD%E9%A4%A8" target="_blank" class="text-blue-600 hover:underline">炭火燒肉 泉味亭</a>', description: '搭市電或計程車前往五稜郭區域品嚐熟成和牛。<span class="emphasis">【美食任務：燒肉已達成】</span>', parkingInfo: "設有專屬停車場。", specialTags: [ { type: 'ig_hotspot', text: '📸 IG 熱門餐廳' } ] },
                         { time: '20:30', type: '🏨', event: '住宿: <a href="https://www.google.com/maps/search/?api=1&query=La%20Vista%20%E5%87%BD%E9%A4%A8%E7%81%A3" target="_blank" class="text-blue-600 hover:underline">ラビスタ函館ベイ</a>'}
                     ]
                 },
                 optionB: {
                     label: "選項B: JR/大眾運輸",
                     timeline: [
                        { time: '09:00', type: '☕', event: '早餐: 飯店 (La Vista 早餐)' },
                        { time: '09:30-10:30', type: '🚆', event: '移動: 搭乘市電至函館站，轉乘 JR特急北斗號 (函館→大沼公園)' },
                        { time: '10:30-15:30', type: '🏞️', event: '<a href="https://www.google.com/maps/search/?api=1&query=%E5%A4%A7%E6%B2%BC%E5%9C%8B%E5%AE%9A%E5%85%AC%E5%9C%92" target="_blank" class="text-blue-600 hover:underline">大沼國定公園</a> 深度遊覽', awardHighlight: "日本新三景, 日本紅葉名所100選", description: '冬季雪地散策、欣賞駒岳火山與結冰湖景。', ticketInfo: "公園免費", stay: '約 5 小時', parkingInfo: "JR站對面有收費停車場 (¥400/次)。" },
                        { time: '中午', type: '🍽️', event: '午餐: 大沼公園周邊餐廳 或 <a href="https://www.google.com/maps/search/?api=1&query=%E6%B2%BC%E4%B9%8B%E5%AE%B6" target="_blank" class="text-blue-600 hover:underline">沼之家 (沼の家)</a> 糰子配熱飲' },
                        { time: '15:30-16:30', type: '🚆', event: '移動: JR (大沼公園→函館) → 市電返回灣區'},
                        { time: '18:00', type: '🍽️', event: '晚餐: <a href="https://www.google.com/maps/search/?api=1&query=%E7%82%AD%E7%81%AB%E7%87%92%E8%82%89%20%E6%B3%89%E5%91%B3%E4%BA%AD%20%E5%87%BD%E9%A4%A8" target="_blank" class="text-blue-600 hover:underline">炭火燒肉 泉味亭</a>', description: '搭市電或計程車前往五稜郭區域品嚐熟成和牛。<span class="emphasis">【美食任務：燒肉已達成】</span>', parkingInfo: "設有專屬停車場。", specialTags: [ { type: 'ig_hotspot', text: '📸 IG 熱門餐廳' } ] },
                        { time: '20:30', type: '🏨', event: '住宿: <a href="https://www.google.com/maps/search/?api=1&query=La%20Vista%20%E5%87%BD%E9%A4%A8%E7%81%A3" target="_blank" class="text-blue-600 hover:underline">ラビスタ函館ベイ</a>'}
                     ]
                 }
            },
            intel: {
                 togeshita_lp: { title: '峠下總本店 攻略 (選項A)', text: '此分店位於七飯町，從大沼公園開車約15-20分鐘，不在函館市區。其巨大椅子和獨特裝潢非常值得拍照留念，建議自駕旅客安排。'},
                 onuma_winter_activity: { title: '大沼公園 冬季活動', text: '冬季(12月)湖面可能開始結冰，腳踏車環湖需注意路面濕滑或積雪。部分遊覽船可能停駛。可享受雪地散策的寧靜氛圍。出發前確認當地狀況。' }
            },
            insights: {
                new_japan_three_views: { title: '文化見解：新日本三景', text: '大沼公園因其「駒岳火山、湖泊、島嶼」三者合一的獨特景觀，在1915年被選為「新日本三景」。' }
            }
        },
        day6: { // Dec 6th (Wed)
            title: '溫泉猴湯 & 郊區修道院', date: 'Day 6 (12/06 週三)', location: '灣區 ↔ 湯之川溫泉・函館郊區', timeAnalysis: { travel: 2.5, activity: 6.0 },
            timeline: [
                { time: '09:00', type: '☕', event: '早餐: 飯店 (La Vista 早餐)' },
                { time: '10:00', type: '🚋', event: '搭乘市電 (魚市場通 → 湯の川温泉) (使用市電巴士共通一日券¥1000)'},
                { time: '10:45-11:45', type: '⛩️', event: '溫泉區散策: <a href="https://www.google.com/maps/search/?api=1&query=%E6%B9%AF%E5%80%89%E7%A5%9E%E7%A4%BE" target="_blank" class="text-blue-600 hover:underline">湯倉神社</a>', description: '參拜溫泉守護神，體驗釣烏賊籤詩。', ticketInfo: "免費參拜", stay: '約 1 小時', parkingInfo: "設有大型免費專用停車場 (80台)。", specialTags: [ { type: 'recommendation', text: '🎯 必買推薦: 御神緣御守 / 釣烏賊籤詩' } ] },
                { time: '11:45-12:45', type: '🐒', event: '<a href="https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E5%B8%82%E7%86%B1%E5%B9%B6%E6%A4%8D%E7%89%A9%E5%9C%92" target="_blank" class="text-blue-600 hover:underline">函館市熱帶植物園</a>', description: '觀賞著名的猴子泡湯 (12/1開始)。', ticketInfo: "大人 300日圓", stay: '約 1 小時', parkingInfo: "設有免費停車場。", specialTags: [ { type: 'ig_hotspot', text: '📸 IG 熱門打卡點 (冬季)' }, { type: 'event', text: '🐒 冬季活動: 猴子泡湯' } ] },
                 { time: '13:00-14:00', type: '🍽️', event: '午餐: 湯之川溫泉區 <a href="https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E9%BA%B5%E5%BB%B3%20%E4%B8%80%E6%96%87%E5%AD%97%20%E6%B9%AF%E3%81%AE%E5%B7%9D" target="_blank" class="text-blue-600 hover:underline">一文字 拉麵</a> 或 其他餐廳' },
                { time: '14:30-16:00', type: '⛪', event: '郊區巡禮: <a href="https://www.google.com/maps/search/?api=1&query=%E7%89%B9%E6%8B%89%E6%99%AE%E6%B4%BE%E5%A5%B3%E5%AD%90%E4%BF%AE%E9%81%93%E9%99%A2" target="_blank" class="text-blue-600 hover:underline">特拉普派女子修道院</a>', description: '搭乘巴士或租車前往，參觀紅磚修道院。(需查巴士時刻)', ticketInfo: "庭園免費", stay: '約 1.5 小時', parkingInfo: "對面「市民之森」有收費停車場 (¥200/次)。", specialTags: [ { type: 'recommendation', text: '🎯 必買推薦: Madalena 蛋糕捲' } ] },
                { time: '16:00', type: '🍦', event: '點心/下午茶: <a href="https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E5%B8%82%E6%B0%91%E3%81%AE%E6%A3%AE%20%E3%82%BD%E3%83%95%E3%83%88%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%A0" target="_blank" class="text-blue-600 hover:underline">市民之森 霜淇淋</a> & 購買修道院餅乾', specialTags: [ { type: 'recommendation', text: '🍦 必吃推薦: 牛奶霜淇淋' } ] },
                { time: '17:00-18:00', type: '⛩️', event: '深度參拜: <a href="https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E5%85%AB%E5%B9%A1%E5%AE%AE" target="_blank" class="text-blue-600 hover:underline">函館八幡宮</a>', description: '搭乘巴士/市電或租車前往。(市電需搭到「谷地頭」)', ticketInfo: "免費參拜 (社務所至17:00)", stay: '約 1 小時', parkingInfo: "設有免費停車場 (80台)。" },
                { time: '18:30', type: '✨', event: '觀賞 <a href="https://www.google.com/maps/search/?api=1&query=羽根屋+本店8" target="_blank" class="text-blue-600 hover:underline">湯之川 冬之燈</a>', description: '感受溫泉街的冬季燈飾氛圍。', stay: '約 30 分鐘', specialTags: [ { type: 'event', text: '✨ 冬季活動: 湯之川 冬之燈' } ] },
                { time: '19:00', type: '🍽️', event: '晚餐: 返回灣區/函館站前用餐 (e.g., <a href="https://www.google.com/maps/search/?api=1&query=羽根屋+本店6" target="_blank" class="text-blue-600 hover:underline">大門橫丁</a>)' },
                { time: '21:00', type: '🏨', event: '住宿: <a href="https://www.google.com/maps/search/?api=1&query=La%20Vista%20%E5%87%BD%E9%A4%A8%E7%81%A3" target="_blank" class="text-blue-600 hover:underline">ラビスタ函館ベイ</a>'}
            ],
             intel: {
                 trappistine_hack: { title: '修道院攻略 & 交通', text: '修道院位置較偏遠，從湯之川搭乘巴士約需20-30分鐘，班次可能不多，需預先查好時刻表。自駕最為方便。必買伴手禮(餅乾/蛋糕捲)在入口商店。' },
                  bus_pass_option: { title: '交通選項：市電巴士共通券', text: '今日行程橫跨市電(湯之川)與巴士(修道院/八幡宮)，購買市電巴士共通一日券(¥1000)可能是最划算的選擇。' }
             },
             insights: {
                 yunokawa_onsen: { title: '溫泉筆記：湯之川溫泉', text: '北海道三大溫泉鄉之一，距機場僅5分鐘車程。 泉質為鹽化物泉，保溫效果佳，對神經痛和手腳冰冷有效。' }
             }
        },
        day7: { // Dec 7th (Thu)
            title: '歸鄉・帶著北國的回憶', date: 'Day 7 (12/07 週四)', location: '灣區 → 函館機場', timeAnalysis: { travel: 1.0, activity: 1.0 },
            timeline: [
                { time: '08:00', type: '☕', event: '早餐: 飯店 (La Vista 早餐) 或 <a href="https://www.google.com/maps/search/?api=1&query=%E5%87%BD%E9%A4%A8%E6%9C%9D%E5%B8%82" target="_blank" class="text-blue-600 hover:underline">函館朝市</a> 最後巡禮' },
                { time: '09:30', type: '🏨', event: '飯店Check-out' },
                { time: '10:00-11:00', type: '🛍️', event: '最後採買: 函館站前商店 或 機場商店', description: '進行最後的伴手禮補給。(機場可用特級套票折抵)' },
                { time: '11:00', type: '🚗', event: '租車歸還 (若有)' },
                { time: '11:30', type: '🚌', event: '前往 函館機場 (HKD)', description: '可從函館站搭乘機場接駁巴士。', cost: '約 ¥700'},
                { time: '12:00', type: '🍽️', event: '午餐: 函館機場餐廳 (2025/8月後有新美食街) 或 便利商店' },
                { time: '14:00', type: '✈️', event: '航班起飛: HKD → TPE' }
            ],
             intel: {
                 airport_souvenir: { title: '機場伴手禮補給', text: '函館機場國內線航廈伴手禮店齊全，Snaffle\'s、六花亭、LeTAO等皆有設櫃。 可使用函館特級套票在指定店家折抵消費。' },
                  airport_foodcourt: { title: '機場餐飲新選擇', text: '2025年8月後，國內線3樓新設美食街，集結函館及道南特色餐廳，提供更多用餐選擇。'}
             },
             insights: {
                  la_vista_review: { title: '住宿回顧：La Vista 的優勢', text: '選擇La Vista，能充分享受灣區的便利性與氛圍，特別是其著名的早餐和頂樓溫泉。雖然價格較高，但對於重視住宿體驗和美食的旅客是絕佳選擇。' }
             }
        }
    }
};
