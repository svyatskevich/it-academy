// 3. Напишите анотации типов к этому классу.

class ObjectManipulator<T> {
  constructor(protected obj: T) {}

  public set<K extends keyof T, V>(key: K, value: V): ObjectManipulator<T> {
      return new ObjectManipulator<T>({...this.obj, [key]: value});
  }

  public get<K extends keyof T>(key: K): T[K] {
      return this.obj[key];
  }

  public delete<K extends keyof T>(key: K): ObjectManipulator<T> {
      const newObj = {...this.obj};
      delete newObj[key];
      return new ObjectManipulator(newObj);
  }

  public getObject(): T {
      return this.obj;
  }
}



// example
const user1 = { name: "Ivan", lastName : "Ivanov", age: 25 };
const manipulator = new ObjectManipulator(user1);

// get
console.log(manipulator.get("name")); 

// set
const updatedUser1 = manipulator.set("age", user1.age + 1); 
console.log(updatedUser1.getObject()); 

// delete
const removeForUser1 = updatedUser1.delete("lastName"); 
console.log(removeForUser1.getObject());