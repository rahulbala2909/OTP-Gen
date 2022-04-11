function generate() {
    let num='1234567890';
    let OTP='';
    for(let i=0;i<4;i++){
        OTP+=num[Math.floor(Math.random()*10)];
    }
    document.getElementById('otp').innerHTML=OTP;
    }