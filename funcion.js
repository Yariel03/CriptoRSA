function proceso(n)
{	var div=document.getElementById("lblr");
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
	document.write("<br>=="+"==<br> ");

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
		for(j=3;j<n;j++)
		{
			m=primos[i]*primos[j];
			if(m===n)
			{
				document.write(" *Es Primo i= "+primos[i]);
				document.write(" *Es Primo i= "+primos[j]);
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

	var div=document.getElementById("lblr");
	if(band==2)
	{


	/*	div.textContent="es primo";
	*/

	}
	else
	{
		proceso(num1);

	}

	band=0;

}


