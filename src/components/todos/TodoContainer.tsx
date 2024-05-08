import { useGetTodosQuery } from "@/redux/api/api";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useState } from "react";


const TodoContainer = () => {
    const [priority , setPriority] = useState('')
 const {data :todos, isError , isLoading} = useGetTodosQuery(priority)

      console.log(todos)
    if(isLoading){
        <p>Loading</p>
    }
    if(isError){
        <p>Error</p>
    }
    return (
        <div>
            <div className="flex justify-between mb-3">
                <AddTodoModal/>
                <TodoFilter 
                priority={priority}  setPriority={setPriority}
                />
            </div>
             <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] ">

                <div className="bg-white space-y-3 p-5 w-full h-full rounded-lg">
                  {
                    todos?.data?.map((item)=>(
                        <TodoCard
                        key={item._id}
                         {...item}>
                            
                         </TodoCard>
                    ))
                  }
                </div>
               {/* <div className="bg-white p-2 flex justify-center items-center text-xl rounded-md">
                <p>There is no task pending</p>
               </div> */}
            </div> 
          
        </div>
    );
};

export default TodoContainer;