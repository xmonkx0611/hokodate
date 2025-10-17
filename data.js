// --- TRIP DATA FILE ---
// Version 8.8.8: Optimized Day 12 Option B with Kojima Jeans Street itinerary.

const tripData = {
    // Meta information for the page
    meta: {
        title: "山陰山陽15日紀行：互動式作戰儀表板 v8.8 (主題攻略版)",
        mainTitle: "山陰山陽15日紀行"
    },

    // Food Mission data is kept for logic
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

    // NEW in v8.8: Data for the Themed Guides section
    themedGuidesData: {
        amulets: {
            title: "⛩️ 神社人氣御守攻略",
            description: "根據最新攻略整理，本趟行程中不可錯過的人氣御守與特色神社。",
            items: [
                { name: "出雲大社", prefecture: "島根", popular: "最強緣結御守『緣結守』、情侶專用『緣結筷』、勾玉守。", special: "神在月（農曆10月）期間有年度限定御守。" },
                { name: "嚴島神社", prefecture: "廣島", popular: "海上大鳥居造型的『交通安全守』、用神明衣料製作的『御神衣守』。", special: "配合潮汐變色的『潮汐守』是宮島限定。" },
                { name: "吉備津神社", prefecture: "岡山", popular: "可愛的『桃太郎守』主打勝負運與消災。", special: "桃子形狀的籤詩『桃子籤』是IG打卡必備。" },
                { name: "琴崎八幡宮", prefecture: "山口", popular: "（本次未排入）日本御守種類第一的神社，有880種以上，包含彩虹色的『七色御守』與牛仔布做的『丹寧御守』。" }
            ]
        },
        souvenirs: {
            title: "🛍️ 2025 最新伴手禮情報",
            description: "結合部落客實測與IG爆紅商品，整理出各縣必買的代表性伴手禮清單。",
            items: [
                { name: "岡山縣", items: ["<span class=\"emphasis\">吉備糰子</span>: 山方永壽堂是首選老舖。", "<span class=\"emphasis\">白桃系列</span>: 7-8月限定，整顆白桃製作的大福在IG上爆紅。", "<span class=\"emphasis\">晴王葡萄</span>: 9-10月產季，被譽為『葡萄界的勞斯萊斯』。"] },
                { name: "廣島縣", items: ["<span class=\"emphasis\">紅葉饅頭</span>: 除了傳統口味，『炸紅葉饅頭』是宮島本店限定的現炸美食。", "<span class=\"emphasis\">八天堂奶油麵包</span>: 爆漿奶油內餡是其最大特色。", "<span class=\"emphasis\">廣島檸檬系列</span>: 檸檬蛋糕、檸檬鹽等都是人氣商品。"] },
                { name: "鳥取縣", items: ["<span class=\"emphasis\">二十世紀梨系列</span>: 梨子果凍、梨子酒等都是代表。", "<span class=\"emphasis\">柯南/鬼太郎主題商品</span>: 在青山剛昌故鄉館與水木茂大道限定販售。", "<span class=\"emphasis\">松葉蟹相關</span>: 11-3月產季，蟹味噌罐頭是老饕最愛。"] },
                { name: "島根縣", items: ["<span class=\"emphasis\">緣結筷</span>: 出雲大社的代表性伴手禮，適合情侶夫妻。", "<span class=\"emphasis\">泥鰍舞饅頭</span>: 造型可愛，極具地方特色。", "<span class=\"emphasis\">宍道湖蜆系列</span>: 蜆湯包、蜆醬油，濃縮湖泊精華。"] }
            ]
        },
        animePilgrimage: {
            title: "🎥 動漫與日劇聖地巡禮",
            description: "本趟旅程將行經多個知名動漫與日劇的取景地，聖地巡禮地圖如下。",
            items: [
                { name: "《名偵探柯南》", locations: ["鳥取站", "青山剛昌故鄉館", "米花商店街"] },
                { name: "《鬼太郎》", locations: ["境港水木茂大道", "妖怪神社"] },
                { name: "《玉響～tamayura～》", locations: ["竹原町並保存地區（主要舞台）"] },
                { name: "電影《追憶》", locations: ["石見銀山（大森銀山遺跡）"] },
                { name: "日劇《我們的存在》", locations: ["出雲大社前參道"] }
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
                    { name: "津山城（鶴山公園）", prefecture: "岡山縣", details: "約1000株染井吉野櫻，最佳觀賞期：4月上旬～中旬。" },
                    { name: "千光寺公園", prefecture: "廣島縣尾道市", details: "約1500株櫻花與瀨戶內海的絕景，最佳觀賞期：3月下旬～4月中旬，有夜間點燈。" }
                ]
            },
            {
                title: "🍁 日本紅葉名所100選",
                theme: "border-orange-300",
                locations: [
                    { name: "足立美術館", prefecture: "島根縣安來市", details: "日本庭園第一的紅葉美景，見頃：11月中旬～12月上旬。" },
                    { name: "宮島紅葉谷公園", prefecture: "廣島縣廿日市市", details: "約700株楓樹與嚴島神社相映成趣，見頃：11月中旬～下旬。" },
                    { name: "大山", prefecture: "鳥取縣西伯郡", details: "西日本最高峰的壯麗紅葉，見頃：10月下旬～11月上旬。" }
                ]
            },
            {
                title: "🌅 日本夕陽百選",
                theme: "border-red-300",
                locations: [
                    { name: "宍道湖", prefecture: "島根縣松江市", details: "從島根縣立美術館觀賞湖面夕陽，冬季可見候鳥剪影。" },
                    { name: "稻佐之濱", prefecture: "島根縣出雲市", details: "神話聖地與日本海的壯闊日落，弁天神社是經典構圖。" },
                    { name: "鷲羽山", prefecture: "岡山縣倉敷市", details: "瀨戶大橋與瀨戶內海群島的剪影，是代表性的夕陽絕景。" }
                ]
            },
            {
                title: "🏯 日本100名城",
                theme: "border-gray-400",
                locations: [
                    { name: "松江城 (No.64)", prefecture: "島根縣", details: "國寶五城與現存12天守之一，別名「千鳥城」。" },
                    { name: "鳥取城 (No.61)", prefecture: "鳥取縣", details: "建於久松山上的石垣遺跡，見證了歷史的變遷。" },
                    { name: "津山城 (No.67)", prefecture: "岡山縣", details: "擁有高達45公尺的宏偉石牆，也是櫻花名所。" },
                    { name: "備中松山城 (No.68)", prefecture: "岡山縣高梁市", details: "日本最高的現存天守山城，有「天空之城」的美譽。" },
                    { name: "岡山城 (No.70)", prefecture: "岡山縣", details: "黑色外觀被稱為「烏城」，與後樂園相望。" },
                    { name: "廣島城 (No.73)", prefecture: "廣島縣", details: "別名「鯉城」，天守閣為戰後復原的樣式。" }
                ]
            }
        ],
        greatThree: [
            {
                title: "🌟 日本三景",
                theme: "border-blue-300",
                status: "入選",
                location: {
                    name: "宮島（嚴島）",
                    prefecture: "廣島縣",
                    description: "江戶時代儒學家林春齋認證，以世界遺產嚴島神社與海上大鳥居聞名於世。"
                },
                others: "松島（宮城縣）、天橋立（京都府）"
            },
            {
                title: "🌳 日本三大名園",
                theme: "border-green-300",
                status: "入選",
                location: {
                    name: "岡山後樂園",
                    prefecture: "岡山縣",
                    description: "擁有300年歷史的迴遊式庭園，巧妙地將岡山城作為「借景」，榮獲米其林三星評價。"
                },
                others: "兼六園（石川縣）、偕樂園（茨城縣）"
            },
            {
                title: "🎆 日本三大祭典",
                theme: "border-purple-300",
                status: "地區精選",
                description: "雖然未入選全國性的三大祭典，但本地區擁有極具魅力的傳統祭典。",
                others: "祇園祭（京都）、天神祭（大阪）、神田祭（東京）",
                alternative_title: "特色祭典",
                alternatives: ["松江鼕祭 (10月)", "鳥取鏘鏘祭 (8月)", "宮島管絃祭 (7-8月)"]
            },
            {
                title: "🌃 日本三大夜景",
                theme: "border-indigo-300",
                status: "地區精選",
                description: "此地區雖無名列三大夜景，但仍有值得一看的特色夜景。",
                others: "函館山（北海道）、摩耶山（兵庫縣）、稻佐山（長崎縣）",
                alternative_title: "特色夜景",
                alternatives: ["千光寺公園（尾道市）", "倉敷美觀地區夜間點燈", "宮島嚴島神社夜間點燈"]
            },
            {
                title: "♨️ 日本三名泉",
                theme: "border-cyan-300",
                status: "地區精選",
                description: "此地區未包含日本三大名泉，但卻是優質溫泉的寶庫。",
                others: "有馬溫泉（兵庫縣）、草津溫泉（群馬縣）、下呂溫泉（岐阜縣）",
                alternative_title: "特色溫泉",
                alternatives: ["玉造溫泉（島根縣，美肌之湯）", "三朝溫泉（鳥取縣，療癒之湯）", "皆生溫泉（鳥取縣，面海溫泉）"]
            }
        ]
    },

    // Data for the seasonal highlights section
    seasonalData: {
        spring: {
            title: '春 (3-5月)',
            theme_color: 'bg-pink-100',
            icon: '🌸',
            highlights: [
                '<span class="emphasis">櫻花盛宴</span>: 岡山後樂園、津山城都是「日本賞櫻名所100選」。',
                '<span class="emphasis">牡丹祭</span>: 島根大根島牡丹節 (4月下旬-5月上旬)。',
                '<span class="emphasis">廣島花卉節</span>: 5月3-5日在廣島和平紀念公園舉行。'
            ],
            foods: [
                '<span class="emphasis">時令水果</span>: 草莓、德拉瓦葡萄 (4月下旬開始)。',
                '<span class="emphasis">限定美食</span>: 春筍料理、櫻鯛。'
            ]
        },
        summer: {
            title: '夏 (6-8月)',
            theme_color: 'bg-blue-100',
            icon: '☀️',
            highlights: [
                '<span class="emphasis">祭典熱潮</span>: 鳥取鏘鏘祭 (8月)、玉造溫泉夏祭 (7-8月)。',
                '<span class="emphasis">花火大會</span>: 宮島水中花火大會是代表性活動。',
                '<span class="emphasis">海濱風情</span>: 浦富海岸水上活動、鳥取砂丘滑沙。'
            ],
            foods: [
                '<span class="emphasis">水果之王</span>: 岡山白桃 (7-8月)、鳥取二十世紀梨 (8月開始)。',
                '<span class="emphasis">限定美食</span>: 香魚、素麵。'
            ]
        },
        autumn: {
            title: '秋 (9-11月)',
            theme_color: 'bg-orange-100',
            icon: '🍁',
            highlights: [
                '<span class="emphasis">紅葉絕景</span>: 廣島紅葉谷公園、岡山後樂園、足立美術館。',
                '<span class="emphasis">神話季節</span>: 出雲大社「神在月」(農曆10月)。',
                '<span class="emphasis">百年祭典</span>: 松江鼕祭 (10月)。'
            ],
            foods: [
                '<span class="emphasis">時令水果</span>: 栗子、柿子、廣島檸檬 (10月開始)。',
                '<span class="emphasis">限定美食</span>: 松茸、秋鮭、牡蠣季開始。'
            ]
        },
        winter: {
            title: '冬 (12-2月)',
            theme_color: 'bg-indigo-100',
            icon: '❄️',
            highlights: [
                '<span class="emphasis">溫泉療癒</span>: 玉造溫泉 (神之湯)、三朝溫泉 (高濃度 radon 泉)。',
                '<span class="emphasis">冬季燈飾</span>: 鳥取花迴廊冬季點燈 (11月-1月)。',
                '<span class="emphasis">雪景</span>: 山陰地區冬季多雪，可欣賞雪化妝的松江城。'
            ],
            foods: [
                '<span class="emphasis">海鮮極品</span>: <span class="emphasis">松葉蟹</span> (11月解禁)、廣島牡蠣。',
                '<span class="emphasis">時令水果</span>: 山口蜜柑、文旦柚。'
            ]
        }
    },

    // Data for the detailed highlights section in Overview
    detailedHighlights: [
        {
            name: "ばくだん屋 (辣味沾麵)",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=ばくだん屋+ekie店",
            parkingInfo: "位於廣島站ekie內，可使用車站合作的『広島駅屋上駐車場』(費用約 ¥400/小時，當日最高 ¥1,500)。",
            expertRec: "宵夜/特色美食：廣島獨有的 B 級美食。湯汁冰涼，可自選辣度，口感清爽，適合深夜挑戰。",
            historyCulture: "看板料理：<span class=\"emphasis\">辛いつけ麺 (辣味沾麵)</span>。人氣搭配：<span class=\"emphasis\">辣味飯 (辛い飯)</span>、<span class=\"emphasis\">搭配水煮蛋</span>。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">料理特色</span>：冰鎮的拉麵條搭配冰涼的辣味湯汁，清爽解膩。</li><li><span class="emphasis">IG/FB 人氣</span>：拍攝挑戰極辣的表情。</li><li><span class="emphasis">拍照點</span>：拉麵的特寫。</li></ul>`
        },
        {
            name: "嚴島神社",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=嚴島神社",
            ticketInfo: "大人 300日圓",
            parkingInfo: "車輛需停於「宮島口」渡輪站周邊停車場，費用約 ¥1000-1600/天。",
            expertRec: "工頭堅建議：下午前往可拍攝背光夕陽，退潮時可走到鳥居下方。嚴島神社迴廊在漲潮時會倒映在海上，非常壯觀。<span class=\"emphasis\">賞月名所</span>。",
            historyCulture: "世界遺產，創建於593年，為<span class=\"emphasis\">日本三景之一</span>。以其獨特的<span class=\"emphasis\">海上大鳥居</span>聞名。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">參拜重點</span>：務必查詢潮汐表！滿潮感受「漂浮感」，乾潮時可步行至鳥居下方。</li><li><span class="emphasis">御守/御朱印</span>：<span class=\"emphasis\">交通安全守</span> (海上鳥居造型) 極具人氣。</li><li><span class="emphasis">絕佳拍照點</span>：大鳥居、漲潮時的社殿迴廊倒影、彌山展望台。</li></ul>`
        },
        {
            name: "あなごめし うえの (星鰻飯)",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=あなごめし+うえの+宮島口本店",
            parkingInfo: "店家後方有5個免費車位(極易客滿)，建議使用宮島口周邊收費停車場。",
            expertRec: "百年老店：宮島口名物。其<span class=\"emphasis\">星鰻飯便當</span>即使冷掉也美味，是機場前必買的「儀式感便當」。",
            historyCulture: "看板料理：<span class=\"emphasis\">星鰻飯 (あなごめし)</span>。使用宮島口特產的星鰻製作。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">料理特色</span>：星鰻肉質比鰻魚<span class="emphasis">更細緻清爽</span>，醬汁入味卻不搶戲。</li><li><span class="emphasis">IG/FB 人氣</span>：拍攝充滿儀式感的<span class="emphasis">木製便當盒</span>。</li><li><span class="emphasis">拍照點</span>：店門口的古樸日式建築、星鰻飯便當的特寫。</li></ul>`
        },
        {
            name: "すし丸 (迴轉壽司)",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=すし丸+ekie広島店",
            parkingInfo: "位於廣島站ekie內，可使用車站合作的『広島駅屋上駐車場』(費用約 ¥400/小時)。",
            expertRec: "位於廣島車站內的便利選擇，能輕鬆品嚐到瀨戶內海的新鮮漁獲，適合做為一日行程的完美收尾。",
            historyCulture: "看板料理：<span class=\"emphasis\">地魚三貫</span> (當日推薦的本地漁獲)、<span class=\"emphasis\">炙燒壽司</span>。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">料理特色</span>：主打瀨戶內海直送的「地魚」，可以吃到其他地區少見的壽司種類。</li><li><span class="emphasis">IG/FB 人氣</span>：拍攝迴轉帶上琳瑯滿目的壽司盤，以及特寫當日限定的豪華壽司。</li><li><span class="emphasis">拍照點</span>：各種壽司的特寫照片。</li></ul>`
        },
        {
            name: "廣島和平紀念公園",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=廣島和平紀念公園",
            ticketInfo: "公園免費, 資料館: 大人 200日圓",
            parkingInfo: "周邊停車場如「広島市中央駐車場」(¥180/30分)。",
            expertRec: "世界文化遺產，是這座城市從灰燼中重生的象徵。建議放慢腳步，沉靜地感受此地傳達的和平訊息。",
            historyCulture: "為紀念1945年原子彈爆炸而建，園區內的<span class=\"emphasis\">原爆圓頂館</span>是爆炸後僅存的建築之一，保留至今以警示後人。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">參觀重點</span>：原爆圓頂館、和平紀念資料館、和平之燈與和平鐘。</li><li><span class="emphasis">文化體驗</span>：資料館內展示了令人震撼的歷史文物與倖存者見證。</li><li><span class="emphasis">拍照點</span>：從和平池望向原爆圓頂館的軸線是經典構圖。</li></ul>`
        },
        {
            name: "麗ちゃん (廣島燒)",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=麗ちゃん+広島",
            parkingInfo: "位於廣島站ASSE內，可使用車站合作的停車場。",
            expertRec: "體驗廣島靈魂美食的代表性名店，位於車站內，交通極為方便，總是大排長龍，是遊客與在地人的共同選擇。",
            historyCulture: "看板料理：<span class=\"emphasis\">廣島燒 (お好み焼き)</span>。特色是先鋪上一層麵糊，再堆疊大量高麗菜、豆芽菜、肉片，最後蓋上炒麵與雞蛋。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">料理特色</span>：與大阪燒的混合式作法不同，廣島燒層次分明，口感豐富。</li><li><span class="emphasis">人氣搭配</span>：可選擇加入牡蠣或起司等豪華配料。</li><li><span class="emphasis">拍照點</span>：拍攝師傅在鐵板上熟練製作的過程，以及剖開廣島燒的斷面。</li></ul>`
        },
        {
            name: "松江城 & 宍道湖夕陽",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=松江城",
            ticketInfo: "天守閣: 680日圓 (外國人340日圓)",
            parkingInfo: "松江城大手前駐車場(¥300/首小時)。島根縣立美術館(觀夕陽點)有免費停車場。",
            expertRec: "專家見解：國寶五城之一，因屋頂造型像<span class=\"emphasis\">千鳥展翅</span>而得名。<span class=\"emphasis\">宍道湖夕陽</span>被列入日本夕陽百選，同時也是<span class=\"emphasis\">絕佳賞月聖地</span>。",
            historyCulture: "日本<span class=\"emphasis\">國寶五城之一</span>，山陰地區唯一現存天守。宍道湖是日本第七大湖，其夕陽景色聞名全國。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">城與園</span>：登上松江城天守，將宍道湖美景「借景」入園。推薦體驗<span class="emphasis">堀川遊覽船</span>。</li><li><span class="emphasis">夕陽攻略</span>：最佳觀賞點為<span class="emphasis">島根縣立美術館</span>面向宍道湖的玻璃帷幕大廳。</li><li><span class="emphasis">拍照點</span>：天守閣外觀、宍道湖夕陽下的嫁ヶ島剪影。</li></ul>`
        },
        {
            name: "八雲庵 (鴨肉蕎麥麵)",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=八雲庵",
            parkingInfo: "無專用停車場，請使用松江城周邊的『大手前駐車場』後步行前往。",
            expertRec: "文化體驗：位於松江城旁的古老武家屋敷建築中，品嚐<span class=\"emphasis\">鴨肉蕎麥麵</span>，是富有松江氛圍的用餐選擇。",
            historyCulture: "看板料理：<span class=\"emphasis\">鴨肉蕎麥麵 (鴨なんばそば)</span>。餐廳本身是古老的武家屋敷建築。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">料理特色</span>：鴨肉湯頭濃郁，搭配松江特有的出雲蕎麥麵。</li><li><span class="emphasis">環境特色</span>：院子裡有小橋流水，用餐環境極佳。</li><li><span class="emphasis">拍照點</span>：古色古香的用餐環境、鴨肉蕎麥麵熱氣騰騰的特寫。</li></ul>`
        },
        {
            name: "島根縣立古代出雲歴史博物館",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=島根県立古代出雲歴史博物館",
            ticketInfo: "常設展: 620日圓 (外國人310日圓)",
            parkingInfo: "設有免費停車場 (可與出雲大社共用)。",
            expertRec: "參拜出雲大社前的最佳『預習』地點。館內收藏了大量國寶級的出土文物，能讓您對出雲的神話與歷史有更深刻的理解。",
            historyCulture: "博物館的設計靈感來自於出雲大社，主要展出從<span class=\"emphasis\">加茂岩倉遺跡</span>和<span class=\"emphasis\">荒神谷遺跡</span>出土的大量銅劍、銅鐸和銅矛。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">參觀重點</span>：國寶展區的銅劍與銅鐸、平安時代出雲大社本殿的巨大『宇豆柱』復原模型。</li><li><span class="emphasis">建築之美</span>：博物館採用耐候鋼與玻璃帷幕，設計現代而莊重。</li><li><span class="emphasis">拍照點</span>：從中央大廳的玻璃帷幕拍攝出雲大社的景色。</li></ul>`
        },
        {
            name: "出雲大社 & 稻佐之濱夕陽",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=出雲大社",
            ticketInfo: "境內免費, 寶物殿 300日圓",
            parkingInfo: "出雲大社與稻佐之濱均設有大型免費停車場。",
            expertRec: "專家見解：日本最古老神社之一，以結緣聞名。<span class=\"emphasis\">稻佐之濱</span>是傳說中八百萬神明登陸地，是日本夕陽百選名所。",
            historyCulture: "主祭神為<span class=\"emphasis\">大國主大神</span>，以<span class=\"emphasis\">結緣</span>聞名。神樂殿<span class=\"emphasis\">長13公尺、重5.2噸的注連繩</span>為日本最大。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">參拜重點</span>：遵循獨特的<span class=\"emphasis\">「二拜四拍手一拜」</span>方式參拜。</li><li><span class="emphasis">夕陽攻略</span>：<span class="emphasis">稻佐之濱</span>是最佳觀賞點，拍攝巨型礁石上的<span class="emphasis">弁天神社</span>。</li><li><span class="emphasis">絕佳拍照點</span>：神樂殿巨大的注連繩、可愛<span class="emphasis">兔子雕像</span>、稻佐之濱的夕陽。</li></ul>`
        },
        {
            name: "羽根屋 本店 (割子蕎麥麵)",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=羽根屋+本店",
            parkingInfo: "店家無專用停車場，請使用JR出雲市站周邊的收費停車場 (約 ¥110/30分鐘)。",
            expertRec: "文化體驗：出雲的靈魂美食，以獨特的<span class=\"emphasis\">「三段式割子」</span>盛裝。參拜大社後必吃。",
            historyCulture: "看板料理：<span class=\"emphasis\">出雲割子蕎麥麵</span>。出雲蕎麥麵是日本三大蕎麥麵之一。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">料理特色</span>：連殼磨粉，顏色較深，香氣濃郁。</li><li><span class="emphasis">IG/FB 人氣</span>：拍攝三層堆疊的漆器碗，以及淋上醬汁的儀式感。</li><li><span class="emphasis">拍照點</span>：食物本身即是藝術品。</li></ul>`
        },
        {
            name: "石見銀山",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=石見銀山",
            ticketInfo: "龍源寺間步: 410日圓 (外國人200日圓)",
            parkingInfo: "世界遺產中心設有大型收費停車場，需轉乘巴士進入景區。",
            expertRec: "世界文化遺產，不僅是礦坑遺跡，更是一個完整的『山城』聚落。建議租借電動自行車，以更輕鬆的方式探索廣大的園區。",
            historyCulture: "從16世紀至20世紀，石見銀山是日本最大的銀礦，其產量曾佔全球的三分之一。遺跡範圍包含礦山、港口與溫泉小鎮。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">探索重點</span>：唯一對外開放的礦坑<span class="emphasis">龍源寺間步</span>、保留江戶風情的<span class="emphasis">大森地區</span>街道。</li><li><span class="emphasis">聖地巡禮</span>：這裡是電影《追憶》的取景地。</li><li><span class="emphasis">絕佳拍照點</span>：大森地區的古老街道、羅漢寺五百羅漢石像群。</li></ul>`
        },
        {
            name: "古民家カフェ&宿 晄 (AKARI)",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=すし丸+ekie広島店6",
            parkingInfo: "無專用停車場，請使用大森地區的公共停車場後步行前往。",
            expertRec: "在世界遺產的古街中，這家由百年古民家改建的咖啡廳提供了絕佳的休憩場所，能深刻體驗石見銀山的懷舊氛圍。",
            historyCulture: "看板料理：<span class=\"emphasis\">午間套餐 (週替わりランチ)</span>、<span class=\"emphasis\">手作蛋糕與咖啡</span>。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">料理特色</span>：使用當地食材製作的健康簡餐，菜色精緻。</li><li><span class="emphasis">環境特色</span>：保留了古民家的梁柱與格局，氣氛靜謐優雅。</li><li><span class="emphasis">拍照點</span>：從窗邊座位拍攝古街景色、精緻的餐點擺盤。</li></ul>`
        },
        {
            name: "足立美術館",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=足立美術館",
            ticketInfo: "大人 2,300日圓 (外國人 1,150日圓)",
            parkingInfo: "設有大型免費停車場 (約400車位)。另有從JR安來站出發的免費接駁車。",
            expertRec: "專家見解：庭園被譽為<span class=\"emphasis\">「活畫作」</span>，從室內各處的窗框望出去，每一景都像裱框的畫作。",
            historyCulture: "以近代日本畫家<span class=\"emphasis\">橫山大觀</span>的作品收藏聞名，但最著名的還是<span class=\"emphasis\">連續多年蟬聯日本庭園第一</span>的日式庭園。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">參觀重點</span>：欣賞「枯山水庭」、「白砂青松庭」等六座庭園，以及「生之掛軸」。</li><li><span class="emphasis">藝術焦點</span>：橫山大觀的收藏是館內鎮館之寶。</li><li><span class="emphasis">絕佳拍照點</span>：館內各處的觀景窗框。</li></ul>`
        },
        {
            name: "満洲味 (牛骨拉麵)",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=満洲味+米子",
            parkingInfo: "店家有專用停車場，價格不明。",
            expertRec: "米子地區牛骨拉麵的代表名店之一，以其清澈而濃郁的牛肉湯頭聞名，是體驗鳥取在地風味的絕佳選擇。",
            historyCulture: "看板料理：<span class=\"emphasis\">牛骨拉麵 (牛骨ラーメン)</span>。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">料理特色</span>：湯頭使用牛大骨長時間熬製，清爽不油膩，帶有獨特的甘甜味。</li><li><span class="emphasis">IG/FB 人氣</span>：拍攝清澈的琥珀色湯頭以及鋪在上面的叉燒。</li><li><span class="emphasis">拍照點</span>：熱騰騰的拉麵特寫。</li></ul>`
        },
        {
            name: "境港/水木茂大道",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=すし丸+ekie広島店7",
            parkingInfo: "周邊有多個收費停車場，當日最高約 ¥500-700。",
            expertRec: "動漫迷必訪聖地！整條街道充滿了《鬼太郎》中的妖怪們，從雕像、路燈到人孔蓋，處處都是驚喜，非常適合親子同樂。",
            historyCulture: "為紀念《鬼太郎》作者<span class=\"emphasis\">水木茂</span>而建的主題街道，全長約800公尺，沿途有超過170座妖怪青銅像。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">體驗重點</span>：在觀光案內所購買「妖怪導覽手冊」進行集章活動、尋找自己喜愛的妖怪銅像。</li><li><span class="emphasis">聖地巡禮</span>：參拜<span class=\"emphasis\">妖怪神社</span>、參觀<span class=\"emphasis\">水木茂紀念館</span>。</li><li><span class="emphasis">絕佳拍照點</span>：與各種妖怪銅像合照、搭乘鬼太郎列車。</li></ul>`
        },
        {
            name: "境港水産物直売センター",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=境港水産物直売センター",
            parkingInfo: "直賣中心設有大型免費停車場。",
            expertRec: "品嚐山陰新鮮海產的最佳地點，可以在此以實惠的價格享用最新鮮的海鮮丼，感受港口直送的美味。",
            historyCulture: "看板料理：<span class=\"emphasis\">海鮮丼</span>。境港以捕獲量日本第一的<span class=\"emphasis\">「紅楚蟹」</span>聞名，11-3月還有松葉蟹。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">料理特色</span>：依季節提供當令最新鮮的漁獲，價格非常實惠。</li><li><span class="emphasis">IG/FB 人氣</span>：拍攝鋪滿各種生魚片、色彩繽紛的海鮮丼。</li><li><span class="emphasis">環境特色</span>：充滿活力的魚市場氛圍。</li></ul>`
        },
        {
            name: "ガスト (家庭餐廳)",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=ガスト+米子駅前店",
            parkingInfo: "有合作停車場，於店家消費可折抵停車時數。",
            expertRec: "日本最普及的連鎖家庭餐廳之一，提供從日式、西式到中式的多樣化餐點，價格親民，是體驗在地日常飲食文化的好地方。",
            historyCulture: "看板料理：<span class=\"emphasis\">起司IN漢堡排 (チーズINハンバーグ)</span>、<span class=\"emphasis\">山盛りポテトフライ (堆成山的薯條)</span>。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">料理特色</span>：菜單豐富，滿足不同人的口味需求，並有飲料吧可以無限暢飲。</li><li><span class="emphasis">IG/FB 人氣</span>：拍攝切開漢堡排後流出起司的瞬間。</li><li><span class="emphasis">拍照點</span>：豐盛的餐點組合。</li></ul>`
        },
        {
            name: "倉吉白壁土藏群",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=倉吉白壁土藏群",
            parkingInfo: "觀光案內所旁有免費停車場。",
            expertRec: "彷彿走進江戶時代的古樸街道，紅色石州瓦與白色牆壁的對比非常上鏡，適合悠閒漫步，感受懷舊氛圍。",
            historyCulture: "沿著玉川而建的傳統建築群，在江戶、明治時期曾是商業中心。白壁土藏是當時的倉庫，現在多已改造成商店或咖啡館。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">體驗重點</span>：漫步於古街、欣賞玉川中的錦鯉、參觀赤瓦一號館至十六號館的特色小店。</li><li><span class="emphasis">美食推薦</span>：品嚐當地的<span class=\"emphasis\">打吹公園糰子</span>與<span class=\"emphasis\">梨子霜淇淋</span>。</li><li><span class="emphasis">絕佳拍照點</span>：石橋與白壁土藏的倒影是經典畫面。</li></ul>`
        },
        {
            name: "赤瓦五號館 久樂",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=すし丸+ekie広島店7",
            parkingInfo: "位於白壁土藏群徒步區，請使用觀光案內所旁的免費停車場。",
            expertRec: "在充滿歷史感的赤瓦建築中，品嚐鳥取特有的鄉土料理，是用餐與文化體驗的完美結合。",
            historyCulture: "看板料理：<span class=\"emphasis\">年糕涮涮鍋 (もちしゃぶ)</span>。將薄切的年糕片放入高湯中輕涮數秒即可食用，口感獨特。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">料理特色</span>：年糕涮涮鍋是鳥取中部的地方特色菜，值得一試。</li><li><span class="emphasis">環境特色</span>：餐廳本身就是景點的一部分，位於改建的古老倉庫「赤瓦」建築群中。</li><li><span class="emphasis">拍照點</span>：拍攝年糕在鍋中涮煮的過程、古色古香的用餐環境。</li></ul>`
        },
        {
            name: "青山剛昌故鄉館",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=青山剛昌ふるさと館",
            ticketInfo: "大人 700日圓",
            parkingInfo: "設有免費停車場。",
            expertRec: "柯南迷的終極聖地！從由良站（又稱柯南站）開始，整個小鎮都充滿了柯南元素，而故鄉館更是集大成之處。",
            historyCulture: "為紀念《名偵探柯南》作者<span class=\"emphasis\">青山剛昌</span>而設的博物館，展示了他的原畫手稿、創作歷程與各種偵探道具。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">館內體驗</span>：阿笠博士的黃色金龜車、少年偵探團銅像、可實際操作的<span class=\"emphasis\">變聲蝴蝶結</span>與<span class=\"emphasis\">渦輪滑板</span>。</li><li><span class="emphasis">周邊探索</span>：尋找「柯南大橋」與「米花商店街」上的各種角色銅像。</li><li><span class="emphasis">絕佳拍照點</span>：與館外的金龜車合照、在館內的工作室模擬區拍照。</li></ul>`
        },
        {
            name: "鳥取砂丘 & 砂之美術館",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=鳥取砂丘",
            ticketInfo: "砂丘免費, 砂之美術館: 大人 800日圓",
            parkingInfo: "砂丘市營停車場收費為 ¥500/次。砂之美術館有獨立免費停車場。",
            expertRec: "專家見解：建議帶<span class=\"emphasis\">防風眼鏡</span>。登上<span class=\"emphasis\">馬之背</span>，可眺望沙與海的交界線。砂之美術館的沙雕精緻度驚人，絕對值得一看。",
            historyCulture: "日本最大的海岸砂丘，歷經超過十萬年形成。以強風吹出的<span class=\"emphasis\">「風紋」</span>聞名。砂之美術館是世界唯一專門展示沙雕的室內美術館。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">體驗重點</span>：滑砂、滑翔傘或駱駝騎乘。</li><li><span class="emphasis">裝備建議</span>：穿防風外套並攜帶護目鏡，可租借「長靴」。</li><li><span class="emphasis">絕佳拍照點</span>：登上「馬之背」，拍攝風紋與遠方的日本海；美術館內精緻的沙雕作品。</li></ul>`
        },
        {
            name: "炭火焼肉 福ふく",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=炭火焼肉+福ふく+鳥取",
            parkingInfo: "店家有少量免費車位，若客滿請使用周邊收費停車場 (約 ¥100/30分鐘)。",
            expertRec: "專家推薦：品嚐鳥取和牛的頂級名店，<span class=\"emphasis\">油酸含量高</span>，脂肪熔點低，入口即化。",
            historyCulture: "看板料理：<span class=\"emphasis\">鳥取和牛燒肉</span>。人氣搭配：<span class=\"emphasis\">鳥取和牛油酸55特級部位</span>。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">料理特色</span>：<span class=\"emphasis\">高油酸</span>帶來入口即化的柔滑口感。</li><li><span class="emphasis">IG/FB 人氣</span>：拍攝和牛美麗的油花紋路。</li><li><span class="emphasis">拍照點</span>：特級肉品的近景、爐火上的燒烤特寫。</li></ul>`
        },
        {
            name: "すなば珈琲 (砂場咖啡)",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=すなば珈琲+鳥取駅前店",
            expertRec: "鳥取最知名的在地咖啡連鎖店，源自於當年星巴克尚未進駐鳥取時，當地知事一句「鳥取雖然沒有星巴克，但我們有日本第一的砂場」的玩笑話。",
            historyCulture: "招牌餐點：<span class=\"emphasis\">砂場特調咖啡</span>、<span class=\"emphasis\">各式鬆餅與聖代</span>。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">文化體驗</span>：感受鳥取人自豪的在地品牌精神。</li><li><span class="emphasis">IG/FB 人氣</span>：拍攝印有駱駝Logo的咖啡杯。</li><li><span class="emphasis">美食推薦</span>：早餐時段的套餐CP值很高。</li></ul>`
        },
        {
            name: "岡山城",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=岡山城",
            ticketInfo: "天守閣 400日圓，與後樂園共通券 640日圓",
            parkingInfo: "後樂園設有收費停車場 (¥100/小時)。",
            expertRec: "與雪白的「姬路城」形成鮮明對比，岡山城因其黑色的外觀而聞名。建議購買與後樂園的共通券，一同遊覽這兩個岡山地標。",
            historyCulture: "日本100名城之一，因其黑色外觀被稱為<span class=\"emphasis\">「烏城」</span>。天守閣曾於二戰中燒毀，現為戰後復原的樣式，內部設有博物館。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">體驗重點</span>：在天守閣內體驗<span class=\"emphasis\">城主或公主的服裝</span>（免費）、了解宇喜多秀家的歷史。</li><li><span class="emphasis">參觀重點</span>：天守閣頂層可360度眺望岡山市區與後樂園。</li><li><span class="emphasis">絕佳拍照點</span>：從後樂園隔著旭川拍攝岡山城的全景。</li></ul>`
        },
        {
            name: "後樂園",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=岡山後樂園",
            ticketInfo: "大人 410日圓，與岡山城共通券 640日圓",
            parkingInfo: "設有收費停車場 (¥100/小時)。",
            expertRec: "米其林三星評價的頂級庭園，無論何時來訪都有不同的美景。園區非常廣闊，建議至少安排1.5小時以上悠閒漫步。",
            historyCulture: "<span class=\"emphasis\">日本三大名園之一</span>，擁有超過300年歷史的迴遊式庭園。其設計巧妙地將遠方的岡山城作為<span class=\"emphasis\">「借景」</span>，融為庭園的一部分。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">庭園焦點</span>：唯心山、流店、寬闊的草皮與水路。</li><li><span class="emphasis">季節限定</span>：春季夜間點燈賞櫻、夏季的「幻想庭園」。</li><li><span class="emphasis">絕佳拍照點</span>：登上唯心山，俯瞰庭園全景與遠方的岡山城。</li></ul>`
        },
        {
            name: "味司 野村 (醬汁豬排丼)",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=味司+野村",
            parkingInfo: "無專用停車場，最近的為「錦町駐車場」，費用約 ¥100/30分鐘。",
            expertRec: "專家推薦：岡山的靈魂美食，作為<span class=\"emphasis\">醬汁豬排丼的創始店</span>，必訪！",
            historyCulture: "看板料理：<span class=\"emphasis\">醬汁豬排丼 (デミカツ丼)</span>。將炸豬排浸泡在特調的<span class=\"emphasis\">多明格拉斯醬</span>中。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">料理特色</span>：濃郁的洋食風味與豬排完美結合。</li><li><span class="emphasis">IG/FB 人氣</span>：拍攝豬排被濃郁深色醬汁覆蓋的特寫。</li><li><span class="emphasis">拍照點</span>：店內充滿歷史感的氛圍。</li></ul>`
        },
        {
            name: "吉備津神社",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=吉備津神社",
            ticketInfo: "免費",
            parkingInfo: "設有免費停車場。",
            expertRec: "桃太郎傳說的原型地，神社本身充滿神話色彩。最引人注目的是長達360公尺的木造大迴廊，非常壯觀，是IG打卡的熱門地點。",
            historyCulture: "主祭神為<span class=\"emphasis\">大吉備津彥大神</span>，據信是桃太郎的原型人物。神社的「鳴釜神事」也十分有名，可透過釜的鳴叫聲占卜吉凶。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">建築之美</span>：獨特的<span class=\"emphasis\">「比翼入母屋造」</span>屋頂結構被指定為國寶。</li><li><span class="emphasis">御守/御朱印</span>：必買可愛的<span class=\"emphasis\">桃太郎御守</span>，以及桃子形狀的<span class=\"emphasis\">桃子籤</span>。</li><li><span class="emphasis">絕佳拍照點</span>：沿著地勢起伏而建的宏偉大迴廊。</li></ul>`
        },
        {
            name: "いんでいら (蝦飯)",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=すし丸+ekie広島店4",
            parkingInfo: "店家通常有合作停車場或位於商場內，建議使用周邊收費停車場。",
            expertRec: "想體驗岡山最道地的B級美食，『蝦飯』絕對是首選。創始店『いんでいら』是品嚐這道黑色炒飯的最佳地點。",
            historyCulture: "看板料理：<span class=\"emphasis\">蝦飯 (えびめし)</span>。特色是用多明格拉斯醬、番茄醬、焦糖醬等混合的醬汁拌炒，呈現獨特的黑色外觀與甜辣風味。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">料理特色</span>：外觀雖深，但味道並非醬油味，而是濃郁的洋食風味。</li><li><span class="emphasis">人氣搭配</span>：通常會搭配生菜沙拉或一顆荷包蛋。</li><li><span class="emphasis">拍照點</span>：拍攝黑色炒飯與鮮豔配菜的強烈顏色對比。</li></ul>`
        },
        {
            name: "魚河岸 晴じゃ (岡山居酒屋)",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=すし丸+ekie広島店8",
            parkingInfo: "無專用停車場，請使用岡山車站周邊的收費停車場。",
            expertRec: "想品嚐瀨戶內海的新鮮海產，這家位於車站附近的居酒屋是絕佳選擇。氣氛熱鬧，能體驗在地人下班後小酌的氛圍。",
            historyCulture: "看板料理：<span class=\"emphasis\">當日鮮魚生魚片拼盤</span>、<span class=\"emphasis\">ままかり寿司 (沙丁魚壽司)</span>。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">料理特色</span>：主打從下津井、日生等港口直送的鮮魚，可以吃到岡山獨有的海產。</li><li><span class="emphasis">在地搭配</span>：務必搭配岡山本地產的「獨步(Doppo)」啤酒或在地清酒。</li><li><span class="emphasis">點餐技巧</span>：可以直接請店家推薦當天最新鮮的「おすすめ(Osusume)」。</li></ul>`
        },
        {
            name: "倉敷美觀地區",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=松江城8",
            parkingInfo: "請使用周邊停車場，如「倉敷市中央駐車場」(¥100/30分鐘)。",
            expertRec: "保存完好的江戶時代街區，白壁建築、垂柳、小橋流水構成一幅美麗的圖畫。無論白天或夜晚點燈後都極具魅力，是岡山必訪景點。",
            historyCulture: "此地在江戶時代是幕府直轄的物資集散地，沿著倉敷川而建的白壁倉庫與商人宅邸，見證了當時的繁榮。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">體驗重點</span>：搭乘<span class=\"emphasis\">倉敷川遊船</span>、參觀<span class=\"emphasis\">大原美術館</span>、探索本町・東町的傳統街區。</li><li><span class="emphasis">美食推薦</span>：品嚐<span class=\"emphasis\">水果聖代</span>、牛仔布藍色的<span class=\"emphasis\">丹寧包子</span>。</li><li><span class="emphasis">絕佳拍照點</span>：中橋上拍攝川流與兩岸垂柳的經典畫面、夜間點燈後的靜謐景色。</li></ul>`
        },
        {
            name: "兒島牛仔褲大道",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=すし丸+ekie広島店9",
            parkingInfo: "可利用『兒島車站西口停車場』等公共停車設施 (約¥100-200/小時)，部分店家消費可折抵停車費。",
            expertRec: "日本國產牛仔褲的發源地與聖地。漫步在街道上，可以看到懸掛的牛仔褲、丹寧布製成的裝飾，是丹寧愛好者必訪之地。",
            historyCulture: "兒島最初以製作學生制服起家，憑藉其厚實布料的縫紉技術，在60年代成功轉型，誕生了日本第一條國產牛仔褲。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">體驗重點</span>：探訪各具特色的丹寧品牌專賣店，許多店家提供客製化或修改服務。</li><li><span class="emphasis">特色美食</span>：尋找藍色的<span class=\"emphasis\">『丹寧冰淇淋』</span>或<span class=\"emphasis\">『丹寧包子』</span>等特色小吃。</li><li><span class="emphasis">絕佳拍照點</span>：懸掛在街道上空的牛仔褲裝置藝術、各店鋪獨特的門面設計。</li></ul>`
        },
        {
            name: "RIVETS CAFE",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=松江城0",
            parkingInfo: "位於牛仔褲大道徒步區內，請使用『兒島車站西口停車場』等公共停車設施。",
            expertRec: "位於牛仔褲大道上的主題咖啡館，是逛街途中完美的休憩點。店內充滿工業風與丹寧元素，提供特色輕食與飲品。",
            historyCulture: "看板料理：<span class=\"emphasis\">丹寧漢堡</span>、<span class=\"emphasis\">丹寧藍檸檬水</span>。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">料理特色</span>：將丹寧的「藍色」元素融入餐點中，視覺效果獨特。</li><li><span class="emphasis">環境特色</span>：店內裝潢使用縫紉機、鉚釘等元素，充滿丹寧工藝氛圍。</li><li><span class="emphasis">拍照點</span>：藍色的特色飲品、充滿工業設計感的店內環境。</li></ul>`
        },
        {
            name: "くらしき桃子 (水果聖代)",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=くらしき桃子+倉敷中央店",
            parkingInfo: "位於倉敷美觀地區內，請使用「倉敷市中央駐車場」(¥100/30分鐘)等周邊停車場。",
            expertRec: "專家推薦：岡山<span class=\"emphasis\">水果王國</span>代表。聖代以當季新鮮水果為主。是倉敷美觀地區必訪的下午茶。",
            historyCulture: "看板料理：<span class=\"emphasis\">季節限定水果聖代</span>。如<span class=\"emphasis\">白桃聖代 (夏季)</span>、<span class=\"emphasis\">草莓聖代 (冬季/春季)</span>。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">料理特色</span>：使用當地高品質水果，如晴王葡萄、白桃、草莓等。</li><li><span class="emphasis">IG/FB 人氣</span>：拍攝聖代頂端堆疊著滿滿水果的特寫。</li><li><span class="emphasis">拍照點</span>：美觀地區的白壁建築與色彩鮮豔的聖代合影。</li></ul>`
        },
        {
            name: "鷲羽山展望台",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=鷲羽山展望台",
            parkingInfo: "展望台設有免費停車場。",
            expertRec: "瀨戶內海的代表性夕陽絕景。看著太陽緩緩沉入海平面，將宏偉的瀨戶大橋與海面上的群島染成一片金黃，是令人永生難忘的畫面。",
            historyCulture: "<span class=\"emphasis\">日本夕陽百選</span>之一，是眺望橫跨本州與四國的<span class=\"emphasis\">瀨戶大橋</span>的最佳地點。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">觀景重點</span>：展望台分為數個觀景點，可以從不同角度欣賞大橋。</li><li><span class="emphasis">交通提醒</span>：前往展望台的巴士班次較少，務必事先查好時刻表，特別是日落後的回程班次。</li><li><span class="emphasis">絕佳拍照點</span>：第二展望台是拍攝瀨戶大橋與夕陽同框的經典位置。</li></ul>`
        },
        {
            name: "備中松山城",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=備中松山城",
            ticketInfo: "天守: 大人 500日圓",
            parkingInfo: "計程車會送至登山口，「ふいご峠駐車場」免費。",
            expertRec: "挑戰性高的景點，但回報也極高。不僅是日本最高的現存天守，秋冬季節的清晨更有機會見到傳說中的『雲海』，是攝影愛好者的夢幻目標。",
            historyCulture: "<span class=\"emphasis\">日本100名城</span>之一，是日本最高的山城，也是十二座現存天守之一，有<span class=\"emphasis\">「天空之城」</span>的美譽。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">雲海攻略</span>：雲海最佳觀賞期為9月下旬至4月上旬的清晨。必須搭乘<span class=\"emphasis\">雲海計程車（需預約）</span>才能在日出前抵達展望台。</li><li><span class="emphasis">攻城提醒</span>：從停車場到天守閣需徒步約20分鐘的山路，請穿著好走的鞋子。</li><li><span class="emphasis">拍照點</span>：備中松山城展望台拍攝雲海中的城堡、天守閣本身古樸的樣貌。</li></ul>`
        },
        {
            name: "竹原町並み保存地区",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=竹原町並み保存地区",
            parkingInfo: "保存地區周邊設有收費停車場，價格不明。",
            expertRec: "工頭堅哲學實踐地：這裡是實踐『慢遊』的最佳地點。不需追趕行程，靜心感受古街氛圍、光影變化，才能真正體驗其魅力。",
            historyCulture: "因其優雅的江戶時代街景，而有<span class=\"emphasis\">「安藝的小京都」</span>之稱。此地在江戶後期因製鹽及釀酒業而繁榮。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">聖地巡禮</span>：這裡是動畫<span class=\"emphasis\">《玉響～tamayura～》</span>的主要舞台，可以尋找動畫中出現的場景，如「普明閣」。</li><li><span class="emphasis">文化體驗</span>：參觀「松阪邸」、「光本邸」等當時富商的宅邸。</li><li><span class="emphasis">絕佳拍照點</span>：從普明閣的舞台俯瞰古鎮的屋瓦、歷史悠久的「西方寺」。</li></ul>`
        },
        {
            name: "ほり川 (竹原御好燒)",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=すし丸+ekie広島店5",
            parkingInfo: "位於町並み保存地區內，請使用周邊的收費停車場。",
            expertRec: "在動畫《玉響》中也曾登場的聖地名店，其最大特色是在麵糊中加入了竹原當地釀酒的『酒粕』，風味獨特。",
            historyCulture: "看板料理：<span class=\"emphasis\">純米吟釀竹鶴燒</span>。這道御好燒(お好み焼き)加入了當地名酒『竹鶴』的酒粕，帶有淡淡酒香。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">料理特色</span>：酒粕的加入讓麵糊更為鬆軟，風味層次更豐富。</li><li><span class="emphasis">聖地巡禮</span>：這裡是動畫粉絲必訪的餐廳之一。</li><li><span class="emphasis">拍照點</span>：拍攝店家充滿懷舊感的招牌與內部裝潢。</li></ul>`
        },
        {
            name: "雑草庵 (廣島鄉土料理)",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=すし丸+ekie広島店9",
            parkingInfo: "無專用停車場，請使用本通商店街周邊的收費停車場。",
            expertRec: "位於廣島市中心的隱密名店，以其高品質的瀨戶內海鮮魚和廣島鄉土料理聞名，是在地饕客的愛店。",
            historyCulture: "看板料理：<span class=\"emphasis\">穴子白燒</span>、<span class=\"emphasis\">當季生魚片拼盤</span>、<span class=\"emphasis\">小魚干飯 (小いわし飯)</span>。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">料理特色</span>：『穴子白燒』不使用醬汁，直接火烤，更能品嚐星鰻本身的鮮美。</li><li><span class="emphasis">在地搭配</span>：提供豐富的廣島在地清酒，如『雨後之月』、『賀茂鶴』等，可請店家推薦。</li><li><span class="emphasis">點餐技巧</span>：預算足夠的話，可以選擇主廚搭配的套餐 (おまかせコース)。</li></ul>`
        },
        {
            name: "Italian Bar CENA",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Italian+Bar+CENA+広島",
            parkingInfo: "位於廣島本通商店街徒步區，請使用「広島市中央駐車場」(¥180/30分)等周邊停車場。",
            expertRec: "在熱鬧的商店街中，提供一個能品嚐道地義大利麵的舒適空間，午間套餐特別受歡迎。",
            historyCulture: "看板料理：<span class=\"emphasis\">週替りパスタランチ (每週更換的義大利麵午間套餐)</span>。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">料理特色</span>：提供多種經典與創意義大利麵，午間套餐CP值高。</li><li><span class="emphasis">IG/FB 人氣</span>：拍攝擺盤精緻的義大利麵與豐富的套餐組合。</li><li><span class="emphasis">拍照點</span>：餐點特寫、店內時尚的氛圍。</li></ul>`
        },
        {
            name: "熊野筆セレクトショップ",
            type: "景點",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=熊野筆セレクトショップ+広島",
            parkingInfo: "廣島品牌本店有少量免費車位。",
            expertRec: "不只是伴手禮，更是值得投資的工藝品。熊野筆的化妝刷品質享譽全球，觸感極為柔軟，是送禮或自用的絕佳選擇。",
            historyCulture: "<span class=\"emphasis\">熊野筆</span>是廣島縣熊野町生產的毛筆、畫筆與化妝刷的總稱，為日本指定的傳統工藝品。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">選購重點</span>：依據需求選擇不同動物毛（如松鼠毛、山羊毛）製成的刷具。</li><li><span class="emphasis">特色商品</span>：部分店家提供在刷柄上<span class=\"emphasis\">刻印姓名</span>的服務。</li><li><span class="emphasis">體驗活動</span>：部分工房提供毛筆或化妝刷的製作體驗（需預約）。</li></ul>`
        },
        {
            name: "かき小屋 廣島駅前店 (烤牡蠣)",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=かき小屋+広島駅前店",
            parkingInfo: "店家無專用停車場，可使用廣島車站周邊的收費停車場。",
            expertRec: "在旅程的尾聲，用廣島最引以為傲的牡蠣畫下完美句點。這裡提供豪邁的『牡蠣吃到飽』方案，氣氛熱鬧，適合三五好友小酌。",
            historyCulture: "看板料理：<span class=\"emphasis\">烤牡蠣 (焼き牡蠣)</span>。廣島是日本產量第一的牡蠣王國，每年11月至2月是品質最佳的季節。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">料理特色</span>：自己動手在炭火上烤牡蠣，充滿樂趣。</li><li><span class="emphasis">人氣搭配</span>：除了原味，也可嘗試加入檸檬、醬油或起司等不同調味。</li><li><span class="emphasis">拍照點</span>：拍攝堆積如山的牡蠣殼、炭火上滋滋作響的牡蠣。</li></ul>`
        },
        {
            name: "麥當勞 (速食店)",
            type: "美食",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=マクドナルド+広島駅店",
            parkingInfo: "位於廣島站內，無專用停車場，需使用車站合作的『広島駅屋上駐車場』。",
            expertRec: "全球連鎖的速食龍頭，是在旅途最後一天，需要快速解決早餐時最方便可靠的選擇。",
            historyCulture: "看板料理：<span class=\"emphasis\">大麥克 (ビッグマック)</span>、<span class=\"emphasis\">薯條 (マックフライポテト)</span>。",
            focusPoints: `<ul class="list-disc list-inside space-y-1"><li><span class="emphasis">料理特色</span>：提供標準化的快速餐點，品質穩定。</li><li><span class="emphasis">IG/FB 人氣</span>：拍攝日本限定或季節限定的特殊漢堡。</li><li><span class="emphasis">拍照點</span>：經典的M字招牌。</li></ul>`
        }
    ],

    // Data for Accommodation section
    accommodation: [
        {
            day: "1-2, 14",
            city: "廣島",
            name: "ダイワロイネットホテル広島駅前",
            url: "https://www.google.com/maps/search/?api=1&query=Daiwa+Roynet+Hotel+Hiroshima-Ekimae",
            parking: "無飯店專用停車場。可停合作的『広島駅屋上駐車場』，經飯店蓋章優惠價為 ¥1,500/24小時。",
            convenienceStores: [
                { brand: "7-Eleven", name: "セブン-イレブン 広島新幹線口店" },
                { brand: "FamilyMart", name: "ファミリーマート 広島駅前店" },
                { brand: "Lawson", name: "ローソン 広島光町店" }
            ]
        },
        {
            day: "3-4",
            city: "松江",
            name: "天然温泉だんだんの湯 ドーミーインEXPRESS松江",
            url: "https://www.google.com/maps/search/?api=1&query=Dormy+Inn+Express+Matsue",
            parking: "有 (立體式，¥1,100/晚，採先到先停制)。若客滿會引導至鄰近合作停車場 (費用可能不同)。",
            convenienceStores: [
                { brand: "Lawson", name: "ローソン 松江伊勢宮町店" },
                { brand: "FamilyMart", name: "ファミリーマート 松江伊勢宮店" },
                { brand: "7-Eleven", name: "セブン-イレブン 松江寺町店" }
            ]
        },
        {
            day: "5",
            city: "玉造溫泉",
            name: "佳翠苑皆美",
            url: "https://www.google.com/maps/search/?api=1&query=佳翠苑皆美",
            parking: "提供免費專用停車場。",
            convenienceStores: [
                 { brand: "Lawson", name: "ローソン 玉造温泉店" },
            ]
        },
        {
            day: "6-7",
            city: "米子",
            name: "米子ワシントンホテルプラザ",
            url: "https://www.google.com/maps/search/?api=1&query=Yonago+Washington+Hotel+Plaza",
            parking: "無飯店專用停車場。合作停車場『米子駅前パーキング』，費用為 ¥800/24小時。",
            convenienceStores: [
                { brand: "Lawson", name: "ローソン 米子駅前店" },
                { brand: "7-Eleven", name: "セブン-イレブン ハートインJR米子駅店" },
                { brand: "FamilyMart", name: "ファミリーマート 米子駅前店" }
            ]
        },
        {
            day: "8-9",
            city: "鳥取/三朝溫泉",
            name: "三朝館",
            url: "https://www.google.com/maps/search/?api=1&query=三朝館",
            parking: "提供免費專用停車場。",
            convenienceStores: [
                 { brand: "Lawson", name: "ローソン 三朝温泉南店" },
            ]
        },
        {
            day: "10-12",
            city: "岡山",
            name: "ダイワロイネットホテル岡山駅前",
            url: "https://www.google.com/maps/search/?api=1&query=Daiwa+Roynet+Hotel+Okayama-Ekimae",
            parking: "無飯店專用停車場。合作停車場『岡山駅西口パーキング』，費用為 ¥1,200/24小時。",
            convenienceStores: [
                { brand: "7-Eleven", name: "セブン-イレブン 岡山駅西口店" },
                { brand: "FamilyMart", name: "ファミリーマート 岡山リットシティビル店" },
                { brand: "Lawson", name: "ローソン 岡山駅西口店" }
            ]
        },
         {
            day: "13",
            city: "廣島",
            name: "広島ワシントンホテル",
            url: "https://www.google.com/maps/search/?api=1&query=広島ワシントンホテル",
            parking: "有合作停車場，費用約 ¥1,400/晚。",
            convenienceStores: [
                 { brand: "7-Eleven", name: "セブン-イレブン 広島八丁堀店" },
            ]
        },
    ],
    
    // Data for Transport Pass section
    transportPass: {
        title: "核心交通票券：山陽&山陰地區鐵路周遊券",
        details: {
            "類型": "7日券 x 2張 (或 7日券+地區券組合)",
            "啟用日期": "Day 3 (第一張) & Day 10 (第二張)",
            "有效期限": "Day 3-9 & Day 10-16 (因行程為15天，需彈性調整)",
        },
        description: `<p><span class="emphasis">票券價值解析：</span>由於行程擴展為15天，單張7日券已不足以涵蓋所有長途移動。建議採用**兩張7日券**或**「7日券 + 地區性Pass」**的組合策略。這能最大化交通效益，涵蓋昂貴的新幹線與特急列車路段。</p>
                      <p class="text-sm text-red-600 mt-2"><span class="emphasis">重要提醒:</span> 需重新規劃Pass的啟用與結束日期，以對應15日的行程節點。</p>`
    },

    transportPassAnalysis: null, // Removed as the old analysis is no longer valid for a 15-day trip

    // Data for Transport Summary table
    transportSummary: [
        // This will need a full update for a 15-day trip. Placeholder for now.
        { day: 1, route: "機場→廣島站", transport: "機場利木津巴士", time: "21:10→21:58", cost: "¥1,450" },
        { day: 2, route: "廣島↔宮島口", transport: "JR山陽本線", time: "全日", cost: "¥1,200 (自理)" },
        { day: 3, route: "廣島→岡山→松江", transport: "新幹線/特急", time: "下午", cost: "JR Pass" },
        { day: 4, route: "松江↔出雲市", transport: "JR/一畑電車", time: "全日", cost: "JR Pass + 自理" },
        { day: 5, route: "出雲市→大田市→玉造溫泉", transport: "JR/巴士", time: "全日", cost: "JR Pass" },
        { day: 6, route: "玉造溫泉→安來→米子", transport: "JR山陰本線", time: "全日", cost: "JR Pass" },
        { day: 7, route: "米子↔境港", transport: "JR境線", time: "全日", cost: "JR Pass" },
        { day: 8, route: "米子→倉吉→三朝溫泉", transport: "JR/巴士", time: "全日", cost: "JR Pass" },
        { day: 9, route: "三朝溫泉→鳥取", transport: "巴士/JR", time: "全日", cost: "JR Pass" },
        { day: 10, route: "鳥取→岡山", transport: "特急", time: "上午", cost: "JR Pass (第二張)" },
        { day: 11, route: "岡山市區/吉備津", transport: "JR吉備線", time: "全日", cost: "JR Pass" },
        { day: 12, route: "岡山↔倉敷/鷲羽山", transport: "JR/巴士", time: "全日", cost: "JR Pass" },
        { day: 13, route: "岡山→竹原→廣島", transport: "新幹線/JR", time: "全日", cost: "JR Pass" },
        { day: 14, route: "廣島市區", transport: "路面電車", time: "全日", cost: "自理" },
        { day: 15, route: "廣島站→機場", transport: "機場利木津巴士", time: "上午", cost: "¥1,450" }
    ],

    // Data for Transport Tactics list
    transportTactics: [
        '<span class="emphasis">JR Pass 劃位:</span> 抵達日本後，盡早一次性在綠色售票機劃好所有長途特急列車座位。',
        '<span class="emphasis">行李轉送 (宅急便):</span> 善用飯店或便利商店的行李寄送服務，讓城市間移動時能輕裝上陣。15天行程中至少需要3-4次轉送。',
        '<span class="emphasis">IC卡準備:</span> 準備一張 ICOCA 或 SUICA 卡，用於支付JR Pass不包含的市區交通。',
        '<span class="emphasis">巴士搭配:</span> 攻略中提到的循環巴士(Lake Line, 麒麟獅子)及前往溫泉區的路線巴士將是重要輔助。'
    ],

    // Data for Preparation section
    prepList: {
        description: "這份清單已根據擴展後的15天行程重新彙整，並加入了新景點的注意事項。請在出發前逐一確認。",
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
                    '<span class="emphasis">JR Pass</span>: 根據新行程，需重新規劃Pass組合(如兩張7日券)，並在出發前購買兌換券。',
                    '<span class="emphasis">[關鍵任務] 雲海計程車 (Day 12 選項C)</span>: <span class="font-bold text-red-600">必須提前數日</span>向「高梁市觀光協會」預約。',
                    '<span class="emphasis">IC卡 (ICOCA/SUICA)</span>: 準備或儲值一張IC卡。',
                ]
            },
            {
                category: '行李策略 (15日版)',
                items: [
                    '<span class="emphasis">行李轉送是關鍵</span>：長達15天的行程，善用宅急便能大幅提升旅遊品質。',
                    ' • <span class="emphasis">Day 3 (廣島→玉造溫泉)</span>: 將大行李寄送至 Day 5 的玉造溫泉旅館。',
                    ' • <span class="emphasis">Day 5 (玉造溫泉→米子)</span>: 將大行李寄送至 Day 6 的米子飯店。',
                    ' • <span class="emphasis">Day 8 (米子→岡山)</span>: 將大行李寄送至 Day 10 的岡山飯店。',
                    ' • <span class="emphasis">Day 13 (岡山→廣島)</span>: 將大行李寄送至 Day 13 的廣島飯店。',
                    '<span class="emphasis">過夜包</span>：準備一個能容納2-3天換洗衣物的輕便背包。',
                ]
            },
            {
                category: '衣物與裝備',
                items: [
                    '<span class="emphasis">舒適的鞋子</span>: 行程包含大量步行，務必穿著防滑好走的鞋子。',
                    '<span class="emphasis">洋蔥式穿搭</span>: 2月底至3月初山陰地區仍濕冷，務必注意保暖與防風。',
                    '<span class="emphasis">雨具 & 個人藥品</span>: 準備輕便雨具與常備藥品。'
                ]
            },
        ]
    },

    prepMemos: [
        {
            title: "★ 工頭堅旅行哲學：深度與文化",
            content: "工頭堅強調「不給別人添麻煩」是日本旅行的核心原則。建議採取「沉浸式體驗」而非走馬看花，給予自己足夠的時間慢慢品味當地文化。"
        },
        {
            title: "溫泉禮儀",
            content: "進入浴池前，請務必先在旁邊的淋浴區將身體沖洗乾淨。毛巾不可帶入浴池中。"
        },
        {
            title: "神社參拜",
            content: "進入鳥居前先鞠躬。在「手水舍」洗手漱口。參拜時遵循「二拜二拍手一拜」為基本，但<span class=\"emphasis\">出雲大社</span>為獨特的<span class=\"emphasis\">「二拜四拍手一拜」</span>。"
        }
    ],

    prepExpertTips: [
        {
            title: "通訊建議",
            content: "建議購買吃到飽流量的SIM卡或租借Pocket WiFi。山陰地區部分路段訊號可能較弱。"
        },
        {
            title: "貨幣與支付",
            content: "主要城市多數接受信用卡，但在山陰小鎮或市場，建議準備足夠的日圓現金。"
        },
        {
            title: "打包策略",
            content: "2月底至3月初仍屬冬季，山陰地區體感更冷。建議採用「洋蔥式」穿搭法：內層排汗、中層保暖、外層防風防水。"
        }
    ],

    // Main data for the daily itinerary
    dailyData: {
        day1: {
            title: '序章・廣島之夜', date: '2/20 週五', location: '台灣 → 廣島', timeAnalysis: { travel: 4.5, activity: 1.5 },
            timeline: [
                { time: '16:50-20:20', type: '✈️', event: '航班飛行: CI112 TPE → HIJ' },
                { time: '21:10-22:00', type: '🚌', event: '機場交通: 廣島機場利木津巴士 →「JR廣島站新幹線口」', cost: '¥1,450'},
                { time: '22:00-22:30', type: '🏨', event: '關鍵任務: 於 <a href="https://www.google.com/maps/search/?api=1&query=JR広島駅みどりの窓口" target="_blank" class="text-blue-600 hover:underline">JR廣島站 綠色售票機</a> 兌換JR Pass & 飯店Check-in'},
                { time: '22:30', type: '🍽️', event: '宵夜/晚餐: <a href="https://www.google.com/maps/search/?api=1&query=ばくだん屋+ekie広島店" target="_blank" class="text-blue-600 hover:underline">ばくだん屋 ekie店</a>', description: '品嚐廣島特有辣味沾麵 (辛いつけ麺)。', parkingInfo: "位於廣島站ekie內，可使用車站合作的『広島駅屋上駐車場』(費用約 ¥400/小時，當日最高 ¥1,500)。" },
                { time: '23:00', type: '🏨', event: '住宿: <a href="https://www.google.com/maps/search/?api=1&query=ダイワロイネットホテル広島駅前" target="_blank" class="text-blue-600 hover:underline">ダイワロイネットホテル広島駅前</a>'}
            ],
            intel: {
                supply: { title: '周邊補給 (廣島站)', items: [ 
                    '<span class="emphasis">大型電器行</span>：<a href="https://www.google.com/maps/search/?api=1&query=ビックカメラ+広島駅前店" target="_blank" class="text-blue-600 hover:underline">ビックカメラ 広島駅前店 (BicCamera)</a>', 
                    '<span class="emphasis">藥妝店</span>：<a href="https://www.google.com/maps/search/?api=1&query=マツモトキヨシ+ekie広島店" target="_blank" class="text-blue-600 hover:underline">マツモトキヨシ (松本清) ekie店</a>',
                    '<span class="emphasis">超市</span>：<a href="https://www.google.com/maps/search/?api=1&query=成城石井+広島ekie店" target="_blank" class="text-blue-600 hover:underline">成城石井 広島ekie店</a>'
                ]},
                 jr_pass_hack: { title: 'JR Pass 兌換TIPS', text: '綠色售票機(みどりの券売機)通常開放至23:00，比綠色窗口(みどりの窓口)的服務時間更長，是深夜抵達時兌換Pass的首選。' }
            },
            insights: {
                expert_strategy: { title: '<span class="emphasis">專家策略：山陽山陰高效率規劃</span>', text: '工頭堅等旅遊達人建議，選擇JR站周邊的商務酒店，能確保交通與生活機能的最佳連動性。廣島車站本身就是一個巨大的複合商城(ekie)，集結了美食、伴手禮與各式商店，是開啟旅程的絕佳據點。' },
            }
        },
        day2: {
            title: '神之島・嚴島神社深度一日', date: '2/21 週六', location: '廣島 ↔ 宮島', timeAnalysis: { travel: 1.5, activity: 7.5 },
            timeline: [
                 { time: '08:00', type: '☕', event: '早餐: 飯店或車站咖啡廳 <a href="https://www.google.com/maps/search/?api=1&query=Tully%27s+Coffee+広島駅店" target="_blank" class="text-blue-600 hover:underline">Tully\'s Coffee</a>' },
                 { time: '08:32-09:20', type: '🚆', event: '搭乘 JR山陽本線 及 JR渡輪 前往宮島。', cost: '¥1,200 (來回, 自理)', parkingInfo: "需停在「宮島口」渡輪站周邊停車場，平日當日最高約 ¥1,200。" },
                 { time: '09:20-12:00', type: '⛩️', event: '嚴島神社參拜 & 宮島表參道商店街。', ticketInfo: "大人 300日圓", stay: '約 2.5 小時', awardHighlight: "日本三景" },
                 { time: '12:00-13:30', type: '🍽️', event: '午餐: <a href="https://www.google.com/maps/search/?api=1&query=あなごめし+うえの+宮島口本店" target="_blank" class="text-blue-600 hover:underline">あなごめし うえの</a> 或 <a href="https://www.google.com/maps/search/?api=1&query=牡蠣屋+宮島" target="_blank" class="text-blue-600 hover:underline">牡蠣屋</a>', description: '品嚐宮島名物星鰻飯或當季烤牡蠣。', parkingInfo: "うえの有5個免費車位(易滿)，建議使用宮島口收費停車場。" },
                 { time: '13:30-16:00', type: '🚶', event: '宮島深度探索 (彌山纜車/紅葉谷公園)', stay: '約 2.5 小時'},
                 { time: '18:00-19:00', type: '🚆', event: '返回廣島站，回飯店稍作休息。'},
                 { time: '19:30', type: '🍽️', event: '晚餐: <a href="https://www.google.com/maps/search/?api=1&query=すし丸+ekie広島店" target="_blank" class="text-blue-600 hover:underline">すし丸 (迴轉壽司)</a>', description: '品嚐瀨戶內海地魚。<span class="emphasis">【美食任務：迴轉壽司已達成】</span>', parkingInfo: "位於廣島站ekie內，可使用車站合作的停車場。" },
                 { time: '21:00', type: '🏨', event: '住宿: <a href="https://www.google.com/maps/search/?api=1&query=ダイワロイネットホテル広島駅前" target="_blank" class="text-blue-600 hover:underline">ダイワロイネットホテル広島駅前</a>'}
            ],
            intel: {
                tide: { title: '本日關鍵：潮汐攻略', text: '出發前務必查詢<a href="https://www.tide-forecast.com/locations/Miyajima-Japan/tides/latest" target="_blank" class="text-blue-600 hover:underline">宮島潮汐表</a>。滿潮前後2小時最適合拍攝海上鳥居，乾潮前後2小時則可步行至鳥居下方。' },
                local_snacks: { title: '宮島表參道必吃小吃', items: [
                    '除了烤牡蠣與星鰻飯，必嚐宮島本店限定的<span class="emphasis">『炸紅葉饅頭 (揚げもみじ)』</span>，口感獨特。',
                    "可以嘗試當地特色的<span class='emphasis'>『廣島檸檬汽水』</span>，解渴又好拍照。"
                ]}
            },
            insights: {
                itsukushima: { title: '<span class="emphasis">專家見解：嚴島神社的二元之美</span>', text: '嚴島神社的精髓在於掌握潮汐。滿潮時，社殿與迴廊彷彿漂浮於海上；乾潮時，則能親近鳥居的宏偉。宮島纜車可登頂獅子岩展望台，俯瞰瀨戶內海群島，景色壮麗。' },
                local_legend: { title: '文化見解：神之使者「鹿」', text: '宮島上的鹿被視為神的使者，因此受到保護並能自由漫步。與奈良的鹿相比，宮島的鹿較為溫馴，但仍請勿主動餵食。' }
            }
        },
        day3: {
            title: '沉思與轉進・國寶松江城與夕陽絕景', date: '2/22 週日', location: '廣島 → 松江', timeAnalysis: { travel: 4.5, activity: 3.5 },
            timeline: [
                { time: '08:00', type: '☕', event: '早餐 & 行李轉送 (至Day 5 玉造溫泉)' },
                { time: '09:00-12:00', type: '🏛️', event: '歷史巡禮: <a href="https://www.google.com/maps/search/?api=1&query=廣島和平紀念公園" target="_blank" class="text-blue-600 hover:underline">廣島和平紀念公園</a>', ticketInfo: "公園免費, 資料館: 大人 200日圓", stay: '3 小時', parkingInfo: "周邊停車場如「広島市中央駐車場」(¥180/30分)。" },
                { time: '12:00-13:30', type: '🍽️', event: '午餐: <a href="https://www.google.com/maps/search/?api=1&query=麗ちゃん+広島" target="_blank" class="text-blue-600 hover:underline">麗ちゃん</a> 品嚐廣島燒', description: '品嚐道地的廣島靈魂美食。<span class="emphasis">【美食任務：B級美食已達成】</span>', parkingInfo: "位於廣島站ASSE內，可使用車站合作的停車場。" },
                { time: '13:59-18:10', type: '🚆', event: '長途移動: 新幹線 (廣島→岡山) & 特急やくも (岡山→松江)', cost: 'JR Pass (第一張)'},
                { time: '18:30-19:30', type: '🌅', event: '絕景鑑賞: <a href="https://www.google.com/maps/search/?api=1&query=宍道湖夕陽" target="_blank" class="text-blue-600 hover:underline">宍道湖夕陽</a>', description: '在<span class="emphasis">島根縣立美術館</span>前欣賞夢幻景色。', awardHighlight: "日本夕陽百選", ticketInfo: "觀景大廳免費", stay: '約 1 小時', parkingInfo: "島根縣立美術館設有免費停車場。" },
                { time: '19:30', type: '🍽️', event: '晚餐: <a href="https://www.google.com/maps/search/?api=1&query=根っこや+松江" target="_blank" class="text-blue-600 hover:underline">根っこや</a>', description: '品嚐宍道湖七珍等鄉土料理。', parkingInfo: "無專用停車場，請使用附近收費停車場。" },
                { time: '21:30', type: '🏨', event: '宵夜/住宿: <a href="https://www.google.com/maps/search/?api=1&query=ドーミーインEXPRESS松江" target="_blank" class="text-blue-600 hover:underline">ドーミーインEXPRESS松江</a>'}
            ],
            intel: {
                matsue_food_culture: { title: '美食筆記：宍道湖七珍', text: '晚餐提到的「宍道湖七珍」是指宍道湖的七種代表性漁產：鱸魚、銀魚、鰻魚、公魚、鯉魚、蝦和蜆。能品嚐到其中幾樣，便是體驗了松江的精華。' }
            },
            insights: {
                yakumo: { title: '交通筆記：特急列車「八雲號 (やくも)」', text: '連接岡山與山陰的重要列車，因路線多彎，是日本少數的「擺式列車」。車上無販售，務必事先購買糧食飲料。' },
                peace_park: { title: '文化見解：千紙鶴的祈願', text: '在和平公園的「原爆之子像」周圍，您會看到來自世界各地的數百萬隻千紙鶴。這源於因核爆輻射罹患白血病的女孩佐佐木禎子的故事，千紙鶴已成為世界和平的象徵。' }
            }
        },
        day4: {
            title: '國寶與神話・出雲大社與絕美夕陽', date: '2/23 週一', location: '松江 ↔ 出雲', timeAnalysis: { travel: 3.0, activity: 7.0 },
            timeline: [
                 { time: '08:00', type: '☕', event: '早餐: 飯店或松江站周邊' },
                 { time: '09:00-12:00', type: '🏯', event: '國寶巡禮: <a href="https://www.google.com/maps/search/?api=1&query=松江城" target="_blank" class="text-blue-600 hover:underline">松江城</a>', awardHighlight: "日本100名城 (No.64)", ticketInfo: "天守閣: 680日圓 (外國人340日圓)", stay: '約 3 小時', parkingInfo: "大手前停車場: ¥300/首小時, 之後¥100/30分鐘。" },
                 { time: '12:00-13:30', type: '🍽️', event: '午餐: <a href="https://www.google.com/maps/search/?api=1&query=八雲庵" target="_blank" class="text-blue-600 hover:underline">八雲庵</a> (鴨肉蕎麥麵)', parkingInfo: "無專用停車場，可使用松江城的停車場後步行前往。" },
                 { time: '13:35-14:45', type: '🚆', event: '移動: JR山陰本線 (松江→出雲市) & 一畑電車 (出雲市→大社前)', cost: 'JR Pass (JR段) + ¥500 (自理)'},
                 { time: '14:45-16:00', type: '🏛️', event: '深度歷史: <a href="https://www.google.com/maps/search/?api=1&query=島根県立古代出雲歴史博物館" target="_blank" class="text-blue-600 hover:underline">島根縣立古代出雲歴史博物館</a>', ticketInfo: "常設展: 620日圓 (外國人310日圓)", stay: '約 1.25 小時', parkingInfo: "設有免費停車場 (可與出雲大社共用)。" },
                 { time: '16:45-18:00', type: '⛩️', event: '參拜: <a href="https://www.google.com/maps/search/?api=1&query=出雲大社" target="_blank" class="text-blue-600 hover:underline">出雲大社</a>', description: '體驗獨特的「二拜四拍手一拜」。', ticketInfo: "境內免費, 寶物殿 300日圓", stay: '約 1.25 小時', parkingInfo: "設有大型免費停車場。" },
                 { time: '18:00-19:30', type: '🌅', event: '絕景鑑賞: <a href="https://www.google.com/maps/search/?api=1&query=稲佐の浜" target="_blank" class="text-blue-600 hover:underline">稻佐之濱</a>夕陽', awardHighlight: "日本夕陽百選", stay: '約 1.5 小時', parkingInfo: "海灘旁設有免費公共停車場。" },
                 { time: '20:00', type: '🍽️', event: '晚餐: <a href="https://www.google.com/maps/search/?api=1&query=羽根屋+本店" target="_blank" class="text-blue-600 hover:underline">羽根屋 本店</a> (出雲割子蕎麥麵)', parkingInfo: "本店無專用停車場，請使用附近的收費停車場。" },
            ],
            intel: {
                transport_hack: { title: '松江市內交通TIPS', text: '松江的「ぐるっと松江レイクラインバス (Lake Line Bus)」觀光循環巴士非常方便，一日券(520日圓)幾乎涵蓋所有市區景點，持護照外國人可享折扣。' },
                matsue_castle: { title: '松江城遊覽TIPS', text: '推薦搭乘「堀川遊覽船」環繞護城河，從水上欣賞松江城。持護照外國人船票有優惠。' }
            },
            insights: {
                izumo_worship: { title: '文化見解：為何是「四拍手」？', text: '出雲大社獨特的「二拜四拍手一拜」據說是為了讓遠方的神明也能聽見，表達最崇高的敬意。這也體現了出雲在日本神話中至高無上的地位。' }
            }
        },
        day5: {
            title: '世界遺產與美肌之湯', date: '2/24 週二', location: '出雲 → 石見銀山 → 玉造溫泉', timeAnalysis: { travel: 3.5, activity: 5.0 },
            timeline: [
                { time: '上午', type: '🚆', event: '移動: 從出雲市搭乘JR至大田市站，轉乘巴士前往石見銀山。', description: '將大行李寄送至米子(Day 6)飯店，攜帶過夜包。' },
                { time: '10:00-15:00', type: '🏛️', event: '世界遺產探訪: <a href="https://www.google.com/maps/search/?api=1&query=石見銀山" target="_blank" class="text-blue-600 hover:underline">石見銀山</a>', description: '探索龍源寺間步礦坑與大森地區的古老街道。', ticketInfo: "龍源寺間步: 410日圓 (外國人200日圓)", stay: '約 5 小時', parkingInfo: "世界遺產中心設有大型收費停車場，需轉乘巴士進入景區。" },
                { time: '15:00-16:00', type: '🍽️', event: '午餐: <a href="https://www.google.com/maps/search/?api=1&query=すし丸+ekie広島店6" target="_blank" class="text-blue-600 hover:underline">古民家カフェ&宿 晄 (AKARI)</a>', description: '在古街中享受由老屋改造的咖啡廳簡餐。' },
                { time: '16:00-18:00', type: '🚆', event: '移動: 從大田市站搭乘JR至玉造溫泉站。' },
                { time: '18:30', type: '🏨', event: '住宿 & 晚餐: <a href="https://www.google.com/maps/search/?api=1&query=佳翠苑皆美" target="_blank" class="text-blue-600 hover:underline">佳翠苑皆美</a>', description: '享受旅館提供的精緻會席料理 (已含於一泊二食方案)。' },
            ],
            intel: {
                iwami_ginzan: { title: '石見銀山攻略', text: '景區範圍廣大，從世界遺產中心到核心的龍源寺間步需步行約45分鐘。強烈建議在「大森代官所跡」站租借<span class="emphasis">電動自行車</span>以節省體力。' }
            },
            insights: {
                tamatsukuri_onsen: { title: '美肌之湯：玉造溫泉', text: '日本最古老的溫泉之一，以其讓肌膚變得光滑細緻的泉質聞名。溫泉街上有免費的足湯和可以裝溫泉水的美肌瓶，是完美的放鬆體驗。' }
            }
        },
        day6: {
            title: '藝術庭園與妖怪國度', date: '2/25 週三', location: '玉造溫泉 → 安來 → 米子', timeAnalysis: { travel: 2.0, activity: 5.0 },
            timeline: [
                { time: '上午', type: '🏨', event: '早餐: 於溫泉旅館內享用日式早餐 (已含於一泊二食方案)' },
                { time: '09:00-12:30', type: '🎨', event: '藝術巡禮: <a href="https://www.google.com/maps/search/?api=1&query=足立美術館" target="_blank" class="text-blue-600 hover:underline">足立美術館</a>', description: '從安來站搭乘免費接駁車，欣賞「活畫作」庭園。', awardHighlight: "日本紅葉名所100選", ticketInfo: "大人 2,300日圓 (外國人 1,150日圓)", stay: '約 3.5 小時', parkingInfo: "設有大型免費停車場 (400車位)。" },
                { time: '12:30-13:30', type: '🍽️', event: '午餐: 足立美術館內餐廳' },
                { time: '14:02-14:25', type: '🚆', event: '移動：JR山陰本線 (安來駅 → 米子駅)', cost: 'JR Pass'},
                { time: '19:00', type: '🍽️', event: '晚餐: <a href="https://www.google.com/maps/search/?api=1&query=満洲味+米子" target="_blank" class="text-blue-600 hover:underline">満洲味</a> 品嚐鳥取牛骨拉麵', description: '體驗與豚骨拉麵截然不同的清甜湯頭。<span class="emphasis">【美食任務：拉麵已達成】</span>', parkingInfo: "店家有專用停車場，價格不明。" },
                { time: '21:00', type: '🏨', event: '住宿: <a href="https://www.google.com/maps/search/?api=1&query=米子ワシントンホテルプラザ" target="_blank" class="text-blue-600 hover:underline">米子ワシントンホテルプラザ</a>'}
            ],
            intel: {
                adachi_bus: { title: '交通TIPS：前往足立美術館', text: '美術館提供 JR 安來站到美術館的<span class="emphasis">免費接駁巴士</span>，每小時一班，務必提前確認時刻表。' }
            },
            insights: {
                adachi_museum: { title: '<span class="emphasis">專家見解：足立美術館的「活畫作」</span>', text: '足立美術館的庭園被譽為<span class="emphasis">「活畫作」</span>，設計成從室內窗框望出去，每一景都像裱框的畫作。' }
            }
        },
        day7: {
            title: '妖怪國度深度一日', date: '2/26 週四', location: '米子 ↔ 境港', timeAnalysis: { travel: 1.5, activity: 7.0 },
            timeline: [
                { time: '08:30', type: '☕', event: '早餐: 飯店或米子市區' },
                { time: '09:18-10:02', type: '🚆', event: '搭乘JR境線(鬼太郎列車)前往境港。', cost: 'JR Pass'},
                { time: '10:02-12:30', type: '🚶', event: '境港/水木茂大道 深度一日遊', stay: '約 2.5 小時', parkingInfo: "周邊有多個收費停車場，當日最高約 ¥500-700。" },
                { time: '12:30-14:00', type: '🍽️', event: '午餐: <a href="https://www.google.com/maps/search/?api=1&query=境港水産物直売センター" target="_blank" class="text-blue-600 hover:underline">境港水産物直売センター</a> 品嚐海鮮丼', parkingInfo: "直賣中心設有大型免費停車場。" },
                { time: '19:00', type: '🍽️', event: '晚餐: <a href="https://www.google.com/maps/search/?api=1&query=ガスト+米子駅前店" target="_blank" class="text-blue-600 hover:underline">ガスト 米子駅前店</a> (家庭餐廳)', description: '體驗日本的家庭餐廳文化。<span class="emphasis">【美食任務：家庭餐廳已達成】</span>', parkingInfo: "有合作停車場，消費可折抵時數。" },
            ],
            intel: {
                seafood: { title: '美食筆記：境港的海之幸', text: '境港以捕獲量日本第一的「紅楚蟹」聞名。在「境港水産物直売センター」可以找到最新鮮的漁獲。' }
            },
            insights: {
                mizuki_road: { title: '專家見解：水木茂大道的遊玩攻略', text: '核心樂趣在於「集章拉力」。在觀光案內所購買「妖怪導覽手冊」，沿途集章可換取「完走證」。' }
            }
        },
        day8: {
            title: '古街與療癒之湯', date: '2/27 週五', location: '米子 → 倉吉 → 三朝溫泉', timeAnalysis: { travel: 2.0, activity: 5.5 },
            timeline: [
                { time: '上午', type: '🚆', event: '移動: 從米子搭乘JR至倉吉站。', description: '將大行李寄送至岡山(Day 10)飯店，攜帶過夜包。' },
                { time: '10:00-14:00', type: '🚶', event: '<a href="https://www.google.com/maps/search/?api=1&query=倉吉白壁土藏群" target="_blank" class="text-blue-600 hover:underline">倉吉白壁土藏群</a> 散策', description: '漫步於江戶時代的古街。', stay: '約 4 小時', parkingInfo: "觀光案內所旁有免費停車場。" },
                { time: '中午', type: '🍽️', event: '午餐: <a href="https://www.google.com/maps/search/?api=1&query=すし丸+ekie広島店7" target="_blank" class="text-blue-600 hover:underline">赤瓦五號館 久樂</a>', description: '在古老倉庫中品嚐鳥取特有的「年糕涮涮鍋」。' },
                { time: '14:30', type: '🚌', event: '移動: 從倉吉站搭乘路線巴士前往三朝溫泉。' },
                { time: '15:30', type: '🏨', event: '住宿 & 晚餐: <a href="https://www.google.com/maps/search/?api=1&query=三朝館" target="_blank" class="text-blue-600 hover:underline">三朝館</a>', description: '享受旅館提供的溫泉會席料理 (已含於一泊二食方案)。' },
            ],
            intel: {
                kurayoshi: { title: '倉吉白壁土藏群', text: '以玉川沿岸的白壁倉庫建築聞名，紅色石州瓦與白色牆壁形成鮮明對比，是絕佳的拍照地點。' }
            },
            insights: {
                misasa_onsen: { title: '療癒之湯：三朝溫泉', text: '這裡是世界少有的高濃度氡泉，據信有提高新陳代謝、增強免疫力的效果。溫泉街上的「河原風呂」是可免費體驗的露天混浴溫泉(需勇氣！)。' }
            }
        },
        day9: {
            title: '動漫巡禮 & 挑戰鳥取砂丘', date: '2/28 週六', location: '三朝溫泉 → 由良 → 鳥取', timeAnalysis: { travel: 2.5, activity: 6.0 },
            timeline: [
                { time: '上午', type: '🏨', event: '早餐: 於溫泉旅館內享用日式早餐 (已含於一泊二食方案)' },
                { time: '上午', type: '🚌', event: '移動: 從三朝溫泉搭乘巴士至倉吉站，轉乘JR至由良站。' },
                { time: '10:00-12:30', type: '🏛️', event: '由良/柯南小鎮 體驗 <a href="https://www.google.com/maps/search/?api=1&query=青山剛昌ふるさと館" target="_blank" class="text-blue-600 hover:underline">青山剛昌故鄉館</a>', ticketInfo: "大人 700日圓", stay: '約 2.5 小時', parkingInfo: "設有免費停車場。" },
                { time: '12:30-13:30', type: '🍽️', event: '午餐: <a href="https://www.google.com/maps/search/?api=1&query=喫茶ポアロ+鳥取" target="_blank" class="text-blue-600 hover:underline">喫茶ポアロ (白羅咖啡廳)</a>', parkingInfo: "位於「道の駅 大栄」內，設有大型免費停車場。" },
                { time: '14:00-15:00', type: '🚆', event: '移動：JR (由良駅 → 鳥取駅)', cost: 'JR Pass'},
                { time: '15:30-18:00', type: '🏜️', event:'<a href="https://www.google.com/maps/search/?api=1&query=鳥取砂丘" target="_blank" class="text-blue-600 hover:underline">鳥取砂丘</a> & <a href="https://www.google.com/maps/search/?api=1&query=砂の美術館" target="_blank" class="text-blue-600 hover:underline">砂之美術館</a>', ticketInfo: "砂之美術館: 大人 800日圓", stay: '2.5 小時', parkingInfo: "砂丘停車場 ¥500/次, 砂之美術館有獨立免費停車場。" },
                { time: '19:00', type: '🍽️', event: '晚餐: <a href="https://www.google.com/maps/search/?api=1&query=炭火焼肉+福ふく+鳥取" target="_blank" class="text-blue-600 hover:underline">炭火焼肉 福ふく</a> 品嚐鳥取和牛', description: '品嚐入口即化的鳥取和牛。<span class="emphasis">【美食任務：燒肉已達成】</span>', parkingInfo: "店家有少量免費車位，若客滿請使用周邊的收費停車場。" },
            ],
            intel: {
                tottori_bus: { title: '交通情報：麒麟獅子巴士', text: '僅在週末假日和暑假期間運行，是串連鳥取市區、鳥取城跡、砂丘等景點的便利巴士。持JR Pass可免費搭乘。' },
                sand_dunes_hack: { title: '砂丘攻略TIPS', text: '砂丘旁的遊客中心提供<span class="emphasis">免費租借長靴</span>的服務，可以避免沙子跑進自己的鞋子裡，非常推薦利用。' }
            },
            insights: {
                tottori_wagyu: { title: '美食筆記：鳥取和牛的奧秘', text: '鳥取和牛的特點在於油酸含量高，使得脂肪熔點較低，造就了入口即化的柔滑口感。' },
                sand_museum: { title: '藝術見解：砂之美術館的剎那之美', text: '砂之美術館的沙雕作品每年都會更換主題，展期結束後便會回歸塵土。這種「僅限當下」的剎那之美，正是其最獨特的魅力所在。' }
            }
        },
        day10: {
            title: '國寶與名園・返回山陽核心', date: '3/01 週日', location: '鳥取 → 岡山', timeAnalysis: { travel: 2.0, activity: 5.0 },
            timeline: [
                { time: '09:00', type: '☕', event: '早餐: <a href="https://www.google.com/maps/search/?api=1&query=すなば珈琲+鳥取駅前店" target="_blank" class="text-blue-600 hover:underline">すなば珈琲</a>' },
                { time: '10:00-11:49', type: '🚆', event: '移動: 特急スーパーいなば (鳥取駅 → 岡山駅)', cost: 'JR Pass (第二張啟用)' },
                { time: '中午', type: '🍽️', event: '午餐: <a href="https://www.google.com/maps/search/?api=1&query=吾妻寿司+岡山" target="_blank" class="text-blue-600 hover:underline">吾妻寿司</a> 品嚐岡山散壽司', parkingInfo: "無專用停車場，請使用岡山車站周邊的收費停車場。" },
                { time: '14:00-17:00', type: '🏯', event: '<a href="https://www.google.com/maps/search/?api=1&query=岡山城" target="_blank" class="text-blue-600 hover:underline">岡山城</a> & <a href="https://www.google.com/maps/search/?api=1&query=岡山後樂園" target="_blank" class="text-blue-600 hover:underline">後樂園</a>', awardHighlight: "日本三大名園 & 日本100名城 (No.70)", ticketInfo: "共通券 640日圓 (推薦)", stay: '3 小時', parkingInfo: "後樂園設有收費停車場 (¥100/小時)。" },
                { time: '17:30', type: '🍽️', event: '晚餐: <a href="https://www.google.com/maps/search/?api=1&query=味司+野村" target="_blank" class="text-blue-600 hover:underline">味司 野村</a> 品嚐醬汁豬排丼', description: '品嚐岡山道地的靈魂美食。<span class="emphasis">【美食任務：豬排飯已達成】</span>', parkingInfo: "無專用停車場，請使用周邊收費停車場。" },
                { time: '20:00', type: '🏨', event: '住宿: <a href="https://www.google.com/maps/search/?api=1&query=ダイワロイネットホテル岡山駅前" target="_blank" class="text-blue-600 hover:underline">ダイワロイネットホテル岡山駅前</a>' },
            ],
            intel: {
                efficiency_hack: { title: '岡山城/後樂園 效率攻略', items: [
                    "務必購買640日圓的<span class='emphasis'>共通券</span>，比分開買票節省170日圓。",
                    "建議遊覽順序：先逛<span class='emphasis'>後樂園</span>，從庭園拍攝岡山城的全景，再過月見橋參觀城堡內部。"
                ]}
            },
            insights: {
                demi_katsudon: { title: '美食筆記：醬汁豬排丼 (デミカツ丼)', text: '岡山的「醬汁豬排丼」是將炸豬排浸泡在特調的<span class="emphasis">多明格拉斯醬</span>中，結合了洋食風格。' }
            }
        },
        day11: {
            title: '岡山神話與歷史', date: '3/02 週一', location: '岡山市區', timeAnalysis: { travel: 1.5, activity: 6.0 },
            timeline: [
                { time: '上午', type: '☕', event: '早餐: 飯店或市區咖啡廳' },
                { time: '10:00-13:00', type: '⛩️', event: '桃太郎傳說探源: <a href="https://www.google.com/maps/search/?api=1&query=吉備津神社" target="_blank" class="text-blue-600 hover:underline">吉備津神社</a>', description: '搭乘JR吉備線(桃太郎線)前往，欣賞壯觀的木造大迴廊。', ticketInfo: "免費", stay: '約 3 小時', parkingInfo: "設有免費停車場。" },
                { time: '中午', type: '🍽️', event: '午餐: <a href="https://www.google.com/maps/search/?api=1&query=すし丸+ekie広島店4" target="_blank" class="text-blue-600 hover:underline">いんでいら</a> (蝦飯創始店)', description: '品嚐岡山B級美食代表、外觀黑色的炒飯「えびめし」。' },
                { time: '下午', type: '🛍️', event: '岡山市區散策與購物' },
                { time: '18:30', type: '🍽️', event: '晚餐: <a href="https://www.google.com/maps/search/?api=1&query=すし丸+ekie広島店8" target="_blank" class="text-blue-600 hover:underline">魚河岸 晴じゃ</a>', description: '在車站附近的居酒屋，品嚐岡山特產「ままかり寿司」與瀨戶內海鮮魚。' },
                { time: '傍晚', type: '🏨', event: '返回飯店休息' },
            ],
            intel: {
                kibitsu_shrine: { title: '吉備津神社情報', text: '這裡是桃太郎傳說的原型地。除了壯觀的迴廊，神社的「鳴釜神事」也非常有名，據說可以透過釜的鳴叫聲來占卜吉凶。' }
            },
            insights: {
                momotaro: { title: '文化見解：桃太郎與岡山', text: '岡山處處可見桃太郎的蹤跡，從JR吉備線的暱稱到伴手禮「吉備糰子」。了解桃太郎的故事能讓您的岡山之旅更添趣味。' }
            }
        },
        day12: {
            title: '倉敷美學 & 瀨戶內海絕景', date: '3/03 週二', location: '岡山 ↔ 倉敷 / 兒島', timeAnalysis: { travel: 2.5, activity: 6.5 },
             options: {
                optionA: {
                    label: '選項A: 倉敷美學漫遊',
                    timeline: [
                        { time: '09:00', type: '☕', event: '早餐: 岡山站內咖啡廳' },
                        { time: '09:18-09:35', type: '🚆', event: '搭乘JR山陽本線前往倉敷', cost: 'JR Pass'},
                        { time: '09:35-12:30', type: '🎨', event: '倉敷美觀地區散策 & <a href="https://www.google.com/maps/search/?api=1&query=大原美術館" target="_blank" class="text-blue-600 hover:underline">大原美術館</a>', ticketInfo: "大原美術館: 大人 1,300日圓", stay: '約 3 小時', parkingInfo: "請使用周邊停車場，如「倉敷市中央駐車場」(¥100/30分鐘)。" },
                        { time: '12:30-14:00', type: '🍽️', event: '午餐: <a href="https://www.google.com/maps/search/?api=1&query=三宅商店+倉敷" target="_blank" class="text-blue-600 hover:underline">三宅商店</a> 品嚐咖哩飯' },
                        { time: '14:00-15:30', type: '☕', event: '下午茶: <a href="https://www.google.com/maps/search/?api=1&query=くらしき桃子+総本店" target="_blank" class="text-blue-600 hover:underline">くらしき桃子</a> 水果聖代', description: '品嚐水果王國岡山的豪華水果聖代。<span class="emphasis">【美食任務：下午茶已達成】</span>', parkingInfo: "無專用停車場，請使用美觀地區周邊的收費停車場。" },
                        { time: '15:30-18:00', type: '🛍️', event: '<a href="https://www.google.com/maps/search/?api=1&query=三井アウトレットパーク+倉敷" target="_blank" class="text-blue-600 hover:underline">三井Outlet倉敷</a>購物', parkingInfo: "Outlet設有大型收費停車場 (購物可折抵時數)。" },
                    ]
                },
                optionB: {
                    label: '選項B: 丹寧聖地 & 鷲羽山夕陽',
                    timeline: [
                        { time: '09:30-10:00', type: '🚆', event: '移動: 從岡山站搭乘JR瀨戶大橋線前往兒島站。', cost: 'JR Pass'},
                        { time: '10:00-12:30', type: '👖', event: '<a href="https://www.google.com/maps/search/?api=1&query=すし丸+ekie広島店9" target="_blank" class="text-blue-600 hover:underline">兒島牛仔褲大道</a> 散策', description: '探索日本丹寧的發源地，尋找特色店家與商品。', stay: '約 2.5 小時', parkingInfo: "可利用『兒島車站西口停車場』等公共停車設施 (約¥100-200/小時)，部分店家消費可折抵停車費。" },
                        { time: '12:30-13:30', type: '🍽️', event: '午餐: <a href="https://www.google.com/maps/search/?api=1&query=松江城0" target="_blank" class="text-blue-600 hover:underline">RIVETS CAFE</a>', description: '在充滿丹寧工業風的咖啡館享用特色輕食。' },
                        { time: '14:00-14:30', type: '🚌', event: '移動: 從兒島站搭乘下電巴士前往「鷲羽山第二展望台」。', cost: '自理'},
                        { time: '14:30-17:30', type: '🌅', event: '在 <a href="https://www.google.com/maps/search/?api=1&query=鷲羽山展望台" target="_blank" class="text-blue-600 hover:underline">鷲羽山展望台</a> 等待日落', awardHighlight: "日本夕陽百選", description: '欣賞瀨戶大橋與瀨戶內海群島的壯麗夕陽絕景。', stay: '約 3 小時', parkingInfo: "展望台設有免費停車場。" },
                        { time: '傍晚', type: '🚆', event: '搭乘巴士返回兒島站，轉乘JR返回岡山。'},
                    ]
                },
                optionC: {
                    label: '選項C: 天空之城雲海挑戰 (高強度)',
                    timeline: [
                        { time: '05:25-06:17', type: '🚆', event: '搭乘JR伯備線 [普通] 首班車前往備中高梁', cost: 'JR Pass'},
                        { time: '06:20-08:30', type: '🌅', event: '搭乘預約的「雲海計程車」前往展望台', description: "共乘制，每人單程約 ¥1,500", stay: '約 2 小時' },
                        { time: '08:30-12:00', type: '🏯', event: '徒步登城 <a href="https://www.google.com/maps/search/?api=1&query=備中松山城" target="_blank" class="text-blue-600 hover:underline">備中松山城</a>', awardHighlight: "日本100名城 (No.68)", ticketInfo: "天守: 大人 500日圓", stay: '約 3.5 小時', parkingInfo: "計程車會送至登山口，「ふいご峠駐車場」免費。" },
                    ]
                }
            },
            intel: {
                denim_street_hack: { title: '兒島丹寧大道攻略', text: '許多店家提供免費的褲長修改服務，購買後可立即修改。此外，部分店家聯合提供停車優惠，購物時可詢問店員。' },
                local_snacks: { title: '倉敷美觀地區特色小吃', items: [
                    "岡山是水果王國，必嚐<span class='emphasis'>『くらしき桃子』</span>的季節水果聖代。",
                    "可嘗試IG上熱門的牛仔布藍色<span class='emphasis'>『丹寧包子』</span>，造型特殊。"
                ]},
                cloud_sea_hack: { title: '雲海挑戰TIPS (選項C)', text: '雲海最佳觀賞期為9月下旬至4月上旬的清晨。必須搭乘<span class="emphasis">雲海計程車（需預約）</span>才能在日出前抵達展望台。' }
            },
            insights: {
                washuzan: { title: '絕景攻略：鷲羽山夕陽', text: '被選為「日本夕陽百選」之一。看著太陽緩緩沉入瀨戶內海，將群島與宏偉的瀨戶大橋染成金黃色，是令人難忘的壯麗景色。' },
                kojima_denim_story: { title: '文化見解：從制服到時尚聖地', text: '兒島最初以製作學生制服起家，憑藉其厚實布料的縫紉技術，在60年代成功轉型，成為日本第一條國產牛仔褲的誕生地，奠定了其「丹寧聖地」的地位。' },
                photo_note: { title: "攝影師筆記：捕捉倉敷之美", text: "倉敷美觀地區的精髓在於光影。白天可在<span class='emphasis'>中橋</span>上拍攝川游船與垂柳的經典畫面；日落後，夜間點燈會亮至21:00，能拍出與白天截然不同的靜謐氛圍，建議攜帶腳架。" }
            }
        },
        day13: {
            title: '安藝小京都・竹原慢時光', date: '3/04 週三', location: '岡山 → 竹原 → 廣島', timeAnalysis: { travel: 3.0, activity: 5.0 },
            timeline: [
                { time: '上午', type: '🚆', event: '移動: 從岡山搭乘新幹線至三原，轉乘JR吳線至竹原。', description: '將大行李寄送至廣島(Day 13)飯店。' },
                { time: '11:00-16:00', type: '🚶', event: '<a href="https://www.google.com/maps/search/?api=1&query=竹原町並み保存地区" target="_blank" class="text-blue-600 hover:underline">竹原町並み保存地区</a> 散策', description: '在「安藝的小京都」體驗江戶時代的風情。', stay: '約 5 小時', parkingInfo: "保存地區周邊設有收費停車場，價格不明。" },
                { time: '中午', type: '🍽️', event: '午餐: <a href="https://www.google.com/maps/search/?api=1&query=すし丸+ekie広島店5" target="_blank" class="text-blue-600 hover:underline">ほり川</a>', description: '品嚐加入了清酒酒粕的特色御好燒(お好み焼き)。' },
                { time: '傍晚', type: '🚆', event: '移動: 從竹原搭乘JR吳線或高速巴士前往廣島市區。' },
                { time: '19:30', type: '🍽️', event: '晚餐: <a href="https://www.google.com/maps/search/?api=1&query=すし丸+ekie広島店9" target="_blank" class="text-blue-600 hover:underline">雑草庵</a>', description: '在市中心的隱密名店品嚐高品質的廣島鄉土料理與海鮮。' },
                { time: '晚上', 'type': '🏨', event: '住宿: <a href="https://www.google.com/maps/search/?api=1&query=広島ワシントンホテル" target="_blank" class="text-blue-600 hover:underline">広島ワシントンホテル</a>' },
            ],
            intel: {
                takehara_anime: { title: '動漫聖地巡禮', text: '竹原是動畫《玉響～tamayura～》的主要舞台，可以尋找動畫中出現的場景，如「普明閣」等。' }
            },
            insights: {
                cultural_deep_dive: { title: "深度解析：安藝小京都的鹽與酒", text: "竹原之所以被稱為『安藝的小京都』，是因為在江戶時代後期，這裡憑藉<span class='emphasis'>製鹽</span>與<span class='emphasis'>釀酒</span>業積累了巨大財富。如今保存完好的豪宅與街道，正是當時繁榮的見證。" }
            }
        },
        day14: {
            title: '從容歸途 & 廣島 Chill Day', date: '3/05 週四', location: '廣島市區', timeAnalysis: { travel: 1.0, activity: 7.0 },
            timeline: [
                { time: '上午', type: '☕', event: '早餐: 市區咖啡廳' },
                { time: '10:00-12:30', type: '🛍️', event: '購物: 廣島本通商店街', parkingInfo: "商店街為徒步區，可使用「広島市中央駐車場」(¥180/30分)。" },
                { time: '12:30-14:00', type: '🍽️', event: '午餐: <a href="https://www.google.com/maps/search/?api=1&query=Italian+Bar+CENA+広島" target="_blank" class="text-blue-600 hover:underline">Italian Bar CENA</a>', description: '在商店街中享受義式午間套餐。<span class="emphasis">【美食任務：義大利麵已達成】</span>', parkingInfo: "位於徒步區，請使用「広島市中央駐車場」等周邊停車場。" },
                { time: '14:00-18:00', type: '🛍️', event: '文化巡禮或購物: <a href="https://www.google.com/maps/search/?api=1&query=熊野筆セレクトショップ+広島" target="_blank" class="text-blue-600 hover:underline">熊野筆</a> / 藥妝補給', parkingInfo: "熊野筆廣島店有少量免費車位。" },
                { time: '19:30', type: '🍽️', event: '晚餐: <a href="https://www.google.com/maps/search/?api=1&query=かき小屋+広島駅前店" target="_blank" class="text-blue-600 hover:underline">かき小屋 廣島駅前店 (烤牡蠣)</a>', parkingInfo: "店家無專用停車場，可使用廣島車站周邊的收費停車場。" },
                { time: '21:00', type: '🏨', event: '住宿: <a href="https://www.google.com/maps/search/?api=1&query=ダイワロイネットホテル広島駅前" target="_blank" class="text-blue-600 hover:underline">ダイワロイネットホテル広島駅前</a>'}
            ],
            intel: {
                souvenir: { title: '特色伴手禮', text: '<a href="https://www.google.com/maps/search/?api=1&query=熊野筆セレクトショップ+広島" target="_blank" class="text-blue-600 hover:underline">熊野筆セレクトショップ</a>的化妝刷品質享譽全球，是廣島代表性的高級伴手禮。'}
            },
            insights: {
                last_day_strategy: { title: '<span class="emphasis">專家戰術：利用最後一日的緩衝</span>', text: '將最後一個整天安排為彈性日，是高明的行程規劃。這一天可以作為「緩衝」，處理旅途中未完成的事項，例如補買伴手禮、重遊特別喜歡的地點。' }
            }
        },
        day15: {
            title: '歸鄉・帶著星鰻飯的回憶', date: '3/06 週五', location: '廣島 → 台灣', timeAnalysis: { travel: 2.5, activity: 0.5 },
            timeline: [
                { time: '06:00', type: '🍽️', event: '早餐: <a href="https://www.google.com/maps/search/?api=1&query=マクドナルド+広島駅店" target="_blank" class="text-blue-600 hover:underline">麥當勞 広島駅店</a>', description: '用快速方便的速食早餐，為旅程的最後一天拉開序幕。<span class="emphasis">【美食任務：速食店已達成】</span>'},
                { time: '06:30-07:30', type: '🚌', event: '前往廣島機場 (HIJ)', cost: '¥1,450'},
                { time: '10:00-12:00', type: '✈️', event: '航班飛行: CI113 HIJ → TPE' }
            ],
            intel: {
                airport_souvenir: { title: '機場伴手禮補給', text: '若在市區忘了買伴手禮，廣島機場國內線航廈的商店比國際線更豐富。必買的「八天堂奶油麵包」和「紅葉饅頭」在機場都設有專櫃。' }
            },
            insights: {
                ekiben: { title: '文化筆記：駅弁 (車站便當)的儀式感', text: '在車站選購一份「駅弁」是一種充滿儀式感的體驗。廣島車站販售的「あなごめしうえの」星鰻飯便當，即使冷掉也依舊美味，是將旅途回憶帶上飛機的最佳選擇。' }
            }
        }
    }
};
