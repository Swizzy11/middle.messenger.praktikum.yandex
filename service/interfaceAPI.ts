

export interface Signin {
    login: string,
    password:string
}

export interface Signup {
    first_name: string | null;
    second_name: string | null;
    login: string | null;
    email: string | null;
    password: string | null;
    phone: string | null;
}

export interface UserInfo {
    id: number | null;
    avatar: string | null;
    first_name: string ;
    second_name: string | null;
    login: string | null;
    email: string | null;
    password: string | null;
    phone: string | null;
}

export interface Chat {
    id: number | null;
    title: string | null;
    avatar: string | null;
    name: string | null;
    unread_count: number;
    last_message: Message;
}

export interface Message {
    user: UserInfo;
    time: string;
    text: string;
}


export interface UserProfileUpdate {
    first_name?: string | null;
    second_name?: string | null;
    display_name?: string | null;
    login?: string | null;
    email?: string | null;
    phone?: string | null;
}


export interface PasswordUpdate {
    oldPassword: string | null;
    newPassword: string | null;
}
