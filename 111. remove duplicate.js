const id = [10, 20, 30, 10, 40, 20, 30, 50, 20, 20];
const newId = [];
for (let i = 0; i < id.length; i++) {
    const element = id[i];
    if(newId.indexOf(element)== -1){
        newId.push(id[i]);
    }
}