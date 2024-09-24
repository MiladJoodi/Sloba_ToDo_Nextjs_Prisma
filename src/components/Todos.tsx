import prisma from "@/utils/db";


const Todos = async () => {

    prisma.task.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });

    return (
        <div>
            Todos
        </div>
    );
}

export default Todos;