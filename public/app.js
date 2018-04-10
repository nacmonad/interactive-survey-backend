const socket = io();

var client = feathers()
    .configure(feathers.socketio(socket));
    
let responseList = []

async function getInitialResponses(client, responseList) {
  responseList = await client.service('responses').find();
  console.log("app instantiated")
  console.log('Available responses', responseList);
  
  processResponses(client,responseList);
  
}

getInitialResponses(client,responseList);


/* Event Listeners */

function processResponses(client, responseList) {
  
  client.service('responses').on('created', response => {
    console.log('Created a new response', response);
    responseList.total += 1;
    responseList.data.push(response)
    console.log('Available responses', responseList)
  });
  
  client.service('responses').on('updated', response => {
    console.log('updated response:', response);
    responseList.data = responseList.data.map(e=>{
      if(response._id===e._id) return response
      return e
    })
    console.log('Available responses', responseList)
  });

  client.service('responses').on('patched', response => {
    console.log('patched response:  ', response);
    responseList.data = responseList.data.map(e=>{
      if(response._id=e._id) return response
      return e
    })
    console.log('Available responses', responseList)
  });
  
  client.service('responses').on('removed', response => {
    console.log('Deleted response', response);
    const index = responseList.data.findIndex(e=>e._id===response._id)
    responseList.data = [].concat(responseList.data.slice(0, index), responseList.data.slice(index+1, responseList.data.length));
    responseList.total -= 1;
    console.log('Available responses', responseList)
  });
}