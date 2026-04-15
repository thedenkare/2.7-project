var body = document.body;
body.style.backgroundColor = "midnightblue"; // Темно-синий фон
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.height = "100vh";
body.style.margin = "0";

var mainBox = document.createElement("div");
mainBox.style.display = "flex";
mainBox.style.gap = "20px";
body.appendChild(mainBox);

var cardLeft = document.createElement("div");
cardLeft.style.backgroundColor = "darkslateblue"; // Цвет карточки
cardLeft.style.padding = "40px";
cardLeft.style.borderRadius = "10px";
cardLeft.style.borderTopRightRadius = "100px"; // Тот самый уголок
mainBox.appendChild(cardLeft);

var title = document.createElement("h1");
title.innerText = "Fylo";
title.style.color = "white";
title.style.fontFamily = "sans-serif";
cardLeft.appendChild(title);

var btn1 = document.createElement("button");
btn1.innerText = "📄";
btn1.style.padding = "10px";
btn1.style.marginRight = "5px";
btn1.style.backgroundColor = "midnightblue";
btn1.style.border = "none";
btn1.style.borderRadius = "5px";
cardLeft.appendChild(btn1);

var btn2 = document.createElement("button");
btn2.innerText = "📁";
btn2.style.padding = "10px";
btn2.style.marginRight = "5px";
btn2.style.backgroundColor = "midnightblue";
btn2.style.border = "none";
btn2.style.borderRadius = "5px";
cardLeft.appendChild(btn2);

var btn3 = document.createElement("button");
btn3.innerText = "☁️";
btn3.style.padding = "10px";
btn3.style.backgroundColor = "midnightblue";
btn3.style.border = "none";
btn3.style.borderRadius = "5px";
cardLeft.appendChild(btn3);

var cardRight = document.createElement("div");
cardRight.style.backgroundColor = "darkslateblue";
cardRight.style.padding = "40px";
cardRight.style.borderRadius = "10px";
cardRight.style.width = "400px";
cardRight.style.position = "relative";
cardRight.style.alignSelf = "flex-end"; // Чтобы стояла вровень снизу
mainBox.appendChild(cardRight);

var info = document.createElement("p");
info.innerText = "You've used 815 GB of your storage";
info.style.color = "white";
info.style.fontFamily = "sans-serif";
cardRight.appendChild(info);

var track = document.createElement("div");
track.style.backgroundColor = "black";
track.style.height = "15px";
track.style.borderRadius = "10px";
track.style.padding = "2px";
cardRight.appendChild(track);

var bar = document.createElement("div");
bar.style.backgroundColor = "deeppink"; // Яркий розовый цвет
bar.style.height = "100%";
bar.style.width = "80%";
bar.style.borderRadius = "10px";
track.appendChild(bar);

var bubble = document.createElement("div");
bubble.style.backgroundColor = "white";
bubble.style.position = "absolute";
bubble.style.top = "-40px";
bubble.style.right = "40px";
bubble.style.padding = "15px";
bubble.style.borderRadius = "10px";
bubble.style.fontWeight = "bold";
bubble.style.fontFamily = "sans-serif";
bubble.innerHTML = "185 <span style='color:gray; font-size:12px'>GB LEFT</span>";
cardRight.appendChild(bubble);