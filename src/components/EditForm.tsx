interface Task {
  task: {
    id: string;
    content: string;
    createdAt: string;
    completed: boolean;
  };
}

const EditForm = ({ task }: Task) => {
  console.log(task);

  return <div>Enter</div>;
};

export default EditForm;
