export interface IClass {
    _id: string;
    class: number;
    __v: number;
}

export interface ISubject {
    _id: string;
    subject: string;
    __v: number;

}


export interface IStudent {
    _id: string;
    name: string;
    class: IClass;
    roll: number;
    dob: Date;
    father_name: string;
    mother_name: string;
    aadhar: number;
    __v: number ;

}

export interface ITeacher {
    class: IClass[];
    _id: string;
    name: string;
    subject: ISubject;
    email: string;
    phone: number;
    __v: number;

}

export interface IMark {
   _id: string;
    name: IStudent;
    class: IClass;
    telugu: number;
    hindi: number;
    english: number;
    maths: number;
    natural_science: number;
    physics: number;
    social: number;
    __v: number;

}


export interface ICDetails {
   student: IStudent[];
   teacher: ITeacher[];
   marks: IMark[];
}

export interface ISdetails {
    teacher: ITeacher[];
}


