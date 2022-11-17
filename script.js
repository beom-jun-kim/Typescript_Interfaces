// type Nicknmae = string
// type healthBar = number 

// type Player = {
//     nicknmae: Nicknmae,
//     healthBar: healthBar
// }

// const nico: Player = {
//     nicknmae: "nico",
//     healthBar: 10
// }

// =================================

/* type */
/* 
    1. 오브젝트 모양을 정해줌
    2. 특정 값들로만 제한 가능
    3. 타입 엘리어스를 만들 수 있다 
    => ex) type a = string
*/

/* interface Helloo = string 사용 X */
/* interface */
/* 
    오로지 오브젝트의 모양을 타입스크립트에게 설명해주기
    위해서만 사용되는 키워드
*/

// type Team = "read" | "blue" | "yellow"
// type Health = 1 | 5 | 10

// type Player = {
//     nickname: string,
//     team: Team,
//     health: Health
// }

// const nico: Player = {
//     nickname: "nico",
//     team: "read",
//     health:10
// }

// =====================================

// interface User {
//     name: string
// }

// interface Player extends User {

// }

// const nico: Player = {
//     name: "nico"
// }

// type User = {
//     name: string
// }

// type Player = User & {

// }

// const nico: Player = {
//     name: "nico"
// }

// =====================================

// interface USer {
//     name: string
// }

// interface USer {
//     lastName: string
// }

// interface USer {
//     health: number
// }

// const nico: USer = {
//     name: "d",
//     lastName: "f",
//     health: 10
// }

// type User = {
//     name:string
// }
// type User = {
//     lastName:string
// } = > 합체가 안됨. 인터페이스가 더 나은 합체능력을 가진다


// Static Members
// 클래스에는 static 멤버가 있을 수 있다. 이 멤버는 클래스의 특정 인스턴스와 연결되지 않는다. 클래스 생성자 객체 자체를 통해 액세스할 수 있다. static 멤버는 동일한 public, protected 및 private 과 함께 사용할 수도 있다.
// ```
// class MyClass {
// static x = 0;
// static printX() {
// console.log(MyClass.x);
// }
// }
// console.log(MyClass.x);
// MyClass.printX();
// ``

// Interfaces
// 객체의 모양을 특정해주기 위해 사용한다. 여기서는 firstName 및 lastName 필드가 있는 객체를 설명하는 인터페이스를 사용한다.
// ```
// interface Person {
// firstName: string;
// lastName: string;
// }
// ```
