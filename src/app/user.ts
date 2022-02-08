export class User {

    id:number=0;
    firstname:string='';
    surname:string='';
    city:string='';
    pincode:number=0;
    salary:number=0.0;
    dob:Date=new Date();
    doj:Date=new Date();
    deleted:boolean=false;

    public User(){}
}
