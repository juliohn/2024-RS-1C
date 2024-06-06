import {  Image, View, Text, TouchableOpacity} from 'react-native';

import Trash from '../../assets/trash.png';

import Check from '../../assets/check.png';

import { Styles } from './styles';

import { ItemTaskProps } from './types';

export default function Task( {item, handleToggleTaskDone, handleDelete} : ItemTaskProps) {
  
  return (
    <View style={Styles.container}>
        <TouchableOpacity style={Styles.containerActionDone} onPress={handleToggleTaskDone}>
          
            <View style={Styles.containerActionCheck}>
                <View style={Styles.containerActionCheckBorder}>
                  {item.concluded && (
                    <Image source={Check} height={32} width={32} />
                  )}
                </View>
            </View>
       
            <View style={Styles.containerDescription}> 
                 <Text style={[Styles.description,item.concluded ? Styles.containerDone:{}]} numberOfLines={2}>{item.description}</Text> 
            </View>

        </TouchableOpacity>
        
        <TouchableOpacity style={Styles.containerActionDelete} onPress={handleDelete}>
            <Image source={Trash} height={32} width={132} />
        </TouchableOpacity>
    </View>
  );
}


