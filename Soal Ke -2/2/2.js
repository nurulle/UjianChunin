let data = {
    id : 1,
    name : "Leanne Graham",
    username : "Bret",
    email : " Sincere@april.biz",
    addres:
    {
      street : "Kulas Light",
      suite : " Apt. 556",
      city : "Gwenborough",
      zipcode : "92998-3874",
    },
    phone : "1-770-736- 8031 x56442",
    website : "hildegard.org",
}


  let dataNew = { ...data };
  dataNew.name = "Nurul Chotimah";
  dataNew.email = "Chotimahnurul23@gmail.com";
  dataNew.hoby = "nghalu"
  console.log(dataNew)

//destructring
  const { street, city } = data.addres;
  console.log(street, city);
  
  