//
//function generar(n1)
//{
//	var band=0;
//
//	for(i=1;i<=n1;i++)
//	{
//
//					document.write(i);
//
//	}
//
//}



function primo(n1)
{
	var num1=parseFloat(n1.value);
	var band=0;

	for(i=1;i<=num1;i++)
	{
		if(num1%i==0)
		{
			band++;
		}
	}


	if(band==2)
	{

		var div=document.getElementById("textDiv");
		div.textContent="es primo";
		var text=div.textContent;

	}
	else
	{
			document.frm.txtr.value="no es primo";
	}

	band=0;

}



//
//
//function ver()
//{
//	document.getElementById("ocultar").style.visibility="visible";
//
//
//}



/*function ocultar()
{
	document.getElementById("ocultar").style.display="none";

}*/
