import EditForm from "@/components/EditForm";
import { getTask } from "@/utils/actions";
import Link from "next/link";

interface Task {
    id: string;
    content: string;
    createdAt: string;
    completed: boolean;
}

interface SingleTodoPageProps {
    params: {
        id: string;
    };
}

const SingleTodoPage = async ({params}:SingleTodoPageProps ) => {
    
    const task:any | null = await getTask(params.id)
    return (
        <div className="mb-16">
            <Link href="/todo-list" className="btn btn-accent">
            Back
            </Link>
            <EditForm task={task} />
        </div>
    );
}

export default SingleTodoPage;