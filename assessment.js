'use strict';
const userNameInput = document.getElementById("user-name");
const assessmentButton = document.getElementById("assessment");
const resultDivided = document.getElementById("result-area");
const tweetDivided = document.getElementById("tweet-area");

/**
     * 指定した要素の子供をすべて削除する
     * @param {HTMLElement} element HTMLの要素
     */
    function removeAllChildren(element){
        while(element.firstChild){//resulto-areaになにかタグがある限りループ 何かあればtrueになる　何もなくなればfa
            element.removeChild(element.firstChild);
    
    }
  }

     userNameInput.onkeydown = event =>{
         if(event.key === 'Enter'){
             assessmentButton.onclick();

         }
     };
assessmentButton.onclick = function () {

    const userName = userNameInput.value;
    console.log(userName);
    //入力が無い時は処理を中断する
    if(userName.length===0){
        returen;
    }

    //結果表示エリアの作製

    
  
  /**
   * 
   * @param {HTMLElement} element HTMLの要素
   */
  
  function createAssessmentResult(element){
      //resultareaにh3タグで"診断結果を表示"という文字を表示
   const h3 = document.createElement('h3');//h3にh3タグをつくる
   h3.innerText = '診断結果';// 変数h3に'診断結果'を入れる
   element.appendChild(h3);//result-areaにh3をいれる　　タグを入れるのはappendchild


   //診断処理をじっこう
   const p =document.createElement('p');
   const result = assessment(userName);
   p.innerText = result;　//ここまでではjava内のみ
   element.appendChild(p); //resultDividedにPを入れるんだ！
    
   //result-areaにpタグで診断処理を表示

   
  }
//診断結果の表示
  removeAllChildren(resultDivided);
  const result = assessment(userName);
  createAssessmentResult(resultDivided,result);
  

  
  //ツイートエリアの作成
  removeAllChildren(tweetDivided);

  //aタグを作って属性を設定する
  const a = document.createElement('a');
  const hrefValue =
   'https://twitter.com/intent/tweet?button_hashtag=＃'
    +encodeURIComponent('あなたのいいところ')
    +'&ref_src=twsrc%5Etfw';
  a.setAttribute('href',hrefValue);
  a.setAttribute('class','twitter-hashtag-button');
  a.setAttribute('data-text',result);
  a.innerText ='Tweet #あなたのいいところ';

  //scriptタグをつくって属性を設置

  const script = document.createElement('script');
  const src = 'https://platform.twitter.com/widgets.js';
  script.setAttribute('src',src);
  

  //aタグをＨＴＭＬタグとして追加する
  //scriptタグをＨＴＭＬに追加
  tweetDivided.appendChild(a);
  tweetDivided.appendChild(script);
  

 
  


 
};

const anserwers = [
'{userName}のいいところは情熱です。{userName}の情熱に周りの人は感化されます。',
'{userName}のいいところは厳しさです。{userName}の厳しさがものごとをいつも成功に導きます。',
'{userName}のいいところは知識です。博識な{userName}を多くの人が頼りにしています。',
'{userName}のいいところはユニークさです。{userName}だけのその特徴が皆を楽しくさせます。',
'{userName}のいいところは用心深さです。{userName}の洞察に、多くの人が助けられます。',
'{userName}のいいところは見た目です。内側から溢れ出る{userName}の良さに皆が気を惹かれます。',
'{userName}のいいところは決断力です。{userName}がする決断にいつも助けられる人がいます。',
'{userName}のいいところは思いやりです。{userName}に気をかけてもらった多くの人が感謝しています。',
'{userName}のいいところは感受性です。{userName}が感じたことに皆が共感し、わかりあうことができます。',
'{userName}のいいところは節度です。強引すぎない{userName}の考えに皆が感謝しています。',
'{userName}のいいところは声です。{userName}の特徴的な声は皆を惹きつけ、心に残ります。',
'{userName}のいいところは好奇心です。新しいことに向かっていく{userName}の心構えが多くの人に魅力的に映ります。',
'{userName}のいいところは気配りです。{userName}の配慮が多くの人を救っています。',
'{userName}のいいところはその全てです。ありのままの{userName}自身がいいところなのです。',
'{userName}のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる{userName}が皆から評価されています。',
'{userName}のいいところはまなざしです。{userName}に見つめられた人は、気になって仕方がないでしょう。',
    
];
  

 /**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param{string} userName //ユーザーの名前
 * @return{string} //診断結果
 * 
 */

 function assessment (userName) {
     let userNameNumber = 0;
     for( let i =0; i < userName.length; i++){
     
        userNameNumber = userNameNumber + userName.charCodeAt(i);
    }
    //uwerNameを数字に変更
    
    //userNameの数字を0－15の範囲にする
    let answerNumber = userNameNumber % anserwers.length;
    
    let result = anserwers[answerNumber];
　　result.replace(/\{userName\}/g, userName);//置換



    //診断処理を後から書く
    return result.replace(/\{userName\}/g, userName);


    console.assert(
        assessment('太郎')=== assessment('太郎'),
                          '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
    );
    

 }


 

