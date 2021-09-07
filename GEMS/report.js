
let receivedData=[];
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

  messageRef.on('value',function(snapshot){
       snapshot.forEach(childSnapshot => {

        let data=childSnapshot.val();
receivedData.push(data);
console.log(receivedData);

        
          
      });
      bindData();
  })

  function bindData(){
      let count=0;
      count=count+1;
      let dataLength=receivedData.length;
      let printData='';
      for(let index=0;index<dataLength;index++){
        printData+=`<li class="list-group-item"><b>Gate Pass.No:</b>${count++} </li>`
          printData+=`<li class="list-group-item"><b>SupplierName:</b> ${receivedData[index].supplierName}</li>`
          printData+=`<li class="list-group-item"><b>SupplierAddress:</b> ${receivedData[index].supplierAddress}</li>`
          printData+=`<li class="list-group-item"><b>Pincode:</b> ${receivedData[index].pincode}</li>`
          printData+=`<li class="list-group-item"><b>SupplierContact: </b>${receivedData[index].supplierContact}</li>`
          printData+=`<li class="list-group-item"><b>SupplierEmail: </b>${receivedData[index].supplierEmail}</li>`
          printData+=`<li class="list-group-item"><b>SupplierRep:</b> ${receivedData[index].supplierRep}</li>`
          printData+=`<li class="list-group-item"><b>Receiver:</b> ${receivedData[index].receiver}</li>`
          printData+=`<li class="list-group-item"><b>OrderDate:</b> ${receivedData[index].orderDate}</li>`
          printData+=`<li class="list-group-item"><b>Delivery Challan No:</b> ${receivedData[index].delivery}</li>`
          printData+=`<li class="list-group-item"><b>No.of items:</b> ${receivedData[index].items}</li>`
          printData+=`<li class="list-group-item"><b>Weight:</b> ${receivedData[index].weight}</li>`
          printData+=`<li class="list-group-item"><b>Bill No:</b> ${receivedData[index].billNo}</li>`
          printData+=`<li class="list-group-item"><b>Amount:</b> ${receivedData[index].amount}</li>`
          printData+=`<li class="list-group-item"><button onClick="print()">Print</button></li>`

      }
      document.getElementById('report').innerHTML=printData;
  }