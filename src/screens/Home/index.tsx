import { useState } from 'react';

import { TextInput, Image, View, Text, TouchableOpacity, FlatList, Alert} from 'react-native';

import Plus from '../../assets/plus.png';

import Task from '../../components/Task';

import EmptyData from '../../components/EmptyData';

import { TaskProps } from '../../components/Task/types';

import { Styles } from './styles';



export default function Home() {

  const [tasks, setTasks] = useState<TaskProps[]>([]);

  const [tasksOnlyDone, setTasksOnlyDone] = useState<TaskProps[]>([]);

  const [onlyDone, setOnlyDone] = useState(false)

  const [taskDescription, setTaskDescription] = useState('');

  const [taskDoneCount, setTaskDoneCount] = useState(0);

  const handleAddTask = () => {
    const newTask = {
      id:new Date().getTime().toString(),
      concluded:false,
      description:taskDescription
    }

    setTasks(prevState => [...prevState, newTask]);
    setTaskDescription('')
  }

  const handleToggleTaskDone = (id:string) => {
    
    const updatedTasks = tasks.map(task => (
      task.id === id ? {...task, concluded: !task.concluded}: task
    ));   
   
    setTasks(updatedTasks);
    
    const tasksDone = updatedTasks.filter(task => task.concluded === true);
    setTasksOnlyDone(tasksDone);
    setTaskDoneCount(tasksDone.length); 
  }

  const handleDelete = (id:string) => {

    Alert.alert('Deletar', 'Tem certeza que deseja deletar esta tarefa?',[
      {
        text:'Sim',
        onPress:() => {
          const updatedTasks = tasks.filter(task => task.id !== id);
          setTasks(updatedTasks);
          setTaskDoneCount(updatedTasks.filter(task => task.concluded === true).length); 
        }
      },
      {
        text:'Não',
        style:'cancel'
      }]
    )    
  }

  const handleTaskFilterDone = () => {    
    setTasksOnlyDone(tasks.filter(task => task.concluded === true));
    setOnlyDone(true);
  }
  

  return (
    <View style={Styles.container}>
        <View style={Styles.containerAction}>
            <TextInput
                value={taskDescription}
                style={Styles.inputText}
                placeholder='Adicione uma tarefa'
                placeholderTextColor={"#808080"}
                onChangeText={text => setTaskDescription(text)}
                />
            <TouchableOpacity style={Styles.buttonAdd} onPress={handleAddTask}>
              <Image source={Plus} height={32} width={132} />
            </TouchableOpacity>
        </View>
        <View style={Styles.containerFilters}>
            <TouchableOpacity style={Styles.containerLabel} onPress={() => setOnlyDone(false)}>
              <Text style={Styles.labelCreated}>Criadas</Text>
              <View style={Styles.countTask}>
                <Text style={Styles.labelCount}>{tasks.length}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.containerLabel} onPress={handleTaskFilterDone}>
              <Text style={Styles.labelDone}>Concluídas</Text>
              <View style={Styles.countTask}>
                <Text style={Styles.labelCount}>{taskDoneCount}</Text>
              </View>
            </TouchableOpacity>
        </View>

        <FlatList
          style={Styles.list}
          data={onlyDone ? tasksOnlyDone : tasks }
          renderItem={({item}) => <Task 
                  item={item} 
                  handleToggleTaskDone={()=>handleToggleTaskDone(item.id)} 
                  handleDelete={()=>handleDelete(item.id)} 
          />}
          keyExtractor={item => item.id}
          ListEmptyComponent={<EmptyData 
                                item={{
                                  title: onlyDone ? 'Você ainda não tem tarefas concluidas' : 'Você ainda não tem tarefas cadastradas',
                                  subtitle:'Crie tarefas e organize seus itens a fazer'
                                }}/>}
        />
    </View>
  );
}


