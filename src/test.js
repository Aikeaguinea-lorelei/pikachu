const string=`
.skin *{box-sizing: border-box;margin: 0;padding: 0;}
.skin *::before{box-sizing: border-box;}
*::after{box-sizing: border-box;}
.skin{
    position: relative;
    background: #ffe600;
    height: 100vh;
}
/* 圆和三角组成鼻子 */
.nose{
    border: 10px solid black;
    border-color: black transparent transparent transparent;
    width: 0px;
    height: 0px;
    position: absolute;
    left: 50%;
    top: 145px;
    /* 让鼻子移动到正中间(上面是靠left定位的,所以margin也应该设left) */
    /* 值为负,大小是width的一半 */
    margin-left: -10px;
    /* 把鼻子的图层放顶层(数值越大,越顶层) */
    z-index: 10;
}
/* hover上去的时候鼻子会动 */
@keyframes wave{
    0%{
        /* 默认状态时,不晃 */
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(5deg);
    }
    66%{
        transform: rotate(-5deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.nose:hover{
    /*无限次的动,每次动的时间为1秒*/
    animation: wave 300ms infinite;
    /* 动的轴心 */
    transform-origin: center bottom;
}
.yuan{
    position: absolute;
    /*调整长方形大小和位置,把它放在三角形正上方*/
    width: 20px;
    height: 6px;
    /*border: 1px solid green;*/
    top: -16px;
    left: -10px;
    /*给长方形上下设置不同的border-radius,以变成圆弧*/
    border-radius: 10px 10px 0 0;
    background: black;
}
.eye{
    border:2px solid #000 ;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius:50%;
}
/* 用伪元素设置眼睛高光 */
.eye::before{
    content:'';
    border: 2px solid #000;
    width: 32px;
    height: 32px;
    /*为了让它有宽度:定位要用block*/
    display: block;
    background: #fff;
    border-radius: 50%;
    /* 用定位微调高光位置,绝对相对都可以 */
    position: relative;
    left: 8px;
    top: 2px;
}
.eye.left{
    /*表示向左平移100*/
    transform: translateX(-100px);
}
.eye.right{
    transform: translateX(100px);
}
.mouth{
    /* border: 1px solid ; */
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    top: 170px;
    margin-left: -100px;
}
.mouth .up{
    position: relative;
    top: -10px;
    z-index: 2;
}
.mouth .up .lip{
    background: #ffe600;
}
.mouth .up .lip.left{
    border:3px solid black;
    height: 30px;
    width: 100px;
    border-radius: 0 0 0 50px;
    border-top-color: transparent;
    border-right-color: #ffe600;
    /*把做出来的左上巴旋转*/
    transform: rotate(-15deg);
}
.mouth .up .lip.right{
    border:3px solid black;
    height: 30px;
    width: 100px;
    border-radius: 0 0 50px 0;
    border-top-color: transparent;
    border-left-color: #ffe600;
    transform: rotate(15deg);
    margin-left: 98px;
    margin-top: -30px;
}
.mouth .down{
    /* border: 1px solid green; */
    height: 200px;
    position: absolute;
    top: 0;
    width: 100%;
    /* 嘴巴的颜色超出作用域部分隐藏:在[父元素]的css里写overflow:hidden */
    overflow: hidden;
}
/* 下巴:很高的椭圆的下半部分 */
.mouth .down .yuan1{
    border: 3px solid black;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 1000px;
    border-radius: 50%;
    background: #9b000a;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2{
    border: 1px solid ;
    width: 200px;
    height: 300px;
    background: #ff485f;
    /*此时它在1000px高的位置,所以要把它通过绝对定位搞下来*/position: absolute;
    bottom: -140px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
}
.face{
    position: absolute;
    left: 50%;
    border: 3px solid black;
    width: 88px;
    height: 88px;
    top: 200px;
    margin-left: -44px;
    z-index: 3;
}
.face.left{
    transform: translateX(-180px);
    background: #ff0000;
    border-radius: 50%;
}
.face.right{
    transform: translateX(180px);
    background: #ff0000;
    border-radius: 50%;
}
`


const demo=document.querySelector('#demo')
const demo2=document.querySelector('#demo2')

// 下面是一边打字一边生效样式的代码

let n=1
// 默认速度  (let一定要写在用time之前,否则会失效)
let time=100

// 设置一个播放器
const player={
    run :()=>{
        // 写完所有字之后n还是一直+1,所以应该设置打完以后n就不再加了
        if(n>string.length){
            // 使用id和interval 设置一个跳出循环的逻辑 (砸掉闹钟)
            window.clearInterval(id)
            return
        }
        n+=1
        // 展示string的子字符串(从第0个到第n个)
        demo.innerText=string.substring(0,n)
        demo2.innerHTML=string.substring(0,n)
        // 把滚动条显示的顶层拉到非常大,也就是永远在最底层
        // 这可以保证代码文本每新打一行,视框都会往下面滚动
        demo.scrollTop=99999
    },
    // 买新的闹钟
    play:()=>{
        return setInterval(player.run,time)
    },
    // 砸掉闹钟
    pause:()=>{
        window.clearInterval(id)
    },
    slow:()=>{
        player.pause()
        time=300
        id=player.play()
    },
    normal:()=>{
        player.pause()
        time=100
        id=player.play()
    },
    fast:()=>{
        player.pause()
        time=10
        id=player.play()
    }
}
let id=player.play()


// 添加暂停: 引用上面那个跳出循环的逻辑(把闹钟砸掉)
btnPause.onclick=()=>{
    player.pause()
}
// 重新播放: 新建这个setInterval循环(再买个新的闹钟,放到原来的位置)
btnPlay.onclick=()=>{
    // 从暂停的时候的id开始播放
    id=player.play()
}
// 变速按钮(把闹钟砸了,再定个新闹钟)
btnSlow.onclick=player.slow
btnNormal.onclick=player.normal
btnFast.onclick=player.fast