
export interface ITask {
  _id: string
  title: string
  dueDate: Date
  isCompleted: boolean
}

export interface ICreateOrUpdateTaskDto {
  title: string;
  dueDate: Date
}