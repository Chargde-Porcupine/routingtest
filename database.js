const fs = require('fs').promises;


//Read
async function readDocument(name){
  const data = await fs.readFile(name + ".json").then(res => {
    return res;
  }).catch(err => console.error("Failed to read"));
  return JSON.parse(await data);
}

//Update
async function updateDocument(name, data){
  const written = await fs.writeFile(name + ".json", JSON.stringify(data)).then(res => {
    return true;
  }).catch(err => {
      console.error("Failed to Write");
      return false;
  });
  return written;

}

//Delete
async function deleteDocument(name){
  const deleted = await fs.unlink(name + ".json").then(res => {return true;}).catch(err => {console.error("Failed to Delete");return false;})
  return deleted;
}

module.exports = {readDocument, updateDocument, deleteDocument};