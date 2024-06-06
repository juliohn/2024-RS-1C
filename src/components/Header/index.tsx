import { Image, View } from 'react-native';
import Logo from '../../assets/logo.png';

import { Styles } from './styles';

export default function App() {
  return (
    <View style={Styles.container}>
        <Image source={Logo} height={32} width={132} />
    </View>
  );
}


