//1.박스2개 만드기
//2. 드랍다운 리스트 만들기
//3. 환율정보 들고 오기
//4. 드랍다운 리스트에서 아이템 선택하면 아이템 바꿤
//5. 금액을 비역하면 환전이 된다.
//6. 드랍다운 리스트에서 아이템을 선택하면 아이템 기준으로 환전이됨
//7. 숫자를 한국어로 읽는 법
//8. 반대로 밑에 박스에서 숫자를 바꿔도 위에 박스에 환율이 적용이 된다.!

let currencyRatio = {
    USD:{
        KRW:1189.17,
        USD:1,
        VND:22800.00,
        unit:"달려"
    },
    KRW:{
        KRW:1,
        USD:0.00084,        
        VND:19.17,
        unit:"원"
    },
    VND:{
        KRW:0.052,
        USD:0.000044,        
        VND:1,
        unit:"동"
    }
}
let fromCurrency = 'USD'
let toCurrency = 'USD'

document
.querySelectorAll("#from-currency-list a")
.forEach(menu=>menu.addEventListener("click",function(){
    document.getElementById("from-button").textContent=this.textContent;     
    
    fromCurrency = this.textContent;
    console.log("fromCurrency는", fromCurrency);
    }));

   // console.log(document.querySelectorAll("#from-currency-list a"));


document
.querySelectorAll("#to-currency-list a")
.forEach(menu=>menu.addEventListener("click",function(){
    document.getElementById("to-button").textContent=this.textContent;     
    
    toCurrency = this.textContent;
    console.log("toCurrency는", fromCurrency);
    }));
