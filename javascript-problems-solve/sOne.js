function sendNotification(email) {
    if(!email.includes('@')){
        return "Invalid Email";
    }
    let send = email.split('@');
    let userName = send[0];
    let domainName = send[1];
    return userName + "sent you an email form" + domainName;
}
console.log(sendNotification('zihad@gmail.com'));
console.log(sendNotification('farhan34@yahoo.com'));
console.log(sendNotification('nadim.naem5@outlook.com'));
console.log(sendNotification('fahim234.hotmail.com'));
console.log(sendNotification('sadia8icloud.com'));

