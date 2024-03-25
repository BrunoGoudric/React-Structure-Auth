export type HeaderType = "Login" | "Register" | "ForgotPassword";

export interface LayoutProps {
    page: HeaderType;
    title: string;
    urlImg: string;
}

export type HeaderLayout = LayoutProps[]