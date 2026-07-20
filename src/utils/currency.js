export const getCurrencyInfo = () => {
  const getCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };
  
  const langCookie = getCookie('googtrans');
  let lang = 'en';
  if (langCookie) {
    lang = langCookie.split('/').pop();
  }
  
  switch(lang) {
    case 'hi': return { symbol: '₹', rate: 84.5 };
    case 'ha': return { symbol: '₦', rate: 1600 };
    case 'zu': return { symbol: 'R', rate: 18.5 };
    case 'en': 
    default: return { symbol: '$', rate: 1 };
  }
};
