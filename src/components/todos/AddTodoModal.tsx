
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger, DialogHeader, DialogClose } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { FormEvent, useState } from 'react';
import { useAppDispatch } from '@/redux/hooks';
import { addTodo } from '@/redux/features/todoSlice';






const AddTodoModal = () => {
   const [task , setTask] = useState('')
   const [description , setDescription]  = useState('')
   const dispatch = useAppDispatch()
   
   const randomString = Math.random().toString(36).substring(2,7)

   const onSubmit = (e :FormEvent)=>{
       e.preventDefault()

       const taskDeatails = {
          id:randomString ,
          title:task ,
          description:description
         }

      dispatch(addTodo(taskDeatails))

   }


    return (
            <Dialog>
      <DialogTrigger asChild>
      <Button className="bg-primary-gradient text-xl "> 
            Add Todo </Button>
      </DialogTrigger>

   
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add task</DialogTitle>
          <DialogDescription>
           Edit your profile.Are you want to edit ?
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit}>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task" className="text-right">
             Task
            </Label>
            <Input 
             onBlur={(e)=>setTask(e.target.value)}
              id="task"
              defaultValue=" "
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
             Description
            </Label>
            <Input 
              onBlur={(e)=>setDescription(e.target.value)}
              id="description"
              defaultValue=" "
              className="col-span-3"
            />
          </div>
        </div>
        <div>
            
        </div>
        <div className='flex justify-end'>
        <DialogClose asChild>
          <Button 
          type="submit">Save changes</Button>
        </DialogClose>
        </div>
        </form>
      </DialogContent>
    
    </Dialog>
     
    );
};

export default AddTodoModal;