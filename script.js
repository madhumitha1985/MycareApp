function login(){

alert("Login Successful");

window.location.href="index.html";

}

function showDiet(){

let patient = document.getElementById("patient").value;

let result = document.getElementById("result");


// SUGAR PATIENT

if(patient=="Sugar Patient"){

result.innerHTML = `

<table border="1" width="100%">

<tr>
<th>Eat</th>
<th>Don't Eat</th>
</tr>

<tr>

<td>

<b>Vegetables:</b><br>
Carrot<br>
Beans<br>
Broccoli<br>
Cabbage<br><br>

<b>Greens:</b><br>
Spinach<br>
Drumstick Leaves<br>
Arai Keerai<br>
Siru Keerai<br><br>

<b>Daal:</b><br>
Toor Dal<br>
Moong Dal<br>
Channa Dal<br>
Green Gram<br><br>

<b>Fruits:</b><br>
Apple<br>
Orange<br>
Guava<br>
Papaya<br><br>

<b>Non Veg:</b><br>
Fish<br>
Boiled Chicken<br>
Egg White<br><br>

<b>Nuts:</b><br>
Almonds<br>
Walnuts<br>
Pistachio<br>
Groundnuts

</td>

<td>

Sugar<br>
Cool Drinks<br>
White Rice Excess<br>
Bakery Foods<br>
Ice Cream<br>
Chocolate<br>
Oily Foods

</td>

</tr>

</table>

`;

}



// BP PATIENT

else if(patient=="BP Patient"){

result.innerHTML = `

<table border="1" width="100%">

<tr>
<th>Eat</th>
<th>Don't Eat</th>
</tr>

<tr>

<td>

<b>Vegetables:</b><br>
Beetroot<br>
Cucumber<br>
Beans<br>
Carrot<br><br>

<b>Greens:</b><br>
Spinach<br>
Fenugreek Leaves<br>
Drumstick Leaves<br>
Arai Keerai<br><br>

<b>Daal:</b><br>
Toor Dal<br>
Green Gram<br>
Moong Dal<br>
Masoor Dal<br><br>

<b>Fruits:</b><br>
Banana<br>
Orange<br>
Watermelon<br>
Apple<br><br>

<b>Non Veg:</b><br>
Fish<br>
Boiled Chicken<br>
Egg White<br><br>

<b>Nuts:</b><br>
Walnuts<br>
Almonds<br>
Pistachio<br>
Cashews

</td>

<td>

Salt Excess<br>
Pickle<br>
Chips<br>
Fast Foods<br>
Oily Foods<br>
Red Meat<br>
Processed Foods

</td>

</tr>

</table>

`;

}



// DIALYSIS PATIENT

else if(patient=="Dialysis Patient"){

result.innerHTML = `

<table border="1" width="100%">

<tr>
<th>Eat</th>
<th>Don't Eat</th>
</tr>

<tr>

<td>

<b>Vegetables:</b><br>
Cabbage<br>
Cauliflower<br>
Beans<br>
Bottle Gourd<br><br>

<b>Greens:</b><br>
Small Amount Spinach<br>
Arai Keerai<br>
Drumstick Leaves<br><br>

<b>Daal:</b><br>
Moong Dal<br>
Limited Toor Dal<br>
Green Gram<br><br>

<b>Fruits:</b><br>
Apple<br>
Pineapple<br>
Papaya<br>
Pear<br><br>

<b>Non Veg:</b><br>
Egg White<br>
Fish<br>
Boiled Chicken<br><br>

<b>Nuts:</b><br>
Limited Almonds<br>
Limited Walnuts<br>
Pistachio

</td>

<td>

Banana<br>
Excess Water<br>
Salt<br>
Cool Drinks<br>
Pickle<br>
Processed Foods<br>
Potato Excess

</td>

</tr>

</table>

`;

}



// PREGNANT WOMEN

else if(patient=="Pregnant Women"){

result.innerHTML = `

<table border="1" width="100%">

<tr>
<th>Eat</th>
<th>Don't Eat</th>
</tr>

<tr>

<td>

<b>Vegetables:</b><br>
Carrot<br>
Beetroot<br>
Beans<br>
Pumpkin<br><br>

<b>Greens:</b><br>
Spinach<br>
Drumstick Leaves<br>
Fenugreek Leaves<br>
Arai Keerai<br><br>

<b>Daal:</b><br>
Toor Dal<br>
Moong Dal<br>
Masoor Dal<br>
Green Gram<br><br>

<b>Fruits:</b><br>
Apple<br>
Banana<br>
Pomegranate<br>
Orange<br><br>

<b>Non Veg:</b><br>
Egg<br>
Fish<br>
Boiled Chicken<br><br>

<b>Nuts:</b><br>
Almonds<br>
Walnuts<br>
Dates<br>
Pistachio

</td>

<td>

Junk Foods<br>
Excess Coffee<br>
Cool Drinks<br>
Packed Foods<br>
Oily Foods

</td>

</tr>

</table>

`;

}



// CANCER PATIENT

else if(patient=="Cancer Patient"){

result.innerHTML = `

<table border="1" width="100%">

<tr>
<th>Eat</th>
<th>Don't Eat</th>
</tr>

<tr>

<td>

<b>Vegetables:</b><br>
Broccoli<br>
Carrot<br>
Beans<br>
Cabbage<br><br>

<b>Greens:</b><br>
Spinach<br>
Drumstick Leaves<br>
Arai Keerai<br>
Mint Leaves<br><br>

<b>Daal:</b><br>
Moong Dal<br>
Toor Dal<br>
Green Gram<br>
Masoor Dal<br><br>

<b>Fruits:</b><br>
Apple<br>
Papaya<br>
Orange<br>
Guava<br><br>

<b>Non Veg:</b><br>
Fish<br>
Boiled Chicken<br>
Egg White<br><br>

<b>Nuts:</b><br>
Almonds<br>
Walnuts<br>
Dates<br>
Pistachio

</td>

<td>

Alcohol<br>
Processed Foods<br>
Fast Foods<br>
Oily Foods<br>
Cool Drinks

</td>

</tr>

</table>

`;

}


else{

result.innerHTML = "Please Select Patient";

}

}
