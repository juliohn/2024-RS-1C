export interface TaskProps {
    id : string,
    concluded: boolean,
    description:string,
  }

  export interface ItemTaskProps {
    item:TaskProps
    handleToggleTaskDone: () => void,
    handleDelete:() => void
  }