//Вам необхідно написати додаток Todo list, використовуючи синтаксис класів. 
//У списку нотаток повинні бути методи для додавання нової нотатки, видалення, 
//редагування та отримання повної інформації про нотатку, 
//а так само отримання списку всіх нотаток. Крім цього, 
//у користувача має бути можливість позначити замітку, як виконану, 
//і отримання інформації про те, скільки всього нотаток у списку 
//і скільки залишилося невиконань. Нотатки не повинні бути порожніми.
//Вам необхідно розширити можливості вашого списку і додати методи для пошуку замітки на ім'я,
// а також методи для сортування нотаток за статусом (спочатку виконані і навпаки).

class ToDoList {

    constructor() {
      this.array = []; 
  }

  doList (name, task, date){
    
    const listObj = {};
      listObj.name = name
      listObj.task = task;
      listObj.date = date
      this.array.push(listObj)
    
  }

  delTask (info) {
      let needTask = this.array.find(a => a.task == info)
      let needDate = this.array.find(a => a.date == info)
         
    for(let i = 0; i < this.array.length; i++){
      if(this.array[i] == needTask || this.array[i] == needDate){
      this.array.splice(i, 1)
   }}
  }

 redact (a, info) {
    this.array.forEach(
      function(el){
        if(el.name == a){
          el.task = info
        }
      }
    )
  }

  done(c, res){
    this.array.forEach(
      function(el){
        if(el.name == c){
          if(res == 'done'){
            el.result = 'done'
          }
          if(res == 'not done'){
            el.result = 'must do'
        }}
      }
    )
  }

  getInfo(b) {
    this.array.forEach(
      function(el){
        let date = el.date
        if(el.name == b){
          console.log(`${b} task is ${el.task}, date is ${date}, ${el.result}`)
        }
      }
    )
  }

  amountlist (){
    let count = 0;
    this.array.forEach(
      function(el){
        if(el.result == 'must do'){
          count++
        }
      }
    ) 
     console.log(`Кількість нотаток ${this.array.length}, з них невиконаних ${count}`)
  }

  findname(d){
    this.array.forEach(
      function(el){
  
        if(el.name == d){
          console.log(el)
        }
      }
    )
  }

    sortRes(){
    this.array.sort(function (el) {
      if (el.result == 'must do') {
        return -1;
      }
      if (el.result == 'done') {
        return 1;
      }
      return 0;
    });
    console.log(this.array)
  }
  
}

const list = new ToDoList()


console.log(list)
list.doList('first','some1', '27.01.2024') //додала 1
list.doList('second','some2', '27.02.2024') //додала 2
list.doList('third','some3', '24.02.2024') //додала 3
list.doList('fourth', 'some4', '24.12.2023') //додала 4
list.doList('fives','some5', '24.02.2024') //додала 5
list.doList('six','some6', '24.03.2024') //додала 6

list.delTask('some3') //видалила 3
list.delTask('24.02.2024') //видалила 5

list.redact('six', 'some100')



list.done('first', 'done')
list.done('second', 'not done')
list.done('fourth', 'done')
list.done('six', 'done')

list.getInfo('six')

list.amountlist()

list.findname('first')

list.sortRes()








