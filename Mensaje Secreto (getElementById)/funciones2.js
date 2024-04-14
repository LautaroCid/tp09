function myFuncion3(){
	n=(document.getElementById("m").value);
	c=1,a=[],s=[],j=0,d=0;
	for(i=0;i<n.length;i++){

			while(c==0){
				if(n.charAt(i)==')'){
					c=1;
					var rev=a.reverse();

					for(e=0;e<j;e++){
						s[d]=a[e];
						d=d+1;
					}
					a.length=0;
				}else{
					a[j]=n.charAt(i);
					j=j+1;
				}
				i=i+1;
		}

		if(n.charAt(i)=='('){
			d=i;
			c=0;
			j=0;
		}

		if(c==1){
			s[i]=n.charAt(i);
		}
	}
s = s.filter(Boolean);
let str=s.join('');

alert(str)
}
