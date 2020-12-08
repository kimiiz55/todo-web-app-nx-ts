
export interface ITask {
  title: string
  dueDate: Date
  isCompleted: boolean
}

export interface ICreateTaskDto {
  title: string;
  dueDate: Date
}