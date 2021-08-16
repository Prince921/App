import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Forgot from '../screens/Forgot';
import Home from '../screens/Home';
import Account from '../screens/Account';
import EditProfile from '../screens/EditProfile';
import Profile from '../screens/Profile';
import BuyCredit from '../screens/BuyCredit';
import Leads from '../screens/Leads';
import AgentProfile from '../screens/AgentProfile';
import FindAgent from '../screens/FindAgent';
import PostLead from '../screens/PostLead';
import CounterOffer from '../screens/CounterOffer';
import AllLead from '../screens/AllLead';
import SingleLead from '../screens/SingleLead';
import FAQ from '../screens/FAQ';
import Affiliate from '../screens/Affiliate';
import GetLoan from '../screens/GetLoan';
import Register2 from '../screens/Register2';
import Register3 from '../screens/Register3';
import FAQ1 from '../screens/FAQ1';
import LoanCalculator from '../screens/LoanCalculator';
import Wallet from '../screens/Wallet';
import Wallet1 from '../screens/Wallet1';
import FAQ2 from '../screens/FAQ2';
import FAQ3 from '../screens/FAQ3';
import FAQ4 from '../screens/FAQ4';
import AllBlog from '../screens/AllBlog';
import SingleBlog from '../screens/SingleBlog';
import Otp from '../screens/Otp';
import ResetPassword from '../screens/ResetPassword';
import About from '../screens/About';
import Policy from '../screens/Policy';
import Terms from '../screens/Terms';
const stackNavigatorOptions = {
    headerShown:false
}
const AppNavigator = createStackNavigator({
    Login:{screen:Login},
    Register:{screen:Register},
    Forgot:{screen:Forgot},
    Home:{screen:Home},
    Account:{screen:Account},
    EditProfile:{screen:EditProfile},
    Profile:{screen:Profile},
    BuyCredit:{screen:BuyCredit},
    Leads:{screen:Leads},
    AgentProfile:{screen:AgentProfile},
    FindAgent:{screen:FindAgent},
    PostLead:{screen:PostLead},
    CounterOffer:{screen:CounterOffer},
    AllLead:{screen:AllLead},
    SingleLead:{screen:SingleLead},
    FAQ:{screen:FAQ},
    GetLoan:{screen:GetLoan},
    Register2:{screen:Register2},
    Register3:{screen:Register3},
    FAQ1:{screen:FAQ1},
    LoanCalculator:{screen:LoanCalculator},
    Affiliate:{screen:Affiliate},
    Wallet:{screen:Wallet},
    Wallet1:{screen:Wallet1},
    FAQ2:{screen:FAQ2},
    FAQ3:{screen:FAQ3},
    FAQ4:{screen:FAQ4},
    AllBlog:{screen:AllBlog},
    SingleBlog:{screen:SingleBlog},
    Otp:{screen:Otp},
    ResetPassword:{screen:ResetPassword},
    About:{screen:About},
    Terms:{screen:Terms},
    Policy:{screen:Policy},
},
{
    defaultNavigationOptions : stackNavigatorOptions
}
);
export default createAppContainer(AppNavigator);
