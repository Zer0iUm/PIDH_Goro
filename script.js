function changeInfo(info) {
	setInfo = document.getElementById(info);
	selectedInfo = setInfo.id.slice(-1);
	setInfo.classList.add('show--info');

	if (selectedInfo == 1) {
		document.getElementById('show--info2').classList.remove('show--info');
		document.getElementById('show--info3').classList.remove('show--info');
	}
	if (selectedInfo == 2) {
		document.getElementById('show--info1').classList.remove('show--info');
		document.getElementById('show--info3').classList.remove('show--info');
	}
	if (selectedInfo == 3) {
		document.getElementById('show--info1').classList.remove('show--info');
		document.getElementById('show--info2').classList.remove('show--info');
	}
}

/**********PRODUTO**************/

function setQuantidade(input) {
	let valor = document.getElementById('input-quantidade').value;
	if (input === 'remove') {
		valor <= 0 ? (valor = 0) : valor--;
		document.getElementById('input-quantidade').value = valor;
	} else if (input === 'add') {
		valor++;
		document.getElementById('input-quantidade').value = valor;
	}
	total = document.getElementById('valorTotal').textContent;
	console.log(total);
}
