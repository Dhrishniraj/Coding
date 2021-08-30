menu_list_array = ["Chicken Tandoori", "Deluxe Veggie Pizza", "Paneer Tikka Pizza", "Veg Extravaganza Pizza", "Veg Margherita Pizza", "Veg Supreme Pizza", "Mexican Delight Pizza", "Spicy Treat Pizza", "Cheese Burst Pizza", "Classic Margherita Pizza", "Char Grilled Pizza"];
function getmenu(){
var htmldata="<h1>Menu</h1>"
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata + menu_list_array[i] + '<br>'
            document.getElementById("display_menu").innerHTML = htmldata; 
        }
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
        htmldata=""
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+menu_list_array[i]+'<br>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
    document.getElementById("menu_list").innerHTML="Show Updated Menu";
}