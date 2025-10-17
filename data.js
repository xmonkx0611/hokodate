// --- TRIP DATA FILE ---
// Version 9.0.0: Hakodate 5-Day Itinerary

const tripData = {
    // Meta information for the page
    meta: {
        title: "北海道函館5日紀行：互動式作戰儀表板 v9.0",
        mainTitle: "北海道函館5日紀行"
    },

    // Food Mission data is kept for logic (adjusted for Hakodate)
    missionSummary: {
        seafoodDonburi: { completed: false, description: "海鮮丼" },
        shioRamen: { completed: false, description: "鹽味拉麵" },
        luckyPierrot: { completed: false, description: "幸運小丑漢堡" },
        jingisukan: { completed: false, description: "成吉思汗烤肉" },
        softServe: { completed: false, description: "特色霜淇淋" },
        squidSashimi: { completed: false, description: "活釣花枝" },
        yakitoriBento: { completed: false, description: "烤雞肉串便當" },
        catchCakes: { completed: false, description: "Snaffle's 起司蛋糕" }
    },

    // Data for the Themed Guides section
    themedGuidesData: {
        amulets: {
            title: "⛩️ 函館特色御守攻略",
            description: "函館的神社融合了北海道的開拓歷史與在地特色，御守也別具一格。",
            items: [
                { name: "函館八幡宮", prefecture: "北海道函館", popular: "北海道總鎮守，提供祈求事業順利與交通安全的御守。", special: "以蝦夷地區的開拓歷史為主題的『開運守』。" },
                { name: "湯倉神社", prefecture: "北海道函館", popular: "湯之川溫泉的守護神社，以『溫泉療癒』與『健康長壽』御守聞名。", special: "可愛的兔子造型『撫兔』與『結緣兔』御守。" },
                { name: "函館護國神社", prefecture: "北海道函館", popular: "位於函館山麓，視野遼闊，以祈求『國家安泰』與『家內安全』為主。", special: "獨特的『花枝籤 (いかみくじ)』，釣起來後籤詩藏在花枝身體裡。" }
            ]
        },
        souvenirs: {
            title: "🛍️ 2025 函館最新伴手禮情報",
            description: "函館作為北海道的門戶，匯集了道南地區的精華美食與伴手禮。",
            items: [
                { name: "經典甜點", items: ["<span class=\"emphasis\">Snaffle's 起司蛋糕</span>: 入口即化的輕乳酪蛋糕，是函館代表性甜點。", "<span class=\"emphasis\">LeTAO 雙層乳酪蛋糕</span>: 雖源自小樽，但在函館機場與車站是必買人氣王。", "<span class=\"emphasis\">Trappistine 修道院餅乾</span>: 女子修道院出品，奶油香氣濃郁，包裝典雅。"] },
                { name: "特色食品", items: ["<span class=\"emphasis\">花枝加工品</span>: 函館朝市販售的『花枝飯 (いかめし)』與各式魷魚絲、一夜干。", "<span class=\"emphasis\">長谷川商店烤雞肉串便當</span>: 函館市民的靈魂美食，可外帶。", "<span class=\"emphasis\">幸運小丑漢堡周邊</span>: 店內販售的獨家餅乾與咖哩調理包。"] }
            ]
        },
        animePilgrimage: {
            title: "🎥 動漫與日劇聖地巡禮",
            description: "函館獨特的港口城市景觀與歷史建築，使其成為眾多作品的舞台。",
            items: [
                { name: "《Love Live! Sunshine!!》", locations: ["金森紅磚倉庫 (Saint Snow 表演場地)", "八幡坂"] },
                { name: "《黃金神威 (Golden Kamuy)》", locations: ["五稜郭 (故事中的重要場景)"] },
                { name: "日劇《First Love 初戀》", locations: ["八幡坂 (部分取景)"] },
                { name: "電影《P與JK》", locations: ["元町公園周邊", "八幡坂"] }
            ]
        }
    },

    // Data for the Awards section
    awardsData: {
        top100: [
            {
                title: "🏯 日本100名城",
                theme: "border-gray-400",
                locations: [
                    { name: "五稜郭 (No.4)", prefecture: "北海道函館", details: "日本百名城之一，是日本第一座西式星形要塞，也是箱館戰爭的最終舞台。" }
                ]
            }
        ],
        greatThree: [
            {
                title: "🌃 日本三大夜景",
                theme: "border-indigo-300",
                status: "入選",
                location: {
                    name: "函館山夜景",
                    prefecture: "北海道函館",
                    description: "與神戶、長崎並列為日本三大夜景。其獨特的扇形地貌被津輕海峽與函館灣包圍，景色壯麗，更獲得《米其林綠色指南・日本》三顆星的最高評價。"
                },
                others: "摩耶山（兵庫縣神戶）、稻佐山（長崎縣長崎）"
            },
            {
                title: "🌟 北海道遺產",
                theme: "border-blue-300",
                status: "入選",
                location: {
                    name: "五稜郭與函館戰爭的歷史",
                    prefecture: "北海道函館",
                    description: "五稜郭作為江戶幕府時代末期內戰「箱館戰爭」的舞台，其星形城郭的建築之美與背後的歷史故事，被共同選定為北海道遺產。"
                },
                others: "非並列關係"
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
                '<span class="emphasis">櫻花盛宴</span>: 五稜郭公園是北海道最知名的賞櫻名所之一 (約5月上旬)。',
                '<span class="emphasis">春季海產</span>: 扇貝、海膽開始進入產季。'
            ],
            foods: [
                '<span class="emphasis">時令美食</span>: 櫻鱒 (サクラマス)、春季蘆筍。'
            ]
        },
        summer: {
            title: '夏 (6-8月)',
            theme_color: 'bg-blue-100',
            icon: '☀️',
            highlights: [
                '<span class="emphasis">花火大會</span>: 函館港祭 (8月初)，是函館最盛大的夏日慶典。',
                '<span class="emphasis">氣候涼爽</span>: 是避暑的絕佳地點，平均氣溫約20-25°C。'
            ],
            foods: [
                '<span class="emphasis">花枝 (いか)</span>: 夏季是花枝最肥美的季節，必嚐活花枝刺身。',
                '<span class="emphasis">海膽 (うに)</span>: 6-8月是函館海膽的盛產期，品質極佳。'
            ]
        },
        autumn: {
            title: '秋 (9-11月)',
            theme_color: 'bg-orange-100',
            icon: '🍁',
            highlights: [
                '<span class="emphasis">紅葉絕景</span>: 香雪園 (見晴公園) 是函館最著名的賞楓地點 (約10月下旬)。',
                '<span class="emphasis">美食節</span>: 函館美食馬戲團 (9月)。'
            ],
            foods: [
                '<span class="emphasis">時令美食</span>: 鮭魚、秋刀魚、螃蟹。'
            ]
        },
        winter: {
            title: '冬 (12-2月)',
            theme_color: 'bg-indigo-100',
            icon: '❄️',
            highlights: [
                '<span class="emphasis">雪景與燈飾</span>: 元町地區的「函館冬季嘉年華」、五稜郭的「五稜星之夢」。',
                '<span class="emphasis">溫泉雪猴</span>: 湯之川熱帶植物園的猴子泡溫泉 (12月-5月)。'
            ],
            foods: [
                '<span class="emphasis">海鮮極品</span>: 鱈魚、寒鰤魚、牡蠣。',
                '<span class="emphasis">溫暖美食</span>: 在寒冷天氣中品嚐一碗熱騰騰的鹽味拉麵。'
            ]
        }
    },

    // Data for the detailed highlights section in Overview
    detailedHighlights: [
        {
            name: "函館麵廚房 味彩本店",
            type: "美食",
            mapUrl: "https://maps.app.goo.gl/x8TzExL62R2r57Yd6",
            parkingInfo: "無專用停車場，請使用五稜郭周邊的收費停車場。",
            expertRec: "函館鹽味拉麵的代表性名店，創業超過80年。其清澈而不油膩的湯頭是必嚐的經典，適合做為抵達函館的第一餐。",
            historyCulture: "看板料理：<span class=\"emphasis\">味彩鹽拉麵 (味彩塩拉麺)</span>。湯頭以豬骨、雞骨與昆布熬製，清澈卻風味醇厚。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">料理特色</span>：湯頭清澈金黃，口味淡雅，能品嚐到食材本身的原味。</li><li><span class="emphasis">人氣搭配</span>：可以搭配一盤日式煎餃。</li><li><span class="emphasis">拍照點</span>：拍攝清澈湯頭與整齊麵條的特寫。</li></ul>`
        },
        {
            name: "函館山纜車 & 夜景",
            type: "景點",
            mapUrl: "https://maps.app.goo.gl/7g6Yw8ZkR6b1bZLK8",
            ticketInfo: "纜車來回: 大人 1,800日圓",
            parkingInfo: "山麓站有收費停車場，但車位有限。夜間時段有交通管制，禁止私家車上山，強烈建議搭乘大眾運輸。",
            expertRec: "被《米其林綠色指南・日本》評為三顆星的景點，與香港、拿坡里並稱世界三大夜景。最佳觀賞時間是日落後30分鐘左右。",
            historyCulture: "函館山夜景因其兩側被海灣環繞的獨特『扇形』地貌而聞名，被譽為<span class=\"emphasis\">『百萬夜景』</span>。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">觀景重點</span>：務必在日落前抵達，才能同時欣賞到黃昏與夜晚點燈後的美景。</li><li><span class="emphasis">攝影技巧</span>：建議攜帶腳架，並在展望台的最高處尋找最佳拍攝位置。</li><li><span class="emphasis">絕佳拍照點</span>：展望台頂層的戶外觀景區。</li></ul>`
        },
        {
            name: "函館朝市",
            type: "景點",
            mapUrl: "https://maps.app.goo.gl/wWJk8WzJ9f8qC8sJ9",
            parkingInfo: "朝市周邊有多個收費停車場，如『函館朝市駐車場』(約¥250/30分鐘，部分店家消費可折抵)。",
            expertRec: "北海道最新鮮漁獲的集散地，不僅是市場，更是美食天堂。必體驗『活釣花枝』，釣上來的花枝會立刻被做成生魚片。",
            historyCulture: "戰後初期由攤販聚集而成，現已發展為函館最具代表性的觀光市場，約有250家店鋪在此營業。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">必吃美食</span>：任選一家海鮮丼飯店品嚐<span class=\"emphasis\">『勝手丼』(自選海鮮丼)</span>、現烤的帝王蟹腳與扇貝。</li><li><span class="emphasis">必玩體驗</span>：在『元祖活いか釣堀』親手釣花枝，品嚐最新鮮的刺身。</li><li><span class="emphasis">必買伴手禮</span>：各種花枝加工品、昆布與北海道哈密瓜。</li></ul>`
        },
        {
            name: "金森紅磚倉庫",
            type: "景點",
            mapUrl: "https://maps.app.goo.gl/r6m8R5iYpG7VbYd19",
            parkingInfo: "設有專用收費停車場 (約¥200/小時，消費滿額可折抵)。",
            expertRec: "函館灣區最具代表性的地標，由舊倉庫改建而成的複合式商場，充滿異國情調，無論白天或夜晚都非常浪漫。",
            historyCulture: "這些紅磚倉庫建於明治時代，曾是函館作為國際貿易港時的重要倉儲設施，見證了函館的繁榮歷史。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">購物重點</span>：尋找函館限定的玻璃製品、音樂盒與特色伴手禮店 (如Snaffle's)。</li><li><span class="emphasis">聖地巡禮</span>：這裡是動畫《Love Live! Sunshine!!》中團體 Saint Snow 的主要活動場景。</li><li><span class="emphasis">絕佳拍照點</span>：倉庫群與港灣的合影、夜晚點燈後的浪漫景色。</li></ul>`
        },
        {
            name: "幸運小丑漢堡 (灣區本店)",
            type: "美食",
            mapUrl: "https://maps.app.goo.gl/d8t6Y3f8d6G3S9y29",
            parkingInfo: "無專用停車場，可使用金森倉庫或周邊的收費停車場。",
            expertRec: "被譽為『函館靈魂美食』的在地第一漢堡店，灣區本店是創始店，裝潢充滿特色，是遊客必訪的打卡點。",
            historyCulture: "招牌餐點：<span class=\"emphasis\">中華雞腿漢堡 (チャイニーズチキンバーガー)</span>。將日式炸雞塊搭配美乃滋，風味獨特。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">點餐技巧</span>：首次品嚐必點No.1的『中華雞腿漢堡』。</li><li><span class="emphasis">特色飲品</span>：可以嘗試本店限定的『幸運可樂』。</li><li><span class="emphasis">拍照點</span>：店門口的鞦韆座位、充滿個性的店內裝潢。</li></ul>`
        },
        {
            name: "八幡坂",
            type: "景點",
            mapUrl: "https://maps.app.goo.gl/3fK9X3hF2qL8S4H2A",
            parkingInfo: "無專用停車場，建議步行遊覽元町地區。",
            expertRec: "函館元町地區最具代表性的斜坡，因其筆直地通往港口，景色開闊，成為眾多日劇、電影與廣告的取景地。",
            historyCulture: "坡道的盡頭正對著函館港與作為航標的『摩周丸』紀念船，景色極具代表性。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">攝影技巧</span>：從坡道頂端往下拍攝，可以將街道、行道樹與遠方的港口一同入鏡。</li><li><span class="emphasis">最佳時機</span>：冬季點燈時節的夜晚尤其浪漫。</li><li><span class="emphasis">聖地巡禮</span>：《Love Live!》與《First Love 初戀》等作品都曾在此取景。</li></ul>`
        },
        {
            name: "五稜郭公園 & 五稜郭塔",
            type: "景點",
            mapUrl: "https://maps.app.goo.gl/kX7N4m2G5T6tS9Zt7",
            ticketInfo: "公園免費, 塔展望台: 大人 1,000日圓",
            parkingInfo: "五稜郭塔旁有收費停車場，周邊也有多個民營停車場 (約¥200-300/小時)。",
            expertRec: "日本百名城之一，登上90米高的展望台，可以360度無死角地俯瞰完整的星形城郭，景色非常壯觀。",
            historyCulture: "日本第一座西式星形要塞，是江戶幕府末期內戰<span class=\"emphasis\">『箱館戰爭』</span>的最終舞台，土方歲三在此戰死。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">參觀重點</span>：務必登上<span class=\"emphasis\">五稜郭塔</span>俯瞰全景，並參觀位於城郭中心的<span class=\"emphasis\">箱館奉行所</span>。</li><li><span class="emphasis">季節限定</span>：春季是北海道知名的賞櫻名所；冬季則有『五稜星之夢』點燈活動。</li><li><span class="emphasis">聖地巡禮</span>：這裡是《黃金神威》的重要故事舞台。</li></ul>`
        },
        {
            name: "函館市熱帶植物園",
            type: "景點",
            mapUrl: "https://maps.app.goo.gl/eB4vWjB1F6kY7rBw7",
            ticketInfo: "大人 300日圓",
            parkingInfo: "設有免費專用停車場。",
            expertRec: "冬季限定的『猴子泡溫泉』是這裡的最大亮點，看著日本獼猴在雪中一臉享受地泡湯，畫面非常療癒。",
            historyCulture: "位於湯之川溫泉區，利用溫泉熱能維持園區溫度。猴子泡溫泉的習性始於1971年。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">觀賞重點</span>：猴子泡溫泉的期間為每年12月至隔年5月初。</li><li><span class="emphasis">體驗重點</span>：園區內設有免費的足湯，可以與猴子們一同享受溫泉。</li><li><span class="emphasis">拍照點</span>：拍攝猴子們在溫泉中放鬆的可愛模樣。</li></ul>`
        },
        {
            name: "函館ひつじ (成吉思汗烤肉)",
            type: "美食",
            mapUrl: "https://maps.app.goo.gl/Bjs4K6wP2fK6Y2B58",
            parkingInfo: "無專用停車場，請使用周邊的收費停車場。",
            expertRec: "在函館體驗北海道代表性美食『成吉思汗烤肉』的絕佳選擇。店家提供高品質的生羊肉，無腥羶味，非常適合初次嘗試的遊客。",
            historyCulture: "看板料理：<span class=\"emphasis\">生ラム (生羊肉)</span>、<span class=\"emphasis\">ラムタン (羊舌)</span>。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">料理特色</span>：使用未經冷凍的生羊肉，肉質極為鮮嫩。</li><li><span class="emphasis">用餐方式</span>：在特製的圓頂鐵盤上，先用油脂塗抹，再鋪上豆芽菜等蔬菜，最後放上羊肉燒烤。</li><li><span class="emphasis">在地搭配</span>：搭配一杯冰涼的札幌啤酒 (Sapporo Beer)。</li></ul>`
        },
        {
            name: "特拉普派斯汀女子修道院",
            type: "景點",
            mapUrl: "https://maps.app.goo.gl/LzY2cDBr6yS1G42t7",
            parkingInfo: "設有市民之森賣店的共用免費停車場。",
            expertRec: "充滿歐式風情的寧靜景點，紅磚建築與聖母像構成一幅優美的畫面。修道院外的市民之森賣店販售的『牛奶霜淇淋』被譽為函館第一，是必吃美食。",
            historyCulture: "於1898年由法國派遣的八位修女所創建，是日本第一座女子修道院。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">參觀重點</span>：欣賞米迦勒與聖女貞德的雕像，感受莊嚴寧靜的氛圍。</li><li><span class="emphasis">必吃美食</span>：市民之森賣店的<span class=\"emphasis\">牛奶霜淇淋</span>，奶香極為濃郁。</li><li><span class="emphasis">必買伴手禮</span>：修女們手工製作的<span class=\"emphasis\">瑪德蓮蛋糕</span>與<span class=\"emphasis\">奶油餅乾</span>。</li></ul>`
        },
        {
            name: "長谷川商店 (烤雞肉串便當)",
            type: "美食",
            mapUrl: "https://maps.app.goo.gl/z6oK4P5J8g4bS9H16",
            parkingInfo: "位於金森倉庫附近，可使用周邊的收費停車場。",
            expertRec: "函館市民的真正靈魂美食，看似平凡的烤肉串便當卻有著令人上癮的美味。雖然名為『雞肉串』，但使用的其實是豬肉，是函館的特色之一。",
            historyCulture: "看板料理：<span class=\"emphasis\">やきとり弁当 (烤雞肉串便當)</span>。可以自選鹽味、醬油或獨特的旨辛醬。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">點餐技巧</span>：推薦選擇經典的『鹽味』或『醬油』口味。</li><li><span class="emphasis">獨特吃法</span>：當地人會利用便當盒側邊的溝槽，將肉串從竹籤上刮下來，方便與白飯一同享用。</li><li><span class="emphasis">拍照點</span>：拍攝打開便當盒後，烤肉串鋪滿白飯的誘人畫面。</li></ul>`
        },
        {
            name: "函館 蔦屋書店",
            type: "景點",
            mapUrl: "https://maps.app.goo.gl/FkGj7m8bZt4rC6F37",
            parkingInfo: "設有大型免費專用停車場。",
            expertRec: "不僅是書店，更是一個結合了書籍、音樂、咖啡與文創商品的複合式生活風格空間。建築設計優美，空間開闊，非常適合悠閒度過一個下午。",
            historyCulture: "以『生活提案』為核心概念，將書籍按照主題分區，創造出獨特的閱讀與購物體驗。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">體驗重點</span>：在星巴克點一杯咖啡，自由地在書店內尋找座位閱讀。</li><li><span class="emphasis">購物重點</span>：尋找北海道在地設計師的文創商品與特色雜貨。</li><li><span class="emphasis">絕佳拍照點</span>：書店內挑高的書牆、充滿設計感的空間佈置。</li></ul>`
        },
    ],

    // Data for Accommodation section
    accommodation: [
        {
            day: "1-4",
            city: "函館",
            name: "La Vista 函館灣",
            url: "https://maps.app.goo.gl/S6UfE6aT8z5gY8Qy7",
            parking: "設有立體停車場，費用約 ¥1,000/晚，採先到先停制。",
            convenienceStores: [
                { brand: "Lawson", name: "ローソン 函館ベイエリア店" },
                { brand: "Seicomart", name: "セイコーマート 末広町店" }
            ]
        }
    ],
    
    // Data for Transport Pass section
    transportPass: {
        title: "核心交通票券：函館市電一日/二日券",
        details: {
            "類型": "市電専用1日乗車券 或 市電・函館バス共通1日・2日乗車券",
            "費用 (市電1日)": "大人 600日圓",
            "購買地點": "函館站前觀光案內所、市電車內、部分飯店櫃檯。",
        },
        description: `<p><span class="emphasis">票券價值解析：</span>函館的主要景點（朝市、灣區、元町、五稜郭、湯之川）幾乎都在市電沿線。單趟車資約210-260日圓，一天內搭乘3次以上即可回本，是函館市區觀光的最佳選擇。</p>`
    },

    transportPassAnalysis: null,

    // Data for Transport Summary table
    transportSummary: [
        { day: 1, route: "機場→函館站", transport: "機場接駁巴士", time: "依航班", cost: "¥500" },
        { day: 2, route: "市區觀光", transport: "函館市電", time: "全日", cost: "一日券" },
        { day: 3, route: "市區觀光", transport: "函館市電", time: "全日", cost: "一日券" },
        { day: 4, route: "→修道院/書店", transport: "函館巴士", time: "全日", cost: "自理" },
        { day: 5, route: "函館站→機場", transport: "機場接駁巴士", time: "依航班", cost: "¥500" }
    ],

    // Data for Transport Tactics list
    transportTactics: [
        '<span class="emphasis">活用市電:</span> 函館市電是CP值最高的交通工具，事先規劃好沿線景點能大幅提升效率。',
        '<span class="emphasis">IC卡通用:</span> 日本全國通用的IC卡 (如 Suica, ICOCA) 均可在函館的市電與巴士上使用。',
        '<span class="emphasis">巴士路線:</span> 前往函館山麓纜車站、女子修道院、蔦屋書店等不在市電主線上的景點，需搭配函館巴士。'
    ],

    // Data for Preparation section
    prepList: {
        description: "這份清單已根據函館5天的行程進行客製化。請在出發前逐一確認。",
        categories: [
            {
                category: '重要文件與預訂',
                items: [
                    '<span class="emphasis">護照與簽證</span>: 確認護照效期超過6個月。',
                    '<span class="emphasis">電子機票 & 住宿憑證</span>: 儲存所有預訂確認信。',
                    '<span class="emphasis">旅遊保險</span>: 投保旅遊平安險與不便險。'
                ]
            },
            {
                category: '交通與票券',
                items: [
                    '<span class="emphasis">函館市電券</span>: 抵達函館站後，可先在觀光案內所購買所需天數的市電券。',
                    '<span class="emphasis">IC卡 (ICOCA/SUICA)</span>: 準備或儲值一張IC卡，方便搭乘巴士或在便利商店消費。'
                ]
            },
            {
                category: '衣物與裝備',
                items: [
                    '<span class="emphasis">舒適的鞋子</span>: 行程包含大量步行，特別是在元町的坡道上。',
                    '<span class="emphasis">洋蔥式穿搭</span>: 北海道日夜溫差大，即使是夏季，晚上前往函館山也需要準備防風外套。',
                    '<span class="emphasis">防滑鞋 (冬季)</span>: 若在冬季來訪，務必穿著具備防滑功能的雪靴。'
                ]
            },
        ]
    },

    prepMemos: [
        {
            title: "函館的問候",
            content: "函館人非常友善，簡單的日語問候如「こんにちは (Konnichiwa)」和「ありがとう (Arigato)」會讓您的旅程更加愉快。"
        },
        {
            title: "市電搭乘禮儀",
            content: "函館市電採『後門上車、前門下車』。上車時抽取『整理券』，下車時將整理券與車資一同投入司機旁的運賃箱。"
        }
    ],

    prepExpertTips: [
        {
            title: "通訊建議",
            content: "函館市區訊號良好，建議購買吃到飽流量的SIM卡或租借Pocket WiFi。"
        },
        {
            title: "貨幣與支付",
            content: "市區多數店家接受信用卡與電子支付，但在函館朝市的部分小攤販可能只收現金。"
        }
    ],

    // Main data for the daily itinerary
    dailyData: {
        day1: {
            title: '序章・米其林三星的夜', date: 'Day 1', location: '台灣 → 函館', timeAnalysis: { travel: 3.5, activity: 2.5 },
            timeline: [
                { time: '下午', type: '✈️', event: '航班飛行 & 抵達函館機場 (HKD)' },
                { time: '16:00-16:30', type: '🚌', event: '機場交通: 搭乘機場接駁巴士前往「JR函館站」', cost: '¥500'},
                { time: '16:30-17:30', type: '🏨', event: '飯店Check-in: <a href="https://maps.app.goo.gl/S6UfE6aT8z5gY8Qy7" target="_blank" class="text-blue-600 hover:underline">La Vista 函館灣</a> & 稍作休息'},
                { time: '17:30-18:30', type: '🍽️', event: '晚餐: <a href="https://maps.app.goo.gl/x8TzExL62R2r57Yd6" target="_blank" class="text-blue-600 hover:underline">函館麵廚房 味彩本店</a>', description: '品嚐函館經典的鹽味拉麵。<span class="emphasis">【美食任務：鹽味拉麵已達成】</span>', parkingInfo: "無專用停車場，請使用五稜郭周邊的收費停車場。" },
                { time: '19:00-21:00', type: '🌃', event: '經典絕景: <a href="https://maps.app.goo.gl/7g6Yw8ZkR6b1bZLK8" target="_blank" class="text-blue-600 hover:underline">函館山纜車 & 夜景</a>', description: '欣賞世界三大夜景之一的「百萬夜景」。', awardHighlight: "日本三大夜景 & 米其林三星", ticketInfo: "纜車來回: 大人 1,800日圓" },
                { time: '21:30', type: '🏨', event: '返回飯店'}
            ],
            intel: {
                ropeway_hack: { title: '函館山纜車攻略', text: '纜車約10分鐘一班。為避開團體人潮，建議在日落前提早或稍晚（約20:00後）上山。山上風大，務必攜帶防風外套。' }
            },
            insights: {
                michelin_star: { title: '<span class="emphasis">米其林三星的價值</span>', text: '函館山夜景被《米其林綠色指南・日本》評為最高等級的三顆星，代表「值得專程前往」的景點。其獨特的扇形地貌與璀璨的城市燈火，是您函館之旅的完美開端。' }
            }
        },
        day2: {
            title: '港都的活力・朝市與灣區散策', date: 'Day 2', location: '函館市區', timeAnalysis: { travel: 1.0, activity: 7.0 },
            timeline: [
                 { time: '08:00-10:30', type: '🦞', event: '早餐 & 探索: <a href="https://maps.app.goo.gl/wWJk8WzJ9f8qC8sJ9" target="_blank" class="text-blue-600 hover:underline">函館朝市</a>', description: '品嚐自選海鮮丼，並挑戰活釣花枝。<span class="emphasis">【美食任務：海鮮丼 & 活釣花枝已達成】</span>', stay: '約 2.5 小時' },
                 { time: '10:30-13:00', type: '🛍️', event: '灣區散策: <a href="https://maps.app.goo.gl/r6m8R5iYpG7VbYd19" target="_blank" class="text-blue-600 hover:underline">金森紅磚倉庫</a>', description: '在充滿異國風情的倉庫群中購物與拍照。', stay: '約 2.5 小時' },
                 { time: '13:00-14:00', type: '🍔', event: '午餐: <a href="https://maps.app.goo.gl/d8t6Y3f8d6G3S9y29" target="_blank" class="text-blue-600 hover:underline">幸運小丑漢堡 (灣區本店)</a>', description: '品嚐函館的靈魂美食「中華雞腿漢堡」。<span class="emphasis">【美食任務：幸運小丑漢堡已達成】</span>' },
                 { time: '14:00-17:00', type: '🚶', event: '元町地區漫步', description: '從 <a href="https://maps.app.goo.gl/3fK9X3hF2qL8S4H2A" target="_blank" class="text-blue-600 hover:underline">八幡坂</a> 開始，探索元町公園與教會群。', stay: '約 3 小時'},
                 { time: '17:30', type: '🏨', event: '返回飯店休息，享受飯店頂樓的露天溫泉。'},
                 { time: '19:30', type: '🍽️', event: '晚餐: 灣區周邊自理或飯店餐廳'}
            ],
            intel: {
                transport_pass: { title: '交通TIPS：市電一日券', text: '本日行程集中在步行可達的範圍，但若想節省體力，可從「函館站前」搭乘市電至「十字街」，開始您的灣區與元町之旅。' }
            },
            insights: {
                port_city_history: { title: '文化見解：港口的記憶', text: '金森倉庫與元町的教會群，都見證了函館作為日本最早開放的國際貿易港之一的歷史。漫步其中，可以感受到當時東西文化交融的獨特氛圍。' }
            }
        },
        day3: {
            title: '星形要塞與溫泉療癒', date: 'Day 3', location: '函館市區', timeAnalysis: { travel: 2.0, activity: 6.0 },
            timeline: [
                { time: '09:00-09:30', type: '🚆', event: '搭乘函館市電前往「五稜郭公園前」。', cost: '市電一日券'},
                { time: '09:30-12:30', type: '🏯', event: '歷史巡禮: <a href="https://maps.app.goo.gl/kX7N4m2G5T6tS9Zt7" target="_blank" class="text-blue-600 hover:underline">五稜郭公園 & 五稜郭塔</a>', description: '登上塔頂俯瞰星形要塞全景。', awardHighlight: "日本100名城", ticketInfo: "塔展望台: 大人 1,000日圓", stay: '3 小時' },
                { time: '12:30-13:30', type: '🍽️', event: '午餐: <a href="https://maps.app.goo.gl/x8TzExL62R2r57Yd6" target="_blank" class="text-blue-600 hover:underline">函館麵廚房 味彩 (五稜郭本店)</a>', description: '在五稜郭塔旁品嚐經典鹽味拉麵。' },
                { time: '14:00-14:30', type: '🚆', event: '搭乘函館市電前往「湯之川溫泉」區。', cost: '市電一日券'},
                { time: '14:30-16:00', type: '🐒', event: '趣味景點: <a href="https://maps.app.goo.gl/eB4vWjB1F6kY7rBw7" target="_blank" class="text-blue-600 hover:underline">函館市熱帶植物園</a>', description: '觀賞冬季限定的猴子泡溫泉。', ticketInfo: "大人 300日圓", stay: '約 1.5 小時' },
                { time: '16:00-17:00', type: '♨️', event: '體驗湯之川溫泉足湯。'},
                { time: '18:30', type: '🍽️', event: '晚餐: <a href="https://maps.app.goo.gl/Bjs4K6wP2fK6Y2B58" target="_blank" class="text-blue-600 hover:underline">函館ひつじ</a>', description: '品嚐北海道特色美食「成吉思汗烤肉」。<span class="emphasis">【美食任務：成吉思汗烤肉已達成】</span>'},
            ],
            intel: {
                goryokaku_hack: { title: '五稜郭攻略', text: '建議先上<span class="emphasis">五稜郭塔</span>，對星形城郭有整體概念後，再下去公園內的<span class="emphasis">箱館奉行所</span>參觀，遊覽會更有方向感。' }
            },
            insights: {
                hakodate_war: { title: '歷史故事：箱館戰爭的終章', text: '五稜郭是幕末武士精神的最後堡壘。新選組副長土方歲三在此奮戰至最後一刻，為這段歷史增添了濃厚的悲劇英雄色彩。' }
            }
        },
        day4: {
            title: '修道院的寧靜與市民美食', date: 'Day 4', location: '函館市郊 & 市區', timeAnalysis: { travel: 2.5, activity: 5.5 },
            timeline: [
                 { time: '09:00-10:00', type: '🚌', event: '搭乘函館巴士前往「特拉普派斯汀修道院」。', cost: '自理'},
                 { time: '10:00-12:00', type: '⛪', event: '寧靜巡禮: <a href="https://maps.app.goo.gl/LzY2cDBr6yS1G42t7" target="_blank" class="text-blue-600 hover:underline">特拉普派斯汀女子修道院</a>', description: '品嚐被譽為函館第一的牛奶霜淇淋。<span class="emphasis">【美食任務：特色霜淇淋已達成】</span>', stay: '約 2 小時' },
                 { time: '12:00-13:00', type: '🚌', event: '搭乘巴士返回市區。'},
                 { time: '13:00-14:00', type: '🍱', event: '午餐: <a href="https://maps.app.goo.gl/z6oK4P5J8g4bS9H16" target="_blank" class="text-blue-600 hover:underline">長谷川商店</a>', description: '體驗函館市民的靈魂美食「烤雞肉串便當」。<span class="emphasis">【美食任務：烤雞肉串便當已達成】</span>' },
                 { time: '14:30-17:30', type: '📚', event: '文青時光: <a href="https://maps.app.goo.gl/FkGj7m8bZt4rC6F37" target="_blank" class="text-blue-600 hover:underline">函館 蔦屋書店</a>', description: '在號稱日本最美的書店之一享受悠閒下午。', stay: '約 3 小時'},
                 { time: '18:00', type: '🛍️', event: '最後伴手禮採購 (函館站周邊)'},
                 { time: '19:30', type: '🍽️', event: '晚餐: 函館站前 大門橫丁居酒屋', description: '在充滿昭和風情的小巷中，體驗在地居酒屋文化。<span class="emphasis">【美食任務：在地居酒屋已達成】</span>'}
            ],
            intel: {
                bus_schedule: { title: '巴士交通TIPS', text: '前往女子修道院與蔦屋書店的巴士班次相對較少，務必在出發前使用 Google Maps 或官網查詢好來回的時刻表。' }
            },
            insights: {
                yakitori_bento: { title: '文化見解：名不符實的靈魂美食', text: '長谷川商店的「やきとり弁当」(烤雞肉串便當) 雖然名字是雞肉，但使用的卻是豬肉。這是函館地區的特殊文化，據說是因為過去豬肉比雞肉更便宜普及。' }
            }
        },
        day5: {
            title: '歸鄉・海之幸的最終回味', date: 'Day 5', location: '函館 → 台灣', timeAnalysis: { travel: 2.0, activity: 2.0 },
            timeline: [
                { time: '08:30-10:00', type: '🍽️', event: '早餐: <a href="https://maps.app.goo.gl/wWJk8WzJ9f8qC8sJ9" target="_blank" class="text-blue-600 hover:underline">函館朝市</a> 最終巡禮', description: '把握最後機會，品嚐遺漏的海鮮或購買伴手禮。'},
                { time: '10:30', type: '🏨', event: '返回飯店領取行李 & Check-out'},
                { time: '11:00-11:30', type: '🚌', event: '前往函館機場 (HKD)', cost: '¥500'},
                { time: '下午', type: '✈️', event: '航班飛行: 函館 → 台灣' }
            ],
            intel: {
                airport_souvenir: { title: '機場伴手禮補給', text: '函館機場國內線航廈的商店比國際線更豐富。必買的「Snaffle\'s 起司蛋糕」和「LeTAO」在機場都設有專櫃，可以做最後的補貨。' }
            },
            insights: {
                sayonara: { title: '旅程的結語', text: '函館是一座充滿故事的城市，從百萬夜景的璀璨，到歷史巷弄的寧靜，再到市場美食的鮮活。希望這份行程能讓您滿載而歸。' }
            }
        }
    }
};
