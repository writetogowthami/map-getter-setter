class OurCache{
    constructor(size){
        this._size = size ;
        this._myMap = new Map();
    }
    put = (key, value) => {
        if(this._myMap.size < this._size) {
            this._myMap.set(key, value);
            console.log(this._myMap.keys());
            return this._myMap; //?
        }
        else if (this._myMap.size >= this._size){
            let key_entries = this._myMap.keys();
            for(var ele of key_entries){ 
                this._myMap.delete(ele); //delete first key say array[0]
                break;
            }
            //delete first key and add new key value in the end
            this._myMap.set(key, value); //insert new element
            console.log(this._myMap.keys());
            return this._myMap; //?
        }
    }
    get = (key) => {  
      if(this._myMap.has(key)){ //check if key exists or not
        //delete the key and add it back
        let get_entries = this._myMap.entries();
        //delete first key and add new key value in the end
        for(var ele of get_entries){
            this._myMap.delete(key); //delete key that is accessed
            this._myMap.set(ele[0], ele[1]); //insert deleted element
            break;
        }
        console.log(this._myMap.keys());
        return this._myMap.size;
      }
      else return null;
    }
}

const cache = new OurCache(3);

cache.put("a", 1); // a
console.log(cache);

cache.put("b", 2); // a, b
console.log(cache);

cache.put("c", 3); // a, b, c
console.log(cache);

console.log(cache.get("a"));    // returns 2 and moves priority of “a” // b,c,a

cache.put("d", 4)  // evicts “b” key // b,c,a,d
console.log(cache);

console.log(cache.get("b"))   // returns null