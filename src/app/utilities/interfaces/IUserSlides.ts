export enum IAccountType {
    "Regular Account",
    "Family Account"
}

export interface ISlideQuestions {
    name: string | undefined;
    accountType: IAccountType | undefined;
}

export interface IUserSlides{
    userInfo:ISlideQuestions | undefined,
    setUserInfo:(val:ISlideQuestions)=>void;
}