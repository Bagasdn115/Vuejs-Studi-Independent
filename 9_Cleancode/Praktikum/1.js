class user {  // Jika satu tipe data varibel yang sama seharusnya dijadikan satu line
    var id;   // Penamaan variabel seharusnya lebih detail supaya lebih mudah dipahami oleh programmer
    var username;
    var password;
  }
  
  class userservice { // Penulisan class maupun function diawali dengan huruf kapital
    user[] users = []; // Penulisan tipe data dan variabel salah
    
    user[] getallusers(){ // Pendeklarasian function salah
      return users;
    }
  
  user getuserbyid(userid){ // Pendeklarasian function salah
    return users.filter(userid);
  }
}
