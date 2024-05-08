import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";


const TodoFilter = ({priority , setPriority}) => {


    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Filter</Button>

        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>Set Priority</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup value={priority} onValueChange={setPriority}>
            <DropdownMenuRadioItem value="high">high</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="medium">medium</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="low">low</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
};

export default TodoFilter;