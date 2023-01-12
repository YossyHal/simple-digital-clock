// デジタル時計表示用
let clock = null;
let isViewMs = false;

// デジタル時計を表示する
const digitalClock = ()=>{
    // 現在時刻取得
    const now = new Date();

    // 時・分・秒・ミリ秒を取得
    const [hour, minute, second, ms] = [now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds()];

    // 0埋め処理
    const [txtHour, txtMinute, txtSecond, txtMs] = [
        String(hour).padStart(2, "0"),
        String(minute).padStart(2, "0"),
        String(second).padStart(2, "0"),
        String(ms).padStart(3, "0"),
    ];

    // 表示
    let txtDigitalClock;
    if(isViewMs){
        txtDigitalClock = `${txtHour}:${txtMinute}:${txtSecond}.${txtMs}`;
    }else{
        txtDigitalClock = `${txtHour}:${txtMinute}:${txtSecond}`;
    }
    // const txtDigitalClock = `${txtMs}`;
    clock.textContent = txtDigitalClock;
    requestAnimationFrame(digitalClock);
};

// ミリ秒の表示有無を切り替える
const changeViewMs = ()=>{
    isViewMs = !isViewMs;
    if(isViewMs){
        document.getElementsByTagName("main")[0].style.fontSize = "14vw"
    }else{
        document.getElementsByTagName("main")[0].style.fontSize = "18vw"
    }
};

// 起動時の処理
window.addEventListener("load", ()=>{
    // 時計表示部分DOM取得
    clock = document.getElementById("clock");

    // デジタル時計開始
    digitalClock();
});
