import { Provider } from 'react-redux';
import Home from './Home'
import store from '../../lib/redux';

const HomeWrapper = () => {
    return (
        <Provider store={store}>
            <Home/>
        </Provider>
    )
    
}

export default HomeWrapper;