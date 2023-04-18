
var images =[
    {
        "file":"https://www.sefram.com/images/products/photos/hi_res/207030301.jpg",
        "size": 49704
    },
    {
        "file":"https://www.sefram.com/images/products/photos/hi_res/4835.jpg",
        "size": 106567
    },
    {
        "file":"https://wallpaperaccess.com/full/2472433.jpg",
        "size": 147832
    },
    {
        "file":"https://www.sefram.com/images/products/photos/hi_res/5352DC.jpg",
        "size": 529756
    },
    {
        "file":"https://www.sefram.com/images/products/photos/hi_res/984605000.jpg",
        "size": 796999
    },
    {
        "file":"https://www.sefram.com/images/products/photos/hi_res/9861.jpg",
        "size": 1367480
    },
    {
        "file":"https://www.sefram.com/images/products/photos/hi_res/7203.jpg",
        "size": 1979489
    },
    {
        "file":"https://www.sefram.com/images/products/photos/hi_res/7202.jpg",
        "size": 2332216
    },
    {
        "file":"https://www.sefram.com/images/products/photos/hi_res/7847.jpg",
        "size": 2625339
    },
    {
        "file":"https://www.sefram.com/images/products/photos/hi_res/SP260B.jpg",
        "size": 3633130
    },
]

var global_time;

//BEFORE SPEED TEST
function speed(){
    
    const button = document.getElementById("btn");
    const buttonafter=document.getElementById("btn-after");
    buttonafter.style.display='none';
    document.getElementById("result").style.display = "block";
    
    global_time = new Date().getTime();
    button.disabled = true;
    button.style.display = 'none';
    func(0);
}

//SLEEP FN
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

//AFTER SPEEDTEST
function enable_btn(){
    sleep(2000);
    const button = document.getElementById("btn-after");
    document.getElementById("btn-after").innerHTML = "TRY AGAIN";
    document.getElementById("result").style.marginTop='0';
    button.style.display = 'block';
    button.disabled = false;
}


//RECURSION FUNCTION FOR DOWNLOADING IMAGES;
function func(i){
    let curr_time = new Date().getTime();
    if(curr_time>global_time+10000){
        enable_btn();
        return;
    }

    //ALL FILES ARE EXHAUSTED
    if(i===images.length){
        enable_btn();
        return;
    }

    var start,end,timeduration;
    start =new Date().getTime();
    let downloadsrc = new Image();
    let cacheimg = "?nn" + start;
    downloadsrc.src = images[i].file + cacheimg //DOWNLOADING THE IMAGE
    downloadsrc.onload = function () {
        end = new Date().getTime();
        timeduration = (end - start)/1000;
        let loadedbites = (images[i].size)*8
        let speed = ((loadedbites/timeduration)/1024/1024).toFixed(2);
        let ress=document.getElementById("result");
        ress.style.marginTop='150px';
        if(speed<1){
            speed = speed*1024;
            ress.innerHTML = speed +" "+ "Kbps";
        }
        else if(speed >=1){
            document.getElementById("result").innerHTML = speed +" "+ "Mbps";
        }
        
        //CALLING THE FUNCTION TO DOWNLOAD THE NEXT IMAGE
        i++;
        func(i);
    }
        
}
