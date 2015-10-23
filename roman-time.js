'use strict';
var ascii_roman10 = new Array(10)
var ROWS_ASKII_PRINT = 14
var ascii_del = [
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
];
var ascii_roman0 = [
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
];
var ascii_roman1 = [
                " 888 ",
                " 888 ",
                " 888 ",
                " 888 ",
                " 888 ",
                " 888 ",
                " 888 ",
                " 888 ",
                " 888 ",
                " 888 ",
                " 888 ",
                " 888 ",
                " 888 ",
                " 888 ",
                " 888 "
];
var ascii_roman5 = [
                " 8888              8888 ",
                "  888              888  ",
                "  8888            888   ",
                "   8888          8888   ",
                "    888          888    ",
                "    8888        888     ",
                "     888        888     ",
                "      888      888      ",
                "      8888    8888      ",
                "       888    888       ",
                "        888  888        ",
                "        888  888        ",
                "         888888         ",
                "         88888          ",
                "          8888          "
];
var ascii_roman10 = [
                "  8888            8888  ",
                "   88888         8888   ",
                "     8888       8888    ",
                "      8888    8888      ",
                "       8888  8888       ",
                "        88888888        ",
                "         888888         ",
                "          88888         ",
                "        88888888        ",
                "       8888  8888       ",
                "      8888    8888      ",
                "     8888      8888     ",
                "    8888        8888    ",
                "  8888           88888  ",
                " 8888              8888 "
];
var ascii_roman50 = [
                " 888              ",
                " 888              ",
                " 888              ",
                " 888              ",
                " 888              ",
                " 888              ",
                " 888              ",
                " 888              ",
                " 888              ",
                " 888              ",
                " 888              ",
                " 888              ",
                " 888              ",
                " 888888888888888  ",
                " 888888888888888  "
];
function toRoman(number)
{
    var resultRoman = "";
    var countDec = parseInt(number / 10, 10);
    var countRes = number % 10;
    if (countDec < 4){
        for (var i = 1;i <= countDec; i++){
            resultRoman += "X";
        }
    }
    else{
        switch (countDec){
            case 4:
                resultRoman += "XL";
                break;
            case 5:
                resultRoman += "L";
                break;
            case 6:
                resultRoman += "LX";
                break;
        }
    }
    if (countRes != 0)
        switch (countRes){
            case 0:
                resultRoman += "-";
                break;
            case 1:
                resultRoman += "I";
                break;
            case 2:
                resultRoman += "II";
                break;
            case 3:
                resultRoman += "III";
                break;
            case 4:
                resultRoman += "IV";
                break;
            case 5:
                resultRoman += "V";
                break;
            case 6:
                resultRoman += "VI";
                break;
            case 7:
                resultRoman += "VII";
                break;
            case 8:
                resultRoman += "VIII";
                break;
            case 9:
                resultRoman += "IX";
                break;
            case 10:
                resultRoman += "X";
                break;
        }
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
    var asciiResult = toRoman(hours) + ":" + toRoman(minutes)
    for (var i=0;i<=ROWS_ASKII_PRINT;i++){
        var toWriteString = "";
        for (var j=0;j<asciiResult.length;j++){
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
