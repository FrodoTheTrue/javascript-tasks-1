var roman10 = new Array(10)
var ascii_roman10 = new Array(10)
roman10[0] = "-"
roman10[1] = "I";
roman10[2] = "II";
roman10[3] = "III";
roman10[4] = "IV";
roman10[5] = "V";
roman10[6] = "VI";
roman10[7] = "VII";
roman10[8] = "VIII";
roman10[9] = "IX";
roman10[10] = "X";
ascii_del = [
				"            ",
				"            ",
				"            ",
				"            ",
				"            ",
				"    8888    ",
				"    8888    ",
				"            ",
				"    8888    ",
				"    8888    ",
				"            ",
				"            ",
				"            ",
				"            ",
				"            "
]
ascii_roman0 = [
				"            ",
				"            ",
				"            ",
				"            ",
				"            ",
				"            ",
				"  888888888 ",
				"  888888888 ",
				"            ",
				"            ",
				"            ",
				"            ",
				"            ",
				"            ",
				"            "
]
ascii_roman1 = [
				"     888     ",
				"     888     ",
				"     888     ",
				"     888     ",
				"     888     ",
				"     888     ",
				"     888     ",
				"     888     ",
				"     888     ",
				"     888     ",
				"     888     ",
				"     888     ",
				"     888     ",
				"     888     ",
				"     888     "
				]
ascii_roman5 = [
				"  8888              8888",
				"   888              888 ",
				"   8888            888  ",
				"    8888          8888  ",
				"     888          888   ",
				"     8888        888    ",
				"      888        888    ",
				"       888      888     ",
				"       8888    8888     ",
				"        888    888      ",
				"         888  888       ",
				"         888  888       ",
				"          888888        ",
				"          88888         ",
				"           8888         "
]
ascii_roman10 = [
			"   8888            8888   ",
			"    88888         8888    ",
			"      8888       8888     ",
			"       8888    8888       ",
			"        8888  8888        ",
			"         88888888         ",
			"          888888          ",
			"           88888          ",
			"         88888888         ",
			"        8888  8888        ",
			"       8888    8888       ",
			"      8888      8888      ",
			"     8888        8888     ",
			"   8888           88888   ",
			"  8888              8888  "
]
ascii_roman50 = [
			"    888                ",
			"    888                ",
			"    888                ",
			"    888                ",
			"    888                ",
			"    888                ",
			"    888                ",
			"    888                ",
			"    888                ",
			"    888                ",
			"    888                ",
			"    888                ",
			"    888                ",
			"    888888888888888    ",
			"    888888888888888    "
]
function toRoman(number)
{
	var resultRoman = "";
	countDec = parseInt(number / 10, 10);
	countRes = number % 10;
	if (countDec < 4)
	{
		for (var i = 1;i <= countDec; i++)
		{
			resultRoman += roman10[10];
		}
	}
	else
	{
		switch (countDec)
		{
			case 4:
				resultRoman += "XL"
				break;
			case 5:
				resultRoman += "L"
				break;
			case 6:
				resultRoman += "LX"
				break;
		}
	}
	if (countRes != 0)
		resultRoman += roman10[countRes]
	if (countRes == 0 && countDec == 0)
		return "-"
	return resultRoman
}
var hours = parseInt(process.argv[2], 10);
var minutes = parseInt(process.argv[3], 10);
if (isNaN(hours) || isNaN(minutes))
{
	console.log("Incorrect format of data input")
}
else if (hours > 23 || hours < 0 || minutes > 60 || minutes < 0)
{
	console.log("Incorrect range of hours or minutes");
}
else
{
	asciiResult = toRoman(hours) + ":" + toRoman(minutes)
	for (var i=0;i<=14;i++)
	{
		toWriteString = "";
		for (var j=0;j<asciiResult.length;j++)
		{
			switch (asciiResult[j]){
				case "-":
					toWriteString += ascii_roman0[i]
					break
				case "I":
					toWriteString += ascii_roman1[i]
					break
				case "V":
					toWriteString += ascii_roman5[i]
					break
				case "X":
					toWriteString += ascii_roman10[i]
					break
				case "L":
					toWriteString += ascii_roman50[i]
					break
				case ":":
					toWriteString += ascii_del[i]
					break
			}
		}
		console.log(toWriteString + '\n')
	}
}
