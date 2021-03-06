import { LoginState } from 'app/pages/LoginPage/slice/types';
import { SignUpState } from 'app/pages/SignUpPage/slice/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  login?: LoginState;
  signUp?: SignUpState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
