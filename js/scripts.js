// ## Lectura

// 1️⃣ Saludar a través un objeto con nombre y ciudad; luego mostrar un mensaje de bienvenida en español.

// Ejemplo salida: "Hola Camila, has llegado a San Francisco."

const welcomingInspanish = data => {
	console.log(`Hola ${data.name}, has llegado a ${data.city}`);
};
welcomingInspanish({
	name: 'Camila',
	city: 'San Francisco'
});

// 2️⃣ Verificar la mayoría de edad.

// Ejemplo de entrada:

// Ejemplo de salida:"Abby es menor de edad" o "Abby es mayor de edad"

const verificateUser = info => {
	info.age < 18
		? console.log('Abby es menor de edad.')
		: console.log('Abby es mayor de edad.');
};
verificateUser({
	name: 'Abby',
	age: 17
});

// 3️⃣ Macarena y los promedios:
// Array de objetos student con name y grades (array de números). Calcular y mostrar el promedio.

// Ejemplo de entrada: calculateStudentAverage(
// [{
// name: "Bego",
// grades: [8, 9, 10]
// },
// {
// name: "Abby",
// grades: [8, 9, 10]
// }
// ]);

// Ejemplo de salida:
// "El promedio de Bego es 9"
// "El promedio de Abby es 9"

const calculateStudentAverage = totalGrades => {
	//   const sumFirstUser = totalGrades[0].grades.reduce(
	//     (acc, number) => acc + number
	//   );
	//   const sumSecondUser = totalGrades[1].grades.reduce(
	//     (acc, number) => acc + number
	//   );

	totalGrades.forEach(users => {
		//es como un bucle for y recorre cada parte del ARRAY
		const sumGrades = users.grades.reduce((acc, grade) => acc + grade);
		const gradesAverage = sumGrades / users.grades.length;
		console.log(`El promedio de ${users.name} es ${gradesAverage}.`);
	});
};
calculateStudentAverage([
	{
		name: 'Bego',
		grades: [10, 10, 10]
	},
	{
		name: 'Abby',
		grades: [8, 9, 10]
	}
]);

// ## Lectura y creación

// 4️⃣ Macarena y la clasificación de números:
// Crea una función classifyNumbers que reciba un objeto con:

// numbers: Array de números a clasificar.

// Debe imprimir un objeto con dos arrays: números pares e impares.

// Ejemplo de entrada: classifyNumbers({numbers: [1, 2, 3, 4, 5, 6]});

// Ejemplo de salida: {result: { even: [2, 4, 6], odd: [1, 3, 5] }}

const classifyNumbers = totalNumbers => {
	const data = { result: { even: [], odd: [] } };

	totalNumbers.numbers.forEach(number => {
		if (number % 2 === 0) {
			data.result.even.push(number);
		} else {
			data.result.odd.push(number);
		}
	});
	console.log(data);
};

classifyNumbers({
	numbers: [1, 2, 3, 4, 5, 6]
});

// 5️⃣ Camila y la clasificación de edades:

// Debe imprimir un objeto con la clasificación en tres arrays: children, teens y adults.

// Ejemplo de entrada: classifyAges({ages: [5, 12, 15, 19, 32, 7, 17]});

// Ejemplo de salida:{ result: { children: [5, 12, 7], teens: [15, 17], adults: [19, 32] }}

const classifyAges = totalAges => {
	const data = { result: { children: [], teens: [], adults: [] } };
	totalAges.ages.forEach(age => {
		if (age < 13) {
			data.result.children.push(age);
		} else if (age >= 13 && age <= 17) {
			data.result.teens.push(age);
		} else {
			data.result.adults.push(age);
		}
	});

	console.log(data);
};
classifyAges({ ages: [5, 12, 15, 19, 32, 7, 17] });

// 6️⃣ Cambiar el estado de un semáforo. Objeto con state, elije uno de los tres ("red", "yellow", "green"). Pasar de red a green, luego a yellow, y de yellow a red, cíclicamente.

// Ejemplo de entrada: changeTrafficLight({state: 'red'});
// Ejemplo de salida: "El semáforo cambió a yellow"

// Actualizar la propiedad state según el color actual y mostrar: "El semáforo cambió a ..."

const changeTrafficLight = light => {
	if (light.state === 'red') {
		light.state = 'green';
	} else if (light.state === 'green') {
		light.state = 'yellow';
	} else if (light.state === 'yellow') {
		light.state = 'red';
	}
	console.log(`El semáforo cambió a ${light.state}.`);
};
changeTrafficLight({ state: 'green' });

// 7️⃣ Bego y la combinación de listas:
// Crea una función combineLists que reciba un objeto listCombiner con:

// names: Array de nombres.

// surnames: Array de apellidos.

// Debe devolver un objeto con todas las combinaciones posibles entre nombres y apellidos.

// Ejemplo de entrada: combineLists({names: ['Alice', 'Bob'], surnames: ['Smith', 'Johnson']});

// Ejemplo de salida: {combinations: [ 'Alice Smith', 'Alice Johnson', 'Bob Smith', 'Bob Johnson' ]}

const combineLists = lists => {
	const totalCombinations = { combinations: [] };
	lists.names.forEach(name => {
		lists.surnames.forEach(surname => {
			if (name !== surname) {
				totalCombinations.combinations.push(name + ' ' + surname);
			}
		});
	});
	console.log(totalCombinations);
};
combineLists({ names: ['Alice', 'Bob'], surnames: ['Smith', 'Johnson'] });
