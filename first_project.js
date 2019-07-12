var list = document.querySelector('ul');
list.addEventListener('click', function (del) { //функция выполнения или удаления элемента
    if(del.target.tagName === "LI") {
       del.target.classList.toggle('checked');
    } else if(del.target.tagName === "SPAN") {
       var die = del.target.parentNode;
       die.remove();
    }
});

function newElement() {                  //функция создания нового элемента
   var li = document.createElement('li');
   var inputValue = document.getElementById('task').value;
   var t = document.createTextNode(inputValue);
   li.appendChild(t);
   if(inputValue == false) { 
      alert("Введите ваше дело!");
   } else {
      document.getElementById('list').appendChild(li);
   }
   document.getElementById('task').value = "";
   var span = document.createElement('SPAN');
   var txt = document.createTextNode("X");
   span.className = "close";
   span.appendChild(txt);
   li.appendChild(span);
}  
//Добавляем или изменяем значение:
sessionStorage.setItem('Опачки', 'Воробушки'); //теперь у вас в localStorage хранится ключ "myKey" cо значением "myValue"

//Выводим его в консоль:
var localValue = sessionStorage.getItem('Опачки');
console.log(localValue); //"myValue"
