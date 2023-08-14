//Отвечает за показ fte группы при скроле
//id = fte - id нашего блока
//class = fte-show - показать блок
class Fte {
    constructor(){
    }
    init(){
        const el = elFte.getBoundingClientRect().top;
        console.log(el);
        if(el <= 360){
            console.log(el);
            console.log('finish');
        }
    }
}
const elFte = document.querySelector("#fte"); // Получаем id блока FTE
let fteId = new Fte(elFte);
export default fteId;
