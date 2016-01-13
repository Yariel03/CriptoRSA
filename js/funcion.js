function pulsar(e) {
  tecla = (document.all) ? e.keyCode :e.which;
  return (tecla!=13);
}


function proceso(n)
{
	var div=document.getElementById("lblr2");
	var band=0;
 	var primos=new Array();

	for(i=1;i<=n;i++)
	{
		for(j=1;j<=i;j++)
		{

			if(i%j===0)
			{
				band++;
			}


		}

		if(band===2)
		{


			primos[i]=i;


		}




		band=0;

	}

 	var f1;
 	var f2;
 	var m;
 	for(i=2;i<=n;i++)
	{
		for(j=2;j<n     ;j++)
		{
			m=primos[i]*primos[j];
			if(m===n)
			{
				div.textContent="Factor N1= "+primos[i]+" ********* "+"Factor N2= "+primos[j];


				i=n;
				j=n;
			}
		}
	}

}



function primo(n1)
{
	var num1=parseFloat(n1.value);
	var band=0;

	for(i=1;i<=num1;i++)
	{
		if((num1%i) === 0)
		{
			band++;
		}
	}

	var div=document.getElementById("lblr2");
	if(band==2)
	{


		alert("El número ingresado es primo intente nuevamente");



	}
	else
	{

		if((num1) <2 )
		{
		alert("El rango es de 2 a 10000");

		}

		if((num1) >10000 )
		{
		alert("El rango es de 9 a 10000");

		}
		else
		{

		proceso(num1);
		}

	}

	band=0;

}


