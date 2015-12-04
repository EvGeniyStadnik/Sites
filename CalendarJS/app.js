var myTable = document.createElement('table');
myTable.setAttribute('cellspacing', '0');

function createCalendar(id, year, month){
	var week, div, tds, ths, d, dEl, tdEl, setDt, dayweek, dayweekPrev, dayFv;
	week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
	div = document.getElementById(id);
	div.appendChild(myTable);
	myTable.innerHTML = setTable();
	tds = document.getElementsByTagName('td');
	ths = document.getElementsByTagName('th');
	d = new Date(year, month-1);
	dEl = 0;
	tdEl = d.getDay() - 1; //номер недели
	if(tdEl == -1) tdEl = 6; //Воскресенье
	dayweek = tdEl; 
	dayweekPrev = tdEl;
	dayFv = 1;
	for(dayweek; dayweek<ths.length; dayweek++){
		dEl++;
		setDt = new Date(year, month-1, dEl);//Даты th начиная с 1-го числа месяца
		ths[dayweek].innerHTML = week[dayweek] + ' '+ setDt.getDate();
	}; 
	for(dayweekPrev; dayweekPrev >= 0; dayweekPrev--){
		setDt = new Date(year, month-1, dayFv);//Даты th обратно начиная с 1-го числа месяца
		ths[dayweekPrev].innerHTML = week[dayweekPrev] + ' '+ setDt.getDate();
		dayFv --;
	};
	for(i=0; i<tds.length; i++){
		dEl++;
		setDt = new Date(year, month-1, dEl);
		tds[i].innerText = setDt.getDate();
	};
	
	
	
	function setTable(){
		var trElem = '';
		for(var i=0; i<5; i++){
			var tdElem = '';
			for(var j=0; j<week.length; j++){
				if(i == 0){ 
					tdElem += '<th></th>'; 
				} else {
					tdElem += '<td></td>';
				}
			}
			trElem += '<tr>' + tdElem +'</tr>';
		}
		return trElem;
	}
}	

var prev = document.querySelector('.nav-prev');
var next = document.querySelector('.nav-next');
var pres = document.querySelector('.pres-tm');
var today = document.querySelector('.btn-today');

var currentDate;

today.onclick = setToday;

function setToday(){
	currentDate = new Date();
	setDate.call(this);
}
setToday();

prev.onclick = function setPrev(){
	currentDate.setMonth(currentDate.getMonth()-1);
	setDate.call(this);	
}

next.onclick = function setNext(){
	currentDate.setMonth(currentDate.getMonth()+1);
	setDate.call(this);
}

function setDate(){
	var arrMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];//
	var year = currentDate.getFullYear();
	var month = currentDate.getMonth();	
	pres.innerHTML = arrMonth[month] + ' ' + year;
	createCalendar("cal", year, month+1);		
}






































