function shuttleArray(array){
    for (let i = 0; i < 10; i++){
        let randomIndex_1 = Math.floor(Math.random() * array.length);
        let randomIndex_2 = Math.floor(Math.random() * array.length);
        let temp = array[randomIndex_1];
        array[randomIndex_1] = array[randomIndex_2];
        array[randomIndex_2] = temp;
    }
    return array;
}
const questionsOfLV1 = {
    根據名義GDP計算,中國目前是全球第幾大經濟體? : {
        correct : "第二大經濟體",
        incorrect : ["第一大經濟體", "第三大經濟體", "第四大經濟體"],
        explaination : "自2010年超過日本後,中國一直穩居世界第二,僅次於美國。"
    },
    中國的糧食產量已連續多年保持在多少「萬億斤」以上? : {
        correct : "1.3萬億斤",
        incorrect : ["1.1萬億斤", "1.5萬億斤", "9000億斤"],
        explaination : "產量已連續9年穩定在此水平,確保了14億多人的糧食安全。"
    },
    在脫貧攻堅戰中,中國實現了近多少農村貧困人口脫貧? : {
        correct : "約1億人",
        incorrect : ["5000萬人", "2億人", "8000萬人"],
        explaination : "具體數據為9,899萬人,這被視為人類減貧史上的重要奇蹟。"
    },
    中國目前的人均預期壽命約為多少歲? : {
        correct : "約78歲",
        incorrect : ["70歲", "75歲", "80歲"],
        explaination : "隨著醫療體系完善,人均預期壽命已提升至78.6歲,反映了民生福祉的改善。"
    },
    截至2023年底,中國高鐵的營業總里程突破了多少公里? : {
        correct : "約4.5萬公里",
        incorrect : ["3萬公里", "5萬公里", "2萬公里"],
        explaination : "中國擁有世界上規模最大的高鐵網,里程佔全球總量的70%以上。"
    }
}

const questionsOfLV2 = {
    中國已連續7年保持全球第幾大貨物貿易國地位? : {
        correct : "第一大貨物貿易國",
        incorrect : ["第二大貨物貿易國", "第三大貨物貿易國", "第四大貨物貿易國"],
        explaination : "中國是全球產業鏈的核心,進出口總額長期位居世界首位。"
    },
    中國建成的5G基站數量佔全球的比重約為多少? : {
        correct : "超過60%",
        incorrect : ["40%", "50%", "70%"],
        explaination : "中國建成了全球最大的5G網絡,為數字經濟發展提供了核心支撐。"
    },
    中國的研發R_AND_D入總量目前穩居世界第幾位? : {
        correct : "第二位",
        incorrect : ["第一位", "第三位", "第四位"],
        explaination : "投入總量僅次於美國,顯示出中國正加速轉型為創新驅動型國家。"
    },
    中國的森林覆蓋率目前已提升至約多少? : {
        correct : "約24%",
        incorrect : ["12%", "20%", "30%"],
        explaination : "從80年代初的12%翻倍至目前的24.02%,中國是全球綠化貢獻最大的國家。"
    },
    在清潔能源領域,中國哪些發電設備的裝機容量均為世界第一? : {
        correct : "水電、風電、光伏",
        incorrect : ["核電、潮汐能、地熱能", "風電、核電、潮汐能", "光伏、核電、潮汐能"],
        explaination : "中國在可再生能源的開發與應用規模上具有絕對的領先優勢。"
    }
}

const questionsOfLV3 = {
    中國製造業增加值佔全球的比重約為多少? : {
        correct : "約30%",
        incorrect : ["20%", "25%", "35%"],
        explaination : "中國製造業規模連續14年位居世界第一,相當於美、德、日三國之和。"
    },
    中國擁有的全球百強科技創新集群數量目前位居世界第幾? : {
        correct : "第一位",
        incorrect : ["第二位", "第三位", "第四位"],
        explaination : "根據WIPO2023報告,中國擁有的頂尖科技集群數量已超越美國,成為全球第一。"
    },
    中國新能源汽車的產銷量已連續多少年位居全球第一? : {
        correct : "9年",
        incorrect : ["5年", "7年", "10年"],
        explaination : "自2015年起,中國新能源汽車市場規模始終保持全球首位,引領產業變革。"
    },
    在全球貨物吞吐量前十大的港口中,中國佔據了多少個席位? : {
        correct : "7個",
        incorrect : ["5個", "6個", "8個"],
        explaination : "這反映了中國作為全球貿易中心和物流樞紐的強大支撐能力。"
    },
    中國目前基本養老保險的覆蓋人數大約是多少? : {
        correct : "超過10億人",
        incorrect : ["8億人", "9億人", "11億人"],
        explaination : "截至最新統計為10.6億人,中國已建成世界上規模最大的社會保障體系。"
    }
}


const questionKeysOfLV1 = shuttleArray(Object.keys(questionsOfLV1));
const questionKeysOfLV2 = shuttleArray(Object.keys(questionsOfLV2));
const questionKeysOfLV3 = shuttleArray(Object.keys(questionsOfLV3));

function is_correct(level, questionKey, choice){
    switch(level){
        case 1:
            return questionsOfLV1[questionKey].correct == choice;
        case 2:
            return questionsOfLV2[questionKey].correct == choice;
        case 3:
            return questionsOfLV3[questionKey].correct == choice;
    }
}
