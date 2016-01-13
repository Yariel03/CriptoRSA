function pulsar(e) { 							     /*Alexander Baldeon*/
  tecla = (document.all) ? e.keyCode :e.which;      /*Alexander Baldeon*/
  return (tecla!=13);      /*Alexander Baldeon*/
}      /*Alexander Baldeon*/
     /*Alexander Baldeon*/

function proceso(n)     /*Alexander Baldeon*/
{	var div=document.getElementById("lblr1");     /*Alexander Baldeon*/
	var div=document.getElementById("lblr2");     /*Alexander Baldeon*/
	var band=0;     /*Alexander Baldeon*/
 	var primos=new Array();     /*Alexander Baldeon*/

	for(i=1;i<=n;i++)     /*Alexander Baldeon*/
	{     /*Alexander Baldeon*/
		for(j=1;j<=i;j++)     /*Alexander Baldeon*/
		{     /*Alexander Baldeon*/
     /*Alexander Baldeon*/
			if(i%j===0)     /*Alexander Baldeon*/
			{     /*Alexander Baldeon*/
				band++;     /*Alexander Baldeon*/
			}     /*Alexander Baldeon*/
     /*Alexander Baldeon*/

		}     /*Alexander Baldeon*/

		if(band===2)     /*Alexander Baldeon*/
		{     /*Alexander Baldeon*/


			primos[i]=i;     /*Alexander Baldeon*/


		}     /*Alexander Baldeon*/




		band=0;     /*Alexander Baldeon*/

	}     /*Alexander Baldeon*/
     /*Alexander Baldeon*/
 	var f1;     /*Alexander Baldeon*/
 	var f2;     /*Alexander Baldeon*/
 	var m;     /*Alexander Baldeon*/
 	for(i=2;i<=n;i++)     /*Alexander Baldeon*/
	{     /*Alexander Baldeon*/
		for(j=3;j<     /*Alexander Baldeon*/;j++)     /*Alexander Baldeon*/
		{     /*Alexander Baldeon*/
			m=primos[i]*primos[j];     /*Alexander Baldeon*/
			if(m===n)     /*Alexander Baldeon*/
			{
				div.textContent="Factor N1= "+primos[i]+" ********* "+"Factor N2= "+primos[j];     /*Alexander Baldeon*/


				i=n;     /*Alexander Baldeon*/
				j=n;     /*Alexander Baldeon*/
			}     /*Alexander Baldeon*/
		}     /*Alexander Baldeon*/
	}     /*Alexander Baldeon*/

}     /*Alexander Baldeon*/



function primo(n1)     /*Alexander Baldeon*/
{
	var num1=parseFloat(n1.value);     /*Alexander Baldeon*/
	var band=0;     /*Alexander Baldeon*/

	for(i=1;i<=num1;i++)     /*Alexander Baldeon*/
	{     /*Alexander Baldeon*/
		if((num1%i) === 0)     /*Alexander Baldeon*/
		{     /*Alexander Baldeon*/
			band++;     /*Alexander Baldeon*/
		}     /*Alexander Baldeon*/
	}     /*Alexander Baldeon*/

	var div=document.getElementById("lblr2");     /*Alexander Baldeon*/
	if(band==2)     /*Alexander Baldeon*/
	{     /*Alexander Baldeon*/


		alert("El número ingresado es primo intente nuevamente");     /*Alexander Baldeon*/



	}     /*Alexander Baldeon*/
	else     /*Alexander Baldeon*/
	{     /*Alexander Baldeon*/

		if(num1 <9)     /*Alexander Baldeon*/
		{
		alert("El número debe ser mayor o igual a 9");     /*Alexander Baldeon*/

		}else{     /*Alexander Baldeon*/

		proceso(num1);     /*Alexander Baldeon*/
		}     /*Alexander Baldeon*/

	}     /*Alexander Baldeon*/
     /*Alexander Baldeon*/
	band=0;     /*Alexander Baldeon*/

}     /*Alexander Baldeon*/


