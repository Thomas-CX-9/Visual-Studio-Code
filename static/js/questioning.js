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
    中國發射的第一顆人造衛星是 : { // qeuestion
        correct : "東方紅一號", // correct ans
        incorrect : ["天宮一號", "神舟一號", "嫦娥一號"], // incorrect ans
        explaination : "東方紅一號於 1970 年成功發射，標誌著中國進入航天時代的開端，發射時播放的《東方紅》樂曲響徹太空，是中國航天事業的里程碑" // explanation of ans
    },
    中國首位進入太空的航天員是誰 : {
        correct : "楊利偉",
        incorrect : ["翟志剛", "景海鵬", "聶海勝"],
        explaination : "楊利偉於 2003 年搭乘神舟五號飛船進入太空，實現了中國的首次載人航天飛行，將中國送入了全球「航天俱樂部」。"
    },
    中國的探月工程被命名為什麼 : {
        correct : "嫦娥工程",
        incorrect : ["天問工程", "后羿工程", "織女工程"],
        explaination : "該工程以中國神話中的月亮女神命名，旨在探測月球，分「繞、落、回」三期實施，代表了中國的探月願景。"
    },
    中國主要的運載火箭系列名稱是 : {
        correct : "長征系列",
        incorrect : ["先鋒", "勝利者", "開拓者"],
        explaination : "長征系列運載火箭是中國航天發射任務的主力軍，名稱取自紅軍的長征，代表著中國航天人艱苦卓絕的奮鬥精神。"
    },
    中國自主研發的全球衛星導航系統是 : {
        correct : "北斗",
        incorrect : ["GPS", "格洛納斯", "伽利略"],
        explaination : "北斗衛星導航系統 (BD) 是中國自行建設和運營的全球衛星導航系統，提供高精度定位服務，與美國 GPS 並列。"
    }
}
const questionsOfLV2 = {
    神舟飛船與天宮目標飛行器間的對接方式是 : {
        correct : "自動對接",
        incorrect : ["剛性對接", "手動對接", "軟性對接"],
        explaination : "神舟飛船與空間站的交會對接，主要依靠自動導引和控制技術實現，極為精準，是建立空間站的關鍵技術。"
    },
    首次實現月球軟著陸及巡視探測的任務是 : {
        correct : "嫦娥三號",
        incorrect : ["嫦娥一號", "嫦娥二號", "嫦娥四號" ],
        explaination : "嫦娥三號於2013年成功實施月球軟著陸，並釋放「玉兔號」月球車進行巡視探測，是中國探月工程二期的關鍵一步。"
    },
    天問一號在火星實現了哪三個目標 : {
        correct : "繞、落、探",
        incorrect : ["飛、繞、回", "探、建、返", "繞、落、建"],
        explaination : "天問一號一次性完成了火星環繞（繞）、著陸（落）和巡視探測（探）三大任務，在世界火星探測史上是獨創性的成就。"
    },
    中國空間站的正式名稱是 : {
        correct : "天宮",
        incorrect : ["東方之星", "崑崙", "華夏"],
        explaination : "「天宮」是中國載人航天工程的重要組成部分，用於長期開展太空科學實驗與技術試驗，故名為天宮空間站。"
    },
    執行載人任務的長征火箭型號通常是 : {
        correct : "長征二號",
        incorrect : ["長征七號", "長征十號", "長征五號"],
        explaination : "長征二號火箭是專為載人航天任務研製的，具有高可靠性和逃逸系統，被航天人親切地稱為「神箭」。"
    }
}
const questionsOfLV3 = {
    中國首個貨運飛船的名稱是 : {
        correct : "天舟一號",
        incorrect : ["神舟八號", "嫦娥五號", "北斗三號"],
        explaination : "天舟系列貨運飛船用於為空間站補給物資、推進劑和運送實驗載荷，是中國空間站後勤補給的生命線。"
    },
    人類首次在月球背面軟著陸的任務是 : {
        correct : "嫦娥四號",
        incorrect : ["嫦娥三號", "嫦娥五號", "嫦娥二號"],
        explaination : " 嫦娥四號於2019年成功在月球背面預選區域著陸，是人類歷史上首次，必須依賴「鵲橋號」中繼衛星進行通訊。"
    },
    長征五號系列火箭的暱稱是 : {
        correct : "胖五",
        incorrect : ['擎天柱', '大力士', '巨龍'],
        explaination : "因其芯級直徑達到5米，體型比其他長征系列火箭粗壯，長征五號被航天人親切地稱為「胖五」。"
    },
    北斗系統實現高精度定位的基礎是 : {
        correct : "時頻同步",
        incorrect : ["姿態控制", "激光測距", "太陽帆板"],
        explaination : "北斗系統通過多星時頻同步技術，結合原子鐘，精確測量信號傳播時間，從而實現高精度定位。"
    },
    神舟飛船返回艙在返回時採用何種降落方式 : {
        correct : "氣動減速傘降",
        incorrect : ["水面迫降", "軌道制動降落", "彈道式降落"],
        explaination : "返回艙通過氣動減速、降落傘開傘和反推火箭共同作用，最終實現軟著陸，這是載人返回的主要方式。"
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