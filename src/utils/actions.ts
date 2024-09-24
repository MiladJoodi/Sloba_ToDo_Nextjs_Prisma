"use server";

import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";

// Create
export const createTask = async (formData: FormData): Promise<void> => {
  const content: string | null = formData.get("content") as string | null;

  if (content) {
    await prisma.task.create({
      data: {
        content,
      },
    });
  }

  revalidatePath("/todo-list");
};

// Get
export const getAllTasks = async () => {
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

// Delete
export const deleteTask = async (formData: FormData): Promise<void> => {
    const id = formData.get("id") as string | null;
  
    if (!id) {
      throw new Error("Task ID is required");
    }
  
    await prisma.task.delete({
      where: { id },
    });
  
    revalidatePath("/todo-list");
  };

  // Update
  export const getTask = async (id:any)=> {
    return prisma.task.findUnique({
      where: {
        id
      }
    })
  }