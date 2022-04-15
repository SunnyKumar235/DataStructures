class HashTable {
    constructor(size){
        this.data=new Array(size);
    }
    _hash(key){
        let hash = 0;
        for(var i=0;i<key.length;i++){
            hash =(hash+key.charCodeAt(i)*i)%this.data.length;
        }
        return hash;
    }
    set(key,value){
        let address = this._hash(key);
        if(!this.data[address]){
            this.data[address]=[]
        }
        this.data[address].push([key,value]);
        return true;
    }
    get(key){
        let address = this._hash(key);
        let currentBucket = this.data[address];
        
        if(currentBucket){
            for(var i=0;i<currentBucket.length;i++){
                if(currentBucket[i][0]===key){
                   // console.log(currentBucket[i][1]);
                    return currentBucket[i][1];
                }
            }

        }
        return undefined;
    }
    key(){
        let keyArray = [];
        for(var i =0;i<this.data.length;i++){
            if(this.data[i]){
                keyArray.push(this.data[i][0][0]);
            }
        }
        return keyArray;
    }
    
}

let myhash = new HashTable(500);
myhash.set("greapes",100);
myhash.set("Apples",200);
console.log(myhash.get("Apples"));
console.log(myhash.key());
