function pieceOfPie(array, startIdx, endIdx) {
    return array.slice(array.indexOf(startIdx), array.indexOf(endIdx) + 1);
}

pieceOfPie(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
);