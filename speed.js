/*
  Para poder poner este script en tu server tienes que poner tambien un archivo en tu server y saber de que tamaño es para poner la informacion en imageAddr y downloadSize.
*/
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
    {
        "file":"https://images6.alphacoders.com/126/1261894.jpg",
        "size": 7274972
    },
    {
        "file":"https://svs.gsfc.nasa.gov/vis/a030000/a030800/a030877/frames/5760x3240_16x9_01p/BlackMarble_2016_464m_caribbean_labeled.png",
        "size": 13834144
    },
    {
        "file":"https://svs.gsfc.nasa.gov/vis/a030000/a030800/a030877/frames/5760x3240_16x9_01p/BlackMarble_2016_928m_russia_east_labeled.png",
        "size": 23403895
    }
]

var global_time;

//BEFORE SPEED TEST
function speed(){
    const button = document.getElementById("btn");
    global_time = new Date().getTime();
    button.disabled = true;
    func(0);
}

//AFTER SPEEDTEST
function enable_btn(){
    const button = document.getElementById("btn");
    document.getElementById("btn").innerHTML = "check again";
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
    if(i===images.length)return;

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
        if(speed<1){
            speed = speed*1024;
            document.getElementById("result").innerHTML = speed +" "+ "Kbps";
        }
        else if(speed >=1){
            document.getElementById("result").innerHTML = speed +" "+ "Mbps";
        }
        
        //CALLING THE FUNCTION TO DOWNLOAD THE NEXT IMAGE
        i++;
        func(i);
    }
        
}