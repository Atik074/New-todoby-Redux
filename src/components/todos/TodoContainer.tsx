import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";


const TodoContainer = () => {
    const {todos} = useAppSelector((state)=>state.todos)

    return (
        <div>
            <div className="flex justify-between mb-3">
                <AddTodoModal/>
                <TodoFilter/>
            </div>
             <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px] ">

                <div className="bg-white space-y-3 p-5 w-full h-full rounded-lg">
                  {
                    todos.map((item)=>(
                        <TodoCard
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