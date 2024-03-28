function otpGenerater(digits){

    let otp='';
    for(let i=0;i<digits;i++){
        otp+= Math.floor(Math.random()*10).toString();
    }
    return otp;
}
console.log(otpGenerater(6));