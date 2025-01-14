import { User } from "../../types/User";

export type AuthContextType = {
    user: User | null;
    signIn: (email: string, password: string) => Promise<boolean>;
    signOut:  () => void;
}