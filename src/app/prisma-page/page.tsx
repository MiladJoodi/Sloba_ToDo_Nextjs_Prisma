import prisma from "@/utils/db";

const getAllTasks = async ()=>{
    // await prisma.task.create({
    //     data: {
    //         content: "buy milk"
    //     }
    // });

    // await prisma.task.update({
    //     where: {
    //         id: "2fd43b62-b818-4b08-8324-13da4fe87e5c"
    //     },
    //     data: {
    //         content: 'buy milk completed'
    //     }
    // })

    // await prisma.task.delete({
    //     where: {
    //         id: "b2d65cee-fb84-4a2d-a3d4-2b7634681f7a"
    //     }
    // })

    const allTasks = await prisma.task.findMany();
    return allTasks
}


const PrismaPage = async () => {

    const tasks = await getAllTasks();
    console.log(tasks)

    return (
        <div>
            <h1 className="text-7xl">Tasks</h1>
            {tasks?.map((task)=>(
                <h1 key={task.id} className="text-xl py-2">{task.content}</h1>
            ))}
        </div>
    );
}

export default PrismaPage;