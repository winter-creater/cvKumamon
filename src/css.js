const string = `/*
* 首先，需要画熊本熊的身体
*/
  .body {
    width: 320px;
    height: 240px;
    background-color: black;
  }
  /*
  * 接下来，画熊本熊的眼睛
  */
  .eye {
    border-radius: 50%;
    width: 64px;
    height: 64px;
    background-color: white;
  }
  /*
  * 右眼在右边（废话）
  */
  .eye.right {
    transform: translateX(70px);
  }
  /*
  * 左眼在左边（废话）
  */
  .eye.left {
    transform: translateX(-70px);
  }
  /*
  * 然后加两个眼珠子，并让它动起来
  */
  .eye::before { 
    height: 24px;
    width: 10px;
    background-color: black;
    animation: blink 0.7s infinite;
  }
/*
* 画眉毛
*/
  .eyebrow {
    width: 36px;
    height: 36px;
    background-color: white;
    
  }
  .eyebrow::before {   
    width: 36px;
    height: 36px;
    background-color: black;
  }
  /*
* 把眉毛放到正确的位置
*/
  .eyebrow.right {
    transform: translateX(80px) rotate(18deg);
  }
  .eyebrow.left {
    transform: translateX(-80px) rotate(-18deg);
  }
  /* 
 * 再画熊本熊的小脸蛋
  */
  .face {
    width: 80px;
    height: 80px;
    background-color: #ef2b2d;
    position: absolute;
  }
  /*
* 把小脸蛋放到正确的位置
*/
  .face.right {
    transform: translateX(140px);
  }
  .face.left {
    transform: translateX(-140px);
  }
  /*
  * 画熊本熊的招风耳
  */
  .ear {
    width: 60px;
    height: 60px;
    background-color: black;
    
  }
  /*
  * 把耳朵放到正确的位置
  */
  .ear.right {
    transform: translateX(130px);
  }
  .ear.left {
    transform: translateX(-130px);
  }
  .ear::before {
    width: 38px;
    height: 38px;
    background-color: white;
   
  }
  .ear.right::before {
    transform: translateX(-3px);
  }
  .ear.left::before {
    transform: translateX(3px);
  }
  /* 
  * 最后，画熊本熊的鼻子和嘴巴
  */
  .noseAndMouse {
    width: 160px;
    height: 120px;
    background-color: white;
  }
  .noseAndMouse .nose {
    width: 50px;
    height: 36px;
    background-color: black;
  }
  .noseAndMouse .mouse {
    width: 140px;
    height: 30px;
    background-color: black;
  }
  /*
  * 好了，这只熊本熊送给你啦！
  */
  `
export default string;