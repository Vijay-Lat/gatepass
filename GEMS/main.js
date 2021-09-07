const firebaseConfig = {
    apiKey: "AIzaSyBAemtm0HMcee9w6M_JdtqRzDnH3yeitP4",
    authDomain: "gateway-f4f2a.firebaseapp.com",
    databaseURL: "https://gateway-f4f2a-default-rtdb.firebaseio.com",
    projectId: "gateway-f4f2a",
    storageBucket: "gateway-f4f2a.appspot.com",
    messagingSenderId: "329212558698",
    appId: "1:329212558698:web:6e8c5c0076cf8f13ae3913",
    measurementId: "G-CQKYHF8EGV"
  };
  firebase.initializeApp(firebaseConfig);

  let messageRef=firebase.database().ref('entries')
   // form submission
document.getElementById('formSubmit').addEventListener('click', submitForm);

function submitForm(event){
    event.preventDefault();


// assigning function to the input variables
let supplierName=getInputVal('sName');
let supplierAddress=getInputVal('sAddress');
let pincode=getInputVal('pincode');
let supplierContact=getInputVal('sContact');
let supplierEmail=getInputVal('sEmail');
let supplierRep=getInputVal('rep');
let receiver=getInputVal('receiver');
let orderDate=getInputVal('date');
let delivery=getInputVal('delNo');
let items=getInputVal('items');
let weight=getInputVal('weight');
let billNo=getInputVal('billNo');
let amount=getInputVal('amount');

document.getElementById('entry').style.display='block';

setTimeout(function(){document.getElementById('entry').style.display='none';},3000)

saveEntry(supplierName,supplierAddress,pincode,supplierContact,supplierEmail,supplierRep,receiver,orderDate,delivery,items,weight,billNo,amount);

}
// getting form values
function getInputVal(id){
    return document.getElementById(id).value;
}

 function saveEntry(supplierName,supplierAddress,pincode,supplierContact,supplierEmail,supplierRep,receiver,orderDate,delivery,items,weight,billNo,amount){
     let newEntryRef=messageRef.push();
     newEntryRef.set({
         supplierName:supplierName,
         supplierAddress:supplierAddress,
         pincode:pincode,
         supplierContact:supplierContact,
         supplierEmail:supplierEmail,
         supplierRep:supplierRep,
         receiver:receiver,
         orderDate:orderDate,
         delivery:delivery,
         items:items,
         weight:weight,
         billNo:billNo,
         amount:amount
  })
  
 }
 
