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
export interface IBook{
    $key?:string;
    bookTitle: string;
    bookSubTitle:string;
    bookAuthor1:string;
    bookAuthor2:string;
    bookAuthor3:string;
    bookPublisher: string;
    bookPrice:string;
    bookRadioGenre:string;
}