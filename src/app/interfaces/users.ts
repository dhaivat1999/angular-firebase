export interface IUser{

    $key?:string;
    userFirstName:string;
     userLastName?: string;
    userEmail: string;
    userPhone: number;
    userPassword: string;
    userConfirmPassword: string;
    radioGender:string;
    userBirthDate: string;

}