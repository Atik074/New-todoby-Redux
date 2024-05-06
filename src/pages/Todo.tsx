import TodoContainer from "@/components/todos/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
    return (
        <Container>
            <h2  className="text-3xl font-semibold my-10 text-center">My Todos</h2>
          <TodoContainer/>
        </Container>
    );
};

export default Todo;