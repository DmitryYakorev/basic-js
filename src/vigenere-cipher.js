class VigenereCipheringMachine { 
      

    constructor(isDirect = true)
    {
        this.isDirect = isDirect;
    }
  
    encrypt(m, k) {
        if(!m || !k) throw 'argument absent';
        k = k.toUpperCase();
        let temp = m.split('');
        m = m.replace(/[^a-zA-Z]+/g,'').toUpperCase();
 // console.log(m);
        while(k.length < m.length)
        {
            k+=k;
        }
        k = k.substring(0, m.length);
        let Encrypt = k.split('');
        Encrypt = Encrypt.map((e,i) => Encrypt[i] = e.charCodeAt(0)-65);        
        let a=0;
        for(let e of m){
          Encrypt[a] += e.charCodeAt(0)-65;
          if(Encrypt[a] > 25) Encrypt[a] -= 26;
          Encrypt[a] = String.fromCharCode(Encrypt[a] + 65);
          a++;
        }
        let l=0;
        for(let i = 0; i < temp.length; i++){
            if(temp[i].match(/[a-zA-Z]/)) {
                temp[i] = Encrypt[l];
                l++;
            }
        }
        if(!this.isDirect) temp.reverse();
        return temp.join('');
    }
  
    decrypt(en, k) {
        if(!en || !k) throw 'argument absent';
        let temp = en.split('');
        en = en.replace(/[^a-zA-Z]+/g,'').toUpperCase();
        k = k.toUpperCase();
        while(k.length < en.length)
        {
            k+=k;
        }        
        k = k.substring(0, en.length);
        let m = k.split('');
        m = m.map((k,i) => m[i]=k.charCodeAt(0)-65);
        let i=0;
   //     console.log(temp,m);
        for(let el of en){
          m[i] = el.charCodeAt(0)-65 - m[i];
          if(m[i]<0) m[i]+=26;
          m[i] = String.fromCharCode(m[i]+65);
          i++;
        }       
     //   console.log(temp,m);
        let s = 0;
        for(let i = 0; i < temp.length; i++){
            if(temp[i].match(/[a-zA-Z]/)) {
                temp[i]=m[s];
                s++;
            }
        }
        if(!this.isDirect) temp.reverse();
        return temp.join('');
    }  
  }
  module.exports = VigenereCipheringMachine;
  