# savvyuni-sde-coding-exercise

### Overview
此練習題，主要的目的是要寫一个網頁版的富文本編輯器(Rich Text Editor)，需具備以下功能:

1. 可插入圖片，并可對圖片進行大小(Size)、位置(Position)等操作
2. 可插入數學公式，和特殊符號
3. 可調整字体(Font)、顏色(Font Color)，字体大小(Font Size)等文字型編輯
4. 可支持不同層級的Bullet Point，比如：
```
1. xxxx
  1.1 xxx
    1.1.1 xxx
 2. xxxx
  2.1 xxx
```
5. 理想的編輯器呈現方式為：
  - 網頁的左則為【編輯器】
  - 網頁的右則為【編輯器編譯后的結果】
 
* (Bonus) 可支持LaTex的語法輸入，尤其是其數學公式的輸入方式

可使用第3方插件(3rd Party Libraries)來實現，以下是可考慮使用的工具
1. CKEditor
2. Slate.js
3. Quill
4. Summernote
5. UEditor
6. wangEditor

非常建議考慮使用CKEditor來實現，尤其是它的v4版本，因為它提供大量可使用的Plugins。

實現的方式：
1. 可使用基礎的HTML/CSS/JS來編寫以上網頁
2. 理想的狀態，為透過ReactJS/VueJS等框架來編寫

### Deadline
- 於下周一，5月20號晚上11:59前，把完成好的代碼，透過pull request或email方式提交；
- 若選擇Email方式的話，請發送到it@savvypro.ca
