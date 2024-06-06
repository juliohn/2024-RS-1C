import {  Image, View, Text} from 'react-native';

import NoData from '../../assets/clipboard.png';

import { Styles } from './styles';

import { ItemEmptyDataProps } from './types';

export default function EmptyData( {item} : ItemEmptyDataProps) {
  
  return (
    <View style={Styles.container}>
        <Image source={NoData} height={32} width={132} />

        <View style={Styles.containerMessages}>
            <Text style={Styles.title} numberOfLines={2}>{item.title}</Text> 
            <Text style={Styles.subtitleTitle} numberOfLines={2}>{item.subtitle}</Text> 
        </View>
    </View>
  );
}


