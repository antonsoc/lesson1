let money, time;

//ввод бюджета и месяца
function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

	while (isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');
	}
};

start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};

//ввод расходов на месяц (мин 2)
function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
			b = prompt("Во сколько обойдется?", '');
   
		if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null
			&& a != '' && b != '' && a.length < 50 ) {
			console.log('done');
			appData.expenses[a] = b;
		} else {
			i--;
		}  
	}
}

chooseExpenses();

//расчет дневного бюджета
function detectDayBudget() {
	appData.moneyPerDay = appData.budget / 30;
}

detectDayBudget();

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

//расчет уровня достатка
function detectLevel() {
	if (appData.moneyPerDay < 100) {
		console.log('Минимальный уровень достатка');
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log('Средний уровень достатка');
	} else if (appData.moneyPerDay > 2000) {
		console.log('Максимальный уровень достатка');
	} else {
		console.log('Произошла ошибка');
	}
}

detectLevel();

//расчет дохода с депозита(при наличии)
function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt("Какова сумма накоплений?", ""),
			percent = +prompt("Под какой процент?", "");

		appData.monthIncome = save/100/12*percent;
		alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
	}
}

checkSavings();

//функция для определения необязательных расходов
function chooseOptExpenses() {
	for (let i = 0; i < 3; i++) {
		let a = prompt("Статья необязательных расходов?", "");
		
		if (typeof(a) === "string" && typeof(a) != null && a != "" && a.length < 50) {
			appData.optionalExpenses[i] = a;
		}
	}
}